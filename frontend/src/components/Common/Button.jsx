import { Link } from "react-router-dom";

function Button({ text, to, type = "primary" }) {
  return (
    <Link
      to={to}
      className={type === "primary" ? "primary-btn" : "secondary-btn"}
    >
      {text}
    </Link>
  );
}

export default Button;