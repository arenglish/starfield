import { AppState } from "./services/state.service";
import "./app.component.scss";
import { LifeCycleComponent } from "./components/lifecycle.component";
import { CarouselComponent } from "./components/carousel/carousel.component";

export class StarfieldApp extends LifeCycleComponent {
  constructor() {
    super(AppState);
  }
  connectedCallback() {
    let plane = new CarouselComponent();
    this.appendChild(plane);
  }
}
customElements.define("starfield-root", StarfieldApp);
