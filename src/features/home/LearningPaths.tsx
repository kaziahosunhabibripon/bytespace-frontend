import { Link } from "react-router-dom";
import { homeContent } from "@/data/home";
import { learningPaths } from "@/data/taxonomy";
import { paths } from "@/lib/paths";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { surfaceClass } from "@/components/ui/Surface";
import styles from "./LearningPaths.module.css";

export function LearningPaths() {
  const { paths: content } = homeContent;
  return (
    <section className={styles.section}>
      <SectionHeader titleLines={[content.title]} lead={content.lead} size="title" />
      <Container as="ul" className={styles.grid}>
        {learningPaths.map((path) => (
          <li key={path.id}>
            <Link to={paths.search} className={cn(surfaceClass(), styles.card)}>
              <span className={styles.icon}>
                <Icon name={path.icon} size={30} />
              </span>
              <span className={styles.name}>{path.label}</span>
            </Link>
          </li>
        ))}
      </Container>
    </section>
  );
}
