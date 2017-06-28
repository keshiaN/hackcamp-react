import React from 'react';
import {MovieList} from './MovieList';
import {SideBarFilters} from './SideBarFilters';
import {FilterMenu} from './FilterMenu';

export const Main = () =>
  <main className="main-content">

    <FilterMenu />
    
    <MovieList />

    <SideBarFilters />
  </main>;
