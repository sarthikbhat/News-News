import React,{Component} from 'react';
import './nav.css'
import title from '../../images/logo.jpg'

class Navbar extends Component {

  state={
    time : false
  }

    componentDidMount() {
      setInterval(() => this.setState({time:true}), 1000);
    
        // var scroll = window.scrollTop();
        // if(scroll>300){
        //   document.getElementById("nav").style.backgroundColor="none"
        // }
        // else{
        //   document.getElementById("nav").style.backgroundColor="red"; 
        // }
      
    
    }

  render(){
    let dispdate=new Date();
    var month=dispdate.getMonth();
    let day=dispdate.getDay();
    let hours=dispdate.getHours();
    let hour = hours % 12;
    hour = hour ? hour : 12;
    let min=dispdate.getMinutes();
    let sec=dispdate.getSeconds();
    let date=dispdate.getDate();
    switch(month){
        case 0 :month='January';break;
        case 1 :month='February';break;
        case 2 :month='March';break;
        case 3 :month='April';break;
        case 4 :month='May';break;
        case 5 :month='June';break;
        case 6 :month='July';break;
        case 7 :month='August';break;
        case 8 :month='September';break;
        case 9 :month='October';break;
        case 10:month='November';break;
        case 11:month='December';break;
        default:break;
    }
    switch(day){
        case 0:day='Sunday';break;
        case 1:day='Monday';break;
        case 2:day='Tuesday';break;
        case 3:day='Wednesday';break;
        case 4:day='Thursday';break;
        case 5:day='Friday';break;
        case 6:day='Saturday';break;
    }
    
    if(hour<10)
    {
            hour = "0"+hour;
    }
    if(min<10)
    {
            min = "0"+min;
    }
    if(sec<10)
    {
            sec = "0"+sec;
    }

      return (
      <div className="App navbar" id="nav">
          <div className="nav">
            <div className="title">
                <img src={title} alt="Ek News Ka Logo" id="logo"/>
                 <div className="header">News-News</div>
                </div>
            <div className="time"><span>{day}, {date}{date==1?('st'):(date==2?('nd'):(date==3?('rd'):('th')))} {month} | {hour}:{min} {hours >= 12 ?("PM"):("AM")}</span>
              </div>
          </div>
      </div>
    );
  } 
}
export default Navbar;
