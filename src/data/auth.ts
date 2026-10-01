import { paths } from "@/lib/paths";
import type { AuthCopy, AuthField, AuthMode } from "@/types/content";

const emailField: AuthField = {
  name: "email",
  label: "Email",
  type: "email",
  placeholder: "designer@example.com",
  autoComplete: "email",
};

export const authCopy: Record<AuthMode, AuthCopy> = {
  register: {
    heading: "Sign up and come in",
    lead: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    kicker: "Create an Account",
    title: "Welcome to ByteSpace",
    submitLabel: "Continue",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
      emailField,
      { name: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "new-password" },
    ],
    switchPrompt: { text: "Already have an account?", label: "Login", to: paths.login },
    socialProviders: [],
  },
  login: {
    heading: "Sign in with ease",
    lead: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    kicker: "Sign In",
    title: "Welcome Back",
    submitLabel: "Sign In",
    fields: [
      emailField,
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "********",
        autoComplete: "current-password",
      },
    ],
    switchPrompt: { text: "New user?", label: "Create an account", to: paths.register },
    socialProviders: ["facebook", "google"],
  },
};
