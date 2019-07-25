import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
//import { Link } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"
// import SectionBasics from "./Sections/SectionBasics.jsx"
import SectionAbout from "./Sections/SectionAbout.jsx"

// import SectionPills from "./Sections/SectionPills.jsx"
// import SectionCarousel from "./Sections/SectionCarousel.jsx"
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx"
// import SectionExamples from "./Sections/SectionExamples.jsx"
// import SectionDownload from "./Sections/SectionDownload.jsx"
import Favorite from "@material-ui/icons/Favorite"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          brand="Projeto Meu Recomeço"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Meu Recomeço</h1>
                  <h3 className={classes.subtitle}>
                    Esse projeto consiste em fazer tatuagens totalmente
                    gratuitas a pessoas que têm marcas de um passado não muito
                    bom em suas vidas... Se você for uma dessas pessoas ou
                    conhece alguém que possa interessar me mande mensagem! Vamos
                    recomeçar!!
                  </h3>
                  <br />
                  <Button
                    color="primary"
                    size="lg"
                    href="https://forms.gle/GFxu69ZA11RjBAna7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Favorite className={classes.icons} />
                    Quero ser tatuado
                  </Button>
                  <Button
                    color="info"
                    size="lg"
                    href="https://forms.gle/hsX3teRpgjbTcGSa9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sou tatuador e quero fazer parte do projeto
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionAbout />
          {/* <SectionBasics />
          <SectionPills />
          <SectionCarousel />
          <SectionCompletedExamples />

          <SectionExamples />
          <SectionDownload /> */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Components)
