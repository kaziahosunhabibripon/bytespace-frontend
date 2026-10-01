import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { paths } from "@/lib/paths";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import styles from "./RouteError.module.css";

/** Shown by the router when a page throws while rendering or loading. */
export function RouteError() {
  const error = useRouteError();
  const detail = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : "Something unexpected happened.";

  return (
    <Container as="main" id="main" className={styles.error}>
      <Heading level={1} size="title">
        Something went wrong
      </Heading>
      <Text tone="subtle">{detail}</Text>
      <Link to={paths.home} className={styles.link}>
        Back to Home
      </Link>
    </Container>
  );
}
