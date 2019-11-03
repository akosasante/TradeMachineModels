import DraftPick from '../../draftPick';
import MajorLeaguePlayer from '../../majorLeaguePlayer';
import MinorLeaguePlayer from '../../minorLeaguePlayer';
import Trade from '../../trade';
import TradeItem from '../../tradeItem';
import { getId } from '../sharedTestFunctions';
import { createDraftPick } from './mockDraftPickFactory';
import { createMajorLeaguePlayer, createMinorLeaguePlayer } from './mockPlayerFactory';
import { createEspnTeam } from './mockTeamFactory';

export function createTradedMajorLeaguer(): TradeItem<MajorLeaguePlayer> {
    return new TradeItem(getId(), createMajorLeaguePlayer(), createEspnTeam(), createEspnTeam())
}

export function createTradedMinorLeaguer(): TradeItem<MinorLeaguePlayer> {
    return new TradeItem(getId(), createMinorLeaguePlayer(), createEspnTeam(), createEspnTeam())
}

export function createTradedDraftPick(): TradeItem<DraftPick> {
    return new TradeItem(getId(), createDraftPick(), createEspnTeam(), createEspnTeam())
}

export function createInvalidTradeItem() {
    // @ts-ignore
    return new TradeItem(getId(), {a: 1}, createEspnTeam(), createEspnTeam())
}

export function createTrade() {
    return new Trade(getId(),
        [createTradedMajorLeaguer()],
        [createTradedMinorLeaguer()],
        [createTradedDraftPick()],
        createEspnTeam (),
        [createEspnTeam(),
            createEspnTeam()])
}
