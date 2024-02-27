import { Card } from "react-bootstrap";
import { SplitScreen } from "../../layout";
import { LoginForm } from "../../components";
import { SvgRenderer } from "../../shared";
import loginImage from "../../assets/login.svg";
import "./index.css";

function Login() {
  return (
    <div className="login-screen-styles">
      <Card className="card-styles">
        <SplitScreen>
          <SvgRenderer svgImage={loginImage} />
          <LoginForm />
        </SplitScreen>
      </Card>
    </div>
  );
}

export default Login;
