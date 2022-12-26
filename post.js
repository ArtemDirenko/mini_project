const url = new URL(location.href);
const postId = url.searchParams.get('data');
const userId = url.searchParams.get('user');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(value => value.json())
    .then(posts => {
        const commentsDivButton = document.createElement('div');

        for (const post of posts) {
            const div = document.createElement('div');
            div.innerText = post.body;
            document.body.appendChild(div);
        }

        document.body.append(commentsDivButton);

        const anchor = document.createElement('button');
        anchor.innerText = `details about post`;
        commentsDivButton.append(anchor);
        commentsDivButton.onclick = () => {currentPostComments()};
    }
    );

function currentPostComments() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(value => value.json())
        .then(comments => {
            for (const comment of comments) {
                const div = document.createElement('div');
                div.innerText = comment.body;
                document.body.appendChild(div);


            }})
}


