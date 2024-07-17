import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './pages/HomePage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
