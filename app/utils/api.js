var axios = require('axios');

module.exports = {
  fetchPopularRepos: function (language) {
    console.log(`In fetchPopularRepos(), language=${language}`);
    var URI = 'https://api.github.com/search/repositories?q=stars:>1+language:' + language + '@sort=stars&order=desc&type=Repositories'
    console.log(URI);
    var encodedURI = window.encodeURI(URI);

    return axios.get(encodedURI).then(function (response) {
      return response.data.items;
    });
  },
};
