module.exports.DisplayFeatureTesting = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "DisplayFeatureTesting",
      hCode: `public final class <a href="#DisplayFeatureTesting">DisplayFeatureTesting</a>`,
  
      des: 
        `
        <p>DisplayFeatureTesting class ka use display features ko simulate aur test karne ke liye hota hai. Aap is class ka use karke display feature objects ko create aur test kar sakte hain, jisse aap apne UI components ko display features ke sath integrate aur test kar sakte hain.</p>
  
       
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
              name: "createFoldingFeature",
              id: "createFoldingFeature(Activity,int,int,FoldingFeature.State,FoldingFeature.Orientation)",
              dataTypeName: `static final @NonNull FoldingFeature`,
              code: `<a href="#createFoldingFeature(Activity,int,int,FoldingFeature.State,FoldingFeature.Orientation)">createFoldingFeature</a>(
                @NonNull Activity activity,
                @IntRange(from = -1) int center,
                int size,
                @NonNull FoldingFeature.State state,
                @NonNull FoldingFeature.Orientation orientation
            )`,
  
              fullCode: `public static final @NonNull FoldingFeature <a href="#createFoldingFeature(Activity,int,int,FoldingFeature.State,FoldingFeature.Orientation)">createFoldingFeature</a>(
                @NonNull Activity activity,
                @IntRange(from = -1) int center,
                int size,
                @NonNull FoldingFeature.State state,
                @NonNull FoldingFeature.Orientation orientation
            )`,

              des: `Is method ka use folding display feature ko mock karne ke liye hota hai.`,
  
              longDes: `
              <p>Testing scenarios mein, folding display feature ko mock karke test cases ko simulate karne ke liye createFoldingFeature method ka use hota hai. Is method ke through aap test cases mein specific folding display feature ke behavior ko predict aur control kar sakte hain, bina actual folding display ke.</p>
  
              <p>Method FoldingFeature object return karta hai, jo folding display feature ko mock karta hai.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter ek Activity object hai, jiska mock folding display feature represent karega.</p>`,
                      },
                      {
                        dataTypeName: `@IntRange(from = -1) int center`,
                        des:`<p>Yeh parameter ek integer value hai, jisse folding display feature ka center position define hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int size`,
                        des:`<p>Yeh parameter ek integer value hai, jisse folding display feature ka size define hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull FoldingFeature.State state`,
                        des:`<p>Yeh parameter ek FoldingFeature.State enum object hai, jisse folding display feature ka state (open, closed, half-open) set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull FoldingFeature.Orientation orientation`,
                        des:`<p>Yeh parameter ek FoldingFeature.Orientation enum object hai, jisse folding display feature ki orientation (vertical, horizontal) set ki jati hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "createFoldingFeature",
              id: "createFoldingFeature(Rect,int,int,FoldingFeature.State,FoldingFeature.Orientation)",
              dataTypeName: `static final @NonNull FoldingFeature`,
              code: `<a href="#createFoldingFeature(Rect,int,int,FoldingFeature.State,FoldingFeature.Orientation)">createFoldingFeature</a>(
                @NonNull Rect windowBounds,
                @IntRange(from = -1) int center,
                int size,
                @NonNull FoldingFeature.State state,
                @NonNull FoldingFeature.Orientation orientation
            )`,
  
              fullCode: `public static final @NonNull FoldingFeature <a href="#createFoldingFeature(Rect,int,int,FoldingFeature.State,FoldingFeature.Orientation)">createFoldingFeature</a>(
                @NonNull Rect windowBounds,
                @IntRange(from = -1) int center,
                int size,
                @NonNull FoldingFeature.State state,
                @NonNull FoldingFeature.Orientation orientation
            )`,

              des: `Is method ka use folding display feature ko mock karne ke liye hota hai, lekin yahaan window bounds ka use hota hai.`,
  
              longDes: `
              <p>Testing scenarios mein, folding display feature ko mock karke test cases ko simulate karne ke liye createFoldingFeature method ka use hota hai. Is method ke through aap test cases mein specific folding display feature ke behavior ko predict aur control kar sakte hain, bina actual folding display ke.</p>
  
              <p>Method FoldingFeature object return karta hai, jo folding display feature ko mock karta hai.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Rect windowBounds`,
                        des:`<p>Yeh parameter ek Rect object hai, jisme window ke bounds (rectangle dimensions) diye jate hain.</p>`,
                      },
                      {
                        dataTypeName: `@IntRange(from = -1) int center`,
                        des:`<p>Yeh parameter ek integer value hai, jisse folding display feature ka center position define hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int size`,
                        des:`<p>Yeh parameter ek integer value hai, jisse folding display feature ka size define hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull FoldingFeature.State state`,
                        des:`<p>Yeh parameter ek FoldingFeature.State enum object hai, jisse folding display feature ka state (open, closed, half-open) set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull FoldingFeature.Orientation orientation`,
                        des:`<p>Yeh parameter ek FoldingFeature.Orientation enum object hai, jisse folding display feature ki orientation (vertical, horizontal) set ki jati hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

          ],
        },
  
        
      
     
  

      },
    });
  };
  