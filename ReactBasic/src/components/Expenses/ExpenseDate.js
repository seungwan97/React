import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  console.log(props.date);
  //toLocaleString : 인간이 읽을 수 있는 형태로 수학공식 반환
  //매개변수로는 첫번째로 언어, 두번째로 해당 내용을 구체적으로 설정하는 객체
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const year = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  const day = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
