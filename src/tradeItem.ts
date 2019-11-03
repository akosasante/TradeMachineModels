import DraftPick from './draftPick';
import MajorLeaguePlayer from './majorLeaguePlayer';
import MinorLeaguePlayer from './minorLeaguePlayer';
import Team from './team';

type TradeType = MajorLeaguePlayer | MinorLeaguePlayer | DraftPick

export default class TradeItem<T extends TradeType> {
    constructor(
        public id: string,
        public tradeEntity: T,
        public sender: Team,
        public recipient: Team
    ) {}

    public getTradeItemType(): string {
        if (this.tradeEntity instanceof MajorLeaguePlayer) {
            return 'majors'
        } else if (this.tradeEntity instanceof MinorLeaguePlayer) {
            return 'minors'
        } else if (this.tradeEntity instanceof DraftPick) {
            return 'draft_pick'
        } else {
            throw Error('Invalid trade item type')
        }
    }

    public toString(): string {
        const tradeItemType = this.getTradeItemType()
        return `Trade Item [${tradeItemType}]: ${this.tradeEntity.toString()} From ${this.sender.name} To ${this.recipient.name} (${this.id})`
    }
}
