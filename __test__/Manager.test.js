const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('Initialization', () => {
        it('Creates manager object when called with the "new" keyword', () => {
            const manager = new Manager('dave', '2', 'email@email', '828-507-4084');

            expect(typeof (manager)).toEqual('object');
        });

        it('creates "Office number" ', () => {
            const manager = new Manager('dave', '2', 'email@email', '828-507-4804');

            expect(manager.officeNumber).toEqual('828-507-4804')

        });

        describe('getOfficeNumber', () => {
            it('should return a "getOfficeNumber" property that is updated ', () => {
                const manager = new Manager('dave', '2', 'email@email', '828-507-4804');

                expect(manager.getOfficeNumber()).toEqual('828-507-4804');
            });
        });

        describe('getRole', () => {
            it('should return "Manager" value', () => {
                const manager = new Manager('dave', '2', 'email@email', '828-507-4804');
                const role = 'Manager';

                expect(manager.getRole()).toEqual(role)
            });
        });
    });
});