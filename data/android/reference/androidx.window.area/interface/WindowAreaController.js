module.exports.WindowAreaController = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaController",
      hCode: "@ExperimentalWindowApi</br>public interface <a href='#WindowAreaController'>WindowAreaController</a>",
  
      des:`
      <p>Is interface ka use, Android devices ke multiple physical areas (jaise ki folding devices ke different screen segments) ko represent aur control karne ke liye hota hai. WindowAreaController, window manager ke through areas ke state ko monitor karne aur areas ke actions ko handle karne ke liye use hota hai.</p>

      <p>Is interface ka use devices ke different physical areas (jaise ki foldable phones) ke liye layout aur transformations ko control karne ke liye hota hai. Aap is interface ke methods ka use karke areas ke state changes ko track kar sakte hain aur unke layout ko customize kar sakte hain.</p>
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
              dataTypeName: `default static final @NonNull WindowAreaController`,
              code: `<a href="#getOrCreate()">getOrCreate</a>()`,
  
              fullCode: `default static final @NonNull WindowAreaController <a href="#getOrCreate()">getOrCreate</a>()`,

              des: `getOrCreate() method ka use karke aap window area controller object ko get kar sakte hain.`,
  
              longDes: `
              <p>getOrCreate() method ka use karke aap window area controller object ko get kar sakte hain. Ye method window area controller object ko lagataar reuse karne ke liye use kiya ja sakta hai, jisse performance improve hota hai.</p>
  
              <p>Ye method WindowAreaController class ka ek object return karta hai.</p>
              `,
              
              parameter: [ ],
            },


            {
              dep: false,
              name: "getWindowAreaInfos",
              id: "getWindowAreaInfos()",
              dataTypeName: `abstract @NonNull Flow<@NonNull List<@NonNull WindowAreaInfo>>`,
              code: `<a href="#getWindowAreaInfos()">getWindowAreaInfos</a>()`,
  
              fullCode: `abstract @NonNull Flow<@NonNull List<@NonNull WindowAreaInfo>> <a href="#getWindowAreaInfos()">getWindowAreaInfos</a>()`,

              des: `getWindowAreaInfos() method ka use karke aap window area controller object ke liye available window area infos ka list get kar sakte hain. `,
  
              longDes: `
              <p>getWindowAreaInfos() method ka use karke aap window area controller object ke liye available window area infos ka list get kar sakte hain. Ye method window area infos ko real time mein collect karta hai, aur window area infos ke list mein kisi bhi change ko reflect karta hai.</p>
  
              <p>Ye method Flow object return karta hai, jo window area infos ka list represent karta hai.</p>
              `,
              
              parameter: [ ],
            },

  


            {
              dep: false,
              name: "presentContentOnWindowArea",
              id: "presentContentOnWindowArea()",
              dataTypeName: `abstract void`,
              code: `<a href="#presentContentOnWindowArea()">presentContentOnWindowArea</a>(
                @NonNull Binder token,
                @NonNull Activity activity,
                @NonNull Executor executor,
                @NonNull WindowAreaPresentationSessionCallback windowAreaPresentationSessionCallback
            )`,
  
              fullCode: `abstract void <a href="#presentContentOnWindowArea()">presentContentOnWindowArea</a>(
                @NonNull Binder token,
                @NonNull Activity activity,
                @NonNull Executor executor,
                @NonNull WindowAreaPresentationSessionCallback windowAreaPresentationSessionCallback
            )`,

              des: `presentContentOnWindowArea() method ka use karke aap window area controller object ko use karke content ko window area mein present kar sakte hain.`,
  
              longDes: `
              <p>presentContentOnWindowArea() method ka use karke aap window area controller object ko use karke content ko window area mein present kar sakte hain. Ye method content ko window area mein real time mein present karta hai, aur content ke window area mein present hone ke baad ke events ko reflect karta hai.</p>
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Binder token`,
                        des:`<p>Ye parameter ek Binder object leta hai, jo window area presentation session ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Ye parameter ek Activity object leta hai, jo content ko window area mein present karne ke liye use kiya jaata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Executor executor`,
                        des:`<p>Ye parameter ek Executor object leta hai, jo window area presentation session callback ko call karne ke liye use kiya jaata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull WindowAreaPresentationSessionCallback windowAreaPresentationSessionCallback`,
                        des:`<p>Ye parameter ek WindowAreaPresentationSessionCallback object leta hai, jo window area presentation session ke events ko handle karne ke liye use kiya jaata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  


            {
              dep: false,
              name: "transferActivityToWindowArea",
              id: "transferActivityToWindowArea()",
              dataTypeName: `abstract void`,
              code: `<a href="#transferActivityToWindowArea()">transferActivityToWindowArea</a>(
                @NonNull Binder token,
                @NonNull Activity activity,
                @NonNull Executor executor,
                @NonNull WindowAreaSessionCallback windowAreaSessionCallback
            )`,
  
              fullCode: `abstract void <a href="#transferActivityToWindowArea()">transferActivityToWindowArea</a>(
                @NonNull Binder token,
                @NonNull Activity activity,
                @NonNull Executor executor,
                @NonNull WindowAreaSessionCallback windowAreaSessionCallback
            )`,

              des: `transferActivityToWindowArea() method ka use karke aap window area controller object ko use karke activity ko window area mein transfer kar sakte hain.`,
  
              longDes: `
              <p>transferActivityToWindowArea() method ka use karke aap window area controller object ko use karke activity ko window area mein transfer kar sakte hain. Ye method activity ko window area mein real time mein transfer karta hai, aur activity ke window area mein transfer hone ke baad ke events ko reflect karta hai.</p>
              `,
              
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Binder token`,
                        des:`<p>Ye parameter ek Binder object leta hai, jo window area session ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Activity activity`,
                        des:`<p>Ye parameter ek Activity object leta hai, jo window area mein transfer karne ke liye use kiya jaata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Executor executor`,
                        des:`<p>Ye parameter ek Executor object leta hai, jo window area session callback ko call karne ke liye use kiya jaata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull WindowAreaSessionCallback windowAreaSessionCallback`,
                        des:`<p>Ye parameter ek WindowAreaSessionCallback object leta hai, jo window area session ke events ko handle karne ke liye use kiya jaata hai.</p>`,
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
  