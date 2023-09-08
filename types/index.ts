import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface ButtonInputs {
  title:string;
  type? : 'submit' | 'reset' | 'button',
  containerStyles?: string;
  clickHandle?: MouseEventHandler<HTMLButtonElement>,
  textStyles:string,
  rightIcon?:string,
}


export interface ComboFilters {
  list:string[],
  filter: string,
  setFilter: (maker: string) => void,
  placeHolder:string,
  border?:string
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  city_mpg: number;
}

export interface ModalDTO{
  isOpen:boolean,
  setIsOpen: (value: boolean) => void,
  car: CarCardProps
}


export interface OptionProps {
  title: string;
  value: string;
}

export interface customFilterType {
  title: string;
  options: OptionProps[];
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export type ShowMoreComponent = {
  pageNumber:number
  loadMore:boolean
}