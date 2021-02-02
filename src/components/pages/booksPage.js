import React, { Component } from 'react';
// import { Col, Row } from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {
  gotService = new gotService();
  state = {
    selectedItem: null,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  componentDidCatch() {
    console.log('error');
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        // renderItem={(item) => `${item.name} -- (${item.gender})`} или детруктуризация
        renderItem={({ name, numberOfPages }) =>
          `${name} -- ( ${numberOfPages} )`
        }
      />
    );
    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedItem}
        getData={this.gotService.getBook}
      >
        <Field label="NumberOfPages" field="numberOfPages" />
        <Field label="Publiser" field="publiser" />
        <Field label="Released" field="released" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={itemDetails} />;
  }
}
