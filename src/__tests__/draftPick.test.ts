import 'jest'
import 'jest-extended'
import DraftPick, { draftPickTypeToDisplay } from '../models/draftPick';
import { createDraftPick } from './mocks and factories/mockDraftPickFactory';

describe('Draft Pick model', () => {
    let draftPick: DraftPick

    beforeAll(() => {
        draftPick = createDraftPick()
    })

    it('toString/0 - should return a string representation with the draft pick season, type, round, id, and pick owner id', () => {
        const draftPickString = draftPick.toString()
        expect(draftPickString).toMatch(draftPick.pickOwnerId)
        expect(draftPickString).toMatch(draftPick.id)
        expect(draftPickString).toMatch(draftPick.round.toString())
        expect(draftPickString).toMatch(draftPick.season.toString())
        expect(draftPickString).toMatch(draftPickTypeToDisplay(draftPick.type))
    })
})
