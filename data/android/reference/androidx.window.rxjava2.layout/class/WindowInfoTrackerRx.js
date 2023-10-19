module.exports.WindowInfoTrackerRx = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowInfoTrackerRx",
      hCode: `public final class <a href="#WindowInfoTrackerRx">WindowInfoTrackerRx</a>`,
  
      des: 
        `
        <p>WindowInfoTrackerRx class ka use window layout changes ko observe aur track karne ke liye hota hai. Aap iska use karke window layout info ke changes ko real-time mein observe kar sakte hain aur apne UI elements ko optimize aur update kar sakte hain.</p>
  
       
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
              name: "windowLayoutInfoFlowable",
              id: "windowLayoutInfoFlowable(WindowInfoTracker,Activity)",
              dataTypeName: `static final @NonNull Flowable<@NonNull WindowLayoutInfo>`,
              code: `<a href="#windowLayoutInfoFlowable(WindowInfoTracker,Activity)">windowLayoutInfoFlowable</a>(
                @NonNull WindowInfoTracker receiver,
                @NonNull Activity activity
            )`,
  
              fullCode: `public static final @NonNull Flowable<@NonNull WindowLayoutInfo> <a href="#windowLayoutInfoFlowable(WindowInfoTracker,Activity)">windowLayoutInfoFlowable</a>(
                @NonNull WindowInfoTracker receiver,
                @NonNull Activity activity
            )`,

              des: `Is method ka use WindowLayoutInfo objects ke changes ko monitor karne ke liye hota hai. Flowable ek reactive stream hoti hai jo asynchronous data events ko represent karti hai.`,
  
              longDes: `
              <p>Is method ka use WindowLayoutInfo objects ke changes ko monitor karne ke liye hota hai. WindowInfoTracker object, Activity context ke sath use hota hai taki changes ka pata chal sake. Jab koi change hota hai, Flowable events emit karta hai, jisse interested components changes ko observe kar sakte hain.</p>
  
              <p>Yeh method ek Flowable object return karta hai jo WindowLayoutInfo objects ke changes ko emit karta hai. @NonNull annotation indicate karta hai ki emitted objects null nahi honge.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowInfoTracker receiver`,
                        des:`<p>Yeh parameter WindowInfoTracker object hota hai jo WindowLayoutInfo objects ke changes ko track karega.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter Activity object hota hai jiska context provide karega, taki receiver objects ko updates mil sake.</p>`,
                      },
                    ],
                  },
              ],
            },

            

            {
              dep: false,
              name: "windowLayoutInfoFlowable",
              id: "windowLayoutInfoFlowable(WindowInfoTracker,Context)",
              dataTypeName: `static final @NonNull Flowable<@NonNull WindowLayoutInfo>`,
              code: `<a href="#windowLayoutInfoFlowable(WindowInfoTracker,Context)">windowLayoutInfoFlowable</a>(
                @NonNull WindowInfoTracker receiver,
                @UiContext @NonNull Context context
            )`,
  
              fullCode: `public static final @NonNull Flowable<@NonNull WindowLayoutInfo> <a href="#windowLayoutInfoFlowable(WindowInfoTracker,Context)">windowLayoutInfoFlowable</a>(
                @NonNull WindowInfoTracker receiver,
                @UiContext @NonNull Context context
            )`,

              des: `Is method ka use WindowLayoutInfo objects ke changes ko monitor karne ke liye hota hai. Flowable ek reactive stream hoti hai jo asynchronous data events ko represent karti hai.`,
  
              longDes: `
              <p>Is method ka use WindowLayoutInfo objects ke changes ko monitor karne ke liye hota hai. WindowInfoTracker object, Context context ke sath use hota hai taki changes ka pata chal sake. Jab koi change hota hai, Flowable events emit karta hai, jisse interested components changes ko observe kar sakte hain.</p>
  
              <p>Yeh method ek Flowable object return karta hai jo WindowLayoutInfo objects ke changes ko emit karta hai. @NonNull annotation indicate karta hai ki emitted objects null nahi honge.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowInfoTracker receiver`,
                        des:`<p>Yeh parameter WindowInfoTracker object hota hai jo WindowLayoutInfo objects ke changes ko track karega.</p>`,
                      },
                      {
                        dataTypeName: `@UiContext @NonNull Context context`,
                        des:`<p>Yeh parameter Context object hota hai jiska UI context provide karega, taki receiver objects ko updates mil sake.</p>`,
                      },
                    ],
                  },
              ],
            },


            

            {
              dep: false,
              name: "windowLayoutInfoObservable",
              id: "windowLayoutInfoObservable(WindowInfoTracker,Activity)",
              dataTypeName: `static final @NonNull Observable<@NonNull WindowLayoutInfo>`,
              code: `<a href="#windowLayoutInfoObservable(WindowInfoTracker,Activity)">windowLayoutInfoObservable</a>(
                @NonNull WindowInfoTracker receiver,
                @NonNull Activity activity
            )`,
  
              fullCode: `public static final @NonNull Observable<@NonNull WindowLayoutInfo> <a href="#windowLayoutInfoObservable(WindowInfoTracker,Activity)">windowLayoutInfoObservable</a>(
                @NonNull WindowInfoTracker receiver,
                @NonNull Activity activity
            )`,

              des: `Is method ka use WindowLayoutInfo objects ke changes ko monitor karne ke liye hota hai. Observable ek reactive stream hoti hai jo asynchronous data events ko represent karti hai.`,
  
              longDes: `
              <p>Is method ka use WindowLayoutInfo objects ke changes ko monitor karne ke liye hota hai. WindowInfoTracker object, Activity context ke sath use hota hai taki changes ka pata chal sake. Jab koi change hota hai, Observable events emit karta hai, jisse interested components changes ko observe kar sakte hain.</p>
  
              <p>Yeh method ek Observable object return karta hai jo WindowLayoutInfo objects ke changes ko emit karta hai. @NonNull annotation indicate karta hai ki emitted objects null nahi honge.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowInfoTracker receiver`,
                        des:`<p>Yeh parameter WindowInfoTracker object hota hai jo WindowLayoutInfo objects ke changes ko track karega.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Yeh parameter Activity object hota hai jiska context provide karega, taki receiver objects ko updates mil sake.</p>`,
                      },
                    ],
                  },
              ],
            },


            

            {
              dep: false,
              name: "windowLayoutInfoObservable",
              id: "windowLayoutInfoObservable(WindowInfoTracker,Context)",
              dataTypeName: `static final @NonNull Observable<@NonNull WindowLayoutInfo>`,
              code: `<a href="#windowLayoutInfoObservable(WindowInfoTracker,Context)">windowLayoutInfoObservable</a>(
                @NonNull WindowInfoTracker receiver,
                @UiContext @NonNull Context context
            )`,
  
              fullCode: `public static final @NonNull Observable<@NonNull WindowLayoutInfo> <a href="#windowLayoutInfoObservable(WindowInfoTracker,Context)">windowLayoutInfoObservable</a>(
                @NonNull WindowInfoTracker receiver,
                @UiContext @NonNull Context context
            )`,

              des: `Is method ka use WindowLayoutInfo objects ke changes ko monitor karne ke liye hota hai. Observable ek reactive stream hoti hai jo asynchronous data events ko represent karti hai.`,
  
              longDes: `
              <p>Is method ka use WindowLayoutInfo objects ke changes ko monitor karne ke liye hota hai. WindowInfoTracker object, Context context ke sath use hota hai taki changes ka pata chal sake. Jab koi change hota hai, Observable events emit karta hai, jisse interested components changes ko observe kar sakte hain.</p>
  
              <p>Yeh method ek Observable object return karta hai jo WindowLayoutInfo objects ke changes ko emit karta hai. @NonNull annotation indicate karta hai ki emitted objects null nahi honge.</p>
              `,
 
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowInfoTracker receiver`,
                        des:`<p>Yeh parameter WindowInfoTracker object hota hai jo WindowLayoutInfo objects ke changes ko track karega.</p>`,
                      },
                      {
                        dataTypeName: `@UiContext @NonNull  context`,
                        des:`<p>Yeh parameter Context object hota hai jiska UI context provide karega, taki receiver objects ko updates mil sake.</p>`,
                      },
                    ],
                  },
              ],
            },

//
          ],
        },
  
        
      
     
  

      },
    });
  };
  