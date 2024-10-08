import Footer from "./Footer";
import Header from "./Header";
import ScrollUp from "./ScrollUp";
import TopBar from "./TopBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollUp/>
    </div>
  );
};

export default Layout;
