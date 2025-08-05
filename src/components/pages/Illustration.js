import Image from "../../images/signup.svg";
import Classes from "../../styles/illustration.module.css";
function Illustration() {
  return (
    <>
      <div className={Classes.illustration}>
        <img src={Image} alt="Signup" />
      </div>
    </>
  );
}

export default Illustration;
