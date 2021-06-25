import snapshotDiff from 'snapshot-diff';
import { actionCreators, reducer } from '../../../modules/app/';
import { initialState } from '../../../modules/app/reducer';

describe('appのテスト', () => {
  const action = actionCreators.initApp();
  const data = reducer(initialState, action);

  it('起動時にinitializeがtrueになる', () => {
    expect(data.initialize).toBeTruthy();
  });

  it('スナップショット', () => {
    expect(snapshotDiff(initialState, data)).toMatchSnapshot();
  });
});
