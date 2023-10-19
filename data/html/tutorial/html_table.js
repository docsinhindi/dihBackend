module.exports.html_table ={
    name:`HTML Table`,


    titleImg:[
        {
            id:"i-1",
            name:"Contact Us Form",
            url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html_banner.svg"
        }
    ],


    des:`
    <p>HTML me table ek important element hai jo data ko organized tarike se display karta hai. Tables rows aur columns se bani hoti hain jise cells kehte hain.</p>
       

    `,

    points:[
        {
            id:`tutorial/html_table/basic_table`,
            name:`Basic Table:`,

            des:`
           <p>Simplest form of table jo rows aur columns se bani hoti hai. Isme data ko organized tarike se display kiya jata hai.</p>
            
            `,

            code:
`<table border="1">
<tr>
  <th>Heading 1</th>
  <th>Heading 2</th>
</tr>
<tr>
  <td>Data 1</td>
  <td>Data 2</td>
</tr>
</table>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },




        {
            id:`tutorial/html_table/borderless_table`,
            name:`Borderless Table:`,

            des:`
           <p>Isme table ke borders nahi hote hain, sirf content display hota hai.</p>
            
            `,

            code:
`<table border="0">
<tr>
  <th>Heading 1</th>
  <th>Heading 2</th>
</tr>
<tr>
  <td>Data 1</td>
  <td>Data 2</td>
</tr>
</table>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },



        {
            id:`tutorial/html_table/cellpadding_and_cellsplacing`,
            name:`Cellpadding and Cellspacing:`,

            des:`
           <p><strong>cellpadding</strong> aur <strong>cellspacing</strong> properties se cell ke content aur cell ke border ke beech ka space set kiya jata hai.</p>
            
            `,

            code:
`<table border="1" cellpadding="10" cellspacing="5">
<tr>
  <th>Heading 1</th>
  <th>Heading 2</th>
</tr>
<tr>
  <td>Data 1</td>
  <td>Data 2</td>
</tr>
</table>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },



        {
            id:`tutorial/html_table/colspan_and_rowspan`,
            name:`Colspan and Rowspan:`,

            des:`
           <p><strong>colspan</strong> se ek cell ko kai columns tak extend kiya ja sakta hai, jabki <strong>rowspan</strong> se ek cell ko kai rows tak extend kiya ja sakta hai.</p>
            
            `,

            code:
`<table border="1">
<tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
</tr>
<tr>
    <td rowspan="2">Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
    <td>Row 1, Column 3</td>
</tr>
<tr>
    <td colspan="2">Row 2, Column 2 and 3</td>
</tr>
</table>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },



        {
            id:`tutorial/html_table/nested_tables`,
            name:`Nested Tables:`,

            des:`
           <p>Ek table ke andar doosri table hoti hai.</p>
            
            `,

            code:
`<table border="1">
<tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
</tr>
<tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
    <td>Row 1, Column 3</td>
</tr>
<tr>
    <td colspan="3">
        <h3>Nested Table</h3>
        <table border="1">
            <tr>
                <th>Header A</th>
                <th>Header B</th>
            </tr>
            <tr>
                <td>Row 2, Column A</td>
                <td>Row 2, Column B</td>
            </tr>
            <tr>
                <td>Row 3, Column A</td>
                <td>Row 3, Column B</td>
            </tr>
        </table>
    </td>
</tr>
</table>
`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },



        {
            id:`tutorial/html_table/table_header_body_and_footer`,
            name:`Table Header, Body and Footer`,

            des:`
           <p><strong>&lt;thead&gt;</strong>, <strong>&lt;tbody&gt;</strong>, aur <strong>&lt;tfoot&gt;</strong> elements se table ke parts ko organize kiya jata hai.</p>
            
            `,

            code:
`<table border="1">
<thead>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</tbody>
<tfoot>
  <tr>
    <td>Footer 1</td>
    <td>Footer 2</td>
  </tr>
</tfoot>
</table>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },



        {
            id:`tutorial/html_table/table_with_caption`,
            name:`Table with Caption`,

            des:``,

            code:
`<!DOCTYPE html>
<html>
<head>
    <title>Table with Caption</title>
</head>
<body>

<h2>Employee Information</h2>

<table border="1">
    <caption>Employee Details</caption>
    <tr>
        <th>Employee ID</th>
        <th>Name</th>
        <th>Department</th>
        <th>Salary</th>
    </tr>
    <tr>
        <td>101</td>
        <td>John Doe</td>
        <td>HR</td>
        <td>$50,000</td>
    </tr>
    <tr>
        <td>102</td>
        <td>Jane Smith</td>
        <td>Marketing</td>
        <td>$45,000</td>
    </tr>
    <tr>
        <td>103</td>
        <td>Bob Johnson</td>
        <td>Finance</td>
        <td>$55,000</td>
    </tr>
</table>

</body>
</html>`,

            des2:
            ``,
            
            img:{
                id:"",
                url:"",
                name:""
            },

            tips:[]
        },


    ],

    desImg:[
        // {
        //     id:"i-2",
        //     name:"Contact Us Form",
        //     url:"https://nodejspaladres.s3.ap-south-1.amazonaws.com/html/tutorial/contact_us_form.png"
        // }
    ],




    example:[
    //  {
    //     id:"tutorial/html_demo/simple_form",
    //     name:"Simple Form:",
    //     code:
    //     `<!DOCTYPE html>
    //     <html>
    //     <head>
    //         <title>Simple Form</title>
    //     </head>
    //     <body>
    //         <h1>Contact Us</h1>
    //         <form action="/submit" method="post">
    //             <label for="name">Name:</label>
    //             <input type="text" id="name" name="name"><br><br>
    //             <label for="email">Email:</label>
    //             <input type="email" id="email" name="email"><br><br>
    //             <input type="submit" value="Submit">
    //         </form>
    //     </body>
    //     </html>
    //     `,
    //     des:`Is example me ek basic contact form hai jo user se naam aur email address collect karta hai.`,
       
    //     img:{
    //         id:"",
    //         url:"",
    //         name:""
    //     },

    //     tips:{}
    //  },
    ]
 
}