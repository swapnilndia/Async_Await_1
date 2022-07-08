console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`Popcorn`));

    const getCandy = new Promise((resolve, reject) => resolve(`Candy`));

    const getCoke = new Promise((resolve, reject) => resolve(`Coke`));

    let ticket = await promiseWifeBringingTickets;

    let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy,getCoke])

    console.log(`${popcorn}, ${candy}, ${coke}`)

    return ticket;
}


preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");