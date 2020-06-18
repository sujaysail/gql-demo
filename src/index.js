import { GraphQLServer} from 'graphql-yoga'

//Type definitions(schema)
const typeDefs = `
type Query{
    me: User!
}

type User{
    id: ID!
    name: String!
    email: String!
    age: Int
}

`
// Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '173577',
                name: 'Sujay Sail',
                email: 'ss@gmail.com',
               
            }

        }
        
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
console.log('Server is up')
})