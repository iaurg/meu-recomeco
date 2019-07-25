import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Favorite from "@material-ui/icons/Favorite"
import Button from "components/CustomButtons/Button.jsx"

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx"

class SectionAbout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false,
    }
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this)
  }
  componentDidMount() {}
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value })
  }
  handleToggle(value) {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked,
    })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Sobre o projeto</h2>
            <p>
              Esse projeto consiste em fazer tatuagens totalmente gratuitas a
              pessoas que têm marcas de um passado não muito bom em suas
              vidas... Se você for uma dessas pessoas ou conhece alguém que
              possa interessar me mande mensagem! Vamos recomeçar!!
            </p>

            <Button
              color="primary"
              size="lg"
              href="https://forms.gle/GFxu69ZA11RjBAna7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero ser tatuado
            </Button>
            <Button
              color="info"
              size="lg"
              href="https://forms.gle/hsX3teRpgjbTcGSa9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero tatuar no projeto
            </Button>
          </div>
          <div className={classes.space70} />
        </div>
      </div>
    )
  }
}

export default withStyles(basicsStyle)(SectionAbout)
