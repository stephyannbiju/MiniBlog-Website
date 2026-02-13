const express = require('express');
const app = express();
const path = require('path');
const posts = require('./data');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    let filteredPosts = [...posts];
    const { category, search } = req.query;

    if (category) {
        filteredPosts = filteredPosts.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
        filteredPosts = filteredPosts.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.summary.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Get unique categories for the filter buttons
    const categories = [...new Set(posts.map(p => p.category))];

    res.render('index', {
        posts: filteredPosts,
        categories,
        activeCategory: category || 'All',
        searchQuery: search || ''
    });
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.post('/create', (req, res) => {
    const { title, author, category, summary, content } = req.body;

    const newPost = {
        id: posts.length + 1,
        title,
        author,
        date: new Date().toISOString().split('T')[0],
        category,
        readingTime: Math.ceil(content.split(' ').length / 200) + " min",
        summary,
        content,
        image: `https://placehold.co/800x600/6C63FF/FFF?text=${encodeURIComponent(title)}`
    };

    posts.push(newPost);
    res.redirect('/');
});

app.get('/post/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');

    // Suggest other recent posts excluding the current one
    const suggested = posts.filter(p => p.id !== post.id).slice(0, 3);

    res.render('post', { post, suggested });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
