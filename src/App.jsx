
import './App.css'
import RandomPhrase from './components/RandomPhrase';
import phrases from './utils/phrases.json';
import randomIndes from './services/randomIndes';
import { useState } from 'react';
import ButtonPhrase from './components/ButtonPhrase';
import bgArray from './utils/bgArray.json';

function App() {

const sentence = randomIndes(phrases);
const bgIndex =  randomIndes(bgArray);
const [quote, setQuote] = useState(sentence);
const [bgApp, setBgApp] = useState(bgIndex);


const bgStyle = {
  backgroundImage: `url('../img/fondo${bgApp}.jpg')`,
}

  return (
    <div className='app' style={bgStyle}>
    <div className='container'>
    <h1>Galleta de la fortuna</h1>

    <ButtonPhrase 
    setQuote={setQuote}
    setBgApp={setBgApp}
    />
    
    <RandomPhrase 
    quote={quote}
    />

</div>
</div>


     
   
  )
}

export default App
