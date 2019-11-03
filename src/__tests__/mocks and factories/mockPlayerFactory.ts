import { name } from 'faker'
import MajorLeaguePlayer from '../../majorLeaguePlayer';
import MinorLeaguePlayer from '../../minorLeaguePlayer';
import { getId } from '../sharedTestFunctions';

const MAJOR_NAME = `${name.findName()}`
const MINOR_NAME = `${name.findName()}`
const MAJOR_META = {
    first_name: `${MAJOR_NAME.split(' ')[0]}`,
    last_name: `${MAJOR_NAME.split(' ')[2]}`,
    position: '3B',
    team: 'NYY',
}
const MINOR_META = {
    first_name: `${MINOR_NAME.split(' ')[0]}`,
    last_name: `${MINOR_NAME.split(' ')[2]}`,
    position: 'P',
    team: 'TBR',
}

export function createMajorLeaguePlayer(): MajorLeaguePlayer {
    return new MajorLeaguePlayer(getId(), MAJOR_NAME, MAJOR_META)
}

export function createMinorLeaguePlayer(): MinorLeaguePlayer {
    return new MinorLeaguePlayer(getId(), MINOR_NAME, MINOR_META)
}
