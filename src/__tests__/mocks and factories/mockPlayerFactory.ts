import MajorLeaguePlayer from '../../majorLeaguePlayer';
import MinorLeaguePlayer from '../../minorLeaguePlayer';
import { getId } from '../sharedTestFunctions';

const MAJOR_NAME = 'Edwin Encarnacion'
const MINOR_NAME = 'Blake Snell'
const MAJOR_META = {
    first_name: 'Edwin',
    last_name: 'Encarnacion',
    position: '3B',
    team: 'NYY',
}
const MINOR_META = {
    first_name: 'Blake',
    last_name: 'Snell',
    position: 'P',
    team: 'TBR',
}

export function createMajorLeaguePlayer(): MajorLeaguePlayer {
    return new MajorLeaguePlayer(getId(), MAJOR_NAME, MAJOR_META)
}

export function createMinorLeaguePlayer(): MinorLeaguePlayer {
    return new MinorLeaguePlayer(getId(), MINOR_NAME, MINOR_META)
}
