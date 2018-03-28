module.exports = `
    type Profesor {
        id: ID!
        nombre: String!
        nacionalidad: String!
        genero: Genero
        cursos: [Curso]
    }

    enum Genero {
        MACULINO
        FEMENINO
    }

    input NuevoProfesor {
        nombre: String!
        nacionalidad: String!
        genero: Genero
    }

    input ProfesorEditable {
        nombre: String
        nacionalidad: String
        genero: Genero
    }
`
