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
          width: 300, borderRadius: 10, background: '#fff', marginBottom: 20,
        }}
        autoComplete="off"
        label={placeholder}
        type={type}
        name={name}
        rows="4"
        required
        multiline={multline}
        value={value}
        onChange={onChange}
        onSelect={onChange}
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
