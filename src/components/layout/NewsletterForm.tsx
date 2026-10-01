import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/TextInput";
import styles from "./NewsletterForm.module.css";

interface NewsletterFormProps {
  placeholder: string;
  submitLabel: string;
  consent: string;
}

export function NewsletterForm({ placeholder, submitLabel, consent }: NewsletterFormProps) {
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No newsletter endpoint yet: acknowledge the sign-up so the form does not feel dead.
    setSubscribed(true);
  };

  return (
    <div className={styles.newsletter}>
      <form className={styles.form} onSubmit={onSubmit}>
        <TextInput
          type="email"
          name="email"
          shape="pill"
          placeholder={placeholder}
          aria-label="Email address"
          required
          className={styles.input}
        />
        <Button type="submit">{submitLabel}</Button>
      </form>
      <p className={styles.note} role="status">
        {subscribed ? "Thanks for subscribing!" : consent}
      </p>
    </div>
  );
}
