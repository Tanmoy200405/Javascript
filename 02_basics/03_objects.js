// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")


const jsUser = {
    name :"Tanmoy",
    "full name": "Tanmoy Mukherjee",
    [mySym] :"mykey1",
    age: "20",
    location: "Kolkata",
    email: "tanmoymukherjee3@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(jsUser.name)
console.log(jsUser["full name"])
console.log(jsUser[mySym])