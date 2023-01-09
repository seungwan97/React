//useEffect는 컴포넌트가 렌더링되는 주기 안에서 사용되어야 하는 코드가 있을때 매우 유용함
//컴포넌트가 재렌더링될때는 좀 다르지만...
//useEffect는 컴포넌트가 실행할때 렌더링되는 것, useCallback은 무분별한 useEffect를 막아주는 것
//이때 useEffect는 useCallback 함수 뒤에 작성해주어야 한다.
import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoivesHandler = useCallback(async () => {
    //isLoading 최신화
    setIsLoading(true);
    setError(null);
    try {
      //fetch는 promise를 반환하는데 이는 잠재적 오류나 호출에 대한 응답에 반응할 수 있게 해준다.
      const response = await fetch(
        //firebase의 요구사항으로, URL끝에 내가사용할설정명.json을 추가해야함
        "https://react-http-3e87b-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      //여기에 인자로 들어온 response는 객체이다.
      //promise(response)를 json형태로 반환
      //이후 const 구문에서 작동하게 하기 위함
      const data = await response.json();

      //배열 생성
      const loadedMovies = [];

      //for문으로 data안의 모든 key(id) 확인
      for (const key in data) {
        //배열안에 차례대로 객체형태로 넣기
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      //넘겨받는 배열의 모든 객체를 새로운 객체로 변환
      // const transformedMovies = data.response.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      //state에 있는 movies를 data의 해당값으로 최신화해주고 밑의 movies를 state의 movies를 최신화
      // setMovies(transformedMovies);

      setMovies(loadedMovies);
      //isLoading 초기화
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  //첫번째는 실행될 함수, 두번째는 의존성 배열을 정의
  useEffect(() => {
    fetchMoivesHandler();
  }, [fetchMoivesHandler]);

  async function addMovieHandler(movie) {
    //요청전송하기
    const response = await fetch(
      "https://react-http-3e87b-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        //여기서 body는 json데이터를 필요로 함.
        body: JSON.stringify(movie),
        //headers를 키로하고 값으로 객체를 지정
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoivesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/**isLoading이 false 일때(함수가 실행전or실행완료일때) 출력값 출력 */}
        {/**isLoading이 true 일때(함수가 실행중 일때) Loading...출력 */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
