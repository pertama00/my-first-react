import { useState } from 'react'
import MyButton from './MyButton' // 1. 만든 컴포넌트 가져오기
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>컴포넌트 조립하기</h1>
      <p>현재 숫자: {count}</p>

      {/* 2. 조립해서 사용하기! title과 onAction은 우리가 정한 이름입니다. */}
      <MyButton title="1 증가" onAction={() => setCount(count + 1)} color="lightblue" />
      <MyButton title="1 감소" onAction={() => setCount(count - 1)} color="lightcoral" />
      <MyButton title="리셋" onAction={() => setCount(0)} color="red" />
    </div>
  )
}

export default App