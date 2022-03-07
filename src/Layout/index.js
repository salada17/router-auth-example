import {
  Link,
  Outlet,
} from "react-router-dom";
import { AuthStatus } from "../Auth";

const Layout = () => {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Protected Page (home)</Link>
        </li>
        <li>
          <Link to="/sub-A">Sub Page A</Link>
        </li>
        <li>
          <Link to="/sub-B">Sub Page B</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;