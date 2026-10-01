import { courseDetails } from "@/data/courseDetails";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Surface } from "@/components/ui/Surface";
import { Text } from "@/components/ui/Text";
import panel from "./Panels.module.css";
import styles from "./LessonsPanel.module.css";

export function LessonsPanel() {
  const { lessons } = courseDetails;
  return (
    <section className={panel.panel} aria-label={lessons.heading}>
      <Heading level={2} size="heading" tone="text" className={panel.heading}>
        {lessons.heading}
      </Heading>
      <Text size="md" tone="soft" className={panel.copy}>
        {lessons.intro}
      </Text>

      <Heading level={2} size="heading" tone="text" className={panel.heading}>
        {lessons.listHeading}
      </Heading>
      <ol className={styles.modules}>
        {lessons.modules.map((module) => (
          <li key={module.title} className={styles.module}>
            <span className={styles.icon}>
              <Icon name="video" size={34} />
            </span>
            <div>
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              <Text size="md" tone="soft">
                {module.summary}
              </Text>
            </div>
          </li>
        ))}
      </ol>

      <Heading level={2} size="heading" tone="text" className={panel.heading}>
        {lessons.contentHeading}
      </Heading>
      <Text size="md" tone="soft" className={panel.copy}>
        {lessons.contentText}
      </Text>

      <Heading level={2} size="heading" tone="text" className={panel.heading}>
        {lessons.progressHeading}
      </Heading>
      <Text size="md" tone="soft" className={panel.copy}>
        {lessons.progressText}
      </Text>
      <Surface radius="md" className={styles.progress}>
        <span className={styles.progressLabel}>{lessons.progress.label}</span>
        <b className={styles.progressValue}>{lessons.progress.percent}%</b>
        <ProgressBar
          value={lessons.progress.percent}
          tone="panel"
          label={lessons.progress.label}
          className={styles.progressBar}
        />
      </Surface>
    </section>
  );
}
