function Form({ children, className, ...rest }) {
  return (
    <>
      <form className={`${className} Classes.form`} action="#" {...rest}>
        {children}
      </form>
    </>
  );
}
export default Form;
