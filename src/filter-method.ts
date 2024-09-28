export interface IUser {
    Name: string,
    Year: number
}

export class User implements IUser {
    Name: string = '';
    Year: number = 0;

    constructor(name: string, year: number) {
        this.Name = name;
        this.Year = year;
    }
}

export function filteredYear(item: IUser): boolean {
    if (item.Year <= 86) return true;
    return false;
}

let users: IUser[] = [new User("John", 94), new User("Tux", 86), new User("Martin", 76)]

let usersFiltered: IUser[] = users.filter(filteredYear);

console.log(usersFiltered);
// output:
// [ User { Name: 'Tux', Year: 86 }, User { Name: 'Martin', Year: 76 } ]