import { RoutingPath } from '../../../helpers/RoutingPath';

const FooterNavItems = {
  guest: [
    {
      name: 'Shop',
      link: RoutingPath.Shop,
    },
    {
      name: 'Checkout',
      link: RoutingPath.Checkout,
    },
    {
      name: 'Login',
      link: RoutingPath.Login,
    },
    {
      name: 'Register',
      link: RoutingPath.Register,
    },
  ],
  user: [
    {
      name: 'Shop',
      link: RoutingPath.Shop,
    },
    {
      name: 'Checkout',
      link: RoutingPath.Checkout,
    },
    {
      name: 'Account',
      link: RoutingPath.Account,
    },
    {
      name: 'Contact',
      link: RoutingPath.Contact,
    },
  ],
  admin: [
    {
      name: 'Products',
      link: RoutingPath.Shop,
    },
    {
      name: 'Users',
      link: RoutingPath.Checkout,
    },
    {
      name: 'Account',
      link: RoutingPath.Account,
    },
    {
      name: 'Sign Out',
      link: RoutingPath.Account,
    },
  ],
};

const FooterExtraLinksItems = [
  {
    title: 'Terms and conditions',
    link: RoutingPath.Terms,
    id: 1,
  },
  {
    title: 'Privacy',
    link: RoutingPath.Privacy,
    id: 2,
  },
];

export { FooterNavItems, FooterExtraLinksItems };
