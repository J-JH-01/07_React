import React, { useState } from 'react';

//부모 컴포넌트
const Exam4 = () => {
  // 자식 컴포넌트의 상태 id,pw를 끌어올려서 작성
  const[id,setId] = useState("");
  const[pw,setPw] = useState("");
  
  // 자식 컴포넌트의 상태 변경 함수도 부모로 끌어올려 작성
  const onChangeId = (event) => {
    setId(event.target.value);
  }
  const onChangePw = (event) => {
    setPw(event.target.value);
  }


  return (
    <div>
      {/* 자식 컴포넌트의 props로 상태 변경 함수 전달 */}

      <Id onChangeId={onChangeId}/>
      <Pw onChangePw={onChangePw}/>
      <div>
            <button disabled={id.length === 0 || pw.length === 0}>LogIn</button>
            {/* 자식이 가진 id,pw 라는 상태값을 부모컴포넌트가 알 방법이 없다 
              -> 부모 컴포넌트로 자식의 상태를 끌어올려사용
            */}

      </div>
    </div>
  );
};


//자식 컴포넌트 Id
const Id = (props) => {

 

  return (
    <div>
      <label> ID : </label>
                      {/* props에 담긴 onChnageId 함수 사용 */}
      <input onChange={props.onChangeId}/>
    </div>
  );
};


//자식 컴포넌트 Pw
const Pw = ({onChangePw}) => {
  // 부모에게 전달받은 props에서 key가 onChangePw만 꺼내기
  return (
    <div>
       <label> Pw : </label>
                                        {/* onChagnePw만 바로 사용가능 */}
       <input type='password' onChange={onChangePw}/>
    </div>
  );
};

export default Exam4;