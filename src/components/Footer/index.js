import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {FooterContainer, FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle ,FooterLink , SocialIconLink ,SocialIcons,SocialLogo,WebsiteRights,SocialMedia,SocialMediaWrap} from './FooterElements';


const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About US </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careere</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Teams of Service</FooterLink>
                         </FooterLinkItems>
                         <FooterLinkItems>
                            <FooterLinkTitle> Contact Us  </FooterLinkTitle>
                                <FooterLink to="/signin">Contect</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Destinations</FooterLink>
                                <FooterLink to="/signin">Sponsoreships</FooterLink>
                                
                         </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to="/signin">Submit Video</FooterLink>
                                <FooterLink to="/signin">Ambassadors</FooterLink>
                                <FooterLink to="/signin">Agency</FooterLink>
                                <FooterLink to="/signin">Influencer</FooterLink>
                                
                         </FooterLinkItems>
                         <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                               
                         </FooterLinkItems>
                    </FooterLinksWrapper>  
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to='/'>dolla</SocialLogo>
                    <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights> 
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instragram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        </>
    )
}

export default Footer
