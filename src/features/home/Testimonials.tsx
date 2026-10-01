import { homeContent } from "@/data/home";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/ui/Avatar";
import { Heading } from "@/components/ui/Heading";
import { Lines } from "@/components/ui/Lines";
import { Surface } from "@/components/ui/Surface";
import { Text } from "@/components/ui/Text";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  const { testimonials } = homeContent;
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <header className={styles.head}>
          <Heading level={2} size="display" tone="black" id="testimonials-title" className={styles.title}>
            <Lines lines={testimonials.titleLines} />
          </Heading>
          <Text tone="neutral">{testimonials.lead}</Text>
        </header>

        <ul className={styles.grid}>
          {testimonials.items.map((item) => (
            <li key={item.id}>
              <Surface
                as="article"
                variant="plain"
                className={cn(styles.card, item.spacing === "tight" && styles.tight)}
              >
                <Avatar image={item.avatar} size={80} />
                <Heading level={3} size="heading" tone="black" className={styles.name}>
                  {item.name}
                </Heading>
                <span className={styles.role}>{item.role}</span>
                <Text as="blockquote" tone="neutral" className={styles.quote}>
                  {item.quote}
                </Text>
              </Surface>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
