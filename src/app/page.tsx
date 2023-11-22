'use client'
import React from 'react';
import AuthNavigation from './modules/Auth/Auth.navigation';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

export default function Home() {
  return (
    <AuthNavigation>
        <GlobalStyles />
    </AuthNavigation>
  )
}
