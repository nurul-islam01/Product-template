import React from 'react';
import { useSelector } from 'react-redux';
import Image from '@components/common/image/image';
import styles from './ssr.scss';
import Heading from '../../components/heading/heading';
import Section from '../../components/section/section';

function SSR() {
  const { ssr } = useSelector((state) => state);
  if (!ssr.isSuccess) return null;
  const {
    data: { results },
  } = ssr || {};
  const {
    name: { title, first, last },
    picture: { large },
  } = results?.[0];

  return (
    <Section>
      <div id="ssr" className={styles.ssr}>
        <Image src={large} alt={`${title} ${first} ${last}`} />
        <Heading text={`${title} ${first} ${last}`} center />
      </div>
    </Section>
  );
}

export default SSR;
