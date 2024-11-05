import { createAction, props } from '@ngrx/store';
import { PerfilCargo } from './perfil-cargo.model';

export const loadPerfilesCargo = createAction('[PerfilCargo] Load Perfiles Cargo');
export const loadPerfilesCargoSuccess = createAction('[PerfilCargo] Load Perfiles Cargo Success', props<{ perfilesCargo: PerfilCargo[] }>());
export const loadPerfilesCargoFailure = createAction('[PerfilCargo] Load Perfiles Cargo Failure', props<{ error: any }>());

export const deletePerfilCargo = createAction('[PerfilCargo] Delete Perfil Cargo', props<{ id: number }>());
export const deletePerfilCargoSuccess = createAction('[PerfilCargo] Delete Perfil Cargo Success', props<{ id: number }>());
export const deletePerfilCargoFailure = createAction('[PerfilCargo] Delete Perfil Cargo Failure', props<{ error: any }>());