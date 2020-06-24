import { GraphQLServer} from 'graphql-yoga'

//DEmo user data

const users = [{
    id: "173577",
    name: "Sujay Sail",
    email: "ss@gmail.com",
    age: 25
},
{
    id: "173578",
    name: "Tujay Tail",
    email: "tt@gmail.com",
    age: 28
},
{
    id: "173579",
    name: "Ujay Uail",
    email: "uu@gmail.com"
}]

//Type definitions(schema)
const typeDefs = `
type Query{
   
    users: [User!]!
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
        users(parent, args, ctx, info){
            return users 
        },
       
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