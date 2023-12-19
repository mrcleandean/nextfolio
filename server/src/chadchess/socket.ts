import { Server, Socket } from 'socket.io';
import { ChatType, ClientToServerSocketEventTypes, GameChatType, ServerToClientSocketEventTypes } from '@/types/chadchess.ts';
import { Lobby } from './index.ts';
import type http from 'http';
import { Move } from 'chess.js';

const lobby = new Lobby();
import('node-schedule').then(schedule => {
    schedule.scheduleJob('0 2 * * *', () => {
        lobby.games = {};
    })
})

function setupSocket(server: http.Server) {
    const io = new Server<ClientToServerSocketEventTypes, ServerToClientSocketEventTypes>(server, { cors: { origin: '*' } });

    io.on('connection', (socket: Socket) => {
        socket.on('disconnect', () => {
            const game = lobby.games[socket.id];
            if (game) {
                const whiteId = game.whitePlayer.id;
                const blackId = game.blackPlayer.id;
                lobby.removeGame(whiteId, blackId);
            } else lobby.removePlayer(socket.id);
        })
        socket.on('lookForPair', (player, playerId) => {
            if (lobby.playerIsAlreadySearching(playerId)) {
                io.to(playerId).emit('pairingCancelled');
            } else if (lobby.findGameForPlayer(player, playerId)) {
                const game = lobby.games[playerId];
                const whiteId = game.whitePlayer.id;
                const blackId = game.blackPlayer.id;
                io.to(whiteId).to(blackId).emit('pairFound');
            } else {
                io.to(playerId).emit('noPairFound');
            }
        });
        socket.on('move', (playerId: string, move: Move) => {
            const game = lobby.games[playerId];
            game.move(playerId, move);
            io.to(game.whitePlayer.id).emit('updateBoard', game.chess.fen(), game.whiteToMove);
            io.to(game.blackPlayer.id).emit('updateBoard', game.chess.fen(), !game.whiteToMove);
        });
        socket.on('getGame', (playerId: string) => {
            const game = lobby.games[playerId];
            if (game) {
                const isWhitePlayer = game.whitePlayer.id === playerId;
                const isPlayersTurn = isWhitePlayer && game.whiteToMove || !isWhitePlayer && !game.whiteToMove;
                const { id, ...opponent } = isWhitePlayer ? game.blackPlayer : game.whitePlayer;
                io.to(playerId).emit('gotGame', opponent, game.chess.fen(), isWhitePlayer, isPlayersTurn);
            } else io.to(playerId).emit('noGameFound');
        })
        socket.on('chatSend', (chat: Omit<ChatType, 'time'>) => {
            if (chat.message.length > 200) return;
            const chatWithTime: ChatType = { ...chat, time: new Date() }
            lobby.addChat(chatWithTime);
            io.emit('chatReceived', chatWithTime);
        })
        socket.on('getInitialChats', (playerId: string) => {
            io.to(playerId).emit('initalChatsReceived', lobby.chats);
        })
        socket.on('gameChatSend', (chat: GameChatType, playerId: string) => {
            if (chat.message.length > 75) return;
            const game = lobby.games[playerId]
            io.to(game.whitePlayer.id).to(game.blackPlayer.id).emit('gameChatReceived', chat);
        });
    })
}

export default setupSocket;