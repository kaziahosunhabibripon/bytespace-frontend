import { ctaShapes } from "@/data/decor";
import { homeContent } from "@/data/home";
import { ShapeLayer } from "@/components/decor/Shape";
import { Abs } from "@/components/layout/Abs";
import { Stage } from "@/components/layout/Stage";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Lines } from "@/components/ui/Lines";
import { Text } from "@/components/ui/Text";
import styles from "./CreatorCta.module.css";

export function CreatorCta() {
  const { cta } = homeContent;
  return (
    <Stage height={488} grid>
      <ShapeLayer shapes={ctaShapes} />
      <Abs left={0} right={0} top={85}>
        <Heading level={2} size="display" tone="white" align="center">
          <Lines lines={cta.titleLines} />
        </Heading>
      </Abs>
      <Abs className={styles.text} top={231}>
        <Text tone="white" align="center">
          {cta.text}
        </Text>
      </Abs>
      <Abs className={styles.action} top={358}>
        <Button to={cta.action.to}>{cta.action.label}</Button>
      </Abs>
    </Stage>
  );
}
