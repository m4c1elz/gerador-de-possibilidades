import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app'
import { TruthTableProvider } from './providers/truth-table-context'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TruthTableProvider>
            <App />
        </TruthTableProvider>
    </StrictMode>,
)
