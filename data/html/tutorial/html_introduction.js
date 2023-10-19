module.exports.html_introduction ={
    name:`HTML Introduction`,


    titleImg:[
        // {
        //     id:"i-1",
        //     name:"Contact Us Form",
        //     url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        // }
    ],


    des:`
    <h2>HTML kya hai?</h2>

    <p>HTML (Hypertext Markup Language) ek markup language hai jo web pages ko create karne ke liye istemal hoti hai. Yeh ek standard markup language hai jiska istemal websites ke structure ko define karne ke liye kiya jata hai. HTML ke through, aap text, images, links, lists, tables, forms, aur bahut kuch add kar sakte hain.</p>

    <p>Yahan HTML ke kuch important points hain:</p>


    `,

    points:[
        {
            id:`tutorial/html_introduction/markup_language`,
            name:`Markup Language:`,

            des:`HTML ek markup language hai. Iska matlab hai ki aap ismein content ko structure denge, lekin direct visual formatting nahi hoti. Yeh browsers ko samajhne me madad karta hai ki content ka kaisa layout hona chahiye.`,

            code:
``,

            des2:``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },


        {
            id:`tutorial/html_introduction/hypertext`,

            name:`Hypertext:`,

            des:`HTML me hypertext ka istemal hota hai jisse aap alag-alag web pages ke beech me link kar sakte hain. Ye links text ya image dono ke roop me ho sakte hain.`,

            code:``,

            des2:``,

            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },


        {
            id:`tutorial/html_introduction/elements_and_tags`,
            name:`Elements and Tags:`,

            des:`HTML document me content ko elements ke roop me define kiya jata hai. Har element ek shuruwat tag (&lt;tagname&gt;) aur ek samapti tag (&lt;/tagname&gt;) ke beech hota hai. Tag content ko define karta hai.`,

            code:
`<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
            `,

            des2:``,

            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },


        {
            id:`tutorial/html_introduction/attributes`,
            name:`Attributes:`,

            des:`HTML elements ko aur bhi jankari dene ke liye attributes ka istemal hota hai. Attributes element ke shuruwat tag me add kiye jate hain.`,

            code:
`<a href="https://www.docsinhindi.com">Click here</a>
            `,

            des2:``,

            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },


        {
            id:`tutorial/html_introduction/document_structure`,
            name:`Document Structure:`,

            des:`Ek basic HTML document me header (&lt;head&gt;) aur body (&lt;body&gt;) hota hai. Header me metadata jaise title, link to CSS files, etc. hoti hai, jabki body me actual content hota hai.`,

            code:
            `<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
</body>
</html>`,

            des2:``,

            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },


        {
            id:`tutorial/html_introduction/semantic_elements`,
            name:`Semantic Elements:`,

            des:`HTML5 me naye semantic elements jaise &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt; aadi shamil kiye gaye hain jo content ko meaningfully structure karte hain.`,

            code:
`<header>
<h1>Website Header</h1>
<nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
</header>`,

            des2:``,

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