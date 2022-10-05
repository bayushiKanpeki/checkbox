import React from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  label: string;
  value: boolean;
  onChange: () => void;
};

const Checkbox = ({ label, value, onChange }: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} /> {label}
    </label>
  );
};

export default Checkbox;
