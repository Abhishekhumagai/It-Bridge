import Footer from "./Footer";
import Header from "./Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <main className=" ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
