import React from 'react'
import Img1 from "../../../../Resources/Infog1.png";
import Img2 from "../../../../Resources/Infog2.png";
import Img3 from "../../../../Resources/Infog3.png";
import Img4 from "../../../../Resources/Infog4.png";
import Img5 from "../../../../Resources/Infog5.png";
import Img6 from "../../../../Resources/Infog6.png";
import { Container, DecorWrap, Decor, SubTitle, SubTitleWrap, Desc, ItemWrap, IconWrap, NormalWrap, Icon } from "./InfographicsElements";

function Infographics() {
    return (
      <Container>
        <DecorWrap>
          <Decor>
            <ItemWrap>
              <IconWrap>
                <Icon
                  src={Img1}
                  alt=""
                  style={{ maxWidth: "90%", maxHeight: "90%" }}
                />
              </IconWrap>
              <Desc white={true}>asjdkj aksjdhksadhu ojuwpej ldki njwl</Desc>
            </ItemWrap>
            <ItemWrap>
              <IconWrap>
                <Icon
                  src={Img2}
                  alt=""
                  style={{ maxWidth: "90%", maxHeight: "90%" }}
                />
              </IconWrap>
              <Desc white={true}>asjdkj aksjdhksadhu ojuwpej ldki njwl</Desc>
            </ItemWrap>
            <ItemWrap>
              <IconWrap>
                <Icon
                  src={Img3}
                  alt=""
                  style={{ maxWidth: "90%", maxHeight: "90%" }}
                />
              </IconWrap>
              <Desc white={true}>asjdkj aksjdhksadhu ojuwpej ldki njwl</Desc>
            </ItemWrap>
          </Decor>
        </DecorWrap>
        <SubTitleWrap>
          <SubTitle>How Swing Works</SubTitle>
        </SubTitleWrap>
        <DecorWrap>
          <NormalWrap>
            <ItemWrap>
              <IconWrap>
                <Icon src={Img4} alt="" />
              </IconWrap>
              <Desc title={true}>ojuwpej ldki njwl</Desc>
              <Desc>asjdkj aksjdhksadhu ojuwpej ldki njwl</Desc>
            </ItemWrap>
            <ItemWrap>
              <IconWrap>
                <Icon src={Img5} alt="" />
              </IconWrap>
              <Desc title={true}>ojuwpej ldki njwl</Desc>
              <Desc>asjdkj aksjdhksadhu ojuwpej ldki njwl</Desc>
            </ItemWrap>
            <ItemWrap>
              <IconWrap>
                <Icon src={Img6} alt="" />
              </IconWrap>
              <Desc title={true}>ojuwpej ldki njwl</Desc>
              <Desc>asjdkj aksjdhksadhu ojuwpej ldki njwl</Desc>
            </ItemWrap>
          </NormalWrap>
        </DecorWrap>
      </Container>
    );
}

export default Infographics
