import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        items: [],
        DataisLoaded: false
      }
    }
    
    componentDidMount() {
        fetch(
"https://newsapi.org/v2/everything?q=bitcoin&apiKey=6fba71e46a27405589e8af7cdf21cd5d")
.then((res) => res.json())
.then((data) => {
    this.setState({
        items: data.articles,
        DataisLoaded: true
    });
    console.log(this.state.items);
})
    }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;
        return (
        <div>
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ul>
                    Title: { item.title }, 
                    Author: { item.author }, 
                    Description: { item.description } 
                    </ul>
                ))
            }
        </div>
    )
  }
}

export default HomePage;
