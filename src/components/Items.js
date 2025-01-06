import PropTypes from "prop-types";

let Items = (props) => {
  const { title, amount } = props;
  return (
    <>
      <li>
        {title} {amount}
      </li>
    </>
  );
};

Items.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Items;
