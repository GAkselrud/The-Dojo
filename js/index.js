console.log('Execute Order 66');

async function getGitUsers() {
    try {
        const response = await fetch('https://api.github.com/users');
        return await response.json()
    }
    catch (err) {
        alert(err);
    }
};

getGitUsers().then(users => {
    //console.log(users)
    users.forEach(user => {
        console.log(user);




        document.body.innerHTML += `
        <section>
        <img src="${user.avatar_url}">
        
        <h2>${user.login}</h2>
        ${user.followers_url}
        ${user.following_url}
        <a href=${user.html_url}>Go to profile</a>
        </section>`;
       
    })
})






