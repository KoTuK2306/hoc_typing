import { AdditionalComponentProps } from "@/hocs";
import { HTMLInputTypeAttribute } from "react";
import styled from "./input.module.css";

interface InputProps extends AdditionalComponentProps {
  type: HTMLInputTypeAttribute;
}

export const Input = ({ type, value, onChange }: InputProps) => {
  return (
    <input
      className={styled.input}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
