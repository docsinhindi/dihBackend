module.exports.html_ordered_lists ={
    name:`HTML Ordered Lists`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>Ordered lists HTML mein content ko organize karne ke liye istemal hoti hain. Isme har ek item ko ek unique number ya character se label kiya jata hai. Ordered lists ke do pramukh types hote hain:</p>

    `,



    

codeDes:{
    name:``,
    des:``,

    arr:[],
},






    points:[
        {
            id:`tutorial/html_ordered_lists/ordered_list_syntax`,
            name:`Ordered Lists Syntax`,

            des:`<p>Ordered lists numbers (1, 2, 3, etc.) ka istemal karte hain item ko represent karne ke liye.</p>`,

            code:
`<ol>
    <li>Item 14</li>
    <li>Item 23</li>
    <li>Item 35</li>
</ol>`,

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
            id:`tutorial/html_ordered_lists/decimal_ordered_lists`,
            name:`Decimal Ordered Lists: `,

            des:`<p>Isme har ek item ko numbers se label kiya jata hai (1, 2, 3, ...).</p>`,

            code:
`<ol type="1">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>`,

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
            id:`tutorial/html_ordered_lists/alphabetical_ordered_lists`,
            name:`Alphabetical Ordered Lists:`,

            des:`<p>Isme har ek item ko letters se label kiya jata hai (a, b, c, ...).</p>`,

            code:
`<ol type="a">
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ol>`,

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
            id:`tutorial/html_ordered_lists/romaon_numerals_ordered_lists`,
            name:`Roman Numerals Ordered Lists:`,

            des:`<p>Isme har ek item ko Roman numerals se label kiya jata hai (I, II, III, ...).</p>`,

            code:
`<ol type="I">
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ol>`,

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
            id:`tutorial/html_ordered_lists/nested_ordered_list_example`,
            name:`Nested Ordered List Example:`,

            des:`<p>Aap ordered lists ko nested kar sakte hain. Yani ek ordered list ke andar doosri ordered list ho sakti hai.</p>`,

            code:
`<ol type="1">
<li>Item 1</li>
<li>Item 2
    <ol type="a">
        <li>Subitem A</li>
        <li>Subitem B</li>
    </ol>
</li>
<li>Item 3</li>
</ol>`,

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