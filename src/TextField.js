import React from 'react'

const TextField = (props, ref) => {
  console.log('TextField', props)
  return (
    <input
      ref={ref}
      type={'text'}
    />
  )
}

export const TextFieldWithRef = React.forwardRef(TextField)

export default TextFieldWithRef
