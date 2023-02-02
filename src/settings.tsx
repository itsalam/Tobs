import React from "react"
import ReactDOM from "react-dom/client"
import Popup from "./components/buttons"
import { Settings } from "./components/settings"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex h-[23.5rem] w-[26rem] flex-col overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-slate-100 shadow-white">
        <Popup/>
        <Settings/>
    </div>
  </React.StrictMode>,
)
