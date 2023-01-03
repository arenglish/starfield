import "./star.component.scss";

const objects = ["star", "planet-1"];
function randomCelestialObject() {
  return objects[Math.floor(Math.random() * objects.length)];
}
export class StarComponent extends HTMLElement {
  private randomizePlacement(el: HTMLElement) {
    el.style.left = `${this.containerWidth * Math.random()}px`;
    el.style.top = `${this.containerHeight * Math.random()}px`;
    return el;
  }

  private randomizeObjectType(el: HTMLElement) {
    el.className = randomCelestialObject();
    return el;
  }

  private get distanceFromCenter() {
    const centerX = this.fieldSize / 2;
    const centerY = this.fieldSize / 2;
    return Math.sqrt(
      Math.pow(Math.abs(centerX - this.starX), 2) +
        Math.pow(Math.abs(centerY - this.starY), 2)
    );
  }

  constructor(
    public readonly containerWidth: number,
    public readonly containerHeight: number,
    public readonly cycleTime: number,
    public readonly offsetTime: number,
    public readonly starY: number,
    public readonly starX: number,
    public readonly fieldSize: number
  ) {
    super();

    this.style.width = `${this.containerWidth}px`;
    this.style.height = `${this.containerHeight}px`;

    const starlight = document.createElement("div");
    starlight.style.animation = `grow ${this.cycleTime}s infinite cubic-bezier(1,0,.87,.62)`;
    const approxScaleFactor = this.distanceFromCenter / this.fieldSize;
    starlight.style.setProperty("--scale", approxScaleFactor.toString());
    starlight.style.animationDelay = `${this.offsetTime}s`;
    starlight.style.transform = "scale(.005)";
    console.log(starlight.style.animation);

    this.appendChild(
      this.randomizeObjectType(this.randomizePlacement(starlight))
    );
  }
}
customElements.define("starfield-star", StarComponent);
