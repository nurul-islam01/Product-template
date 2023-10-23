import React from 'react';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import Section from '../section/section';
import styles from './contact.scss';
import Heading from '../heading/heading';

function Contact() {
  return (
    <Section id="contact">
      <div className={styles.contact}>
        <Heading text="What's Next?" center />
        <h4 className={styles.title}>Get In Touch</h4>
        <p className="text-2xl">
          Although I&lsquo;m not currently looking for freelance opportunities,
          my inbox is always open. Whether for a potential project or just to
          say hi, I&lsquo;ll try my best to answer your email!
        </p>
        <PrimaryLink
          href="mailto:abhisharjangir@ymail.com?subject=Get In Touch&body=Hello Abhishar,"
          className={styles.bigButton}
        >
          Say Hello
        </PrimaryLink>
      </div>
    </Section>
  );
}

export default Contact;
