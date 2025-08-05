import Img from "../images/success.png";
import classes from "../styles/Summary.module.css";

function Summary() {
  return (
    <div className={classes.summary}>
      <p className={classes.score}>
        Your score is <br />
        5 out of 10
      </p>
      <div className={classes.badge}>
        <img src={Img} alt="Success Badge" />
      </div>
    </div>
  );
}

export default Summary;
