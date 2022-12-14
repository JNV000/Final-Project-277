import { useReducer } from "react";
import reducer from "./reducer";

// lets see if we can split game and login into separate hooks

export default function useGame() {
  // start with a null user and game
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    game: null,
  });
  const { user, game } = state;

  const setUser = (userData) => {
    dispatch({ type: "user_login", user: userData });
  };
  // this works for this project
  const makeMove = (event) => {
    dispatch({ type: "made_move", index: event.target.id });
  };

  const resetGame = () => {
    dispatch({ type: "reset_game" });
  };

  return {
    user,
    game,
    setUser,
    makeMove,
    resetGame,
  };
}
