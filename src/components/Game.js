import { useAppContext } from "../context/app-context";
import StatsItem from "./StatsItem";
import { nanoid } from "nanoid";
import StarModal from "./StarModal";

const Game = () => {
  const { gameItemsFound } = useAppContext();
  return (
    <section className="game">
      <StarModal />

      <section className="legend">
        <header>Items discovered</header>

        <section className="itemList">
          {gameItemsFound.map((item) => (
            <StatsItem
              key={nanoid()}
              itemName={item.itemName}
              itemCount={item.itemCount}
            />
          ))}
        </section>
      </section>

      <aside className="changeLanguage">English</aside>
    </section>
  );
};

export default Game;
