module.exports.html_form_attributes ={
    name:`HTML Form Attributes`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML forms ke attributes forms ke behavior aur properties ko control karte hain. Yahan kuch mahatvapurna attributes hain jo forms ke sath istemal kiye jate hain:</p>

    `,

    // yahan tk hogaya
    points:[
        {
            id:`tutorial/html_form_attributes/actions`,
            name:`action:`,

            des:`<p><strong>action</strong> attribute form data ko submit hone wale server ka URL define karta hai.</p>`,

            code:
`<form action="/submit-form" method="post">
<!-- Form controls go here -->
</form>`,

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
            id:`tutorial/html_form_attributes/method`,
            name:`method:`,

            des:`<p><strong>method</strong> attribute form data ko server tak kaise bheja jata hai, ye define karta hai. Common methods hain <strong>GET</strong> aur <strong>POST</strong>.</p>`,

            code:
`<form action="/submit-form" method="post">
<!-- Form controls go here -->
</form>`,

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
            id:`tutorial/html_form_attributes/name`,
            name:`name:`,

            des:`<p><strong>name</strong> attribute form control ko server par identify karne ke liye istemal hota hai.</p>`,

            code:
`<input type="text" name="username">`,

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
            id:`tutorial/html_form_attributes/enctype`,
            name:`enctype:`,

            des:`<p><strong>enctype</strong> attribute form data ko encode karne ke liye istemal hota hai. Ye files ko upload karne ke liye use hota hai.</p>`,

            code:
`<form action="/submit-form" method="post" enctype="multipart/form-data">
<!-- Form controls go here -->
</form>`,

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
            id:`tutorial/html_form_attributes/target`,
            name:`target:`,

            des:`<p><strong>target</strong> attribute form submission ke baad response ko kaha display karna hai ye define karta hai.</p>`,

            code:
`<form action="/submit-form" method="post" target="_blank">
<!-- Form controls go here -->
</form>`,

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
            id:`tutorial/html_form_attributes/autocomplete`,
            name:`autocomplete:`,

            des:`<p><strong>autocomplete</strong> attribute form controls par browser ke dwara auto-complete honewali values ko control karta hai.</p>`,

            code:
`<form action="/submit-form" method="post" autocomplete="off">
<!-- Form controls go here -->
</form>`,

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
            id:`tutorial/html_form_attributes/novalidate`,
            name:`novalidate:`,

            des:`<p><strong>novalidate</strong> attribute browser ke built-in validation ko disable karta hai.</p>`,

            code:
`<form action="/submit-form" method="post" novalidate>
<!-- Form controls go here -->
</form>`,

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
            id:`tutorial/html_form_attributes/required`,
            name:`required:`,

            des:`<p><strong>required</strong> attribute form control mein user se data input karne ke liye compulsory bana deta hai.</p>`,

            code:
`<form >
<input type="text" name="username">

<input type="text" name="username" required>
</form>`,

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
            id:`tutorial/html_form_attributes/readonly`,
            name:`readonly:`,

            des:`<p><strong>readonly</strong> attribute form control ko read-only banata hai, matlab user usmein kuch nahi likh sakta.</p>`,

            code:
`<input type="text" name="username" value="Docs in Hindi" readonly>`,

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
            id:`tutorial/html_form_attributes/form_attributes_example`,
            name:`Form Attributes Example:`,

            des:``,

            code:
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Form</title>
</head>
<body>
    <h2>Contact Us</h2>
    <form action="/submit-form" method="post" enctype="multipart/form-data">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>`,

            des2:
            `<p>Is example mein:</p>
            <ul>

            <li><strong>action</strong> attribute form submission ke liye server ka URL define karta hai.</li>
            
            <li><strong>method</strong> attribute form data ko server tak kaise bheja jata hai ye define karta hai.</li>
            
            <li><strong>enctype</strong> attribute form data ko encode karne ke liye istemal hota hai.</li>
            
            <li><strong>name</strong>, <strong>id<strong>, for attribute form controls aur labels ke liye istemal hote hain.</li>
            
            <li><strong>required</strong> attribute user se input lene ke liye zaruri hai.</li>
            
            <li><strong>&lt;textarea&gt;</strong> element long text input lene ke liye istemal hota hai.</li>
            </ul>

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