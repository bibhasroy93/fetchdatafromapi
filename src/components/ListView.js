import React, { Component } from 'react'
import styled,{ keyframes } from 'styled-components'

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-left: 20px;
  align-items: center;
  text-align: justify;
`;

const SubHeading = styled.h4`
  margin-left: 20px;
  align-items:left;
  text-align: left;
`;

const TodayTitle = styled.h1`
  font-size: 26px;
  margin-left: 20px;
  align-items: center;
  text-align: center;
  color: red;
`;

const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;

const Right=styled.div`
flex:1;
padding:20px;
`;

const LeftImage = styled.div`
  height: 200px;
  flex: 1;
`;

const Image = styled.img`
  height: 500px;
  width: 1000px;
`;

const Desc = styled.h4`
  font-size: 20px;
  line-height: 1.5em;
  text-align: justify;
`;





class ListView extends Component {
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
               <Container>
               {items.map((item) => ( 
                   <div>
                   <Left>
                     <Title>{ item.title }</Title>
                     <SubHeading>{ item.author } • ১৫ জানুয়ারী , ২০২২</SubHeading>
                   <LeftImage>
                     <Image src={item.urlToImage}/>
                     <Desc>{ item.description }</Desc>
                   </LeftImage>
                   </Left>
                   <Right>
                   
                   </Right>
                   </div>
                   ))}
                   </Container> 
            </div>
        )
    }
}

export default ListView
