import DraftPick from './draftPick';
import MajorLeaguePlayer from './majorLeaguePlayer';
import MinorLeaguePlayer from './minorLeaguePlayer';
import Team from './team';
import TradeItem from './tradeItem';

export default class Trade {
    constructor(
        public id: string,
        public tradedPlayers: Array<TradeItem<MajorLeaguePlayer>>,
        public tradedProspects: Array<TradeItem<MinorLeaguePlayer>>,
        public tradedPicks: Array<TradeItem<DraftPick>>,
        public sender: Team,
        public recipients: Team[]
    ) {}

    public toString(): string {
        const senderName = this.sender.name
        const recipientNames = this.recipients.map(t => t.name).join(', ')
        const tradedNum = this.tradedPlayers.length + this.tradedProspects.length + this.tradedPicks.length
        return `Trade: Requested by: ${senderName} - With: ${recipientNames} - ${tradedNum} entities (${this.id})`;
    }
}
