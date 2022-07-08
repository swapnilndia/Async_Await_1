console.log("person1: shows ticket");
console.log("person2: shows ticket");

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

const getPopcorn =  promiseWifeBringingTickets.then((t) => {
    console.log(`Wife: i have the tickets`);
    console.log(`Husband: we should go in`);
    console.log(`Wife: no, i am hungry`);
    return new Promise ((resolve, reject)=> resolve (`${t} popcorn`));

});

const getButter =  getPopcorn.then((t) => {
    console.log(`Husband: I got some popcorn`);
    console.log(`Husband: we should go in`);
    console.log(`Wife: I need butter on my Popcorn`);
    return new Promise ((resolve, reject)=> resolve (`${t} butter`));

});

getButter.then((t)=> console.log(t));
console.log("person4: shows ticket");
console.log("person5: shows ticket");