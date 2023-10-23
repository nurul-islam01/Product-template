import React from 'react';
import abhishar from '@assets/images/abhishar.jpg';
import Image from '@components/common/image/image';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import resume from '@assets/resume.pdf';
import Heading from '../heading/heading';
import styles from './about.scss';
import Section from '../section/section';

function About() {
  const Skills = [
    'JavaScript ',
    'NodeJS',
    'React, Redux',
    'React Native',
    'NextJS',
    'TailwindCSS',
    'Webpack',
    'AngularJS v1',
    'Bootstrap',
    'MongoDB',
  ];
  return (
    <Section id="about" style={{ position: 'relative' }}>
      <Heading text="About Me" />
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutContent}>
          <p>
            Hello! I&lsquo;m Abhishar, a MERN Stack developer based in Gurugram,
            India, who is happily writing code for mobile, tablet & desktop
            websites since 2015.
          </p>
          <p>
            After my graduation from
            <PrimaryLink
              href="https://bkbiet.ac.in/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              BKBIET, Pilani
            </PrimaryLink>
            , I started my career as a web designer and today, after 5+ years,
            as a front-end developer, I worked on a wide variety of web apps.
          </p>
          <p>
            Currently, I&lsquo;m working with
            <PrimaryLink
              href="https://www.bedbathandbeyond.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Bed Bath & Beyond
            </PrimaryLink>
            .
          </p>
          <p>
            Here are a few technologies I&lsquo;ve been working with recently:
          </p>
          <ul>
            {Skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <p className="mt-4">
            Click
            <PrimaryLink href={resume} download="AbhisharJangirResume">
              here
            </PrimaryLink>
            to download my resume.
          </p>
        </div>
        <div className={styles.aboutPic}>
          <PrimaryLink to="/" aria-label="Display Picture" internal>
            <Image src={abhishar} alt="Abhishar Jangir" />
          </PrimaryLink>
        </div>
      </div>
    </Section>
  );
}

export default About;
