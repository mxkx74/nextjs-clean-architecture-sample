import { z } from 'zod';
import { userSchema } from '@/feature/user';
import { type AuthLoginEntity } from './entity';

/**
 * repository
 */
export type AuthRepository = {
  login: (data: AuthLoginInputModel) => Promise<AuthLoginEntity>;
};

/**
 * input
 * form > validation
 * validationのschema、type
 */
export const authLoginValidationSchema = z.object({
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
  password: z.string().min(8, { message: 'パスワードは8文字以上で入力してください' }),
});

export type AuthLoginValidation = z.infer<typeof authLoginValidationSchema>;

/**
 * input
 * validation > api
 * 送信データ用のschema、type
 * validationと同じも
 */
export const inputModelSchema = authLoginValidationSchema;

export type AuthLoginInputModel = z.infer<typeof inputModelSchema>;

/**
 * output
 * api > view
 * データ送信時のレスポンスデータのschema、type
 */
export const authLoginOutputModelSchema = userSchema.pick({ id: true });

export type AuthLoginOutputModel = z.infer<typeof authLoginOutputModelSchema>;

/**
 * output
 * entityからviewに渡すデータに変換する
 */
export const convertToLoginOutputModel = (entity: AuthLoginEntity): AuthLoginOutputModel => {
  return authLoginOutputModelSchema.parse(entity);
};
