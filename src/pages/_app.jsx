import '../styles/globals.scss';
import CartProvider from '../context/CartContext';
import UserProvider from '../context/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp;
