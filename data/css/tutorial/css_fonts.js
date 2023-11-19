module.exports.css_fonts = {
    name:`CSS Fonts`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS <strong>font</strong> property text ke appearance ko control karne ke liye use hoti hai. Ye property text ke font family, size, style, weight, aur other properties ko define karti hai.</p>
    </br>
    <p>CSS <strong>font</strong> property ke kuch important aspects hain:</p>

    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
       
    syntax:[
      {
          name:`Font Family:`,

          des:`
          <p>Text ke liye specific font family ko define karta hai, jaise ki Arial, Times New Roman, Helvetica, etc.</p>`,

          code:
`font-family: "Arial", sans-serif;`,

          des2:
          ``,
          
      },

  ],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_fonts/font_size",
    
                name:`Font Size:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>CSS <strong>font-size</strong> property text ke size ko define karne ke liye use hoti hai. Ye property text ke height ko pixels, ems, percentages, ya koi specific unit mein set karti hai.</p>

                <p>Kuch important aspects font-size property ke hain:</p>
                <ul>

                  <li><strong>Absolute Units:</strong> Pixels (px), points (pt), ya inches (in) jaise units jo fixed size specify karte hain. For example: font-size: 16px</li>

                  <li><strong>Relative Units:</strong> Ems (em), percentages (%) jo parent element ke size ke relative size specify karte hain. For example: font-size: 1.2em; (1.2 times parent element's font size)</li>

                  <li><strong>Viewport Units:</strong> vw, vh, ya vmin jaise units jo viewport size ke relative size specify karte hain.</li>

                  <li><strong>Keywords:</strong> medium, small, large, x-large, smaller, larger jaise keywords jo predefined sizes ko represent karte hain..</li>
                </ul>`,
    
                
                img:``,
    
                code:
`.small-text {
  font-size: 12px;
}

.medium-text {
  font-size: 1.2em;
}

.large-text {
  font-size: 150%;
}`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .small-text {
      font-size: 12px;
    }

    .medium-text {
      font-size: 1.2em;
    }

    .large-text {
      font-size: 150%;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p class="small-text">Small size text</p>
  <p class="medium-text">Medium size text</p>
  <p class="large-text">Large size text</p>

</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            
                {
                id:"tutorial/css_fonts/font_style",
    
                name:`Font Style:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Font style CSS property text ke style ko modify karne ke liye use hoti hai.</p>
                <p>Font style ke values:</p>
                <ul>

                  <li><strong>Normal:</strong> Default value, jo text ko upright, yaani ki regular position mein display karta hai.</li>

                  <li><strong>Italic:</strong> Text ko italic style mein display karta hai, jo uske design ke hisaab se tilted hota hai.</li>

                  <li><strong>Oblique:</strong> Yeh bhi text ko italic jaisa display karta hai lekin font ke design ke hisaab se halka sa tilted hota hai, lekin har font oblique style ko support nahi karta.</li>
                </ul>`,
    
                
                img:``,
    
                code:
`.text1 {
  font-style: italic;
}

.text2 {
  font-style: oblique;
}`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .text1 {
      font-style: italic;
    }

    .text2 {
      font-style: oblique;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p>This is <span class="text1">italic</span> text.</p>
  <p>This is <span class="text2">oblique</span> text.</p>

</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            
    
                {
                id:"tutorial/css_fonts/font_weight",
    
                name:`Font Weight:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p><strong>font-weight</strong> property text ke boldness ya thickness ko define karti hai. Ye property text ko normal, bold, bolder, lighter, aur numeric values (100 se 900 ke beech) me define karne ka option deti hai.</p>

                <p>Kuch important aspects font-weight property ke hain:</p>
                <ul>

                  <li><strong>Normal:</strong> Default value, jo normal ya regular text style ko indicate karta hai.</li>

                  <li><strong>Bold:</strong> Text ko bold ya strong style me display karta hai.</li>

                  <li><strong>Bolder aur Lighter:</strong> In values se text ke weight ko inherit kiya jata hai. bolder text ko uske parent element se bolder display karta hai, jabki lighter text ko uske parent se lighter display karta hai.</li>

                  <li><strong>Numeric Values:</strong> font-weight numeric values 100 se 900 ke beech me hote hain. Har numeric value ek specific weight ko represent karta hai. Generally, multiples of 100 use hote hain, jaise ki 100 (light), 400 (normal), 700 (bold), etc. Lekin, kuch fonts kuch specific values ko support nahi karte hain.</li>
                </ul>`,
    
                
                img:``,
    
                code:
`.bold-text {
  font-weight: bold;
}

.lighter-text {
  font-weight: lighter;
}

.numeric-text {
  font-weight: 700; /* Bold */
}`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .bold-text {
      font-weight: bold;
    }

    .lighter-text {
      font-weight: lighter;
    }

    .numeric-text {
      font-weight: 700; /* Bold */
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p>This is <span class="bold-text">bold</span> text.</p>
  <p>This is <span class="lighter-text">lighter</span> text.</p>
  <p>This is <span class="numeric-text">bold</span> text using numeric value.</p>

</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            
    
    
                {
                id:"tutorial/css_fonts/font_variant",
    
                name:`Font Variant:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>CSS <strong>font-variant</strong> property text ke appearance ko modify karne ke liye use hoti hai. Ye property text ke case, spacing, aur small caps jaise aspects ko control karti hai.</p>

                <p>Kuch important aspects font-variant property ke hain:</p>
                <ul>

                  <li><strong>normal:</strong> Default value. Text ko normal style mein display karta hai, jisme koi changes nahi hote.</li>

                  <li><strong>small-caps:</strong> Text ke lowercase letters ko chhote capital letters mein display karta hai, aur uppercase letters ko bhi normal size mein hi rakhta hai.</li>

                  <li><strong>all-small-caps:</strong> Ye bhi text ko small-caps mein display karta hai lekin yahan par uppercase letters bhi chhote caps mein hote hain.</li>
                  
                </ul>`,
    
                
                img:``,
    
                code:
`.small-caps {
  font-variant: small-caps;
}

.all-small-caps {
  font-variant: all-small-caps;
}`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .small-caps {
      font-variant: small-caps;
    }

    .all-small-caps {
      font-variant: all-small-caps;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p>This is <span class="small-caps">small caps</span> text.</p>
  <p>This is <span class="all-small-caps">all small caps</span> text.</p>

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