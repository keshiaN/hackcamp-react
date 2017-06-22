import {SELECT_TAB, UPDATE_SEARCH_VALUE} from '../constants/actions';
import {filters} from '../constants/filters';

export const initialState = {
  searchValue: '',
  filters,
  selectedFilter: 'All'
};

const search = (state = initialState, action) => {
  switch (action.type) {
    /**
     * Looks like Steve didnt write the test for this switch case ...
     */
    case UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    /**
     * Steve also forgot to implement a few switch cases here...
     * You should implement the missing switch cases
     **/
  }
};
