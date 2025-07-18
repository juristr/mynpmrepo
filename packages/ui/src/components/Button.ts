import { ButtonProps } from '../types';

export class Button {
  private props: ButtonProps;

  constructor(props: ButtonProps) {
    this.props = props;
  }

  render(): string {
    const { label, variant = 'primary', disabled = false } = this.props;
    const classes = `btn btn-${variant}${disabled ? ' disabled' : ''}`;
    return `<button class="${classes}" ${disabled ? 'disabled' : ''}>${label}</button>`;
  }

  onClick(handler: () => void): void {
    if (!this.props.disabled) {
      this.props.onClick = handler;
    }
  }
}