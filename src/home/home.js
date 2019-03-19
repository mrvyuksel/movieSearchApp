import React, { Component } from "react";
import Pagination from "react-js-pagination";
import List from "../list/list";
import Search from "../search/search";
import _ from "lodash";

import { getAllList, getNewPageOfList } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.delayedChange = _.debounce(this.delayedChange, 300);
    this._handlePageChange = this._handlePageChange.bind(this);
  }

  componentDidMount() {}

  handleInputChange = (e: Event) => {
    this.setState({
      value: e.target.value
    });

    this.onChangeDebounced(e);
  };

  _handleOnChange = event => {
    const readyToRequest = event.target.value.length > 3;
    const requestValue = event.target.value;

    if (readyToRequest) {
      this.delayedChange(requestValue);
    }

    this.setState({
      requestValue
    });
  };

  delayedChange = value => {
    getAllList(value).then(data => {
      this.setState({
        ...this.state,
        movieList: data.Search,
        totalResults: data.totalResults
      });
    });
  };

  _handlePageChange(pageNumber) {
    const { history } = this.props;
    const { requestValue } = this.state;

    this.setState({ activePage: pageNumber });
    history.push(`/?page=${pageNumber}`);

    getNewPageOfList(requestValue, pageNumber).then(data => {
      this.setState({
        ...this.state,
        movieList: data.Search,
        totalResults: data.totalResults
      });
    });
  }

  render() {
    const { movieList, totalResults } = this.state;

    return (
      <React.Fragment>
	
        <Search handleOnChange={this._handleOnChange} />
        <List movies={movieList} />

        {movieList && (
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={totalResults}
            pageRangeDisplayed={5}
            onChange={this._handlePageChange}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Home;
