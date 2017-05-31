import React from 'react'
import './Calculator.css'

const textColorFor = {
  white: 'black',
  red: 'white',
  green: 'white',
  blue: 'white',
  orange: 'white',
  yellow: 'black',
  purple: 'white',
  black: 'white'
}

const styles = {
  button: {
    display: 'flex',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 12,
    fontSize: 32
  }
}

const Button = (props) => {
  let backgroundColor = props.color
  let color = textColorFor[props.color]
  let gridColumnEnd = 'span ' + (props.width || '1')
  let gridRowEnd = 'span ' + (props.height || '1')
  let borderColor = props.color

  return (
    <div
      className='button'
      style={{ ...styles.button, backgroundColor, color, gridColumnEnd, gridRowEnd, borderColor }}
      onClick={() => props.handlePress(props.value)}>
      {props.value}
    </div>
  )
}

export default Button
