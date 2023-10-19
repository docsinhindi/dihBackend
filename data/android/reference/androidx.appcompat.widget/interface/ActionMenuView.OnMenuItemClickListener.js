module.exports.ActionMenuView_OnMenuItemClickListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionMenuView.OnMenuItemClickListener",
      hCode: "public interface <a href='#ActionMenuView.OnMenuItemClickListener'>ActionMenuView.OnMenuItemClickListener</a>",
  
      des: 
        `
        <p>Ye interface, ActionMenuView mein implement kiya jata hai aur action menu items ke click events ko handle karne ke liye use hota hai.</p>

        <p>ActionMenuView Android Support Library mein provide kiya gaya hai, jiske through hum action bar ya toolbar mein menu items ko display kar sakte hain. Jab hum ActionMenuView mein menu items add karte hain, to OnMenuItemClickListener interface ka use karke hum un menu items ke click events ko sun sakte hain.</p>
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
  
              fullCode: `abstract boolean <a href="#onMenuVisibilityChanged()">onMenuVisibilityChanged</a>(MenuItem item)`,

              des: `Ye method, ActionMenuView mein implement kiya jaata hai aur menu items par click events handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onMenuItemClick() method ka use, ActionMenuView mein specify kiye gaye menu items ke click events ko capture karne ke liye hota hai. Jab koi menu item click hota hai, to ye method call hota hai aur us particular item ke reference ko parameter ke roop mein receive karta hai.</p>

              <p>Is method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki menu item ka click event handle ho gaya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki menu item ka click event handle nahi kiya gaya hai aur event propagation continue hoti hai.</p>
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
  