<!--twig
  {{ include("@tch/components/tabs/tabs.html.twig", {
    tabs: [
      {
        label: "Small test",
        content: "Test content",
      },
      {
        label: "Small test 2",
        content: "Test content 2",
      },
    ],
    modifiers: ["small"],
  }) }}

  {{ include("@tch/components/tabs/tabs.html.twig", {
    tabs: [
      {
        label: "Medium test",
        content: "Test content",
      },
      {
        label: "Medium test 2",
        content: "Test content 2",
      },
    ],
  }) }}

  {{ include("@tch/components/tabs/tabs.html.twig", {
    tabs: [
      {
        label: "Large test",
        content: "Test content",
      },
      {
        label: "Large test 2",
        content: "Test content 2",
      },
    ],
    modifiers: ["large"],
  }) }}
twig-->