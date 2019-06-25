import React,{Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './news.css'
import Trend from '../kaam/trending'

class News extends Component {
    state = {
        news : [ ],
        topic: [ ]
    }
    componentDidMount(){  
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=f71ef4255a714d97bc92dd8e23c9e0f2')
        .then(res=>{
            this.setState({
              news: res.data.articles.slice(0,10),
              topic : 'of India'
            }) 
            console.log(this.state.news);
            console.log(this.props.handleclick);
            
        })
    }

    componentDidUpdate(){
      const category= this.state.topic;
      console.log(category);
      
        axios.get('https://newsapi.org/v2/top-headlines?country=in&category='+category+'&apiKey=f71ef4255a714d97bc92dd8e23c9e0f2')
        .then(res=>{
            this.setState({
              news: res.data.articles.slice(0,10)
            }) 
            console.log(this.state.news);
            console.log(this.props.handleclick);
            
        })
    }


    handle=(topic)=>
    {
      this.setState({
        topic
      })
      console.log(this.state.topic);
    }
    render(){
      
      // var x = 1;
      const {news} = this.state
      const newslist = news.length ? (
        news.map (headline =>{
          return(
          <div className="news"> 
              <div className="imgs">
                <img src={headline.urlToImage} alt="No Image From Source" id="img"/>
              </div>
              <div className="content">
                <div className="headertwo">
                  {headline.title} 
                </div>
                <p className="desc">{headline.description}</p><br/>
                <p className="desc">{headline.content}</p> 
                <form action={headline.url} target="_blank" >
                <button className="but">Read More</button>
                </form>
              </div>
          </div>
          )
        })
      ):
      ( <div className="headtitle"></div> )
      return (
      <div>
      <Trend handledata={this.handle}/>
        {/* <div className="form">
        <div className="head">Top Headlines</div>
        <form className="" noValidate autoComplete="off" onSubmit={this.handlesubmit}>
            <TextField
                required
                fullWidth
                id="outlined-required" 
                label="Enter Country Name"
                className="text"
                style={{width:"30vh",marginLeft:"9vh"}}
                margin="normal"
                variant="outlined"
                onChange={this.handlechange}
            />  
            <button className="button">Get News</button>
            </form>
      </div> */}
      <div className="form">
        <span style={{marginLeft:"20vh"}}>
     
        </span>
      <div className="head">
      Top Headlines {this.state.topic}</div>
      </div>
      {newslist}
      </div>
    );
  } 
}
export default News;