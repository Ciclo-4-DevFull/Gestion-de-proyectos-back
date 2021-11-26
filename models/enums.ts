enum Enum_Rol{
    ESTUDIANTE = "ESTUDIANTE",
    LIDER = "LIDER",
    ADMINISTRADOR = "ADMINISTRADOR"
}

enum Enum_Estado{
    PENDIENTE = "PENDIENTE",
    AUTORIZADO = "AUTORIZADO",
    NO_AUTORIZADO = "NO_AUTORIZADO"
}

enum Enum_EstadoProyecto{
    ACTIVO =     "ACTIVO",
    INACTIVO = "INACTIVO"   
}

enum Enum_Fase{
    INICIADO = "INICIADO",
    DESARROLLO = "DESARROLLO",
    TERMINADO = "TERMINADO",
    NULO = ""
}

enum Enum_Tipo{
    GENERAL = "GENERAL",
    ESPECIFICO = "ESPECIFICO"
}

enum Enum_EstadoInscripcion{
    aceptada = "Aceptada",
    rechadaza = "Rechazada"
}

export { Enum_Rol, Enum_Estado, Enum_EstadoProyecto, Enum_Fase, Enum_Tipo, Enum_EstadoInscripcion };
