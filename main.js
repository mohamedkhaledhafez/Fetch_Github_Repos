// Main Variables :

let theInput = document.querySelector('.get-repos input'),
    getBtn = document.querySelector('.get-btn'),
    reposData = document.querySelector('.show-data');


// Create Get Repos Function :

getBtn.onclick = () => {
    getRepos();
};

getRepos = () => {
    // Check if the input is empty: 
    if (theInput.value == "") {
        reposData.innerHTML = "<span>Please write Github Username</span>";

    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => response.json())

        .then((repos) => {
            // Empty the Container : 
            reposData.innerHTML = '';

            // Loop on Repos :
            repos.forEach(repo => {
                // Create the main div element :
                let mainDiv = document.createElement('div');

                // Create repo name text :
                let repoName = document.createTextNode(repo.name);

                // Append the Text to main div :
                mainDiv.appendChild(repoName);

                // Creat repo url :
                let theURL = document.createElement('a');

                // Creat repo url text :
                let theURLText = document.createTextNode('Visit');

                // Append the repo url text to anchor tag <a></a> :
                theURL.appendChild(theURLText);

                // Add the href :
                theURL.href = `https://github/com/${theInput.value}/${repo.name}`;

                // Set the target attribute to _blank :
                theURL.setAttribute('target', '_blank');

                // Append url tag to main div :
                mainDiv.appendChild(theURL);

                // Creat stars count span :
                let starsSpan = document.createElement("span"); 

                // Creat the stars count text :
                let starsText = document.createTextNode(`Satrs${repo.stargazers_count}`);

                // Add stars count text to stars span :
                starsSpan.appendChild(starsText);

                // Append stars count span to main div : 
                mainDiv.appendChild(starsSpan);

                // Add class on the main div: 
                mainDiv.className = 'repo-box';

                // Append the main div to container:
                reposData.appendChild(mainDiv);
            });

        });
    }
}
