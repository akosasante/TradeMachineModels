import 'jest'
import 'jest-extended'
import MinorLeaguePlayer from '../minorLeaguePlayer';
import { createMinorLeaguePlayer } from './mocks and factories/mockPlayerFactory';

describe('Minor League Player model', () => {
    let player: MinorLeaguePlayer;

    beforeAll(() => {
        player = createMinorLeaguePlayer()
    })

    it('toString/0 - should return a string representation with the player\'s name and id', ()  => {
        const playerString = player.toString()
        expect(playerString).toMatch(player.name)
        expect(playerString).toMatch(player.id)
    })
})
