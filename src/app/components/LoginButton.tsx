import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled: boolean;
}

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, ...rest }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;