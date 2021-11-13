import React from "react"
import SearchInput from "../../common/components/SearchInput";
import SearchIcon from "../../assets/img/search.svg"
import "./SearchTags.scss"
import TagBox from "../../common/components/TagBox";
import Fading from "../../common/components/Fading";
import {getTagsFromQuery} from "../../common/backend/requests";

class SearchTags extends React.Component {
  constructor(props) {
    super(props);

    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)

    this.state = {
      tagsFading: true,
      queryValue: "",
      tags: [],
      fetching: false,
    }
  }

  handleQueryChange(event) {
    this.setState({queryValue: event.target.value})
  }

  handleKeyPress(event) {
    if (event.charCode !== 13) {
      return
    }

    // TODO: refactor
    const {queryValue} = this.state
    this.setState({fetching: true}, () => {
      getTagsFromQuery(queryValue)
        .then(r => {
          this.setState({
            tagsFading: true,
            tags: r,
            fetching: false,
          })
        })
    })
  }

  render() {
    return (
      <div className="SearchTags">
        <SearchInput
          icon={SearchIcon}
          placeholder="Введите запрос..."
          value={this.state.queryValue}
          onChange={this.handleQueryChange}
          onKeyPress={this.handleKeyPress}
          active={this.state.fetching}
        />
        <Fading
          mode="fadeIn"
          fading={this.state.tagsFading}
          onAnimationEnd={() => this.setState({tagsFading: false})}
        >
          <div className="SearchTags__tags">
            {this.state.tags.map(e => <TagBox key={e}>{e}</TagBox>)}
          </div>
        </Fading>
      </div>
    )
  }
}

export default SearchTags
