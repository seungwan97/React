import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense, index) => (
        //새로운 아이템이 어느 위치에 있어야할지 판별하기 위해
        //"key" props추가 (사용자지정 컴포넌트이건, 내장컴포넌트건 사용가능)
        //고유판별할수 없는 요소가 없다면 매개변수로 index를 추가하여 관리
        //목록을 추가할 때는 결론적으로 항상 판별할 수 있는 고유요소가 있어야 한다.
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
