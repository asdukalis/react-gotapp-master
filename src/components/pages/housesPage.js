import React, { Component } from 'react';
// import { Col, Row } from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {
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
        getData={this.gotService.getAllHouses}
        // renderItem={(item) => `${item.name} -- (${item.gender})`} или детруктуризация
        renderItem={({ name, region }) => `${name} -- ( ${region} )`}
      />
    );
    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedItem}
        getData={this.gotService.getHouse}
      >
        <Field label="Region" field="region" />
        <Field label="Words" field="words" />
        <Field label="Titles" field="titles" />
        <Field label="Overlord" field="overlord" />
        <Field label="Ancestral Weapons" field="ancestralWeapons" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={itemDetails} />;
  }
}
