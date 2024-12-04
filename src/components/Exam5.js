import React, { useState } from 'react';
import App from './../App';

// JSX 예제
const Exam5 = () => {
  return <Exam5_5 isLogin={false}/>
};

// JSX 예제 1 : 자바스크립트 변수로 사용하기
const Exam5_1 = () => {
  const name = "React";
  const element = <h1>Hello, {name} !</h1>

  return element;
}

// JSX 예제 2 : img 태그 이미지 사용
const Exam5_2 = () => {
  const [userImg,setUserImg] = useState("https://i.ibb.co/b7CSJ51/image.jpg");
  const element = <img src={userImg} />

  return element
}

// JSX 예제 3: 로그인 여부에 따라 화면 다르게 보이기(if-else문)
const Exam5_3 = (props) => {

  if(props.isLogin){
    return <h1>환영합니다!</h1>;
  }else {
    return <h1>로그인 해주세요</h1>;
  }
}

// JSX 예제 4: 로그인 여부에 따라 화면 다르게 보이기(삼항연산자 -> JSX에서는 제일 많이 쓰는 문법)
const Exam5_4 = (props) => {
  return <h1>{props.isLogin ? '환영합니다^o^' : '로그인바람T^T'}</h1>

}

// JSX 예제 5: 배열을 이용한 화면 렌더링 (자주 사용!!!)
// - 서버에서 응답받은 데이터 대부분 배열(list) 형태
const Exam5_5 = (props) => {

  const members = ["짱구", "유리", "훈이", "철수", "맹구"];
  
  const listItems = members.map((mem,index) => <li kye={index}>{mem}</li>);
  //[ <li>짱구</li>, <li>유리</li>, <li>훈이</li>, <li>철수</li>, <li>맹구</li>]
  // -> 이런 형태의 새로운 배열을 만들어 반환

  //react-refresh-runtime.development.js:448  Warning: Each child in a list should have a unique "key" prop.
// reac가 동적인 리스트 렌더링할때
// 각 자식컴포넌트가 고유한 key값 속성을 가져야 한다는 규칙을 위배하면 발생하는게 대부분
// 고유한 key값은 작성하면 경고 해결
// 보통 key 값은 index값으로 사용함

  return <ul>{listItems}</ul>
}





export default Exam5;