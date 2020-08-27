console.log('Execute Order 66');
const USERS_API = 'https://api.github.com/users'

async function getGitUsers(url, count = 30) {
    console.log(url + `per_page=${count}`)
    try {
        const response = await fetch(url + `?per_page=${count}`);
        return await response.json()
    }
    catch (err) {
        console.error(err)
    }
};



getGitUsers(USERS_API).then(users => {
    users.forEach(user => {
        console.log(users)

        getGitUsers(user.followers_url, 1000000).then(followers => {
     let countFollowers = followers.length >= 100? "100+" : followers.length
     getGitUsers(user.followers_url, 1000000).then(following => {
     let countFollowing = following.length >= 100? "100+" : following.length       
     document.body.innerHTML += `

        <section>
        <img src="${user.avatar_url}">
        <h2>${user.login}</h2>
        <p>Followers : ${countFollowers}</p>
        <p>Following : ${countFollowing}</p>
        <button><a href=${user.html_url}>Go to profile</a></button>
        </section>`;
        })
    })
})
});





