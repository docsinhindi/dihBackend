module.exports.FoldingFeature_OcclusionType = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "FoldingFeature.OcclusionType",
      hCode: `public final class <a href="#FoldingFeature.OcclusionType">FoldingFeature.OcclusionType</a>`,
  
      des: 
        `
        <p>FoldingFeature.OcclusionType enumeration class, FoldingFeature interface ke sath use hota hai. Foldable devices me, jab device fold hota hai, folding mechanism ke specific parts display ko cover karte hain. Occlusion type bataata hai ki folding mechanism ke parts display ko kis tarah se cover karte hain. Isse aap apne UI layout ko foldable device ke design elements ke hisaab se adjust kar sakte hain.</p>
  
       
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
              <p>Is method ka use FoldingFeature.OcclusionType enumeration type ke objects ko string representation mein convert karne mein hota hai. Yeh primarily debugging aur logging ke liye useful hota hai, jab aap chahate hain ki enumeration constants ke names ko easily readable form mein dekh sakein.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  