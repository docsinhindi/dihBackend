module.exports.WindowAreaInfo_Type = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaInfo.Type",
      hCode: `@ExperimentalWindowApi</br>public final class <a href="#WindowAreaInfo.Type">WindowAreaInfo.Type</a>`,
  
      des: 
        `
        <p>Is class ka use, window area ke type ko represent karne ke liye hota hai. Window area ek rectangular region hota hai, jo device screen par display hota hai. Window area ke type se hum ye jaan sakte hain ki window area kis tarah ka hai, jaise foldable, hinge, cutout, etc.</p>
  
       
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

              des: `toString() method, WindowAreaInfo.Type object ko ek human-readable string mein represent karne ke liye use hota hai. Ye string, WindowAreaInfo.Type object ke value ko display karti hai.`,
  
              longDes: `
              <p>toString() method, WindowAreaInfo.Type object ko ek human-readable string mein represent karne ke liye use hota hai. Ye string, WindowAreaInfo.Type object ke value ko display karti hai.</p>

              <p>toString() method @NonNull String type ka return karta hai.</p>
              `,
 
              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  