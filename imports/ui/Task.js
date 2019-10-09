import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Dialog from './components/Dialog';


import { Infos } from '../api/tasks.js';

// Task component - represents a single todo item
export default class Info extends Component {

  state = {
    isOpen: false
  }

  render() {
    return (
      <li>
        <span className="text">
          <strong>{this.props.info.firstname}</strong>: {this.props.info.comments}
        </span>
        <button onClick={(e) => this.setState({ isOpen: true })}>Details</button>

        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
        <ol>
        <li>First name: {this.props.info.firstname};</li>
        <li>Last name: {this.props.info.lastname};</li>
        <li>Email Address: {this.props.info.email};</li>
        <li>Telephone: {this.props.info.tel};</li>
        <li>Address: {this.props.info.address};</li>
        <li>City: {this.props.info.city};</li>
        <li>State: {this.props.info.state};</li>
        <li>Zip: {this.props.info.zip};</li>
        <li>Country: {this.props.info.country};</li>
        <li>Comment: {this.props.info.comments}</li>
        </ol>
        </Dialog>
      </li>
    );
  }
}
