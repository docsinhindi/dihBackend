module.exports.html_comment ={
    name:`HTML Comment`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML comment, yaani ki &lt;!-- --&gt;, ek tarah ka markup language ka feature hai jiska use HTML code me comments likhne ke liye hota hai. Ye comments web browsers me visible nahi hote hain, lekin developers ke liye code ko samajhne aur debug karne me madad karte hain.</p>

    <p>Kuch important baatein HTML comments ke baare mein:</p>

    

    `,

    points:[
        {
            id:`tutorial/html_comment/syntax`,
            name:`Syntax:`,

            des:`
           <p>HTML comment start &lt;!-- se hoti hai aur end --&gt; se hoti hai.</p>
            
            `,

            code:
`<!-- This is a comment -->
<p>This is a paragraph.</p>`,

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
            id:`tutorial/html_comment/visibility`,
            name:`Visibility:`,

            des:`
           <p>HTML comments browsers mein dikhayi nahi dete hain. Ye sirf code ke development stage mein visible hote hain.</p>
            
            `,

            code:
``,

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
            id:`tutorial/html_comment/purpose`,
            name:`Purpose::`,

            des:`
           <p>Comments ka main uddeshya developers ko code ko samajhne aur maintain karne me madad karna hota hai.
           </p>
            
            `,

            code:
`<!-- This is a comment about the purpose of the following code -->
<p>This is a paragraph.</p>`,

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
            id:`tutorial/html_comment/nested_comments`,
            name:`Nested Comments:`,

            des:`
           <p>HTML comments nested nahi ho sakti hain. Matlab, ek comment ke andar doosra comment nahi likha ja sakta.</p>
            
            `,

            code:
`<!-- This is a comment <!-- Nested comment is not allowed --> -->
<p>This is a paragraph.</p>`,

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
            id:`tutorial/html_comment/ignore_by_browsers`,
            name:`Ignored by Browsers:`,

            des:`
           <p>Browsers comments ko ignore karte hain, isliye wo visible nahi hote.</p>
            
            `,

            code:
`<!-- This will not be displayed in the browser -->
<p>This is a paragraph.</p>`,

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
            id:`tutorial/html_comment/removing_code`,
            name:`Removing Code:`,

            des:`
           <p>Comments ka use kisi part of code ko temporary disable karne ke liye bhi hota hai.</p>
            
            `,

            code:
`<!-- <p>This paragraph is temporarily disabled.</p> -->
<p>This is paragraph</p>`,

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
            id:`tutorial/html_comment/preventing_execution`,
            name:`Preventing Execution:`,

            des:`
           <p>Agar aapko kisi part of code ko temporarily disable karna hai, to usse comment me wrap kar sakte hain.</p>
            
            `,

            code:
`<!--
<script>
    alert('This will not execute');
</script>
-->`,

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
            id:`tutorial/html_comment/debugging_and_documentation`,
            name:`Debugging and Documentation:`,

            des:`
           <p>Comments ka use code ko debug karne aur document karne ke liye kiya jata hai.</p>
            
            `,

            code:
`<!-- TODO: Add functionality to handle form submission -->
<form action="/submit" method="post">
    <!-- Form fields go here -->
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