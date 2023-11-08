module.exports.css_selectors = {
    name:`CSS Selectors`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS selectors, HTML ke elements ko select karke un par styles aur formatting apply karne ke liye istemal kiye jaate hain. Ye selectors HTML elements ko identify karne mein madad karte hain. Niche kuch pramukh CSS selectors diye gaye hain:</p>
    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[
        {
            name:`Element Selector:`,

            des:`
            <p>Element selectors HTML elements ke naam se select karte hain. Ye selectors bina kisi class ya ID ke element ko select karne ke liye istemal hote hain.</p>`,

            code:
`p {
    color: blue;
}`,

            des2:
            `<p>Is selector se <strong>&lt;p&gt;</strong> elements ke text color ko blue kiya gaya hai.</p>
`,
        },

        {
            name:`ID Selector:`,

            des:`
            <p>ID selectors ek specific element ko select karne ke liye istemal hote hain. Har element ka unique ID hota hai.</p>`,

            code:
`#myElement {
    background-color: yellow;
}`,

            des2:
            `<p>Is selector se <strong>&lt;div id="myElement"&gt;</strong> element ka background color yellow kiya gaya hai.</p>
`,
        },

        {
            name:`Class Selector:`,

            des:`
            <p>Class selectors ek ya adhik elements ko select karne ke liye istemal hote hain. Ek hi class ke kayi elements par styles apply kiya ja sakta hai.</p>`,

            code:
`.highlight {
    font-weight: bold;
}`,

            des2:
            `<p>Is selector se <strong>&lt;span class="highlight"&gt;</strong> elements ke text ko bold kiya gaya hai.</p>
`,
        },


        {
            name:`Descendant Selector`,

            des:`
            <p>Descendant selectors ek element ke andar ke element ko select karne ke liye istemal hote hain.</p>`,

            code:
`div p {
    font-style: italic;
}`,

            des2:
            `<p>Is selector se <strong>&lt;p&gt;</strong> elements jo <strong>&lt;div&gt;</strong> ke andar hain unke text ko italic kiya gaya hai.</p>
`,
        },


        {
            name:`Universal Selector`,

            des:`
            <p>Universal selectors * ka istemal karke saari HTML elements ko select karne ke liye istemal hote hain.</p>`,

            code:
`* {
    text-align: center;
}`,

            des2:
            `<p>Is selector se saari elements ke text ko center align kiya gaya hai.</p>
`,
        },

        {
            name:`Attribute Selector:`,

            des:`
            <p>Attribute selectors element ke attributes ke basis par element ko select karte hain.</p>`,

            code:
`input[type="text"] {
    border: 1px solid #ccc;
}`,

            des2:
            `<p>Is selector se type attribute ke value text wale <strong>&lt;input&gt;</strong> elements ke liye ek border apply kiya gaya hai.</p>
`,
        },

    ]
}