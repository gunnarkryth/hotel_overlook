import {
  Home,
  HotelsAndDestinations,
  Rooms,
  Reservation,
  Login,
} from "../pages/Index";

export const NavLinks = [
  { name: "Forside", isIndex: true, element: <Home /> },
  {
    name: "Hoteller & destinationer",
    path: "/hotels_and_destinations",
    element: <HotelsAndDestinations />,
  },
  {
    name: "Værelser",
    path: "/rooms",
    element: <Rooms />,
  },
  {
    name: "Reservation",
    path: "/reservation",
    element: <Reservation />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
];
