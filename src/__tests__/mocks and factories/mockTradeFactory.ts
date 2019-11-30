import DraftPick from '../../models/draftPick';
import MajorLeaguePlayer from '../../models/majorLeaguePlayer';
import MinorLeaguePlayer from '../../models/minorLeaguePlayer';
import Team from '../../models/team';
import Trade from '../../models/trade';
import TradeItem from '../../models/tradeItem';
import { getId } from '../sharedTestFunctions';
import { createDraftPick } from './mockDraftPickFactory';
import { createMajorLeaguePlayer, createMinorLeaguePlayer } from './mockPlayerFactory';
import { createEspnTeam } from './mockTeamFactory';

export function createTradedMajorLeaguer(sender?: Team, recipient?: Team): TradeItem<MajorLeaguePlayer> {
    return new TradeItem(getId(), createMajorLeaguePlayer(), sender || createEspnTeam(), recipient || createEspnTeam())
}

export function createTradedMinorLeaguer(sender?: Team, recipient?: Team): TradeItem<MinorLeaguePlayer> {
    return new TradeItem(getId(), createMinorLeaguePlayer(), sender || createEspnTeam(), recipient || createEspnTeam())
}

export function createTradedDraftPick(sender?: Team, recipient?: Team): TradeItem<DraftPick> {
    return new TradeItem(getId(), createDraftPick(), sender || createEspnTeam(), recipient || createEspnTeam())
}

export function createInvalidTradeItem() {
    // @ts-ignore
    return new TradeItem(getId(), {a: 1}, createEspnTeam(), createEspnTeam())
}

export function createTrade() {
    const creator = createEspnTeam()
    const recipients = [createEspnTeam(), createEspnTeam()]
    return new Trade(getId(),
        [createTradedMajorLeaguer(creator, recipients[0])],
        [createTradedMinorLeaguer(recipients[0], creator)],
        [createTradedDraftPick(creator, recipients[1])],
        creator,
        recipients)
}
