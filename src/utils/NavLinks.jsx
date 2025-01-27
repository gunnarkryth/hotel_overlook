import { Characters, Map, Sessions } from "../pages/Index";

export const NavLinks = [
  { name: "characters", path: "/characters", element: <Characters /> },
  { name: "sessions", path: "/", element: <Sessions />, isIndex: true },
  { name: "map", path: "/map", element: <Map /> },
];
