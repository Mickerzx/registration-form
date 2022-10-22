//Core
import React, { FC } from 'react';
import { Steps } from 'antd';

// Interfaces
import { StepData } from '../../typespaces/interfaces/FormStep.interface';

// Enums
import { StepsStatus } from '../../typespaces/enums/stepsStatus';

// Styles
import styles from './styles.module.css';

type PropTypes = {
  data: StepData[];
  current: number;
  status: StepsStatus;
};

const StepsHeader: FC<PropTypes> = ({ data, current, status }) => {
  const { Step } = Steps;
  return (
    <div className={styles.container}>
      <Steps className={styles.steps} current={current} status={status}>
        {data.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
    </div>
  );
};

export default StepsHeader;
