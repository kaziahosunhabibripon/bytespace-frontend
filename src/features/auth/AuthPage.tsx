import { Link } from "react-router-dom";
import { authCopy } from "@/data/auth";
import { siteConfig } from "@/data/site";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { assetUrl } from "@/lib/assets";
import { paths } from "@/lib/paths";
import type { AuthMode } from "@/types/content";
import { Abs } from "@/components/layout/Abs";
import { Stage } from "@/components/layout/Stage";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { AuthCollage } from "./AuthCollage";
import { AuthForm } from "./AuthForm";

/** The two Figma frames are drawn 1px apart from each other; this keeps each one exact. */
const frameOffset: Record<AuthMode, { left: number; top: number }> = {
  register: { left: -1, top: 0 },
  login: { left: -1, top: 1 },
};

/** Sign-in and register share one layout; `mode` only switches the copy, fields and providers. */
export function AuthPage({ mode }: { mode: AuthMode }) {
  const copy = authCopy[mode];
  useDocumentTitle(copy.kicker);

  return (
    <Stage height={1024} grid>
      <Abs {...frameOffset[mode]} width="100%" height="100%">
        <Abs left={122} top={35}>
          <Link to={paths.home} aria-label={`${siteConfig.name} home`}>
            <img src={assetUrl(siteConfig.logos.mark)} alt="" width={30} height={35} />
          </Link>
        </Abs>
        <Abs left={123} top={117}>
          <Heading level={2} size="heading" tone="white">
            {copy.heading}
          </Heading>
        </Abs>
        <Abs left={123} top={160} width={480}>
          <Text tone="white">{copy.lead}</Text>
        </Abs>

        <AuthCollage />

        <Abs left={742} top={120} width={579} height={784}>
          <AuthForm mode={mode} />
        </Abs>
      </Abs>
    </Stage>
  );
}
