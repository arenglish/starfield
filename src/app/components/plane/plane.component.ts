import "./plane.component.scss";
import { LifeCycleComponent } from "../lifecycle.component";
import { AppState } from "../../services/state.service";
import { StarComponent } from "../star/star.component";

export class PlaneComponent extends LifeCycleComponent {
  private readonly size = 10;
  private readonly density = 50;

  constructor() {
    super(AppState);
    this.generateTemplate();
  }

  private generateTemplate() {
    for (let i = 0; i < this.size; i++) {
      this.generateStarRow(i);
    }
  }

  private generateStarRow(rowIndex: number) {
    const cellWidth = window.innerWidth / this.size;
    const cellHeight = window.innerHeight / this.size;
    const yPos = cellHeight * rowIndex;

    for (let i = 0; i < this.size; i++) {
      const rand = Math.random() * 100;
      if (rand <= this.density) {
        const star = new StarComponent(cellWidth, cellHeight);
        star.style.transform = `translate(${cellWidth * i}px, ${yPos}px)`;
        this.appendChild(star);
      }
    }
  }
}
customElements.define("starfield-plane", PlaneComponent);
