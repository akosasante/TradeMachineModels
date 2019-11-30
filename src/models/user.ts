import Team from './team';

export type Role = 'admin' | 'owner'

export type UserStatus = 'active' | 'inactive'

export default class User {
    constructor(
        public id: string,
        // public password: string,
        public hasPassword: boolean,
        public displayName: string,
        public email: string,
        public role: Role = 'owner',
        public status: UserStatus = 'active',
        public slackUsername?: string,
        public lastLoggedIn?: Date,
        public team?: Team
    ) {}

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
