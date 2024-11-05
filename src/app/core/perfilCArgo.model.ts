export interface PerfilCargo {
    ID: number;
    IdCargo: number;
    IdNivel: number;
    IdCargo_Reporta: number;
    Estado: string;
    Objetivo_del_Cargo: string;
    Nivel_Academico_Min: string;
    Nivel_Academico: string;
    Area_de_Conocimiento: string;
    Meses_de_experiencia: number;
    Competencias_tecnicas: string;
    Funciones_del_cargo: string;
    Indicadores: string;
    Creado: Date;
    Creado_por: string;
    Modificado: Date;
    Modificado_por: string;
    Aprobacion: number;
  }