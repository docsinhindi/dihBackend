module.exports.css_icons = {
    name:`CSS Icons`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS mein icons create karne ke liye kai tareeke hote hain, lekin native CSS mein icons banane ke liye koi specific property nahi hoti. Icons ko generally images, fonts, SVGs, ya CSS techniques se create kiya jata hai.</p>

    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_icons/image_as_icons",
    
                name:`Images as Icons:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>SVG ya raster images (PNG, JPG) ka use kiya ja sakta hai icons ke liye. HTML mein <img> tag ka use karke ya CSS background image property (background-image) se icons display kiye ja sakte hain.</p>`,
    
                
                img:``,
    
                code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .icon {
      width: 50px;
      height: 50px;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <img src="icon.png" alt="Icon" class="icon">

</body>
</html>`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .icon {
      width: 50px;
      height: 50px;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <img src="icon.png" alt="Icon" class="icon">

</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            

                {
                id:"tutorial/css_icons/font_icons",
    
                name:`Font Icons:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Font-based icons, jaise ki Font Awesome, Material Icons, ya custom icon fonts, ka use kiya ja sakta hai. Ye icons text-based hote hain aur CSS se size, color, aur styling kiya ja sakta hai.</p>`,
    
                
                img:``,
    
                code:
`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    /* CSS */
    .icon {
      font-size: 24px;
      color: blue;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <i class="fas fa-home icon"></i>

</body>
</html>`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    /* CSS */
    .icon {
      font-size: 24px;
      color: blue;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <i class="fas fa-home icon"></i>

</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            
     

                {
                id:"tutorial/css_icons/svg_icons",
    
                name:`SVG Icons:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Scalable Vector Graphics (SVGs) images ka use kiya ja sakta hai. Ye vector-based hote hain, jisse zoom karne par bhi quality maintain hoti hai.</p>`,
    
                
                img:``,
    
                code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .icon {
      width: 50px;
      height: 50px;
      fill: blue;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L1 21h22L12 2z" />
  </svg>

</body>
</html>`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .icon {
      width: 50px;
      height: 50px;
      fill: blue;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L1 21h22L12 2z" />
  </svg>

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