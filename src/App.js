import Exam1 from "./components/Exam1";
import Exam2 from "./components/Exam2";

function App() {
  return (
    // 이건 js 주석
    // 감싸고 있는 태그는 하나가 무조건 필요
    <div>
      {/* jsx 주석 */}
      <h1>Hello World!</h1>
      {/* <Exam1/> */}
      <Exam2/>
    </div>
  );
}

export default App;
