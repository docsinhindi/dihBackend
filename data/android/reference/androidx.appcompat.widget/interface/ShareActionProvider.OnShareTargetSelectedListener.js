module.exports.ShareActionProvider_OnShareTargetSelectedListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ShareActionProvider.OnShareTargetSelectedListener",
      hCode: "public interface <a href='#ShareActionProvider.OnShareTargetSelectedListener'>ShareActionProvider.OnShareTargetSelectedListener</a>",
  
      des: 
        `
        <p>Ye interface, ShareActionProvider class ke saath juda hota hai aur share action provider ke share target selected events ko handle karne ke liye use hota hai.</p>

        <p>ShareActionProvider.OnShareTargetSelectedListener interface mein ek hi method onShareTargetSelected(ShareActionProvider source, Intent intent) define hota hai, jise implement karne ke liye ShareActionProvider ke saath ek listener banaya jata hai. Jab user share action provider ke target ko select karta hai, yani share karne ke liye koi app choose karta hai, to onShareTargetSelected() method call hota hai.</p>

        <p>Is method ke dwara hum user dwara select kiye gaye share target (app) aur intent ko handle kar sakte hai aur uspar karyawahi kar sakte hai. Hum intent ke madhyam se share kiya jane wala content (data) aur metadata jaise text, image, URL, aadi ko customize aur process kar sakte hai.</p>

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
              name: "onShareTargetSelected",
              id: "onShareTargetSelected()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onShareTargetSelected()">onShareTargetSelected</a>(ShareActionProvider source, Intent intent)`,
  
              fullCode: `abstract boolean <a href="#onShareTargetSelected()">onShareTargetSelected</a>(ShareActionProvider source, Intent intent)`,

              des: `Ye method, ShareActionProvider ke share target select events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onShareTargetSelected() method ka use ShareActionProvider ke share target select events ko capture karne ke liye hota hai. Jab user kisi share target ko select karta hai, tab ye method call hota hai aur selected share target ka reference intent parameter ke roop mein receive hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki share target select event handle ho gaya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki share target select event handle nahi kiya gaya hai aur event propagation continue hoti hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ShareActionProvider source`,
                      des: `ShareActionProvider object jo share action provider ko represent karta hai.`,
                    },
                    {
                      dataTypeName: `Intent intent`,
                      des: `Intent object jo share target ko represent karta hai.`,
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
  