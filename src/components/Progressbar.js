import { Link } from 'react-router-dom';
import Classess from "../styles/Progressbar.module.css";
import Button from "./Button";
export default function Progressbar() {
  return (
    <div className={Classess.progressBar}>
      <div className={Classess.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={Classess.rangeArea}>
        <div className={Classess.tooltip}>24% Cimplete!</div>
        <div className={Classess.rangeBody}>
          <div className={Classess.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to="/result">
        <Button className={Classess.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
}
