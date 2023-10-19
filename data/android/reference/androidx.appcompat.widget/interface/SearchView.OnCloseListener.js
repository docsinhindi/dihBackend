module.exports.SearchView_OnCloseListener = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SearchView.OnCloseListener",
      hCode: "public interface <a href='#SearchView.OnCloseListener'>SearchView.OnCloseListener</a>",
  
      des: 
        `
        <p>Ye interface, SearchView class ke saath juda hota hai aur search view ke close event ko handle karne ke liye use hota hai.</p>

        <p>SearchView.OnCloseListener interface mein ek hi method onClose() define hota hai, jise implement karne ke liye SearchView ke saath ek listener banaya jata hai. Jab search view ko close kiya jata hai, yani search box mein enter kiya jata hai ya close button par click kiya jata hai, to onClose() method call hota hai.</p>

        <p>Hum SearchView.OnCloseListener interface ka upyog karte hain jab hamein search view ke close event par kuch karyawahi karni hoti hai, jaise ki search query ko clear karna, search view ko hide karna, ya kisi aur action ko trigger karna.</p>
        
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
              name: "onClose",
              id: "onClose()",
              dataTypeName: `abstract boolean`,
              code: `<a href="#onClose()">onClose</a>()`,
  
              fullCode: `abstract boolean <a href="#onClose()">onClose</a>()`,

              des: `Ye method, SearchView ke close event ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>onClose() method ka use SearchView ke close event ko capture karne ke liye hota hai. Jab user search view ko close karta hai, tab ye method call hota hai. Is method ke through hum close event ke saath associated logic ko implement kar sakte hain.</p>

              <p>Method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki close event handle ho gaya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki close event handle nahi kiya gaya hai aur event propagation continue hoti hai.</p>
              `,
  
              parameter: [],
            },
          ],
        },
      },
    });
  };
  