import fs from 'fs';
import path from 'path';
import { matchPath } from 'react-router-dom';

const isDev = process.env.NODE_ENV === 'development';

const googleAnalyticsScripts = !isDev
  ? `
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-155127051-1');
</script> <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155127051-1"></script>
`
  : '';
export const injectHTML = (
  htmlData,
  {
    html,
    title,
    meta,
    body,
    scripts = '',
    state,
    style = '',
    preloadScripts,
    theme,
  }
) => {
  let data = htmlData;
  data = data.replace('<body>', `<body class="${theme}">`);
  data = data.replace('<html>', `<html ${html}>`);
  data = data.replace(/<title>.*?<\/title>/g, title);
  data = data.replace('</head>', `${meta}${preloadScripts}${style}</head>`);
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
  );
  data = data.replace('</body>', `${scripts}${googleAnalyticsScripts}</body>`);

  return data;
};

export const getRouteActions = (route, req, actions = [], parentPath = '') => {
  const fullPath = (parentPath !== '/' ? parentPath : '') + (route.path || '');
  if (route) {
    const match = matchPath({ ...route, path: fullPath }, req.path);
    if (match && route.fetchRouteData) {
      route.fetchRouteData.forEach((action) => actions.push(action));
    }
    if (route.childRoutes) {
      route.childRoutes.forEach((childRoute) =>
        getRouteActions(childRoute, req, actions, fullPath)
      );
    }
  }
};

export const readHtmlFileData = (res) => {
  return new Promise((resolve) => {
    fs.readFile(
      path.resolve(process.cwd(), './public/index.html'),
      'utf8',
      // eslint-disable-next-line consistent-return
      (err, htmlFileData) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(
            '::::::: Error while reading index.html file from /public :::::::',
            err
          );
          return res.status(404).end();
        }
        resolve(htmlFileData);
      }
    );
  });
};

export const getInlineCss = (styleElements) => {
  const cssPaths = styleElements.map((se) => se.props.href);
  let inlineStyle = '';
  cssPaths.forEach((cssPath) => {
    const cssFilePath = path.resolve(
      process.cwd(),
      path.join('./public/dist/client/', cssPath)
    );
    const cssContent =
      fs.existsSync(cssFilePath) && fs.readFileSync(cssFilePath, 'utf8');
    if (cssContent) inlineStyle += cssContent;
  });
  return inlineStyle;
};
