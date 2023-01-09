import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };

  //이 함수가 true를 반환하면 특정 아이템은 남겨지고, false를 반환하면 남지 않음.
  //.filter는 새로운 배열을 반환 (원래 배열은 건드리지 않음)
  const filteredExpenses = props.items.filter((expense) => {
    //getFullYear() : date에서 4자리수 연도를 가져옴
    //toString() : String이 아닌 date객체형이므로 string으로 변환
    //=== : boolean값을 판별해서 선택된 옵션을 저장한 filteredYear와 같은지비교
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    //사용자 지정 컴포넌트에서 className을 사용하려면 해당 컴포넌트 안에서
    //동적으로 변수를 주입해야 한다.
    <div>
      <Card className="expenses">
        {/*map() : prps.items(expenses배열)의 모든요소에 영향을 줌 */}
        {/*expenses 배열에 있는 모든 expense를 JSX요소인 ExpenseItem에 매핑하겠습니다 라는 뜻*/}

        {/*리액트는 이러한 JSX 요소들을 가진 배열을 렌더링 할 수도 있다. */}
        {/*[<Card />, <Card />]*/}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
