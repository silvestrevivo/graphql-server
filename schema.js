const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

// HardCode data
const customers = [
  { id: '1', name: 'John Doe', email: 'jdoe@gmail', age: 35 },
  { id: '2', name: 'Silvestre', email: 'silvestre@gmail', age: 42 },
  { id: '3', name: 'Evelien', email: 'evelien@gmail', age: 31 },
]

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  })
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id === args.id) {
            return customers[i]
          }
        }
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
