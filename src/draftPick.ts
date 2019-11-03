export type DraftPickType = 'majors' | 'high_minors' | 'low_minors'

function draftPickTypeToDisplay(type: DraftPickType): string {
    switch (type) {
        case 'high_minors':
            return 'High Minors'
        case 'low_minors':
            return 'Low Minors'
        case 'majors':
            return 'Major League'
    }
}

export default class DraftPick {
    constructor(
        public id: string,
        public season: number,
        public type: DraftPickType,
        public round: number,
        public pickOwnerId: string
    ) {}

    public toString(): string {
        return `Draft Pick: ${this.season} ${draftPickTypeToDisplay(this.type)} Round ${this.round} owned by #${this.pickOwnerId} (${this.id})`
    }
}
