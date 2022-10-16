import { StateType } from '../store';
import { Register } from '../../typespaces/interfaces/Register.interface';

export const selectRegistrationData = (state: StateType): Register => state.register;
