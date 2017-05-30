import React, { Component } from 'react'

const styles = {
  calculator: {
    display: 'grid',
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={ { ...styles.calculator } }>
      </div>
    )
  }
}

export default Calculator
