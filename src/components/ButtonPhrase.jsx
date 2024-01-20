import React from 'react';
import phrases from '../utils/phrases.json';
import randomIndes from '../services/randomIndes';
import bgArray from '../utils/bgArray.json';

const ButtonPhrase = ({setQuote, setBgApp}) => {

  
   
    const handleButton = () => {
      const bgImg = randomIndes(bgArray);
      const sentence = randomIndes(phrases);
    setQuote(sentence);
    setBgApp(bgImg)
    }

  return (
    <button onClick={handleButton}>Probar mi suerte</button>
  )
}

export default ButtonPhrase;