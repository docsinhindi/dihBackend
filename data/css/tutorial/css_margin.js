module.exports.css_margin = {
    name:`CSS Margin`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS me <strong>margin</strong> ek important property hai jo ek element ke bahar ka space define karta hai. Ye space element ke border aur doosre elements ke beech ka hota hai.</p>

    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_margin/all_side_margin",
    
                name:`All Sides Margin:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p><strong>margin</strong> property ko use karke aap ek hi value se element ke sabhi chaaron taraf margin set kar sakte hain.</p>`,
    
                
                img:``,
    
                code:
    `margin: 20px; /* Applies 10 pixels of margin on all sides */`,
                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin: 20px; /* Applies 10 pixels of margin on all sides */
  }
</style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
                des2:``,
    
                tips:``,
    
                notes:``
            },
            
    
            {
                id:"tutorial/css_margin/individual_margins",
    
                name:`Individual Margins:`,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <p>Aap <strong>margin-top</strong>, <strong>margin-right</strong>, <strong>margin-bottom</strong>, aur <strong>margin-left</strong> se har taraf alag-alag margin set kar sakte hain.</p>`,
    
                
                img:``,
    
                code:``,

                fullCode:
``,
                des2:``,

                optionExample:{
                   name:`Individual Margins Example:`,
                   arr:[
                    { 
                        name:``,
                        code:`margin-top: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>   
                        *{
                            margin: 0;
                        }
                          .box {
                            width: 100px;
                            height: 100px;
                            background-color: lightblue;
                            border-top: 20px solid #F9F9F9;
                          }
                        </style>
                        </head>
                        <body>
                          <div class="box">Box</div>
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`margin-bottom: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>   
                        *{
                            margin: 0;
                        }
                          .box {
                            width: 100px;
                            height: 100px;
                            background-color: lightblue;
                            border-bottom: 20px solid #F9F9F9;
                          }
                        </style>
                        </head>
                        <body>
                          <div class="box">Box</div>
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`margin-left: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>  
                        *{
                            margin: 0;
                        }
                          .box {
                            width: 100px;
                            height: 100px;
                            background-color: lightblue;
                            border-left: 20px solid #F9F9F9;
                          }
                        </style>
                        </head>
                        <body>
                          <div class="box">Box</div>
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`margin-right: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>  
                        *{
                            margin: 0;
                        }
                          .box {
                            width: 100px;
                            height: 100px;
                            background-color: lightblue;
                            border-right: 20px solid #F9F9F9;
                          }
                        </style>
                        </head>
                        <body>
                          <div class="box">Box</div>
                        </body>
                        </html>`
                    },
                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
            
    
            {
                id:"tutorial/css_margin/horizontal_and_vertical..",
    
                name:`Horizontal and Vertical Margins: `,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <p><strong>margin-inline</strong> aur <strong>margin-block</strong> properties se horizontal aur vertical margins ko separately control kiya ja sakta hai.</p>`,
    
                
                img:``,
    
                code:``,

                fullCode:
``,
                des2:``,

                optionExample:{
                   name:`Horizontal & Vertical Margins Example:`,
                   arr:[
                    { 
                        name:``,
                        code:`margin-inline: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>   
                        *{
                            margin: 0;
                        }
                          .box {
                            width: 100px;
                            height: 100px;
                            background-color: lightblue;
                            border-right: 20px solid #F9F9F9;
                            border-left: 20px solid #F9F9F9;
                          }
                        </style>
                        </head>
                        <body>
                          <div class="box">Box</div>
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`margin-block: 20px;`,

                        fullCode:`<!DOCTYPE html>
                        <html">
                        <head>
                        <style>   
                        *{
                            margin: 0;
                        }
                          .box {
                            width: 100px;
                            height: 100px;
                            background-color: lightblue;
                            border-top: 20px solid #F9F9F9;
                            border-bottom: 20px solid #F9F9F9;
                          }
                        </style>
                        </head>
                        <body>
                          <div class="box">Box</div>
                        </body>
                        </html>`
                    },
                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
            
    
            
    
            {
                id:"tutorial/css_margin/margin_shorthand",
    
                name:`Margin Shorthand:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Aap <strong>margin</strong> property me ek single value se margin ko shorthand tarike se set kar sakte hain. Ye value chaaron taraf apply hoti hai, clockwise direction se: top, right, bottom, left.</p>`,
    
                
                img:``,
    
                code:`margin: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */
  }
</style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
                des2:``,

           
                tips:``,
    
                notes:``
            },  
            
    
            {
                id:"tutorial/css_margin/two_value_shorthand",
    
                name:`Two-Value Shorthand: `,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Aap do values se horizontal aur vertical margins ko set kar sakte hain. Pehla value top/bottom, dusra value right/left ke liye hai.</p>`,
    
                
                img:``,
    
                code:`margin: 10px 20px; /* Top/Bottom 10px, Right/Left 20px */`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin: 10px 20px; /* Top/Bottom 10px, Right/Left 20px */
  }
</style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
                des2:``,

           
                tips:``,
    
                notes:``
            },  
              
    
            {
                id:"tutorial/css_margin/three_value_shorthand",
    
                name:`Three-Value Shorthand:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Aap teen values se top, right/left, aur bottom ke margins ko set kar sakte hain.</p>`,
    
                
                img:``,
    
                code:`margin: 10px 20px 30px; /* Top 10px, Right/Left 20px, Bottom 30px */`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin: 10px 20px 30px; /* Top 10px, Right/Left 20px, Bottom 30px */
  }
</style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
                des2:``,

           
                tips:``,
    
                notes:``
            },  
            
            {
                id:"tutorial/css_margin/negative_margins",
    
                name:`Negative Margins:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Negative values ka use karke aap element ko uske normal position se alag le ja sakte hain.</p>`,
    
                
                img:``,
    
                code:`margin-left: -10px; /* Moves element 10 pixels to the left */`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin-left: -10px; /* Moves element 10 pixels to the left */
  }
</style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
                des2:``,

           
                tips:``,
    
                notes:``
            },  
             
            {
                id:"tutorial/css_margin/percentage_margins",
    
                name:`Percentage Margins:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Aap percentage values ka use karke element ke parent container ke relative size ke hisab se margins set kar sakte hain.</p>`,
    
                
                img:``,
    
                code:`margin: 7%; /* Sets 10% margin on all sides */`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin: 7%; /* Sets 10% margin on all sides */
  }
</style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
                des2:``,

           
                tips:``,
    
                notes:``
            },  
            
    
            {
                id:"tutorial/css_margin/auto_margins",
    
                name:`Auto Margins:`,
                
                lang:"css",
    
                height:"150px",
    
                output:true,
    
                des:`
                <p>Auto value se aap element ko horizontally center kar sakte hain.</p>`,
    
                
                img:``,
    
                code:
`margin-left: auto;
margin-right: auto;`,

                fullCode:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>  
  .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin-left: auto;
    margin-right: auto;
  }
</style>
</head>
<body>
  <div class="box"></div>
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