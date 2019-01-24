require('./config/config');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const mongoose = require('./db/mongoose');

const PORT = process.env.PORT;

const app = express();

// allow cross-origin requests
app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
