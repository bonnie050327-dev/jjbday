import { createBrowserRouter } from "react-router";
import { StartScreen } from "./components/StartScreen";
import { GameScreen } from "./components/GameScreen";
import { FinalMessage } from "./components/FinalMessage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: StartScreen,
  },
  {
    path: "/game",
    Component: GameScreen,
  },
  {
    path: "/final",
    Component: FinalMessage,
  },
]);