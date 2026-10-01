import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import styles from "./TextInput.module.css";

type Shape = "pill" | "soft";

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  shape?: Shape;
  className?: string;
}

export function TextInput({ shape = "soft", className, ...rest }: TextInputProps) {
  return <input className={cn(styles.input, styles[shape], className)} {...rest} />;
}

interface TextFieldProps extends TextInputProps {
  label: string;
}

/** A labelled text input (the label wraps the input, so no ids are needed). */
export function TextField({ label, ...inputProps }: TextFieldProps) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <TextInput {...inputProps} />
    </label>
  );
}
