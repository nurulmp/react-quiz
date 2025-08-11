import Classess from "../styles/Progressbar.module.css";
import Button from "./Button";
export default function Progressbar({ next, prev, progress }) {
  return (
    <div className={Classess.progressBar}>
      <div className={Classess.backButton}>
        <span className="material-icons-outlined" onClick={prev}>
          {" "}
          arrow_back{" "}
        </span>
      </div>
      <div className={Classess.rangeArea}>
        <div className={Classess.tooltip}>{progress}% Cimplete!</div>
        <div className={Classess.rangeBody}>
          <div className={Classess.progress} style={{ width: "20%" }}></div>
        </div>
      </div>

      <Button className={Classess.next} onClick={next}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
