module.exports.css_outline = {
    name:`CSS Outline`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS <strong>outline</strong> property ek element ke bahar ek border-like style ka representation provide karta hai. Ye typically tab istemal hota hai jab aap kisi specific element ko highlight karna chahte hain, jaise ki focus state mein ya phir user interaction ko show karne ke liye.</p>

    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_outline/outline_property",
    
                name:`outline Property:`,
                
                lang:"css",
    
                height:"180px",
    
                output:true,
    
                des:`
                <p><strong>outline</strong> property ke kuch important aspects hain:</p>
                <ul>
                    <li><strong>Color:</strong> Outline ki color define karne ke liye outline-color ka use hota hai.</li>

                    <li><strong>Style:</strong> Outline ka style set karne ke liye outline-style property ka use hota hai, jisme dashed, solid, double, etc., jaise options hote hain.</li>

                    <li><strong>Width:</strong> Outline ki width ko outline-width property se define kiya jata hai, jaise pixels, ems, ya koi specific unit.</li>

                </ul>`,
    
                
                img:``,
    
                code:
`.outline-demo {
    width: 200px;
    border: 4px solid red;
    padding: 10px;
    outline: 4px dashed green;
  }`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS */
    .outline-demo {
      width: 200px;
      border: 4px solid red;
      padding: 10px;
      outline: 4px dashed green;
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <div class="outline-demo">
    This is an element with an outline.
  </div>

</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            
    
            {
                id:"tutorial/css_outline/outline_style",
    
                name:`outline style:`,
                
                lang:"css",
    
                height:"450px",
    
                output:true,
    
                des:`
                <p><strong>outline</strong> ki style mein kuch alag-alag options hote hain, jo outline ki appearance ko define karte hain. Yeh kuch common outline-style values hain:</p>
                
                <ul>

                <li><strong>dotted:</strong> Ismein dots outline ko represent karte hain.</li>
                
                <li><strong>dashed:</strong> Is style mein outline mein dashes hote hain.</li>

                <li><strong>solid:</strong> Solid line outline hota hai.</li>

                <li><strong>double:</strong> Double line outline hota hai, jismein do line ek sath hoti hain.</li>

                <li><strong>groove:</strong> Outline ke edges ko 3D groove effect deti hai.</li>

                <li><strong>ridge:</strong> Ismein outline ke edges ko 3D ridge effect deti hai.</li>

                <li><strong>inset:</strong> Outline ko andar ki taraf chala jata hai, giving an inset appearance.</li>

                <li><strong>outset:</strong> Outline ko bahar ki taraf chala jata hai, giving an outset appearance.</li>

                </ul>`,
    
                
                img:``,
    
                code:
`
.solid {
  outline-width: 5px;
  outline-style: solid;
}

.dotted {
  outline-width: 5px;
  outline-style: dotted;
}

.dashed {
  outline-width: 5px;
  outline-style: dashed;
}

.double {
  outline-width: 5px;
  outline-style: double;
}

.groove {
  outline-width: 5px;
  outline-style: groove;
}

.ridge {
  outline-width: 5px;
  outline-style: ridge;
}

.inset {
  outline-width: 5px;
  outline-style: inset;
}

.outset {
  outline-width: 5px;
  outline-style: outset;
}

.none {
  outline: none;
}`,
                fullCode:
    `<!DOCTYPE html>
    <html>
    <head>
    <style>
    body{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap:10px;
    }
      .box {
        width: 120px;
        height: 100px;
        margin: 20px 5px;
        display: flex;
        justify-content: center;
        align-items:center;
        

      }
    
      .solid {
        outline-width: 5px;
        outline-style: solid;
      }
    
      .dotted {
        outline-width: 5px;
        outline-style: dotted;
      }
    
      .dashed {
        outline-width: 5px;
        outline-style: dashed;
      }
    
      .double {
        outline-width: 5px;
        outline-style: double;
      }
    
      .groove {
        outline-width: 5px;
        outline-style: groove;
      }
    
      .ridge {
        outline-width: 5px;
        outline-style: ridge;
      }
    
      .inset {
        outline-width: 5px;
        outline-style: inset;
      }
    
      .outset {
        outline-width: 5px;
        outline-style: outset;
      }
    
      .none {
        outline: none;
      }
    
    </style>
    </head>
    <body>
    
    <div class="box solid">Solid outline</div>
    <div class="box dotted">Dotted outline</div>
    <div class="box dashed">Dashed outline</div>
    <div class="box double">Double outline</div>
    <div class="box groove">Groove outline</div>
    <div class="box ridge">Ridge outline</div>
    <div class="box inset">Inset outline</div>
    <div class="box outset">Outset outline</div>
    <div class="box none">No outline</div>
    
    </body>
    </html>`,
                des2:``,

                
                tips:``,
    
                notes:``
            },
    
            
    
    
            {
                id:"tutorial/css_outline/border_vs_outline",
    
                name:``,
                
                lang:"css",
    
                height:"450px",
    
                output:false,
    
                des:``,
    
                
                img:``,
    
                code:
``,
                fullCode:
    ``,
                des2:``,

                vsTable:[
                    {
                        name:`Outlines Vs Borders`,

                        heading:[
                            {

                            name:`Border`,

                            arr:[

                                `border element ka content ke around hota hai aur element ke size ko affect karta hai. Yeh element ke layout ko change karta hai.`,

                                `border element ke layout ko change karta hai. Jaise ki agar aap ek element par border lagate hain, to uska width ya height us border ke hisaab se change ho sakta hai.`,

                                `border rounded corners (border-radius) ka use karke rounded ho sakta hai.`,
                            ],
                            },
                            
                            {
                                name:`Outline`,

                                arr:[
                                `outline element ke around hota hai, lekin content ke size ya layout ko change nahikarta hai. Yeh border ke outer side mein hota hai.`,

                                `outline layout ko affect nahi karta hai, isse element ke size mein koi change nahi aata hai.`,

                                `outline rounded corners ko support nahi karta hai.`
                                ]                                
                                
                            },
                        ]

                    }
                ],

                
                tips:``,
    
                notes:``
            },
    
    
        ],
    
        tips:``,
    
        warn:``,
    
        notes:``
    
    
    },

}