import { Card } from "react-bootstrap";
import Splitscreen from "../../layout/SplitScreen";
import { LoginForm } from "../../components";
import { SvgRenderer } from "../../shared";
import loginImage from "../../assets/login.svg";
import "./index.css";

function Login() {
  return (
    <div className="login-screen-styles">
      <Card className="card-styles">
        <Splitscreen>
          <SvgRenderer svgImage={loginImage} />
          <LoginForm />
        </Splitscreen>
      </Card>
    </div>
  );
}

export default Login;
