import React from 'react'
import { SubTitle } from '../Infographics/InfographicsElements';
import { Container, ItemTitle, ListIndex, ListItemTextWrap, ListItemWrap, ListWrap } from './SkillsListElements'

function SkillsList() {
    let List = [
        ["#197eea", "Data Analyst"],
        ["#ff3838",'Digital Marketing'],
        ["#7a760b",'Content Creator'],
        ["#2b29b1",'Web Developer'],
        ["#5a3f2c",'Bussiness Development'],
    ];
    return (
      <Container>
        <SubTitle style={{ textAlign: "center",marginTop:'10%' }}>
          Most promising skills in the future
        </SubTitle>
        <ListWrap>
          {List.map((item, index) => (
            <ListItemWrap left={index%2===0}>
              <ListItemTextWrap>
                <ListIndex color={item[0]}>{index + 1 + "."}</ListIndex>
                <ItemTitle>{item[1]}</ItemTitle>
              </ListItemTextWrap>
            </ListItemWrap>
          ))}
        </ListWrap>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{
            transform: "rotate(-195deg)",
            marginTop: "-700",
            marginLeft: "-500",
            position: "absolute",
          }}
        >
          <path
            fill="#8a1c1b"
            fill-opacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,85.3C320,117,400,203,480,213.3C560,224,640,160,720,144C800,128,880,160,960,154.7C1040,149,1120,107,1200,101.3C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{
            transform: "rotate(-15deg)",
            marginBottom: "-700",
            marginRight: "-500",
            position: "absolute",
          }}
        >
          <path
            fill="#267596"
            fill-opacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,85.3C320,117,400,203,480,213.3C560,224,640,160,720,144C800,128,880,160,960,154.7C1040,149,1120,107,1200,101.3C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </Container>
    );
}

export default SkillsList
