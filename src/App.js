import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [word, setword] = useState("abcdadefgabc");

  const [unknown, setUnknown] = useState('_ '.repeat(word.length))

  const wordChange = (e) => {setword(e.target.value)}

  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f']

  const check = (e) => {
    console.log(e.target.value)
    // console.log(word.includes(e.target.value))
    if (word.includes(e.target.value)){
      let x = word.indexOf(e.target.value);
      let newword = word
      let y = -1
      while (x < newword.length-1 && x !== -1){
        x = newword.indexOf(e.target.value) === -1 ? word.length-1 : newword.indexOf(e.target.value)
        newword = newword.slice(x+1, word.length)
        y += word.slice(0, x+1).length
        console.log(x, newword, y);
        console.log(unknown)
        setUnknown(`${e.target.value}`)
        console.log(unknown)
      };
    }
    
    e.target.disabled = true
    }
  

  return (
    <>
    <Navbar />
    <input value={word} onChange={wordChange}></input>
    <p>{'_ '.repeat(word.length)}
    </p>
    <div>{
    alphabets.map((alphabet) => 
    <button value={alphabet} onClick={check} disabled={false}>{alphabet}</button> 
    )}
    </div>
    <Footer />
    </>
  );
}

export default App;
