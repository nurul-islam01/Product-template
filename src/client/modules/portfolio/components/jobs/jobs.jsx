/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import Section from '../section/section';
import styles from './jobs.scss';
import Heading from '../heading/heading';

const TabList = [
  {
    company: 'Bed Bath & Beyond',
    title: ' System Analyst',
    url: 'https://www.bedbathandbeyond.com',
    range: 'Oct 2k18 - Present',
    html: `<ul>
        <li>Worked on Micro Front End apps in NextJS, TailwindCSS and ContentStack from scratch.</li>
        <li>Worked on different features, stories & enhancements in Bed Bath Beyond, Buy Buy Baby e-Commerce websites.</li>
        <li>Worked on performance improvement of websites</li>
        <li>Created several A/B tests on websites</li>
        <li>Built several reusable components in React.</li>
        <li>Mentored 20+ Freshers in React and Redux.</li>
      </ul>`,
  },
  {
    company: 'Chimes Group',
    title: ' Front End Developer',
    url: 'https://chimesgroup.in/',
    range: 'Aug 2k16 - Oct 2k18',
    html: `<ul>
        <li>Built PipeTrak IT hybrid IOS & Android mobile app in React Native with Dynamic screens from scratch.</li>
        <li>Worked on development of MuscleMatics Dashboard in AngularJS from scratch.</li>
        <li>Built injectable PipeTrak GIS component based app in React, Redux, Leaflet, ESRI Maps.</li>
        <li>Built GEO Transformer in NodeJS to transform different types of JSON in GeoJSON.</li>
        <li>Worked on Dauble & Dauble Business websites in AngularJS from scratch.</li>
      </ul>`,
  },
  {
    company: 'Medzin',
    title: ' Front End Developer',
    url: 'https://medzin.in/',
    range: 'Nov 2k15 - Jul 2k16',
    html: `<ul>
        <li>Worked on development of Company’s website & dashboard in AngularJS v1.</li>
        <li>Designed Mobile App Screens for Medzin mobile app.</li>
      </ul>`,
  },
];

function Jobs() {
  const [selectedTab, selectTab] = useState(1);
  const { title, company, url, range, html } = TabList[selectedTab - 1];

  return (
    <Section
      id="experience"
      style={{ position: 'relative', maxWidth: '700px' }}
    >
      <Heading text="Where I've Worked" />
      <div className={styles.jobTabs}>
        <ul className={styles.tablist}>
          {TabList.map((tab, i) => (
            <li>
              <button
                onClick={() => selectTab(i + 1)}
                type="button"
                className={
                  selectedTab === i + 1 ? styles.buttonActive : undefined
                }
              >
                {tab.company}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.jobContent}>
          <div className={styles.jobTabContent}>
            <h4 className={styles.jobTitle}>
              <span>{title}</span>
              <span className={styles.jobCompany}>
                <span>&nbsp;@</span>
                <PrimaryLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {company}
                </PrimaryLink>
              </span>
            </h4>
            <h5 className={styles.jobDetail}>
              <span>{range}</span>
            </h5>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Jobs;
