import 'jest'
import 'jest-extended'
import DraftPick from '../models/draftPick';
import MajorLeaguePlayer from '../models/majorLeaguePlayer';
import MinorLeaguePlayer from '../models/minorLeaguePlayer';
import Trade from '../models/trade';
import TradeItem, { TradeableEntity } from '../models/tradeItem';
import { createTrade } from './mocks and factories/mockTradeFactory';

describe('Trade model', () => {
    let trade: Trade

    beforeAll(() => {
        trade = createTrade()
    })

    it('toString/0 - should return a string representation of the trade with it\'s id, sender\'s and recipient\'s name and the number of traded entities', () => {
        const tradeString = trade.toString()
        expect(tradeString).toMatch(trade.id)
        expect(tradeString).toMatch(trade.creator.name)
        expect(tradeString).toMatch(trade.recipients[0].name)
        expect(tradeString).toMatch('3 entitie(s)')
    })

    it(`getAllTradeItems/0 - should return an array of all
    the trade items (major/minor league players + draft picks`, () => {
        const allTradeItems = trade.getAllTradeItems()
        expect(allTradeItems).toBeArrayOfSize(3)
        expect([MajorLeaguePlayer, MinorLeaguePlayer, DraftPick]).toSatisfyAll(itemClass =>
            allTradeItems.some(item => item.tradeEntity instanceof itemClass)
        )
    })

    it('itemsSentBy/1 - should return an array of trades sent by the given id', () => {
        const itemsSentByTradeCreator = trade.itemsSentBy(trade.creator.id)
        expect(itemsSentByTradeCreator).toBeArrayOfSize(2)
        expect([MajorLeaguePlayer, DraftPick]).toSatisfyAll(itemClass =>
            itemsSentByTradeCreator.some(item => item.tradeEntity instanceof itemClass)
        )
        expect(itemsSentByTradeCreator).toSatisfyAll((item: TradeItem<TradeableEntity>) =>
            !(item.tradeEntity instanceof MinorLeaguePlayer))
    })

    it('itemsReceivedBy/1 - should return an array of trades received by the given id', () => {
        const itemsReceivedByTradeCreator = trade.itemsReceivedBy(trade.creator.id)
        expect(itemsReceivedByTradeCreator).toBeArrayOfSize(1)
        expect(itemsReceivedByTradeCreator[0].tradeEntity instanceof MinorLeaguePlayer).toBeTrue()
    })
})
