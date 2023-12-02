import Flashcard from "./Flashcard";
import FlashcardList from "./FlashcardList";
import React, { useState } from "react";
import './App.css';
import ".styles.scss";

const cards = [
  {
    id: "1",
    variant: "click",
    front: "testfront",
    back: "testback"
  },
];

export default function App() {
  return (
    <div className="container">
      <div className="row h-100">
        <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <Flashcard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

  const addFlashcard = () => {
    const newFlashcard = { front: "New Front", back: "New Back", variant: "click" };
    setFlashcards([...flashcards, newFlashcard]);
  };

  const removeFlashcard = (index) => {
    const newFlashcards = [...flashcards];
    newFlashcards.splice(index, 1);
    setFlashcards(newFlashcards);
  };

  return (
    <div className="app">
      <h1>Flashcard App</h1>
      <FlashcardList flashcards={flashcards} />
      <div>
        <button onClick={addFlashcard}>Add Flashcard</button>
      </div>
      {flashcards.length > 0 && (
        <div>
          <p>Click on a flashcard to remove it:</p>
          <FlashcardList
            flashcards={flashcards}
            onFlashcardClick={(index) => removeFlashcard(index)}
          />
        </div>
      )}
    </div>
  );
