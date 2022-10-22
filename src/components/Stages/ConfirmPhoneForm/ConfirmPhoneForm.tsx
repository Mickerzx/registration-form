// Core
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import InputMask from 'react-input-mask';

// Slices
import { onNext, setStepsStatus } from 'store/slices/steps.slice';

// Enums
import { StepsStatus } from 'typespaces/enums/stepsStatus';

const ConfirmPhoneForm: FC = () => {
  const dispatch = useDispatch();

  const onFinish = () => {
    dispatch(onNext());
    dispatch(setStepsStatus(StepsStatus.PROCESS));
  };

  const onFinishFailed = () => {
    dispatch(setStepsStatus(StepsStatus.ERROR));
  };
  return (
    <Form name="register" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" layout="vertical">
      <Form.Item
        label="Номер телефона"
        name="phone"
        rules={[{ required: true, message: 'Пожалуйста, введите номер телефона' }]}
      >
        <InputMask mask="+7 (999) 999-99-99">
          <Input />
        </InputMask>
      </Form.Item>
      <Form.Item>
        <Button type="primary">Получить код</Button>
      </Form.Item>

      <Form.Item label="Код из смс" name="code" rules={[{ required: true, message: 'Пожалуйста, введите код' }]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Продолжить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConfirmPhoneForm;
