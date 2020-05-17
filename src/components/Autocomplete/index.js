import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaMapMarkerAlt } from 'react-icons/fa';

import api from '../../services/api';

import './styles.css';


export default class Autocomplete extends Component {

  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    suggestions: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };

    this.redirect = props.comunication;
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }

    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  _removeAcento(str) {

    const com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    const sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    let novastr="";

    for(let i=0; i<str.length; i++) {
        let troca=false;
        for (let a=0; a<com_acento.length; a++) {
          if (str.substr(i,1) === com_acento.substr(a,1)) {
            novastr+=sem_acento.substr(a,1);
            troca=true;
            break;
          }
        }

        if (troca === false) {
          novastr+=str.substr(i,1);
        }
    }
    return novastr;
  }

  onSubmitInput = e => {
    if(!this.state.userInput) {
      return false;
    }

    const value = this._removeAcento(this.state.userInput.replace(/\s/g, '').toLocaleLowerCase());

    api.get(`cities?q=${value}`, {
      headers: {
        'user-key': '77576b2dae845bf32c1de0795a7753e1'
      }
    }).then(res => {
      const { location_suggestions } = res.data;
      const id = location_suggestions.length > 0 ? location_suggestions[0].id : '';

      localStorage.setItem('city', this.state.userInput);
      localStorage.setItem('id', id);
    });

    this.redirect(true);
  }

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onSubmitInput,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>Nenhuma sugestão, no momento!</em>
          </div>
        );
      }
    }

    return (
      <div className="autocomplete">
        <span className="autocomplete__icon"><FaMapMarkerAlt size={40} color="f74a3e" /></span>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          className="suggestions__input"
          placeholder="Ex. São Paulo"
        />
        {suggestionsListComponent}

        <button className="suggestions__button" onClick={onSubmitInput}>Search</button>
      </div>
    );
  }
}
