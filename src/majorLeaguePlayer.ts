import Player from './player';

interface MajorLeagueMeta {
    team: string,
    position: string
}

export default class MajorLeaguePlayer extends Player {
    constructor(
        public id: string,
        public name: string,
        public meta: MajorLeagueMeta
    ) {
        super(id, name, meta)
    }

    public toString(): string {
        return `Major League Player: ${this.name} (${this.id})`
    }
}
