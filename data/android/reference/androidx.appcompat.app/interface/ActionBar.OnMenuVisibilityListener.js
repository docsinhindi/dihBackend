module.exports.ActionBar_OnMenuVisibilityListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionBar.OnMenuVisibilityListener",
      hCode: "public interface <a href='#ActionBar.OnMenuVisibilityListener'>ActionBar.OnMenuVisibilityListener</a>",
  
      des:`
      <p>Action bar menus dikhaye ja rahe hain ya chhupaye ja rahe hain tab events prapt karne ke liye ek listener.</p>
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
              name: "onMenuVisibilityChanged",
              id: "onMenuVisibilityChanged()",
              dataTypeName: `abstract void`,
              code: `<a href="#onMenuVisibilityChanged()">onMenuVisibilityChanged</a>(boolean isVisible)`,
  
              fullCode: `abstract void <a href="#onMenuVisibilityChanged()">onMenuVisibilityChanged</a>(boolean isVisible)`,
              des: `Jab ek action bar menu dikhaya ya chhupaya jata hai tab yah callback method call hota hai.`,
  
              longDes: `<p>Jab ek action bar menu dikhaya ya chhupaya jata hai tab, applications auto-hiding behavior ke liye action bar ko tune karne ya video playback, gameplay, ya other activity ko pause/resume karne ke liye iska upyog kar sakte hain.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `boolean isVisible`,
                      des: `<p>Ek boolean parameter jo bataata hai ki ActionBar ke menu visible hai ya nahi. true indicate karta hai ki menu visible hai aur false indicate karta hai ki menu invisible hai.</p>`,
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
  