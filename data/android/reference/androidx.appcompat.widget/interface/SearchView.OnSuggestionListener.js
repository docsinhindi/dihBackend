module.exports.SearchView_OnSuggestionListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SearchView.OnSuggestionListener",
      hCode: "public interface <a href='#SearchView.OnSuggestionListener'>SearchView.OnSuggestionListener</a>",
  
      des: 
        `
        <p>Ye interface, SearchView class ke saath juda hota hai aur search view ke suggestion events ko handle karne ke liye use hota hai.</p>

        <p>SearchView.OnSuggestionListener interface, SearchView ke suggestion events ko handle karne aur uspar karyawahi karne ke liye use hota hai. Isse hum suggestion item ko select kar sakte hain, uspar click kar sakte hain, ya kisi aur action ko trigger kar sakte hain.</p>
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
              name: "onSuggestionClick",
              id: "onSuggestionClick()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onSuggestionClick()">onSuggestionClick</a>(int position)`,
  
              fullCode: `abstract boolean <a href="#onSuggestionClick()">onSuggestionClick</a>(int position)`,

              des: `Ye method, SearchView ke suggestion item click events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onSuggestionClick() method ka use SearchView ke suggestion item click events ko capture karne ke liye hota hai. Jab user kisi suggestion item par click karta hai, tab ye method call hota hai aur clicked suggestion item ka position position parameter ke roop mein receive hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki suggestion item click event handle ho gaya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki suggestion item click event handle nahi kiya gaya hai aur event propagation continue hoti hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int position`,
                      des: `<p>Integer value jo suggestion item ka position represent karta hai.</p>`,
                    },
                  ],
                },
              ],
            },


            {
              dep: false,
              name: "onSuggestionSelect",
              id: "onSuggestionSelect()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onSuggestionSelect()">onSuggestionSelect</a>(int position)`,
  
              fullCode: `abstract boolean <a href="#onSuggestionSelect()">onSuggestionSelect</a>(int position)`,

              des: `Ye method, SearchView ke suggestion item select events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onSuggestionSelect() method ka use SearchView ke suggestion item select events ko capture karne ke liye hota hai. Jab user kisi suggestion item ko select karta hai, tab ye method call hota hai aur selected suggestion item ka position position parameter ke roop mein receive hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki suggestion item select event handle ho gaya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki suggestion item select event handle nahi kiya gaya hai aur event propagation continue hoti hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int position`,
                      des: `<p>Integer value jo suggestion item ka position represent karta hai.</p>`,
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
  