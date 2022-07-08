console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const addButter = new Promise((resolve, reject) => resolve(`butter`));

    let ticket = await promiseWifeBringingTickets;
    console.log(`Wife: i have the ${ticket}`);
    console.log(`Husband: we should go in`);
    console.log(`Wife: no, i am hungry`);

    let popcorn = await getPopcorn;
    console.log(`Husband: I got some ${popcorn}`);
    console.log(`Husband: we should go in`);
    console.log(`Wife: I need butter on my Popcorn`);

    let butter = await addButter;
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log(`husband: anything else darling?`);
    console.log(`wife let's go we are getting late`);
    console.log(`husband: thank you for the reminder *grins`);

    return ticket;
}


preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");