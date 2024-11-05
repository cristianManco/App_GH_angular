import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PerfilCargo } from './perfil-cargo.model';
import * as PerfilCargoActions from './perfilCargo.actions'


export interface State extends EntityState<PerfilCargo> {
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<PerfilCargo> = createEntityAdapter<PerfilCargo>({
  selectId: (perfilCargo: PerfilCargo) => perfilCargo.ID
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  error: null
});

export const perfilCargoReducer = createReducer(
  initialState,
  on(PerfilCargoActions.loadPerfilesCargo, state => ({ ...state, loading: true })),
  on(PerfilCargoActions.loadPerfilesCargoSuccess, (state, { perfilesCargo }) => {
    return adapter.setAll(perfilesCargo, { ...state, loading: false });
  }),
  on(PerfilCargoActions.loadPerfilesCargoFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(PerfilCargoActions.deletePerfilCargoSuccess, (state, { id }) => adapter.removeOne(id, state)),
  on(PerfilCargoActions.deletePerfilCargoFailure, (state, { error }) => ({ ...state, error }))
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();