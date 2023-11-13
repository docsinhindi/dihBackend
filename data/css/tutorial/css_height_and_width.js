module.exports.css_height_and_width = {
    name:`CSS Height and Width`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS me <strong>width</strong> aur <strong>height</strong> properties ka istemal HTML elements ki size ko control karne ke liye hota hai. Yeh properties har tarah ke HTML elements jaise ki div, span, image, etc., ke liye kaam aati hain</p>

    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_height_and_width/width_aur_height_example",
    
                name:`Width aur Height Example:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:``,    
                
                img:``,
    
                code:
`width: 200px;
height: 100px;
background-color: green;`,
                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
  .box {
    /* Width and Height in Pixels */
    width: 200px;
    height: 100px;
    background-color: green;
  }
  </style>
</head>
<body>
  <div class="box">Hello, World!</div>
</body>
</html>`,
                des2:`
                <p>Is example mein:</p>
                <ul>
                <li>width property se div element ki horizontal width set ki gayi hai (200 pixels).</li>
                <li>height property se div element ki vertical height set ki gayi hai (100 pixels).</li>
                </ul>`,
                
    
                tips:``,
    
                notes:``,

                warn:``,
            },
            
                {
                id:"tutorial/css_height_and_width/width_property",
    
                name:`width Property:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <ul>
                <li><strong>width</strong> property ek element ki horizontal space ko define karta hai.</li>
                <li>Isme aap pixels <b>(px)</b>, percentages <b>(%)</b>, <b>em</b> units, ya kisi aur valid length unit ka istemal kar sakte hain.</li>
                </ul>`,    
                
                img:``,
    
                code:
`/* Pixels mein width */
.box1 {
  width: 200px;
  background-color: green;
}

/* Percentage mein width */
.box2 {
  width: 50%;
  background-color: green;
}

/* Em units mein width */
.box3 {
  width: 10em;
  background-color: green;
}`,
                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
      /* Pixels mein width */
    .box1 {
      width: 200px;
      background-color: green;
    }

    /* Percentage mein width */
    .box2 {
      width: 50%;
      background-color: blue;
    }

    /* Em units mein width */
    .box3 {
      width: 10em;
      background-color: yellow;
    }
  </style>
</head>
<body>
  <div class="box1">box1</div>
  <div class="box2">box2</div>
  <div class="box3">box3</div>
</body>
</html>`,
                des2:``,
                
    
                tips:``,
    
                notes:``,
                
                warn:``,
            },
            
    
    
            
                {
                id:"tutorial/css_height_and_width/height_property",
    
                name:`height Property:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <ul>
                <li><strong>height</strong> property ek element ki vertical space ko define karta hai.</li>
                <li>Jaise <strong>width</strong> mein, yahan bhi aap <b>(px)</b>, <b>(%)</b>, <b>em</b> units, ya kisi aur valid length unit ka istemal kar sakte hain.</li>
                </ul>`,    
                
                img:``,
    
                code:
`/* Pixels mein width */
.box1 {
  height: 200px;
  background-color: green;
}

/* Percentage mein width */
.box2 {
  height: 30%;
  background-color: green;
}

/* Em units mein width */
.box3 {
  height: 10em;
  background-color: green;
}`,
                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
      /* Pixels mein width */
    .box1 {
      height: 200px;
      background-color: green;
    }

    /* Percentage mein width */
    .box2 {
      height: 30%;
      background-color: blue;
    }

    /* Em units mein width */
    .box3 {
      height: 10em;
      background-color: yellow;
    }
  </style>
</head>
<body>
  <div class="box1">box1</div>
  <div class="box2">box2</div>
  <div class="box3">box3</div>
</body>
</html>`,
                des2:``,
                
    
                tips:``,
    
                notes:``,
                
                warn:``,
            },
            
            

                {
                id:"tutorial/css_height_and_width/auto_value",
    
                name:`Auto Value:`,
                
                lang:"css",
    
                height:"70px",
    
                output:true,
    
                des:`
                <ul>
                <li>Aap <strong>auto</strong> value ka bhi istemal kar sakte hain. Iska matlab hai ki browser khud width ya height ka decision karega, based on content.</li>
                </ul>`,    
                
                img:``,
    
                code:
`box {
  width: auto; /* Auto value for width */
  height: auto; /* Auto value for height */
  background-color: green;
}
`,
                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .box {
      height: auto;
      width: auto;
      background-color: green;
    }
  </style>
</head>
<body>
  <div class="box">box</div>
</body>
</html>`,
                des2:``,
                
    
                tips:``,
    
                notes:``,
                
                warn:``,
            },
            
    
    

                {
                id:"tutorial/css_height_and_width/max_and_min_values",
    
                name:`Max and Min Values:`,
                
                lang:"css",
    
                height:"170px",
    
                output:true,
    
                des:`
                <ul>
                <li>Aap <strong>max-width</strong>, <strong>min-width</strong>, <strong>max-height</strong>, aur <strong>min-height</strong> properties ka bhi istemal kar sakte hain, jo ek element ki maximum aur minimum width/height ko define karte hain.</li>
                </ul>`,    
                
                img:``,
    
                code:
`box {
    min-height: 100px; /* Minimum height */
    max-width: 200px; /* Maximum width */
    background-color: green;
}`,
                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .box {
      min-height: 100px; /* Minimum height */
      max-width: 200px; /* Maximum width */
      background-color: green;
    }
  </style>
</head>
<body>
  <div class="box">box</div>
</body>
</html>`,
                des2:``,
                
    
                tips:``,
    
                notes:``,
                
                warn:``,
            },
            
    
    
        ],
    
        tips:``,
    
    
        notes:``
    
    
    },

}