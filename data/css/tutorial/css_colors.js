module.exports.css_colors = {
    name:`CSS Colors`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS colors, web pages ko visually appealing banane ke liye istemal hoti hain. Har color ko alag-alag tarike se define kiya ja sakta hai. CSS colors ko kuch alag tarike se represent kiya ja sakta hai:</p>
    `,


    tips:``,

    warn:``,

    notes:``,
    
    points:[],

    
    syntax:[
        {
            name:`Keyword Names:`,

            des:`
            <p>CSS me kuch predefined color names hote hain jinhe use kar sakte hain. Jaise red, blue, green, etc.</p>`,

            code:
`h1 {
    color: red;
}`,

            des2:
            ``,
        },

        {
            name:`Hexadecimal Notation:`,

            des:`
            <p>Colors ko hexadecimal values ke sath specify kiya jata hai. Har rang ko 6-digit hexadecimal code se represent kiya ja sakta hai. Har 2 digits ek color component ke liye hota hai: red, green, aur blue.</p>`,

            code:
`p {
    background-color: #00FF00; /* Lime Green */
}`,

            des2:
            ``,
        },

        {
            name:`RGB Values:`,

            des:`
            <p>Red, Green, aur Blue ke values se color ko define kiya jata hai. Har value 0 se 255 tak ho sakti hai.</p>`,

            code:
`div {
    background-color: rgb(255, 0, 0); /* Red */
}`,

            des2:
            ``,
        },


        {
            name:`RGBA Values:`,

            des:`
            <p>Isme ek additional parameter alpha (transparency) hota hai, jo 0 (transparent) se lekar 1 (opaque) tak ho sakta hai.</p>`,

            code:
`span {
    background-color: rgba(255, 0, 0, 0.5); /* Semi-transparent Red */
}`,

            des2:
            ``,
        },


        {
            name:`HSL Values:`,

            des:`
            <p>Hue (color), Saturation (intensity), aur Lightness (lightness) ke values se color ko define kiya jata hai.</p>`,

            code:
`a {
    color: hsl(120, 100%, 50%); /* Pure Green */
}`,

            des2:
            ``,
        },

        {
            name:`HSLA Values`,

            des:`
            <p>Isme bhi ek alpha value hoti hai, jo color ki transparency ko define karti hai.</p>`,

            code:
`span {
    background-color: hsla(120, 100%, 50%, 0.5); /* Semi-transparent Pure Green */
}`,

            des2:
            ``,
        },

    ]
}