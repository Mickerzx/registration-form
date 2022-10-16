import { RuleObject } from 'rc-field-form/es/interface';

export const validatePassword = () => async (_rule: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error('Пожалуйста, введите пароль'));
  }
  if (value.trim().length < 6) {
    return Promise.reject(new Error('Длина пароля должна быть больше 6 символов'));
  }
  return Promise.resolve();
};

export const validateConfirmPassword = (confirm_value: string) => async (_rule: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error('Пожалуйста, повторите пароль'));
  }
  if (value !== confirm_value) {
    return Promise.reject(new Error('Пароли не совпадают'));
  }
  return Promise.resolve();
};
