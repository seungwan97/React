import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //props에서 얻는 모든 비용을 반복실행
  //객체가 아닌 배열을 탐색할때는 in이아닌 of를 쓴다.
  for (const expense of props.expenses) {
    //1월은 0을 반환 => 배열에서 0번째에 위치하므로 이를 판별하기 위한 수단으로 사용
    const expenseMonth = expense.date.getMonth();
    //선택된 dataPoint에 대해서 값을 업데이트
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
