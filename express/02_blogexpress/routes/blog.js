const express = require('express');
const path = require('path');
const blogs = require('../data/blogs');

const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/index.html'), (err) => {
    //     if (err) {
    //         console.error('Error sending index.html:', err);
    //         res.status(500).send('Error loading the page');
    //     }
    // });

    // to render the handlebars content 
    res.render("home")
});

router.get('/blog', (req, res) => {

    // 1==> FOR NORMAL ROUTES USED THIS

    // blogs.forEach((e) => {
    //     console.log(e.title);
    // });
    // const filePath = path.join(__dirname, '../views/blogHome.html');
    // res.sendFile(filePath, (err) => {
    //     if (err) {
    //         console.error('Error sending blogHome.html:', err);
    //         res.status(500).send('Error loading the page');
    //     }
    // });

    // 2==> FOR HANDLEBARS WE HAVE TO USE THIS AT HERE 
    res.render("bloghome",{
        blogs:blogs
    });

});

router.get('/blogPost/:slug', (req, res) => {
    const myBlog = blogs.filter((e) => e.slug === req.params.slug);
    console.log(myBlog);
    
   //1==>1st simple methods

    // if (myBlog.length > 0) {
    //     const filePath = path.join(__dirname, '../views/blogPage.html');
    //     res.sendFile(filePath, (err) => {
    //         if (err) {
    //             console.error('Error sending blogPage.html:', err);
    //             res.status(500).send('Error loading the page');
    //         }
    //     });
    // } else {
    //     res.status(404).send('Blog post not found');
    // }

    // 2==> enhanced with the use of the handlebars
     res.render("blogPage",{
        title:myBlog[0].title,
        content:myBlog[0].content
     })
   
});

module.exports = router;
