module.exports.PopupMenu_OnMenuItemClickListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "PopupMenu.OnMenuItemClickListener",
      hCode: "public interface <a href='#PopupMenu.OnMenuItemClickListener'>PopupMenu.OnMenuItemClickListener</a>",
  
      des: 
        `
        <p>Ye interface, PopupMenu class ke saath juda hota hai aur popup menu ke menu items par click events ko handle karne ke liye use hota hai.</p>

        <p>PopupMenu.OnMenuItemClickListener interface mein ek hi method onMenuItemClick(MenuItem item) define hota hai, jise implement karne ke liye PopupMenu ke saath ek listener banaya jata hai. Jab koi menu item par click hota hai, to onMenuItemClick() method call hota hai aur uss method ke through hum menu item ke saath sambandhit karyawahi kar sakte hai.</p>

        <p>Hum PopupMenu.OnMenuItemClickListener interface ka upyog karte hain jab hamein kisi menu item ke click event par kuch karyawahi karni hoti hai, jaise ki item ka text padhna, uska ID prapt karna, ya uske anuroop koi action perform karna.</p>
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

              des: `Ye method, PopupMenu mein specify kiye gaye menu items ke click events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onMenuItemClick() method ka use, PopupMenu mein specify kiye gaye menu items ke click events ko capture karne ke liye hota hai. Jab koi menu item click hota hai, tab ye method call hota hai aur us particular item ke reference item parameter ke roop mein receive hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki menu item ka click event handle ho gaya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki menu item ka click event handle nahi kiya gaya hai aur event propagation continue hoti hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `MenuItem item`,
                      des: `MenuItem object, jiske click event ko handle karna hai.`,
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
  