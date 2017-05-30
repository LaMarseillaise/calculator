import React from 'react'

const styles = {
  display: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 8,
    padding: 8,
    border: '2px inset darkgray',
    borderRadius: 8,
    backgroundColor: 'lightgray'
  }
}

const Display = (props) => {
  let buttonWidth = 80
  let gridColumnEnd = 'span ' + (props.width || '1')
  let gridRowEnd = 'span ' + (props.height || '1')
  let characters = ('' + props.displayText).length
  let pixels = props.width * buttonWidth - 36
  let fontSize = Math.min(Math.floor(1.6 * pixels / characters), 0.4 * buttonWidth)

  return (
    <div style={{ ...styles.display, fontSize, gridColumnEnd, gridRowEnd }}>
      {props.displayText}
    </div>
  )
}

export default Display
