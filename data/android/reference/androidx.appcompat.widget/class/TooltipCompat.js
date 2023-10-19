module.exports.TooltipCompat = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "TooltipCompat",
      hCode: `public class <a href="#TooltipCompat">TooltipCompat</a>`,
  
      des: 
        `
        <p>Ye class, tooltip functionality ko implement karne ke liye use hoti hai.</p>
        
  
        <p>TooltipCompat class ka use view elements par tooltip ko display karne, tooltip ke appearance ko customize karne, aur tooltip ke interaction events ko handle karne ke liye kiya jata hai.</p>
  
       
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
              name: "setTooltipText",
              id: "setTooltipText()",
              dataTypeName: `static void`,
              code: `<a href="#setTooltipText()">setTooltipText</a>(@NonNull View view, @Nullable CharSequence tooltipText)`,
  
              fullCode: `public static void <a href="#setTooltipText()">setTooltipText</a>(@NonNull View view, @Nullable CharSequence tooltipText)`,

              des: `Is method ka use kisi bhi View object ke liye tooltip text set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use kisi View object ke liye tooltip text set karne ke liye hota hai. Aap View object par tooltip text set kar sakte hain, jisse jab user us element par touch ya hover karega, tooltip dikhayi dega.</p>
  
              <p>onCreateDialog() method subclasses mein override kiya jata hai, jisse specific dialog object create aur customization ki ja sake. Method ka return type Dialog hota hai, jo dialog object ko represent karta hai.</p>
              `,

              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull View view`,
                        des:`<p>View type ka parameter hai, jiska liya gaya view tooltip text ke liye target view hoga.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable CharSequence tooltipText`,
                        des:`<p>CharSequence type ka parameter hai, jisme tooltip text ko define kiya jata hai.</p>`,
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
  