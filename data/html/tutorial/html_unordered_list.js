module.exports.html_unordered_lists ={
    name:`HTML Unordered Lists`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>Unordered lists HTML mein unstructured items ko display karne ke liye istemal hote hain. Har item ke samne ek bullet (circle, square, ya disc) hoti hai. Unordered lists <strong>&lt;ul&gt;</strong> tag ke andar define ki jati hain aur har item ko <strong>&lt;li&gt;</strong> (list item) tag se represent kiya jata hai.</p>

    <p>Yahan unordered lists ke kuch important point hain:</p>

    `,



    

codeDes:{
    name:``,
    des:``,

    arr:[],
},






    points:[
        {
            id:`tutorial/html_unordered_list/syntax`,
            name:`Unordered Lists Syntax`,

            des:`<p><strong>&lt;ul&gt;</strong> tag unordered list ko start karta hai. Ismein har item ko <strong>&lt;li&gt;</strong> tag se wrap kiya jata hai.</p>`,

            code:
`<ul>
    <li>Item a</li>
    <li>Item x</li>
    <li>Item z</li>
</ul>`,

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
            id:`tutorial/html_unordered_list/bullet_square_circle_disc_styles`,
            name:`Bullet Styles (Square, Circle and disc) :`,

            des:`<p>Bullet style CSS ke through define ki jati hai. Default mein, browser apni predefined style ka use karta hai, lekin aap use customize kar sakte hain.</p>`,

            code:
`<!DOCTYPE html>
<html>
    <head>

    <title>Page Title</title>
    <style>
        ul {
            list-style-type: square; /* Square bullet style */
        }
    </style>
    
    </head>
    <body>

      <h1>My First Heading</h1>

      <ul>
        <li>Item a</li>
        <li>Item x</li>
        <li>Item z</li>
      </ul>

    </body>
</html>`,

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
            id:`tutorial/html_unordered_list/nested_unordered_lists`,
            name:`Nested Unordered Lists:`,

            des:`<p>Aap ek unordered list ke andar doosri unordered list bhi create kar sakte hain, jise nested list kehte hain.</p>`,

            code:
`<ul>
<li>Item 1</li>
<li>Item 2
    <ul>
        <li>Subitem 2.1</li>
        <li>Subitem 2.2</li>
    </ul>
</li>
<li>Item 3</li>
</ul>`,

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