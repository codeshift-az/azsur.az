import * as Pages from "@/pages";

export const publicRoutes = [
  // Home
  { path: "/", component: <Pages.Home /> },

  // Contact
  { path: "/contact", component: <Pages.Contact /> },

  // Projects
  { path: "/projects", component: <Pages.Projects /> },

  // Projects Details
  { path: "/projects/:slug", component: <Pages.ProjectsDetails /> },

  // About
  { path: "/about", component: <Pages.About /> },

  // Not Found
  { path: "*", component: <Pages.NotFound /> },
];
