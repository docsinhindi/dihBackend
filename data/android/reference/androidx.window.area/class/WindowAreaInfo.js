module.exports.WindowAreaInfo = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaInfo",
      hCode: `@ExperimentalWindowApi</br>public final class <a href="#WindowAreaInfo">WindowAreaInfo</a>`,
  
      des: 
        `
        <p>Is class ka use, Window Area API ke through devices ke alag-alag physical areas (jaise ki foldable devices ke different screen segments) ki information ko represent karne ke liye hota hai.</p>
        
  
        <p>Window Area API, devices ke alag-alag areas ke liye alag-alag windows aur layouts ko control karne aur render karne ke liye use hota hai. WindowAreaInfo class, in areas ke liye necessary information provide karti hai, jaise ki area ki size, position, cutout information, folding state, etc.</p>

        <p>Is class ka use, Window Area API ke through devices ke alag-alag physical areas ke liye necessary information ko retrieve aur use karne ke liye hota hai. Aap is class ke properties ka use karke devices ke different physical areas ki information ko access kar sakte hain, jiske basis par aap adaptive layouts develop kar sakte hain.</p>
  
       
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
              name: "equals",
              id: "equals()",
              dataTypeName: `boolean`,
              code: `<a href="#equals()">equals</a>(Object other)`,
  
              fullCode: `public boolean <a href="#equals()">equals</a>(Object other)`,

              des: `equals() method, do WindowAreaInfo objects ko ek-dusre ke barabar compare karne ke liye use hota hai.`,
  
              longDes: `
              <p>equals() method, do WindowAreaInfo objects ko compare karne ke liye use hota hai. Ye method do objects ke sabhi properties ko compare karta hai aur agar dono objects ke sabhi properties equal hain, to method true return karta hai, warna false return karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Ye parameter ek Object object leta hai, jisko compare karne ke liye use kiya ja raha hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "getActiveSession",
              id: "getActiveSession()",
              dataTypeName: `final WindowAreaSession`,
              code: `<a href="#getActiveSession()">getActiveSession</a>(@NonNull WindowAreaCapability.Operation operation)`,
  
              fullCode: `public final WindowAreaSession <a href="#getActiveSession()">getActiveSession</a>(@NonNull WindowAreaCapability.Operation operation)`,

              des: `getActiveSession() method, WindowAreaInfo object ke liye active WindowAreaSession object ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getActiveSession() method, WindowAreaInfo object ke liye active WindowAreaSession object ko retrieve karne ke liye use hota hai. Ye method WindowAreaCapability.Operation object ko parameter mein leta hai, jo operation ka type represent karta hai. Method fir WindowAreaInfo object ke liye active WindowAreaSession object ko return karta hai, jo usi operation type ke liye valid hai.</p>

              <p>getActiveSession() method WindowAreaSession object type ka return karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowAreaCapability.Operation operation`,
                        des:`<p>Ye parameter ek WindowAreaCapability.Operation object leta hai, jo operation ka type represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "getCapability",
              id: "getCapability()",
              dataTypeName: `final WindowAreaCapability`,
              code: `<a href="#getCapability()">getCapability</a>(@NonNull WindowAreaCapability.Operation operation)`,
  
              fullCode: `public final WindowAreaCapability <a href="#getCapability()">getCapability</a>(@NonNull WindowAreaCapability.Operation operation)`,

              des: `getCapability() method, WindowAreaInfo object ke liye ek WindowAreaCapability object ko get karne ke liye use hota hai.`,
  
              longDes: `
              <p>getCapability() method, WindowAreaInfo object ke liye ek WindowAreaCapability object ko get karne ke liye use hota hai. Ye method WindowAreaCapability.Operation parameter ke through specify karta hai ki WindowAreaCapability object kaun sa operation perform karna chahta hai.</p>

              <p>getCapability() method WindowAreaCapability type ka return karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowAreaCapability.Operation operation`,
                        des:`<p>Ye parameter ek WindowAreaCapability.Operation object leta hai, jo specify karta hai ki WindowAreaCapability object kaun sa operation perform karna chahta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "getMetrics",
              id: "getMetrics()",
              dataTypeName: `final @NonNull WindowMetrics`,
              code: `<a href="#getMetrics()">getMetrics</a>()`,
  
              fullCode: `public final @NonNull WindowMetrics <a href="#getMetrics()">getMetrics</a>()`,

              des: `getMetrics() method, WindowAreaInfo object ke metrics ko return karne ke liye use hota hai.`,
  
              longDes: `
              <p>getMetrics() method, WindowAreaInfo object ke metrics ko return karne ke liye use hota hai. WindowAreaInfo object ke metrics mein window ki height, width, X coordinate, aur Y coordinate hoti hain.</p>

              <p>getMetrics() method @NonNull WindowMetrics type ka return karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getToken",
              id: "getToken()",
              dataTypeName: `final @NonNull Binder`,
              code: `<a href="#getToken()">getToken</a>()`,
  
              fullCode: `public final @NonNull Binder <a href="#getToken()">getToken</a>()`,

              des: `getToken() method, WindowAreaInfo object ki token ko return karta hai. Ye token, WindowAreaInfo object ko identify karne ke liye use kiya jata hai.`,
  
              longDes: `
              <p>getToken() method, WindowAreaInfo object ki token ko return karta hai. Ye token, WindowAreaInfo object ko identify karne ke liye use kiya jata hai.</p>

              <p>getToken() method @NonNull Binder type ka return karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getType",
              id: "getType()",
              dataTypeName: `final @NonNull WindowAreaInfo.Type`,
              code: `<a href="#getType()">getType</a>()`,
  
              fullCode: `public final @NonNull WindowAreaInfo.Type <a href="#getType()">getType</a>()`,

              des: `getType() method, WindowAreaInfo object ki type ko return karta hai. WindowAreaInfo object ki type, window ke display karne ke liye use kiye jaane wale area ki type hoti hai.`,
  
              longDes: `
              <p>getType() method, WindowAreaInfo object ki type ko return karta hai. WindowAreaInfo object ki type, window ke display karne ke liye use kiye jaane wale area ki type hoti hai.</p>

              <p>getType() method @NonNull WindowAreaInfo.Type type ka return karta hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "hashCode",
              id: "hashCode()",
              dataTypeName: `int`,
              code: `<a href="#hashCode()">hashCode</a>()`,
  
              fullCode: `public int <a href="#hashCode()">hashCode</a>()`,

              des: `hashCode() method, ek WindowAreaInfo object ki hash code ko return karta hai. Hash code ek unique value hota hai, jo object ko identify karne ke liye use kiya ja sakta hai.`,
  
              longDes: `
              <p>hashCode() method, ek WindowAreaInfo object ki hash code ko return karta hai. Hash code ek unique value hota hai, jo object ko identify karne ke liye use kiya ja sakta hai.</p>

              <p>hashCode() method int type ka return karta hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "setMetrics",
              id: "setMetrics()",
              dataTypeName: `final void`,
              code: `<a href="#setMetrics()">setMetrics</a>(@NonNull WindowMetrics metrics)`,
  
              fullCode: `public final void <a href="#setMetrics()">setMetrics</a>(@NonNull WindowMetrics metrics)`,

              des: `setMetrics() method, WindowAreaInfo object ke metrics ko set karne ke liye use hota hai. Ye method WindowAreaInfo object ke type, x, y, width, aur height properties ko set karta hai.`,
  
              longDes: `
              <p>setMetrics() method, WindowAreaInfo object ke metrics ko set karne ke liye use hota hai. Ye method WindowAreaInfo object ke type, x, y, width, aur height properties ko set karta hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull WindowMetrics metrics`,
                        des:`<p>Ye parameter ek WindowMetrics object leta hai, jiska use metrics ko set karne ke liye kiya ja raha hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "toString",
              id: "toString()",
              dataTypeName: `@NonNull String`,
              code: `<a href="#toString()">toString</a>()`,
  
              fullCode: `public @NonNull String <a href="#toString()">toString</a>()`,

              des: `toString() method, WindowAreaInfo object ko ek human-readable string mein represent karne ke liye use hota hai. Ye string, WindowAreaInfo object ke sabhi properties ko display karti hai.`,
  
              longDes: `
              <p>toString() method, WindowAreaInfo object ko ek human-readable string mein represent karne ke liye use hota hai. Ye string, WindowAreaInfo object ke sabhi properties ko display karti hai.</p>

              <p>toString() method @NonNull String type ka return karta hai.</p>

              `,

              parameter: [],
            },


          ],
        },
  
        

      },
    });
  };
  