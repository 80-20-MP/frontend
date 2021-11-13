import React from "react"
import PropTypes from "prop-types"
import "./Fading.scss"

export const fadingMode = {
  fadeIn: "Fading__FadeIn",
  fadeOut: "Fading__FadeOut",
  fadeInOut: "Fading__FadeInOut"
}

const Fading = (props) => {
  const { fading, mode, className, children, ...restProps } = props

  const classNames = ["Fading", className]
  if (fading) {
    classNames.push(fadingMode[mode])
    console.log(classNames)
  }

  return (
    <div className={classNames.join(" ")} {...restProps}>
      {children}
    </div>
  )
}

Fading.propTypes = {
  mode: PropTypes.oneOf(Object.keys(fadingMode)),
  fading: PropTypes.bool,
}

export default Fading
