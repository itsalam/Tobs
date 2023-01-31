import React from 'react'
import ReactDOM from 'react-dom/client'
import Popup from './components/buttons'
import { Settings } from './components/settings'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="App flex w-[26rem] h-80 flex-col shadow-white p-4 bg-gray-900 overflow-hidden text-slate-100 font-sm">
        <Popup/>
        <Settings/>
    </div>
  </React.StrictMode>,
)
