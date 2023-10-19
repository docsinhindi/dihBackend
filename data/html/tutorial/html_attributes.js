module.exports.html_attributes ={
    name:`HTML Attributes`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML attributes, elements ke sath jode ja sakte hain aur unhe extra information provide karne ke liye use kiya jata hai. Har attribute ek unique naam hota hai aur ek value ke sath associate hota hai.</p>

    <p>Kuch important points about HTML attributes:</p>

    <ol>

    <li><b>Syntax:</b> Attributes ka syntax name="value" hota hai. Yahan name attribute ka naam hota hai aur value uska value hota hai.</li>

    <li><b>Double Quotes:</b> Attribute values ko double quotes " me wrap karna recommended hai, lekin technically ye optional ha</li>

    </ol>
    
    <p>Common Attributes:</p>

    <ul>

    <li>id: Ek element ka unique identifier provide karta hai.</li>
    
    <li>class: Element ko ek ya multiple classes se associate karta hai.</li>
    
    <li>src: Image ya multimedia elements ke liye source URL provide karta hai.</li>
    
    <li>href: Hyperlink ke liye target URL provide karta hai.</li>
    
    <li>alt: Image ke alternate text provide karta hai (Accessibility ke liye zaruri hota hai).</li>
    
    <li>style: CSS styles apply karne ke liye use hota hai.</li>
    
    <li>disabled, readonly, required: Element ke behavior ko control karte hain.</li>
    
    <li>onclick, onchange, onmouseover: JavaScript events ke sath associate karte hain.</li>

    </ul>
<p>Attributes ke kuch important use  hain:</p>

    `,

    points:[
        {
            id:`tutorial/html_attributes/element_styling`,
            name:`Element Styling: `,

            des:`
           <p>Attributes se element ka style define kiya ja sakta hai, jaise style attribute se.</p>
            
            `,

            code:
`<div style="color: blue; font-size: 16px;">This is styled text.</div>`,

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
            id:`tutorial/html_attributes/linking`,
            name:`Linking: `,

            des:`
           <p>href attribute se hyperlinks ko establish kiya jata hai.</p>
            
            `,

            code:
`<a href="https://www.docsinhindi.com">Visit Example</a>`,

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
            id:`tutorial/html_attributes/images`,
            name:`Images:`,

            des:`
           <p>src attribute se images ko source ke roop me specify kiya jata hai.</p>
            
            `,

            code:
`<img src="example.jpg" alt="Example Image">`,

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
            id:`tutorial/html_attributes/form_elements`,
            name:`Form Elements:`,

            des:`
           <p>Form elements jaise input fields, buttons, etc., ke liye various attributes hote hain jinse user input ko manage kiya jata hai, jaise name, type, value, etc.</p>
            
            `,

            code:
`<input type="text" name="username" value="John Doe">`,

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
            id:`tutorial/html_attributes/accessibility`,
            name:`Accessibility:`,

            des:`
           <p>Kuch attributes user interface ko accessible banane ke liye istemal hote hain, jaise alt attribute images ke liye jo alternate text provide karta hai.</p>
            
            `,

            code:
`<img src="example.jpg" alt="Example Image">`,

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
            id:`tutorial/html_attributes/metadata`,
            name:`Metadata:`,

            des:`
           <p>HTML document ki metadata ko define karne ke liye kuch attributes hote hain, jaise charset, viewport settings, etc.</p>
            
            `,

            code:
`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,

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