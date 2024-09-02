import Footer from "./Footer";
import Header from "./Header";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
