import React from "react"
import "./SearchInput.scss"
import PropTypes from "prop-types"

const SearchInput = ({icon, placeholder}) => (
  <div className="SearchInput">
    <img src={icon} className="SearchInput__icon" alt=""/>
    <input className="SearchInput__input" placeholder={placeholder}/>
  </div>
)

SearchInput.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string
}

export default SearchInput
