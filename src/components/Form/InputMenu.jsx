import P from "prop-types";

const Input = ({ value, menu, onChange, props }) => {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <li>
      <input
        type="radio"
        name="todoMenu"
        id={value}
        value={value}
        checked={menu === value}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={value}>{capitalize(value)}</label>
    </li>
  );
};

export default Input;

P.propTypes = {
  value: P.string.isRequired,
  menu: P.string.isRequired,
  onChange: P.func.isRequired,
};
