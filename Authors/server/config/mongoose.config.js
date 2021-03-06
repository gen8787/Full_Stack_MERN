const mongoose = require('mongoose');
const db = "authors_db"; // <~~ Update db name.

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log(`Connection established to databse: ${db}`))
    .catch(err => console.log(err))