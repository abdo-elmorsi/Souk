import { StrictMode } from 'react'

import AppRouter from './routes/AppRouter'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <StrictMode>
            <AppRouter />
            <Toaster
                toastOptions={{
                    duration: 6000,
                }}
            />
        </StrictMode>
    )
}

export default App
