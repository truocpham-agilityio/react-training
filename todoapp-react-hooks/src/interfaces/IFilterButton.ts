import { MouseEventHandler } from 'react';

export interface IFilterButton {
  text: string;
  isActivated: boolean;
  link: string;
  handleClick: MouseEventHandler<HTMLAnchorElement>;
}
