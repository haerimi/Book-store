import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'sanitize.css'; 

async function mountApp() {
  // msw 활성화
  if (process.env.NODE_ENV === "development") {
    const { worker } = require('./mock/browser');
    await worker.start();  // worker.start()가 완료될 때까지 기다림
  }

  // MSW가 시작된 후에 React 앱을 렌더링
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

mountApp();
