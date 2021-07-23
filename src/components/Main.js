import React, { useState, useEffect } from 'react';
import playicon from "../images/playicon.png";

import a from "../images/album/1.jpg";
import b from "../images/album/2.jpg";
import c from "../images/album/3.jpg";
import d from "../images/album/4.jpg";
import e from "../images/album/5.jpg";
import f from "../images/album/6.jpg";

import './Main.css';


function Main (){

    return(

        <div className="main">
            
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

            <div className="mainContents2">
                <div className="title">
                    매일코너
                </div>
                <div className="cont">
                    -당신만의 휴식을 알려주세요
                </div>
            </div>

            <div className="mainContents3">
               <div className="title">
                    다시듣기
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

            <div className="mainContents4">
                 <div className="title">
                    금주의 주제
                 </div>
                 <div className="cont">
                    <div className="cont4">
                        #내가 너를 만났을 때🎈
                    </div>
                    <div className="cont4">
                       #음악과 캠핑🎶
                    </div>
                    <div className="cont4">
                        #옛날 옛적에🥋
                    </div>
                    <div className="cont4">
                        #낭만을 잊은 그대에게🎉
                    </div>
                    <div className="cont4">
                        #라때는 그랬지🎨
                    </div>
                    <div className="cont4">
                        #'최애' 라고 아니..?💍
                    </div>
                 </div>
            </div>

            <div className="mainContents5">
                <div className="title">
                    선곡표
                 </div>
                 <div className="cont">
                    <div className='cont5'>
                        <img src={a} alt="앨범커버"/>
                        <p className="contTitle5">Permission to Dance</p>
                        <p className="contCont5">방탄소년단</p>
                    </div>
                    <div className='cont5'>
                        <img src={b} alt="앨범커버"/>
                        <p className="contTitle5">고백</p>
                        <p className="contCont5">장범준</p>
                    </div>
                    <div className='cont5'>
                        <img src={c} alt="앨범커버"/>
                        <p className="contTitle5">바라만본다</p>
                        <p className="contCont5">MSG워너비</p>
                    </div>
                    <div className='cont5'>
                        <img src={d} alt="앨범커버"/>
                        <p className="contTitle5">좋아좋아</p>
                        <p className="contCont5">조정석</p>
                    </div>
                    <div className='cont5'>
                        <img src={e} alt="앨범커버"/>
                        <p className="contTitle5">NextLevel</p>
                        <p className="contCont5">Aespa</p>
                    </div>
                    <div className='cont5'>
                        <img src={f} alt="앨범커버"/>
                        <p className="contTitle5">Weekend</p>
                        <p className="contCont5">태연</p>
                    </div>

                 </div>
            </div>

        </div>

    )

}

export default Main;