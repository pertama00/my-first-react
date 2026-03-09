// MyButton.jsx
// 매개변수 부분에서 바로 속성을 꺼내옵니다.
function MyButton({ onAction, color, title }) { 
  return (
    <button onClick={onAction} style={{ margin: '5px', backgroundColor: color }}>
      {title}
    </button>
  );
}

export default MyButton;