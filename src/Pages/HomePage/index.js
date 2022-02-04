import React, { Fragment } from 'react'
import Footer from '../BaseComponents/Footer';
import NavBar from '../BaseComponents/NavBar'
import Final from './Components/Final';
import Infographics from './Components/Infographics';
import Review from './Components/Review';
import Skills from './Components/Skills';
// import SkillsList from './Components/SkillsList';
import Title from './Components/Title'

function HomePage() {
    return (
      <Fragment>
        <NavBar />
        <Title />
        <Infographics />
        <Skills />
        <Review />
        <Final />
        <Footer />
      </Fragment>
    );
}

export default HomePage
