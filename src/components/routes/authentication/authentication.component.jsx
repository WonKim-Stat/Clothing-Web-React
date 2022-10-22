import SignInForm from "../../sign-in-form/sign-in-form.component";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

// import "./authentication.styles.jsx";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
