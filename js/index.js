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
            let countFollowers = followers.length >= 100 ? "100+" : followers.length
            getGitUsers(user.followers_url, 1000000).then(following => {
                let countFollowing = following.length >= 100 ? "100+" : following.length
                document.querySelector('.container').innerHTML += `

        
        <div class="card">
        <img class="card__pic" src="${user.avatar_url}">
        <h2 class="card__login"><a href=${user.html_url}>${user.login}</a></h2>
        <p class="card__followers"><a href=${user.followers_url}> Followers</a> : ${countFollowers}</p>
        <p class="card__following"><a href=${user.following_url}> Following</a> : ${countFollowing}</p>
        <p class="card__link"><a href=${user.html_url}>CHECK IT OUT</a></p>
        </div>`;
            })
        })
    })
});





