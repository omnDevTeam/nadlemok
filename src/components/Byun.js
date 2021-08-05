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
                        <table>
                            <th width='200px'>20556</th>
                            <th id='byuntitle'>꿈, 그리고 오늘. 사연 신청합니다.</th>
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
                                
                                안녕하세요 저는 20대의 마지막을 보내고있는 한 청년 변준수라고합니다.<br/>
                                여러분과 함께 듣고싶은 노래가 있어서 사연을 신청하게 되었습니다.<br/><br/>

                                저를 비롯하여 제 주변의 친구들을 보면 꿈을 꾸고 그 꿈을 이루기까지 <br/>
                                너무 힘들고 지쳐하는 이들이 많은 것 같습니다. <br/><br/>

                                저 또한 음악의 꿈을 꾸지만 쉽지 않다는 걸 매일 매일 느낍니다.<br/>
                                잘하는 사람은 왜 이렇게 많은지.. 내 고민을 들어줄 사람은 없는건지..<br/>
                                성대수술로 인한 어려움 등 여러가지 꿈을 가로막는 일들이 저를 더욱 지치게 했습니다. <br/><br/>


                                내가 음악을 할 수 있을까, 과연 이 길이 맞을까, 나는 잘 하고 있는걸까 <br/>
                                매일 고민하며 힘들어한 시기가 있었습니다. <br/><br/>

                                저와 같은 고민을 가진 분들이 많을 것이라고 생각합니다. <br/>
                                매일 일상이 똑같고 일이 풀리지 않는 것 같은 어려운 시기이지만 다들 잘 견뎌내고 있다고 말하고 싶습니다. <br/>
                                끝까지 힘을내면 결국 행복한 날이 올거에요.    <br/><br/>

                                우리 같이 꿈을 향해 힘을 내봐요! <br/>
                                저와 같은 고민이 있으신 분들께 위로의 마음을 전하고 싶어 신용재의 오늘 신청합니다.<br/><br/>

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