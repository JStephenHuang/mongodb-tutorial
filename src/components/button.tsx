import { Link } from "react-router-dom";

interface ButtonProperties {
  children: React.ReactNode;
  link: string;
}

const Button = (props: ButtonProperties) => {
  return (
    <Link className="button" to={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
