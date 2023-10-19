module.exports.WindowInfoTracker = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowInfoTracker",
      hCode: "public interface <a href='#WindowInfoTracker'>WindowInfoTracker</a>",
  
      des:`
      <p>WindowInfoTracker interface ka use screen space mein window layouts ke changes ko track karne ke liye hota hai. Iska use karke aap windows ke layout changes ko capture kar sakte hain aur unhe handle kar sakte hain, jaise ki windows ke positions, sizes, visibility, etc.</p>
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
              name: "getOrCreate",
              id: "getOrCreate()",
              dataTypeName: `default static final @NonNull WindowInfoTracker`,
              code: `<a href="#getOrCreate()">getOrCreate</a>(@NonNull Context context)`,
  
              fullCode: `default static final @NonNull WindowInfoTracker <a href="#getOrCreate()">getOrCreate</a>(@NonNull Context context)`,

              des: `Is method ka use ek window info tracker instance ko create ya retrieve karne ke liye hota hai. Window info tracker, device ke screen par dikh rahe windows aur unki properties ko track karta hai.`,
  
              longDes: `
              <p>Is method ka use WindowInfoTracker interface ke implementers (classes) mein hota hai. Implementers ko is method ko implement karna hota hai taki woh specific tarike se window info tracker instance create ya retrieve kar sake.</p>

              <p>Window info tracker ki madad se app developers ko screen par dikh rahe windows aur unki properties (jaise ki positions, sizes, visibility) ko monitor karne mein madad milti hai. Isse app UI optimization, layout management, aur transitions ko handle karne mein help milti hai.</p>

              <p>Yeh method ek WindowInfoTracker object return karta hai, jo windows ki information tracking karta hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Context context`,
                      des: `<p>Yeh parameter ek Context object hai jiske context mein window info tracker instance create kiya jayega.</p>`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "windowLayoutInfo",
              id: "windowLayoutInfo(Activity)",
              dataTypeName: `abstract @NonNull Flow<@NonNull WindowLayoutInfo>`,
              code: `<a href="#windowLayoutInfo(Activity)">windowLayoutInfo</a>(@NonNull Activity activity)`,
  
              fullCode: `abstract @NonNull Flow<@NonNull WindowLayoutInfo> <a href="#windowLayoutInfo(Activity)">windowLayoutInfo</a>(@NonNull Activity activity)`,

              des: `Is method ka use ek Flow object ko retrieve karne ke liye hota hai jo WindowLayoutInfo type ki windows ke layout information ko emit karta hai. Flow Kotlin programming language ka concept hai jo asynchronous stream of data emit karta hai, jisse real-time updates aur event handling possible ho jata hai.`,
  
              longDes: `
              <p>Is method ka use WindowInfoTracker interface ke implementers (classes) mein hota hai. Implementers ko is method ko implement karna hota hai taki woh specific tarike se window layout information updates ko provide kar sake.</p>

              <p>Flow<WindowLayoutInfo> object ki madad se app developers ko real-time window layout information updates ko observe karne ka mauka milta hai. Isse app UI optimization, layout management, aur transitions ko handle karne mein help milti hai.</p>

              <p>Yeh method ek Flow object return karta hai, jo windows ke layout information ko emit karta hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Activity activity`,
                      des: `<p>Yeh parameter ek Activity object hai jiske context mein window layout information ke changes ko monitor kiya jayega.</p>`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "windowLayoutInfo",
              id: "windowLayoutInfo(Context)",
              dataTypeName: `default @NonNull Flow<@NonNull WindowLayoutInfo>`,
              code: `<a href="#windowLayoutInfo(Context)">windowLayoutInfo</a>(@UiContext @NonNull Context context)`,
  
              fullCode: `default @NonNull Flow<@NonNull WindowLayoutInfo> <a href="#windowLayoutInfo(Context)">windowLayoutInfo</a>(@UiContext @NonNull Context context)`,

              des: `Is method ka use window layout information ke updates ko monitor karne ke liye hota hai. Window layout information screen par dikh rahe windows ki positions, sizes, aur related properties ko represent karta hai.`,
  
              longDes: `
              <p>Is method ka use WindowInfoTracker interface ke implementers (classes) mein hota hai. Implementers ko windowLayoutInfo() method ko implement karna hota hai taki woh window layout information updates ko provide kar sake.</p>

              <p>Window layout information updates ko observe karne se app developers ko screen par dikh rahe windows ke dimensions, positions, aur related properties ke changes ka pata lagta hai. Isse app UI optimization, responsive design, aur animations ko handle karne mein madad milti hai.</p>

              <p>Yeh method ek Flow object return karta hai, jisse window layout information updates ko observe kiya ja sakta hai. Flow Android Jetpack library ka ek component hai jo asynchronous data streams ko represent karta hai. WindowLayoutInfo object window layout information ko represent karta hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@UiContext @NonNull Context context`,
                      des: `<p>Yeh parameter ek Context object hai jiske context mein window layout information updates ko monitor kiya jayega. Isme @UiContext annotation bhi mention ki gayi hai, jo context ko UI thread se associate karta hai.</p>`,
                    },
                  ],
                },
              ],
            },
//


          ],
        },


        
      extensionFunctions: {
        success: true,
        name: "Extension functions",

        method: [
          {
            dep: false,
            name: "WindowInfoTrackerRx.windowLayoutInfoFlowable",
            id: "WindowInfoTrackerRx.windowLayoutInfoFlowable(WindowInfoTracker,Activity)",
            dataTypeName: `final @NonNull Flowable<@NonNull WindowLayoutInfo>`,
            code: `<a href="#WindowInfoTrackerRx.windowLayoutInfoFlowable(WindowInfoTracker,Activity)">WindowInfoTrackerRx.windowLayoutInfoFlowable</a>(
              @NonNull WindowInfoTracker receiver,
              @NonNull Activity activity
          )`,

            fullCode: `public final @NonNull Flowable<@NonNull WindowLayoutInfo> <a href="#WindowInfoTrackerRx.windowLayoutInfoFlowable(WindowInfoTracker,Activity)">WindowInfoTrackerRx.windowLayoutInfoFlowable</a>(
              @NonNull WindowInfoTracker receiver,
              @NonNull Activity activity
          )`,

            des: `Is function ka use window layout information ko track karna aur publish karna hota hai reactive programming ke context mein.`,

            longDes: `
            <p>Is extension function ka use window layout information ko reactive programming ke concept mein track karne aur publish karne ke liye hota hai. Flowable ek reactive stream hoti hai, jo continuous data changes ko represent karti hai.</p>

            <p>Aap is function ko use karke window layout information ko subscribe kar sakte hain aur uske changes ko observe kar sakte hain. Jab bhi window layout information change hoti hai, Flowable usko emit karta hai aur aap us change ko handle kar sakte hain.</p>

            <p>Function Flowable<WindowLayoutInfo> return karta hai, jo window layout information ko emit karta hai reactive stream mein.</p>
            `,
 

            parameter: [
              {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull WindowInfoTracker receiver`,
                      des:`<p>Yeh parameter ek WindowInfoTracker object hai, jiska use window layout information ko track karne ke liye hota hai.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull Activity activity`,
                      des:`<p>Yeh parameter ek Activity object hai, jiska context provide karta hai window layout information track karne ke liye.</p>`,
                    },
                  ],
                },
            ],
          },

         
        ]
      }
  
      },
    });
  };
  