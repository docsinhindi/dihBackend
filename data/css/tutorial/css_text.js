module.exports.css_text = {
    name:`CSS Text`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS <strong>text</strong> property ek collection hai jo text ke appearance aur styling ko control karti hai. Ye property text ko modify karne ke liye use hoti hai, jaise ki text alignment, decoration, transformation, spacing, aur color.</p>
    </br>

    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_text/text_color_and_background...",
    
                name:`Text Color and Background-Color Properties:`,
                
                lang:"css",
    
                height:"120px",
    
                output:true,
    
                des:`
                <ul>
                <li><strong>color:</strong> Text ke color ko define karta hai.</li>

                <li><strong>background-color:</strong> Text ke background color ko define karta hai.</li>
                
                </ul>`,
    
                
                img:``,
    
                code:
`.first {
  color: blue;
}
.second {
  background-color: green;
}`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .first {
      color: blue;
    }
    .second {
      background-color: green;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p class="first">This is a first paragraph.</p>
  <p class="second">This is a second paragraph.</p>

</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            
    
            {
                id:"tutorial/css_text/text_alignment_properties",
    
                name:`Text Alignment Properties:`,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <p>text-align property CSS mein text ke alignment ko control karne ke liye use hoti hai. Yeh property text ko left, right, center, ya justify mein align karne ka kaam karti hai.</p>
                <p>Kuch important aspects text-align property ke hain:</p>
                <ul>
                    <li><strong>left:</strong> Text ko left side par align karta hai. Yeh typically default alignment hoti hai.</li>
                    
                    <li><strong>right:</strong> Text ko right side par align karta hai.</li>
                    
                    <li><strong>center:</strong> Text ko horizontally center mein align karta hai.</li>
                    
                    <li><strong>justify:</strong> Text ko left aur right edges par align karta hai, jisse evenly spaced lines ho jaati hain, except last line jo normally left aligned hoti hai.</li>
                    
                </ul>
                `,
    
                
                img:``,
                code:
`.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-justify {
  text-align: justify;
}`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .text-left {
      text-align: left;
    }

    .text-right {
      text-align: right;
    }

    .text-center {
      text-align: center;
    }

    .text-justify {
      text-align: justify;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p class="text-left">This text is left-aligned.</p>
  <p class="text-right">This text is right-aligned.</p>
  <p class="text-center">This text is center-aligned.</p>
  <p class="text-justify">This text is justified, meaning it's aligned on both left and right edges.</p>

</body>
</html>`,
                   des2:``,

                optionExample:{
                   name:`Text Alignment Properties:`,
                   arr:[
                    { 
                        name:``,
                        code:`text-align: left;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .text {
                              text-align: left;
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <p class="text">text properties</p>                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`text-align: right;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .text {
                              text-align: right;
                            }
                        
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <p class="text">text properties</p>                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`text-align: center;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                        
                            .text {
                              text-align: center;
                            }
                        
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <p class="text">text properties</p>                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`text-align: justify;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .text {
                              text-align: justify;
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <p class="text">text properties</p>                        
                        </body>
                        </html>`
                    },

                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
          
            {
                id:"tutorial/css_text/text_decoration_properties",
    
                name:`Text Decoration Properties:`,
                
                lang:"css",
    
                height:"180px",
    
                output:true,
    
                des:`
                <p>Text Decoration Properties CSS mein text ke decoration ko define karte hain, jaise underline, overline, line-through, aur text ke style ko customize karne ke liye use hote hain. Yeh properties text ke specific parts ko decorate karne ke liye istemal hoti hain.</p>

                <p>Kuch important text decoration properties hain:</p>
                <ul>
                    <li><strong>text-decoration:</strong> Text ke decoration ko define karta hai, jaise ki underline, overline, line-through, ya none (no decoration).</li>
                    
                    <li><strong>text-decoration-color:</strong> Text decoration ka color set karta hai.</li>
                    
                    <li><strong>text-decoration-style:</strong> Text decoration ka style set karta hai, jaise ki solid, dashed, dotted.</li>
                    
                    <li><strong>text-decoration-line:</strong> Text decoration ke line type ko set karta hai, jaise ki underline, overline, line-through.</li>
                    
                </ul>
                `,
    
                
                img:``,
                code:
` .underline {
    text-decoration: underline;
    text-decoration-color: blue;
    text-decoration-style: dashed;
    text-decoration-line: underline;
  }

  .overline {
    text-decoration: overline;
    text-decoration-color: red;
    text-decoration-style: double;
    text-decoration-line: overline;
  }

  .line-through {
    text-decoration: line-through;
    text-decoration-color: green;
    text-decoration-style: wavy;
    text-decoration-line: line-through;
  }`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .underline {
      text-decoration: underline;
      text-decoration-color: blue;
      text-decoration-style: dashed;
      text-decoration-line: underline;
    }

    .overline {
      text-decoration: overline;
      text-decoration-color: red;
      text-decoration-style: double;
      text-decoration-line: overline;
    }

    .line-through {
      text-decoration: line-through;
      text-decoration-color: green;
      text-decoration-style: wavy;
      text-decoration-line: line-through;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p class="underline">This is underlined text.</p>
  <p class="overline">This is overlined text.</p>
  <p class="line-through">This is line-through text.</p>

</body>
</html>`,
                   des2:``,

               
    
                tips:``,
    
                notes:``
            },
    
          
          
            {
                id:"tutorial/css_text/text_transformation_properties",
    
                name:`Text Transformation Properties:`,
                
                lang:"css",
    
                height:"180px",
    
                output:true,
    
                des:`
                <p>Text Transformation Properties text ke appearance ko modify karne ke liye use hote hain. Ye properties text ke case ko modify karti hain, jaise ki uppercase, lowercase, capitalize.</p>
                `,
    
                
                img:``,
                code:
`.uppercase {
    text-transform: uppercase;
  }

  .lowercase {
    text-transform: lowercase;
  }

  .capitalize {
    text-transform: capitalize;
  }`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .uppercase {
      text-transform: uppercase;
    }

    .lowercase {
      text-transform: lowercase;
    }

    .capitalize {
      text-transform: capitalize;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p class="uppercase">uppercase text</p>
  <p class="lowercase">LOWERCASE TEXT</p>
  <p class="capitalize">capitalize first letter of each word</p>

</body>
</html>`,
                   des2:``,

               
    
                tips:``,
    
                notes:``
            },
    
          
        
            {
                id:"tutorial/css_text/text_spacing_properties",
    
                name:`Text Spacing Properties:`,
                
                lang:"css",
    
                height:"120px",
    
                output:true,
    
                des:`
                <ul>

                <li><strong>line-height:</strong> Text ke lines ke beech ka space ko control karta hai.</li>
                
                <li><strong>letter-spacing:</strong> Text ke letters ke beech ka space ko control karta hai.</li>
                
                <li><strong>word-spacing:</strong> Text ke words ke beech ka space ko control karta hai.</li>
                </ul>
                `,
    
                
                img:``,
                code:
`p {
    line-height: 1.5; /* Line height set to 1.5 times the font size */
    letter-spacing: 2px; /* Letter spacing set to 2 pixels */
    word-spacing: 5px; /* Word spacing set to 5 pixels */
  }`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    p {
      line-height: 1.5; /* Line height set to 1.5 times the font size */
      letter-spacing: 2px; /* Letter spacing set to 2 pixels */
      word-spacing: 5px; /* Word spacing set to 5 pixels */
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p>This is an example of text spacing properties in CSS.</p>

</body>
</html>`,
                   des2:``,

               
    
                tips:``,
    
                notes:``
            },
     
            {
                id:"tutorial/css_text/text_overflow",
    
                name:`Text Overflow:`,
                
                lang:"css",
    
                height:"100px",
    
                output:true,
    
                des:`
                <p><strong>text-overflow</strong> property text content overflow ko handle karne ke liye use hoti hai jab text ka size defined area se jyada ho jata hai aur woh area se bahar nikal jata hai.</p>

                <p>text-overflow ke value:</p>

                <ul>
                <li><strong>clip:</strong> Default value, jisme text content overflow hone par text ko clip kar diya jata hai, aur extra text display nahi hota.</li>
                
                <li><strong>ellipsis:</strong> Overflow hone par text ke end mein ellipsis (...) lagaya jata hai, jo indicate karta hai ki text cut kiya gaya hai.</li>
                
                <li><strong>string:</strong> Custom string ka use kiya jata hai jo text overflow ko indicate karta hai.</li>
                
                <li><strong>initial:</strong> Ye property ko uske default value par reset karta hai.</li>

                <li><strong>inherit:</strong> Ye property ko uske parent element se inherit kar leta hai.</li>
                </ul>
                `,
    
                
                img:``,
                code:
`.text-overflow-example {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid black;
  }`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .text-overflow-example {
      width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border: 1px solid black;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <p class="text-overflow-example">This is a long text which will be truncated with ellipsis when it overflows its container.</p>

</body>
</html>`,
                   des2:``,

               
    
                tips:``,
    
                notes:``
            },
    
          
    
            {
                id:"tutorial/css_text/white_space",
    
                name:`White Space:`,
                
                lang:"css",
    
                height:"140px",
    
                output:true,
    
                des:`
                <p><strong>white-space</strong> CSS property text ke white spaces ko control karne ke liye use hoti hai. Ye property determine karti hai ki browser kis tarah ke spaces ko handle karega, jaise ki spaces, tabs, line breaks, aur other white spaces.</p>

                <p>Kuch important white-space values hain:</p>

                <ul>
                <li><strong>normal:</strong> Default value. Text ko browser ke according display karta hai, jaise ki multiple spaces ko ek space mein convert karta hai, line breaks aur tabs ko ignore karta hai.</li>
                
                <li><strong>nowrap:</strong> Text ko ek line mein display karta hai aur line breaks ko ignore karta hai.</li>
                
                <li><strong>pre:</strong> Text ko as it is display karta hai jaise ki source code mein hota hai, including spaces, line breaks, aur tabs ko bhi maintain karta hai.</li>

                <li><strong>pre-line:</strong> Text ko normal display karta hai except ki multiple spaces ko ek space mein convert karta hai, lekin line breaks ko maintain karta hai.</li>

                <li><strong>pre-wrap:</strong> Text ko as it is display karta hai jaise pre, lekin line breaks ko bhi maintain karta hai.</li>
                </ul>
                `,
    
                
                img:``,
                code:
`.whitespace-example {
    border: 1px solid black;
    width: 200px;
    white-space: pre-line;
  }`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .whitespace-example {
      border: 1px solid black;
      width: 200px;
      white-space: pre-line;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <div class="whitespace-example">This is an example of white-space property in CSS. This text will break.
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