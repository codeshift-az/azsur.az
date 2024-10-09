import * as Pages from "@/pages";

export const publicRoutes = [
  // Home
  { path: "/", component: <Pages.Home /> },

  // Contact
  { path: "/contact", component: <Pages.Contact /> },

  // Projects
  { path: "/projects", component: <Pages.Projects /> },

  // About
  { path: "/about", component: <Pages.About /> },

  // Services
  { path: "/services", component: <Pages.Services /> },

  // Not Found
  { path: "*", component: <Pages.NotFound /> },
];
