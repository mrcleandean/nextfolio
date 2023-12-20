import { Game } from "./index";
import type { UserObjectType, ChatType } from "demdevvyshared/chadchess";

class Lobby {
    games: { [playerId: string]: Game };
    playersSearching: (UserObjectType & { id: string })[];
    chats: ChatType[];

    constructor() {
        this.games = {};
        this.playersSearching = [];
        this.chats = [];
    }

    addGame(whitePlayerId: string, blackPlayerId: string, game: Game) {
        this.games[whitePlayerId] = game;
        this.games[blackPlayerId] = game;
    }

    removeGame(whiteId: string, blackId: string) {
        delete this.games[whiteId];
        delete this.games[blackId];
    }

    addPlayer(player: UserObjectType, playerId: string) {
        this.playersSearching.push({ ...player, id: playerId });
    }

    removePlayer(playerId: string) {
        this.playersSearching = this.playersSearching.filter(player => player.id !== playerId);
    }

    playerIsAlreadySearching(playerId: string) {
        const foundPlayer = this.playersSearching.some(player => player.id === playerId);
        if (foundPlayer) this.removePlayer(playerId);
        return foundPlayer;
    }

    findGameForPlayer(player: UserObjectType, playerId: string): boolean {
        this.addPlayer(player, playerId);
        if (this.playersSearching.length >= 2) {
            const player1 = this.playersSearching[0];
            const player2 = this.playersSearching[1];

            this.removePlayer(player1.id);
            this.removePlayer(player2.id);

            const newGame = new Game(player1, player2);
            this.addGame(player1.id, player2.id, newGame);

            return true;
        }
        return false;
    }

    addChat(chat: ChatType) {
        if (this.chats.length >= 20) {
            this.chats.shift();
        }
        this.chats.push(chat);
    }
}

export default Lobby;