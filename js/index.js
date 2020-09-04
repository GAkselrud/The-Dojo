//console.log('Execute Order 66');
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
            let countFollowers = followers.length >= 100 ? "дoхуя(>100)" : followers.length
            getGitUsers(user.followers_url, 1000000).then(following => {
                let countFollowing = following.length >= 100 ? "дoхуя(>100)" : following.length
                document.body.innerHTML += `

        <section>
        <img src="${user.avatar_url}">
        <h2><a href=${user.html_url}>${user.login}</a></h2>
        <p><a href=${user.followers_url}> Followers</a> : ${countFollowers}</p>
        <p><a href=${user.following_url}> Following</a> : ${countFollowing}</p>
        <button><a href=${user.html_url}>CHECK IT OUT</a></button>
        </section>`;
            })
        })
    })
});





