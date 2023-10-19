module.exports.html_class ={
    name:`HTML Class`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML me <strong>"class"</strong> attribute ek tareeka hai jisse aap ek ya adhik elements ko ek group mein combine kar sakte hain, taaki unhe ek hi style ya behavior di ja sake. Ye CSS styling ke liye kaam aata hai aur un elements ko select karne me madad karta hai jo ek hi class se judi hain.</p>

    `,



    

codeDes:{
    name:`Class Syntax`,
    des:``,

    arr:[
        {
        name:"single class:",
        des:`<p>Class attribute ka syntax simple hota hai, jahan ek element ke "class" attribute mein ek ya ek se adhik class names space se separate kiye jaate hain.</p>`,
        code:
`<p class="class1">Content</p>`    
    },


        {
        name:"Multiple classes:",
        des:`<p>Aap ek hi element par multiple classes apply kar sakte hain. Isse element ko ek sath kai alag-alag styles aur behavior diya ja sakta hai.</p>`,
        code:
`<p class="class1 class2 class3">Content</p>`    
    },
],
},






    points:[
        {
            id:`tutorial/html_class/styling_with_css`,
            name:`Styling with CSS:`,

            des:`
           <p>Class attribute ko CSS ke sath istemal karke aap specific classes ke liye styles define kar sakte hain. CSS mein class selectors ke sath "." (dot) ka upyog hota hai.</p>
            
            `,

            code:
`<!DOCTYPE html>
<html>
<head>
<style>
  .highlight {
    background-color: yellow;
    font-weight: bold;
  }
</style>
</head>
<body>

<p>This is a <span class="highlight">highlighted</span> text.</p>

<p>This is another <span class="highlight">highlighted</span> text.</p>

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
            id:`tutorial/html_class/javascript_interaction`,
            name:`JavaScript Interaction:`,

            des:`
           <p>Class attribute ko JavaScript ke sath istemal karke aap specific elements ko identify aur manipulate kar sakte hain. JavaScript mein element ko "getElementsByClassName" ya "querySelector" ka istemal class ke naam se kiya jata hai.</p>
            
            `,

            code:
`<!DOCTYPE html>
<html>
<head>
</head>
<body>

<button class="btn" onclick="changeText()">Click me</button>

<script>
  function changeText() {
    var buttons = document.getElementsByClassName("btn");
    buttons[0].textContent = "Clicked! ....";
  }
</script>
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
            id:`tutorial/html_class/reusability`,
            name:`Reusability:`,

            des:`
           <p>class" attribute ka istemal kai elements ke sath ek hi class ko baar-baar use karne mein madadgar hota hai. Isse aap consistent styling aur behavior maintain kar sakte hain.</p>
            
            `,

            code:
`<!DOCTYPE html>
<html>
<head>
    <style>
        .btn{
            background-color:red;
            border-radius:5px;
            border:none;
            color:white;
            padding: 10px;
        }

    </style>
</head>
<body>

<button class="btn">Button 1</button>
<button class="btn">Button 2</button>
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