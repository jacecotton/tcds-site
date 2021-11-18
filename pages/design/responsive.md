<p>
  <strong>Note:</strong> This page is not comprehensive. Responsive design is considered with every aspect of the Design System, from <a href="/design/layout">layout</a> to individual <a href="/components">components</a>. Instead, this page exists to document the overall approach and best practices for creating responsive, cross-platform designs.
</p>

<ol>
  <li>
    <strong>Progressive enhancement</strong>, also known as "mobile-first", is the practice of creating designs for a small viewport first, then scaling up as more screen space becomes available. This contrasts with <em>graceful degradation</em>, where a design "collapses" as the screen becomes smaller. A progressive enhancement approach is preferred, for several reasons:
    <ol>
      <li>Over half of website visitors are on mobile devices — we should meet users where they are, and design for smaller screens first.</li>
      <li>It results in better designs — working with limited screen space helps us to think about our designs with more focus, putting emphasis on content and ease of navigation. We're working from a set of constraints to start, rather than having to break our design from the top down.</li>
    </ol>
  </li>
  <li>
    <strong>Do not assume what devices a user is using.</strong> Use media queries based on the design itself, rather than a standard set of screen sizes. There are virtually limitless options for screen sizes—not just physical dimensions, but pixel density, whether portrait/landscape modes are available, etc. Do not simply responsive design to a fixed set of breakpoints.
  </li>
  <li>
    <strong>Screen size vs. device capability.</strong> Some designs should be based on screen size, while some should be based on device capability, like input mode. On smartphones and tablets, the input mode is touch. This impacts designs because it means users are using their fingers and thus need larger touch targets, and also can't "hover" over an item, so everything needs to be clickable rather than hover-activated. However, we can't rely on screen size to intuit whether someone is using a touch screen—tablets in landscape mode have overlapping screen sizes with smaller laptops, for example. As a result, always consider whether a design difference in CSS should be based on screen size or input mode, and use media queries accordingly.
  </li>
  <li>
    <strong>Screen-based vs. container-based responsiveness.</strong> Unfortunately, web technology is not yet fully equipped to change the design of an element based on its container size. But in general, this approach is favored over screen size-based media queries, because you can never be sure in what context an element may be used (for instance, a card could be placed in a wide main content area, or a narrow sidebar, and need to adjust its design not according to the window, but the container). There are some techniques for doing this, but they have drawbacks:
    <ol>
      <li>Intrinsic responsiveness — clamp(), min(), max(), and minmax() combined with viewport units (vmin, vmax, vh, vw)</li>
      <li>Container query script</li>
    </ol>
  </li>
</ol>

<ul>
  <li>Mobile-first / progressive enhancement</li>
  <li>Media queries vs. pointer queries — before jumping to media queries/sized-based queries, consider first whether the change in design is more a matter of whether a user is using a touch screen vs. mouse (fine/coarse). An iPad may have a wide screen when used in landscape mode, but still doesn't have hover capabilities, and should thus still use mobile interaction patterns.</li>
  <li>Screen-based responsiveness vs. component-based responsiveness (mention script utility used by e.g. Card component)</li>
  <li>Touch target size vs click target size (see size vs pointer).</li>
</ul>