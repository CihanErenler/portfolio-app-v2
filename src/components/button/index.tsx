import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonType } from "../../@types/componentTypes";

const Button: FC<ButtonType & JSX.IntrinsicElements["button"]> = ({
  children,
  action,
  to,
}) => {
  if (to) {
    return (
      <Link to={to} className="btn" onClick={action}>
        {children}
      </Link>
    );
  }
  return (
    <button className="btn" onClick={action}>
      {children}
    </button>
  );
};

export default Button;
