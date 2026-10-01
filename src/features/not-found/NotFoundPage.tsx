import { notFoundContent } from "@/data/notFound";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { GridSection } from "@/components/layout/GridSection";
import { Nav } from "@/components/layout/Nav";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Lines } from "@/components/ui/Lines";
import { Text } from "@/components/ui/Text";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  useDocumentTitle("Page not found");
  return (
    <GridSection className={styles.hero}>
      <header>
        <Nav />
      </header>
      <main id="main" className={styles.body}>
        <p className={styles.code} aria-hidden="true">
          {notFoundContent.code}
        </p>
        <Heading level={1} size="hero" tone="white" align="center" className={styles.title}>
          <Lines lines={notFoundContent.titleLines} />
        </Heading>
        <Text tone="white" align="center" className={styles.text}>
          {notFoundContent.text}
        </Text>
        <Button to={notFoundContent.action.to} className={styles.action}>
          {notFoundContent.action.label}
        </Button>
      </main>
    </GridSection>
  );
}
