module.exports.ActionBar_OnNavigationListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionBar.OnNavigationListener",
      hCode: "public interface <a href='#ActionBar.OnNavigationListener'>ActionBar.OnNavigationListener</a>",
  
      des: 
        `<aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Action bar navigation modes deprecated ho gaye hain aur inline toolbar action bars dvara support nahi kiye jaate hain. Iske bajaay, dusre common navigation patterns ka upyog karna consider karein.</p></aside>
        <p>ActionBar navigation events ke liye sunne ke liye sunne wala interface.</p>`,
      
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
              name: "onNavigationItemSelected",
              id: "onNavigationItemSelected()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onNavigationItemSelected()">onNavigationItemSelected</a>(int itemPosition, long itemId)`,
  
              fullCode: `abstract boolean <a href="#onNavigationItemSelected()">onNavigationItemSelected</a>(int itemPosition, long itemId)`,

              des: `Ye method ActionBar mein navigation item select hone par invoke hota hai.`,
  
              longDes: `
              <p>Jab ActionBar mein koi navigation item select hota hai, to onNavigationItemSelected() method invoke hota hai. Is method ke through hum selected item ka position aur ID prapt kar sakte hain aur uske anusaar kuch actions perform kar sakte hain.</p>

              <p>onNavigationItemSelected() method ka return type boolean hota hai. Ye return value batata hai ki event ka handle karne ke baad navigation item ko select karne ka default behavior change karna hai ya nahi. Agar hum true return karte hain, to default behavior change nahi hoga, aur agar hum false return karte hain, to default behavior change ho sakta hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int itemPosition`,
                      des: `Selected navigation item ka position. Ye position 0 se shuru hoti hai.`,
                    },
                    {
                      dataTypeName: `long itemId`,
                      des: `Selected navigation item ka unique ID. Ye item ko identify karne ke liye use hota hai..`,
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
  