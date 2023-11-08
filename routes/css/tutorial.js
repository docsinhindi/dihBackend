const router = require('express').Router();

const {css_introduction} = require('../../data/css/tutorial/css_introduction')
const {css_syntax} = require('../../data/css/tutorial/css_syntax')
const {add_css} = require('../../data/css/tutorial/add_css');
const { css_demo } = require('../../data/css/tutorial/css_demo');
const { css_selectors } = require('../../data/css/tutorial/css_selectors');
const { css_colors } = require('../../data/css/tutorial/css_colors');
const { css_background } = require('../../data/css/tutorial/css_background');
const { css_comments } = require('../../data/css/tutorial/css_comments');
const { css_borders } = require('../../data/css/tutorial/css_borders');
const { css_margin } = require('../../data/css/tutorial/css_margin');
const { css_padding } = require('../../data/css/tutorial/css_padding');

router.get('/css_introduction',(req,res)=>{
    res.json(css_introduction)
});

router.get('/css_syntax',(req,res)=>{
    res.json(css_syntax)
});
router.get('/add_css',(req,res)=>{
    res.json(add_css)
});

router.get('/css_demo',(req,res)=>{
    res.json(css_demo)
});
router.get('/css_selectors',(req,res)=>{
    res.json(css_selectors)
});

router.get('/css_colors',(req,res)=>{
    res.json(css_colors)
});
router.get('/css_background',(req,res)=>{
    res.json(css_background)
});
router.get('/css_comments',(req,res)=>{
    res.json(css_comments)
});
router.get('/css_borders',(req,res)=>{
    res.json(css_borders)
});
router.get('/css_margin',(req,res)=>{
    res.json(css_margin)
});
router.get('/css_padding',(req,res)=>{
    res.json(css_padding)
});

module.exports = router;