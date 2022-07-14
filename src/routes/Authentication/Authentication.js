import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const Authentication = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "900px",
        justifyContent: "space-between",
        margin: "30px auto",
      }}
    >
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
