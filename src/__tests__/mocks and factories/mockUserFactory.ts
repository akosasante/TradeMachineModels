import { name } from 'faker'
import User from '../../models/user'
import { getId } from '../sharedTestFunctions'

const GENERIC_PASSWORD = 'roflpass';
const ADMIN_NAME = `${name.findName()}`
const ADMIN_EMAIL = `admin-${ADMIN_NAME}@example.com`
const OWNER_NAME = `${name.findName()}`
const OWNER_EMAIL = `owner-${OWNER_NAME}@example.com`

export function createAdminUser(): User {
    return new User(getId(), GENERIC_PASSWORD, ADMIN_NAME, ADMIN_EMAIL, 'admin')
}

export function createOwnerUser(): User {
    return new User(getId(), GENERIC_PASSWORD, OWNER_NAME, OWNER_EMAIL, 'owner')
}
