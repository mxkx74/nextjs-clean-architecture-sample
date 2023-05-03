import { setValue } from '@/component/context/global/action';
import { reducer, initialState } from '@/component/context/global/reducer';

describe('global reducerのテスト', () => {
  test('valueをセットできる', () => {
    const payload = setValue('init');
    const state = reducer(initialState, payload);
    expect(state).toEqual({ ...initialState, value: 'init' });
  });
});
