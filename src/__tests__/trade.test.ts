import 'jest'
import 'jest-extended'
import Trade from '../trade';
import { createTrade } from './mocks and factories/mockTradeFactory';

describe('Trade model', () => {
    let trade: Trade

    beforeAll(() => {
        trade = createTrade()
    })

    it('toString/0 - should return a string representation of the trade with it\'s id, sender\'s and recipient\'s name and the number of traded entities', () => {
        const tradeString = trade.toString()
        expect(tradeString).toMatch(trade.id)
        expect(tradeString).toMatch(trade.sender.name)
        expect(tradeString).toMatch(trade.recipients[0].name)
        expect(tradeString).toMatch('3 entitie(s)')
    })
})
