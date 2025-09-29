import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0); // 秒数で管理
  const intervalRef = useRef(null);

  // 分:秒 形式にフォーマット
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // メインボタン：リセットして即スタート
  const resetAndStart = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  // ストップ
  const stop = () => {
    clearInterval(intervalRef.current);
  };

  // リセットのみ
  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="container">

      <h1 className="stay-hard">STAY HARD!</h1>

      <h1 className="timer">{formatTime(time)}</h1>

      {/* 中央に大きな丸ボタン */}
      <button className="main-btn" onClick={resetAndStart}>
        Reset & Start
      </button>

      <div className="sub-buttons">
        <button className="sub-btn" onClick={stop}>⏸ Stop</button>
        <button className="sub-btn" onClick={reset}>🔄 Reset</button>
      </div>
    </div>
  );
}

export default App;