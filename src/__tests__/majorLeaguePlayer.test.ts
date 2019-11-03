import 'jest'
import 'jest-extended'
import MajorLeaguePlayer from '../majorLeaguePlayer';
import { createMajorLeaguePlayer } from './mockPlayerFactory';

describe('Major League Player model', () => {
    let player: MajorLeaguePlayer;

    beforeAll(() => {
        player = createMajorLeaguePlayer()
    })

    it('toString/0 - should return a string representation with the player\'s name and id', ()  => {
        const playerString = player.toString()
        expect(playerString).toMatch(player.name)
        expect(playerString).toMatch(player.id)
    })
})
