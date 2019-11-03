import { getId } from '../sharedTestFunctions';
import Team from '../team';

const TEAM_NAME = 'Dugtrio Den'

export function createEspnTeam(): Team {
    return new Team(getId(), TEAM_NAME)
}
