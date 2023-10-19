module.exports.html_block_and_inline ={
    name:`HTML Block and Inline Element`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <h2>Block Elements:</h2>
    <p>Block elements wo hote hain jo default taur par ek naye line par shuru hote hain aur poore available width ko capture karte hain. Ye elements generally page ke structure ko define karte hain jaise headings, paragraphs, lists, divs, etc.</p>

    <ul>

    <li><strong>&lt;div&gt;</strong>: Generic container element.</li>

    <li><strong>&lt;p&gt;</strong>: Paragraph element.</li>

    <li><strong>&lt;h1&gt;</strong>: ... <strong>&lt;h6&gt;</strong> Heading elements (level 1 to 6).</li>

    <li><strong>&lt;ul&gt;</strong>: Unordered list element.</li>

    <li><strong>&lt;ol&gt;</strong>:  Ordered list element.</li>

    <li><strong>&lt;li&gt;</strong>:  List item element.</li>
    <li>etc.</li>

    </ul>

    <p>Kuch common block elements:</p>

    
    <h2>Inline Elements:</h2>
    <p>Inline elements wo hote hain jo apne surrounding content ke beech mein fit hote hain, matlab ye ek naye line par shuru nahi hote. Inka width unke content ke according hota hai.</p>

    <p>Kuch common Inline elements:</p>

    
    <ul>

    <li><strong>&lt;span&gt;</strong>: Generic inline container element.</li>

    <li><strong>&lt;a&gt;</strong>: Anchor (hyperlink) element.</li>

    <li><strong>&lt;img&gt;</strong>: Image element.</li>

    <li><strong>&lt;strong&gt;</strong>: Strong importance element.</li>

    <li><strong>&lt;code&gt;</strong>:  Inline code element.</li>

    <li><strong>&lt;sub&gt;</strong>:  Subscript text element.</li>
    <li>etc.</li>

    </ul>

    `,

    points:[
        {
            id:`tutorial/html_block_and_inline/block_element_example`,
            name:`Block Element Example:`,

            des:`
           <p><strong>&lt;p&gt;</strong> Ye paragraph tag hai jisse text ko wrap kiya jata hai.</p>
            
            `,

            code:
`<p>paragraph. 2</p> <p>paragraph. 2</p>`,

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
            id:`tutorial/html_block_and_inline/inline_element_example`,
            name:`Inline Element Example:`,

            des:`
           <p><strong>&lt;span&gt;</strong> Ye generic inline container hota hai jo text ko style ya manipulate karne ke liye istemal hota hai.</p>
            
            `,

            code:
`<span>spna. 1</span> <span>span. 2</span>`,

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