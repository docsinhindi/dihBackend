module.exports.html_structure ={
    name:`HTML Structure`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`<p>HTML structure ek web page ke layout, content, aur elements ko define karta hai. Yeh ek web page ke sare elements ko organize karta hai, including headings, paragraphs, links, images, forms, and more. Niche ek basic HTML structure diya gaya hai:</p>`,

    points:[
        {
            id:`tutorial/html_structure/simple_html_structure`,
            name:`Simple Html Structure`,

            des:``,

            code:
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple HTML Page</title>
</head>
<body>
    <h1>Main Heading</h1>
    <p>This is a simple paragraph.</p>
</body>
</html>`,

            des2:
            `
            <p><strong>Explanation:</strong></p>
            <ol>
                <li><strong>&lt;!DOCTYPE html&gt;:</strong> Ye declaration bataata hai ki yeh HTML5 ka document hai.</li>

                <li><strong>&lt;html lang="en"&gt;:</strong> Is line mein HTML document ka root element hai jo sare HTML content ko hold karta hai. lang attribute se language specify ki jati hai (yahan "en" English hai).</li>
                
                <li><strong>&lt;head&gt;:</strong> Head section, jahan par document ki meta-information hoti hai, jaise character set, title, CSS, JavaScript files ka link, etc.
                
                <ul>
                
                    <li><strong>&lt;meta charset="UTF-8"&gt;:</strong> Character set specify karta hai jiske madhyam se browser content ko interpret karta hai (UTF-8 is commonly used for universal character encoding).</li>
                
                    <li><strong>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;:</strong> Mobile devices ke liye viewport ko configure karta hai, jo responsive design ke liye important hota hai.</li>
                
                    <li><strong>&lt;title&gt;Simple HTML Page&lt;/title&gt;:</strong> Title tag browser ke title bar ya tab mein dikhata hai.</li>

                </ul>

                </li>
                
                
                
                <li><strong>&lt;body&gt;:</strong> Body section, jahan par actual content hota hai jo browser dikhata hai.
                
                <ul>
                
                    <li><strong>&lt;h1&gt;Main Heading&lt;/h1&gt;:</strong> H1 tag se ek heading define hoti hai. Yahan "Main Heading" ek heading hai.</li>
                
                    <li><strong>&lt;p&gt;This is a simple paragraph.&lt;/p&gt;:</strong> P tag se ek paragraph define hota hai. Yahan "This is a simple paragraph." ek paragraph ka content hai.</li>
            

                </ul>

                </li>
                
            </ol>
            `,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },


    ],

    desImg:[
        {
            id:"i-2",
            name:"HTML Structure",
            url:"https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/html_structure.png"
        }
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