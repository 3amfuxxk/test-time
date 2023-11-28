'use client'
import React, {useState} from 'react';
import AuthNavigation from './modules/Auth/Auth.navigation';
import { createGlobalStyle } from 'styled-components';
import TextUpForm from './components/SignUpPage/TextUpForm';
import SignInForm from './components/SignUpPage/SignInForm';
import styled from 'styled-components';
import SignUpForm from './components/SignUpPage/SignUpForm';
import DivAgree from './components/SignUpPage/AgreeStatements';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`
const DivHolder = styled.div`
  display: flex;
  width: 352px;
  flex-direction: column;
  gap:40px;
`



export default function Home() {
  const router = useRouter();

  const [showSignInForm, setShowSignInForm] = useState(true);

  const handleSubmit = (values: any) => {
    console.log(values);

    router.push('/mainpage');
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
        <DivAgree linkPrivacyPolicy='/' linkTermsOfUse='/'/>
      </DivHolder>
    </AuthNavigation>
  );
}