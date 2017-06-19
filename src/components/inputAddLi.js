import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

export default class InputAddLi extends Component {
  addLi(){
    this.props.addLiFromInput(this.liInput.value);
    this.liInput.value = '';
  }
  findLi(){
    this.props.findLi(this.serchInput.value);
  }
  render() {
    const { inner } = this.props;
    return <div className='ib inputAddLi'>
      <div>
        <input ref={(input) => {this.liInput = input}} />
        <button
          onClick={this.addLi.bind(this)} >
          Добавить
        </button>
      </div>
      <div>
        <input ref={(input) => {this.serchInput = input}} />
        <button
          onClick={this.findLi.bind(this)} >
          Искать
        </button>
      </div>
      <ul>
        {
          inner.map((track, index) =>
          <li key={index}>
            <Link to={`/inputAddLi/${track}`}>{track}</Link>
          </li>
          )
        }

      </ul>
    </div>
  }

}

InputAddLi.propTypes = {
  inner: PropTypes.array.isRequired,
  addLiFromInput: PropTypes.func.isRequired,
}
