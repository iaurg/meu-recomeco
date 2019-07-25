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
import { Helmet } from "react-helmet"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Meu Recomeço</title>
            <meta
              name="description"
              content="Esse projeto consiste em fazer tatuagens totalmente
                    gratuitas a pessoas que têm marcas de um passado não muito
                    bom em suas vidas"
            />
          </Helmet>
        </div>
        <Header
          brand="Projeto Meu Recomeço"
          rightLinks={<HeaderLinks />}
          fixed
          color="white"
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
                    Vamos ajudar pessoas que possuem marcas de um passado não
                    muito bom.
                  </h3>
                  <br />
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
