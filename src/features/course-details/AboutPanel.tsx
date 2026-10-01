import { courseDetails } from "@/data/courseDetails";
import { imageUrl } from "@/lib/assets";
import { Heading } from "@/components/ui/Heading";
import { IconList } from "@/components/ui/IconList";
import { Text } from "@/components/ui/Text";
import panel from "./Panels.module.css";
import styles from "./AboutPanel.module.css";

export function AboutPanel() {
  const { about } = courseDetails;
  return (
    <section className={panel.panel} aria-label={about.heading}>
      <Heading level={2} size="heading" tone="text" className={panel.heading}>
        {about.heading}
      </Heading>
      {about.paragraphs.map((paragraph) => (
        <Text key={paragraph} size="md" tone="soft" className={panel.copy}>
          {paragraph}
        </Text>
      ))}

      <Heading level={2} size="heading" tone="text" className={panel.heading}>
        {about.sneakPeek.heading}
      </Heading>
      <ul className={styles.sneak}>
        {about.sneakPeek.images.map((image) => (
          <li key={image}>
            <img src={imageUrl(image)} alt="" width={167} height={125} loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>

      <Heading level={2} size="heading" tone="text" className={panel.heading}>
        {about.keyPoints.heading}
      </Heading>
      <IconList items={about.keyPoints.items} className={styles.keyPoints} />
    </section>
  );
}
