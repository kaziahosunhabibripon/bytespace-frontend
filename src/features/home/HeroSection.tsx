import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { heroShapes } from "@/data/decor";
import { floatingCards } from "@/data/floatingCards";
import { homeContent } from "@/data/home";
import { imageUrl } from "@/lib/assets";
import { paths } from "@/lib/paths";
import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { TagCard } from "@/components/cards/TagCard";
import { ShapeLayer } from "@/components/decor/Shape";
import { Abs } from "@/components/layout/Abs";
import { Nav } from "@/components/layout/Nav";
import { Stage } from "@/components/layout/Stage";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Lines } from "@/components/ui/Lines";
import { SearchField } from "@/components/ui/SearchField";
import { Text } from "@/components/ui/Text";
import styles from "./HeroSection.module.css";

/** Design-pixel positions on the 1440 x 1024 hero canvas. */
const at = {
  title: { top: 169 },
  subtitle: { top: 372 },
  search: { left: 430, top: 462 },
  circle: { left: 145.2, top: 581.7, size: 1147.7 },
  photo: { left: 431, top: 512, width: 578, height: 541 },
  tagCard: { left: 404, top: 639 },
  progressCard: { left: 842, top: 651 },
  happyCard: { left: 328, top: 837 },
} as const;

export function HeroSection() {
  const { hero } = homeContent;
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = query.trim();
    navigate(text ? `${paths.search}?q=${encodeURIComponent(text)}` : paths.search);
  };

  return (
    <header>
      <Stage height={1024} grid>
        <Abs left={0} top={0} width="100%">
          <Nav />
        </Abs>

        <Abs left={0} right={0} top={at.title.top}>
          <Heading level={1} size="hero" tone="white" align="center">
            <Lines lines={hero.titleLines} />
          </Heading>
        </Abs>
        <Abs left={0} right={0} top={at.subtitle.top}>
          <Text tone="white" align="center">
            {hero.subtitle}
          </Text>
        </Abs>
        <Abs left={at.search.left} top={at.search.top}>
          <form className={styles.search} role="search" onSubmit={onSubmit}>
            <SearchField
              value={query}
              onChange={setQuery}
              placeholder={hero.search.placeholder}
              label={hero.search.label}
            />
            <Button type="submit">{hero.search.submitLabel}</Button>
          </form>
        </Abs>

        <ShapeLayer shapes={heroShapes.behind} />
        <Abs
          className={styles.circle}
          left={at.circle.left}
          top={at.circle.top}
          width={at.circle.size}
          height={at.circle.size}
        />
        <Abs {...at.photo}>
          <img
            className={styles.photo}
            src={imageUrl("hero-man")}
            alt="Learner with headphones and a laptop"
            width={578}
            height={541}
          />
        </Abs>
        <ShapeLayer shapes={heroShapes.inFront} />

        <Abs {...at.tagCard}>
          <TagCard {...floatingCards.tag} />
        </Abs>
        <Abs {...at.progressCard}>
          <ProgressCard {...floatingCards.progress} />
        </Abs>
        <Abs {...at.happyCard}>
          <HappyStudentsCard {...floatingCards.happyStudents} />
        </Abs>
      </Stage>
    </header>
  );
}
