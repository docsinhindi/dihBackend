const router = require("express").Router();





//import
const {html_demo} = require("../../data/html/tutorial/html_demo")
const {html_introduction} = require("../../data/html/tutorial/html_introduction")
const {html_structure} = require("../../data/html/tutorial/html_structure")
const {html_elements} = require("../../data/html/tutorial/html_elements")
const {html_attributes} = require("../../data/html/tutorial/html_attributes")
const {create_html_file} = require("../../data/html/tutorial/create_html_file")
const {html_headings} = require("../../data/html/tutorial/html_headings")
const {html_paragraph} = require("../../data/html/tutorial/html_paragraph")
const {html_phrase_tags} = require("../../data/html/tutorial//html_phrase_tags")
const {html_formatting} = require("../../data/html/tutorial/html_formatting")
const {html_quotations} = require("../../data/html/tutorial/html_quotations");
const { html_comment } = require("../../data/html/tutorial/html_comment");
const { html_images } = require("../../data/html/tutorial/html_images");
const { html_links } = require("../../data/html/tutorial/html_links");
const { html_line_break } = require("../../data/html/tutorial/html_line_break");
const { html_horizontal_line } = require("../../data/html/tutorial/html_horizontal_line");
const { html_style } = require("../../data/html/tutorial/html_style");
const { html_colors } = require("../../data/html/tutorial/html_colors");
const { html_css } = require("../../data/html/tutorial/html_css");
const { html_table } = require("../../data/html/tutorial/html_table");
const { html_block_and_inline } = require("../../data/html/tutorial/html_block_and_inline");
const { html_class } = require("../../data/html/tutorial/html_class");
const { html_id } = require("../../data/html/tutorial/html_id");
const { html_semantic } = require("../../data/html/tutorial/html_semantic");
const { html_lists } = require("../../data/html/tutorial/html_lists");
const { html_unordered_lists } = require("../../data/html/tutorial/html_unordered_list");
const { html_ordered_lists } = require("../../data/html/tutorial/html_ordered_lists");
const { html_other_lists } = require("../../data/html/tutorial/html_other_lsits");
const { html_head } = require("../../data/html/tutorial/html_head");
const { html_title } = require("../../data/html/tutorial/html_title");
const { html_meta_element } = require("../../data/html/tutorial/html_meta_element");
const { html_favicon } = require("../../data/html/tutorial/html_favicon");
const { html_forms } = require("../../data/html/tutorial/html_forms");
const { html_form_attributes } = require("../../data/html/tutorial/html_form_attributes");
const { html_form_elements } = require("../../data/html/tutorial/html_form_elements");
const { html_input_types } = require("../../data/html/tutorial/html_input_types");
const { html_audio } = require("../../data/html/tutorial/html_audio");
const { html_video } = require("../../data/html/tutorial/html_video");
const { html_canvas } = require("../../data/html/tutorial/html_canvas");
const { html_svg } = require("../../data/html/tutorial/html_svg");
const { html_iframes } = require("../../data/html/tutorial/html_iframes");


router.get('/html-demo', (req, res)=>{
    res.send(html_demo)
});
router.get('/html-introduction', (req, res)=>{
    res.send(html_introduction)
});
router.get('/html-structure', (req, res)=>{
    res.send(html_structure)
});
router.get('/html-elements', (req, res)=>{
    res.send(html_elements)
});
router.get('/html-attributes', (req, res)=>{
    res.send(html_attributes)
});
router.get('/create-html-file', (req, res)=>{
    res.send(create_html_file)
});
router.get('/html-headings', (req, res)=>{
    res.send(html_headings)
});
router.get('/html-paragraph', (req, res)=>{
    res.send(html_paragraph)
});
router.get('/html-phrase-tags', (req, res)=>{
    res.send(html_phrase_tags)
});

router.get('/html-formatting', (req, res)=>{
    res.send(html_formatting)
});

router.get('/html-quotations', (req, res)=>{
    res.send(html_quotations)
});
router.get('/html-comment', (req, res)=>{
    res.send(html_comment)
});
router.get('/html-images', (req, res)=>{
    res.send(html_images)
});
router.get('/html-links', (req, res)=>{
    res.send(html_links)
});

router.get('/html-line-break', (req, res)=>{
    res.send(html_line_break)
});

router.get('/html-horizontal-line', (req, res)=>{
    res.send(html_horizontal_line)
});

router.get('/html-style', (req, res)=>{
    res.send(html_style)
});

router.get('/html-colors', (req, res)=>{
    res.send(html_colors)
});

router.get('/html-css', (req, res)=>{
    res.send(html_css)
});

router.get('/html-table', (req, res)=>{
    res.send(html_table)
});


router.get('/html-block-and-inline', (req, res)=>{
    res.send(html_block_and_inline)
});


router.get('/html-class', (req, res)=>{
    res.send(html_class)
});

router.get('/html-id', (req, res)=>{
    res.send(html_id)
});

router.get('/html-semantic', (req, res)=>{
    res.send(html_semantic)
});

router.get('/html-iframes', (req, res)=>{
    res.send(html_iframes)
});


router.get('/html-lists', (req, res)=>{
    res.send(html_lists)
});


router.get('/html-unordered_lists', (req, res)=>{
    res.send(html_unordered_lists)
});
router.get('/html-ordered-lists', (req, res)=>{
    res.send(html_ordered_lists)
});

router.get('/html-other-lists', (req, res)=>{
    res.send(html_other_lists)
});


router.get('/html-head', (req, res)=>{
    res.send(html_head)
});

router.get('/html-title', (req, res)=>{
    res.send(html_title)
});


router.get('/html-meta-elements', (req, res)=>{
    res.send(html_meta_element)
});


router.get('/html-favicon', (req, res)=>{
    res.send(html_favicon)
});


router.get('/html-forms', (req, res)=>{
    res.send(html_forms)
});

router.get('/html-form-attributes', (req, res)=>{
    res.send(html_form_attributes)
});


router.get('/html-form-elements', (req, res)=>{
    res.send(html_form_elements)
});

router.get('/html-input-types', (req, res)=>{
    res.send(html_input_types)
});

router.get('/html-audio', (req, res)=>{
    res.send(html_audio)
});


router.get('/html-video', (req, res)=>{
    res.send(html_video)
});


router.get('/html-canvas', (req, res)=>{
    res.send(html_canvas)
});



router.get('/html-svg', (req, res)=>{
    res.send(html_svg)
});


module.exports = router;
