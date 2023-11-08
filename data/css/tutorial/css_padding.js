module.exports.css_padding = {
    name:`CSS Padding`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS me <strong>padding</strong> ek property hai jo ek element ke content aur uske border ke beech ka space define karta hai. Ye element ke andar ka space hota hai.</p>

    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_padding/all_side_padding",
    
                name:`All Sides padding:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p><strong>padding</strong> property se ek hi value se element ke sabhi chaaron taraf padding set ki ja sakti hai.</p>`,
    
                
                img:``,
    
                code:
    `padding: 10px; /* 10 pixels padding  all sides */`,
                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    background-color: lightblue;
    padding: 10px; 
  }
</style>
</head>
<body>
  <span class="box">box</span>
</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            
    
            {
                id:"tutorial/css_padding/individual_padding",
    
                name:`Individual Margins:`,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <p>Aap <strong>padding-top</strong>, <strong>padding-right</strong>, <strong>padding-bottom</strong>, aur <strong>padding-left</strong> se har taraf alag-alag padding set kar sakte hain.</p>`,
    
                
                img:``,
    
                code:``,

                fullCode:
``,
                des2:``,

                optionExample:{
                   name:`Individual Padding Example:`,
                   arr:[
                    { 
                        name:``,
                        code:`padding-top: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>   
                        *{
                            margin: 0;
                        }
                          .box {
                            display: inline-block;
                            background-color: lightblue;
                            padding-top: 20px;
                          }
                        </style>
                        </head>
                        <body>
                          <span class="box">Box</span>
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`padding-bottom: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>   
                        *{
                            margin: 0;
                        }
                          .box {
                            background-color: lightblue;
                            padding-bottom: 20px;
                          }
                        </style>
                        </head>
                        <body>
                          <span class="box">Box</span>
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`padding-left: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>  
                        *{
                            margin: 0;
                        }
                          .box {
                            background-color: lightblue;
                            padding-left: 20px;
                          }
                        </style>
                        </head>
                        <body>
                          <span class="box">Box</span>
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`padding-right: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>  
                        *{
                            margin: 0;
                        }
                          .box {
                            background-color: lightblue;
                            padding-right: 20px;
                          }
                        </style>
                        </head>
                        <body>
                          <span class="box">Box</span>
                        </body>
                        </html>`
                    },
                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
            
    
            {
                id:"tutorial/css_padding/horizontal_and_vertical..",
    
                name:`Horizontal and Vertical Paddings:`,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <p><strong>margin-inline</strong> aur <strong>margin-block</strong> properties se horizontal aur vertical paddings ko separately control kiya ja sakta hai.</p>`,
    
                
                img:``,
    
                code:``,

                fullCode:
``,
                des2:``,

                optionExample:{
                   name:`Horizontal & Vertical Padding Example:`,
                   arr:[
                    { 
                        name:``,
                        code:`padding-inline: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>   
                        *{
                            margin: 0;
                        }
                          .box {
                            display: inline-block;
                            background-color: lightblue;
                            padding-inline: 20px;
                            
                          }
                        </style>
                        </head>
                        <body>
                          <span class="box">Box</span>
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`padding-block: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>   
                        *{
                            margin: 0;
                        }
                          .box {
                            display: inline-block;
                            background-color: lightblue;
                            padding-block: 20px;
                          }
                        </style>
                        </head>
                        <body>
                          <span class="box">Box</span>
                        </body>
                        </html>`
                    },
                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
            
    
            
    
            {
                id:"tutorial/css_padding/padding_shorthand",
    
                name:`Padding Shorthand:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Aap <strong>padding</strong> property me ek single value se padding ko shorthand tarike se set kar sakte hain. Ye value chaaron taraf apply hoti hai, clockwise direction se: top, right, bottom, left.</p>`,
    
                
                img:``,
    
                code:`padding: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    display: inline-block;
    background-color: lightblue;
    padding: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */
  }
</style>
</head>
<body>
  <span class="box">box</span>
</body>
</html>`,
                des2:``,

           
                tips:``,
    
                notes:``
            },  
            
    
            {
                id:"tutorial/css_padding/two_value_shorthand",
    
                name:`Two-Value Shorthand: `,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Aap do values se horizontal aur vertical paddings ko set kar sakte hain. Pehla value top/bottom, dusra value right/left ke liye hai.</p>`,
    
                
                img:``,
    
                code:`padding: 10px 30px; /* Top/Bottom 10px, Right/Left 30px */`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    display:inline-block;
    background-color: lightblue;
    padding: 10px 30px; /* Top/Bottom 10px, Right/Left 30px */
  }
</style>
</head>
<body>
  <div class="box">box</div>
</body>
</html>`,
                des2:``,

           
                tips:``,
    
                notes:``
            },  
              
    
            {
                id:"tutorial/css_padding/three_value_shorthand",
    
                name:`Three-Value Shorthand:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Aap teen values se top, right/left, aur bottom ke paddings ko set kar sakte hain.</p>`,
    
                
                img:``,
    
                code:`padding: 10px 20px 30px; /* Top 10px, Right/Left 20px, Bottom 30px */`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    display: inline-block;
    background-color: lightblue;
    padding: 10px 20px 30px; /* Top 10px, Right/Left 20px, Bottom 30px */
  }
</style>
</head>
<body>
  <div class="box">box</div>
</body>
</html>`,
                des2:``,

           
                tips:``,
    
                notes:``
            },  
            
            {
                id:"tutorial/css_padding/percentage_paddings",
    
                name:`Padding Margins:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Aap percentage values ka use karke element ke content ke size ke hisab se padding set kar sakte hain.</p>`,
    
                
                img:``,
    
                code:`padding: 5%; /* Sets 5% padding on all sides */`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    display: inline-block;
    background-color: lightblue;
    padding: 5%; /* Sets 5% padding on all sides */
  }
</style>
</head>
<body>
  <div class="box">box</div>
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