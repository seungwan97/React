import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //폼이 보여져야할지 아닐지만 알면되기 때문에 state는 true/false로 설정
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //여기서 enteredExpenseData는 ExpenseForm.js의 submitHandler에서 생성된 것으로
      //submitHandler의 expenseData를 가리킴
      ...enteredExpenseData,
      //해당 객체에 새로운 키로 id 추가
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/**&&연산자를 사용하면 &&의 앞 조건이 만족시 뒷 구문 실행 */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/*입력값을 위한 form 생성 */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
