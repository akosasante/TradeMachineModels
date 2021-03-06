import { company } from 'faker'
import Team from '../../models/team';
import { getId } from '../sharedTestFunctions';

const TEAM_NAME = `${company.companyName()}`

export function createEspnTeam(): Team {
    return new Team(getId(), TEAM_NAME)
}
