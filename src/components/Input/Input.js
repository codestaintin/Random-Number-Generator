import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onClick, onChange }) => (
  <div>
    <input
      type="number"
      placeholder="Enter a number"
      onChange={onChange}
    />
    <button onClick={onClick}>Generate Phone Number(s)</button>
  </div>
);

Input.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;