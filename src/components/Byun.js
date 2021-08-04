import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from "react-router-dom";

import './Byun.css';



function Byun (){

    return(
        <div className="Byun">
               
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
                   <div className='goback'>
                       <Link to='/request'>〈뒤로가기</Link>
                    </div>
                    사연신청 <input type='button' value='수정'/>
                </div>
                
                <div className="cont">
                    <div className="board">
                        <table
                        >
                            <th width='200px'>20557</th>
                            <th id='byuntitle'>test2</th>
                            <th></th>
                            <th width='100px'>●●●</th>

                            <tr className='plsbold'>
                                <td>변준수</td>
                                <td id='guide'>2021.07.31 14:25 </td>
                                <td></td>
                                <td>조회수 5123</td>
                            </tr>

                            <tr className='forcontent'>
                                <td colSpan='3'>
                                
                                    안녕하세요. 뀨디...<br/>
                                    저는 어릴적에 저희 아빠를 별로 좋아하지 않았어요.<br/>
                                    경제력이 좋으셨던 것도 아니었고 가정적이지도 않아서 엄마를 고생시키는 아빠를<br/>
                                    미워하기만 했었죠.<br/><br/>

                                    5년 전, 갑작스럽 아빠의 위암판정으로 위 전체를 절제하는 큰 수술을 받으셨습니다.<br/>
                                    배도 많이 나왔고 음식도 항상 많이 드시던 아빠였는데 수술 수 몰라보게 살이 많이 빠졌고<br/>
                                    그렇게 잘 드시던 음식도 많이 드시질 못 해요...<br/><br/>

                                    며칠 전에는 갑자기 힘도 없이 풀썩 주저 앉아서 병원 응급실로 갔고 입원까지 하셨어요.<br/>
                                    위 절제로 인해서 음식물의 영양소가 몸에 흡수가 되지 않아서 기운도 없고 빈혈까지 심한 상태였죠...<br/><br/>

                                    이런 모습의 아빠를 보고 있자니 마음이 많이 안 좋아졌습니다.<br/>
                                    그렇게 싫어하던 아빠 였는데 힘도 없고 음식도 잘 못 드시고 기운 없이 걸어가는 그 뒷모습에<br/>
                                    저도 모르게 울컥 눈물이 나더라구요....<br/><br/>

                                    어제 퇴원을 하고 집에 모셔다 드리고 오는 차안에서 혼자 많이 울었습니다.<br/>
                                    그래도 조금 더 건강하게 지내셨으면 좋겠는데 자꾸 건강이 안 좋아지는 모습에 마음이 너무 안 좋았습니다.<br/><br/>

                                    뀨디... 어른이 되서 지켜보는 부모님의 뒷 모습은 이렇게 슬플 수 밖에 없는 걸까요?<br/>
                                    아픈 아빠도.. 아픈 아빠를 돌보는 엄마도.. 자꾸 제 마음을 슬프게만 합니다...<br/><br/>

                                    아빠와 엄마가 건강하셨으면 좋겠어요. 아직 못 해드린게 많으니까 조금 더 건강하셔서 좋은 곳에 많이<br/>
                                    함께 갈 수 있는 시간이 많았으면 좋겠습니다.<br/>
                                    한번도 한 적 없는 말인데 이 자릴 빌어 드릴게요.. 아빠, 엄마... 진짜 많이 사랑합니다.<br/>
                                    오래 같이 계셔 주세요.....<br/><br/>

                                    신청곡은 김진호님의 가족사진.. 듣고 싶습니다.<br/><br/>

                                </td>
                            </tr>
                           

                        </table>

                        <div className='bottoms'>

                            <input type='button' value='신고'/>
                            <input id='nexts' type='button' value='다음'/>
                            <input id='lists'type='button' value='목록≡'/>

                        </div>

                    </div>
                </div>
            </div>

          

           
          


        </div>



    )


}


export default Byun;