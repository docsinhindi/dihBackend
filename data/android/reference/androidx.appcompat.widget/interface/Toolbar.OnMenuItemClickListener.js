module.exports.Toolbar_OnMenuItemClickListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "Toolbar.OnMenuItemClickListener",
      hCode: "public interface <a href='#Toolbar.OnMenuItemClickListener'>Toolbar.OnMenuItemClickListener</a>",
  
      des: 
        `
        <p>Ye interface, Toolbar class ke saath juda hota hai aur toolbar ke menu item click events ko handle karne ke liye use hota hai.</p>

        <p>Toolbar.OnMenuItemClickListener interface mein ek hi method onMenuItemClick(MenuItem item) define hota hai, jise implement karne ke liye Toolbar ke saath ek listener banaya jata hai. Jab koi toolbar ke menu item par click hota hai, to onMenuItemClick() method call hota hai.</p>
        
        <p>Is method ke dwara hum toolbar ke menu items ke click events ko handle kar sakte hai aur unpar karyawahi kar sakte hai. Hum MenuItem object ke madhyam se menu item ka ID, title, ya kisi aur attribute ko prapt kar sakte hai aur uspar anuroop karyawahi kar sakte hai.</p>
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
              name: "onMenuItemClick",
              id: "onMenuItemClick()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onMenuItemClick()">onMenuItemClick</a>(MenuItem item)`,
  
              fullCode: `abstract boolean <a href="#onMenuItemClick()">onMenuItemClick</a>(MenuItem item)`,

              des: `Ye method, Toolbar ke menu item click events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onMenuItemClick() method ka use Toolbar ke menu item click events ko capture karne ke liye hota hai. Jab koi menu item click hota hai, tab ye method call hota hai aur us particular item ke reference item parameter ke roop mein receive hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki menu item ka click event handle ho gaya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki menu item ka click event handle nahi kiya gaya hai aur event propagation continue hoti hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `MenuItem item`,
                      des: `<p>MenuItem object, jiske click event ko handle karna hai.</p>`,
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
  