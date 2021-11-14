enum Enum_Rol{
    estudiante = "Estudiante",
    lider = "Lider",
    administrador = "Administrador"
}

enum Enum_Estado{
    pendiente = "Pendiente",
    autorizado = "Autorizado",
    no_autorizado = "No Autorizado"
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
