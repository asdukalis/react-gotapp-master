import React, { Component } from 'react';
import './itemList.css';
// import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../error';

export default class ItemList extends Component {
  // gotService = new gotService();
  state = {
    itemList: null,
    error: false,
  };

  componentDidMount() {
    const { getData } = this.props;
    // this.gotService.getAllCharacters()
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);

      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList, error } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
