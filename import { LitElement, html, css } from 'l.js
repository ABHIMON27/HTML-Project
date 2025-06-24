import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('image-transition')
class ImageTransition extends LitElement {
  @property({ type: String }) imageUrl = '';
  @property({ type: Number }) layers = 6;
  @property({ type: String }) origin = '150% 100%';
  @property({ type: String }) animate = 'scaleY';
  @property({ type: Number }) stagger = -0.12;
  @property({ type: Number }) initialScale = 1.3;
  @property({ type: Number }) duration = 0.5;
  @property({ type: String }) ease = 'power1.inOut';

  static styles = css`
    .image {
      background-size: cover;
      background-position: center;
      width: 300px;
      height: 400px;
    }
  `;

  render() {
    return html`
      <div
        class="image"
        style="background-image: url(${this.imageUrl});"
        data-repetition
        data-repetition-elems="${this.layers}"
        data-repetition-origin="${this.origin}"
        data-repetition-animate="${this.animate}"
        data-repetition-stagger="${this.stagger}"
        data-repetition-initial-scale="${this.initialScale}"
        data-repetition-duration="${this.duration}"
        data-repetition-ease="${this.ease}"
      ></div>
    `;
  }
}
