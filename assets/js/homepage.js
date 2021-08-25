var getUserRepos = function() {
  fetch("https://api.github.com/users/tonyslonaker/repos");
};

getUserRepos();