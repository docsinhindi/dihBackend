module.exports.html_elements ={
    name:`HTML Elements`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML elements hote hain building blocks jo web pages ko structure dene me use hote hain. Har element ek specific task perform karta hai aur uske apne attributes hote hain jo uski behavior ko define karte hain.</p>

    <p>Yahan HTML ke kuch important points hain:</p>


    `,

    points:[
        {
            id:`tutorial/html_elements/element_structure`,
            name:`Element Structure:`,

            des:`
            <ol>
                <li><strong>Opening Tag (&lt;element&gt;):</strong> Har HTML element ka ek opening tag hota hai. Opening tag me element ka name hota hai. Jaise &lt;p&gt; ek paragraph element ko represent karta hai.</li>
                
                <li><strong>Attributes:</strong> Kuch elements ke paas attributes hote hain jo unke behavior ko define karte hain. Attributes key-value pairs ke roop me likhe jate hain. Jaise &lt;a href="https://www.example.com"&gt;.</li>
                
                <li><strong>Content:</strong> Kuch elements content ko wrap karte hain. Ye content wo hota hai jo browser me display hota hai.</li>
                
                <li><strong>Closing Tag (&lt;/element&gt;):</strong> Container elements ke liye ek closing tag hota hai jo element ko end karta hai. Ye closing tag opening tag ke name ke saath / ke saath hota hai. Jaise &lt;/p&gt; ek paragraph element ko close karta hai.</li>
                
            </ol>
            
            `,

            code:
`<p class="intro">Yah eak paragraph hai.</p>`,

            des2:
            `
            <p>Is example me:</p>

           

            <ul>

            <li>&lt;p&gt; opening tag hai jo ek paragraph element ko shuru karta hai.</li>

            <li>class ek attribute hai jo paragraph element ko define karta hai.
            "intro" class ka value hai.</li>

            <li>"Yah eak paragraph hai." content hai jo browser me dikhaya jayega.</li>

            <li>&lt;/p&gt; closing tag hai jo paragraph element ko end karta hai.</li>

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
            id:`tutorial/html_elements/nested_elements`,

            name:`Nested Elements:`,

            des:`Ek element doosre element ke andar bhi ho sakta hai, isko hum nested element kehte hain. `,

            code:
`<div>
<p>This is a paragraph inside a div.</p>
</div>`,

            des2:`
            <p>Is example me:</p>

            

            <ul>

            <li>&lt;div&gt; ek container element hai.</li>

            <li>&lt;p&gt; ek paragraph element hai jo &lt;div&gt; ke andar hai.</li>
            
            </ul>
            
            <p>Yani &lt;div&gt; ke andar ek &lt;p&gt; element hai jo uski content ko define karta hai.</p>
            
            
            
            <p>Nested elements ka istemal content ko organize karne ke liye kiya jata hai, jisse webpage ka structure ban sake. Ye ek powerful feature hai jo HTML ko flexible banata hai aur usse complex structures banane me madad karta hai.</p>`,

            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },

    ],

    desImg:[
        {
            id:"i-2",
            name:"Contact Us Form",
            url:"https://docsinhindi.s3.ap-south-1.amazonaws.com/htmltutorial/html_element.png"
        }
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