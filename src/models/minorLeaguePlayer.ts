import Player from './player';

interface MinorLeagueMeta {
    team: string,
    position: string
}

export default class MinorLeaguePlayer extends Player {
    constructor(
        public id: string,
        public name: string,
        public meta: MinorLeagueMeta
    ) {
        super(id, name, meta)
    }

    public toString(): string {
        return `Minor League Player: ${this.name} (${this.id})`
    }
}
