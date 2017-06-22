import React from 'react';
import PropTypes from 'prop-types';
import {Counter} from './Counter';
import {connect} from 'react-redux';
import axios from 'axios';
import {SERVER_URL} from '../constants/config';
import {login, logout} from '../actions/authActions';

const performLogin = dispatchToken => {
  axios.post(`${SERVER_URL}/login`, {password: 'h4Xflix'}).then(response => {
    dispatchToken(response.data.token);
  });
};

const _FilterItems = ({
  filters,
  selectPage,
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
          href="#0"
          onClick={() =>
            loggedIn ? dispatchLogout() : performLogin(dispatchToken)}
        >
          {loggedIn ? 'Log out' : 'Login'}
        </a>
      </li>

      <li className="right">
        <a href="#0" onClick={() => selectPage('stats')}>Stats</a>
      </li>

      {filters.map(filter =>
        <li key={filter.category} onClick={() => selectTab(filter.category)}>
          <a className={filter.selected ? 'selected' : ''}>
            {filter.category}
          </a>
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
  selectPage: PropTypes.func.isRequired,
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
