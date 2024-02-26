import './App.css'
import { Stars } from './components/stars/Stars'

function App() {
  return (
    <>
      <Stars count={3}/>
      <Stars/>
      <Stars count={1}/>
      <Stars count={'star'}/>
      <Stars count={5}/>
      <Stars count={0}/>
      <Stars count={8}/>
    </>
  )
}

export default App
