const user = {
    username: "hc",
    "first Name": "hitesh",
    name: "hitesh",
    email: "h@hc.com",
    age: 20,
    isAdmin: false,
    isLoggedIn: true,
    tea: ["lemon", "peach", "ginger"],
    address: {
        city: "Jaipur",
        state: "Rajasthan"
    }
}

const anotherUser = user;

// console.log(user.age);
// console.log(user['age']);
// console.log(user.tea[1]);
// console.log(user.address.state);
// console.log(user["address"]["state"]);

user.email = "hitesh@pw.live"
// console.log(user);
// console.log(anotherUser);

delete user.isAdmin
const userListFromDatabase = [{}, {}, {}]
console.log(user.hasOwnProperty('tea'));
console.log(Object.entries(user));