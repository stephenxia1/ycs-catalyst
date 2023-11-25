import React from "react";
import Flashcard from "./Flashcard"; 

function FlashcardList({ flashcards }) {
  return (
    <div className="flashcard-list">
      {flashcards.map((card, index) => (
        <Flashcard key={index} card={card} />
      ))}
    </div>
  );
}

export default FlashcardList;