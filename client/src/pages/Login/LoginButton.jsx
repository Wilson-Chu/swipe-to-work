import { useAuth0 } from "@auth0/auth0-react";
import './Login.scss';
import '../Preferences/buttons.scss';

const LoginButton = function () {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="login-page">
        <section>
          Welcome to Swipe to Work, let's get you matched with your perfect job!
        </section>
        <button className="button-74" role="button" type="submit" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
    )
  )
}

export default LoginButton