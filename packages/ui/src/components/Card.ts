import { CardProps } from '../types';

export class Card {
  private props: CardProps;

  constructor(props: CardProps) {
    this.props = props;
  }

  render(): string {
    const { title, content, footer } = this.props;
    return `
      <div class="card">
        <div class="card-header">
          <h3>${title}</h3>
        </div>
        <div class="card-body">
          <p>${content}</p>
        </div>
        ${footer ? `<div class="card-footer">${footer}</div>` : ''}
      </div>
    `;
  }
}