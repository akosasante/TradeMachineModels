import 'jest'
import 'jest-extended'
import User from '../user'
import { createAdminUser, createOwnerUser } from './mockUserFactory'

describe('User model', () => {
    let adminUser: User
    let ownerUser: User

    beforeAll(() => {
        adminUser = createAdminUser()
        ownerUser = createOwnerUser()
    })

    describe('roles', () => {
        it('isAdmin/0 - should return true if the user has the role "admin", false otherwise', () => {
            expect(adminUser.isAdmin()).toBeTrue()
            expect(ownerUser.isAdmin()).toBeFalse()
        })
        it('isOwner/0 - should return true if the user has the role "owner", false otherwise', () => {
            expect(ownerUser.isOwner()).toBeTrue()
            expect(adminUser.isOwner()).toBeFalse()
        })
    })
    it('toString/0 - should return a string representation with the user\'s name, email and id', () => {
        const userString = ownerUser.toString()
        expect(userString).toMatch(ownerUser.displayName)
        expect(userString).toMatch(ownerUser.email)
        expect(userString).toMatch(ownerUser.id)
    })
})
