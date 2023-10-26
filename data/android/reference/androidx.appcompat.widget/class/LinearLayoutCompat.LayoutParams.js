module.exports.LinearLayoutCompat_LayoutParams = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "LinearLayoutCompat.LayoutParams",
      hCode: `public class <a href="#LinearLayoutCompat.LayoutParams">LinearLayoutCompat.LayoutParams</a>  extends LinearLayout.LayoutParams`,
  
      des: 
        `
        <p>Ye class LinearLayout.LayoutParams class ka ek subclass hai, jo AppCompat styling aur compatibility features ko support karta hai.</p>


        <p>LinearLayoutCompat.LayoutParams class ka use linear layout ke child views ke layout parameters (layout properties) ko set karne ke liye kiya jata hai. Ye class, linear layout ke child views ko customize karne ke liye various layout properties jaise width, height, gravity, weight, margins, aur padding ko define karne ka flexibility provide karta hai.</p>
  
       
        `,
      img: [
        // {
        //   url: "https://nodejspaladres.s3.ap-south-1.amazonaws.com/uploads/Screenshot_20230313_145029.png",
        //   label: "Action bar",
        //   fig: "Figure 1.",
        // },
      ],

      //
      summary: {
        success: true,
  
        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(ViewGroup.LayoutParams)",
              code: `<a href="#LayoutParams(ViewGroup.LayoutParams)">LayoutParams</a>(ViewGroup.LayoutParams p)`,
              fullCode: `public <a href="#LayoutParams(ViewGroup.LayoutParams)">LayoutParams</a>(ViewGroup.LayoutParams p)`,

              des: `Is constructor ka use, ek existing ViewGroup.LayoutParams object se LinearLayoutCompat.LayoutParams object ko create karne ke liye hota hai.`,

              longDes: `
              <p>LinearLayoutCompat.LayoutParams(ViewGroup.LayoutParams p) constructor ka use, ek existing ViewGroup.LayoutParams object se LinearLayoutCompat.LayoutParams object ko create karne ke liye hota hai. Yadi aap kisi child view ke liye existing ViewGroup.LayoutParams object ko modify karke LinearLayoutCompat.LayoutParams object create karna chahte hain, to aap is constructor ka use kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ViewGroup.LayoutParams p`,
                        des:`<p>Ye parameter ViewGroup.LayoutParams type ka hota hai, jo existing LayoutParams object ko represent karta hai, jise aap LinearLayoutCompat.LayoutParams object mein convert karna chahte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(ViewGroup.MarginLayoutParams)",
              code: `<a href="#LayoutParams(ViewGroup.MarginLayoutParams)">LayoutParams</a>(ViewGroup.MarginLayoutParams source)`,
              fullCode: `public <a href="#LayoutParams(ViewGroup.MarginLayoutParams)">LayoutParams</a>(ViewGroup.MarginLayoutParams source)`,

              des: `Is constructor ka use, ek existing ViewGroup.MarginLayoutParams object se LinearLayoutCompat.LayoutParams object ko create karne ke liye hota hai.`,

              longDes: `
              <p>LayoutParams(ViewGroup.MarginLayoutParams source) constructor ka use, ek existing ViewGroup.MarginLayoutParams object se LinearLayoutCompat.LayoutParams object ko create karne ke liye hota hai. Yadi aap kisi child view ke liye existing ViewGroup.MarginLayoutParams object ko modify karke LinearLayoutCompat.LayoutParams object create karna chahte hain, to aap is constructor ka use kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ViewGroup.MarginLayoutParams source`,
                        des:`<p>Ye parameter ViewGroup.MarginLayoutParams type ka hota hai, jo existing MarginLayoutParams object ko represent karta hai, jise aap LinearLayoutCompat.LayoutParams object mein convert karna chahte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(Context,AttributeSet)",
              code: `<a href="#LayoutParams(Context,AttributeSet)">LayoutParams</a>(Context c, AttributeSet attrs)`,
              fullCode: `public <a href="#LayoutParams(Context,AttributeSet)">LayoutParams</a>(Context c, AttributeSet attrs)`,

              des: `Is constructor ka use, LinearLayoutCompat view group ke child views ke liye layout parameters (LayoutParams) ko XML layout file mein define karne ke liye hota hai.`,

              longDes: `
              <p>LayoutParams(Context c, AttributeSet attrs) constructor ka use, LinearLayoutCompat view group ke child views ke liye layout parameters ko XML layout file mein define karne ke liye hota hai. Jab aap LinearLayoutCompat view group ke child views ko XML layout file mein add karte hain, to aap unhe layout parameters ke saath define kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context c`,
                        des:`<p>Ye parameter Context type ka hota hai, jo current context ko represent karta hai. Iska use layout parameters object ko create karne ke liye hota hai.</p>`,
                      },
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>Ye parameter AttributeSet type ka hota hai, jo XML layout file mein specify kiye gaye attributes ko represent karta hai, jo child view ke liye layout properties ko define karte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(int,int)",
              code: `<a href="#LayoutParams(int,int)">LayoutParams</a>(int width, int height)`,
              fullCode: `public <a href="#LayoutParams(int,int)">LayoutParams</a>(int width, int height)`,

              des: `Is constructor ka use, LinearLayoutCompat view group ke child views ke liye layout parameters (LayoutParams) ko programmatic tarike se define karne ke liye hota hai.`,

              longDes: `
              <p>LayoutParams(int width, int height) constructor ka use, LinearLayoutCompat view group ke child views ke liye layout parameters ko programmatic tarike se define karne ke liye hota hai. Yadi aap child view ke liye specific width aur height values ko set karna chahte hain, to aap is constructor ka use kar sakte hain.</p>

              <p>Is constructor ke through aap directly LinearLayoutCompat.LayoutParams object ko create kar sakte hain, aur usme specific width aur height values ko set kar sakte hain, jo child view ko desired size mein layout karne me madad karte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int width`,
                        des:`<p>Ye parameter int type ka hota hai, jo child view ke width ko represent karta hai. Isme width value ya LayoutParams.MATCH_PARENT (equal to -1) ya LayoutParams.WRAP_CONTENT (equal to -2) specify kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int height`,
                        des:`<p>Ye parameter int type ka hota hai, jo child view ke height ko represent karta hai. Isme height value ya LayoutParams.MATCH_PARENT (equal to -1) ya LayoutParams.WRAP_CONTENT (equal to -2) specify kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `LayoutParams`,
              id: "LayoutParams(int,int,float)",
              code: `<a href="#LayoutParams(int,int,float)">LayoutParams</a>(int width, int height, float weight)`,
              fullCode: `public <a href="#LayoutParams(int,int,float)">LayoutParams</a>(int width, int height, float weight)`,

              des: `Is constructor ka use, LinearLayoutCompat view group ke child views ke liye layout parameters (LayoutParams) ko programmatic tarike se define karne ke liye hota hai, jisme specific width, height, aur weight values set kiye jate hain.`,

              longDes: `
              <p>LayoutParams(int width, int height, float weight) constructor ka use, LinearLayoutCompat view group ke child views ke liye layout parameters ko programmatic tarike se define karne ke liye hota hai. Yadi aap child view ke liye specific width, height, aur weight values ko set karna chahte hain, to aap is constructor ka use kar sakte hain.</p>

              <p>Is constructor ke through aap directly LinearLayoutCompat.LayoutParams object ko create kar sakte hain, aur usme specific width, height, aur weight values ko set kar sakte hain. Weight property linear layout mein use hota hai child views ko unke available space ke hisaab se adjust karne ke liye. Weight ka value 0 se greater than 0 tak hota hai, jisse linear layout un child views ko relative weights ke hisaab se allocate karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int width`,
                        des:`<p>Ye parameter int type ka hota hai, jo child view ke width ko represent karta hai. Isme width value ya LayoutParams.MATCH_PARENT (equal to -1) ya LayoutParams.WRAP_CONTENT (equal to -2) specify kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int height`,
                        des:`<p>Ye parameter int type ka hota hai, jo child view ke height ko represent karta hai. Isme height value ya LayoutParams.MATCH_PARENT (equal to -1) ya LayoutParams.WRAP_CONTENT (equal to -2) specify kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `float weight`,
                        des:`<p>Ye parameter float type ka hota hai, jo child view ke weight ko represent karta hai. Weight value 0 se greater than 0 tak hota hai. Yadi weight 0 hai to view ko koi weight nahi milta hai aur uska size wrap_content ke according set hota hai. Yadi weight 0 se bada hai to views ko available space ke hisaab se relative weights milte hain, aur linear layout unhe weights ke hisaab se allocate karta hai.</p>`,
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
  