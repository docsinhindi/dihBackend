module.exports.html_demo ={
        name:`HTML Demo`,


        titleImg:[
            // {
            //     id:"i-1",
            //     name:"Contact Us Form",
            //     url:"https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/html_tutorial.png"
            // }
        ],


        des:`<p>HTML web development ka basic aur essential part hai, aur aksar CSS (Cascading Style Sheets) aur JavaScript ke sath mil kar use hota hai. CSS styling aur layout provide karta hai, jabki JavaScript dynamic functionality add karta hai.</p>`,

        desImg:[
            // {
            //     id:"i-2",
            //     name:"Contact Us Form",
            //     url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html/tutorial/contact_us_form.png"
            // }
        ],




        example:[
            
         {
            id:"tutorial/html_demo/simple_form",
            name:"Simple Form:",
            code:
            `<!DOCTYPE html>
<html>
<head>
    <title>Simple Form</title>
</head>
<body>
    <h1>Contact Us</h1>
    <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
            `,
            des:`Is example me ek basic contact form hai jo user se naam aur email address collect karta hai.`,
           
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:{}
         },

         {
            id:"tutorial/html_demo/basic_web_page",
            name:"Basic Web Page:",
            code:`<!DOCTYPE html>
<html>
<head>
    <title>Simple Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple web page.</p>
    <a href="https://www.docsinhindi.com">Visit Example</a>
</body>
</html>
            `,
            des:`Is example me ek basic web page hai jo ek heading, paragraph, aur ek link (anchor tag) dikhata hai.`,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:{}
         },

         {
            id:"tutorial/html_demo/image_gallery",
            name:"Image Gallery:",
            code:
            `<!DOCTYPE html>
<html>
<head>
    <title>Image Gallery</title>
</head>
<body>
    <h1>Image Gallery</h1>
    <img src="https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg" width="400px" alt="chrome">
</body>
</html>`,
            des:`Is example me ek chhota sa image gallery hai jo teen images ko dikhata hai.`,
            
            img:{
                id:"",
                url:"",
                name:""
            },
            
            tips:{}
         },
         {
            id:"tutorial/html_demo/list_of_items",
            name:"List of Items:",
            code:`<!DOCTYPE html>
<html>
<head>
    <title>Item List</title>
</head>
<body>
    <h1>Shopping List</h1>
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Oranges</li>
    </ul>
</body>
</html>
            `,
            des:`Is example me ek simple shopping list hai jo unordered list ka use karta hai.`,
           
            img:{
                id:"",
                url:"",
                name:""
            },
            
            tips:{}
         },
        ]
     
}