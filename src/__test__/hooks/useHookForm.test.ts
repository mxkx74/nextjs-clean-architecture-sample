import { renderHook } from '@testing-library/react';
import { useHookForm } from '@/hooks';

describe('useHookFormのテスト', () => {
  test('default値が設定されている', () => {
    const { result } = renderHook(() => useHookForm({}));
    expect(result.current.control._options).toEqual(
      expect.objectContaining({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        shouldUnregister: false,
      })
    );
  });

  test('default値は変更可能', () => {
    const { result } = renderHook(() =>
      useHookForm({
        mode: 'onChange',
        reValidateMode: 'onSubmit',
        shouldFocusError: false,
        shouldUnregister: true,
      })
    );
    expect(result.current.control._options).toEqual(
      expect.objectContaining({
        mode: 'onChange',
        reValidateMode: 'onSubmit',
        shouldFocusError: false,
        shouldUnregister: true,
      })
    );
  });
});
