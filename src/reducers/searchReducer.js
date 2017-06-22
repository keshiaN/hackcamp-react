import {UPDATE_SEARCH_VALUE, SELECT_TAB} from '../constants/actions';
import {filters} from '../constants/filters';

export const initialState = {
  searchValue: '',
  filters,
  selectedFilter: 'All'
};

export const search = (state = initialState, action) => {
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
    case SELECT_TAB:
      return {
        ...state,
        selectedFilter: action.payload,
        filters: filters.map(
          filter =>
            filter.category === action.payload
              ? {...filter, selected: true}
              : {...filter, selected: false}
        )
      };

    default:
      return state;
  }
};
