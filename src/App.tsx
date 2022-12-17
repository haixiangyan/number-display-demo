import React, {useEffect, useMemo, useState} from 'react';
import NumberDisplay from "./components/NumberDisplay";
import styles from './styles.module.scss';
import dayjs from "dayjs";

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 1. 做一个垂直的 0-9 div
// 2. 滚动到 7 时，div 就要垂直移动到 7 * height 个单位
function App() {
  const [time, setTime] = useState<number>(Date.now().valueOf());
  const [numberString, setNumberString] = useState<string>('123');

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now().valueOf());
    }, 1000);
  }, []);

  const timeStr = useMemo(() => {
    return dayjs(time).format('HH:mm:ss');
  }, [time]);

  useEffect(() => {
    setInterval(() => {
      setNumberString(getRandomNumber(100, 999).toString());
    }, 2000);
  }, []);

  return (
    <div className={styles.app}>
      <NumberDisplay numberString={numberString} />
    </div>
  );
}

export default App;
