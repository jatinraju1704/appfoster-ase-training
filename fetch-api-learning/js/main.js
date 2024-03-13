//!------------------------------ GET ------------------------------

//* Getting all Posts
// async function getAllData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await response.json();
//     return data;
// }
// getAllData().then(
//     data=>{
//         console.log(data);
//   }  
// ).catch(error=>console.log(error));


//* Getting Post data by post id
// async function getPostData(pid){
//    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`);
//    let data = await response.json();
//    return data; 
// }
// getPostData(6).then(
//     data=>{
//         console.log(data);
//     }
// ).catch(error=>console.log(error));


//* Getting Comments of a Post
// async function getCommentsOfPost(pid){
//     let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${pid}`);
//     let data = await response.json();
//     return data;
// }
// getCommentsOfPost(1).then(
//     data=>{
//         console.log(data[0].id +" : "+data[0].name);
//     }
// ).catch(error=>console.log(error));



//!------------------------------ POST -----------------------------

// async function addPostData() {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
//         method:'POST',
//         body: JSON.stringify({
//             userId: 0,
//             id: 0,
//             title: 'User-0 Title',
//             body: 'This is User-0 Body',
//         }),
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     });
//     let data = await response.json();
//     return data;
// }

// addPostData().then(
//     data=>{
//         console.log(data);
//     }
// ).catch(error=>console.log(error));


//!------------------------------ PUT ------------------------------
//* PASS THE ID IN THE URL
// async function updatePostData() {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`,{
//         method:'PUT',
//         body: JSON.stringify({
//             userId: 0,
//             id: 0,
//             title: 'User-0 Title',
//             body: 'This is User-0 Body',
//         }),
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     });
//     let data = await response.json();
//     return data;
// }

// updatePostData().then(
//     data=>{
//         console.log(data);
//     }
// ).catch(error=>console.log(error));

//!------------------------------ PUT ------------------------------
//* PASS THE ID IN THE URL
// async function updatePostData() {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`,{
//         method:'DELETE',
//     });
//     let data = await response.json();
//     return data;
// }

// updatePostData().then(
//     data=>{
//         console.log(data);
//     }
// ).catch(error=>console.log(error));