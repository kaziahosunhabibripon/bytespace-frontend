import { paths } from "@/lib/paths";
import type { FooterLink, NavItem } from "@/types/content";

const browse = (label: string): FooterLink => ({ label, to: paths.search });

export const siteConfig = {
  name: "ByteSpace",
  logos: { light: "img/logo-light.png", dark: "img/logo-dark.png", mark: "img/logo-mark.png" },
  nav: [
    { label: "Home", to: paths.home, end: true },
    { label: "Courses", to: paths.search },
    { label: "Creators", to: paths.creator(1) },
  ] satisfies NavItem[],
  authLinks: [
    { label: "Sign In", to: paths.login },
    { label: "Join Us", to: paths.register },
  ] satisfies NavItem[],
  footer: {
    tagline: "Stay Up to date with our latest features and releases by joining our newsletter.",
    newsletter: {
      placeholder: "Enter your email",
      submitLabel: "Search",
      consent: "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
    },
    columns: [
      [browse("Featured Courses"), browse("Featured Categories"), browse("Business"), browse("IT"), browse("Design")],
      [browse("Development"), browse("Marketing"), browse("Photography"), browse("Finance"), browse("Sport")],
      [
        { label: "Become a Creator", to: paths.register },
        { label: "Affiliate Program" },
        { label: "Contact" },
        { label: "Help" },
        { label: "About" },
      ],
    ] satisfies FooterLink[][],
    copyright: "@ 2023 ByteSpace. All rights reserved.",
    legal: [
      { label: "Privacy Policy" },
      { label: "Terms of Service" },
      { label: "Cookies Settings" },
    ] satisfies FooterLink[],
  },
} as const;
