import { growthShapes } from "@/data/decor";
import { floatingCards } from "@/data/floatingCards";
import { homeContent } from "@/data/home";
import { useCourse } from "@/hooks/useCourses";
import { imageUrl } from "@/lib/assets";
import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";
import { MetricBadge, MetricCard } from "@/components/cards/MetricCard";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { CourseCardPreview } from "@/components/course/CourseCard";
import { Shape } from "@/components/decor/Shape";
import { Abs } from "@/components/layout/Abs";
import { Stage } from "@/components/layout/Stage";
import { Heading } from "@/components/ui/Heading";
import { IconList } from "@/components/ui/IconList";
import { Lines } from "@/components/ui/Lines";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatList } from "@/components/ui/StatList";
import { Text } from "@/components/ui/Text";
import styles from "./GrowthBand.module.css";

/** Design-pixel positions, relative to the top-left of the 1440 x 1460 band. */
const at = {
  growth: {
    title: { left: 121, top: 194 },
    text: { left: 121, top: 340, width: 480 },
    stats: { left: 121, top: 526 },
  },
  preview: {
    card: { left: 758, top: 120, width: 373 },
    photo: { left: 758, top: 132, width: 578, height: 541 },
    progress: { left: 1103, top: 333 },
  },
  creator: {
    portrait: { left: 0, top: 744, width: 720, height: 596 },
    revenue: { left: 121, top: 788 },
    yearToDate: { left: 121, top: 938 },
    happy: { left: 404, top: 1157 },
    title: { left: 740, top: 848 },
    text: { left: 741, top: 994, width: 580 },
    benefits: { left: 743, top: 1085 },
  },
} as const;

export function GrowthBand() {
  const { growth, creators } = homeContent;
  const { data: previewCourse } = useCourse(1);

  const benefits = creators.benefits.map((label) => ({ label }));

  return (
    <Stage height={1460} className={styles.band}>
      <Abs {...at.growth.title}>
        <Heading level={2} size="display" tone="text">
          <Lines lines={growth.titleLines} />
        </Heading>
      </Abs>
      <Abs {...at.growth.text}>
        <Text tone="soft">{growth.text}</Text>
      </Abs>
      <Abs {...at.growth.stats}>
        <StatList stats={growth.stats} />
      </Abs>

      {previewCourse ? (
        <Abs {...at.preview.card}>
          <CourseCardPreview course={previewCourse} />
        </Abs>
      ) : null}
      <Abs {...at.preview.photo}>
        <img className={styles.photo} src={imageUrl("hero-man")} alt="" width={578} height={541} />
      </Abs>
      <Abs {...at.preview.progress}>
        <ProgressCard {...floatingCards.progress} density="roomy" />
      </Abs>
      <Shape spec={growthShapes.nearCard} />

      <Abs className={styles.portrait} {...at.creator.portrait}>
        <img src={imageUrl(creators.image.name)} alt={creators.image.alt} width={685} height={685} />
      </Abs>
      <Abs {...at.creator.revenue}>
        <MetricCard
          className={styles.revenue}
          title={creators.revenue.title}
          period={creators.revenue.period}
          amount={creators.revenue.amount}
        >
          <ProgressBar
            value={creators.revenue.percent}
            tone="onBlue"
            thickness="sm"
            label={creators.revenue.title}
            className={styles.revenueBar}
          />
        </MetricCard>
      </Abs>
      <Abs {...at.creator.yearToDate}>
        <MetricCard
          className={styles.yearToDate}
          title={creators.yearToDate.title}
          period={creators.yearToDate.period}
          amount={creators.yearToDate.amount}
        >
          <MetricBadge>{creators.yearToDate.change}</MetricBadge>
        </MetricCard>
      </Abs>
      <Shape spec={growthShapes.nearCreator} />
      <Abs {...at.creator.happy}>
        <HappyStudentsCard {...floatingCards.happyStudents} density="roomy" />
      </Abs>

      <Abs {...at.creator.title}>
        <Heading level={2} size="display" tone="text" className={styles.tightTitle}>
          <Lines lines={creators.titleLines} />
        </Heading>
      </Abs>
      <Abs {...at.creator.text}>
        <Text tone="soft">
          <strong className={styles.brand}>{creators.lead.brand}</strong>
          {creators.lead.text}
        </Text>
      </Abs>
      <Abs {...at.creator.benefits}>
        <IconList items={benefits} size="md" />
      </Abs>
    </Stage>
  );
}
