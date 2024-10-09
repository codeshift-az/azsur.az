import Subscribe from "../Subscribe";
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
      <Subscribe />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default Layout;
