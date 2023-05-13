import { composeStories } from '@storybook/react';
import { render, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { WithQueryClient } from '@/component/context/WithQueryClient';
import * as Stories from '@/component/pages/home/Home.stories';

const { Default, EmailValidation, PasswordValidation } = composeStories(Stories);
const wrapper = WithQueryClient();

describe('loginのテスト', () => {
  describe('default', () => {
    test('email、passwordがvalidの場合送信buttonが活性化する', async () => {
      const { container, getByRole } = render(<Default />, { wrapper });
      await Default.play({ canvasElement: container });
      await waitFor(() => {
        expect(getByRole('button') as HTMLButtonElement).not.toBeDisabled();
      });
    });

    test('email、passwordがvalidの場合バリデーションエラーは表示されない', async () => {
      const { container, queryAllByRole } = render(<Default />, { wrapper });
      await Default.play({ canvasElement: container });
      await waitFor(() => {
        expect(queryAllByRole('alert')).toHaveLength(0);
      });
    });

    test('データ送信成功時Profileページに遷移する', async () => {
      const pushSpy = jest.spyOn(mockRouter, 'push');

      const { container } = render(<Default />, { wrapper });
      await Default.play({ canvasElement: container });
      await waitFor(() => {
        expect(pushSpy).toHaveBeenCalledWith('/user/1');
      });
    });
  });

  describe('email validation', () => {
    test('不正なメールアドレスはバリーデーションエラーが表示される', async () => {
      const { container, getByRole } = render(<EmailValidation />, { wrapper });
      await EmailValidation.play({ canvasElement: container });
      await waitFor(() => {
        expect(getByRole('alert')).toHaveTextContent('メールアドレスの形式が正しくありません');
      });
    });
  });

  describe('password validation', () => {
    test('passwordが7文字以下の場合はバリーデーションエラーが表示される', async () => {
      const { container, getByRole } = render(<PasswordValidation />, { wrapper });
      await PasswordValidation.play({ canvasElement: container });
      await waitFor(() => {
        expect(getByRole('alert')).toHaveTextContent('パスワードは8文字以上で入力してください');
      });
    });
  });
});
