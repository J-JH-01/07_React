// SpringBoot 서버로, React 클라이언트로 사용
//             요청 <-> 응답

import React, { useState } from 'react';
import App from './../App';

const Exam7 = () => {
  const [message,setMessage] = useState(null);
  const [user,setUser] = useState("");

  const getPortNumber = () => {
    fetch("http://localhost/getPortNumber")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMessage(data)
    }).catch((err) =>{
      console.log("error : " + err);
    })
  }

  const getUserInfo = () =>{
    //fetch 요청 POST
    // headers 설정 필수
    // body JSON 형태로 {name:홍길동, age:20}
    // 응답받은값을 user 상태에 세팅
    // catch(err 발생 시 코드 작성하기)

    fetch("http://localhost/getUserInfo", {
      method : "post",
      headers : {'Content-type' : 'application/json'},
      body : JSON.stringify({name : "홍길동", age : 20})
    })
    .then((res) => res.text())
    .then((data) => setUser(data))
    .catch ((err) => {
      console.log("err : " + err);
    })

  }

  return (
    <div>
      <p>1. 서버로부터 응답 받은 값</p>
      <button onClick={getPortNumber}>통신하기</button>
      <ul>
        {message?.map((msg, idx) => <li key={idx}>{msg}</li>)}
        {/* 초기값을 null말고 빈배열 넣으면 안전탐색연산자(?) 안넣어도 됨 */}
      </ul>    

      <p>2.서버로 값 전달 후, 응답받은 값</p>
      <button onClick={getUserInfo}>통신하기</button>
      <p>{user}</p>

    </div>
  );
};

export default Exam7;