<!--lead
  Animation and other motion can help engage users, create memorable interactions, add expressiveness, and more. However, if used improperly, it can be distracting and annoying, most acutely for users with vestibular or photosensitivity disorders. The Design System provides styles and guidance for use of animation to help.
lead-->

## Best practices

**Be consistent.** Animation can help create a sense of elegance and dimensionality. However, if used inconsistently (in choice of situation or [timing](#timing)), users can be disabused of this notion, and animation can have the opposite effect.

**Be judicious.** Strive for efficiency and credibility. Avoid excessive or meaningless animation, which can be distracting. Avoid overly complex, slow, or lengthy animations, which can be annoying and inhibit a user's productivity.

**Enhancement, not requirement.** Do not require animation for content to be discoverable or accessible. Ensure the design works well before animation, then use animation as a [progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/ "Progressive Enhancement: What It Is, And How To Use It? — Smashing Magazine").

### When to use

**Draw attention and influence focus.** For instance, if a notification is added by clicking a button, use animation to help users notice it (as it may be a distance away from user's current visual focus, such as near the button). This helps address [change blindness](https://www.nngroup.com/articles/change-blindness-definition/ "Change Blindness in UX — Nielsen Norman Group"), where users miss a visual change because it happened too quickly.

**Indicate relationships and provide visual feedback.** Animation can more clearly demonstrate cause and effect, affirming that a change was caused by a particular action (opening/closing, adding/removing, etc.)

**Add expressiveness and interactivity.** Animation can be used to convey brand expression and tone. It can help turn mundane experiences into memorable and engaging ones (just remember to follow [best practices](#best-practices)).

### When not to use

**When users have specifically requested to reduce animation.** Always either disable animations or provide alternatives with reduced motion if a user has set the relevant system preference (see [&sect; Accessibility](#accessibility)).

## Timing
Timing comprises two components: duration and easing. Duration is the total amount of time an animation takes to complete, while easing is the variation in speed of the animation over the course of its duration (expressed as a function). The Design System provides two timing presets, based on the intended purpose and feel of the animation:

**Expressive** animations start fast and end slow, with a lengthy duration. They feel smoother and more relaxed, and are useful for attracting attention and imparting expression.

**Productive** animations start slow and end fast, with a short duration. They feel snappy and responsive, and are useful for animations and transitions that stay out of the way while providing an elegant feel.

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

## Keyframe library

<!--twig
  {{ include("@tcds/components/message/message.html.twig", {
    content: "<b>Coming soon.</b> Check back later for documentation of the library of prebuilt keyframe animations provided by the Design System.",
  }) }}
twig-->

## Accessibility

Always respect a user's "reduced motion" system preference. Note that reduced motion does not mean no motion. Don't outright disable all animations when this preference is set. Rather, provide alternative animations that reduce the intensity, distance, and speed of an animation.

Users affected include those with vestibular disorders and photosensitive conditions such as epilepsy and migraine disorders. Animations that involve large moving objects, intense or rapid changes in light, etc. can trigger nausea, vertigo, headaches, and seizures.

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

Animating properties that trigger recalculations of style, layout, or paint (such as `width`, `font-size`, etc.) are considerably less efficient, and will likely appear choppy or slow. Avoid animating these properties if it can be helped.

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