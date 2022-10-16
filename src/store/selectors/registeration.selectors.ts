import { StateType } from '../store';
import { Register } from '../../Types/Register.interface';

export const selectRegistrationData = (state: StateType): Register => state.register;
