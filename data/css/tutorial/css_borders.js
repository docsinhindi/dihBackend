module.exports.css_borders = {
    name:`CSS Borders`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS me border ek element ke outline ko define karta hai. Ye ek visual boundary hoti hai jo element ke chaaron taraf hoti hai.</p>
<div>
    <h2>Border Properties:</h2>
    </div>    

    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_borders/border_width",
    
                name:`border-width:`,
                
                lang:"css",
    
                height:"80px",
    
                output:true,
    
                des:`
                <p>Ye property border ki width ko specify karti hai. Aap isme thin, medium, thick, ya pixels (px) ka use kar sakte hain.</p>`,
    
                
                img:``,
    
                code:
    `border-width: 2px; /* 2 pixels width */`,
                fullCode:
    `<!DOCTYPE html>
    <html>
        <head>
        <style>
            p{
                border-width: 2px; 
                border-style: solid;

            }
        </style>
        </head>
        <body>
            <p>box 1</p>
        </body>
    </html>
    `,
                des2:``,
    
                tips:``,
    
                notes:``
            },
    
                {
                id:"tutorial/css_borders/border_style",
    
                name:`border-style:`,
                
                lang:"css",
    
                height:"500px",
    
                output:true,
    
                des:`
                <p>Is property se border ki style ko set kiya jata hai. yahan kuch common border styles hain:</p>
                <ul>
                    <li><strong>solid:</strong> Ek solid line hoti hai.</li>
                    <li><strong>dotted:</strong> Choti dots ka pattern hota hai.</li>
                    <li><strong>dashed:</strong> Choti dashes ka pattern hota hai.</li>
                    <li><strong>double:</strong> Double line hoti hai.</li>
                    <li><strong>groove:</strong> 3D jaise grooved border hoti hai.</li>
                    <li><strong>ridge:</strong> 3D jaise ridged border hoti hai.</li>
                    <li><strong>inset:</strong> Element ke andar ka border hota hai.</li>
                    <li><strong>outset:</strong> Element ke bahar ka border hota hai.</li>
                    <li><strong>none:</strong> Border nahi hoti hai.</li>
                </ul>`,
    
                
                img:``,
    
                code:
`
.solid {
  border-width: 5px;
  border-style: solid;
}

.dotted {
  border-width: 5px;
  border-style: dotted;
}

.dashed {
  border-width: 5px;
  border-style: dashed;
}

.double {
  border-width: 5px;
  border-style: double;
}

.groove {
  border-width: 5px;
  border-style: groove;
}

.ridge {
  border-width: 5px;
  border-style: ridge;
}

.inset {
  border-width: 5px;
  border-style: inset;
}

.outset {
  border-width: 5px;
  border-style: outset;
}

.none {
  border: none;
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
        border-width: 5px;
        border-style: solid;
      }
    
      .dotted {
        border-width: 5px;
        border-style: dotted;
      }
    
      .dashed {
        border-width: 5px;
        border-style: dashed;
      }
    
      .double {
        border-width: 5px;
        border-style: double;
      }
    
      .groove {
        border-width: 5px;
        border-style: groove;
      }
    
      .ridge {
        border-width: 5px;
        border-style: ridge;
      }
    
      .inset {
        border-width: 5px;
        border-style: inset;
      }
    
      .outset {
        border-width: 5px;
        border-style: outset;
      }
    
      .none {
        border: none;
      }
    
    </style>
    </head>
    <body>
    
    <div class="box solid">Solid Border</div>
    <div class="box dotted">Dotted Border</div>
    <div class="box dashed">Dashed Border</div>
    <div class="box double">Double Border</div>
    <div class="box groove">Groove Border</div>
    <div class="box ridge">Ridge Border</div>
    <div class="box inset">Inset Border</div>
    <div class="box outset">Outset Border</div>
    <div class="box none">No Border</div>
    
    </body>
    </html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
    
                {
                id:"tutorial/css_borders/border_color",
    
                name:`border-color:`,
                
                lang:"css",
    
                height:"80px",
    
                output:true,
    
                des:`
                <p>Ye property border ki color ko define karti hai. Aap isme kisi bhi valid color value ka use kar sakte hain.</p>`,
    
                
                img:``,
    
                code:
`
border-width: 5px;
border-style: solid;
border-color: green; /* green border */`,
                fullCode:
    `<!DOCTYPE html>
    <html>
    <head>
    <style>
      div {
        border-width: 5px;
        border-style: solid;
        border-color: green; /* green border */
      }    
    </style>
    </head>
    <body>
    <div>Box !</div>    
    </body>
    </html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
    
    
                {
                id:"tutorial/css_borders/border_shorthand",
    
                name:`border Shorthand:`,
                
                lang:"css",
    
                height:"80px",
    
                output:true,
    
                des:`
                <p>Border property aapko <strong>border-width</strong>, <strong>border-style</strong>, aur <strong>border-color</strong> ko ek sath set karne ki anumati deta hai.</p>`,
    
                
                img:``,
    
                code:
`border: 2px solid green; /* 2px width, solid style, green color */`,
                fullCode:
    `<!DOCTYPE html>
    <html>
    <head>
    <style>
      div {
        border: 2px solid green; /* 2px width, solid style, green color */
      }    
    </style>
    </head>
    <body>
    <div>Box !</div>    
    </body>
    </html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
    
                {
                id:"tutorial/css_borders/border_radius",
    
                name:`border-radius:`,
                
                lang:"css",
    
                height:"80px",
    
                output:true,
    
                des:`
                <p>Is property se border corners ko round kiya ja sakta hai, aur ye kisi element ke shape ko customize karne me madad karti hai.</p>`,              
                img:``,
    
                code:
`border: 2px solid green;
border-radius: 10px; /* Rounded corners */`,
                fullCode:
    `<!DOCTYPE html>
    <html>
    <head>
    <style>
      div {
        width: 200px;
        padding:5px;
        border: 2px solid green; /* 2px width, solid style, green color */
        border-radius: 10px; /* Rounded corners */
      }    
    </style>
    </head>
    <body>
    <div>Box !</div>    
    </body>
    </html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
    
    
                {
                id:"tutorial/css_borders/border_top,border_right...",
    
                name:`border-top, border-right, border-bottom, border-left:`,
                
                lang:"css",
    
                height:"80px",
    
                output:true,
    
                des:`
                <p>Is property se border corners ko round kiya ja sakta hai, aur ye kisi element ke shape ko customize karne me madad karti hai.</p>`,              
                img:``,
    
                code:
`border-top: 1px solid green; /* Top border */`,
                fullCode:
    `<!DOCTYPE html>
    <html>
    <head>
    <style>
      div {
        border-top: 1px solid green; /* Top border */
      }    
    </style>
    </head>
    <body>
    <div>Box !</div>    
    </body>
    </html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
    
                {
                id:"tutorial/css_borders/border_image",
    
                name:`border-image:`,
                
                lang:"css",
    
                height:"300px",
    
                output:true,
    
                des:`
                <p>Is property se image ko border ke rup me istemal kiya ja sakta hai. Aap ek image URL set kar sakte hain.</p>`,              
                img:``,
    
                code:
`border: 15px solid transparent;
border-image: url('https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_border_image.png') 30 30 repeat; /* Using an image for the border */`,
                fullCode:
    `<!DOCTYPE html>
    <html>
    <head>
    <style>
      div {
        width:200px;
        height: 200px;
		border: 15px solid transparent;
		border-image: url('https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_border_image.png') 30 30 round;
      }    
    </style>
    </head>
    <body>
    <div>Box 1</div>    
    </body>
    </html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
    
                {
                id:"",
    
                name:`border-collapse:`,
                
                lang:"css",
    
                height:"300px",
    
                output:false,
    
                des:`
                <p>Agar aap HTML tables ka istemal kar rahe hain, to is property se table borders ka behavior control kiya ja sakta hai.</p>`,              
                img:``,
    
                code:
`border-collapse: collapse; /* Collapses table borders */`,
                fullCode:
    ``,
                des2:``,
    
                tips:``,
    
                notes:``
            },
    
    
                {
                id:"",
    
                name:`border-spacing`,
                
                lang:"css",
    
                height:"300px",
    
                output:false,
    
                des:`
                <p>Tables me cell ke beech ki spacing ko control karne ke liye is property ka use kiya jata hai.</p>`,              
                img:``,
    
                code:
`border-spacing: 10px; /* Sets spacing between table cells */`,
                fullCode:``,
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