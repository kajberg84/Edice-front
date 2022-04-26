import { Header } from '../general/header/Header';
import { Footer } from '../general/footer/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 420px)' }}>{children}</main>
      <Footer />
    </>
  );
};
