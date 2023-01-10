import { useState, useEffect } from "react";

//use를 붙이는것은 엄격한 규칙이며 이는 react에게 커스텀훅으로서 사용할 것이고
//그 규칙을 지키겠다는 의미로 사용됨
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
    //forwards로 의존성을 설정하여 변화가 있을때마다 해당 함수(커스텀훅)가 재실행되게 함.
  }, [forwards]);

  return counter;
};

export default useCounter;
