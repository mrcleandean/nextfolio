import { Dispatch, SetStateAction } from "react"
import { Socket } from "socket.io-client"


export type SetStateType<T> = Dispatch<SetStateAction<T>>

export type UserObjectType = {
    pic: string | null,
    name: string
}

export type MoveObjectType = {
    from: string,
    to: string,
    promotion: 'q'
}
// General ChatType is for the chat in the home component between all players globally
export type ChatType = {
    username: string,
    pic: string,
    message: string,
    time: Date
}
// GameChatType is for the chat in the game component between two players
export type GameChatType = {
    username: string,
    message: string
}

export type ClientToServerSocketEventTypes = {
    lookForPair: (player: UserObjectType, playerId: string) => void;
    move: (playerId: string, move: MoveObjectType) => void;
    getGame: (playerId: string) => void;
    chatSend: (chat: Omit<ChatType, 'time'>) => void;
    getInitialChats: (playerId: string) => void;
    getInitialGameChats: (playerId: string) => void;
    gameChatSend: (chat: Omit<GameChatType, 'username'>, playerId: string) => void;
}

export type ServerToClientSocketEventTypes = {
    pairingCancelled: () => void;
    pairFound: () => void;
    noPairFound: () => void;
    gotGame: (opponent: UserObjectType, fen: string, isWhitePlayer: boolean, isPlayersTurn: boolean) => void;
    noGameFound: () => void;
    updateBoard: (fen: string, isPlayersTurn: boolean) => void;
    chatReceived: (chat: ChatType) => void;
    initalChatsReceived: (chats: ChatType[]) => void;
    gameChatReceived: (chat: GameChatType) => void;
}

export type GameDisplayType = {
    side: 'white' | 'black',
    isTurn: boolean,
    fen: string
}

export type MenuDisplayType = {
    pictureDisplay: boolean,
    nameText: string,
    strength: number,
    finding: boolean,
    connected: boolean
}

export type GamePropTypes = {
    gameDisplay: GameDisplayType,
    setGameDisplay: SetStateType<GameDisplayType>,
    player: UserObjectType,
    opponent: UserObjectType,
    socket: Socket<ServerToClientSocketEventTypes, ClientToServerSocketEventTypes> | null
}

export type MenuPropTypes = {
    player: UserObjectType,
    setPlayer: SetStateType<UserObjectType>,
    menuDisplay: MenuDisplayType,
    setMenuDisplay: SetStateType<MenuDisplayType>,
    socket: Socket<ServerToClientSocketEventTypes, ClientToServerSocketEventTypes> | null
}

export type PlayerContextType = {
    player: UserObjectType,
    setPlayer: SetStateType<UserObjectType>,
    socket: Socket<ServerToClientSocketEventTypes, ClientToServerSocketEventTypes> | null
};