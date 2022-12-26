const container = document.createElement('div');
document.body.append(container);

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            const usersDiv = document.createElement('div');
            usersDiv.innerText = `${item.id} -- ${item.name}`;
            container.append(usersDiv);

            const anchor = document.createElement('a');
            anchor.innerText = `Click me`;
            usersDiv.append(anchor);
            anchor.href = `user-details.html?data=${item.id}`;
        }
    });
