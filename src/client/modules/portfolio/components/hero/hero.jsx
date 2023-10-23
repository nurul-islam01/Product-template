import React from 'react';
import classnames from 'classnames';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import Section from '../section/section';
import styles from './hero.scss';

function Hero() {
  return (
    <Section id="hero" className={styles.section}>
      <h1 className={styles.overline}>Hi there, my name is</h1>
      <h2 className={styles.title}>Abhishar Jangir.</h2>
      <h3 className={classnames(styles.subtitle, 'mt-6')}>
        I write code for websites & mobile apps.
      </h3>
      <div className={classnames(styles.description, 'mt-6')}>
        <p>
          I&lsquo;m a MERN stack developer based in Gurugram, India,
          specializing in developing high-quality websites with latest
          technologies & best practices.
        </p>
      </div>
      <div>
        <PrimaryLink
          className={classnames(styles.getintouch, 'mt-6')}
          href="mailto:abhisharjangir@ymail.com?subject=Get In Touch&body=Hello Abhishar,"
        >
          Get In Touch
        </PrimaryLink>
      </div>
    </Section>
  );
}

export default Hero;
