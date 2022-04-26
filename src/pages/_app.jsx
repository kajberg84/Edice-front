import '../styles/globals.scss';
import CartProvider from '../context/CartContext';
import UserProvider from '../context/UserContext';
import { Layout } from '../components/layout/Layout';

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
