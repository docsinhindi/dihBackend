module.exports.html_svg ={
    name:`HTML SVG`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>SVG (Scalable Vector Graphics) ek XML-based vector image format hai jo web par graphics ko describe karne ke liye istemal hota hai. Yeh vector format hota hai, jo ki zoom ya resize karne par bhi sharpness maintain karta hai.</p>

    <p> SVG ke kuch mahatvapurna features hain:</p>

    <ul>

    <li><strong>Scalability:</strong> SVG images ko kisi bhi size mein display kiya ja sakta hai bina quality loss ke.</li>

    <li><strong>Editability:</strong> SVG images ko text editor mein edit kiya ja sakta hai aur properties ko CSS ke sath customize kiya ja sakta hai.</li>

    <li><strong>Interactivity:</strong> SVG images par JavaScript ka istemal karke interactivity add ki ja sakti hai.</li>

    <li><strong>Accessibility:</strong> SVG images ko screen readers ke through bhi access kiya ja sakta hai.</li>

    <li><strong>Animations:</strong> SVG images mein animations bhi add ki ja sakti hain.</li>

    </ul>
    

    `,

    points:[
        {
            id:`tutorial/html_svg/svg_circle`,
            name:`SVG Circle (<circle>)`,

            des:`
            <p>Circle banane ke liye istemal hota hai.</p>`,

            code:
`<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="red" />
</svg>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },


        {
            id:`tutorial/html_svg/svg_rectangle`,
            name:`SVG Rectangle (<rect>)`,

            des:`
            <p>Rectangle banane ke liye istemal hota hai.</p>`,

            code:
`<svg width="80" height="40">
    <rect width="80" height="40" fill="blue" />
</svg>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },



        {
            id:`tutorial/html_svg/svg_line`,
            name:`SVG line (<line>)`,

            des:`
            <p>Line banane ke liye istemal hota hai.</p>`,

            code:
`<svg width="80" height="40">
    <line x1="10" y1="10" x2="90" y2="90" stroke="black" />
</svg>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },



        {
            id:`tutorial/html_svg/svg_text`,
            name:`SVG text (<text>)`,

            des:`
            <p>Text display karne ke liye istemal hota hai.</p>`,

            code:
`<svg width="100" height="80">
    <text x="10" y="50" font-size="20" fill="blue">Hello SVG</text>
</svg>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },


        {
            id:`tutorial/html_svg/svg_text`,
            name:`SVG Attribute (fill, stroke, transform etc.)`,

            des:`
            <ul>
            <li><strong>width and height: </strong>SVG canvas ke width aur height ko define karte hain.</li>

            <li><strong>fill: </strong>Fill color define karta hai.</li>

            <li><strong>stroke and stroke-width: </strong>Outline color aur width define karte hain.</li>

            <li><strong>transform: </strong>SVG elements ko transform karne ke liye istemal hota hai.</li>

            </ul>`,

            code:
`<svg width="280" height="260">
    <rect width="180" height="160" fill="blue" stroke="black" stroke-width="4" transform="rotate(360)"/>
</svg>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },



    ],

    desImg:[
        // {
        //     id:"i-2",
        //     name:"Contact Us Form",
        //     url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html/tutorial/contact_us_form.png"
        // }
    ],



codeDes:{
    name:``,
    des:``,

    arr:[]
},


    example:[
    //  {
    //     id:"tutorial/html_demo/simple_form",
    //     name:"Simple Form:",
    //     code:
    //     `<!DOCTYPE html>
    //     <html>
    //     <head>
    //         <title>Simple Form</title>
    //     </head>
    //     <body>
    //         <h1>Contact Us</h1>
    //         <form action="/submit" method="post">
    //             <label for="name">Name:</label>
    //             <input type="text" id="name" name="name"><br><br>
    //             <label for="email">Email:</label>
    //             <input type="email" id="email" name="email"><br><br>
    //             <input type="submit" value="Submit">
    //         </form>
    //     </body>
    //     </html>
    //     `,
    //     des:`Is example me ek basic contact form hai jo user se naam aur email address collect karta hai.`,
       
    //     img:{
    //         id:"",
    //         url:"",
    //         name:""
    //     },

    //     tips:{}
    //  },
    ]
 
}