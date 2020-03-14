
import * as React from 'react';
import { Container, Flex } from '../global/Global';
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Flex justifyContent="space-between">
                    <div className="header__brand">
                        BIO
                    </div>
                    <div className="header__inner">
                        <ul className="header__menu">
                            <li className="header__menu-item">
                                <a href="#">People</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#">Nostalgia</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#">Celebrity</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#">History & Culture</a>
                            </li>

                            <li className="header__menu-toggle">
                                <span className="sr-only">+</span>
                            </li>
                        </ul>
                    </div>
                </Flex>
            </Container>
        </header>
    )
}

export default Header;