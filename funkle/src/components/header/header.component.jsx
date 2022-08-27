import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
    <div>
      <h2>Welcome to Funkle</h2>
    </div>
    <Outlet/>
    </Fragment>
  );
};

export default Header;
