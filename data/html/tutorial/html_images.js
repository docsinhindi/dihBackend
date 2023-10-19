module.exports.html_images ={
    name:`HTML Images`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML &lt;img&gt; tag ek markup element hai jo images ko web page par dikhane ke liye istemal hota hai. Yeh ek void element hai, yaani iska koi end tag nahi hota.</p>

    <p>Kuch important point &lt;img&gt; tag ke baare mein:</p>

   

    `,

    points:[
        {
            id:`tutorial/html_images/image_tag_syntax`,
            name:`Image Tag Syntax:`,

            des:`
           <p>&lt;img&gt; tag ka basic syntax hota hai:</p>
            
            `,

            code:
`<img src="https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/image1.svg" alt="alternate_text">`,

            des2:
            `
            <ul>
            <li><strong>src:</strong> Ye attribute woh path ya URL hai jahan se browser image ko load karega.</li>

            <li><strong>alt:</strong> Ye attribute ek alternate text provide karta hai, jo image load nahi hone par screen readers aur search engines ke liye useful hota hai.</li>
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
            id:`tutorial/html_images/void_element`,
            name:`Void Element:`,

            des:`
           <p>&lt;img&gt; ek void element hota hai, iska matlab ise koi end tag nahi hota.</p>
            
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
            id:`tutorial/html_images/src_attribute`,
            name:`src Attribute:`,

            des:`
           <p><strong>src</strong> attribute image ki location (file path ya URL) ko specify karta hai.</p>
            
            `,

            code:
`<img src="https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/image1.svg" alt="Alternate Text">`,

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
            id:`tutorial/html_images/alt_attribute`,
            name:`alt Attribute:`,

            des:`
           <p><strong>alt</strong> attribute ek alternate text provide karta hai, jo image load nahi hone par display hota hai. Ye accessibility ke liye zaroori hai.</p>
            
            `,

            code:
`<img src="https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/image1.svg" alt="This is an image">`,

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
            id:`tutorial/html_images/height_and_width`,
            name:`Height and Width:`,

            des:`
           <p><strong>height</strong> aur <strong>width</strong> attributes se image ki height aur width set ki ja sakti hai.</p>
            
            `,

            code:
`<img src="https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/image1.svg" alt="Image" height="100" width="100">`,

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
            id:`tutorial/html_images/linking_an_image`,
            name:`Linking an Image:`,

            des:`
           <p><strong>img</strong> tag ko <strong>a</strong> tag ke andar wrap karke use clickable banaya ja sakta hai.</p>
            
            `,

            code:
`<a href="link_to_page.html">
<img src="https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/image1.svg" alt="Image">
</a>`,

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
            id:`tutorial/html_images/title_attribute`,
            name:`Title Attribute:`,

            des:`
           <p><strong>title</strong> attribute, jab mouse pointer image ke upar hota hai, to ek tooltip display karta hai.</p>
            
            `,

            code:
`<img src="https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/image1.svg" alt="Image" title="This is an image">`,

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
            id:`tutorial/html_images/alt_attribute`,
            name:`alt Attribute:`,

            des:`
           <p><strong>alt:</strong> Ye attribute ek alternate text provide karta hai, jo image load nahi hone par screen readers aur search engines ke liye useful hota hai.</p>
            
            `,

            code:
`<img src="https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/image1.svg" alt="Accessible Image">`,

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
            id:`tutorial/html_images/responsive`,
            name:`Responsive Images:`,

            des:`
           <p>CSS aur "max-width" property ka istemal karke, images ko responsive bana sakte hain.</p>
            
            `,

            code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    img {
      max-width: 100%; /* Set the maximum width to 100% of the parent container */
      height: auto; /* Let the height adjust proportionally to maintain the aspect ratio */
    }
  </style>
</head>
<body>
  <div style="width: 50%; /* A container with a fixed width */">
    <img src="https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/image1.svg" alt="Responsive Image">
  </div>
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