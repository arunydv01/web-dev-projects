// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest(); //creating a new Http request method

//         request.open("GET", resource); //setting the request
//         request.send();

//         //a request is completed in 4 stages. And they are:
//         request.addEventListener("readystatechange", () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } 
//             else if (request.readyState === 4) {
//                 reject("Error!! Could not fetch data")
//             }
//         });
//     })
  
// };


//because this is a callback function hence my code will not stop and it will be called at the end
// getTodos('todos/shaun.json', (err, data)=>{
//     console.log(data);
//     getTodos('todos/mark.json', (err, data)=>{
//         console.log(data);
//         getTodos('todos/luigi.json', (err, data)=>{
//             console.log(data);
//         })
//     })
// });

// getTodos('todos/shaun.json').then(data => {
//     console.log('Promise 1 resolved', data);
//     return getTodos('todos/luigi.json');
// }).then(data => {
//     console.log('Promise 2 resolved', data);
// }).catch(err => {
//     console.log('error', err);
// })


// const getSomething = () =>{
//     return new Promise((resolve, reject) => {
//         // resolve('this is data');
//         reject('error!!!')
//     });
// };

// getSomething().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })



// fetch('todos/shaun.json').then(data => {
//     console.log('Promise resolved', data);
//     return data.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('Promise rejected', err);
// })

const getTodos = async () =>{
    const response = await fetch('todos/shaun.json');
    const data = await response.json();
    return data;

};

getTodos()
        .then(data => console.log(data))
        .catch(err => console.log(err))
