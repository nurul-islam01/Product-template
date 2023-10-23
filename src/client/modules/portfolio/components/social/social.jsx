import React from 'react';
import Icon from '@components/common/icon/icon';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import { socialList } from '@client/constants';
import styles from './social.scss';

function Social() {
  return (
    <div id="social" className={styles.social}>
      <ul>
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
  );
}

export default Social;
