import { useState } from 'react'
import MyButton from './MyButton' // 1. 만든 컴포넌트 가져오기
import './App.css';                 // 스타일 시트 가져옴

function App() {
  const [count, setCount] = useState(0);

  // 버튼 정보를 담은 '데이터' 배열
  const buttonData = [
    { id: 1, text: "1 증가", color: "lightgreen", value: 1 },
    { id: 2, text: "5 증가", color: "skyblue", value: 5 },
    { id: 3, text: "리셋", color: "lightcoral", value: 0 },
  ];

  return (
    <div className="App">
      <h1>리스트 렌더링 연습</h1>
      <h2>현재 값: {count}</h2>

      {/* map 함수를 이용해 배열의 개수만큼 MyButton을 찍어냅니다. */}
      {buttonData.map((btn) => (
        <MyButton 
          key={btn.id} // 리액트가 목록을 구분하기 위해 'key'가 꼭 필요합니다!
          title={btn.text} 
          color={btn.color}
          onAction={() => btn.value === 0 ? setCount(0) : setCount(count + btn.value)} 
        />
      ))}
    </div>
  );
}
export default App;