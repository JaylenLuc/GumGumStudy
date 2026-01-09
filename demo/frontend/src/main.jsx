import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux' // 1. Import Provider
import { store } from './store'       // 2. Import your store
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Wrap your App in the Provider and pass the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
