"use client";

import styles from "./appStyles.module.css";
import { Input } from "@/components";
import { withValidate } from "../hocs/withValidate";

const ValidatedInput = withValidate(Input);

export default function Home() {
  const validate = (value: unknown) => {
    if (typeof value === "string") {
      if (value.length > 6) {
        return "Значение не должно превышать 6 символов";
      }
      if (value.length === 0) {
        return "Значение не может быть пустым";
      }
    }
    return "";
  };

  return (
    <div className={styles.app}>
      <ValidatedInput type="text" validate={validate} />
    </div>
  );
}
