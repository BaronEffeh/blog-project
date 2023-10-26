const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

// middleware
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Some key message about Yoshi and his eggs' },
        { title: 'Mario finds stars', snippet: 'Some key message about Mario and his stars' },
        { title: 'How to defeat browser', snippet: 'Some key message on how to defeat browser' },

    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Creat a new Blog' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});