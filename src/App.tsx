import "./App.scss"

import Main from "./components/Main/Main"
import { beers } from "./Data/Beers"

function App() {
 

  return (
    <>
  
      <div>
      <h1>Punk Api</h1>
      <Main beers={beers} />
       </div>
       </>
  )
}

export default App
