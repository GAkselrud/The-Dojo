console.log('Execute Order 66');
const USERS_API = 'https://api.github.com/users'

async function getGitUsers(url, count=30) {
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
    //console.log(users)
    users.forEach(user => {
    console.log(users)
       
    let followerCount = getGitUsers(user.followers_url, 1000000).then(followers => {
        return followers.length     

    })



        document.body.innerHTML += `
        <section>
        <img src="${user.avatar_url}">
        
        <h2>${user.login}</h2>
        <p>${followerCount}</p>
        <a href=${user.html_url}>Go to profile</a>
        </section>`;
       
         
       
    })
    })






