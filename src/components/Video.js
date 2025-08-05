import classes from "../styles/Video.module.css";
function Video({ title, noq, id }) {
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} qustion</p>
        <p>total points {noq * 5}</p>
      </div>
    </div>
  );
}
export default Video;
