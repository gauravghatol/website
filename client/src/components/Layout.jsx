import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-white">
      <Navbar />
      <main className="min-w-0 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
