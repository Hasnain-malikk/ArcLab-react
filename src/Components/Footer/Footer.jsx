import React from 'react';
import './Footer.css';
import github from "/ReactJs/arclab-react/src/assets/github.svg"
import instagram from "/ReactJs/arclab-react/src/assets/instagram.svg"
import linkedin from "/ReactJs/arclab-react/src/assets/linkedin.svg"
import twitter from "/ReactJs/arclab-react/src/assets/twitter.svg"
import youtube from "/ReactJs/arclab-react/src/assets/youtube.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footer-line"></div>
            <div className="footer-wrapper">
                <section className="footer-top">
                    <div className="footer-headline">
                        <h2>Subscribe to our newsletter</h2>
                        <p>
                            Stay up to date with our news and articles
                        </p>
                    </div>
                    <div className="footer-subscribe">
                        <input type="email" spellCheck="false" placeholder="Enter Email" />
                        <button>Sign Up</button>
                    </div>
                </section>
                <div className="footer-columns">
                    {/* <section className="footer-logo">
                        <h2>
                            <svg width="1103" height="996" viewBox="0 0 1103 996" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#FAFBFC"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#FAFBFC"/>
                            </svg>
                        </h2>
                    </section> */}
                    <section>
                        <h3>Quick Link</h3>
                        <ul>
                            <li><a href="#" title="API">API</a></li>
                            <li><a href="#" title="Pricing">Pricing</a></li>
                            <li><a href="#" title="Documentation">Documentation</a></li>
                            <li><a href="#" title="Release Notes">Release Notes</a></li>
                            <li><a href="#" title="Status">Status</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#" title="Support">Our Location</a></li>
                            <li><a href="#" title="Sitemap">Sitemap</a></li>
                            <li><a href="#" title="Newsletter">Newsletter</a></li>
                            <li><a href="#" title="Help Centre">Help Centre</a></li>
                            <li><a href="#" title="Investor">Investor</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Contact info</h3>
                        <ul>
                            <li><a href="#" title="About Us">About Us</a></li>
                            <li><a href="#" title="Blog">Blog</a></li>
                            <li><a href="#" title="Careers">Careers</a></li>
                            <li><a href="#" title="Press">Press</a></li>
                            <li><a href="#" title="Contact">Contact</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#" title="Terms and services">Terms</a></li>
                            <li><a href="#" title="Privacy Policy">Privacy</a></li>
                            <li><a href="#" title="Cookies">Cookies</a></li>
                            <li><a href="#" title="Licenses">Licenses</a></li>
                            <li><a href="#" title="Cookies">Contact</a></li>
                        </ul>
                    </section>
                </div>
                <div className="footer-bottom">
                    <div className='social-links'>
                        <ul>
                            <li>
                                <a target='_blank' href="https://www.instagram.com/malikhasnaindev/" title="Instagram">
                                    <img src={instagram} alt='Instagram' />                       
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://www.linkedin.com/in/hasnain-mahvia-7a2b392a2/" title="Linkedin">
                                    <img src={linkedin} alt='Linkedin' />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Twitter">
                                    <img src={twitter} alt='Twitter' />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Youtube">
                                    <img src={youtube} alt='YouTube' />
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://github.com/Hasnain-malikk" title="GitHub">
                                    <img src={github} alt='GitHub' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <small>© Malik Hasnain <span id="year">{new Date().getFullYear()}</span>, All rights reserved</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
