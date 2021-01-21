import React, { Component } from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';
import ErrorMessage from '../error';

export default class CharDetails extends Component {
  gotService = new gotService();
  state = {
    char: null,
    error: false,
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  updateChar() {
    const { charId } = this.props;

    if (!charId) {
      return;
    }

    this.gotService.getCharacter(charId).then((char) => {
      this.setState({ char });
    });
  }

  render() {
    // const { error, char } = this.state;
    if (!this.state.char) {
      return <span className="select-error">Pleas select character</span>;
    }

    const { name, gender, born, died, culture, error } = this.state.char;
    if (error) {
      return <ErrorMessage />;
    }

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
        </ul>
      </div>
    );
  }
}
