import Image from "../images/3.jpg";
import Classess from "../styles/MiniPlayer.module.css";
function MiniPlayer() {
  return (
    <div className={`${Classess.miniPlayer} ${Classess.floatingBtn}`}>
      <span className={`material-icons-outlined ${Classess.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={`material-icons-outlined ${Classess.close}`}>
        {" "}
        close{" "}
      </span>
      <img src={Image} alt="img" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
export default MiniPlayer;
