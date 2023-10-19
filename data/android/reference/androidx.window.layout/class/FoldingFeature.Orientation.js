module.exports.FoldingFeature_Orientation = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "FoldingFeature.Orientation",
      hCode: `public final class <a href="#FoldingFeature.Orientation">FoldingFeature.Orientation</a>`,
  
      des: 
        `
        <p>FoldingFeature.Orientation enumeration class, FoldingFeature interface ke sath use hota hai. Foldable devices me, folding mechanism ka orientation batata hai ki device ko kis direction mein fold kiya ja sakta hai. Isse aap apne UI layout ko foldable device ke design elements ke hisaab se adjust kar sakte hain.</p>
  
       
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

              des: `Yeh method ek String object return karta hai, jo enumeration constant ka string representation hota hai.`,
  
              longDes: `
              <p>Is method ka use FoldingFeature.Orientation enumeration type ke objects ko string representation mein convert karne mein hota hai. Yeh primarily debugging aur logging ke liye useful hota hai, jab aap chahate hain ki enumeration constants ke names ko easily readable form mein dekh sakein.</p>
              `,
 
              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  