module.exports.html_forms ={
    name:`HTML Forms`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML forms ek aise feature hain jo users se information collect karne ke liye istemal hota hai. Ye user interaction ko facilitate karte hain, jaise ki login forms, search boxes, feedback forms, etc.</p>

 
    

    `,

    points:[
        {
            id:`tutorial/form_syntax/form_syntax`,
            name:`Form Syntax:`,

            des:``,

            code:
`<!DOCTYPE html>
<html>
<head>
<title>website title</title>
</head>
<body>
  <h1>Form!</h1>
  <form action="/submit" method="post">
  <!-- Form inputs go here -->
  <input type="text" name="username" required>
  <input type="password" name="password" required>
  <button type="submit">Submit</button>
</form>
</body>
</html>`,

            des2:
            `<p>Isme:</p>
            <ul>

            <li><strong>&lt;form&gt;</strong> tag ek form ko start karta hai. action attribute server URL ko specify karta hai jahan data bhejna hai, aur method attribute HTTP request type ko define karta hai (usually "post" ya "get").</li>
            
            <li><strong>&lt;input&gt;</strong> tags user se various types of data collect karte hain. "type" attribute, jaise "text", "password", "checkbox", etc., define karte hain ki kaun sa type ka input chahiye.</li>
            
            <li><strong>&lt;button&gt;</strong> tag form ko submit karne ke liye istemal hota hai.</li>

            </ul>
            `,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },




        {
            id:`tutorial/form_syntax/text_input`,
            name:`Text Input:`,

            des:`<p>User se text collect karta hai.</p>`,

            code:
`<input type="text" name="username" required>`,

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
            id:`tutorial/form_syntax/password_input`,
            name:`Password Input:`,

            des:`<p>User se password collect karta hai (characters are masked).</p>`,

            code:
`<input type="password" name="password" required>`,

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
            id:`tutorial/form_syntax/checkbox`,
            name:`Checkbox:`,

            des:`<p>User se boolean values collect karta hai.</p>`,

            code:
`<input type="checkbox" name="subscribe" value="yes"> Subscribe to newsletter
<input type="checkbox" name="subscribe" value="yes"> Subscribe to Gaming Channel`,

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
            id:`tutorial/form_syntax/radio_buttons`,
            name:`Radio Buttons:`,

            des:`<p>Multiple options hote hain, lekin ek hi option ko select kar sakte hain.</p>`,

            code:
`<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female`,

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
            id:`tutorial/form_syntax/select_box`,
            name:`Select Box (Dropdown):`,

            des:`<p>Options ko ek dropdown menu mein display karta hai.</p>`,

            code:
`<select name="country">
<option value="usa">USA</option>
<option value="canada">Canada</option>
</select>`,

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
            id:`tutorial/form_syntax/textarea`,
            name:`Textarea:`,

            des:`<p>Multiple lines of text collect karta hai.</p>`,

            code:
`<textarea name="message" rows="4" cols="50"></textarea>`,

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
            id:`tutorial/form_syntax/submit_button`,
            name:`Submit Button:`,

            des:`<p>Form ko submit karne ke liye istemal hota hai.</p>`,

            code:
`<button type="submit">Submit</button>`,

            des2:
            `
            <p><b>Form Submission:</b></p>
            <p>Jab user form submit karta hai, data server tak pahunchta hai. Is data ko server process karta hai aur uske baad appropriate action li jati hai.</p>
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