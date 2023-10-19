module.exports.ActionMode_Callback = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionMode.Callback",
      hCode: "public interface <a href='#ActionMode.Callback'>ActionMode.Callback</a>",
  
      des: 
        `
        <p>Ye interface, ActionMode ke events aur actions ko handle karne ke liye upayog hota hai.</p>

        <p>ActionMode.Callback interface, action mode ke lifecycle events aur user actions ke liye callbacks provide karta hai. Iske through hum action mode ke shuru hone, samapt hone, menu ko inflate karna, menu items ke selection aur click events ko handle kar sakte hain.</p>
        `,
        //
      
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
              name: "onActionItemClicked",
              id: "onActionItemClicked()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onActionItemClicked()">onActionItemClicked</a>(ActionMode mode, MenuItem item)`,
  
              fullCode: `abstract boolean <a href="#onActionItemClicked()">onActionItemClicked</a>(ActionMode mode, MenuItem item)`,

              des: `Ye method, action mode ke menu item click events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>Is method ka upayog hum action mode ke menu items ke click events ko handle karne ke liye karte hain. Jab koi menu item click hota hai action mode mein, tab onActionItemClicked() method invoke hota hai.</p>

              <p>Hum onActionItemClicked() method ko override karke, menu item click events ke anusaar koi karyawahi kar sakte hain, jaise specific menu item ke click par kuch action perform karna ya uske anusaar UI ko update karna. Method ki return type boolean hoti hai, jisme true return karna hota hai agar humne click event ko handle kiya hai, aur false return karna hota hai agar humne click event ko handle nahi kiya hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionMode mode`,
                      des: `ActionMode object, jise click event se joda gaya hai.`,
                    },
                    {
                      dataTypeName: `MenuItem item`,
                      des: `Clicked MenuItem object, jise handle karna hai.`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "onCreateActionMode",
              id: "onCreateActionMode()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onCreateActionMode()">onCreateActionMode</a>(ActionMode mode, Menu menu)`,
  
              fullCode: `abstract boolean <a href="#onCreateActionMode()">onCreateActionMode</a>(ActionMode mode, Menu menu)`,

              des: `Ye method, action mode ke shuru hone par callback ke roop mein invoke kiya jata hai.`,
  
              longDes: `
              <p>Is method ka upayog hum action mode ke liye menu ko inflate karne ke liye karte hain. Jab action mode shuru hota hai, tab onCreateActionMode() method invoke hota hai.</p>

              <p>Hum onCreateActionMode() method ko override karke, action mode ke shuru hone par menu ko inflate (bharat) kar sakte hain. Is method mein hum action mode ke liye menu ko XML resource file se inflate kar sakte hain aur Menu object ko customize kar sakte hain. Method ki return type boolean hoti hai, jisme true return karna hota hai agar humne menu ko handle kiya hai aur false return karna hota hai agar humne menu ko handle nahi kiya hai.</p>
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
                    {
                      dataTypeName: `Menu menu`,
                      des: `Menu object, jisme action mode ke menu items inflate honge.`,
                    },
                  ],
                },
              ],
            },


            {
              dep: false,
              name: "onDestroyActionMode",
              id: "onDestroyActionMode()",
              dataTypeName: `abstract void`,
              code: `<a href="#onDestroyActionMode()">onDestroyActionMode</a>(ActionMode mode)`,
  
              fullCode: `abstract void <a href="#onDestroyActionMode()">onDestroyActionMode</a>(ActionMode mode)`,

              des: `Ye method, action mode ka samapt hone par callback ke roop mein invoke kiya jata hai.`,
  
              longDes: `
              <p>Is method ka upayog hum action mode ka samapt hone par cleanup tasks ko handle karne ke liye karte hain. Jab action mode samapt hota hai, tab onDestroyActionMode() method invoke hota hai.</p>

              <p>Hum onDestroyActionMode() method ko override karke, action mode ka samapt hone par cleanup tasks ko perform kar sakte hain. Is method mein hum action mode ke saath sambandhit resources ko release kar sakte hain, UI ko update kar sakte hain, aur anya cleanup tasks ko vyavasthit kar sakte hain.</p>
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
              name: "onPrepareActionMode",
              id: "onPrepareActionMode()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onPrepareActionMode()">onPrepareActionMode</a>(ActionMode mode, Menu menu)`,
  
              fullCode: `abstract boolean <a href="#onPrepareActionMode()">onPrepareActionMode</a>(ActionMode mode, Menu menu)`,

              des: `Ye method, action mode ke liye menu items ko update aur customize karne ke liye callback ke roop mein invoke kiya jata hai.`,
  
              longDes: `
              <p>Is method ka upayog hum action mode ke liye menu items ko update aur customize karne ke liye karte hain. Jab action mode ke menu dikhaya jaata hai ya jab user menu ko open karta hai, tab onPrepareActionMode() method invoke hota hai.</p>

              <p>Hum onPrepareActionMode() method ko override karke, action mode ke liye menu items ko update aur customize kar sakte hain. Is method mein hum menu items ko enable/disable kar sakte hain, unhe update kar sakte hain aur anya customization tasks ko vyavasthit kar sakte hain. Method ki return type boolean hoti hai, jisme true return karna hota hai agar humne menu items ko update kiya hai, aur false return karna hota hai agar humne menu items ko update nahi kiya hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionMode mode`,
                      des: `ActionMode object, jise update kiya ja raha hai.`,
                    },
                    {
                      dataTypeName: `Menu menu`,
                      des: `Menu object, jisme action mode ke menu items maujood hote hain.`,
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
  