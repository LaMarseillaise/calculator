import React, { Component } from 'react'
import Display from './Display'
import Button from './Button'

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

        <Button value='7' color='white' />
        <Button value='8' color='white' />
        <Button value='9' color='white' />
        <Button value='+' color='blue'  />

        <Button value='4' color='white' />
        <Button value='5' color='white' />
        <Button value='6' color='white' />
        <Button value='-' color='blue'  />

        <Button value='1' color='white' />
        <Button value='2' color='white' />
        <Button value='3' color='white' />
        <Button value='*' color='blue'  />

        <Button value='.' color='white'  />
        <Button value='0' color='white'  />
        <Button value='=' color='orange' />
        <Button value='/' color='blue'   />
      </div>
    )
  }
}

export default Calculator
