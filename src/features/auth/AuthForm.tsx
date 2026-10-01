import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authCopy } from "@/data/auth";
import { cn } from "@/lib/cn";
import { paths } from "@/lib/paths";
import type { AuthMode } from "@/types/content";
import type { IconName } from "@/types/icon";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { surfaceClass } from "@/components/ui/Surface";
import { TextField } from "@/components/ui/TextInput";
import styles from "./AuthForm.module.css";

const providers: Record<"facebook" | "google", { icon: IconName; size: number; label: string }> = {
  facebook: { icon: "facebook", size: 34, label: "Continue with Facebook" },
  google: { icon: "google", size: 30, label: "Continue with Google" },
};

/** White sign-in / sign-up card. Field list, copy and social providers all come from `authCopy`. */
export function AuthForm({ mode }: { mode: AuthMode }) {
  const copy = authCopy[mode];
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No auth backend yet: continue to the catalogue so the flow is clickable end to end.
    navigate(paths.search);
  };

  return (
    <form
      className={cn(surfaceClass({ variant: "plain", radius: "xl" }), styles.card, styles[mode])}
      onSubmit={onSubmit}
    >
      <span className={styles.kicker}>{copy.kicker}</span>
      <Heading level={1} size="display" tone="text">
        {copy.title}
      </Heading>

      <div className={styles.fields}>
        {copy.fields.map((field) => (
          <TextField key={field.name} {...field} required />
        ))}
      </div>

      <Button type="submit" className={styles.submit}>
        {copy.submitLabel}
      </Button>

      {copy.socialProviders.length > 0 ? (
        <>
          <div className={styles.divider} role="separator">
            <span>or</span>
          </div>
          <div className={styles.social}>
            {copy.socialProviders.map((provider) => (
              <button key={provider} type="button" className={styles.provider} aria-label={providers[provider].label}>
                <Icon name={providers[provider].icon} size={providers[provider].size} />
              </button>
            ))}
          </div>
        </>
      ) : null}

      <p className={styles.switch}>
        {copy.switchPrompt.text} <Link to={copy.switchPrompt.to}>{copy.switchPrompt.label}</Link>
      </p>
    </form>
  );
}
