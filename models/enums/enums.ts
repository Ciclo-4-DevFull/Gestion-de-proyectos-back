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
    NULO = "NULO"
}

enum Enum_Tipo{
    GENERAL = "GENERAL",
    ESPECIFICO = "ESPECIFICO"
}

enum Enum_EstadoInscripcion{
    ACEPTADO = "ACEPTADO",
    RECHAZADO = "RECHAZADO",
    PENDIENTE = "PENDIENTE"
}

export { Enum_Rol, Enum_Estado, Enum_EstadoProyecto, Enum_Fase, Enum_Tipo, Enum_EstadoInscripcion };
