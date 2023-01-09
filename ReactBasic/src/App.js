//자동정렬 안될시
//setting-검색창에 editor format on save 검색 후 체크
//그래도 안되면 검색창에 editor default formatter 검색후 prettier설정

import React, { useState } from "react";

//해당 컴포넌트를 사용하기 위해 import함.
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//syntax(대체 함수 문법)
//개인취향이므로 그냥 이렇게 함수를 작성할 수도 있다는 것을 알고 있을것.
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //props 변수 설정

  const addExpenseHandler = (expense) => {
    //스프레드 연산자는 객체뿐만 아니라 배열에서도 사용할 수 있다.
    //이전 상태 또는 현상태의 스냅샷에 의존해서 상태를 업데이트 하기
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    //jsx코드 : js 안에 html 코드가 있는 것
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* 컴포넌트 안 주석작성방법 및 
      import한 컴포넌트의 사용은 이렇게 한다*/}
      {/* props를 사용하기 위해 해당 컴포넌트에서 
      사용할 매개변수명을 속성으로 설정해준다*/}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
