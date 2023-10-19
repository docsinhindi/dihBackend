module.exports.WindowAreaCapability_Operation = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaCapability.Operation",
      hCode: `@ExperimentalWindowApi</br>public final class <a href="#WindowAreaCapability.Operation">WindowAreaCapability.Operation</a>`,
  
      des: 
        `
        <p>Is class ka use, WindowAreaCapability class ke through Window Area capabilities ke supported operations ko represent karne ke liye hota hai.</p>
        
  
        <p>WindowAreaCapability class, devices ke alag-alag areas ke capabilities ko encapsulate karti hai, jaise ki area ki size, density, folding support, display cutouts support, etc. Har ek capability ke liye, supported operations define kiye jate hain, jo ye bataate hain ki us particular capability ko kis tarah use aur access kiya ja sakta hai.</p>

        <p>Is class ka use, WindowAreaCapability class ke through devices ke capabilities ke supported operations ko check aur handle karne ke liye hota hai. Aap is class ke constants ka use karke ek capability ke liye operation status ko verify kar sakte hain.</p>
  
       
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

              des: `toString() method, WindowAreaCapability.Operation object ko ek human-readable string mein represent karne ke liye use hota hai.`,
  
              longDes: `
              <p>toString() method, WindowAreaCapability.Operation object ko ek human-readable string mein represent karne ke liye use hota hai. Ye string, WindowAreaCapability.Operation object ke sabhi properties ko display karti hai.</p>
  
              <p>toString() method @NonNull String type ka return karta hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
         

      },
    });
  };
  