module.exports.css_boxmodel = {
    name:`CSS Box Model`,
    
    keyword:['css box model', 'box model' , 'css box model in hindi' , 'css model box'],

    title_img:``,

    desImg:{
        name:"Box Model",
        url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/box_model.png`
    },


    des:`
    <p>CSS Box Model ek fundamental concept hai jo har HTML element ke dimensions aur spacing ko define karta hai. Ye ek box ki tarah work karta hai jo har element ke content, padding, border, aur margin ko represent karta hai.</p>   
    `,


    tips:``,

    warn:``,

    notes:``,

    points:[
        {
            
            name:`Box Model ke components:`,

            des:`
            <ul>
            <li><strong>Content:</strong> Element ka actual content area hota hai, jisme text, images, ya koi content hota hai. Is area ka size width aur height properties se define hota hai.</li>
        
            <li><strong>Padding:</strong> Content ke around ek space hota hai, jise padding kehte hain. Ye content se uske border tak ka distance hota hai. Padding ka size padding property se define hota hai.</li>
        
            <li><strong>Border:</strong> Padding ke baad ek border hoti hai. Ye padding ko border se separate karti hai. Border ki style, width, aur color border property se set ki jaati hai.</li>
        
            <li><strong>Margin:</strong> Border ke baad element ka outer space hota hai, jise margin kehte hain. Ye element ko surrounding elements se alag rakhta hai. Margin ka size margin property se define hota hai.</li>
        
            </ul>
`
        },


        {
            name:`Box Model ke Two types hote hain:`,

            des:`
            <ul>
    <li><strong>Content-box:</strong> Ye default box model hota hai, jisme width aur height content area ko define karta hai. Padding, border, aur margin iske baad add hote hain.</li>

    <li><strong>Border-box:</strong> Is box model mein width aur height content area ke sath padding aur border ko bhi include karta hai. Matlab, padding aur border width aur height ko adjust karte hain</li>

    </ul>
`
        },

    ],

    
    syntax:[],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_boxmodel/example",
    
                name:`Example:`,
                
                lang:"css",
    
                height:"180px",
    
                output:true,
    
                des:`
                <p></p>`,
    
                
                img:``,
    
                code:
`.box-example {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 8px solid black;
    margin: 30px;
    box-sizing: border-box; /* Border-box box model */
  }`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .box-example {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 8px solid black;
      margin: 30px;
      box-sizing: border-box; /* Border-box box model */
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <div class="box-example">
    Box Model Example
  </div>

</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            
    
    
        ],
    
        tips:``,
    
        warn:``,
    
        notes:``
    
    
    },

}