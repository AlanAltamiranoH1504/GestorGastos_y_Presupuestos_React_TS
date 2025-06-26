import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ToastContainer} from "react-toastify";
import './index.css'
import App from './App.tsx'
import {BudgetProvider} from "./context/BudgetContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BudgetProvider>
            <App/>
            <ToastContainer/>
        </BudgetProvider>
    </StrictMode>,
)
