import Splitscreen from "../../layout/SplitScreen";
import { LoginForm } from "../../components";
import { SvgRenderer } from "../../shared";
import loginImage from "../../assets/login.svg";

export const AvatarComponent = () => {
  return <h1>Hellow World</h1>;
};

function Login() {
  return (
    <Splitscreen>
      <SvgRenderer svgImage={loginImage} />
      <LoginForm />
    </Splitscreen>
  );
}

export default Login;
