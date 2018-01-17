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
function showRepositories(){
  const respositories = JSON.parse(this.responseText)
  const repoList = '<ul>' + repos.map(r => {
   return (`
          <li>
            <h2><a href="${r.html_url}">${r.name}</a></h2>
            
            <p>Owner: ${r.owner.login}</p>
            <p><img src="${r.owner.avatar_url}" alt="icon"></p>
            <h2><a href="${r.html_url}">${r.owner.login} Page</a></h2>
          </li>`
          )
  }).join('') + "</ul>"
}
