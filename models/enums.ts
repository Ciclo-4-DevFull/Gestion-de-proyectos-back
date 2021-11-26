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
    activo = "Activo",
    inactivo = "Inactivo"   
}

enum Enum_Fase{
    iniciado = "Iniciado",
    desarrollo = "En desarrollo",
    terminado = "Terminado",
    nula = ""
}

enum Enum_Tipo{
    general = "General",
    especifico = "Específico"
}

enum Enum_EstadoInscripcion{
    aceptada = "Aceptada",
    rechadaza = "Rechazada"
}

export { Enum_Rol, Enum_Estado, Enum_EstadoProyecto, Enum_Fase, Enum_Tipo, Enum_EstadoInscripcion };
