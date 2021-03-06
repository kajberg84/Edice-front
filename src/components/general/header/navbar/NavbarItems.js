import { RoutingPath } from "../../../../helpers/RoutingPath";

export const NavbarItems = {
  guest: [
    {
      name: "Shop",
      link: RoutingPath.Shop,
    },
    {
      name: "Checkout",
      link: RoutingPath.Checkout,
    },
    {
      name: "Login",
      link: RoutingPath.Login,
    },
    {
      name: "Register",
      link: RoutingPath.Register,
    },
  ],
  user: [
    {
      name: "Shop",
      link: RoutingPath.Shop,
    },
    {
      name: "Checkout",
      link: RoutingPath.Checkout,
    },
    {
      name: "Account",
      link: RoutingPath.Account,
    },
  ],
};
