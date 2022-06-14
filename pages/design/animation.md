<!--lead
  Animation engages users, creates memorable experiences, focuses attention, and adds expressiveness. Use wisely, however: animation can distracting and annoying if used improperly, especially for users with vestibular disorders.
lead-->

## Best practices

**Use with consistency.** Animation can impart a sense of elegance and dimensionality. However, if used inconsistently, this illusion can be shattered and it will have the opposite effect.

**Strive for meaningfulness and credibility.** Avoid unnecessary, complex, or overly lengthy animations, which can be distracting and inhibit a user's productivity.

**Use as an enhancement, not a requirement.** Before using animation, ensure that the design works well and the content is accessible, then use animation as a [progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/ "Progressive Enhancement: What It Is, And How To Use It? — Smashing Magazine").

### When to use

**Draw attention and direct focus.** Motion attracts the eye and can combat phenomena like [change blindness](https://www.nngroup.com/articles/change-blindness-definition/ "Change Blindness in UX — Nielsen Norman Group") and [tunnel vision](https://www.nngroup.com/articles/tunnel-vision-and-selective-attention/).

**Establish relationships and provide visual cues.** Animation can both hint towards and affirm a cause-and-effect relationship between elements. This can help users more efficiently identify and learn design patterns in an interface.

**Add expressiveness and interactivity.** Animation can be used to convey brand expression and tone, turning mundane experiences into memorable and engaging ones (just remember to follow [best practices](#best-practices)).

### When not to use

**A user indicates reduced motion preference.** Always either disable animations or provide alternatives with reduced activity if a user has set the relevant system preference (see [&sect; Accessibility](#accessibility)).

**No contextual meaning or clear purpose.** Do not use animation for the sake of it; rather, use it to accomplish an articulated goal.

## Keyframe library

<!--twig
  {{ include("@tcds/components/message/message.html.twig", {
    content: "<b>Coming soon.</b> Check back later for documentation of the library of prebuilt keyframe animations provided by the Design System.",
  }) }}
twig-->

### Utility classes

Utility classes are available for every keyframe set in the library. The classes consist of a prefix to specify how the animation is triggered, then the name of the animation, separated by a colon. For example, `class="on-enter:fade-in"`.

<table>
  <thead>
    <tr>
      <th>Prefix</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>on-enter:</code></td>
      <td>Plays the animation the first time its element is scrolled into view (or immediately if already in view).</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap">on-every-enter:</code></td>
      <td>Plays the animation every time its element is scrolled out of then back into view.</td>
    </tr>
    <tr>
      <td><code>click:</code></td>
      <td>Plays the animation when the element is tapped or clicked.</td>
    </tr>
    <tr>
      <td><code>hover:</code></td>
      <td>Plays the animation when the user's mouse hovers over the element.</td>
    </tr>
  </tbody>
</table>

Alternatively, an animation can be outright added to an element with no particular trigger by adding a class prefixed with `animation-`, then the animation name (e.g. `class="animation-fade-in"`).

### AnimateElement

`AnimateElement` is a utility function provided by the Design System. It allows you to implement the keyframe library programmatically, which can cover conditions for triggering an animation not provided by utility classes. The other benefit over utility classes is it makes animation composable on a single element. With utility classes, only one animation can be added at a time.

The function accepts three parameters: the element to animate, the animation name(s) (string or array), and an options object for controlling the trigger behavior. It returns a promise, allowing a user-defined callback function to run when the animation ends.

By default, it runs only once and only when the element is in the viewport (using the IntersectionObserver API), and undoes all DOM mutations when the animation is complete.

Example:

```javascript
import AnimateElement from "@tcds/animation/AnimateElement.js";

AnimateElement(element, "fade-in", {
  // Configuration here...
}).then(() => {
  // Do something after the animation is complete.
});
```

## Timing
Timing consists of **duration** (total time) and **easing** (variation in speed over the course of the duration). The Design System provides two timing presets, based on the intended purpose and feel of the animation:

**Expressive** animations feel smooth and relaxed, and are useful for attracting attention and conveying expression and tone.

**Productive** animations feel efficient and reactive, and are useful for motion that stays out of the way while still providing an elegant feel.

<table class="timing-table">
  <thead>
    <tr>
      <th>Timing preset</th>
      <th>Easing function</th>
      <th>Duration</th>
      <th>Example (click to play)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>expressive</code></td>
      <td>
        <svg width="150" height="150" class="timing-graph easing-function" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 130 C20 20, 52 20, 130 20" class="easing-curve" />
        </svg><br>
        cubic-bezier(0, 1, .4, 1)
      </td>
      <td>0.8s</td>
      <td>
        <svg width="200" height="30" class="timing-graph" xmlns="http://www.w3.org/2000/svg">
          <circle r="6" cx="20" cy="15" class="easing-pacer"">
            <animateMotion class="easing-pacer-path" begin="none" dur="0.8s" path="M 0 0 L 160 0" calcMode="spline" keySplines="0 1 .4 1" keyTimes="0 ; 1" fill="freeze" />
          </circle>
        </svg>
      </td>
    </tr>
    <tr>
      <td><code>productive</code></td>
      <td>
        <svg width="150" height="150" class="timing-graph easing-function" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 130 C54.6 130, 75.4 20, 130 20" class="easing-curve" />
        </svg><br>
        ease-in-out
      </td>
      <td>0.15s</td>
      <td>
        <svg width="200" height="30" class="timing-graph" xmlns="http://www.w3.org/2000/svg">
          <circle r="6" cx="20" cy="15" class="easing-pacer"">
            <animateMotion class="easing-pacer-path" begin="none" dur="0.15s" path="M 0 0 L 160 0" calcMode="spline" keySplines=".42 0 .58 1" keyTimes="0 ; 1" fill="freeze" />
          </circle>
        </svg>
      </td>
    </tr>
  </tbody>
</table>

<script>
(function() {
  document.querySelectorAll(".timing-graph").forEach((graph) => {
    const pacerPath = graph.querySelector(".easing-pacer-path");

    if(pacerPath) {
      graph.addEventListener("click", () => {
        pacerPath.beginElement();
      });
    }
  });
}());
</script>

Timing presets can be accessed with the `animation()` custom Sass function, referencing the timing preset token.

<details>
  <summary>Example</summary>
  <div>

```css
/* Input SCSS. */
p {
  transition: all animation("expressive");
}

/* Output CSS. */
p {
  transition: all .8s cubic-bezier(0, 1, .4, 1);
}
```
  </div>
</details>

## Accessibility

Always respect a user's "reduced motion" system preference. Note that reduced motion does not mean no motion. Don't outright disable all animations when this preference is set. Rather, provide alternative animations that reduce the intensity, distance, and speed of an animation.

Users affected include those with vestibular disorders and photosensitive conditions such as epilepsy and migraine disorders. Animations that involve large moving objects and intense or rapid changes in light can trigger nausea, vertigo, headaches, and other symptoms.

The reduced motion preference is an operating system-level setting. It can be detected with the `prefers-reduced-motion: reduce` media query. Alternatively, the Design System provides custom Sass mixins for convenience:

```css
@include motion-ok {
  // Applies only if `prefers-reduced-motion` is not set.
  // (Add animation here.)
}

@include reduced-motion {
  // Applies only if `prefers-reduced-motion` is set to `reduce`.
  // (Reduce or remove animation here.)
}
```

## Performance

To get the most performant, consistently 60 fps animations (in modern browsers), only animate and transition properties calculated in the **compositing** process of a browser's rendering pipeline. These are the `transform` and `opacity` properties, and are the cheapest for browsers to calculate. `transform` allows you to animate an element with `scale`, `rotate`, and `translate`, and should be sufficient for most animation needs.

Animating properties that trigger recalculations of style, layout, or paint (such as `width`, `font-size`, etc.) are considerably less efficient, and will likely appear choppy or slow. Avoid animating these properties when possible.

<!--
Further reading:
https://www.designsystems.com/5-steps-for-including-motion-design-in-your-system/
https://xd.adobe.com/ideas/wp-content/uploads/2021/06/Animation-in-Design-Systems.pdf
https://www.smashingmagazine.com/2019/02/animation-design-system/
https://www.invisionapp.com/inside-design/motion-design-systems/
https://medium.com/@aviadtend/motion-design-system-practical-guide-8c15599262fe

Examples:
https://ant.design/docs/spec/motion
https://material.io/design/motion/understanding-motion.html#principles
https://www.carbondesignsystem.com/guidelines/motion/overview/
https://www.ibm.com/design/language/animation/overview/
https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/animation/
https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/animation/
https://developer.microsoft.com/en-us/fluentui#/styles/web/motion
https://design.gitlab.com/product-foundations/motion
https://www.audi.com/ci/en/guides/user-interface/ui-animation/response-effect.html 
-->