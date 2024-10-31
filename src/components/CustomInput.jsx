import PropTypes from "prop-types";

const CustomInput = ({ label, ...props }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
};

export default CustomInput;
