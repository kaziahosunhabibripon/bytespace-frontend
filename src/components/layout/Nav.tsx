import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { assetUrl } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { paths } from "@/lib/paths";
import { Icon } from "@/components/ui/Icon";
import styles from "./Nav.module.css";

/** Top navigation shown on the blue hero of every page. */
export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <Link to={paths.home} className={styles.logo} aria-label={`${siteConfig.name} home`}>
          <img src={assetUrl(siteConfig.logos.light)} alt={siteConfig.name} width={171} height={35} />
        </Link>

        <ul className={styles.links}>
          {siteConfig.nav.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                end={"end" in item ? item.end : undefined}
                className={({ isActive }) => cn(styles.link, isActive && styles.active)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.account}>
          {siteConfig.authLinks.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
          <button type="button" className={styles.bag} aria-label="Cart">
            <Icon name="bag" size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
