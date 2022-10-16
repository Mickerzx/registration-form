// Core
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Steps } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

// Slices
import { onPrev, setStepsStatus } from '../../store/slices/steps.slice';

// Selectors
import { selectCurrentStep, selectStepStatus } from '../../store/selectors/steps.selectors';

// Enums
import { StepsStatus } from '../../typespaces/enums/stepsStatus';

// Interfaces
import { FormStep } from '../../typespaces/interfaces/FormStep.interface';

// Styles
import styles from './styles.module.css';

type PropTypes = {
  data: FormStep[];
};

const FormSteps: FC<PropTypes> = ({ data }) => {
  const { Step } = Steps;

  const current = useSelector(selectCurrentStep);
  const status = useSelector(selectStepStatus);
  const dispatch = useDispatch();

  const onPrevStep = () => {
    dispatch(onPrev());
    dispatch(setStepsStatus(StepsStatus.PROCESS));
  };
  return (
    <div className={styles.container}>
      <Steps className={styles.steps} current={current} status={status}>
        {data.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className={styles.contentWrapper}>
        {current > 0 && (
          <Button className={styles.prevButton} icon={<ArrowLeftOutlined />} type="link" onClick={onPrevStep}>
            Вернуться назад
          </Button>
        )}
        <div className={styles.content}>{data[current].content}</div>
      </div>
    </div>
  );
};

export default FormSteps;
