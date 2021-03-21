import "./carousel.component.scss";
import { LifeCycleComponent } from "../lifecycle.component";
import { AppState } from "../../services/state.service";
import { PlaneComponent } from "../plane/plane.component";

export class CarouselComponent extends LifeCycleComponent {
  private readonly layers = 20;
  private readonly speed = 100;

  private get cycleTime() {
    return 1200 / this.speed;
  }

  private get layerOffsetTime() {
    return this.cycleTime / this.layers;
  }
  constructor() {
    super(AppState);

    for (let i = 0; i < this.layers; i++) {
      const starPlane = new PlaneComponent();
      // starPlane.style.transition = `transition ${this.cycleTime}`;
      starPlane.style.animation = `travel ${this.cycleTime}s infinite cubic-bezier(.5,0,1,.5)`;
      starPlane.style.animationDelay =
        (this.layerOffsetTime * i).toString() + "s";
      this.appendChild(starPlane);
    }
  }
}
customElements.define("starfield-carousel", CarouselComponent);
