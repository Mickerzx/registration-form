// Core
import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Slices
import { setRegisterData } from '../../store/slices/registration.slice';
import { onNext, setStepsStatus } from '../../store/slices/steps.slice';

// Selectors
import { selectRegistrationData } from '../../store/selectors/registeration.selectors';

// Interfaces
import { Register } from '../../typespaces/interfaces/Register.interface';

// Enums
import { StepsStatus } from '../../typespaces/enums/stepsStatus';

// Helpers
import { validateConfirmPassword, validatePassword } from '../../helpers/formValidators';

const RegistrationForm: FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const passwordValue = Form.useWatch('password', form);

  const { username, password, email, confirmPassword } = useSelector(selectRegistrationData);

  const onFinish = (values: Register) => {
    dispatch(setRegisterData(values));
    dispatch(onNext());
    dispatch(setStepsStatus(StepsStatus.PROCESS));
  };

  const onFinishFailed = () => {
    dispatch(setStepsStatus(StepsStatus.ERROR));
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        initialValue={username}
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Пожалуйста, введите логин' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item initialValue={email} label="Почта" name="email">
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={password}
        label="Пароль"
        name="password"
        rules={[{ required: true, validator: validatePassword() }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        initialValue={confirmPassword}
        label="Повторить Пароль"
        name="confirmPassword"
        rules={[{ required: true, validator: validateConfirmPassword(passwordValue) }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Продолжить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
