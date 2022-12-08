<!--lede
  Accessibility testing is a required process in the creation of any component, page, or site for Texas Children's. It involves a combination of automated tests and manual checks, sometimes simple and objective, other times nuanced and complicated.
lede-->

<tcds-dialog open id="testing-wip">
  <h1>Notice</h1>

  <p>
    <strong>This page is a work in progress.</strong> Please check back later for updates.
  </p>

  <tcds-button variant="secondary" controls="testing-wip">Okay</tcds-button>
</tcds-dialog>

**Step 1: Automated checklist.** To test for the most basic and easiest to fix problems, start by running a [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) audit, which uses [axe](https://www.deque.com/axe/) criteria. This will provide reports for things like [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) attribute validation, duplicate IDs, color contrast ratios, descending sequence of heading levels, presence of `alt` attributes, and so on.

**Step 2: Keyboard navigation.** Next, run a quick check for keyboard navigation experience using the tab key, shift key, arrow keys, enter key, and escape key. Ensure the tabbing order is logical, that all interactive elements are accessible from the tab key, that users will not get stuck tabbing through too many elements to get to more important content, that controls work as expected (enter activates an option, escape closes dialogs and popups), and so on.

**Step 3: Browser and system checks.** Ensure the web page cooperates well with browser controls and system preferences. The design should still work at 400% zoom level, font sizes should respond appropriately to configuration changes, reduced animation preference should be respected, and so on.

**Step 4: Screen reader.** Test your page with an actual screen reader, like [VoiceOver](https://www.apple.com/accessibility/vision/) on macOS, [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) on Windows, or [JAWS](https://www.freedomscientific.com/products/software/jaws/). Check for things like appropriate verbal descriptions for visual elements (images and icons), a natural and logical reading flow, sufficient punctuation and verbal indicators, interactive state communication, minimal disruptions, no confusing jumps or associations, etc.

**Step 5: Manual technical checks.** Lastly, check for more manual technical checks, like the appropriate use of ARIA patterns for components, contextually appropriate and sufficiently descriptive [`alt` text](/accessibility/writing-accessible-text), sufficiently descriptive links and control labels, etc.