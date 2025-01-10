import PropTypes from "prop-types";
import "./Items.css";
let Items = (props) => {
  const formatNumber = (number, locale = 'en-US', options = {}) => {
    const formatter = new Intl.NumberFormat(locale, options);
    return formatter.format(number);
  };
  const { title, amount } = props;
  const status = amount < 0 ? "expenses" : "revenue";
  const symbol = amount < 0 ? "" : "+";
  return (
    <>
      <li>
        {title} {status} <span className={status}>{symbol}{formatNumber(amount)}</span>
      </li>
    </>
  );
};

Items.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Items;
