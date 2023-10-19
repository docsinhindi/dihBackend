module.exports.WindowAreaCapability = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "WindowAreaCapability",
      hCode: `@ExperimentalWindowApi</br>public final class <a href="#WindowAreaCapability">WindowAreaCapability</a>`,
  
      des: 
        `
        <p>Is class ka use, Window Area API ke through devices ke multiple physical areas (jaise ki foldable devices ke different screen segments) ki capabilities ko represent karne ke liye hota hai.</p>
        
  
        <p>Window Area API, devices ke alag-alag areas ke liye alag-alag windows aur layouts ko control karne aur render karne ke liye use hota hai. Har ek physical area alag capabilities (jaise ki size, shape, resolution, position, etc.) ke saath aata hai, aur WindowAreaCapability class in capabilities ko encapsulate karti hai.</p>

        <p>Is class ka use, Window Area API ke through devices ke different physical areas ke capabilities ko retrieve aur use karne ke liye hota hai. Aap is class ke properties ka use karke devices ke alag-alag areas ki capabilities ko check kar sakte hain, aur in capabilities ke hisab se adaptive layouts develop kar sakte hain.</p>
  
       
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

              des: `equals() method ka use karke aap do WindowAreaCapability object ko compare kar sakte hain.`,
  
              longDes: `
              <p>equals() method ka use karke aap do WindowAreaCapability object ko compare kar sakte hain. Ye method do objecton ke attributes ko compare karta hai, aur agar dono objecton ke attributes same hain, to method true return karta hai.</p>
  
              <p>Ye method boolean type ka hota hai, yani ki is method se true ya false return hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Object other`,
                        des:`<p>Ye parameter ek Object object leta hai, jo dusri WindowAreaCapability object ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "getOperation",
              id: "getOperation()",
              dataTypeName: `final @NonNull WindowAreaCapability.Operation`,
              code: `<a href="#getOperation()">getOperation</a>()`,
  
              fullCode: `public final @NonNull WindowAreaCapability.Operation <a href="#getOperation()">getOperation</a>()`,

              des: `getOperation() method ka use karke aap window area capability ke operation ko get kar sakte hain.`,
  
              longDes: `
              <p>getOperation() method ka use karke aap window area capability ke operation ko get kar sakte hain. Ye method window area capability ke operation ko represent karne ke liye ek WindowAreaCapability.Operation enum object return karta hai, jisse ki aap window area capability ke operation ko pata kar sakte hain.</p>
  
              <p>Ye method WindowAreaCapability.Operation enum object type ka hota hai, jo window area capability ke operation ko represent karta hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getStatus",
              id: "getStatus()",
              dataTypeName: `final @NonNull WindowAreaCapability.Status`,
              code: `<a href="#getStatus()">getStatus</a>()`,
  
              fullCode: `public final @NonNull WindowAreaCapability.Status <a href="#getStatus()">getStatus</a>()`,

              des: `Aap is method ka use karke window ke area ki current status ko check kar sakte hain.`,
  
              longDes: `
              <p>getStatus() method, WindowAreaCapability object ki current status ko return karta hai. WindowAreaCapability object ki current status, window ke area ke current size, shape, aur position ko reflect karti hai.</p>
  
              <p>Aap is method ka use karke window ke area ki current status ko check kar sakte hain.</p>

              <p>getStatus() method WindowAreaCapability.Status type ka value return karta hai. WindowAreaCapability.Status type mein, window ke area ki current status ko represent karne ke liye ek enum define kiya gaya hai.</p>
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

              des: `hashCode() method, WindowAreaCapability object ki hash code generate karne ke liye use hota hai. Hash code ek unique integer hota hai, jo object ko identify karne ke liye use kiya jata hai.`,
  
              longDes: `
              <p>hashCode() method, WindowAreaCapability object ki hash code generate karne ke liye use hota hai. Hash code ek unique integer hota hai, jo object ko identify karne ke liye use kiya jata hai.</p>
  
              <p>Aap is method ka use karke WindowAreaCapability objects ko compare kar sakte hain. Agar do WindowAreaCapability objects ki hash codes equal hain, to donon objects ko equal mana jayega.</p>

              <p>hashCode() method int type ka return karta hai, jo object ki hash code hoti hai.</p>
              `,

              parameter: [],
            },

  
  
  
            {
              dep: false,
              name: "toString",
              id: "toString()",
              dataTypeName: `@NonNull String`,
              code: `<a href="#toString()">toString</a>()`,
  
              fullCode: `public @NonNull String <a href="#toString()">toString</a>()`,

              des: `toString() method, WindowAreaCapability object ko ek human-readable string mein represent karne ke liye use hota hai.`,
  
              longDes: `
              <p>toString() method, WindowAreaCapability object ko ek human-readable string mein represent karne ke liye use hota hai. Ye string, WindowAreaCapability object ke sabhi properties ko display karti hai.</p>

              <p>toString() method @NonNull String type ka return karta hai.</p>
              `,

              parameter: [],
            },

  

          ],
        },
  
        
      },
    });
  };
  