'use strict';

module.exports = function (stamp) {
  return {
    allow: false // (!(/^arm/).test(stamp.a)) // TODO fabricator failed with SIGKILL. maybe 500 mb mem droplet is too weak?
  };
};
