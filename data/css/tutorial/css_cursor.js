module.exports.css_cursor = {
    name:`CSS Cursor`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>CSS <strong>cursor</strong> property, jaise naam se hi suggest karta hai, ek element ke hover state mein mouse pointer ka appearance define karta hai. Is property se aap specify kar sakte hain ki mouse pointer element ke upar le jane par kis tarah ka ho.</p>
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
                id:"tutorial/css_cursor/standar_cursor",
    
                name:`Standard Cursors:`,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <ul>
                <li><strong>auto:</strong> Browser ka default cursor.</li>

                <li><strong>default:</strong> Simple arrow-shaped cursor.</li>
                
                <li><strong>pointer:</strong> Hath ki shape wala cursor, jo clickable elements ke liye hota hai.</li>
                
                <li><strong>progress:</strong> Process chal rahi hai indication ke liye, jaise ki hourglass ya loading spinner.</li>

                <li><strong>text:</strong> Text select karne ke liye I-beam cursor.</li>

                <li><strong>help:</strong> Question mark wala cursor, jo help ya information ke liye hota hai.</li>

                </ul>`,
    
                
                img:``,
                code:
``,
                fullCode:
    ``,
                   des2:``,

                optionExample:{
                   name:`Standard Cursors:`,
                   arr:[
                    { 
                        name:``,
                        code:`cursor: auto;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: auto; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`cursor: default;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: default; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: pointer;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: pointer; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: progress;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: progress; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`cursor: text;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: text; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`cursor: help;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: help; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
           
            {
                id:"tutorial/css_cursor/move_aur_selection",
    
                name:`Move aur Selection:`,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <ul>
                <li><strong>move:</strong> Content move karne ke liye.</li>

                <li><strong>not-allowed:</strong> Circle ke saath line, jo indicate karta hai ki action allowed nahi hai.</li>
                
                <li><strong>grab:</strong> Open hand cursor, jo kuch pakadne ko indicate karta hai.</li>
                
                <li><strong>grabbing:</strong> Closed hand cursor, kuch pakadkar drag karne ko indicate karta hai.</li>
                
                </ul>`,
    
                
                img:``,
                code:
``,
                fullCode:
    ``,
                   des2:``,

                optionExample:{
                   name:`Move aur Selection:`,
                   arr:[
                    { 
                        name:``,
                        code:`cursor: move;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: move; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`cursor: not-allowed;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: not-allowed; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: grab;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: grab; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: grabbing;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: grabbing; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
            {
                id:"tutorial/css_cursor/resizing",
    
                name:`Resizing Cursors:`,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <ul>
                <li><strong>col-resize:</strong> Horizontal double-sided arrow, jo column resize karne ko indicate karta hai.</li>

                <li><strong>row-resize:</strong> Vertical double-sided arrow, jo row resize karne ko indicate karta hai.</li>
                
                <li><strong>nesw-resize:</strong> Diagonal double-sided arrow top right se bottom left tak.</li>
                
                <li><strong>nwse-resize:</strong> Diagonal double-sided arrow top left se bottom right tak.</li>

                <li><strong>ew-resize:</strong> Horizontal double-sided arrow, jo left-right direction mein resize karne ko indicate karta hai.</li>

                <li><strong>ns-resize:</strong> Vertical double-sided arrow, jo up-down direction mein resize karne ko indicate karta hai.</li>
                
                </ul>`,
    
                
                img:``,
                code:
``,
                fullCode:
    ``,
                   des2:``,

                optionExample:{
                   name:`Resizing Cursors:`,
                   arr:[
                    { 
                        name:``,
                        code:`cursor: col-resize;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: col-resize; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`cursor: row-resize;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: row-resize; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: nesw-resize;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: nesw-resize; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: nwse-resize;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: nwse-resize; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`cursor: ew-resize;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: ew-resize; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`cursor: ns-resize;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: ns-resize; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
                   
            {
                id:"tutorial/css_cursor/zoom_cursor",
    
                name:`Zoom Cursors:`,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <ul>
                <li><strong>zoom-in:</strong> Is cursor mein magnifying glass ka icon hota hai, jo zoom in karne ko indicate karta hai.</li>

                <li><strong>zoom-out:</strong> Is cursor mein magnifying glass ka icon hota hai, jo zoom out karne ko indicate karta hai.</li>
                
                </ul>`,
    
                
                img:``,
                code:
``,
                fullCode:
    ``,
                   des2:``,

                optionExample:{
                   name:`Zoom Cursors:`,
                   arr:[
                    { 
                        name:``,
                        code:`cursor: zoom-in;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: zoom-in; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`cursor: zoom-out;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: zoom-out; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
                      
      
            {
                id:"tutorial/css_cursor/special_cursor",
    
                name:`Special Cursors:`,
                
                lang:"css",
    
                height:"250px",
    
                output:false,
    
                des:`
                <ul>
                <li><strong>none:</strong> Cursor ko hide karne ke liye.</li>

                <li><strong>context-menu:</strong> Context menu items ke upar dikhai dene wala cursor.</li>
                
                <li><strong>wait:</strong> Wait ya process ke indication ke liye.</li>

                <li><strong>all-scroll:</strong> Is cursor mein multiple arrows hote hain, jo indicate karte hain ki content ko scroll kar sakte hain.</li>

                <li><strong>copy:</strong> Is cursor mein ek copy icon hota hai, jo copy karne ke action ko indicate karta hai.</li>

                <li><strong>no-drop:</strong> Is cursor mein crossed circle hota hai, jo drop karne ki permission ko deny karta hai.</li>
                
                </ul>`,
    
                
                img:``,
                code:
``,
                fullCode:
    ``,
                   des2:``,

                optionExample:{
                   name:`Special Cursors:`,
                   arr:[
                    { 
                        name:``,
                        code:`cursor: none;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: none; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },

                    { 
                        name:``,
                        code:`cursor: context-menu;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: context-menu; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: wait;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: wait; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: all-scroll;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: all-scroll; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: copy;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: copy; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                    { 
                        name:``,
                        code:`cursor: no-drop;`,

                        fullCode:`<!DOCTYPE html>
                        <html>
                        <head>
                          <style>
                            /* CSS */
                            .cursor-example {
                              width: 200px;
                              height: 100px;
                              border: 2px solid black;
                              cursor: no-drop; /* Cursor property */
                            }
                          </style>
                        </head>
                        <body>
                        
                          <!-- HTML -->
                          <div class="cursor-example">
                            Hover over me!
                          </div>
                        
                        </body>
                        </html>`
                    },
                   ] 
                },
    
                tips:``,
    
                notes:``
            },
    
                      
    
    
        ],
    
        tips:``,
    
        warn:``,
    
        notes:``
    
    
    },

}