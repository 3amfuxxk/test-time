import React, { ReactNode } from "react";
import styled from 'styled-components';
import Link from 'next/link';
import Menu from "./Menu";
import Header from "./Header";

const ContentPage = styled.div`
    width: 1160px;
    position: relative;
    height: 100vh;
`;

const Wrapper = styled.div`
    width: 1440px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

const Left = styled.div`
    display: flex;
    width: 280px;
    height: 100vh;
`

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <Wrapper>
            <Left>
                <Menu />
            </Left>
            <ContentPage>
                <Header />
                {children}
            </ContentPage>
        </Wrapper>
    );
}

export default MainLayout;