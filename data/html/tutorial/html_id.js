module.exports.html_id ={
    name:`HTML Id`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML <strong>id</strong> attribute ek element ko uniquely identify karne ke liye istemal hota hai. Har ek HTML element ke sirf ek unique <strong>id</strong> attribute ho sakta hai, aur isse aap us element ko CSS styling aur JavaScript event handling ke liye bhi identify kar sakte hain.</p>

    `,



    

codeDes:{
    name:``,
    des:``,

    arr:[
        {
        name:"Syntax:",
        des:``,
        code:
`<p id="uniqueId">This is the introduction paragraph.</p>`    
    },


],
},






    points:[
        {
            id:`tutorial/html_id/styling_with_css`,
            name:`Styling with CSS:`,

            des:`<p><strong>"id"</strong> attribute ko CSS ke sath istemal karke aap specific id ke liye styles define kar sakte hain. CSS mein id selectors ke liye "#" (hash) ka upyog hota hai.</p>`,

            code:
`<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <style>
        #main-heading {
            color: red;
        }
    </style>
</head>
<body>
    <h1 id="main-heading">Welcome to My Website</h1>
    <p>This is some content on my website.</p>
</body>
</html>`,

            des2:
            `<p>Is example me, <strong>&lt;h1&gt;</strong> element ke liye ek <strong>"id"</strong> set kiya gaya hai <strong>id="main-heading"</strong>. Iske baad, CSS ke <strong>&lt;style&gt;</strong> section me, <strong>"#main-heading"</strong> ko select karke uska color red kiya gaya hai.</p>`,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },



        {
            id:`tutorial/html_id/javascript_interaction`,
            name:`JavaScript Interaction:`,

            des:`<p><strong>"id"</strong> attribute ko JavaScript ke sath istemal karke aap specific elements ko identify aur manipulate kar sakte hain. JavaScript mein element ko "getElementById" ka istemal id ke naam se kiya jata hai.</p>`,

            code:
`<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
<div id="header">This is the header section</div>

<button onclick="changeText()">Click me</button>

<script>
  function changeText() {
    var header = document.getElementById("header");
    header.textContent = "Header changed!";
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
            id:`tutorial/html_id/key_points`,
            name:`Html Id Key Points`,

            des:`
            <ul>

                <li><strong>Uniqueness:</strong> Har ek element ka ek unique ID hona chahiye. Do ya adhik elements ek hi ID ke sath nahi ho sakte.</li>

                <li><strong>Syntax:</strong> ID attribute ka syntax simple hota hai. Jahan ek element ke "id" attribute mein ek unique naam diya jata hai.</li>

                <li><strong>Uniquely Identifying Elements:</strong> ID attribute se ek specific element ko uniquely identify kiya ja sakta hai. Iske through aap us element ko CSS ya JavaScript mein asani se target kar sakte hain.</li>

                <li><strong>Styling with CSS:</strong> ID attribute ko CSS ke sath istemal karke aap specific IDs ke liye styles define kar sakte hain. CSS mein ID selectors ke liye "#" (hash) ka upyog hota hai.</li>

                <li><strong>Case-sensitive:</strong> "id" attribute values case-sensitive hote hain. Matlab, "myID" aur "myid" do alag-alag IDs hote hain. Aapko dhyan rakhna hoga ki aap "id" attribute ke value ko wahi tarah se likhe jaise ki use define kiya gaya hai.</li>

            </ul>
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