var getUserRepos = function(user) {
  //format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  //make a request to the url
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};







//var response = fetch("https://api.github.com/users/tonyslonaker/repos").then(function(response) {
  //response.json().then(function(data) {
    //console.log(data);
  //});
//});
//console.log("outside");
