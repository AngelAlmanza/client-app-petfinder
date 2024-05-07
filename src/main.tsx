import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainRouter } from './router/index.tsx'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter />
    </Provider>
  </React.StrictMode>,
)
