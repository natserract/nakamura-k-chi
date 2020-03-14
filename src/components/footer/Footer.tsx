


import * as React from 'react';
import { Container, Flex } from '../global/Global';
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Flex justifyContent="space-between">
                    <div className="footer__content-left">
                        Biography Stories
                    </div>

                    <div className="footer__inner footer__content-right">
                        <ul className="footer__socialmedia">
                            <li className="footer__socialmedia-item">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li className="footer__socialmedia-item">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li className="footer__socialmedia-item">
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </Flex>
            </Container>
        </footer>
    )
}

export default Footer;