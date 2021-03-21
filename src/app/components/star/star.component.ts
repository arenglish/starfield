import "./star.component.scss";

export class StarComponent extends HTMLElement {
  private randomizePlacement(el: HTMLElement) {
    el.style.transform = `translate(${(
      this.containerWidth * Math.random()
    ).toString()}px, ${(this.containerHeight * Math.random()).toString()}px)`;
    return el;
  }

  constructor(
    public readonly containerWidth: number,
    public readonly containerHeight: number
  ) {
    super();

    this.style.width = this.containerWidth.toString();
    this.style.height = this.containerHeight.toString();

    const starlight = document.createElement("div");
    this.appendChild(this.randomizePlacement(starlight));
  }
}
customElements.define("starfield-star", StarComponent);
