import { setValue } from '../../components/context/global/action';
import { reducer, initialState } from '../../components/context/global/reducer';

describe('global reducerのテスト', () => {
  test('valueをセットできる', () => {
    const payload = setValue('init');
    const state = reducer(initialState, payload);
    expect(state).toEqual({ ...initialState, value: 'init' });
  });
});
