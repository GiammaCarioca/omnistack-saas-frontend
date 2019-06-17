import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import api from '~/services/api';

import MembersActions from '../ducks/members';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  yield put(MembersActions.getMembersSuccess(response.data));
}
