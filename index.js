$(document).ready(function (){
});

function searchRepositories(){
  let term = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${term}`, function(response){
    $("#results").html(showRepositories(response))
  }).fail(function(error){
    displayError();
  })
};
function displayError(){
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}
function showRepositories(response){
  const repoList = '<ul>' + response.items.map(r => {
   return (`
          <li>
            <h2><a href="${r.html_url}">${r.name}</a></h2>
            <p>Description: ${r.description}</p>
            <p>Owner: ${r.owner.login}</p>
            <p><img src="${r.owner.avatar_url}" alt="icon"></p>
            <h2><a href="${r.html_url}">${r.owner.login} Page</a></h2>
            <p><a href="#" onClick="getCommits(this); return false;">Show Commits</a>
          </li>`
          )
  }).join('') + "</ul>"
  document.getElementById("results").innerHTML = repoList
}
function showCommits(obj){
  const data = obj.dataset;
  const name = data.repository;
  const username = data.username;
  const url = 'https://api.github.com/repos/' + username + '/' + name + '/commits'
  $.get(url, function(response){

  })
  req.addEventListener("load", displayCommits)
  req.open("GET", url)
  req.send()
}
