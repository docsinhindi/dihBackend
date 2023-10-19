module.exports.html_favicon ={
    name:`HTML Favicon`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>Favicon, yaani "favorite icon," ek chota icon hota hai jo browser ke address bar aur bookmarks mein website ko represent karta hai. Yeh icon typically 16x16 pixels ka hota hai.</p>

    <p>Favicon ka istemal aapke website ki branding aur recognition mein madad karta hai. Yahan uske bare mein kuch mahatvapurna jankariyaan hain:</p>

    <h2>Favicon Ko Website Mein Kaise Add Karein:</h2>

    <ul>

        <li><strong>Favicon.ico File Create Karein:</strong> Sabse pehle, aapko ek 16x16 pixels ka .ico format ka image create karna hoga. Aap online favicon generator tools ka istemal kar sakte hain.</li>
    

        <li><strong>Favicon.ico File Website Root Directory Mein Upload Karein:</strong> Favicon.ico file ko aapke website ke root directory mein upload karein.</li>
    

        <li><strong>HTML &lt;link&gt; Tag Ka Istemal Karein:</strong> <strong>&lt;head&gt;</strong> section mein, <strong>&lt;link&gt;</strong> tag ka istemal karein jisse browser favicon.ico file ko locate kar sake.</li>
    
    </ul>
    

    `,

codeDes:{
    name:`Favicon Ka Type:`,
    des:`<p>Favicon alag-alag formats mein ho sakta hai:</p>`,

    arr:[
        {
        name:"ICO:",
        des:"<p>Sabse prachin format, jise Windows operating system aur browsers support karte hain.</p>",
        code:
`<link rel="icon" href="favicon.ico" type="image/x-icon">`    
    },


        {
        name:"PNG:",
        des:"<p> Modern browsers PNG format ko bhi support karte hain.</p>",
        code:
`<link rel="icon" href="favicon.png" type="image/png">`    
    },

        {
        name:"SVG:",
        des:"<p>Scalable Vector Graphics format, jo ki retina displays par acche se render hota hai.</p>",
        code:
`<link rel="icon" href="favicon.svg" type="image/svg+xml">`    
    },
        {
        name:"Other - JPG, gif, jpeg",
        des:"<p>Favicon typically ek chhota square image hota hai jiska size 16x16 pixels ya 32x32 pixels hota hai. Aap .ico, .png, .jpg, .jpeg, .gif, ya .svg format mein favicon create kar sakte hain.</p>",
        code:
``    
    },
]
},

    points:[
        {
            id:`tutorial/html_favicon/favicon_best_practices`,
            name:`Favicon Best Practices:`,

            des:`
            <ul>
            <li>Favicon file ka size chhota hona chahiye taki webpage ki loading speed na ho.</li>

            <li>File ko proper directory mein store karein aur <strong>&lt;link&gt;</strong> tag ko sahi se use karein.</li>

            <li>Favicon.ico file ke sath-sath PNG ya SVG format ka favicon bhi provide karein.</li>
            </ul>`,

            code:
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is the content of my webpage.</p>
</body>
</html>`,

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