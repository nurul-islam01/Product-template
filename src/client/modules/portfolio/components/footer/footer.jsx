import React from 'react';
import Icon from '@components/common/icon/icon';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import { socialList } from '@client/constants';
import styles from './footer.scss';
class Footer extends React.PureComponent {
  render() {
    const date = new Date();

    return (
      <footer id="Footer" className={styles.footer}>
        <div className={styles.socialContainer}>
          <ul className={styles.list}>
            {socialList.map(({ name, url }) => (
              <li key={name}>
                <PrimaryLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}
                >
                  <Icon name={name} />
                </PrimaryLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          <PrimaryLink href="/" aria-label="home" internal>
            <span>
              Handcrafted with
              <span className={styles.heart}> &#10084; </span>
              in India.
            </span>
            <div>
              <span>
                Copyright &copy;
                {date.getFullYear()}
              </span>
            </div>
          </PrimaryLink>
        </div>
      </footer>
    );
  }
}

export default Footer;
