import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  /**
   * 핸들러는 state 값 설정 함수를 호출하는 레퍼런스만 제공
   * 버튼의 onClick에 직접 함수를 호출하게 작성하면
   * ex) onClick={setCount(Count + 1)}
   * onClick에 함수 호출이 들어가면 렌더링 동안에 계속해서 실행됨
   * ==> 무한하게 실행되는 상황 발생
   *
   * 핸들러를 사용하기 싫다면 화살표함수로 일시적인 레퍼런스 함수 생성
   */
  const onIncrease = () => {
    setCount(count + 1);
  };

  // useEffect(() => {
  //   console.log("Componenet Mounted");
  // }, []);

  // // 배열 안의 변수가 업데이트 되는 경우 호출
  // useEffect(() => {
  //   console.log(`${count} Componenet Updated`);
  // }, [count]);

  //컴포넌트가 언마운트될 때 리턴에 있는 부분 실행
  // useEffect(() => {
  //   console.log("useEffect");
  //   return () => {
  //     console.log("Component Unmounted");
  //   };
  // }, []);

  // 리스트에 변수를 넣고 리턴문을 작성하면, 변수가 변하기 전에 리터문이 실행
  // 리턴 실행 이후 useEffect가 다시 실행됨
  useEffect(() => {
    console.log(`Updated ${count}`);
    return () => {
      console.log(`Unmounted ${count}`);
    };
  }, [count]);

  return (
    <div>
      <p>COUNT: {count}</p>
      <button value={count} onClick={onIncrease}>
        +
      </button>
      <button
        value={count}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
