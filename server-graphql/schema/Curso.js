module.exports = `
    # Esto es un curso en el sistema
    type Curso {
        id: ID!
        titulo: String!
        # Descripcion del curso
        descripcion: String!
        profesor: Profesor
        rating: Float
        comentarios: [Comentario]
    }

    type Comentario {
        id: ID!
        nombre: String!
        cuerpo: String!
    }
`
