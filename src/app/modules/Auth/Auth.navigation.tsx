import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Public_Sans } from 'next/font/google';

// const public_sans = Public_Sans({
//     weight: ['400', '700'],
//     style: ['normal', 'italic'],
//     subsets: ['latin'],
// })

interface AuthNavigationProps {
    children: React.ReactNode;
  }

  const AuthNavigation: React.FC<AuthNavigationProps> = ({ children }) => {
    return (
        <Wrapper>
            <Left>
                <Navbar>
                    <Logo src="/img/stack.png" >
                            
                    </Logo>
                </Navbar>
                <Main>
                    <Textholder>
                        <Text>
                            Manage the job more effectively with Minimal
                        </Text>
                    </Textholder>
                    <Image src="/img/dash.png">

                    </Image>
                </Main>
            </Left>
            <Right>
                {children}
            </Right>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 1440px;
    height: 100vh;
    background: rgba(245,245,245,1);
    margin: 0 auto;
`;

const Left = styled.div`
    width: 960px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Navbar = styled.header`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left:0;
`;

const Logo = styled.img`
    width: 38px;
    height: 20px;
    margin: 40px 0px 0px 40px;
`;

const Right = styled.div`
    display: flex;
    width: 480px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Main = styled.div`
    display: flex;
    height: 720px;
    width: 720px;
    justify-content: space-between;
    flex-direction: column;
`;

const Textholder = styled.div`
    display: flex;
    width: 480px;
    height: 96px;
    margin: 0 auto;
`;

const Text = styled.h1`
    font-family: 'Public Sans', sans-serif;
    color: #212B36;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    font-weight: 700;
`;

const Image = styled.img`
    
`;

export default AuthNavigation;