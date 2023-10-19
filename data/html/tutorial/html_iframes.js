module.exports.html_iframes ={
    name:`HTML Iframes`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p><strong>&lt;iframe&gt;</strong> ek HTML element hai jo ek webpage ya multimedia content ko dusre webpage mein embed karne ke liye istemal hota hai. Yeh ek kind of window hai jo ek webpage ya content ko dusre webpage mein display karta hai.</p>

    <h3>Attributes:</h3>

    <ul>

    <li><strong>src:</strong> Ye attribute define karta hai ki kaunsa content ya webpage <strong>&lt;iframe&gt;</strong> mein display hoga.</li>

    <li><strong>width and height:</strong> Ye attribute define karte hain ki <strong>&lt;iframe&gt;</strong> ka width aur height kitna hoga.</li>


    <li><strong>sandbox:</strong> Is attribute se aapko control milta hai ki embedded content ko kitni permissions milegi.</li>


    <li><strong>allowfullscreen:</strong> Is attribute se iframe ko fullscreen mode mein jaane ki anumati milti hai.</li>

    </ul>
    

    `,

    points:[],

    desImg:[
        // {
        //     id:"i-2",
        //     name:"Contact Us Form",
        //     url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html/tutorial/contact_us_form.png"
        // }
    ],



codeDes:{
    name:`<iframe> ke kuch common use cases hain:`,
    des:``,

    arr:[
        {
        name:"Embedding Videos: ",
        des:"<p>YouTube, Vimeo, etc., videos ko apne webpage mein embed karne ke liye <strong>&lt;iframe&gt;</strong> ka istemal kiya jata hai.</p>",
        code:
`<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>`    
    },


        {
        name:"Displaying Maps: ",
        des:"<p>Google Maps ya dusre map services ko apne webpage mein dikhane ke liye <strong>&lt;iframe&gt;</strong> ka istemal kiya jata hai.</p>",
        code:
`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.961.234567!3d40.702234" width="600" height="450"></iframe>`    
    },


        {
        name:"Embedding External Content: ",
        des:"<p>External websites ya services ko apne webpage mein display karne ke liye <strong>&lt;iframe&gt;</strong> ka istemal kiya jata hai.</p>",
        code:
`<iframe src="https://www.example.com" width="800" height="600"></iframe>`    
    },


        {
        name:"Embedding PDF Documents:",
        des:"<p>PDF documents ko webpage mein display karne ke liye  <strong>&lt;iframe&gt;</strong> ka istemal kiya jata hai.</p>",
        code:
`<iframe src="document.pdf" width="600" height="800"></iframe>`    
    },


        {
        name:"Displaying Social Media Feeds:",
        des:"<p>Twitter, Facebook, Instagram, etc., ki feeds ko apne webpage mein display karne ke liye <strong>&lt;iframe&gt;</strong> ka istemal kiya jata hai.</p>",
        code:
`<iframe src="https://www.twitter.com" width="600" height="800"></iframe>`    
    },

]
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