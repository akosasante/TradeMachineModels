import uuid = require('uuid');
import User from '../user';

const GENERIC_PASSWORD = 'roflpass';
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_NAME = 'Admin Johnson'
const OWNER_EMAIL = 'owner@example.com';
const OWNER_NAME = 'Owner Smithson'

function getId(): string {
    return uuid.v4()
}

export function createAdminUser(): User {
    return new User(getId(), GENERIC_PASSWORD, ADMIN_NAME, ADMIN_EMAIL, 'admin')
}

export function createOwnerUser(): User {
    return new User(getId(), GENERIC_PASSWORD, OWNER_NAME, OWNER_EMAIL, 'owner')
}
