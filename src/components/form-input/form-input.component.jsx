// sign-up form에 있는 form-input HTML Component

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...otherProps} />
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
