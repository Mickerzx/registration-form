import { StateType } from '../store';
import { StepsStatus } from '../../typespaces/enums/stepsStatus';

export const selectCurrentStep = (state: StateType): number => state.steps.step;
export const selectStepStatus = (state: StateType): StepsStatus => state.steps.status;
