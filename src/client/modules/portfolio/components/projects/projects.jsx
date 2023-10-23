/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@components/common/icon/icon';
import Section from '../section/section';
import styles from './projects.scss';

function Projects() {
  const List = [
    {
      name: 'React Go',
      description: 'A starter kit for react app with all the best practices.',
      tech: [
        'react',
        'redux',
        'redux-saga',
        'reselect',
        'nodejs',
        'sass',
        'pwa',
        'react-universal-component',
        'server-side-rendering',
        'seo-friendly',
      ],
      links: [
        {
          iconName: 'github',
          url: 'https://github.com/abhisharkjangir/reactgo',
        },
        {
          iconName: 'external',
          url: 'https://reactgo.abhisharjangir.com',
        },
      ],
    },
    {
      name: 'Portfolio',
      description:
        'My portfolio website which shows my experience, work and projects.',
      tech: ['react', 'redux', 'redux-saga', 'reselect', 'nodejs', 'sass'],
      links: [
        {
          iconName: 'github',
          url: 'https://github.com/abhisharkjangir/portfolio',
        },
        {
          iconName: 'external',
          url: 'https://abhisharjangir.com',
        },
      ],
    },
    {
      name: 'Online Image Editor',
      description: 'A Image editor which is powered by Adobe Creative SDK.',
      tech: ['react', 'Creative SDK'],
      links: [
        {
          iconName: 'github',
          url: 'https://github.com/abhisharkjangir/react-aviary',
        },
        {
          iconName: 'external',
          url: 'https://ie.abhisharjangir.com',
        },
      ],
    },
  ];
  const preSetVal = List.length > 6 ? 6 : List.length;
  const [count, toggleShow] = useState(preSetVal);
  const sliceValue = count === preSetVal ? preSetVal : List.length;
  return (
    <Section
      id="projects"
      style={{ flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <div className={styles.Project}>
        <h4>Other Noteworthy Projects</h4>

        <div className={styles.center}>
          <Link to="/" className={styles.view} aria-label="Projects"></Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.projects}>
            {List.slice(0, sliceValue).map(
              ({ name, description, tech, links }) => (
                <div className={styles.project}>
                  <div className={styles.projectInner}>
                    <div className={styles.projectHeader}>
                      <div className={styles.folder}>
                        <Icon name="folder" />
                      </div>
                      <div className={styles.projectLinks}>
                        {links.map(({ iconName, url }) => (
                          <a
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label={name}
                            key={iconName}
                            href={url}
                            className={styles.iconLink}
                          >
                            <Icon name={iconName} />
                          </a>
                        ))}
                      </div>
                    </div>
                    <h5 className={styles.projectName}>{name}</h5>
                    <div className={styles.projectDescription}>
                      {description}
                    </div>
                    <ul className={styles.techList}>
                      {tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {List.length > 6 && (
          <button
            type="button"
            onClick={() => toggleShow(count === preSetVal ? 'all' : preSetVal)}
            className={styles.moreButton}
          >
            {count === preSetVal ? 'Show More' : 'Show Less'}
          </button>
        )}
      </div>
    </Section>
  );
}

export default Projects;
