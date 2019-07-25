import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons
// import { FaPlay } from "react-icons/fa"

// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
// import GridContainer from "components/Grid/GridContainer.jsx"
// import GridItem from "components/Grid/GridItem.jsx"
// import Button from "components/CustomButtons/Button.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx"
// import TeamSection from "./Sections/TeamSection.jsx"
// import WorkSection from "./Sections/WorkSection.jsx"
import { Helmet } from "react-helmet"

const dashboardRoutes = []

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
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
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Tatuadores - Meu Recomeço"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/landing-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            {/* <TeamSection />
            <WorkSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
