import React from 'react'
import FilterLink from '../container/FilterLink'
import { ETodoVisibilityFilter } from '../../actions/todoActions'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <p>
        Show: <FilterLink filter={ETodoVisibilityFilter.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={ETodoVisibilityFilter.SHOW_UNCOMPLETED}>Active</FilterLink>
        {', '}
        <FilterLink filter={ETodoVisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
      </p>
    );
  }
  
}