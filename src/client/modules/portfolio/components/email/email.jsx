import React from 'react';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import styles from './email.scss';

function Email() {
  return (
    <div id="email" className={styles.email}>
      <div>
        <PrimaryLink href="mailto:abhisharjangir@ymail.com?subject=Get In Touch&body=Hello Abhishar,">
          abhisharjangir@ymail.com
        </PrimaryLink>
      </div>
    </div>
  );
}

export default Email;
