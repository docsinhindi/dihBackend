module.exports.css_links = {
    name:`CSS Links`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },

    outputiFrame:
`<!DOCTYPE html>
<html lang="en">
<head>
<style>
button {
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin: 5px;
    border-radius: 5px;
    background-color: transparent;
  }
  
  /* Underline Button */
  .underline-button {
    text-decoration: underline;

  }
  .underline-button:hover {
    color: green;

  }
  
  /* Text Button */
  .text-button {
    background-color: transparent;
    color: blue;
  } 
   .text-button:hover {
    text-decoration: underline;
  }
  
  /* Border Button */
  .border-button {
    border: 1px solid black;
  }
  .border-button:hover {
    background-color: black;
    color: white;
  }
  
  /* Background Button */
  .background-button {
    background-color: lightgray;
    color: white;
  }
  .background-button:hover {
    background-color: green;
    color: white;
  }
</style>
</head>
<body>
  <button class="underline-button">Text Underline Link</button>
  <button class="text-button">Text Link</button>
  <button class="border-button">Link Button</button>
  <button class="background-button">Link Button</button>
</body>
</html>`,

    des:`
    <p>CSS me links ko style karne ke liye kai pseudo-classes (ya selectors) hote hain jo alag-alag link states ko target karte hain. Yeh states hote hain: normal, visited, hover, active, focus. Har state me link ke appearance ko customize kar sakte hain..</p>


    `,


    tips:``,

    warn:``,

    notes:``,

    points:[],

    
    syntax:[],


    
          points_tips:{
            arr:[
                {
                id:"tutorial/css_links/example",
    
                name:`Example:`,
                
                lang:"css",
    
                height:"250px",
    
                output:true,
    
                des:`
                <ul>

                <li><strong>Normal (Link):</strong> Ye wo state hota hai jab link pehli baar visit kiya jata hai ya kisi ne visit nahi kiya ho. Iske liye a tag ka use hota hai.</li>
                
                <li><strong>Visited:</strong> Ye state hota hai jab link pehle se visit kiya gaya hai.</li>
                
                <li><strong>Hover:</strong> Jab mouse link ke upar le jata hai, tab ka style set hota hai.</li>
                
                <li><strong>Active:</strong> Jab link click kiya jata hai, tab ka style set
                
                <li><strong>Focus:</strong> Jab link focus hota hai (keyboard se navigate karte waqt), tab ka style set hota hai.</li>

                </ul>
                `,
    
                
                img:``,
    
                code:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Normal link style */
    a {
      color: blue; /* Link color */
      text-decoration: underline; /* Underline link */
    }

    /* Visited link style */
    a:visited {
      color: purple; /* Visited link color */
    }

    /* Hover effect */
    a:hover {
      color: red; /* Link color on hover */
      text-decoration: none; /* No underline on hover */
    }

    /* Active link style */
    a:active {
      color: green; /* Active link color */
    }

    /* Focused link style */
    a:focus {
        outline: 1px solid red; /* Focus outline */
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <a href="https://www.docsinhindi.com" target="_blank">This is a link</a>

</body>
</html>`,
                fullCode:
`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Normal link style */
    a {
      color: blue; /* Link color */
      text-decoration: underline; /* Underline link */
    }

    /* Visited link style */
    a:visited {
      color: purple; /* Visited link color */
    }

    /* Hover effect */
    a:hover {
      color: red; /* Link color on hover */
      text-decoration: none; /* No underline on hover */
    }

    /* Active link style */
    a:active {
      color: green; /* Active link color */
    }

    /* Focused link style */
    a:focus {
      outline: 1px solid red; /* Focus outline */
    }
  </style>
</head>
<body>

  <!-- HTML -->
  <a href="https://www.docsinhindi.com" target="_blank">This is a link</a>

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