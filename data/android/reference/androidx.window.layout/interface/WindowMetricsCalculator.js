module.exports.WindowMetricsCalculator = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowMetricsCalculator",
      hCode: "public interface <a href='#WindowMetricsCalculator'>WindowMetricsCalculator</a>",
  
      des:`
      <p>WindowMetricsCalculator interface ka use display metrics aur window layout information ko calculate aur provide karne ke liye hota hai. Iska use karke aap current screen size, display metrics, aur window layout information ko retrieve kar sakte hain, jisse aap UI elements ko optimize aur render kar sakte hain.</p>
      `,
      
      img: [],
  
      list: {},
  
      summary: {
        success: true,
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "computeCurrentWindowMetrics",
              id: "computeCurrentWindowMetrics(Activity)",
              dataTypeName: `abstract @NonNull WindowMetrics`,
              code: `<a href="#computeCurrentWindowMetrics(Activity)">computeCurrentWindowMetrics</a>(@NonNull Activity activity)`,
  
              fullCode: `abstract @NonNull WindowMetrics <a href="#computeCurrentWindowMetrics(Activity)">computeCurrentWindowMetrics</a>(@NonNull Activity activity)`,

              des: `Is method ka use current window metrics ko calculate aur retrieve karne ke liye hota hai. Window metrics screen ke dimensions, layout properties, aur related information ko represent karte hain.`,
  
              longDes: `
              <p>Is method ka use WindowMetricsCalculator interface ke implementers (classes) mein hota hai. Implementers ko computeCurrentWindowMetrics() method ko implement karna hota hai taki woh specific tarike se current window metrics ko calculate aur provide kar sake.</p>

              <p>Current window metrics ko calculate karke retrieve karne se app developers ko screen ke dimensions, layout properties, aur related information ka pata lagta hai. Isse app UI optimization, responsive design, aur layout management ko handle karne mein madad milti hai.</p>

              <p>Yeh method WindowMetrics object return karta hai, jo current window metrics ko represent karta hai. Window metrics dimensions, layout properties, aur related information ko provide karte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Activity activity`,
                      des: `<p>Yeh parameter ek Activity object hai jiske context mein current window metrics calculate kiye jayenge.</p>`,
                    },
                  ],
                },
              ],
            },


            {
              dep: false,
              name: "computeCurrentWindowMetrics",
              id: "computeCurrentWindowMetrics(Context)",
              dataTypeName: `default @NonNull WindowMetrics`,
              code: `<a href="#computeCurrentWindowMetrics(Context)">computeCurrentWindowMetrics</a>(@UiContext @NonNull Context context)`,
  
              fullCode: `default @NonNull WindowMetrics <a href="#computeCurrentWindowMetrics(Context)">computeCurrentWindowMetrics</a>(@UiContext @NonNull Context context)`,

              des: `Is method ka use current window metrics ko calculate aur retrieve karne ke liye hota hai, jisse screen ke dimensions, layout properties, aur related information mil sake.`,
  
              longDes: `
              <p>Is method ka use WindowMetricsCalculator interface ke implementers (classes) mein hota hai. Implementers ko computeCurrentWindowMetrics() method ko implement karna hota hai taki woh specific tarike se current window metrics ko calculate aur provide kar sake.</p>

              <p>Current window metrics ko calculate karke retrieve karne se app developers ko screen ke dimensions, layout properties, aur related information ka pata lagta hai. Isse app UI optimization, responsive design, aur layout management ko handle karne mein madad milti hai.</p>

              <p>Yeh method WindowMetrics object return karta hai, jo current window metrics ko represent karta hai. Window metrics dimensions, layout properties, aur related information ko provide karte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@UiContext @NonNull Context context`,
                      des: `<p>Yeh parameter ek Context object hai jiske context mein current window metrics calculate kiye jayenge. Isme @UiContext annotation bhi mention ki gayi hai, jo context ko UI thread se associate karta hai.</p>`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "computeMaximumWindowMetrics",
              id: "computeMaximumWindowMetrics(Activity)",
              dataTypeName: `abstract @NonNull WindowMetrics`,
              code: `<a href="#computeMaximumWindowMetrics(Activity)">computeMaximumWindowMetrics</a>(@NonNull Activity activity)`,
  
              fullCode: `abstract @NonNull WindowMetrics <a href="#computeMaximumWindowMetrics(Activity)">computeMaximumWindowMetrics</a>(@NonNull Activity activity)`,

              des: `Is method ka use maximum window metrics ko calculate aur retrieve karne ke liye hota hai, jisse screen ke maximum dimensions, layout properties, aur related information mil sake.`,
  
              longDes: `
              <p>Is method ka use WindowMetricsCalculator interface ke implementers (classes) mein hota hai. Implementers ko computeMaximumWindowMetrics() method ko implement karna hota hai taki woh specific tarike se maximum window metrics ko calculate aur provide kar sake.</p>

              <p>Maximum window metrics ko calculate karke retrieve karne se app developers ko screen ke maximum dimensions, layout properties, aur related information ka pata lagta hai. Isse app UI optimization, responsive design, aur layout management ko handle karne mein madad milti hai.</p>

              <p>Yeh method WindowMetrics object return karta hai, jo maximum window metrics ko represent karta hai. Maximum window metrics dimensions, layout properties, aur related information ko provide karte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Activity activity`,
                      des: `<p>Yeh parameter ek Activity object hai jiske context mein maximum window metrics calculate kiye jayenge.</p>`,
                    },
                  ],
                },
              ],
            },




            {
              dep: false,
              name: "computeMaximumWindowMetrics",
              id: "computeMaximumWindowMetrics(Context)",
              dataTypeName: `default @NonNull WindowMetrics`,
              code: `<a href="#computeMaximumWindowMetrics(Context)">computeMaximumWindowMetrics</a>(@UiContext @NonNull Context context)`,
  
              fullCode: `default @NonNull WindowMetrics <a href="#computeMaximumWindowMetrics(Context)">computeMaximumWindowMetrics</a>(@UiContext @NonNull Context context)`,

              des: `Is method ka use maximum window metrics ko calculate aur retrieve karne ke liye hota hai, jisse screen ke maximum dimensions, layout properties, aur related information mil sake.`,
  
              longDes: `
              <p>Is method ka use WindowMetricsCalculator interface ke implementers (classes) mein hota hai. Implementers ko computeMaximumWindowMetrics() method ko implement karna hota hai taki woh specific tarike se maximum window metrics ko calculate aur provide kar sake.</p>

              <p>Maximum window metrics ko calculate karke retrieve karne se app developers ko screen ke maximum dimensions, layout properties, aur related information ka pata lagta hai. Isse app UI optimization, responsive design, aur layout management ko handle karne mein madad milti hai.</p>

              <p>Yeh method WindowMetrics object return karta hai, jo maximum window metrics ko represent karta hai. Maximum window metrics dimensions, layout properties, aur related information ko provide karte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@UiContext @NonNull Context context`,
                      des: `<p>Yeh parameter ek Context object hai jiske context mein maximum window metrics calculate kiye jayenge. Isme @UiContext annotation bhi mention ki gayi hai, jo context ko UI thread se associate karta hai.</p>`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "getOrCreate",
              id: "getOrCreate()",
              dataTypeName: `default static final @NonNull WindowMetricsCalculator`,
              code: `<a href="#getOrCreate()">getOrCreate</a>()`,
  
              fullCode: `default static final @NonNull WindowMetricsCalculator <a href="#getOrCreate()">getOrCreate</a>()`,

              des: `Is method ka use window metrics calculator instance ko create ya retrieve karne ke liye hota hai. Window metrics calculator, screen ke dimensions aur related information ko calculate aur provide karta hai.`,
  
              longDes: `
              <p>Is method ka use WindowMetricsCalculator interface ke implementers (classes) mein hota hai. Implementers ko getOrCreate() method ko implement karna hota hai taki woh specific tarike se window metrics calculator instance ko create ya retrieve kar sake.</p>

              <p>Window metrics calculator ki madad se app developers ko screen ke dimensions, layout properties, aur related information ko calculate karne mein madad milti hai. Isse app UI optimization, responsive design, aur layout management ko handle karne mein help milti hai.</p>

              <p>Yeh method ek WindowMetricsCalculator object return karta hai, jo window metrics calculator ko represent karta hai.</p>
              `,
  
              parameter: [],
            },




          ],
        },
      },
    });
  };
  