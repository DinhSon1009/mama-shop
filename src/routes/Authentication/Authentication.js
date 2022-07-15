import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Container } from "./AuthenticationStyles";

const Authentication = () => {
  return (
    <Container>
      <SignInForm />
      <SignUpForm />
    </Container>
  );
};

export default Authentication;
