import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {/** dataPoints는 배열*/}
      {/** .map()을 호출해 모든 각각의 dataPoint를 CharBar 컴포넌트에 매핑*/}
      {/** value를 읽어서 모든 dataPoint는 속성으로 value를 가짐 */}
      {/** 모든 차트의 바는 전체 차트의 최대값을 기준으로 값을 표시하므로 maxValue 설정*/}
      {/** maxValue는 dataPoint에서 추출한 것이 아닌 주어진 차트에서 차트바에 동일한 고유값이기 때문*/}
      {/** lable을 추가해서 차트요소를 표시 */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
