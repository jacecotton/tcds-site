## JavaScript
### State-driven components

Interactive, state-driven components can be managed with the `Component` superclass utility. It allows you to change the state of a component *declaratively*, then have a dedicated function, `sync()`, responsible for any DOM manipulation in response (*imperatively*). The boilerplate is as follows:

```javascript
/* Extend the Component parent class. */
class Example extends Component {
  /* Pass the root component element and its props (options, settings, etc.) */
  constructor(element, props) {
    /* Invoke the constructor of the parent Component class and pass the element
       and props. */
    super(element, props);

    /* Event listeners, data fetching, timers, and consequent changes to
       `this.state` go here. */
  }

  /* Called on every change to `this.state`. */
  sync(newState, prevState) {
    /* DOM manipulation goes here. */
  }
}

/* Get all "Example" component instances. */
document.querySelectorAll("[data-component=Example]").forEach((element) => {
  /* Instantiate the component. */
  new Example(element, {
    /* Options go here. */
  });
});
```

The `element` parameter refers to the root-most HTML element to which the component script applies. The `props` parameter refers to the object passed by the user of a component at time of instantiation. This is then transformed into a `this.props` internal object, which is an immutable reference to the "settings" passed by the user.

The component superclass provides one more important property, `this.state`. This allows you to store data about the current "state" of the `element` and its children. Every time `this.state` is changed, the `sync()` method is called with data about the state that was changed, its new value (`newState`), and its previous value (`prevState`).

As an example, the below script initiates a `count` state to `1`, as passed via the `props` argument at time of instantiation. Then, every time the `element` is clicked, `count` increments by `1`.

```javascript
class Counter extends Component {
  constructor(element, props) {
    // Must pass element and props to parent class via super. This will
    // transform the bare `element` and `props` arguments into properties of the
    // current object (`this`).
    super(element, props);

    // Initialize state `count` from the initial value given from `props`.
    this.state.count = this.props.count;

    // When the element is clicked...
    this.element.addEventListener("click", () => {
      // Increment the count state.
      this.state.count++;
    });
  }

  // This function is called every time `this.state` is changed.
  sync(newState, prevState) {
    // Will log 1 first, then 2 when clicked, then 3, etc.
    console.log(this.state.count);

    // You can do stuff with this.state, newState, and prevState here.
  }
}

// Create a new `Counter` component out of a `#my-element` element.
new Counter(document.getElementById("my-element"), {
  count: 1, // Start count at 1
});
```

### State diffing and batching

Say we have multiple properties belonging to `this.state`. Maybe we want to limit the number of clicks to 5. We don't want operations in `sync()` that are only relevant to changes to `this.state.count` to run when we change `this.state.reachedMaximumClicks`. So, we can check whether a property exists in `newState` before running operations:

```javascript
class Counter extends Component {
  constructor(element, props) {
    super(element, props);

    this.state.count = this.props.count;

    this.element.addEventListener("click", () => {
      if(this.state.count < this.props.maximumClicks) {
        this.state.count++;
      } else {
        this.state.reachedMaximumClicks = true;
      }
    });
  }

  sync(newState, prevState) {
    if("count" in newState) {
      // This will only run if the state property that triggered the current
      // sync call was this.state.count.
    }

    if("reachedMaximumClicks" in newState) {
      // This only runs if this.state.reachedMaximumClicks was changed.
    }
  }
}
```

One important thing to note is state changes are **batched**. This means that if you update multiple `this.state` properties back-to-back, the component utility will only run `sync()` once, passing all the changed state in one bundle (an object) to the `newState` parameter. Under the hood, the utility uses a `requestAnimationFrame` callback to **debounce** the `sync` call.