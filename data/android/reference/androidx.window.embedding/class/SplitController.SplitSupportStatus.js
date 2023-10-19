module.exports.SplitController_SplitSupportStatus = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SplitController.SplitSupportStatus",
      hCode: `public final class <a href="#SplitController.SplitSupportStatus">SplitController.SplitSupportStatus</a>`,
  
      des: 
        `
        <p>SplitController.SplitSupportStatus enum class ka use Split-Screen mode ke scenario mein hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek embedded window ko display kiya jata hai.</p>
        
  
        <p>Is enum class ki madad se aap device ke Split-Screen mode ko support status ko check kar sakte hain. Aap dekh sakte hain ki device Split-Screen mode ko support karta hai (SUPPORTED), nahi karta hai (NOT_SUPPORTED), ya phir jaankari available nahi hai (UNKNOWN).</p>
  
       
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

              des: `Is method ka use karke aap SplitSupportStatus object ki details ko readable format mein dekh sakte hain, jisse debugging aur logging ke liye useful ho.`,
  
              longDes: `
              <p>Is method ka use karke aap SplitSupportStatus object ki details ko readable format mein dekh sakte hain, jisse debugging aur logging ke liye useful ho.</p>
              `,

             
              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  