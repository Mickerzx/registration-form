// Core
import React, { FC } from 'react';

// Components
import Steps from '../components/Steps/Steps';
import RegistrationForm from '../components/Stages/RegistrationForm/RegistrationForm';
import LocationForm from '../components/Stages/LocationForm/LocationForm';
import ConfirmPhoneForm from '../components/Stages/ConfirmPhoneForm/ConfirmPhoneForm';

// Interfaces
import { StepData } from 'typespaces/interfaces/FormStep.interface';

const steps: StepData[] = [
  {
    title: 'этап',
    content: <RegistrationForm />,
  },
  {
    title: 'этап',
    content: <LocationForm />,
  },
  {
    title: 'этап',
    content: <ConfirmPhoneForm />,
  },
];

const Main: FC = () => {
  return (
    <div>
      <Steps data={steps} />
    </div>
  );
};

export default Main;
