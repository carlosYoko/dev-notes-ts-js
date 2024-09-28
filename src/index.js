
class User {
    Name = '';
    Year = 0;

    constructor(name, year) {
        this.Name = name;
        this.Year = year;
    }
}

function filteredYear(item) {
    if (item.Year <= 86) return item;
}

let users = [new User("John", 94), new User("Tux", 86), new User("Martin", 76)]

let usersFiltered = users.filter(filteredYear);

console.log(usersFiltered);
// output:
// [ User { Name: 'Tux', Year: 86 }, User { Name: 'Martin', Year: 76 } ]