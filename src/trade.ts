import DraftPick from './draftPick';
import MajorLeaguePlayer from './majorLeaguePlayer';
import MinorLeaguePlayer from './minorLeaguePlayer';
import Team from './team';
import TradeItem, { TradeableEntity } from './tradeItem';

export default class Trade {
    constructor(
        public id: string,
        public tradedPlayers: Array<TradeItem<MajorLeaguePlayer>>,
        public tradedProspects: Array<TradeItem<MinorLeaguePlayer>>,
        public tradedPicks: Array<TradeItem<DraftPick>>,
        public creator: Team,
        public recipients: Team[]
    ) {}

    public toString(): string {
        const senderName = this.creator.name
        const recipientNames = this.recipients.map(t => t.name).join(', ')
        const tradedNum = this.tradedPlayers.length + this.tradedProspects.length + this.tradedPicks.length
        return `Trade: Requested by: ${senderName} - With: ${recipientNames} - ${tradedNum} entitie(s) (${this.id})`;
    }

    public getAllTradeItems(): Array<TradeItem<TradeableEntity>> {
        return [...this.tradedPicks, ...this.tradedProspects, ...this.tradedPlayers]
    }

    public itemsSentBy(id: string): Array<TradeItem<TradeableEntity>> {
        return this.getAllTradeItems().filter(item => item.sender.id === id)
    }

    public itemsReceivedBy(id: string): Array<TradeItem<TradeableEntity>> {
        return this.getAllTradeItems().filter(item => item.recipient.id === id)
    }

    public tradeItemsByRecipient() {
        const possibleRecipients = [...this.recipients, this.creator]
        return possibleRecipients.reduce((tradeMap, recipient) => {
            tradeMap[recipient.id] = this.itemsReceivedBy(recipient.id)
            return tradeMap
        }, {tradeId: this.id} as {[key: string]: string|Array<TradeItem<TradeableEntity>>})
    }

    public tradeItemsBySender() {
        const possibleSenders = [...this.recipients, this.creator]
        return possibleSenders.reduce((tradeMap, sender) => {
            tradeMap[sender.id] = this.itemsSentBy(sender.id)
            return tradeMap
        }, {tradeId: this.id} as {[key: string]: string|Array<TradeItem<TradeableEntity>>})
    }
}
