
import ReactDOM from 'react-dom/client';
//css와 같은 파일명은 확장자명까지 써주여야함
import './index.css';
//js파일은 확장자 생략
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
