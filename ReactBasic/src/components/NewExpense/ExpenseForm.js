import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //여러개의 state를 호출하려면??
  //useState를 한번 이상 호출하면 된다.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //한번에 여러개 state받기
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //event변수 : 기본적으로 반응하기 위해 브라우저 자체에서 변경이벤트가 감지되었을 때
  //event를 자동으로 얻도록 해준다.
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //이벤트의 값 자체를 불러올때
    // setUserInput({
    //   //이 구문은 단지 객체를 취해 모든 키와 쌍을 추출해서 이 새로운 객체에 추가하는 것
    //   //userInput이라는 변수객체에 요소들을 최신화 등록하는것
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //만약 하나씩 증가하는 카운터를 관리하고 있다면 상태를 업데이트하는 함수를 위한 대체 폼을 사용해야 한다.
    //위와 같이 호출하는 대신 호출해서 그 함수에 함수를 전달해야 한다.
    //함수에서 함수를 전달
    // setUserInput((prevState) => {
    //   //이전 state의 스냅샷을 얻어 새로운 state의 스냅샷을 반환해야 한다.
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    //이 방법은 가장 안전한 최신 state의 스냅샷을 얻는 방법
    //만약 state가 이전폼에 머물러있다면 이 함수를 사용할 것
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    //기본 요청이 보내지는 것을 막는 함수
    //페이지 리로드 방지
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //부모 컴포넌트에 설정된 함수호출
    //해당 컴포넌트 안의 함수가 아닐지라도 이렇게 함수를 실행할 수 있음.
    props.onSaveExpenseData(expenseData);
    //데이터전송 후 인풋창 비워주기
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  //onChange:변경을 감지할때마다 해당 함수를 호출
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
