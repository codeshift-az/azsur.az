import * as Pages from "@/pages";

export const publicRoutes = [
  // Home
  { path: "/", component: <Pages.Home /> },

  // Contact
  { path: "/contact", component: <Pages.Contact /> },

  // Projects
  { path: "/projects", component: <Pages.Projects /> },

  // Not Found
  { path: "*", component: <Pages.NotFound /> },
];
