console.log('Execute Order 66');
const USERS_API = 'https://api.github.com/users'

async function getGitUsers(url) {
    try {
        const response = await fetch(url);
        return await response.json()
    }
    catch (err) {
        alert(err);
    }
};

getGitUsers(USERS_API).then(users => {
    //console.log(users)
    users.forEach(user => {
    console.log(users)
       




        document.body.innerHTML += `
        <section>
        <img src="${user.avatar_url}">
        
        <h2>${user.login}</h2>
        ${user.followers_url}
        ${user.following_url}
        <a href=${user.html_url}>Go to profile</a>
        </section>`;
       getGitUsers(user.followers_url).then(followers => {
         
       
    })
    })
})






