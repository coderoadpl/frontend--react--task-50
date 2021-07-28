import React from 'react'

import TextFieldWithFocus from './TextFieldWithFocus'

export class App extends React.Component {
  customComponentRef = React.createRef()

  componentDidMount () {
    console.log('customComponentRef - componentDidMount', this.customComponentRef)
    this.customComponentRef.current.setFocus()
  }

  render () {
    console.log('customComponentRef - render', this.customComponentRef)

    return (
      <div>
        CodeRoad APP
        <TextFieldWithFocus
          ref={this.customComponentRef}
        />
      </div>
    )
  }
}

export default App
