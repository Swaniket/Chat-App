import { Card } from "react-bootstrap";
import { SplitScreen } from "../../layout";
import { RegisterForm } from "../../components";
import { SvgRenderer } from "../../shared";
import registerImage from "../../assets/sign_up.svg";
import "./index.css";

function Register() {
  const styles = {
    paddingTop: "90px",
    height: "456px",
  };

  return (
    <div className="register-screen-styles">
      <Card className="card-styles">
        <SplitScreen>
          <SvgRenderer svgImage={registerImage} styles={styles} />
          <RegisterForm />
        </SplitScreen>
      </Card>
    </div>
  );
}

export default Register;
