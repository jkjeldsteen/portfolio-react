import "./styles/Games.css";
export interface GameData {
    id: string;
    title: string;
    description: string;
    tags: string[];
    buildPath: string;
    previewImage: string;
    previewGif?: string;
}
export declare const GAMES: GameData[];
declare function Games(): import("react/jsx-runtime").JSX.Element;
export default Games;
