import classes from "../styles/Button.module.css";
function Button({ className, children }) {
  return (
    <button className={`${classes.button}  ${className}`}>
      <span>{children}</span>
    </button>
  );
}
export default Button;
