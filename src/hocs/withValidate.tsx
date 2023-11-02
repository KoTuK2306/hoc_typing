/* eslint-disable react-hooks/exhaustive-deps */
import { InputHTMLAttributes, useState } from "react";
import { ComponentType } from "react";
import styles from "./hocsStyles.module.css";

export interface WithValidateProps {
  validate: (value: unknown) => string;
}

export interface AdditionalComponentProps {
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (value: unknown) => void;
}

export const withValidate = <T,>(Component: ComponentType<T>) => {
  return function Validate({
    validate,
    ...restProps
  }: Omit<T, keyof AdditionalComponentProps> & WithValidateProps) {
    const [inputValue, setInputValue] = useState("");
    const validateText = validate(inputValue);

    return (
      <div
        className={validateText !== "" ? styles.withValidate_p__Wrapper : ""}
      >
        <Component
          {...(restProps as unknown as T)}
          value={inputValue}
          onChange={setInputValue}
        />
        <p className={styles.withValidate_p}>{validateText}</p>
      </div>
    );
  };
};
