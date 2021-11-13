import React from "react"
import "./SearchInput.scss"
import PropTypes from "prop-types"

const SearchInput = ({icon, placeholder, active, ...restProps}) => (
  <div className="SearchInput">
    <img
      src={icon}
      className={`SearchInput__icon ${active && "SearchInput__active"}`}
      alt=""
    />
    <input
      className="SearchInput__input"
      placeholder={placeholder}
      {...restProps}
    />
  </div>
)

SearchInput.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  active: PropTypes.bool
}

export default SearchInput
