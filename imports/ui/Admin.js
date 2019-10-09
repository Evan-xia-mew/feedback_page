import React, { Component } from "react";
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDom from 'react-dom';
import Popup from 'react-popup';

import { Infos } from '../api/tasks.js';

import Info from './Task.js';



class Admin extends Component {


	constructor(props) {
	    super(props);

	    this.state = {
	      hideCompleted: false,
	    };
	  }

	  toggleHideCompleted() {
	    this.setState({
	      hideCompleted: !this.state.hideCompleted,
	    });
	  }

	  renderInfos() {
	    const currentUserId = this.props.currentUser && this.props.currentUser._id;
	    //if (! currentUserId) {
	      //throw new Meteor.Error('not-authorized');
	   // }

	    return this.props.infos.map((info) => {
	      return (
	        <Info
	          key={info._id}
	          info={info}
	        />
	      );
	    });
	  }

	render() {
		return (
			<div className="container">
		        <header>
		          <h1 >Contact Info List</h1>

		        </header>
		        <ul>
		          {this.renderInfos()}
	        </ul>

		    </div>
		);
	}
}


export default withTracker(() => {
  Meteor.subscribe('infos');

  return {
    infos: Infos.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(Admin);
