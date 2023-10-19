module.exports.ActionBarDrawerToggle_DelegateProvider = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionBarDrawerToggle.DelegateProvider",
      hCode: "public interface <a href='#ActionBarDrawerToggle.DelegateProvider'>ActionBarDrawerToggle.DelegateProvider</a>",
  
      des: 
        `
        <p>ActionBarDrawerToggle class, ActionBarDrawerToggle.DelegateProvider interface ke method ko override karta hai aur navigation drawer ke saath ActionBar ke toggle button ko manage karne ke liye unka upyog karta hai.</p>
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
              name: "getDrawerToggleDelegate",
              id: "getDrawerToggleDelegate()",
              dataTypeName: `abstract @Nullable ActionBarDrawerToggle.Delegate`,
              code: `<a href="#getDrawerToggleDelegate()">getDrawerToggleDelegate</a>()`,
  
              fullCode: `abstract @Nullable ActionBarDrawerToggle.Delegate <a href="#getDrawerToggleDelegate()">getDrawerToggleDelegate</a>()`,

              des: `Ye method ActionBarDrawerToggle ke Delegate object ko prapt karne ke liye use hota hai.`,
  
              longDes: `
              <p>Is method ka use ActionBarDrawerToggle ke Delegate object ko retrieve karne ke liye kiya jata hai. ActionBarDrawerToggle, navigation drawer toggle button ke saath ActionBar ke state aur synchronization ko handle karne ke liye use hota hai.</p>

              <p>getDrawerToggleDelegate() method ka return type ActionBarDrawerToggle.Delegate hai, jo ActionBarDrawerToggle ke Delegate object ko represent karta hai. Delegate object navigation drawer toggle button ke actions aur state ko handle karta hai.</p>
              `,
  
              parameter: [],
            },
          ],
        },
      },
    });
  };
  