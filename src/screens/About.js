import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render(){
        return(
            <div className="about-wrapper">
                <div className="profile">
                    <img className="image" src={require('../images/face.jpeg')}/>
                    <div className="name">안상언</div>
                </div>
                <div className="introduce">
                    <div style={{marginBottom:100, fontSize:25}}>안녕하세요. 저는 1년차 개발자 안상언이라고 합니다.</div>
                    <div className="text">1년 전 친구와 사업을 시작했습니다.<br />
당시 프론트엔드, 백엔드가 뭔지도 모르고 주위에 도와줄 개발자도 없었던 저는 사무실에 라꾸라꾸 침대를 들고가서 사무실에서 자곤 하며 개발을 했습니다.<br />
그 결과 1년간 프론트엔드, 백엔드 개발, 서버 연결, 배포까지 모두 혼자 힘으로 해냈습니다.<br />
현재 새로운 일을 하고자 팀을 나와서 새로운 일을 찾고 있습니다.</div>
                </div>
            </div>
        )
    }
}

export default About;