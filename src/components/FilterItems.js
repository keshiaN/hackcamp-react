import React from 'react';
import PropTypes from 'prop-types';
import {Counter} from './Counter';
import {connect} from 'react-redux';
import axios from 'axios';
import {SERVER_URL} from '../constants/config';
import {login, logout} from '../actions/authActions';
import {Link, NavLink} from 'react-router-dom';

const performLogin = dispatchToken => {
  axios.post(`${SERVER_URL}/login`, {password: 'h4Xflix'}).then(response => {
    dispatchToken(response.data.token);
  });
};

const _FilterItems = ({
  filters,
  selectTab,
  counter,
  loggedIn,
  dispatchToken,
  dispatchLogout
}) => {
  return (
    <ul>
      <li className="placeholder">
        <a data-type="all" href="#0">All</a>
      </li>

      <li className="right">
        <a
          className="hand-cursor"
          onClick={() =>
            loggedIn ? dispatchLogout() : performLogin(dispatchToken)}
        >
          {loggedIn ? 'Log out' : 'Login'}
        </a>
      </li>

      <li className="right">
        <Link to="/stats">Stats</Link>
      </li>

      {filters.map(({category, selected}) =>
        <li key={category} onClick={() => selectTab(category)}>
          {/**
           * You should use a navlink here instead of a link
           * This navlink should add the className "selected"
           * if your link is supposed to be active (category selected)
           */}
          <NavLink to="/" activeClassName="selected" isActive={() => selected}>
            {category}
          </NavLink>
        </li>
      )}
      <Counter value={counter} />
    </ul>
  );
};

_FilterItems.propTypes = {
  filters: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  loggedIn: PropTypes.bool,
  dispatchToken: PropTypes.func.isRequired,
  dispatchLogout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  dispatchToken: token => dispatch(login(token)),
  dispatchLogout: () => dispatch(logout())
});

export const FilterItems = connect(mapStateToProps, mapDispatchToProps)(
  _FilterItems
);
