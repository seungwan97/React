//리액트에서 파일명은 대문자로 시작하는 단어단위를 붙여서 마든다.

//컴포넌트가 다른곳에서 변경한 값을 state에 담은 것을 사용하기 위해 import
import React from "react";

//css파일 import하기
import "./ExpenseItem.css";
//컴포넌트안에 컴포넌트 import하기
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

//컴포넌트는 html코드를 반환하는 하나의 함수일 뿐이다.
//props를 할경우에는 매개변수명으로 'props'라고 받고 해당 변수명의 속성으로 접근한다.
//여기서 props는 props로 설정한 모든 변수명의 객체이다.
function ExpenseItem(props) {
  //이런 훅들은 리액트 컴포넌트 안에서 호출해야한다 (함수밖이나 중첩함수안에서는 호출할 수 없음)
  //배열형태로 반환됨
  //첫번째 요소는 관리되고 있는 값 자체, 두번째 요소는 나중에 새로운 첫번째값을 설정하기 위해 사용할 함수
  // const [title, setTitle] = useState(props.title);
  //state를 사용하는 이유??
  //props에 영향받지 않고 해당 컴포넌트만 값을 바꾸고 싶을때 사용하면됨
  //state라는 영역에게 대신 변수를 관리하라고 하고 필요할때 그곳에서 불러오는 개념임.
  // const clickHandler = () => {
  //   //useState의 title에 새로운 값을 등록함
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <li>
      //사용자 지정 컴포넌트에서 className을 사용하려면 해당 컴포넌트 안에서
      동적으로 변수를 주입해야 한다.
      <Card className="expense-item">
        {/* jsx는 html코드 같지만 엄연한 js코드.
              따라서 완전히 같은 속성이 아닌 경우도 있다.
              (가령 지금의 className처럼) */}

        {/* App에서 설정한 객체를 하위 컴포넌트의 하위컴포넌트로 쓰기 위함
      (더 안쪽에 있는 컴포넌트에도 사용하기 위해) */}
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          {/* js코드 동적 생성, props로 객체 받기 */}
          {/* state를 사용할때는 리턴값의 첫번째 요소를 사용 */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

//해당 컴포넌트를 사용하기 위해 이 파일의 기본 함수로 내보내겠다.
export default ExpenseItem;
