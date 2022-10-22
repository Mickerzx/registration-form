// Core
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

// Components
import StepsHeader from '../StepsHeader/StepsHeader';
import CompleteRegistration from '../CompleteRegistration/CompleteRegistration';

// Slices
import { onPrev, setStepsStatus } from 'store/slices/steps.slice';

// Selectors
import { selectCurrentStep, selectStepStatus } from 'store/selectors/steps.selectors';

// Enums
import { StepsStatus } from 'typespaces/enums/stepsStatus';

// Interfaces
import { StepData } from 'typespaces/interfaces/FormStep.interface';

// Styles
import styles from './styles.module.css';

type PropTypes = {
  data: StepData[];
};

const Steps: FC<PropTypes> = ({ data }) => {
  const current = useSelector(selectCurrentStep);
  const status = useSelector(selectStepStatus);
  const dispatch = useDispatch();

  const onPrevStep = () => {
    dispatch(onPrev());
    dispatch(setStepsStatus(StepsStatus.PROCESS));
  };
  return (
    <div className={styles.container}>
      {data[current]?.content ? (
        <>
          <StepsHeader data={data} current={current} status={status} />
          <div className={styles.contentWrapper}>
            {current > 0 && (
              <Button className={styles.prevButton} icon={<ArrowLeftOutlined />} type="link" onClick={onPrevStep}>
                Вернуться назад
              </Button>
            )}
            <div className={styles.content}>{data[current].content}</div>
          </div>
        </>
      ) : (
        <CompleteRegistration />
      )}
    </div>
  );
};

export default Steps;
