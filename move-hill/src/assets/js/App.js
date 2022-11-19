import Hill from "./Hill";
import CuttleController from "./CuttleController";
import Sun from "./Sun";

export default class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.hills = [
      new Hill("#fd6bea", 0.2, 12),
      new Hill("#ff59c2", 0.5, 8),
      new Hill("#ff4674", 1.4, 6),
    ];

    this.cuttleController = new CuttleController();

    this.sun = new Sun();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    for (let i = 0; i < this.hills.length; i++) {
      this.hills[i].resize(this.stageWidth, this.stageHeight);
    }

    this.cuttleController.resize(this.stageWidth, this.stageHeight);

    this.sun.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.sun.draw(this.ctx, t);

    let dots;
    for (let i = 0; i < this.hills.length; i++) {
      dots = this.hills[i].draw(this.ctx);
    }

    this.cuttleController.draw(this.ctx, t, dots);
  }
}

window.onload = () => {
  new App();
};
