import React, { ReactNode } from "react";
import styled from 'styled-components';
import Link from 'next/link';
import Menu from "./Menu";

const Header = styled.header`

`;

const ContentPage = styled.div`
    
`;

const Wrapper = styled.div`
    
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
            <Header>

            </Header>
            <Left>
                <Menu />
            </Left>
            <ContentPage>
                {children}
            </ContentPage>
        </Wrapper>
    );
}

export default MainLayout;