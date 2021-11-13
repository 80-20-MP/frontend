import React from "react"
import "./TagBox.scss"

const TagBox = (props) => {
  const { className, children, ...restProps } = props;
  const classNames = ["TagBox", className];

  return (
    <div className={classNames.join(" ")} {...restProps}>
      {children}
    </div>
  )
}

export default TagBox
