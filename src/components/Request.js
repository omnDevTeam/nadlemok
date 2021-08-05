import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from "react-router-dom";

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
                    사연신청 <input type='button' value='글쓰기'/>
                </div>
                
                <div className="cont">
                    <div className="board">
                        <table
                        >
                            <th width="100px">번호</th>
                            <th width="500px">제목</th>
                            <th width='100px'>작성자</th>
                            <th width='100px'>작성일</th>
                            <th width='100px;'>조회</th>

                            <tr>
                                <td>20559</td>
                                <td className='ttle'>무더운 여름을 이겨내는 노래가 필요해요 피디님 도와주세요!</td>
                                <td>지성민</td>
                                <td>2021.07.31</td>
                                <td>1245</td>
                            </tr>
                            <tr>
                                <td>20558</td>
                                <td className='ttle'>공부만 하다가 오늘 오랜만에 쉬었어요.</td>
                                <td>민선아</td>
                                <td>2021.07.31</td>
                                <td>9956</td>
                            </tr>
                            <tr>
                                <td>20557</td>
                                <td className='ttle'>[신청곡]김범수의 보고싶다</td>
                                <td>서영진</td>
                                <td>2021.07.31</td>
                                <td>4657</td>
                            </tr>

                            <tr>
                                <td>20556</td>
                                <td className='ttle'><Link to='/board=20559'>꿈, 그리고 오늘. 사연 신청합니다.</Link></td>
                                <td>변준수</td>
                                <td>2021.07.31</td>
                                <td>5123</td>
                            </tr>

                            
                            <tr>
                                <td>20555</td>
                                <td className='ttle'>[신청곡]BTS의 Permission to dance</td>
                                <td>현승호</td>
                                <td>2021.07.31</td>
                                <td>3324</td>
                            </tr>
                            <tr>
                                <td>20554</td>
                                <td className='ttle'>사랑하는 사람이 떠나갔어요 힘들 때 이겨내는 노래가 필요해요</td>
                                <td>김정아</td>
                                <td>2021.07.30</td>
                                <td>1575</td>
                            </tr>
                            <tr>
                                <td>20553</td>
                                <td className='ttle'>점차 행복이 찾아오는 지금</td>
                                <td>박민지</td>
                                <td>2021.07.30</td>
                                <td>2146</td>
                            </tr>
                            <tr>
                                <td>20552</td>
                                <td className='ttle'>현실적인 사연 신청합니다.</td>
                                <td>조서윤</td>
                                <td>2021.07.30</td>
                                <td>7546</td>
                            </tr>
                            <tr>
                                <td>20551</td>
                                <td className='ttle'>4456일동안 함께해줘서 고마워 너는 나의 영원한 별이야</td>
                                <td>장우진</td>
                                <td>2021.07.30</td>
                                <td>9421</td>
                            </tr>
                            <tr>
                                <td>20550</td>
                                <td className='ttle'>[신청곡]루이스의 안녕바다</td>
                                <td>박지민</td>
                                <td>2021.07.29</td>
                                <td>4565</td>
                            </tr>
                            <tr>
                                <td>20549</td>
                                <td className='ttle'>꿈을 이루기 위해 산다는건 뭘까요 멀고 먼 길을 가는 것 같은 좌절감</td>
                                <td>이성현</td>
                                <td>2021.07.29</td>
                                <td>4456</td>
                            </tr>
                            <tr>
                                <td>20548</td>
                                <td className='ttle'>힘들때 힘이 되는 노래 신청합니다</td>
                                <td>이경선</td>
                                <td>2021.07.29</td>
                                <td>7756</td>
                            </tr>
                            <tr>
                                <td>20547</td>
                                <td className='ttle'>엄마 사랑해 많이 사랑해</td>
                                <td>김유빈</td>
                                <td>2021.07.29</td>
                                <td>10223</td>
                            </tr>


                        </table>

                        <div className='pagenums'>
     
                            <span>◁</span>
                            <span className='nowpg'>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>▷</span>
                        </div>

                        <div className="searchbar">

                            <input type='search'
                            placeholder='검색'
                            name="searchBar"/>
                            <input type="button"
                            value="검색"/>

                        </div>

                    </div>
                </div>
            </div>

          

           
          


        </div>



    )


}


export default Request;