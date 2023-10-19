module.exports.html_links ={
    name:`HTML Links`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML <strong>&lt;a&gt;</strong> tag hyperlink banane ke liye istemal hota hai. Yani ke <a> tag ka use ek web page se dusre web page ya resource tak pahunchne ke liye hota hai.</p>

    <p>Kuch important points HTML <strong>&lt;a&gt;</strong> tag ke baare mein:</p>

    

    `,

    points:[
        {
            id:`tutorial/html_links/syntax`,
            name:`Syntax:`,

            des:`
           <p><strong>&lt;a&gt;</strong> tag ka opening tag <strong>&lt;a&gt;</strong> hota hai aur closing tag <strong>&lt;/a&gt;</strong> hota hai.</p>
            
            `,

            code:
`<a href="url">Link Text</a>`,

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
            id:`tutorial/html_links/href_attribute`,
            name:`href Attribute:`,

            des:`
           <p><strong>href</strong> attribute ka use kiya jata hai jisse user click karne par kisi dusre page ya resource tak pahunch sake.</p>
            
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
            id:`tutorial/html_links/target`,
            name:`Target:`,

            des:`
           <p><strong>target</strong> attribute ka use kiya jata hai jisse naya page kis tarah se open hoga wo define kiya jata hai. Jaise ki <strong>_blank</strong> naya tab mein kholne ke liye.</p>
            
            `,

            code:
`<a href="https://www.docsinhindi.com" target="_blank">Visit Example</a>`,

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
            id:`tutorial/html_links/text_content`,
            name:`Text Content:`,

            des:`
           <p><strong>&lt;a&gt;</strong> tag ke beech ke content wo hota hai jo user click karta hai. Is content ko hum link text kehte hain.</p>`,

            code:
`<a href="https://www.docsinhindi.com">Click Here</a>`,

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
            id:`tutorial/html_links/hyperlink_to_a_section`,
            name:`Hyperlink to a Section:`,

            des:`
           <p>Agar aap kisi specific section tak link karna chahte hain to <strong>id</strong> attribute se us section ko tag karein aur <strong>href</strong> mein us id ka reference de sakte hain.</p>`,

            code:
`<!--  <a href="#section">Jump to Section</a> 
<div id="section">This is a section</div> -->`,

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
            id:`tutorial/html_links/absolute_vs_relative_urls`,
            name:`Absolute vs Relative URLs:`,

            des:`
           <p>href attribute mein aap absolute URLs (jaise ki <b>https://www.example.com</b>) ya relative URLs (jaise ki <b>/about</b>) ka use kar sakte hain.</p>`,

            code:
`<a href="https://www.example.com">Absolute URL</a>
<a href="/about">Relative URL</a>`,

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
            id:`tutorial/html_links/links_to_email_addresses`,
            name:`Links to Email Addresses:`,

            des:`
           <p>&lt;a&gt; tag ka use email addresses ke sath bhi kiya ja sakta hai.</p>`,

            code:
`<a href="mailto:example@example.com">Send Email</a>`,

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
            id:`tutorial/html_links/links_to_phone_numbers`,
            name:`Links to Phone Numbers:`,

            des:`
           <p>&lt;a&gt; tag ka use phone numbers ke sath bhi kiya ja sakta hai.</p>`,

            code:
`<a href="tel:+1234567890">Call Us</a>`,

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
            id:`tutorial/html_links/disable_links`,
            name:`Disabled Links:`,

            des:`
           <p>Agar aapko link temporarily disable karna hai to <b>href</b> attribute ki jagah <b>href="#"</b> rakh sakte hain.</p>`,

            code:
`<a href="#">Disabled Link</a>`,

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
            id:`tutorial/html_links/tab_index`,
            name:`Tab Index:`,

            des:`
           <p><b>tabindex</b> attribute ka use keyboard navigation ke liye hota hai. Ye attribute decide karta hai ki element tab key se focus karta hai ya nahi.</p>`,

            code:
`<a href="https://www.example.com" tabindex="1">Visit Example</a>`,

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