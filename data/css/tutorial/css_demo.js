module.exports.css_demo = {
    name:`CSS Demo`,

    title_img:``,

    // des:{
    //     name:"CSS Tutorial",
    //     url:`https://docsinhindi.s3.ap-south-1.amazonaws.com/csstutorial/css_tutorial.png`
    // },


    des:`
    <p>Yahaan ek basic signup page ka HTML aur CSS demo diya gaya hai, jo internal CSS ka istemal karta hai:</p>
    `,

    
    tips:``,

    warn:``,

    notes:``,

    syntax:[],
    
    points:[],

    points_tips:{
        arr:[
            {
            id:"tutorial/css_demo/signup",

            name:`Signup Page Example With CSS`,

            lang:"markup",

            height:"330px",

            output:true,

            des:``,

            img:``,

            code:
`<!DOCTYPE html>
<html>
<head>
    <title>Signup Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            text-align: center;
        }

        .signup-container {
            background-color: #fff;
            width: 300px;
            padding: 20px;
            margin: 10px auto;
            border-radius: 5px;
            box-shadow: 0px 0px 10px #888888;
        }

        h2 {
            color: #333;
        }

        input{
            width: 90%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="signup-container">
        <h2>Signup</h2>
        <form>
            <input type="text" placeholder="Full Name" name="fullname" required><br>
            <input type="email" placeholder="Email" name="email" required><br>
            <input type="password" placeholder="Password" name="password" required><br>
            <button type="submit">Signup</button>
        </form>
    </div>
</body>
</html>
`,
            fullCode:
`<!DOCTYPE html>
<html>
<head>
    <title>Signup Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            text-align: center;
        }

        .signup-container {
            background-color: #fff;
            width: 300px;
            padding: 20px;
            margin: 10px auto;
            border-radius: 5px;
            box-shadow: 0px 0px 10px #888888;
        }

        h2 {
            color: #333;
        }

        input{
            width: 90%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="signup-container">
        <h2>Signup</h2>
        <form>
            <input type="text" placeholder="Full Name" name="fullname" required><br>
            <input type="email" placeholder="Email" name="email" required><br>
            <input type="password" placeholder="Password" name="password" required><br>
            <button type="submit">Signup</button>
        </form>
    </div>
</body>
</html>
`,
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