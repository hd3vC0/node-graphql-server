import express from 'express';
import * as env from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import myschema from './schema';
import root from './resolvers';

const app = express();

env.config()

if(!process.env.PORT){
    console.log('PORT is not defined');
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT);

const schema = buildSchema(myschema);

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(PORT,() => {
    console.log(`Service running in port ${PORT}`);
})