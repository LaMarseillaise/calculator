import React, { Component } from 'react'
import Display from './Display'

const styles = {
  calculator: {
    display: 'grid',
    gridColumn: 5,
    gridAutoRows: 80,
    gridAutoColumns: 80,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'gray',
    boxShadow: '4px 4px 16px black',
    fontFamily: 'Monaco',
    border: '2px outset lightgray'
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      entry: 0,
    }
  }

  render() {
    return (
      <div style={ { ...styles.calculator } }>
        <Display width='4' displayText={this.state.entry} />
      </div>
    )
  }
}

export default Calculator
