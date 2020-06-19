import { GraphQLServer} from 'graphql-yoga'

//Type definitions(schema)
const typeDefs = `
type Query{
    me: User!
    post: Post!
}

type User{
    id: ID!
    name: String!
    email: String!
    age: Int
}

type Post{
    id: ID!
    title: String!
    body: String!
    published: Boolean!
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

        },

        post(){
            return {
                id: '1001',
                title: 'blog for dummies',
                body: 'learning gql',
                published: false
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