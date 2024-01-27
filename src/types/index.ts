import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Order {
  img: string;
  name: string;
  date: string;
  amount: string;
  status: "Paid" | "Refund";
}
