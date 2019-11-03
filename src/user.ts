export type Role = 'admin' | 'owner'

export type UserStatus = 'active' | 'inactive'

export default class User {
    constructor(
        public id: string,
        public password: string,
        public displayName: string,
        public email: string,
        public role: Role = 'owner',
        public status: UserStatus = 'inactive',
        public slackUsername?: string,
        public lastLoggedIn?: Date
    ) {
        // TODO: Figure out if hasPassword, passwordRestetExpires/Token, annd userToken are needed here
        // TODO: What about relations?
    }

    public toString(): string {
        return `User: ${this.displayName} - ${this.email} (${this.id})`;
    }

    public isAdmin(): boolean {
        return this.role === 'admin'
    }

    public isOwner(): boolean {
        return this.role === 'owner'
    }
}
