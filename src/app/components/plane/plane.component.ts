import "./plane.component.scss";
import { LifeCycleComponent } from "../lifecycle.component";
import { AppState } from "../../services/state.service";
import { StarComponent } from "../star/star.component";

export class PlaneComponent extends LifeCycleComponent {
  private readonly size = 10;
  private readonly density = 1;

  constructor(
    public readonly scaleWindowWidth: number,
    public readonly scaleWindowHeight: number,
    public readonly cycleTime: number,
    public readonly offsetTime: number
  ) {
    super(AppState);
    this.generateTemplate();
  }

  private generateTemplate() {
    for (let i = 0; i < this.size; i++) {
      this.generateStarRow(i);
    }
  }

  private generateStarRow(rowIndex: number) {
    const cellWidth = this.scaleWindowWidth / this.size;
    const cellHeight = this.scaleWindowHeight / this.size;
    const yPos = cellHeight * rowIndex;

    for (let i = 0; i < this.size; i++) {
      const rand = Math.random() * 100;
      if (rand <= this.density) {
        const star = new StarComponent(
          cellWidth,
          cellHeight,
          this.cycleTime,
          this.offsetTime,
          rowIndex,
          i,
          this.size
        );
        // star.style.border = "1px white solid";
        star.style.transform = `translate(${cellWidth * i}px, ${yPos}px)`;
        this.appendChild(star);
      }
    }
  }
}
customElements.define("starfield-plane", PlaneComponent);
