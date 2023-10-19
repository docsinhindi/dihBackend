module.exports.html_head ={
    name:`HTML Head`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML <strong>&lt;head&gt;</strong> tag ek mahatvapurna tag hai jo webpage ke meta-information aur resources ko define karta hai, jaise title, character set, CSS stylesheets, JavaScript files, etc. Yahan kuch pramukh usages aur types hain:</p>

    `,



    

codeDes:{
    name:``,
    des:``,

    arr:[
        {
            name:`Title Tag:`,
            des:`<p><strong>&lt;title&gt;</strong> tag <strong>&lt;head&gt;</strong> section mein hota hai aur webpage ka title define karta hai. Yeh title browser ke title bar mein aur search results mein dikhta hai.</p>`,
            code:
`<head>
<title>My Website</title>
</head>`
        },

        {
            name:` Meta Tags:`,
            des:`<p><strong>&lt;meta&gt;</strong> tags <strong>&lt;head&gt;</strong> section mein hoti hain aur webpage ki meta-information ko define karti hain, jaise character set, viewport settings, author, description, etc.</p>`,
            code:
`<head>
<meta charset="UTF-8">
</head>`
        },

        {
            name:`Link Tags:`,
            des:`<p><strong>&lt;links&gt;</strong> tags external resources ko connect karte hain, jaise CSS stylesheets ya icons.</p>`,
            code:
`<head>
<link rel="stylesheet" href="styles.css">
</head>`
        },

        {
            name:`Script Tags:`,
            des:`<p><strong>&lt;script&gt;</strong> tags JavaScript files ko link karne ke liye istemal hote hain.</p>`,
            code:
`<head>
<script src="script.js"></script>
</head>`
        },


        {
            name:`Base Tag:`,
            des:`<p><strong>&lt;base&gt;</strong> tag relative URLs ko resolve karne ke liye istemal hoti hai.</p>`,
            code:
`<head>
<base href="https://www.example.com/">
</head>`
        },


        {
            name:`Style Tag:`,
            des:`<p><strong>&lt;style&gt;</strong> tag CSS code ko directly document mein include karne ke liye istemal hota hai.</p>`,
            code:
`<head>
<style>
    body {
        font-family: Arial, sans-serif;
    }
</style>
</head>`
        },


        {
            name:`Noscript Tag:`,
            des:`<p><strong>&lt;noscript&gt;</strong> tag JavaScript disabled hone par alternative content provide karta ha</p>`,
            code:
`<head>
<noscript>
    <p>Please enable JavaScript to view this site.</p>
</noscript>
</head>`
        },



    ],
},






    points:[],

    
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