import "./carousel.component.scss";
import { LifeCycleComponent } from "../lifecycle.component";
import { AppState } from "../../services/state.service";
import { PlaneComponent } from "../plane/plane.component";

export class CarouselComponent extends LifeCycleComponent {
  private readonly layers = 80;
  private readonly speed = 20;
  private readonly windowMultiplier = 1;

  private get cycleTime() {
    return 1200 / this.speed;
  }

  private get layerOffsetTime() {
    return this.cycleTime / this.layers;
  }
  constructor() {
    super(AppState);
    this.style.width = `${window.innerWidth * this.windowMultiplier}px`;
    this.style.height = `${window.innerHeight * this.windowMultiplier}px`;

    let planes = [];
    for (let i = 0; i < this.layers; i++) {
      const starPlane = new PlaneComponent(
        window.innerWidth,
        window.innerHeight,
        this.cycleTime,
        this.layerOffsetTime * i
      );
      planes.push(starPlane);
      this.setupPlaneCycle(starPlane, i);
    }

    this.append(...planes.reverse());
  }

  private setupPlaneCycle(plane: HTMLElement, index: number) {
    plane.style.animation = `travel ${this.cycleTime}s infinite cubic-bezier(1,0,.87,.62)`;
    plane.style.animationDelay = `${this.layerOffsetTime * index}s`;
  }
}
customElements.define("starfield-carousel", CarouselComponent);
