import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPerfilCargo from './perfilCargo.reducer';

export const selectPerfilCargoState = createFeatureSelector<fromPerfilCargo.State>('perfilCargo');

export const selectAllPerfilesCargo = createSelector(
  selectPerfilCargoState,
  fromPerfilCargo.selectAll
);

export const selectPerfilCargoEntities = createSelector(
  selectPerfilCargoState,
  fromPerfilCargo.selectEntities
);

export const selectPerfilCargoTotal = createSelector(
  selectPerfilCargoState,
  fromPerfilCargo.selectTotal
);

export const selectPerfilCargoLoading = createSelector(
  selectPerfilCargoState,
  state => state.loading
);

export const selectPerfilCargoError = createSelector(
  selectPerfilCargoState,
  state => state.error
);