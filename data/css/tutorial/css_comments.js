module.exports.css_comments = {
    name:`CSS Comments`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS comments ka istemal code readability aur maintenance ke liye kiya jata hai. Ye developer ko code me koi specific line ya functionality ko explain karne me madad karte hain.</p>
    <div>
    <h3>CSS comments Two types ke hote hain:</h3>
    </div>
    `,


    tips:``,

    warn:``,

    notes:`
    <ul>
        <li>Comments CSS file ke file size ko increase nahi karte hain, kyun ki browser inko ignore karta hai.</li>
        <li>Comments code readability ko improve karte hain.</li>
    </ul>`,

    points:[],

    
    syntax:[
        {
            name:`Single Line Comments: `,

            des:`
            <p>Ye ek hi line ke liye hote hain. Inka istemal /* ... */ se hota hai.</p>`,

            code:
`/* Ye ek single line comment hai */
p {
    color: red;
}`,

            des2:
            ``,
        },

        {
            name:`Multi-line Comments:`,

            des:`
            <p>Ye multiple lines ke liye hote hain. Inka istemal /* ... */ se hota hai.</p>`,

            code:
`/*
Ye
ek
multi-line
comment
hai
*/
p {
    font-size: 16px;
}`,

            des2:
            ``,
        },

    ],



    
codeDes:{
    name:`CSS Comments ka Istemal:`,
    des:``,

    arr:[
        {
        name:"Code Explaination:",
        language:"css",
        des:"<p>Developers code me complex logic ya functionality ke liye comments ka istemal karte hain jisse future me code ko samajhne me madad mile.</p>",
        code:
`/* Header ka background color set kar raha hai */
header {
    background-color: #333;
    color: #fff;
}`    
    },

        {
        name:"Temporary Code Removal:",
        language:"css",
        des:"<p>Agar koi specific code temporarily remove karna ho toh uske liye bhi comments ka istemal hota hai.</p>",
        code:
`/* color: #f00; */ /* Ye line temporarily comment out ki gayi hai */`    
    },

        {
        name:"Debugging:",
        language:"css",
        des:"<p>Comments debugging ke liye madadgar hote hain, jisse errors ko trace kiya ja sakta hai.</p>",
        code:
`/* Ye border ka size set karne wala code hai */
.element {
    border: 1px solid #000;
}`    
    },
        {
        name:"Documentation",
        language:"css",
        des:"<p>Large projects me code ko document karne ke liye comments ka istemal kiya jata hai.</p>",
        code:
`/*
.nav-menu {
    ...
}

.footer {
    ...
}
*/`    
    },

]

}

}