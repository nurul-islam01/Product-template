const { getHostName } = require('../utils/common');
const { socialList } = require('../constants/constants');
const redirectHandler = (req, res) => {
  const filterType = socialList.filter(({ name }) => req.params.type === name);
  if (filterType && filterType[0]) {
    res.redirect(302, filterType[0].url);
  } else res.redirect(302, getHostName());
};

module.exports = redirectHandler;
