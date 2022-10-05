import React from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  label: string;
  value: boolean;
  onChange: () => void;
};

const StyledCheckbox = ({ label, value, onChange }: CheckboxProps) => {
  return (
    <label>
      <Input type="checkbox" checked={value} onChange={onChange} /> {label}
    </label>
  );
};

const Input = styled.input`
  accent-color: tomato;
`;

export default StyledCheckbox;
