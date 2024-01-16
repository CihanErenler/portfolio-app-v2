import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonType } from "../../@types/componentTypes";

const Button: FC<ButtonType & JSX.IntrinsicElements["button"]> = ({
  children,
  action,
  to,
  href,
  download,
  type,
  full,
}) => {
  if (href) {
    return (
      <a className={`btn ${full ? "full" : ""}`} href={href} target="_blank">
        {children}
      </a>
    );
  }

  if (download && to) {
    return (
      <Link
        to={to}
        className={`btn ${full ? "full" : ""}`}
        target="_blank"
        download
      >
        {children}
      </Link>
    );
  }

  if (to) {
    return (
      <Link to={to} className={`btn ${full ? "full" : ""}`} onClick={action}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`btn ${full ? "full" : ""}`}
      onClick={action}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
