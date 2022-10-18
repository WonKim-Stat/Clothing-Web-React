// sign-up form에 있는 form-input HTML Component
import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/* if label exists, then render this label. wrapping this inside of these squiggly braces and we can just say */}
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}

      {/* if the value length is there, meaning that if the user has typed something into this input
meaning that this length is greater than zero.
When length is zero, when it's greater, it's going to see it as true.
if the length value is truth thee, then I want you to append this shrink class. Otherwise just don't do anything.
And then outside of that, we also know this is a form input label, which is another class that we */}
    </div>
  );
};

export default FormInput;

// const formInput = ({ label, changeHandler, value }) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <input
//         type="text"
//         required
//         onChange={changeHandler}
//         name="displayName"
//         value={value}
//       />
//     </div>
//   );
// };
