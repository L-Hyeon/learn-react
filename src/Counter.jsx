import React, { useState } from "react";

function Counter() {
  const [Count, setCount] = useState(0);

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
    setCount(Count + 1);
  };

  return (
    <div>
      <p>COUNT: {Count}</p>
      <button value={Count} onClick={onIncrease}>
        +
      </button>
      <button
        value={Count}
        onClick={() => {
          setCount(Count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
