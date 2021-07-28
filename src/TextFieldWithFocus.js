import React from 'react'

export class TextFieldWithFocus extends React.Component {
  inputRef = React.createRef()

  componentDidMount () {
    console.log('inputRef - componentDidMount', this.inputRef)
  }

  setFocus = () => {
    const inputDOMElement = this.inputRef.current

    inputDOMElement.focus()
  }

  render () {
    console.log('inputRef - render', this.inputRef)

    return (
      <input
        ref={this.inputRef}
        type={'text'}
      />
    )
  }
}

export default TextFieldWithFocus
