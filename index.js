let express = require('express');
let app = express();

app.use(express.static('static'));

const port = process.env.PORT || 3000;
app.listen(3000, function () {
    console.log(`App listening on port ${port}`);
});