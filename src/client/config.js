const ENV_TYPES = {
  PROD: 'prod',
  STAG: 'stag',
  LOCAL: 'local',
};

// For staging Environments
const STAG_ENV = {
  URL: '<api base url>',
  env: 'Staging',
};

// For Production Environments
const PROD_ENV = {
  URL: '<api base url>',
  env: 'Production',
};

// For Local Environments
const LOCAL_ENV = {
  URL: '<api base url>',
  env: 'Local',
};

const COMMON_ENV = {
  // Add here if there is any `COMMON ENVIRONMENT VARIABLES`
};

const appEnv = process.env.REACT_APP_ENV;

// eslint-disable-next-line import/no-mutable-exports
let ENV = {};

switch (appEnv) {
  case ENV_TYPES.PROD:
    ENV = { ...PROD_ENV, ...COMMON_ENV };
    break;

  case ENV_TYPES.STAG:
    ENV = { ...STAG_ENV, ...COMMON_ENV };
    break;

  case ENV_TYPES.LOCAL:
    ENV = { ...LOCAL_ENV, ...COMMON_ENV };
    break;

  default:
    ENV = { ...STAG_ENV, ...COMMON_ENV };
    break;
}

export default ENV;
