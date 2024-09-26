import * as Pages from "@/pages";
import path from "path";

export const publicRoutes = [
  // Home
  { path: "/", component: <Pages.Home /> },

  // Contact 
  {path: "/contact", component:<Pages.Contact/> },

  // Not Found
  { path: "*", component: <Pages.NotFound /> },
];
