// Core
import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

// Slices
import { onNext, setStepsStatus } from '../../store/slices/steps.slice';
import { setLocationData } from '../../store/slices/location.slice';

// Selectors
import { selectLocationData } from '../../store/selectors/location.selectors';

// Interfaces
import { Location } from '../../typespaces/interfaces/Location.interface';

// Enums
import { StepsStatus } from '../../typespaces/enums/stepsStatus';

const LocationForm: FC = () => {
  const dispatch = useDispatch();
  const { country, town, street, house } = useSelector(selectLocationData);

  const onFinish = (values: Location) => {
    dispatch(setLocationData(values));
    dispatch(onNext());
    dispatch(setStepsStatus(StepsStatus.PROCESS));
  };

  const onFinishFailed = () => {
    dispatch(setStepsStatus(StepsStatus.ERROR));
  };

  return (
    <Form name="register" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" layout="vertical">
      <Form.Item initialValue={country} label="Страна" name="country">
        <Input />
      </Form.Item>

      <Form.Item initialValue={town} label="Город" name="town">
        <Input />
      </Form.Item>

      <Form.Item initialValue={street} label="Улица" name="street">
        <Input />
      </Form.Item>

      <Form.Item initialValue={house} label="Дом" name="house">
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

export default LocationForm;
