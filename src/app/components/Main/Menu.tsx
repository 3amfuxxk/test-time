import React from "react";
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';
import Link from "next/link";
import MenuComponent from './MenuComponent';
import GroupName from "./GroupName";

const public_sans = Public_Sans({
    weight: [ '400', '600', '700' ],
    subsets: [ 'latin', 'vietnamese'],
});

const MenuMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 16px 40px 16px;
    width: 100%;
`;

const Logo = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 24px 16px 8px 16px;
`;


const Menu = () => {
    return (
        <MenuMain>
            <Logo>
                <img src="/img/stack.png">
                </img>
            </Logo>
            <GroupName text="Overview" />
            <MenuComponent text="Overview" svgHref="/img/overview.svg" />
            <MenuComponent text="E-commerce" svgHref="/img/ecommerce.svg" />
            <MenuComponent text="Analytics" svgHref="/img/analytics.svg" />
            <MenuComponent text="Banking" svgHref="/img/banking.svg" />
            <MenuComponent text="Booking" svgHref="/img/booking.svg" />
            <GroupName text="Management" />
            <MenuComponent text="Mail" svgHref="/img/mail.svg" />
        </MenuMain>
    );
}

export default Menu;