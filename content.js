export default [
  {
    title: "Introduction",
    pages: [
      {
        title: "Overview",
        meta_title: "",
        display_title: "Texas Children's Design System",
        route: "/",
        template: "index",
        description: "Welcome to Texas Children's Design System.",
      },
      {
        title: "Getting Started",
        route: "/getting-started",
      },
      {
        title: "Contributing",
        route: "/contributing",
      },
    ],
  },

  {
    title: "Design",
    pages: [
      {
        title: "Overview",
        meta_title: "Design",
        display_title: "Design",
        route: "/design",
        template: "design/overview",
        disabled: true,
      },
      { title: "Animation" },
      { title: "Branding", disabled: true },
      { title: "Color" },
      { title: "Layout" },
      { title: "Typography" },
    ],
  },

  {
    title: "Components",
    pages: [
      {
        title: "Overview",
        meta_title: "Components",
        display_title: "Components",
        route: "/components",
        template: "components/overview",
      },
      { title: "Accordion" },
      { title: "Action Bar" },
      { title: "Alert Bar" },
      { title: "Breadcrumbs", disabled: true },
      { title: "Button" },
      { title: "Card" },
      { title: "Carousel" },
      { title: "Dialog" },
      { title: "Icon" },
      { title: "Mega Menu", disabled: true },
      { title: "Notification", disabled: true },
      { title: "Pagination", disabled: true },
      { title: "Section" },
      { title: "Tabs" },
    ],
  },

  {
    title: "Content",
    pages: [
      { title: "Blockquote" },
      { title: "Callout" },
      { title: "Details" },
      { title: "Forms" },
      { title: "Images", disabled: true },
      { title: "Horizontal rule" },
      { title: "Lists" },
      { title: "Tables" },
    ],
  },

  {
    title: "Accessibility",
    pages: [
      {
        title: "Overview",
        meta_title: "Accessibility",
        display_title: "Accessibility",
        route: "/accessibility",
        template: "accessibility/overview",
      },
      { title: "Testing" },
      { title: "Writing accessible text" },
    ],
  },

  {
    title: "Style guide",
    pages: [
      { title: "General" },
      { title: "HTML" },
      { title: "CSS" },
      { title: "JavaScript" },
    ],
  }
];