module.exports.html_headings ={
    name:`HTML Headings`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML headings webpage ke content ko organize karne ke liye use hoti hain. In headings ka use content ko section-wise divide karne ke liye kiya jata hai.</p>

    <p>HTML me headings h1 se lekar h6 tak hote hain, jaha h1 sabse important heading hoti hai aur h6 sabse choti heading hoti hai.</p>

    <p>Yahan headings h1 se h6 tak hain:</p>

 
    <ul>

    <li>&lt;h1&gt;: Sabse badi heading.</li>
    
    <li>&lt;h2&gt;: Thoda choti heading &lt;h1&gt; ke comparison me.</li>
    
    <li>&lt;h3&gt;: Aur choti heading &lt;h2&gt; ke comparison me.</li>
    
    <li>&lt;h4&gt;: &lt;h3&gt; se choti heading..</li>
    
    <li>&lt;h5&gt;: &lt;h4&gt; se choti heading.</li>
    
    <li>&lt;h6&gt;: Sabse choti heading.</li>

    </ul>

    `,

    // abhi points likhna hai
    points:[
        {
            id:`tutorial/html_headings/headings_syntax`,
            name:`Headings Syntax`,

            des:``,

            code:
`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
`,

            des2:
            `
            <h3>Attributes:</h3>
            <p>Headings normally koi specific attribute nahi rakhti hain.</p>

            <h3>Use Case:</h3>
            <p>Suppose aap ek blog post likh rahe hain. Toh aap headings ka use karenge taki aapke readers ko aasani se samajh aaye ki aapke blog post me kaun-kaun se sections hain. For example, "Introduction", "Main Content", "Conclusion" ityadi.</p>
            
            `,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[  
                `<h1> se <h6> tak headings hierarchy me hoti hain. Matlab, <h2> <h1> se important nahi hoti.`,

                `CSS ka use karke aap headings ka font size, color, style change kar sakte hain.`,

                `HTML headings ka default margin hota hai jo browsers predefined dete hain. Iska matlab hai ki, bina kisi CSS ke <h1> ke paas ek default space hota hai.`
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