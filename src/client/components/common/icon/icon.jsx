import React from 'react';
import PropTypes from 'prop-types';
import GitHub from './github';
import Linkedin from './linkedin';
import Instagram from './instagram';
import Twitter from './twitter';
import Codepen from './codepen';
import Logo from './logo';
import External from './external';
import Folder from './folder';
import Location from './location';
import Fork from './fork';

// eslint-disable-next-line complexity
function Icon({ name }) {
  switch (name) {
    case 'fork':
      return <Fork />;
    case 'logo':
      return <Logo />;
    case 'github':
      return <GitHub />;
    case 'linkedin':
      return <Linkedin />;
    case 'instagram':
      return <Instagram />;
    case 'twitter':
      return <Twitter />;
    case 'codepen':
      return <Codepen />;
    case 'external':
      return <External />;
    case 'location':
      return <Location />;
    case 'folder':
      return <Folder />;

    default:
      return <GitHub />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
