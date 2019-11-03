import DraftPick from '../draftPick';
import { getId } from './sharedTestFunctions';

const DRAFT_PICK_SEASON = 2019
const DRAFT_PICK_ROUND = 1
const DRAFT_PICK_TYPE = 'majors'

export function createDraftPick(): DraftPick {
    return new DraftPick(getId(), DRAFT_PICK_SEASON, DRAFT_PICK_TYPE, DRAFT_PICK_ROUND, getId())
}
