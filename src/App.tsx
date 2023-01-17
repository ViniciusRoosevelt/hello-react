import { useState } from 'react'
import { Header } from './header';
function Teste(props: { name: String }) {
  return <h1>{props.name}</h1>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header ></Header>
    </div>  
  );
}

export default App
