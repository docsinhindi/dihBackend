module.exports.add_css = {
    name:`CSS Add karne ke Tarike!`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS ko web page mein add karne ke kai tarike hote hain. Yahan main aapko un tarikeon ke baare mein batata hoon, saath hi kuch important notes aur tips bhi deta hoon:</p>
    `,


    
    tips:``,

    warn:``,

    notes:``,

    syntax:[],
    
    points:[],

    points_tips:{
        arr:[
            {
            id:"tutorial/add_css/inline_css",

            name:`Inline CSS:`,
            
            lang:"markup",

            height:"80px",

            output:true,

            des:`
            <ul>
            <li>Inline CSS ko HTML element ke style attribute mein directly define kiya jata hai.</li>
            
            <li>Yeh ek specific element ke liye hi apply hota hai.</li>

            </ul>`,

            
            img:``,

            code:
`<p style="color: blue; font-size: 16px;">This is a paragraph with inline CSS.</p>`,
            fullCode:
`<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <p style="color: blue; font-size: 16px;">This is a paragraph with inline CSS.</p>
    </body>
</html>
`,
            des2:``,

            tips:``,

            notes:`
            <ul>
             <li>Iska overuse se code maintainability kam ho sakti hai, isliye avoid karna behtar hai.</li>
             </ul>
             `
        },



        {
            id:"tutorial/add_css/internal_css",
            
            name:`Internal CSS (Embedded CSS):`,

            lang:"markup",

            height:"80px",

            output:true,

            des:`
            <ul>
            <li>Internal CSS ko <strong>&lt;style&gt;</strong> tag ke andar HTML document ke <strong>&lt;head&gt;</strong> section mein define kiya jata hai.</li>
            
            <li>Yeh ek specific HTML document ke liye apply hota hai.</li>

            </ul>`,

            img:``,

            code:
`<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>This is a paragraph with internal CSS.</p>
</body>
</html>`,

            fullCode:
`<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>This is a paragraph with internal CSS.</p>
</body>
</html>`,
            des2:``,

            tips:``,

            notes:``
        },


        {
            id:"tutorial/add_css/external_css",
            
            name:`External CSS:`,

            lang:"markup",

            height:"200px",

            output:false,

            des:`
            <ul>
            <li>External CSS ek separate .css file mein likha jata hai aur fir HTML document ke <strong>&lt;head&gt;</strong> section mein uss file ka reference diya jata hai.</li>
            
            <li>Yeh multiple HTML documents mein reuse kiya ja sakta hai.</li>

            </ul>`,

            
            img:``,

            code:
`
<!-- styles.css file:
p {
    color: blue;
    font-size: 16px;
}
 -->

<!-- Html document -->

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is a paragraph with external CSS.</p>
</body>
</html>`,

            fullCode:
`<!-- styles.css file:
p {
    color: blue;
    font-size: 16px;
}
-->

<!-- Html document -->

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is a paragraph with external CSS.</p>
</body>
</html>`,
            des2:``,

            tips:`
            <ul>
                <li>External CSS files ko multiple pages mein reuse kiya ja sakta hai.</li>
                <li>Performance ke liye behtar hota hai ki ek separate CSS file ka istemal kiya jaye.</li>
            </ul>`,

            notes:``
        },



        {
            id:"tutorial/add_css/imported_css",
            
            name:`Imported CSS:`,
            
            lang:"markup",

            height:"300px",

            output:false,

            des:`
            <ul>
            <li>CSS files ko dusre CSS files mein <strong>@import</strong> rule ke through add kiya ja sakta hai.</li>
            

            </ul>`,

            img:``,

            code:
`
<!-- CSS files (main.css):
@import url("css/styles1.css");
@import url("css/styles2.css");
h1 {
    color: green;
}
-->

<!-- Html document -->

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <h1>This is a heading with imported CSS.</h1>
</body>
</html>`,

            fullCode:
`<!-- CSS files (main.css):
@import url("css/styles1.css");
@import url("css/styles2.css");
h1 {
    color: green;
}
-->

<!-- Html document -->

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <h1>This is a heading with imported CSS.</h1>
</body>
</html>`,
            des2:``,

            tips:`
            <ul>
                <li><strong>@import</strong> se CSS ko load karte samay thoda delay ho sakta hai.</li>
                <li>Cross-origin restrictions ke karan, external CSS files ko <strong>@import</strong> se load nahi kiya ja sakta hai.</li>
            </ul>`,

            notes:``
        },
    ],

    tips:``,

    warn:``,

    notes:`
    <ul>
        <li>CSS ko <strong>&lt;style&gt;</strong> tag ya external .css file mein likhne ke liye valid CSS syntax ka palan karna zaroori hai.</li>

        <li>Web performance ke liye, behtar hota hai ki <strong>&lt;link&gt;</strong> tag ka istemal kiya jaye external CSS files ke liye.</li>

    </ul>`


},

    
}