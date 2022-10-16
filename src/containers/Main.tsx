// Core
import React, { FC } from 'react';

// Components
import FormSteps from '../components/FormSteps/FormSteps';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import LocationForm from '../components/LocationForm/LocationForm';
import CompleteRegistrationForm from '../components/CompleteRegistrationForm/CompleteRegistrationForm';

// Interfaces
import { FormStep } from '../typespaces/interfaces/FormStep.interface';

const Main: FC = () => {
  const steps: FormStep[] = [
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
      content: <CompleteRegistrationForm />,
    },
  ];

  return (
    <div>
      <FormSteps data={steps} />
    </div>
  );
};

export default Main;
