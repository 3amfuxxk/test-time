import React from 'react';
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: [ '400', '600', '700' ],
    subsets: [ 'latin', 'vietnamese'],
})

const InputStyles = styled.input`
    border: none;
    display: flex;
    padding: 16px 14px;
    align-items: center;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    background: transparent;
    width: ${(props) => props.width || '100%'};

    &::placeholder {
        color: #919EAB;
    }
`

interface InputProps {
    name: string;
    type: string;
    width?: string;
}

const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ name, type, width, ...rest }) => {
    return (
        <InputStyles className={public_sans.className} type={type} width={width} id={name} name={name} {...rest}>

        </InputStyles>
    );
  };
  
  export default Input;