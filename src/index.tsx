import App from './App'
import { createRoot } from 'react-dom/client'

const element = document.getElementById('root')
if (!element) {
  throw new Error('No app available !')
}
const root = createRoot(element)
root.render(<App />)
