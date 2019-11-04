import DraftPick from '../../draftPick';
import MajorLeaguePlayer from '../../majorLeaguePlayer';
import MinorLeaguePlayer from '../../minorLeaguePlayer';
import Trade from '../../trade';
import TradeItem from '../../tradeItem';
import { getId } from '../sharedTestFunctions';
import { createDraftPick } from './mockDraftPickFactory';
import { createMajorLeaguePlayer, createMinorLeaguePlayer } from './mockPlayerFactory';
import { createEspnTeam } from './mockTeamFactory';
import Team from "../../team";

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
