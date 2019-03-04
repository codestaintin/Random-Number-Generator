import React from 'react';
import PropTypes from 'prop-types';

const ExportButton = ({ phoneNumbers, onClick }) => (
  <div className="input-wrapper">
    {
      phoneNumbers.length > 0 &&
      <button
        className="export-button"
        onClick={onClick}>
        Export Numbers
      </button>
    }
  </div>
);

ExportButton.propTypes = {
  phoneNumbers: PropTypes.array,
  onClick: PropTypes.func,
};

export default ExportButton;