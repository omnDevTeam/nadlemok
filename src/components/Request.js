import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import playicon from "../images/playicon.png";

import a from "../images/album/1.jpg";
import b from "../images/album/2.jpg";
import c from "../images/album/3.jpg";
import d from "../images/album/4.jpg";
import e from "../images/album/5.jpg";
import f from "../images/album/6.jpg";
import './Request.css';



function Request (){

    return(
        <div className="request">
               
            <div className="mainContents1">
                <div className="title"> 
                    Today 
                </div>
                <div className="subject">
                    #잠시 멈추어봐요🧦
                </div>
                <div className="cont">
                    <p>청취자 여러분의 다양한 사연을 받는 시간!</p>
                    <p>매주 주제별로 당신만의 시간과 사연을 보내주세요. 나들목에서 낭독합니다. </p>
                </div>
            </div>

    

            <div className="mainContents3">
               <div className="title">
                    사연신청
                </div>
                <div className="cont">
                    <div className="rehear">
                    <img src={playicon} alt="재생"/>7/12(목) 나에게 들려온 목소리
                    </div>
                    <div className="rehear">
                    <img src={playicon} alt="재생"/>7/13(금) 나에게 들려온 목소리
                    </div>
                    <div className="rehear">
                    <img src={playicon} alt="재생"/>7/14(토) 나에게 들려온 목소리
                    </div>
                    <div className="rehear">
                    <img src={playicon} alt="재생"/>7/15(일) 나에게 들려온 목소리
                    </div>
                    <div className="rehear">
                    <img src={playicon} alt="재생"/>7/16(월) 나에게 들려온 목소리
                    </div>
                </div>
            </div>

          

           
          


        </div>



    )


}


export default Request;