module.exports.SplitAttributes_LayoutDirection = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitAttributes.LayoutDirection",
      hCode: `public final class <a href="#SplitAttributes.LayoutDirection">SplitAttributes.LayoutDirection</a>`,
  
      des: 
        `
        <p>SplitAttributes.LayoutDirection enum class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek embedded window ko display kiya jata hai.</p>
        
  
        <p>Is enum class ki madad se aap embedded window ki layout direction ko specify kar sakte hain. Layout direction ka chunav left-to-right (LTR) ya right-to-left (RTL) ke beech mein kiya ja sakta hai.</p>
  
       
        `,
      img: [
        // {
        //   url: "https://nodejspaladres.s3.ap-south-1.amazonaws.com/uploads/Screenshot_20230313_145029.png",
        //   label: "Action bar",
        //   fig: "Figure 1.",
        // },
      ],
      summary: {
        success: true,
  
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "toString",
              id: "toString()",
              dataTypeName: `@NonNull String`,
              code: `<a href="#toString()">toString</a>()`,
  
              fullCode: `public @NonNull String <a href="#toString()">toString</a>()`,

              des: `Is method ki madad se aap enum type ke values ko string format mein dekh sakte hain.`,
  
              longDes: `
              <p>toString() method ka use LayoutDirection enum type ke object ko string format mein dekhne ke liye hota hai. Aap ise debugging, logging, aur display purposes ke liye istemal kar sakte hain.</p>
  
              <p>Method ka return type String hota hai, yani ki ek string value jo enum type ke object ko string format mein represent karta hai.</p>
              `,
              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  