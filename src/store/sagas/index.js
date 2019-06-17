import { all, takeLatest } from 'redux-saga/effects';

// eslint-disable-next-line import/no-cycle
import { signIn } from './auth';
import { AuthTypes } from '../ducks/auth';

// eslint-disable-next-line import/no-cycle
import { getTeams } from './teams';
import { TeamsTypes } from '../ducks/teams';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),

    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
  ]);
}
