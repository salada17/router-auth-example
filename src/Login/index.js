import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../Auth";

const LoginPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <b>You must log in to view the page at <code>{from}</code></b>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" autoComplete="off" list="auth-example" />
        </label>{" "}
        <button type="submit">Login</button>
        <datalist id="auth-example"><option value="user" /><option value="not no user" /><option value="Guest" /></datalist>
      </form>
    </div>
  );
};

export default LoginPage;