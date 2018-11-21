const Items = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "dashboard"
  },
  // Apps
  {
    subheader: true,
    name: "Apps"
  },
  {
    path: "/apps/contacts",
    name: "Contacts",
    icon: "contacts"
  },
  {
    path: "/store",
    name: "Store",
    icon: "local_grocery_store",
    childrens: [
      { path: "/pricing", name: "Pricing" },
      { path: "/checkout", name: "Checkout" }
    ]
  },
  // Pages
  {
    subheader: true,
    name: "Pages"
  },
  {
    path: "/auth",
    name: "Authentication",
    icon: "lock_open",
    childrens: [
      { path: "/login", name: "Login" },
      { path: "/register", name: "Register" },
      { path: "/forgot-password", name: "Forgot Password" },
      { path: "/reset-password", name: "Reset Password" }
    ]
  },
  {
    path: "/Others",
    name: "Others",
    icon: "pages",
    childrens: [
      { path: "/blank", name: "Blank" },
      { path: "/404", name: "Error 404" },
      { path: "/500", name: "Error 500" }
    ]
  },
  // Ui Options
  {
    subheader: true,
    name: "UI Options"
  },
  {
    path: "/ui",
    name: "UI Kit",
    icon: "extension",
    childrens: [
      { path: "/ui/app-bar", name: "App Bar" },
      { path: "/ui/auto-complete", name: "Autocomplete" },
      { path: "/ui/avatars", name: "Avatars" },
      { path: "/ui/badges", name: "Badges" },
      { path: "/ui/bottom-navigation", name: "Bottom Navigation" },
      { path: "/ui/buttons", name: "Buttons" },
      { path: "/ui/cards", name: "Cards" },
      { path: "/ui/chips", name: "Chips" },
      { path: "/ui/dialogs", name: "Dialogs" },
      { path: "/ui/dividers", name: "Dividers" },
      { path: "/ui/drawers", name: "Drawers" },
      { path: "/ui/expansion-panels", name: "Expansion Panels" },
      { path: "/ui/grid", name: "Grid" },
      { path: "/ui/lists", name: "List" },
      { path: "/ui/menus", name: "Menus" },
      { path: "/ui/paper", name: "Paper" },
      { path: "/ui/pickers", name: "Pickers" },
      { path: "/ui/progress", name: "Progress" },
      { path: "/ui/selection-controls", name: "Selection Controls" },
      { path: "/ui/selects", name: "Selects" },
      { path: "/ui/snackbars", name: "Snackbars" },
      { path: "/ui/tabs", name: "Tabs" },
      { path: "/ui/tooltips", name: "Tooltips" }
    ]
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "table",
    childrens: [
      { path: "/tables/regular", name: "Regular" },
      { path: "/tables/advanced", name: "Advanced" }
    ]
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "mood",
    childrens: [{ path: "/icons/custom", name: "Custom Icons" }]
  },
  {
    path: "/forms",
    name: "Forms",
    icon: "input",
    childrens: [
      { path: "/forms/textfields", name: "Text Fields" },
      { path: "/forms/steppers", name: "Steppers" }
    ]
  },
  {
    path: "/charts",
    name: "Charts",
    icon: "timeline",
    childrens: [
      { path: "/charts/nivo", name: "Nivo" },
      { path: "/charts/trend", name: "Trend" }
    ]
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "map",
    childrens: [{ path: "/maps/google-map", name: "Google Map" }]
  }
];

export default Items;
