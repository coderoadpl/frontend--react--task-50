import React from 'react'

import TextField from './TextField'
import TextFieldWithFocus from './TextFieldWithFocus'

export class App extends React.Component {
  textFieldWithFocusRef = React.createRef()
  textFieldRef = React.createRef()

  componentDidMount () {
    console.log('textFieldWithFocusRef - componentDidMount', this.textFieldWithFocusRef)
    console.log('textFieldRef - componentDidMount', this.textFieldRef)
  }

  focusFirst = () => {
    this.textFieldWithFocusRef.current.inputRef.current.focus()
  }

  focusSecond = () => {
    this.textFieldRef.current.focus()
  }

  render () {
    console.log('textFieldWithFocusRef - render', this.textFieldWithFocusRef)
    console.log('textFieldRef - render', this.textFieldRef)

    return (
      <div>
        <button
          onClick={this.focusFirst}
        >
          FOCUS FIRST
        </button>
        <TextFieldWithFocus
          ref={this.textFieldWithFocusRef}
        />
        <br/>
        <button
          onClick={this.focusSecond}
        >
          FOCUS SECOND
        </button>
        <TextField
          ref={this.textFieldRef}
        />
      </div>
    )
  }
}

export default App
