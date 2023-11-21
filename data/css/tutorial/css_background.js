module.exports.css_background = {
    name:`CSS Background`,

    keyword:['css background', 'background hindi' , 'css css background hindi' , 'background'],

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>Background property ek element ke background ka style define karta hai. Is property se hum background color, image, repeat pattern, position, attachment, aur bahut kuch set kar sakte hain.</p>
    `,


    tips:`
    <ul>
        <li>Background images ko optimize kare takay page load time kam ho.</li>
        <li>Multiple background images ka istemal kar sakte hain background-image property me multiple values ke sath.</li>
    </ul>`,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[
        {
            name:`background-color:`,

            des:`
            <p>Ye property element ka background color set karta hai. Ye color name, hex code, RGB value, ya HSL value ho sakta hai.</p>`,

            code:
`div {
    background-color: #f0f0f0; /* Hexadecimal color code */
}`,

            des2:
            ``,
        },

        {
            name:`background-image:`,

            des:`
            <p>Is property se element ke background me image set ki ja sakti hai.</p>`,

            code:
`div {
    background-image: url('background.jpg');
}`,

            des2:
            ``,
        },

        {
            name:`background-repeat:`,

            des:`
            <p>Ye property image ko kaise repeat kare, agar image element se choti ho to. Ismein kuch values hain jaise repeat, no-repeat, repeat-x, aur repeat-y.</p>`,

            code:
`div {
    background-image: url('background.jpg');
    background-repeat: no-repeat; /* Image ko ek hi baar repeat kare */
}`,

            des2:
            ``,
        },


        {
            name:`background-position:`,

            des:`
            <p>Ye property se image ka position set kiya jata hai. Ye values ho sakti hain percentages ya pixels.</p>`,

            code:
`div {
    background-image: url('background.jpg');
    background-position: center center; /* Center me position kare */
}`,

            des2:
            ``,
        },


        {
            name:`background-attachment:`,

            des:`
            <p>Ye property background image ka behavior set karti hai scrolling ke sath. Values ho sakti hain fixed ya scroll.</p>`,

            code:
`div {
    background-image: url('background.jpg');
    background-attachment: fixed; /* Image fixed rahe, content ke sath scroll na kare */
}`,

            des2:
            ``,
        },

        {
            name:`background-size:`,

            des:`
            <p>Ye property image ka size set karta hai. Values ho sakti hain cover, contain, ya specific size in pixels.</p>`,

            code:
`div {
    background-image: url('background.jpg');
    background-size: cover; /* Image element ko cover kare */
}`,

            des2:
            ``,
        },

    ]
}