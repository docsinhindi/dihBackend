module.exports.css_syntax = {
    name:`CSS Syntax`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS (Cascading Style Sheets) ek web page ke design aur layout ko define karne ke liye istemal ki jati hai. CSS ka basic syntax simple hota hai aur selectors, properties, aur values ka combination hota hai. Niche main CSS syntax ko detail me explain kar raha hoon:</p>
    `,


    tips:``,

    warn:``,

    notes:``,
    
    points:[
        {
            name:`Selectors:`,

            des:`
            <p>CSS selectors HTML elements ko target karne ke liye istemal hote hain. Selectors HTML elements ko choose karne ke liye properties aur values ko apply karne ke liye istemal hote hain. Kuch common selectors hain:</p>
            <ul>
            <li><strong>Element Selector:</strong> HTML element ko select karne ke liye element ka naam istemal hota hai. For example, p selects all <p> elements.</li>
            
            <li><strong>Class Selector:</strong> Class attribute ke value ko select karne ke liye . ke sath class ka naam istemal hota hai. For example, .btn selects all elements with class="btn".</li>

            <li><strong>ID Selector:</strong> ID attribute ke value ko select karne ke liye # ke sath ID ka naam istemal hota hai. For example, #header selects the element with id="header".</li>

            </ul>
`
        },


        {
            name:`Properties:`,

            des:`
            <p>CSS properties design aur layout ko define karte hain. Har property ek specific aspect ko control karta hai. Kuch common properties hain:</p>

            <ul>
                <li><strong>color:</strong> Text color ko set karta hai.</li>
                <li><strong>font-size:</strong> Font size ko set karta hai.</li>
                <li><strong>background-color:</strong> Background color ko set karta hai.</li>
                <li><strong>margin:</strong> Element ke bahut saare properties ko control karta hai.</li>
                <li><strong>border:</strong> Border properties ko set karta hai.</li>
                <li>etc.</li>
            </ul>
`
        },

        {
            name:`Values:`,

            des:`
            <p>Properties ke sath values di jati hain jo us property ke liye apply hoti hain. Values alag-alag types ke ho sakte hain, jaise colors (hex, rgb, etc.), font sizes, lengths (pixels, percentages), aur keywords.</p>
`
        },

    ],

    
    syntax:[
        {
            name:`CSS Syntax Example:`,

            des:`
            <p>Yahan ek example hai jo &lt;p&gt; elements ke text color ko red karne ke liye CSS ka istemal karta hai:</p>`,

            code:
`p {
    color: red;
  }`,

            des2:
            `<p>Is example mein:</p>
           <ul>
                <li><b>p</b> element selector hai, jo sabhi &lt;p&gt; elements ko target karta hai.</li>
                <li><b>color</b> property hai, jo text color ko set karta hai.</li>
                <li><b>red</b> value hai, jo text color ko red banata hai.</li>
           </ul>
`,
            
        },

    ]
}