const url = new URL(location.href);
const id = url.searchParams.get('data');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        const userDivButton = document.createElement('div');

        for (const item in value) {
            const userDiv = document.createElement('div');

            if (typeof value[item] !== 'object') {
                userDiv.innerText = `${item} -- ${value[item]}`;
            } else {
                userDiv.innerText = `${item} :`

                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key} -- ${value[item][key]}`;

                    } else {
                        userInnerDiv.innerText = `${key} :`;

                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} -- ${value[item][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }
            document.body.append(userDiv);

        }

        document.body.append(userDivButton);

        const anchor = document.createElement('button');
        anchor.innerText = `post of current user`;
        userDivButton.append(anchor);
        userDivButton.onclick = () => {currentUserPost(id)};
    });


function currentUserPost(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                const div = document.createElement('div');
                div.innerText = post.title;
                const anchor = document.createElement('a');
                anchor.innerText ='details about post';
                anchor.href = `post-details.html?data=${post.id}&user=${userId}`;
                div.appendChild(anchor)
                document.body.appendChild(div);

            }})
}




