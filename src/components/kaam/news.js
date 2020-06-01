import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './news.css';
import Filters from './filter';
import load from '../../images/805.gif';

class News extends Component {
  state = {
    news: [],
    topic: [],
    resp: ''
  };
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
    }, 1000);

    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&category&apiKey=f71ef4255a714d97bc92dd8e23c9e0f2'
      )
      .then(res => {
        this.setState({
          news: res.data.articles.slice(0, 10),
          topic: 'of India'
        });
        console.log(res.status);
        console.log(this.state.news);
        console.log(this.props.handleclick);
      });
  }

  // componentDidUpdate(){
  //   const category= this.state.topic;
  //   console.log(category);

      // axios.get('https://newsapi.org/v2/top-headlines?country=in&category='+category+'&apiKey=f71ef4255a714d97bc92dd8e23c9e0f2')
  //     .then(res=>{
  //         this.setState({
  //           news: res.data.articles.slice(0,10)
  //         })
  //         console.log(this.state.news);
  //         console.log(this.props.handleclick);
  //     })
  // }

  // handle=(topic,topic2)=>
  // {
  //     if(topic=='general'){
  //       topic2= 'of India';
  //     }
  //    axios.get('https://newsapi.org/v2/top-headlines?country=in&category='+topic+'&apiKey=f71ef4255a714d97bc92dd8e23c9e0f2')
  //     .then(res=>{
  //         this.setState({
  //           news: res.data.articles.slice(0,10),
  //           topic : topic2
  //         })
  //         console.log(this.state.news);
  //         console.log(this.props.handleclick);
  //       })

  // }

  handle2 = (country, topic) => {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
    }, 1000);
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=' +
          country +
          '&category=' +
          topic +
          '&apiKey=f71ef4255a714d97bc92dd8e23c9e0f2'
      )
      .then(res => {
        this.setState({
          news: res.data.articles.slice(0, 10),
          topic,
          resp: res.status
        });
        console.log(this.state.news);
        console.log(this.props.handleclick);
      });
  };

  showerr() {
    if (!this.state.resp || this.state.resp != '200') {
      return 'hello error';
    }
  }

  render() {
    // setTimeout(()=>this.handle(), 3000);
    // var x = 1;
    const { news } = this.state;
    const newslist = news.length ? (
      news.map(headline => {
        return (
          <div className="news">
            <div className="imgs">
              <img
                src={headline.urlToImage}
                alt="No Image From Source"
                id="img"
              />
            </div>
            <div className="content">
              <div className="headertwo">{headline.title}</div>
              <p className="desc">{headline.description}</p>
              <br />
              <p className="desc">{headline.content}</p>
              <form action={headline.url} target="_blank">
                <button className="but">Read More</button>
              </form>
            </div>
          </div>
        );
      })
    ) : (
      <div className="headtitle">{this.showerr}</div>
    );
    return (
      <div>
        <div id="loading">
          <img id="loading-image" src={load} alt="Loading..." />
        </div>
        <Filters handledata2={this.handle2} />
        <div className="form">
          <span style={{ marginLeft: '20vh' }}></span>
          <div className="head">Top Headlines {this.state.topic}</div>
        </div>
        {newslist}
      </div>
    );
  }
}
export default News;
