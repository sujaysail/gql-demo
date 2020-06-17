import { GraphQLServer} from 'graphql-yoga'

//Type definitions(schema)
const typeDefs = `
type Query{
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
}
`
// Resolvers
const resolvers = {
    Query: {
        title(){
           return 'Electric whisk'
        },

        price(){
            return 299.90
        },

        releaseYear(){
            return 2015
        },

        rating(){
            return 3.5
        },

        inStock(){
            return true
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