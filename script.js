function search(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            //We need to turn the responseText into JSON
            //JSON.parse()
            //Call create html function passing in JSON.parse(this.responseText)
           console.log(JSON.parse(this.responseText));
           createRepoCard(JSON.parse(this.responseText));
        }
    }
    xhttp.open('GET', 'https://api.github.com/users/YEMI110/repos', true);
    xhttp.send();
}
function createRepoCard(repos){
    let container = document.getElementById("container")
    let output = []
    for (let i=0; i<repos.length; i++){
        output.push(`<h5>${repos[i].name}</h5>`)
    }
    
    //let card= `<h3>${owner.login}<h3>`;
    container.innerHTML = output.join('');
}
//Create a function to loop over repos and create HTML
//User inner HTML and backticks ``
//Take in repos as a parameter, create two variables, one will be = to container div in html
//Second var will be an array
//Loop over repos, and create a string equal to HTML with the repos name property
//Set container div innerHTML to the variable that is an array

search()
    