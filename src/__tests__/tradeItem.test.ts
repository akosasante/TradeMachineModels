import 'jest'
import 'jest-extended'
import DraftPick from '../models/draftPick';
import MajorLeaguePlayer from '../models/majorLeaguePlayer';
import MinorLeaguePlayer from '../models/minorLeaguePlayer';
import TradeItem from '../models/tradeItem';
import {
    createInvalidTradeItem,
    createTradedDraftPick,
    createTradedMajorLeaguer,
    createTradedMinorLeaguer
} from './mocks and factories/mockTradeFactory';

describe('Trade Item model', () => {
    let tradedMajorLeaguePlayer: TradeItem<MajorLeaguePlayer>
    let tradedMinorLeaguePlayer: TradeItem<MinorLeaguePlayer>
    let tradedDraftPickPlayer: TradeItem<DraftPick>
    let invalidTradeItem: TradeItem<any>

    beforeAll(() => {
        tradedMajorLeaguePlayer = createTradedMajorLeaguer()
        tradedMinorLeaguePlayer = createTradedMinorLeaguer()
        tradedDraftPickPlayer = createTradedDraftPick()
        invalidTradeItem = createInvalidTradeItem()
    })

    describe('getTradeItemType/0', () => {
        it('should return the string "majors" if tradeEntity is a MajorLeaguePlayer', () => {
            expect(tradedMajorLeaguePlayer.getTradeItemType()).toMatch('majors')
        })
        it('should return the string "minors" if tradeEntity is a MinorLeaguePlayer', () => {
            expect(tradedMinorLeaguePlayer.getTradeItemType()).toMatch('minors')
        })
        it('should return the string "draft_pick" if tradeEntity is a DraftPick', () => {
            expect(tradedDraftPickPlayer.getTradeItemType()).toMatch('draft_pick')
        })
        it('throw an error if the tradeEntity is an invalid type', () => {
            expect(() => invalidTradeItem.getTradeItemType()).toThrowError()
        })
    })
})
