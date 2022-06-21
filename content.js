// Export array of content. Each object is a category, which contains a `pages`
// array, which contains objects for page metadata.
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
        description: "Welcome to the Texas Children's Design System.",
      },
      {
        title: "Getting Started",
        route: "/getting-started",
      },
      {
        title: "Contributing",
        route: "/contributing",
        disabled: true,
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
      { title: "Branding" },
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
        disabled: true,
      },
      { title: "Accordion" },
      { title: "Action Bar", disabled: true },
      // { title: "Breadcrumbs", disabled: true },
      { title: "Button" },
      { title: "Callout", disabled: true },
      { title: "Card", disabled: true },
      { title: "Carousel" },
      { title: "Dialog", disabled: true },
      { title: "Hero", disabled: true },
      { title: "Icon" },
      // { title: "Message", disabled: true },
      { title: "Notification", disabled: true },
      // { title: "Pagination", disabled: true },
      { title: "Tabs" },
      { title: "Tile", disabled: true },
    ],
  },

  {
    title: "Primitives",
    pages: [
      {
        title: "Overview",
        meta_title: "Primitives",
        display_title: "Primitives",
        route: "/primitives",
        template: "/primitives/overview",
        disabled: true,
      },
      { title: "Blockquote", disabled: true },
      { title: "Details", disabled: true },
      { title: "Forms" },
      { title: "Horizontal rule", disabled: true },
      { title: "Images", disabled: true },
      { title: "Lists", disabled: true },
      { title: "Tables", disabled: true },
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
      { title: "Testing", disabled: true },
      { title: "Writing accessible text" },
    ],
  },

  {
    title: "Style Guide",
    pages: [
      { title: "General", disabled: true },
      { title: "HTML", disabled: true },
      { title: "CSS", disabled: true },
      { title: "JavaScript", disabled: true },
    ],
  },
];