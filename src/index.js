const { GraphQLServer } = require('graphql-yoga')

// The typeDefs constant defines your GraphQL schema
const typeDefs = `
type Query {
  info: String! 
}
`
//Here, it defines a simple Query type with one field called info that has the type String!
//The resolvers object is the actual implementation of the GraphQL schema. Notice similarity with typeDefs Query.info
const resolvers = {
    Query: {
        info: () => `This is the API of the City Life Fun App`
    }
}

// the schema and resolvers are bundled and passed to the GraphQLServer which is imported from graphql-yoga.
// This tells the server what API operations are accepted and how they should be resolved.
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))