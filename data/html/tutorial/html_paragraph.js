module.exports.html_paragraph ={
    name:`HTML Paragraph`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML (Hypertext Markup Language) mein "paragraph" tag &lt;p&gt; ek mahtvapurn tag hai jo plain text ko alag alag paragraphon mein vibhajit karta hai. Isse webpage ke structure ko sudharne aur samajhne mein madad milti hai.</p>
    `,

    // abhi points likhna hai
    points:[
        {
            id:`tutorial/html_headings/paragraph_example`,
            name:`Paragraph Example`,

            des:`
            <p>Is example mein teen alag-alag paragraphs hain. Har ek <p> tag ek naya paragraph shuru karta hai.</p>`,

            code:
`<!DOCTYPE html>
<html>
<head>
    <title>Paragraph Example</title>
</head>
<body>
    <p>Yeh pehla paragraph hai.</p>
    <p>Yeh doosra paragraph hai.</p>
    <p>Aur yeh teesra paragraph hai.</p>
</body>
</html>`,

            des2:
            `
            <p>Dhyan rahe ki &lt;p&gt; tag automatically ek blank line chhodta hai har paragraph ke beech, jisse har paragraph alag-alag dikhaye jate hain.</p>
            
            `,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[ ]
        },

        {
            id:`tutorial/html_headings/example_with_inline_elements`,
            name:`Example with Inline Elements:`,

            des:`
            <p>Aap &lt;p&gt; tag ke andar kisi bhi inline element (jaise &lt;a&gt;, &lt;strong&gt;, etc.) ko bhi include kar sakte hain. Ye text ko style dene ke liye madad karta hai.</p>`,

            code:
`<p>This is a <strong>bold</strong> and <em>italic</em> text.</p>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[ 
                `<p> tag block-level element hai, isliye wo default taur par puri line ke width ko cover karta hai. Agar aap uski width control karna chahte hain, to CSS ka use karna hoga.`
            ]
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