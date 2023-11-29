'use client'
import React from "react";
import MainLayout from "../components/Main/MainLayout";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export default function MainPage() {
    return (
        <MainLayout>
            <GlobalStyles />
        </MainLayout>
    )
}