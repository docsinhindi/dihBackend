module.exports.html_css ={
    name:`HTML Css`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>CSS ek stylesheet language hai jo HTML documents ko style karne ke liye istemal hoti hai. Yeh web pages ko visually appealing banane ka kaam karta hai.</p>

    <h3>CSS Types:</h3>
    

    `,

    points:[
        {
            id:`tutorial/html_css/internal_css`,
            name:`Internal CSS:`,

            des:`
            <ul>
            <li>Internal CSS ka istemal HTML document ke <strong>&lt;style&gt;</strong> tag ke andar kiya jata hai.</li>
            <li>Yeh style sirf us HTML document ke liye apply hota hai.</li>
            </ul>`,

            code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: lightblue;
    }
    h1 {
      color: darkblue;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
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
            id:`tutorial/html_css/external_css`,
            name:`External CSS:`,

            des:`
            <ul>
            <li>External CSS ek alag CSS file me rakha jata hai jo HTML documents me link kiya jata hai.</li>
            <li>Isse multiple HTML documents ko ek hi style apply ho sakta hai.</li>
            </ul>`,

            code:
`
<!-- style.css file: -->

body {
    background-color: lightblue;
  }
  h1 {
    color: darkblue;
  }
  
  <!-- HTML file: -->

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Hello, World!</h1>
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
            id:`tutorial/html_css/inline_css`,
            name:`Inline CSS:`,

            des:`
            <ul>
            <li>Inline CSS ek specific HTML element ke <strong>style</strong> attribute me apply kiya jata hai.</li>
            <li>Isse ek hi element ko style di ja sakti hai.</li>
            </ul>`,

            code:
`<!DOCTYPE html>
<html>
<body style="background-color: lightblue;">
  <h1 style="color: darkblue;">Hello, World!</h1>
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

    ],

    desImg:[
        // {
        //     id:"i-2",
        //     name:"Contact Us Form",
        //     url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html/tutorial/contact_us_form.png"
        // }
    ],



codeDes:{
    name:`CSS Properties:`,
    des:`<p>Yahaan kuch pramukh CSS properties hain:</p>`,

    arr:[
        {
        name:"color:",
        language:"css",
        des:"<p>Text ka rang set karta hai.</p>",
        code:
`p {
    color: blue;
  }`    
    },

        {
        name:"font-size:",
        language:"css",
        des:"<p>Font ka size set karta hai.</p>",
        code:
`p {
    font-size: 16px;
  }`    
    },


        {
        name:"background-color:",
        language:"css",
        des:"<p>Background ka rang set karta hai.</p>",
        code:
`body {
    background-color: lightblue;
  }`    
    },

        {
        name:"margin:",
        language:"css",
        des:"<p>Element ke bahar ka space set karta hai.</p>",
        code:
`div {
    margin: 10px;
  }`    
    },


        {
        name:"padding:",
        language:"css",
        des:"<p>Element ke andar ka space set karta hai.</p>",
        code:
`div {
    padding: 10px;
  }`    
    },



        {
        name:"border:",
        language:"css",
        des:"<p>Element ke border ka style, color, aur width set karta hai.</p>",
        code:
`div {
    border: 1px solid black;
  }`    
    },


        {
        name:"text-align:",
        language:"css",
        des:"<p>Text ka alignment set karta hai.</p>",
        code:
`h1 {
    text-align: center;
  }`    
    },



        {
        name:"float:",
        language:"css",
        des:"<p>Element ko left ya right par float karta hai.</p>",
        code:
`img {
    float: right;
  }`    
    },


        {
        name:"display:",
        language:"css",
        des:"<p>Element ka display property set karta hai (block, inline, inline-block, etc.).</p>",
        code:
`span {
    display: block;
  }`    
    },


        {
        name:"position:",
        language:"css",
        des:"<p>Element ka positioning set karta hai (relative, absolute, fixed, etc.).</p>",
        code:
`div {
    position: absolute;
    top: 10px;
    left: 10px;
  }`    
    },




]
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