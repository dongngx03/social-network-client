import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppProvider from './context/AppProvider.tsx'
import './index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Provider } from 'react-redux'
import store from './redux/store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>,
)
