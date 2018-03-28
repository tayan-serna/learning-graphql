const Curso = require('./models/Curso');
const Profesor = require('./models/Profesor');

const resolvers = {
    Query: {
        cursos: () => Curso.query().eager('[profesor, comentarios]'),
        profesores: () => Profesor.query().eager('cursos'),
        curso: (rootValue, args) => Curso.query().eager('[profesor, comentarios]').findById(args.id),
        profesor: (rootValue, args) => Profesor.query().eager('cursos').findById(args.id),
        buscar: (_, args) => {
            return [
                Profesor.query().findById(5),
                Curso.query().findById(1)
            ]
        }
    },
    ResultadoBusqueda: {
        __resolveType: (obj) => obj.nombre ? 'Profesor' : 'Curso' 
    },
    Mutation: {
        profesorAdd: (_, args) => Profesor.query().insert(args.profesor),
        profesorEdit: (_, args) => Profesor.query().patchAndFetchById(args.profesorId, args.profesor),
        profesorDelete: (_, args) => Profesor
            .query()
            .findById(args.profesorId)
            .then((profesor) => Profesor
                .query()
                .deleteById(args.profesorId)
                .then((numRows) => {
                    if (numRows > 0) return profesor;
                    throw new Error(`El profesor con id ${args.profesorId} no se pudó eliminar`);
            }))
    }
}

module.exports = resolvers;
