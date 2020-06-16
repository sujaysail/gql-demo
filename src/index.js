import { GraphQLServer} from 'graphql-yoga'

//Type definitions(schema)
const typeDefs = `
type Query{
    hello: String!
}
`
// Resolvers
const resolvers = {
    Query: {
        hello(){
            return 'this is my first query'
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