"use client";
import { Bird, City, GameOverSprite, Ground, Pipes, Score, InitialSprite } from '.'

class Game {
    private ctx: CanvasRenderingContext2D;
    private canvasWidth: number;
    private canvasHeight: number;
    private baseHeight: number;
    private initialSprite: InitialSprite;
    readonly bird: Bird;
    private flyingGravity: number;
    private city: City;
    private gameOverSprite: GameOverSprite;
    private ground: Ground;
    private score: Score;
    private pipes: Pipes;
    private hitAudio: HTMLAudioElement;
    private fallAudio: HTMLAudioElement;
    public runState: 'initial' | 'flying' | 'falling' | 'laying';
    constructor(
        ctx: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number,
        baseHeight: number
    ) {
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.baseHeight = baseHeight;
        this.initialSprite = new InitialSprite(ctx, canvasWidth, canvasHeight);
        this.bird = new Bird(ctx, canvasWidth, canvasHeight, baseHeight);
        this.flyingGravity = 800;
        this.city = new City(ctx, canvasWidth, canvasHeight);
        this.gameOverSprite = new GameOverSprite(ctx, canvasWidth, canvasHeight);
        this.ground = new Ground(ctx, canvasWidth, canvasHeight, baseHeight);
        this.score = new Score(ctx, canvasWidth, canvasHeight);
        this.pipes = new Pipes(ctx, canvasWidth, canvasHeight, baseHeight, this.bird, this.score);
        this.hitAudio = new Audio('/audio/flappybirdclone/hit.ogg');;
        this.hitAudio.volume = 0.1;
        this.fallAudio = new Audio('/audio/flappybirdclone/die.ogg');;
        this.fallAudio.volume = 0.1;
        this.runState = 'initial';
    }
    initial(delta: number) {
        this.city.update(delta);
        this.bird.update(delta);
        this.ground.update(delta);
        this.initialSprite.draw();
    }
    flying(delta: number) {
        this.city.update(delta);
        this.bird.update(delta);
        this.pipes.update(delta);
        this.ground.update(delta);
        this.score.draw();
        if (this.pipes.detectCollisionAndScore(this.bird)) this.toFalling();
        if (this.ground.detectCollision(this.bird)) this.toLaying();
    }
    falling(delta: number) {
        this.city.draw();
        this.pipes.draw();
        this.bird.update(delta);
        this.ground.draw();
        this.score.draw();
        if (this.ground.detectCollision(this.bird)) this.toLaying();
    }
    laying() {
        this.city.draw();
        this.pipes.draw();
        this.bird.draw();
        this.ground.draw();
        this.gameOverSprite.draw();
        this.score.draw();
        this.score.drawOnOver(this.canvasHeight * 0.5 - 30);
    }
    toFlying() {
        this.bird.gravity = this.flyingGravity;
        this.runState = 'flying';
    }
    toFalling() {
        this.hitAudio.play();
        this.fallAudio.play();
        this.runState = 'falling';
    }
    toLaying() {
        this.score.checkHighScore();
        this.hitAudio.play();
        this.runState = 'laying';
    }
}

export default Game