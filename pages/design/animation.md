<!--
/**
 * @todo Add keyframe library (with interactive demos).
 * @todo Replace AnimateElement with WAAPI-based utility (better composition,
 *   less/no DOM manipulation, etc.)
 */
-->

<!--lede
  Used appropriately, animation engages users, focuses attention, and enriches experiences with expressiveness and memorability. However, it can be distracting and exclusionary if used improperly.
lede-->

## Best practices
**Use with consistency.** Animation can impart a sense of dimensionality unless used inconsistently, in which case it can have the opposite effect.

**Strive for meaningfulness and credibility.** Avoid unnecessary, complex, or lengthy animations, which can be distracting and inhibitive.

**Use as an enhancement, not requirement.** Before using animation, ensure the design is effective and the content is accessible without it. Then, use it as a [progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/ "Progressive Enhancement: What It Is, And How To Use It? — Smashing Magazine").

### When to use
**Draw attention and direct focus.** Motion attracts the eye and can help overcome [change blindness](https://www.nngroup.com/articles/change-blindness-definition/ "Change Blindness in UX — Nielsen Norman Group") and [tunnel vision](https://www.nngroup.com/articles/tunnel-vision-and-selective-attention/) in users.

**Establish and convey relationships.** Animation can hint towards and reinforce cause-and-effect relationships between elements and events.

**Provide rich visual feedback.** Animation can help make interactions more engaging and informative by responding to user behavior with reinforcing visual cues.

### When not to use
**User has indicated reduced motion preference.** Respect user preferences by disabling animations or providing alternatives with reduced activity. See [&sect; Accessibility](#accessibility).

**Lack of contextual meaning or clear purpose.** Do not use animation for the sake of it; rather, use it to meaningfully improve the user experience.

## Timing
Timing consists of **duration** (total time) and **easing** (variation in speed over duration). The Design System provides two timing presets, based on the intended purpose and feel of the animation:

**Expressive** animations feel smooth and relaxed, and are useful for attracting attention and conveying expression and tone.

**Productive** animations feel efficient and reactive, and are useful for motion that stays out of the way while still providing an elegant feel.

<table class="timing-table">
  <thead>
    <tr>
      <th>Timing token</th>
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
      <td>0.1s</td>
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

These values are accessible from the CSS custom properties `--tcds-animation-x-duration` and `--tcds-animation-x-easing`, where `x` is a timing token.

## AnimateElement
`AnimateElement` is a utility function provided by the Design System. It allows you to implement the keyframe library programmatically, which can cover conditions for triggering an animation not provided by utility classes. It also allows you to make animations composable on a single element, unlike utility classes.

The function accepts three parameters: the element to animate, the animation name(s) (string or array), and an options object for controlling the trigger behavior. It returns a promise, allowing a user-defined callback function to run when the animation ends.

By default, it runs only once and only when the element is in the viewport (using the IntersectionObserver API), and undoes all DOM mutations when the animation is complete.

Example:

```js
import { AnimateElement } from "@txch/tcds";

AnimateElement(element, ["fade-in", "zoom-in"], {
  // Configuration here...
}).then(() => {
  // Animation finished.
});
```

## Accessibility
Respect a user's "reduced motion" system preference with the [`prefers-reduced-motion` query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion). Note that *reduced motion* does not mean *no motion*; don't outright disable all animations when this preference is set. Rather, provide alternative animations with reduced intensity, distance, and speed.

Users affected include those with vestibular disorders and photosensitive conditions, such as epilepsy and migraine disorders. Animations that involve large moving objects and intense or rapid changes in light can be disorienting and induce headaches, nausea, and other symptoms.

## Performance
Try to only animate and transition properties related to the **compositing** process of the browser's rendering pipeline. These are the `transform` and `opacity` properties, and are the cheapest to calculate. `transform` allows animation of `scale`, `rotate`, and `translate`, which should be sufficient for most animation needs.

Animating properties related to style, layout, or paint (such as `height`, `font-size`, `margin`, etc.) are much less efficient, and will likely appear choppy or slow. Avoid animating these properties when possible.

<!--
https://www.designsystems.com/5-steps-for-including-motion-design-in-your-system/
https://xd.adobe.com/ideas/wp-content/uploads/2021/06/Animation-in-Design-Systems.pdf
https://www.smashingmagazine.com/2019/02/animation-design-system/
https://www.invisionapp.com/inside-design/motion-design-systems/
https://medium.com/@aviadtend/motion-design-system-practical-guide-8c15599262fe

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