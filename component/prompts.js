import { useState } from "react";
import styles from '@/styles/Home.module.css'
import data from "../data/prompts.json";


export default function Prompts(){

    let promptsNum = data.length;
  
    const [selectedIndex, setSelectedIndex] = useState(
      Math.floor(Math.random() * promptsNum) + 1
    );
    const [author, setAuthor] = useState(data[selectedIndex]?.author);
    const [sentence, setSentence] = useState(data[selectedIndex]?.sentence);
  
    function generateQuote() {
      setSelectedIndex(Math.floor(Math.random() * promptsNum) + 1);
      setAuthor(data[selectedIndex]?.author);
      setSentence(data[selectedIndex]?.sentence);
    }
  
    return (
      <>
        <button className={styles.icon} style={{alignSelf:"flex-end"}} onClick={generateQuote}>
          <img style={{padding:4}} src="/icons/change.png" />
        </button>
        <p>"{sentence}"</p>
        <p>--{author}</p>
      </>
    );
  }
  

  
