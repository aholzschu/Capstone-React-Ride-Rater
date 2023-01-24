import React, { Component } from "react";
import './SearchBox.css';

export default class SearchBox extends Component {
    constructor(){
      super();
      this.state = {
        'search_string': ''
      }
    }

  onSearchChange = (event) => {
    const search_string = event.target.value

    this.setState(() => {
      return (
        {
          search_string:search_string
        }
      )
    })
  }
  render() {
    const {search_string} = this.state
    const { food } = this.props

    const filtered_food = food.filter((taste) => {
        return(
          taste.name.includes(search_string)
        )
    })

    console.log(filtered_food)

    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search Attraction"
          onChange={this.onSearchChange}
        />
        {filtered_food.map((taste) => {
          return (
            <h1 key={taste.name}>{taste.name}</h1>
          )
        })}
      </div>
    );
  }
}
