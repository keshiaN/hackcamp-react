import React from 'react';
import PropTypes from 'prop-types';

export const FormField = props => <div />;

FormField.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
};
