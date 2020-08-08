import './button.css'

import React from 'react'

interface ButtonProps {
  label:string
}

const Button:React.FunctionComponent<ButtonProps>= ({label}) => {
return <div className={'button-style'} data-testid="button">HI {label}</div>
}

export default Button