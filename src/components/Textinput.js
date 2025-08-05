import Classes from "../styles/Textinput.module.css";
function Textinput({ icon, ...rest }) {
  return (
    <div className={Classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}

export default Textinput;
