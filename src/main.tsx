import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './assets/css/reset.css'
import 'aos/dist/aos.css';

import App from './App.tsx'
import Provider from './provider/povider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </>,
)
