import React, { Component }  from "react";
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AccountsUIWrapper from './AccountsUIWrapper.js';


class Navigation extends Component {

	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar>

						<Button color="primary">
							<NavLink to="/">Home</NavLink>
						</Button>
						<Button color="primary">
							<NavLink to="/contact">Contact</NavLink>
						</Button>
						<Button color="primary">
							{ this.props.currentUser ?
					           <NavLink to="/admin">Admin</NavLink> : ''
					        }
						</Button>

             			 <AccountsUIWrapper />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(Navigation);
