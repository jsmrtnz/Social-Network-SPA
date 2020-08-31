const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
require('./src/db/mongoose');
const userRouter = require('./src/routers/user');
const postRouter = require('./src/routers/post');
const commentRouter = require('./src/routers/comment');
const frRouter = require('./src/routers/fr');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);
app.use(frRouter);

// if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
// }

app.listen(port, () => console.log(`Server is up on port ${port}`));