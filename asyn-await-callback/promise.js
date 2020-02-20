const posts = [
    { title : 'Post One', body: 'This is post one'},
    { title : 'Post Two', body: 'This is post two'}
];
// thuc day -> danh rang -> rua mat-> dun nuoc(doi nuoc soi)
// =======================================================

// thuc day
//dun nuoc
//danh rang -> rua mat
//====================


// giam doc -> thu ky -> phong
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

getPosts();

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             const error = true;

//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong!');
//             }
//         }, 5000);
//     });
// }

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            
            if(!error) {
                resolve()
            } else {
                reject();
            }
        }, 5000);
    })
}

createPost({title: 'Three', body : 'This is three'})
.then(getPosts);

// createPost({ title : 'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello world');
const promise2 = Promise.resolve('This is Van');
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if (!error) {
            resolve('van')
        } else {
            reject()
        }
        console.log('goodbye');
    }, 2000);
})


Promise.all([promise1, promise2, promise3]) 
.then(values => console.log(values));





api.getUser('pikalong')
  .then(user => api.getPostsOfUser(user))
  .then(posts => api.getCommentsOfPosts(posts))
  .catch(err => { throw err })

  