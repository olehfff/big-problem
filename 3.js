const getUserWithGender = (user, gender) => {
    return users
    .filter((user) => user.gender === gender);
    .map((user) => user.name);
}

const getUserWithAge = (users, min, max) => {
    return users.filter(user => user.age > min && user.age < max)
};

console.log(getUserWithAge(users, 20, 30));

console.log(getUserWithAge(users, 30, 40));


const function1 users => {
    return users.reduce((userBalance, totalBalance) => userBalance + totalBalance)
}

console.log(function1(users));


const getUserWithFriend = (users, friendname) => {
    return users.filter(user => user.friends.includes(friendname))
};

console.log(getUserWithFriend(users, Oleh));

console.log(getUserWithFriend(users, Ostap));


const getNamesSortedByFriend