import Navbar from "./Navbar";
import Footer from "./Footer";
import Featured from "./Featured";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Featured />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
