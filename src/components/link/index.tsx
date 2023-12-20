import { FC } from "react";
import { Link } from "react-router-dom";
import { CustomLinkType } from "../../@types/componentTypes";

const CustomLink: FC<CustomLinkType & JSX.IntrinsicElements["a"]> = ({
  to,
  children,
}) => {
  return (
    <Link className="text-blue-600" to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
