console.log('Execute Order 66');

async function getGitUsers() {
    try {
    const response = await fetch('https://api.github.com/users');
    return await response.json()
} 
catch(err) {
    alert(err);
  }

};

getGitUsers().then(users => {
    //console.log(users)
    users.forEach(user => {
        console.log(user);
        document.body.innerHTML += `<div><img src="${user.avatar_url}"/><a href=${user.url}>${user.login}</a></div>`;
    })
})






