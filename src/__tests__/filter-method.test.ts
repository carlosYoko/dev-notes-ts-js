import { IUser, User, filteredYear } from "../filter-method";

test("filtered less than year 86's", () => {

    // Act
    let users: IUser[] = [new User("Test1", 94), new User("Test2", 86), new User("Test3", 76)]
    let expected: IUser[] = [{ Name: 'Test2', Year: 86 }, { Name: 'Test3', Year: 76 }]

    // Arrange
    let result: IUser[] = users.filter(filteredYear);

    // Assert
    expect(result).toEqual(expected);
    expect(result.length).toBe(2);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual(expected[0]);
    expect(result).toContainEqual(expected[1]);
    expect(result).toEqual(expect.arrayContaining(result));

    result.forEach(user => {
        expect(user).not.toBeNull();
    });

});