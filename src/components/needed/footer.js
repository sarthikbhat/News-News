import React , {Component} from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="about">
                    <h4><i className="fa fa-info-circle"></i>  About</h4>
                    <p>It is a website made for learning purpose and to gain hands on knowledge 
                        about ReactJS.To fetch data I have used the google news API.
                        All the rights of this website is owned by me and only me
                    </p>
                </div>
                <div className="links">
                    <h4><i className="fa fa-code-branch"></i>  Quicklinks</h4>
                    <span><i className="fa fa-link"></i>  Top Headlines</span>
                    <span><i className="fa fa-link"></i>  Entertainment</span>
                    <span><i className="fa fa-link"></i>  Business</span>
                    <span><i className="fa fa-link"></i>  Health</span>
                    <span><i className="fa fa-link"></i>  Sports</span>
                    <span><i className="fa fa-link"></i>  Technology</span>
                    <span><i className="fa fa-link"></i>  Science</span>
                    <span><i className="fa fa-link"></i>  General</span>
                </div>
                <div className="social">
                    <h4>  Contact Me</h4>
                    <span><i className="fa fa-2x fa-facebook soc-fb"></i></span>
                    <span><i className="fa fa-2x fa-instagram soc-inst"></i></span>
                    <span><i className="fa fa-2x fa-github soc-git"></i></span>
                </div>
                <hr/>
                <div className="copyright">
                    <p>Copyright &copy; 2017 All Rights Reserved by Sarthik Bhat
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;