'use client'
import React from 'react';
import AuthNavigation from './modules/Auth/Auth.navigation';
import { createGlobalStyle } from 'styled-components';
import { Form } from 'formik/dist/Form';
import LoginButton from './components/LoginButton';
import TextUpForm from './components/TextUpForm';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #00A76F;
  }
`
const handleClick = () => {
  console.log('Button clicked!');
}

export default function Home() {
  return (
    <AuthNavigation>
        <GlobalStyles />
        <TextUpForm upperText="Welcome back!" bottomText="Don't have an account?" linkText=" Sign Up here!" linkHref="/" />
        {/* <LoginButton label='Hello' onClick={handleClick} disabled={false} /> */}
    </AuthNavigation>
  )
}