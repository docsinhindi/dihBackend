module.exports.AppCompatCallback = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatCallback",
      hCode: "public interface <a href='#AppCompatCallback'>AppCompatCallback</a>",
  
      des: 
        `
        <p>Ye interface, AppCompatDelegate ke saath istemal kiya jata hai, jo legacy (purane) version ke Android platform par modern features aur appearance ko support karne ke liye upayog hota hai.</p>
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
              name: "onSupportActionModeFinished",
              id: "onSupportActionModeFinished()",
              dataTypeName: `abstract void`,
              code: `<a href="#onSupportActionModeFinished()">onSupportActionModeFinished</a>(ActionMode mode)`,
  
              fullCode: `abstract void <a href="#onSupportActionModeFinished()">onSupportActionModeFinished</a>(ActionMode mode)`,

              des: `Ye method, ActionMode ka samapt (finish) ho jane par callback ke roop mein invoke kiya jata hai.`,
  
              longDes: `
              <p>Is method ka upayog karke hum action mode ke samapt ho jane ke baad uske saath sambandhit koi bhi upyogi karyawahi kar sakte hain. Hum is method ke andar ActionMode object ke saath sambandhit operations ko vyavasthit kar sakte hain.</p>

              <p>Hum onSupportActionModeFinished() method ko override karke apne requirements ke anusaar uska upayog kar sakte hain. Ismein hum kuch aise karyawahi kar sakte hain jaise UI ko refresh karna, aur kisi specific logic ya state ko handle karna jo action mode ke samapt hone par zaroori ho.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionMode mode`,
                      des: `ActionMode object, jise samapt kiya gaya hai.`,
                    },
                  ],
                },
              ],
            },


            {
              dep: false,
              name: "onSupportActionModeStarted",
              id: "onSupportActionModeStarted()",
              dataTypeName: `abstract void`,
              code: `<a href="#onSupportActionModeStarted()">onSupportActionModeStarted</a>(ActionMode mode)`,
  
              fullCode: `abstract void <a href="#onSupportActionModeStarted()">onSupportActionModeStarted</a>(ActionMode mode)`,

              des: `Ye method, ActionMode ka shuru ho jane par callback ke roop mein invoke kiya jata hai.`,
  
              longDes: `
              <p>Is method ka upayog karke hum action mode ke shuru hone ke samay uske saath sambandhit koi bhi upyogi karyawahi kar sakte hain. Hum is method ke andar ActionMode object ke saath sambandhit operations ko vyavasthit kar sakte hain.</p>

              <p>Hum onSupportActionModeStarted() method ko override karke apne requirements ke anusaar uska upayog kar sakte hain. Ismein hum kuch aise karyawahi kar sakte hain jaise UI ko update karna, aur kisi specific logic ya state ko handle karna jo action mode ke shuru hone par zaroori ho.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionMode mode`,
                      des: `ActionMode object, jise shuru kiya gaya hai.`,
                    },
                  ],
                },
              ],
            },




            {
              dep: false,
              name: "onWindowStartingSupportActionMode",
              id: "onWindowStartingSupportActionMode()",
              dataTypeName: `abstract @Nullable ActionMode`,
              code: `<a href="#onWindowStartingSupportActionMode()">onWindowStartingSupportActionMode</a>(ActionMode.Callback callback)`,
  
              fullCode: `abstract @Nullable ActionMode <a href="#onWindowStartingSupportActionMode()">onWindowStartingSupportActionMode</a>(ActionMode.Callback callback)`,

              des: `Ye method, action mode shuru hone se pehle callback ke roop mein invoke kiya jata hai. Is method ka upayog action mode shuru hone se pehle custom ActionMode object ko provide karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Is method ke through hum custom ActionMode object ko create kar sakte hain aur usko action mode shuru hone se pehle pradan kar sakte hain. Hum is method ke andar ActionMode.Callback object ko provide kar sakte hain, jisse action mode ke events aur actions handle kiye jayenge.</p>

              <p>onWindowStartingSupportActionMode() method ka return type ActionMode hota hai. Hum is method ke dwara custom ActionMode object ko prapt kar sakte hain. Agar hum null return karte hain, toh default action mode behavior istemal hoga.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionMode.Callback callback`,
                      des: `ActionMode.Callback object, jo action mode ke events aur actions handle karega.`,
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
  