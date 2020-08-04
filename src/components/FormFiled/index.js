import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

function FormField({
  placeholder, type, value, name, onChange, multline,
}) {
  return (
    <div>
      <TextField
        style={{
          background: '#fff', width: 400, borderRadius: 10, marginBottom: 20, marginLeft: 20,
        }}
        label={placeholder}
        type={type}
        name={name}
        rows="4"
        required
        multiline={multline}
        value={value}
        onChange={onChange}
        variant="filled"
      />
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  multline: false,
};

FormField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  multline: PropTypes.bool,
};

export default FormField;
