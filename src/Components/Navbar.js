import SideBar from "./SideBar";
import { LoginModal } from "./Modal";

const Navbar = () => {
  return (
    <div className="fixed">
      <div className="Navbar">
        <div className="NavModal">
          <LoginModal></LoginModal>
        </div>
        <div></div>
        <div>
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
