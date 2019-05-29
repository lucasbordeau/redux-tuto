import React from 'react'
import { ETodoVisibilityFilter } from '../../actions/todoActions'
import RadioFilter from '../container/RadioFilter';

export default class FilterSelector extends React.Component {
  constructor(props) {
    super(props)

    this.handleRadioFilterOnClick = this.handleRadioFilterOnClick.bind(this);
  }

  handleRadioFilterOnClick(clickedFilter) {

  }

  render() {
    return(
      <Form>
        <div>
          <RadioFilter 
            onClick={this.handleRadioFilterOnClick}
            selected={false}
            label={"All"}
          />
        </div>


        {/* <FilterLink filter={ETodoVisibilityFilter.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={ETodoVisibilityFilter.SHOW_UNCOMPLETED}>Active</FilterLink>
        {', '}
        <FilterLink filter={ETodoVisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink> */}
      </Form>
    );
  }
  
}