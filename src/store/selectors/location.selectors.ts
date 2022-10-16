import { StateType } from '../store';
import { Location } from '../../typespaces/interfaces/Location.interface';

export const selectLocationData = (state: StateType): Location => state.location;
