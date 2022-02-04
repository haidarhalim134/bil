import React from 'react'
import IconText from '../IconText';
import { BottomLinkWrap, Container, ContentWrap, FooterLink, LinkColumnWrap, SubTitle, VideoLinkWrap, Wrapper } from './FooterElements'

function Footer() {
    return (
      <Container>
        <ContentWrap>
          <Wrapper>
            <IconText colored={true} />
          </Wrapper>
          <LinkColumnWrap>
            <SubTitle>Shop</SubTitle>
            <FooterLink to="/">Terms</FooterLink>
            <FooterLink to="/">Privacy</FooterLink>
            <FooterLink to="/">Refunds</FooterLink>
            <FooterLink to="/">Questions</FooterLink>
          </LinkColumnWrap>
          <LinkColumnWrap>
            <SubTitle>Resources</SubTitle>
            <FooterLink to="/">Terms</FooterLink>
            <FooterLink to="/">Privacy</FooterLink>
            <FooterLink to="/">Refunds</FooterLink>
            <FooterLink to="/">Questions</FooterLink>
          </LinkColumnWrap>
          <LinkColumnWrap>
            <SubTitle>Courses</SubTitle>
            <FooterLink to="/">Terms</FooterLink>
            <FooterLink to="/">Privacy</FooterLink>
            <FooterLink to="/">Refunds</FooterLink>
            <FooterLink to="/">Questions</FooterLink>
          </LinkColumnWrap>
          <LinkColumnWrap>
            <SubTitle>Explore</SubTitle>
            <FooterLink to="/">Terms</FooterLink>
            <FooterLink to="/">Privacy</FooterLink>
            <FooterLink to="/">Refunds</FooterLink>
            <FooterLink to="/">Questions</FooterLink>
          </LinkColumnWrap>
        </ContentWrap>
        <BottomLinkWrap>
          <VideoLinkWrap>
            <FooterLink to="/">Terms</FooterLink>
            <FooterLink to="/">Privacy</FooterLink>
            <FooterLink to="/">Refunds</FooterLink>
            <FooterLink to="/">Questions</FooterLink>
          </VideoLinkWrap>
          <VideoLinkWrap>
            <FooterLink to="/" className="fab fa-twitter" />
            <FooterLink to="/" className="fas fa-microphone" />
            <FooterLink to="/" className="fab fa-youtube" />
            <FooterLink to="/" className="fab fa-instagram" />
          </VideoLinkWrap>
        </BottomLinkWrap>
      </Container>
    );
}

export default Footer
