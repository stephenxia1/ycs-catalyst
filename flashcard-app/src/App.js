import Flashcard from "./Flashcard";
import './App.css';
import ".styles.scss";

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
