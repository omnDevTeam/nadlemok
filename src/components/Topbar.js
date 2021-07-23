import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import './Topbar.css';
import logo from '../images/logo.png';




class Topbar extends Component{
    render() {
      return(

            <div className="mainTopbar">

                <div className="mainTopbarContents">

                        <div className="homeButtons">
                            <span className="logoHome">
                                <Link to="/">
                                    <img src={logo} alt="로고"/>
                                </Link>
                            </span>

                            <span className="textHome">
                                <span>
                                코너소개
                                </span>
                                <span>
                                다시듣기
                                </span>
                                <span>
                                선곡표
                                </span>
                                <span>
                                보이는 라디오
                                </span>
                                <span>
                                선물당첨
                                </span>
                            </span>

                        </div>

                
                        <div className="optionButtons">
                            <span className="upload">
                                <Link to="/request">사연신청</Link>
                            </span>
                            <span className="account">
                                <Link to="/account">계정</Link>
                            </span>
                        </div>
                        
                
                </div>

            </div>
 
      );
    }
  }



export default Topbar; //필수