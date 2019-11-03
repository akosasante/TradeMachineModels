import Team from '../../team';
import { getId } from '../sharedTestFunctions';

const TEAM_NAME = 'Dugtrio Den'

export function createEspnTeam(): Team {
    return new Team(getId(), TEAM_NAME)
}
