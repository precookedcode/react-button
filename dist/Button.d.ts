import React from "react";
import { colors } from "@precooked/utils";
interface ButtonProps {
  title: string;
  onClick: () => void;
  color?: keyof typeof colors | string;
  borderRadius?: number;
  type?: "clear" | "outline" | "solid";
  disabled?: boolean;
  startIcon?: string;
  startIconPaths?: string[];
  startIconSize?: number;
  endIcon?: string;
  endIconPaths?: string[];
  endIconSize?: number;
  hasShadow?: boolean;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
