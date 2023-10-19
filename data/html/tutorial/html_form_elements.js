module.exports.html_form_elements ={
    name:`HTML Form Elements`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML mein form element ek aham hissa hai jo users se information collect karne ke liye istemal hota hai. Form element ke alag-alag types hote hain jo users ko alag tarike se data enter karne ki anumati dete hain.</p>

    <p>Yahan kuch important form elements hain:</p>
    

    `,

    points:[
        {
            id:`tutorial/html_form_elements/text_input`,
            name:`Text Input:`,

            des:`
            <p><strong>&lt;input&gt;</strong> element type text se ek chota text box banaya jata hai jahan users single-line text enter kar sakte hain</p>`,

            code:
`<input type="text" name="username" id="username">`,

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
            id:`tutorial/html_form_elements/password_input`,
            name:`Password Input:`,

            des:`
            <p><strong>&lt;input&gt;</strong> element type <strong>password</strong> se password input field banaya jata hai jahan users apna password enter kar sakte hain. Ismein entered text dots ya asterisks ke form mein dikhte hain.</p>`,

            code:
`<input type="password" name="password" id="password">`,

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
            id:`tutorial/html_form_elements/email_input`,
            name:`Email Input:`,

            des:`
            <p><strong>&lt;input&gt;</strong> element type <strong>email</strong> se email input field banaya jata hai jahan users apna email address enter kar sakte hain. Browser ismein email ke valid format ko check karta hai.</p>`,

            code:
`<input type="email" name="email" id="email">`,

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
            id:`tutorial/html_form_elements/number_input`,
            name:`Number Input:`,

            des:`
            <p><strong>&lt;input&gt;</strong> element type <strong>number</strong> se number input field banaya jata hai jahan users sirf numbers enter kar sakte hain..</p>`,

            code:
`<input type="number" name="age" id="age">`,

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
            id:`tutorial/html_form_elements/checkbox`,
            name:`Checkbox:`,

            des:`
            <p><strong>&lt;input&gt;</strong> element type <strong>checkbox</strong> se ek checkbox banaya jata hai jise user select ya deselect kar sakta hai.</p>`,

            code:
`<input type="checkbox" name="subject" id="subject" value="yes">Maths
<input type="checkbox" name="subject" id="subject" value="yes">Physics
`,

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
            id:`tutorial/html_form_elements/radio_button`,
            name:`Radio Button:`,

            des:`
            <p><strong>&lt;input&gt;</strong> element type <strong>radio</strong> se ek radio button banaya jata hai jo ek se adhik options mein se ek hi select karne ki anumati deta hai.</p>`,

            code:
`<input type="radio" name="gender" id="male" value="male">Male
<input type="radio" name="gender" id="female" value="female">Female
`,

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
            id:`tutorial/html_form_elements/textarea`,
            name:`Textarea:`,

            des:`
            <p><strong>&lt;textarea&gt;</strong> element long text input lene ke liye istemal hota hai. Ismein multiple lines ka text enter kar sakte hain.</p>`,

            code:
`<textarea name="message" id="message" rows="4" cols="50"></textarea>
`,

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
            id:`tutorial/html_form_elements/select_dropdown`,
            name:`Select Dropdown:`,

            des:`
            <p><strong>&lt;select&gt;</strong> element aur uske andar <strong>option</strong> elements ka istemal dropdown menu banane ke liye hota hai.</p>`,

            code:
`<select name="country" id="country">
<option value="usa">USA</option>
<option value="canada">Canada</option>
<option value="uk">UK</option>
</select>
`,

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
            id:`tutorial/html_form_elements/file_input`,
            name:`File Input:`,

            des:`
            <p><strong>&lt;input&gt;</strong> element type <strong>file</strong> se file upload input field banaya jata hai jahan users files upload kar sakte hain.</p>`,

            code:
`<input type="file" name="file" id="file">
`,

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
            id:`tutorial/html_form_elements/submit_button`,
            name:`Submit Button:`,

            des:`
            <p><strong>&lt;input&gt;</strong> element type <strong>submit</strong> se form submit button banaya jata hai.
            </p>`,

            code:
`<input type="text" name="username" id="username">
<input type="submit" value="Submit">
`,

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
            id:`tutorial/html_form_elements/reset_button`,
            name:`Reset Button:`,

            des:`
            <p><strong>&lt;input&gt;</strong> element type <strong>reset</strong> se form reset button banaya jata hai jo form controls ke values ko reset karta hai.</p>`,

            code:
`
<form>
<input type="text" name="username" id="username">
<input type="reset" value="Reset">
</form>
`,

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