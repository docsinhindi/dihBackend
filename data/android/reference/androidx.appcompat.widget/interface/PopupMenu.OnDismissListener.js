module.exports.PopupMenu_OnDismissListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "PopupMenu.OnDismissListener",
      hCode: "public interface <a href='#PopupMenu.OnDismissListener'>PopupMenu.OnDismissListener</a>",
  
      des: 
        `
        <p>Ye interface, PopupMenu class ke saath juda hota hai aur popup menu dismiss hone par uski avadharna karne ke liye use hota hai.</p>

        <p>PopupMenu.OnDismissListener interface ek hi method onDismiss() ko define karta hai, jise implement karne ke liye PopupMenu ke sath ek listener banaya jata hai. Jab koi popup menu dismiss hota hai, yani jab kisi menu item par click hota hai ya popup bahar click karne se band hota hai, to onDismiss() method call hota hai.</p>
        
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
              name: "onDismiss",
              id: "onDismiss()",
              dataTypeName: `abstract void`,
              code: `<a href="#onDismiss()">onDismiss</a>(PopupMenu menu)`,
  
              fullCode: `abstract void <a href="#onDismiss()">onDismiss</a>(PopupMenu menu)`,

              des: `Ye method, PopupMenu ke dismiss event ko handle karne ke liye use hota hai.`,
  
              longDes: `<p>onDismiss() method ka use PopupMenu ke dismiss event ko capture karne ke liye hota hai. Jab koi PopupMenu dismiss hota hai, tab ye method call hota hai aur dismiss hua PopupMenu object menu parameter ke roop mein receive hota hai.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `PopupMenu menu`,
                      des: `Dismiss hua PopupMenu object.`,
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
  