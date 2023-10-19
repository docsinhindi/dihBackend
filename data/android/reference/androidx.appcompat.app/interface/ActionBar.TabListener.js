module.exports.ActionBar_TabListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionBar.TabListener",
      hCode: "public interface <a href='#ActionBar.TabListener'>ActionBar.TabListener</a>",
  
      des: 
        `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>

        <p>ActionBar.TabListener interface ka use, ActionBar tabs ke events (jaise tab select, unselect, reselect) ka handle karne ke liye kiya jata hai. Is interface ke methods, ActionBar tab events ko capture aur handle karne ke liye implement kiye jate hai.</p>`,
      
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
              name: "onTabReselected",
              id: "onTabReselected()",
              dataTypeName: `abstract void`,
              code: `<a href="#onTabReselected()">onTabReselected</a>(ActionBar.Tab tab, FragmentTransaction ft)`,
  
              fullCode: `abstract void <a href="#onTabReselected()">onTabReselected</a>(ActionBar.Tab tab, FragmentTransaction ft)`,

              des: `Ye method ActionBar tab reselected hone par invoke hota hai.`,
  
              longDes: `
              <p>Jab ActionBar mein koi tab reselected hota hai, to onTabReselected() method invoke hota hai. Is method ke through hum reselected tab ke baare mein jankari prapt kar sakte hain aur uske anusaar kuch actions perform kar sakte hain.</p>

              <p>onTabReselected() method ka use tab reselection events ko handle karne ke liye kiya jata hai. Is method ke andar hum tab ko customize kar sakte hain, UI ko update kar sakte hain, ya koi specific functionality ko trigger kar sakte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionBar.Tab tab`,
                      des: `Reselected tab ka reference, yani ActionBar.Tab object.`,
                    },
                    {
                      dataTypeName: `FragmentTransaction ft`,
                      des: `FragmentTransaction object, jisse hum tab ke sath related fragment transaction ko control kar sakte hain.`,
                    },
                  ],
                },
              ],
            },


            {
              dep: false,
              name: "onTabSelected",
              id: "onTabSelected()",
              dataTypeName: `abstract void`,
              code: `<a href="#onTabSelected()">onTabSelected</a>(ActionBar.Tab tab, FragmentTransaction ft)`,
  
              fullCode: `abstract void <a href="#onTabSelected()">onTabSelected</a>(ActionBar.Tab tab, FragmentTransaction ft)`,

              des: `Ye method ActionBar tab selected hone par invoke hota hai.`,
  
              longDes: `
              <p>Jab ActionBar mein koi tab select hota hai, to onTabSelected() method invoke hota hai. Is method ke through hum selected tab ke baare mein jankari prapt kar sakte hain aur uske anusaar kuch actions perform kar sakte hain.</p>

              <p>onTabSelected() method ka use tab selection events ko handle karne ke liye kiya jata hai. Is method ke andar hum tab ko customize kar sakte hain, UI ko update kar sakte hain, ya koi specific functionality ko trigger kar sakte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionBar.Tab tab`,
                      des: `Selected tab ka reference, yani ActionBar.Tab object.`,
                    },
                    {
                      dataTypeName: `FragmentTransaction ft`,
                      des: `FragmentTransaction object, jisse hum tab ke sath related fragment transaction ko control kar sakte hain.`,
                    },
                  ],
                },
              ],
            },





            {
              dep: false,
              name: "onTabUnselected",
              id: "onTabUnselected()",
              dataTypeName: `abstract void`,
              code: `<a href="#onTabUnselected()">onTabUnselected</a>(ActionBar.Tab tab, FragmentTransaction ft)`,
  
              fullCode: `abstract void <a href="#onTabUnselected()">onTabUnselected</a>(ActionBar.Tab tab, FragmentTransaction ft)`,

              des: `Ye method ActionBar tab unselected hone par invoke hota hai.`,
  
              longDes: `
              <p>Jab ActionBar mein koi tab unselect hota hai, to onTabUnselected() method invoke hota hai. Is method ke through hum unselected tab ke baare mein jankari prapt kar sakte hain aur uske anusaar kuch actions perform kar sakte hain.</p>

              <p>onTabUnselected() method ka use tab unselection events ko handle karne ke liye kiya jata hai. Is method ke andar hum tab ko customize kar sakte hain, UI ko update kar sakte hain, ya koi specific functionality ko trigger kar sakte hain.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ActionBar.Tab tab`,
                      des: `Unselected tab ka reference, yani ActionBar.Tab object.`,
                    },
                    {
                      dataTypeName: `FragmentTransaction ft`,
                      des: `FragmentTransaction object, jisse hum tab ke sath related fragment transaction ko control kar sakte hain.`,
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
  