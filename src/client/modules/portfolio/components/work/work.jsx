import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@components/common/icon/icon';
import wordbook from '@assets/images/wordbook.png';
import nasa from '@assets/images/nasa.png';
import iss from '@assets/images/iss.png';
import json from '@assets/images/json.png';
import Image from '@components/common/image/image';
import PrimaryLink from '@components/common/PrimaryLink/PrimaryLink';
import Heading from '../heading/heading';
import styles from './work.scss';
import Section from '../section/section';

function Work() {
  const projects = [
    {
      title: 'International Space Station',
      description:
        'A simple map visual app for current location of space station, astros in space and pass thorough information.',
      tech: ['Open Notify APIs', 'Leaflet JS'],
      image: iss,
      type: 'Latest Project',
      internal: true,
      url: '/app/international-space-station',
      links: [
        {
          url: '/app/international-space-station',
          iconName: 'external',
        },
      ],
      rel: '',
    },

    {
      title: 'JSON Key Path Finder',
      description:
        'An utility to search path of specified key in the given JSON.',
      tech: [],
      image: json,
      type: 'Latest Project',
      internal: true,
      url: '/app/json-key-path-finder',
      links: [
        {
          url: '/app/json-key-path-finder',
          iconName: 'external',
        },
      ],
      rel: '',
    },
    {
      title: 'Nasa Explorer',
      description:
        'A web app for exploring Epic, Apod & Earth which comsumes Nasa APIs.',
      tech: ['ReactJS', 'Material UI', 'Nasa APIs'],
      links: [
        {
          url: 'https://nasa.abhisharjangir.com',
          iconName: 'external',
        },
      ],
      image: nasa,
      type: 'Featured Project',
      url: 'https://nasa.abhisharjangir.com',
      rel: 'nofollow noopener noreferrer',
    },
    {
      title: 'Word Book',
      description:
        'Word book is a web app for learning daily new english words which have features ie storing favrioute word, google translation, word quiz etc.',
      tech: ['ReactJS', 'Wordnik API', 'SASS'],
      links: [
        {
          url: 'https://wordbook.abhisharjangir.com',
          iconName: 'external',
        },
      ],
      image: wordbook,
      type: 'Featured Project',
      url: 'https://wordbook.abhisharjangir.com',
      rel: 'nofollow noopener noreferrer',
    },
  ];

  return (
    <Section id="work">
      <Heading text="Some Things I've Built" />
      {projects.map(
        ({
          type,
          title,
          description,
          links,
          image,
          tech,
          url,
          rel,
          internal,
        }) => (
          <div className={styles.work}>
            <div className={styles.content}>
              <h4>{type}</h4>
              <h5>{title}</h5>
              <div className={styles.description}>{description}</div>
              <ul className={styles.list}>
                {tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className={styles.link}>
                {links &&
                  links.map(({ linkurl, iconName }) =>
                    !internal ? (
                      <PrimaryLink
                        href={linkurl}
                        target="_blank"
                        rel={rel}
                        aria-label={title}
                      >
                        <Icon name={iconName} />
                      </PrimaryLink>
                    ) : (
                      <Link to={linkurl}>
                        <Icon name={iconName} />
                      </Link>
                    )
                  )}
              </div>
            </div>
            {!internal ? (
              <PrimaryLink
                href={url}
                target="_blank"
                rel={rel}
                aria-label={title}
                className={styles.imgContainer}
              >
                <Image src={image} className={styles.image} alt={title} />
              </PrimaryLink>
            ) : (
              <Link to={url} className={styles.imgContainer} aria-label={title}>
                <Image src={image} className={styles.image} alt={title} />
              </Link>
            )}
          </div>
        )
      )}
    </Section>
  );
}

export default Work;
