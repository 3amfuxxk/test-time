import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: [ '400', '600', '700' ],
    subsets: [ 'latin', 'vietnamese'],
})

const TextUpBlock = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
`;

const Upper = styled.h1`
    /* font-family: 'Public Sans'; */
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #212B36;
`;

const Bottom = styled.p`
    margin-top: 16px;
    font-size: 14px;
    /* font-family: ${public_sans}; */
    font-weight: 400;
    line-height: 22px;
    color: #212B36;
`;

const Linked = styled.a`
    outline: none;
    color: #00A76F;
    /* font-family: ${public_sans}; */
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    text-decoration: none;
`

const TextUpForm: React.FC<{ upperText: string; bottomText: string; linkText: string; linkHref: string }> = ({
    upperText,
    bottomText,
    linkText,
    linkHref,
  }) => {
    return (
      <TextUpBlock className={public_sans.className}>
        <Upper>{upperText}</Upper>
        <Bottom>
          {bottomText}
          <Link href={linkHref}>
            {linkText}
          </Link>
        </Bottom>
      </TextUpBlock>
    );
  };
  
  export default TextUpForm;