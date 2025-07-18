import { InputProps } from '../types';

export class Input {
  private props: InputProps;

  constructor(props: InputProps) {
    this.props = props;
  }

  render(): string {
    const { placeholder = '', value, type = 'text' } = this.props;
    return `<input type="${type}" placeholder="${placeholder}" value="${value}" class="input" />`;
  }

  onChange(handler: (value: string) => void): void {
    this.props.onChange = handler;
  }

  getValue(): string {
    return this.props.value;
  }

  setValue(value: string): void {
    this.props.value = value;
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
}