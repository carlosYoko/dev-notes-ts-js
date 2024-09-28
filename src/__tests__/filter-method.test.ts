import { IUser, User, filteredYear } from "../filter-method";

describe('testing ', () => {

    test("filtered less than year 86's", () => {

        // Act
        const mockUsers: IUser[] = [{ Name: 'Test1', Year: 94 }, { Name: 'Test2', Year: 86 }, { Name: 'Test3', Year: 76 }];
        const expected: IUser[] = [{ Name: 'Test2', Year: 86 }, { Name: 'Test3', Year: 76 }];

        const mockFilter = jest.fn(filteredYear);

        //Arrange
        const result = mockUsers.filter(mockFilter);

        // Assert
        expect(result).toEqual(expected);
        expect(result).toHaveLength(2);
        expect(result).toContainEqual(expected[0]);
        expect(result).toContainEqual(expected[1]);
        expect(mockFilter).toHaveBeenCalledTimes(mockUsers.length);
    });

    test("filtered less than year 86's with fakedata", () => {

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
})