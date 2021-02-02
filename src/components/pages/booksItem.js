import React, { Component } from 'react';
import gotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';

export default class BooksItem extends Component {
  gotService = new gotService();

  render() {
    return (
      <ItemDetails itemId={this.props.bookId} getData={this.gotService.getBook}>
        <Field label="NumberOfPages" field="numberOfPages" />
        <Field label="Publiser" field="publiser" />
        <Field label="Released" field="released" />
      </ItemDetails>
    );
  }
}
