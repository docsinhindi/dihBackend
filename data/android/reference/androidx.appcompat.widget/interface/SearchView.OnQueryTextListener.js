module.exports.SearchView_OnQueryTextListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SearchView.OnQueryTextListener",
      hCode: "public interface <a href='#SearchView.OnQueryTextListener'>SearchView.OnQueryTextListener</a>",
  
      des: 
        `
        <p>Ye interface, SearchView class ke saath juda hota hai aur search view ke query text ke events ko handle karne ke liye use hota hai.</p>

        <p>SearchView.OnQueryTextListener interface, SearchView ke query text events ko handle karne aur uspar karyawahi karne ke liye use hota hai. Isse hum search query text ko submit kar sakte hain, search results ko refresh kar sakte hain, realtime search ya filtering implement kar sakte hain, ya kisi aur action ko trigger kar sakte hain.</p>
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
              name: "onQueryTextChange",
              id: "onQueryTextChange()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onQueryTextChange()">onQueryTextChange</a>(String newText)`,
  
              fullCode: `abstract boolean <a href="#onQueryTextChange()">onQueryTextChange</a>(String newText)`,

              des: `Ye method, SearchView ke query text change events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onQueryTextChange() method ka use SearchView ke query text change events ko capture karne ke liye hota hai. Jab user query text mein koi changes karta hai, tab ye method call hota hai aur updated query text newText parameter ke roop mein receive hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki query text change event handle ho gaya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki query text change event handle nahi kiya gaya hai aur event propagation continue hoti hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `String newText`,
                      des: `String object jo new query text ko represent karta hai.`,
                    },
                  ],
                },
              ],
            },


            {
              dep: false,
              name: "onQueryTextSubmit",
              id: "onQueryTextSubmit()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onQueryTextSubmit()">onQueryTextSubmit</a>(String newText)`,
  
              fullCode: `abstract boolean <a href="#onQueryTextSubmit()">onQueryTextSubmit</a>(String newText)`,

              des: `Ye method, SearchView ke query text submit events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onQueryTextSubmit() method ka use SearchView ke query text submit events ko capture karne ke liye hota hai. Jab user query text ko submit karta hai, tab ye method call hota hai aur submitted query text query parameter ke roop mein receive hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki query text submit event handle ho gaya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki query text submit event handle nahi kiya gaya hai aur event propagation continue hoti hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `String query`,
                      des: `String object jo submit kiye gaye query text ko represent karta hai.`,
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
  