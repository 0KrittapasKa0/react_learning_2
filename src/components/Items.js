import PropTypes from "prop-types";
import "./Items.css";
let Items = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expenses" : "revenue";
  const symbol = amount < 0 ? "" : "+";
  return (
    <>
      <li>
        {title} {status} <span className={status}>{symbol}{amount}</span>
      </li>
    </>
  );
};

Items.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Items;
