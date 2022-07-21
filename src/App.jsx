import { Card } from './components/Card'
import { Navbar } from './components/Navbar'

import data from './data'

import './styles/styles.css'

function App() {

  return (
    <div className="App">
    <header>
      <Navbar/>

    </header>

    <main>
      {data.map(item =>(
        <Card
          id = {item.id}
          item = {item}
        />
      ))}

    </main>
    </div>
  )
}

export default App
