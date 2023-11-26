import React from 'react';
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: [ '400', '600', '700' ],
    subsets: [ 'latin', 'vietnamese'],
})

interface ButtonProps {
  label: string;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const StyledButton = styled.button`
  display: flex;
  background: rgba(33, 43, 54, 1);
  color: #fff;
  border: none;
  padding: 11px 16px;
  cursor: pointer;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
`;

const Button: React.FC<ButtonProps> = ({ label, type, disabled, ...rest }) => {
  return (
    <StyledButton type={type} disabled={disabled} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;