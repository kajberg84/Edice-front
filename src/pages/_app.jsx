// Context
import CartProvider from '../context/CartContext';
import UserProvider from '../context/UserContext';

// Layout
import { Layout } from '../components/layout/Layout';

// Styles
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp;
