import type { UserObjectType } from '@/shared/types/chadchess.ts';
import { Chess, Move, Square } from "chess.js";

class Game {
    whitePlayer: UserObjectType & { id: string };
    blackPlayer: UserObjectType & { id: string };
    whiteToMove: boolean;
    chess: Chess;

    constructor(player1: UserObjectType & { id: string }, player2: UserObjectType & { id: string }) {
        this.whitePlayer = player1
        this.blackPlayer = player2
        this.whiteToMove = true;
        this.chess = new Chess();
    }

    playerCanMove(playerId: string) {
        const whiteMove = playerId === this.whitePlayer.id && this.whiteToMove
        const blackMove = playerId === this.blackPlayer.id && !this.whiteToMove
        return whiteMove || blackMove
    }

    move(id: string, move: Move) {
        if (this.playerCanMove(id)) {
            try {
                this.chess.move(move);
                this.whiteToMove = !this.whiteToMove;
            } catch (err) {
                console.log(err);
            }
        }
    }

    getLegalMoves(square: Square) {
        return this.chess.moves({ square })
    }
}

export default Game;