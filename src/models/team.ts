import User from './user';

export type Status = 'active' | 'inactive'

export default class Team {
    constructor(
        public id: string,
        public name: string,
        public status: Status = 'active',
        public espnId?: number,
        public owners: User[] = []
    ) {}

    public toString(): string {
        return `Fantasy League Team: ${this.name} (${this.id})`;
    }
}
