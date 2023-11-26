'use client'
import React, {useState} from 'react';
import AuthNavigation from './modules/Auth/Auth.navigation';
import { createGlobalStyle } from 'styled-components';
import TextUpForm from './components/SignUpPage/TextUpForm';
import SignInForm from './components/SignUpPage/SignInForm';
import styled from 'styled-components';
import SignUpForm from './components/SignUpPage/SignUpForm';

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
const DivHolder = styled.div`
  display: flex;
  width: 352px;
  flex-direction: column;
  gap:40px;
`



export default function Home() {
  const [showSignInForm, setShowSignInForm] = useState(true);

  const handleSubmit = (values: any) => {
    // Обработка данных формы
    console.log(values);
  };

  const toggleForm = () => {
    setShowSignInForm((prev) => !prev);
  };

  return (
    <AuthNavigation>
      <GlobalStyles />
      <DivHolder>
        <TextUpForm
          upperText={showSignInForm ? "Welcome back!" : "Get started absolutely free"}
          bottomText={showSignInForm ? "Don't have an account?" : "Already have an account?"}
          linkText={showSignInForm ? ' Sign Up here!' : ' Login'}
          linkHref="/"
          onClick={toggleForm}
        />
        {showSignInForm ? (
          <SignInForm onSubmit={handleSubmit} />
        ) : (
          <SignUpForm onSubmit={handleSubmit} />
        )}
      </DivHolder>
    </AuthNavigation>
  );
}