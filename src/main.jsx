import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store/store.js'
import ThemeProvider from './compponents/Client/LayoutClient/ThemeProvider.jsx'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store} >
          <ThemeProvider>
          <App />
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
