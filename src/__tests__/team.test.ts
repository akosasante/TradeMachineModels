import 'jest'
import 'jest-extended'
import Team from '../team';
import { createEspnTeam } from './mockTeamFactory';

describe('Team model', () => {
    let espnTeam: Team

    beforeAll(() => {
        espnTeam = createEspnTeam()
    })

    it('toString/0 - should return a string representation with the team\'s name and id', () => {
        const teamString = espnTeam.toString()
        expect(teamString).toMatch(espnTeam.name)
        expect(teamString).toMatch(espnTeam.id)
    })
})
