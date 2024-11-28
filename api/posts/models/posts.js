'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  async afterCreate(result, data) {
    axios.post('https://api.netlify.com/build_hooks/6748aec93a5a8e4347c61048')
  },
  async afterUpdate(result, params, data) {
    axios.post('https://api.netlify.com/build_hooks/6748aec93a5a8e4347c61048')
  },
};
