'use strict';

module.exports = {
  source: {
    include: './lib/',
  },
  opts: {
    recurse: true,
    template: './tutorials',
    verbose: true,
  },
  templates: {
    theme: 'simplex',
    syntaxTheme: 'dark',
  },
};
