import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Meta from '@utils/meta';
import { setHelmetInfo } from './actions';

const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? Meta.default.siteURL
    : Meta.default.siteURL;

const FACEBOOK_APP_ID = 'XXXXXXXXX';

const defaultTitle = Meta.default.title;
const defaultDescription = Meta.default.description;
const defaultKeywords = Meta.default.keywords;
const defaultImage = Meta.default.image;
const defaultTwitter = Meta.default.twitter;
const defaultSep = Meta.default.sep;
const defaultUpdated = Meta.default.updated;
const defaultPublished = Meta.default.published;
const defaultContentType = Meta.default.contentType;

function Page(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    helmet: { data = '' },
  } = useSelector((state) => state);

  const { children, id, className, setInfo, ...rest } = props;
  const { pathname } = location;

  useEffect(() => {
    if (!data && Meta[pathname]) {
      dispatch(setHelmetInfo(Meta[pathname]));
    }
  }, []);

  // eslint-disable-next-line complexity
  const getMetaTags = ({
    title,
    description,
    image,
    contentType,
    twitter,
    noCrawl,
    published,
    updated,
    category,
    tags,
    keywords,
  }) => {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription;
    const theImage = image ? `${SITE_URL}${image}` : defaultImage;

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { itemprop: 'image', content: theImage },
      { name: 'description', content: theDescription },
      { name: 'keywords', content: keywords || defaultKeywords },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: defaultTwitter },
      { name: 'twitter:title', content: theTitle },
      { name: 'twitter:description', content: theDescription },
      { name: 'twitter:creator', content: twitter || defaultTwitter },
      { name: 'twitter:image:src', content: theImage },
      { property: 'og:title', content: theTitle },
      { property: 'og:type', content: contentType || defaultContentType },
      { property: 'og:url', content: SITE_URL + pathname },
      { property: 'og:image', content: theImage },
      { property: 'og:description', content: theDescription },
      { property: 'og:site_name', content: defaultTitle },
      { property: 'fb:app_id', content: FACEBOOK_APP_ID },
    ];

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      metaTags.push({ name: 'robots', content: 'index, follow' });
    }

    if (published) {
      metaTags.push({
        name: 'article:published_time',
        content: published || defaultPublished,
      });
    }
    if (updated) {
      metaTags.push({
        name: 'article:modified_time',
        content: updated || defaultUpdated,
      });
    }
    if (category) {
      metaTags.push({ name: 'article:section', content: category });
    }
    if (tags) {
      metaTags.push({ name: 'article:tag', content: tags });
    }

    return metaTags;
  };

  return (
    <div id={id} className={className}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
          itemscope: undefined,
          itemtype: `http://schema.org/${rest.schema || 'WebPage'}`,
        }}
        title={
          data?.title ? data.title + defaultSep + defaultTitle : defaultTitle
        }
        link={[
          {
            rel: 'canonical',
            href: SITE_URL + pathname,
          },
        ]}
        meta={getMetaTags({ ...rest, ...data })}
      />
      <link rel="canonical" href={`${SITE_URL + pathname}`} />
      {children}
    </div>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  noCrawl: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  setInfo: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Page;
