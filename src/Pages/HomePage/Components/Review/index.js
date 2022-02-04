import React from 'react'
import Rev1 from '../../../../Resources/Rev1.png'
import Rev2 from "../../../../Resources/Rev2.png";
import Rev3 from "../../../../Resources/Rev3.png";
import { Container, Desc, Name, ProfileImg, ProfileWrap, ReviewWrap, Title } from './ReviewElements'

function Review() {
    return (
      <Container>
        <Title>Don't just take our word for it</Title>
        <ReviewWrap>
          <ProfileWrap>
            <ProfileImg src={Rev1} />
            <Name>Lorem ipsum dolor</Name>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Desc>
          </ProfileWrap>
          <ProfileWrap>
            <ProfileImg src={Rev2} />
            <Name>Lorem ipsum dolor</Name>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Desc>
          </ProfileWrap>
          <ProfileWrap>
            <ProfileImg src={Rev3} />
            <Name>Lorem ipsum dolor</Name>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Desc>
          </ProfileWrap>
        </ReviewWrap>
      </Container>
    );
}

export default Review
