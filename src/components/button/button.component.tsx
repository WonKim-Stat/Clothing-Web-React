// import "./button.styles.scss";

// // three types of button
// buttonType
// google-sign-in
// inverted
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base", // default
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    // <button
    //   className={`${BUTTON_TYPE_CLASSES[buttonType]} button-container`}
    //   {...otherProps}
    // >
    <CustomButton {...otherProps}>{children}</CustomButton>
  );
};

export default Button;
