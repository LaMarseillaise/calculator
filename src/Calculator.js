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
      newEntry: true,
      operand: undefined,
      operation: undefined
    }

    this.updateNumber   = this.updateNumber.bind(this)
    this.beginFloat     = this.beginFloat.bind(this)
    this.setOperation   = this.setOperation.bind(this)
    this.evaluateEquals = this.evaluateEquals.bind(this)
    this.clearInput     = this.clearInput.bind(this)
    this.add      = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
    this.multiply = this.multiply.bind(this)
    this.divide   = this.divide.bind(this)
  }

  add(num)      { return this.state.operand + num }
  subtract(num) { return this.state.operand - num }
  multiply(num) { return this.state.operand * num }
  divide(num)   { return this.state.operand / num }

  operations(operationName) {
    switch(operationName) {
      case '+': return this.add
      case '-': return this.subtract
      case '*': return this.multiply
      case '/': return this.divide
      default:  return undefined
    }
  }

  updateNumber(digitString) {
  }

  beginFloat() {
  }

  setOperation(operationName) {
    this.setState({
      operand: this.state.entry,
      operation: this.operations(operationName),
      newEntry: true
    })
  }

  evaluateEquals() {
    if((typeof this.state.operand) !== 'undefined' && this.state.operation) {
      this.clearInput()
      this.setState({ entry: this.state.operation(this.state.entry) })
    }
  }

  clearInput() {
    this.setState({
      entry: 0,
      newEntry: true,
      operand: undefined,
      operation: undefined
    })
  }

  render() {
    return (
      <div style={ { ...styles.calculator } }>
        <Display width='4' displayText={this.state.entry} />

        <Button value='7' color='white' handlePress={this.updateNumber} />
        <Button value='8' color='white' handlePress={this.updateNumber} />
        <Button value='9' color='white' handlePress={this.updateNumber} />
        <Button value='+' color='blue'  handlePress={this.setOperation} />

        <Button value='4' color='white' handlePress={this.updateNumber} />
        <Button value='5' color='white' handlePress={this.updateNumber} />
        <Button value='6' color='white' handlePress={this.updateNumber} />
        <Button value='-' color='blue'  handlePress={this.setOperation} />

        <Button value='1' color='white' handlePress={this.updateNumber} />
        <Button value='2' color='white' handlePress={this.updateNumber} />
        <Button value='3' color='white' handlePress={this.updateNumber} />
        <Button value='*' color='blue'  handlePress={this.setOperation} />

        <Button value='.' color='white'  handlePress={this.beginFloat} />
        <Button value='0' color='white'  handlePress={this.updateNumber} />
        <Button value='=' color='orange' handlePress={this.evaluateEquals} />
        <Button value='/' color='blue'   handlePress={this.setOperation} />
      </div>
    )
  }
}

export default Calculator
