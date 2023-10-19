module.exports.ThemedSpinnerAdapter = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ThemedSpinnerAdapter",
      hCode: "public interface <a href='#ThemedSpinnerAdapter'>ThemedSpinnerAdapter</a> extends SpinnerAdapter",
  
      des: 
        `
        <p>Ye interface, SpinnerAdapter interface se extend hota hai aur themable (theme ke anuroop) spinner adapters ke liye use hota hai.</p>

        <p>ThemedSpinnerAdapter interface ka upyog kuch special spinner adapters ke liye kiya jata hai jo theme ke anuroop customization aur rendering support karte hain. Is interface ke madhyam se, spinner adapters theme attributes ko apply karne aur spinner ke look and feel ko theme ke anuroop customize karne ke liye suvidha pradan karte hain.</p>
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
              name: "getDropDownViewTheme",
              id: "getDropDownViewTheme()",
              dataTypeName: `abstract @Nullable Resources.Theme`,
              code: `<a href="#getDropDownViewTheme()">getDropDownViewTheme</a>()`,
  
              fullCode: `abstract @Nullable Resources.Theme <a href="#getDropDownViewTheme()">getDropDownViewTheme</a>()`,

              des: `Ye method, dropdown view theme ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, dropdown view theme ko retrieve karne ke liye use hota hai.</p>

              <p>Method ki return value Resources.Theme type ki hoti hai, yani ek Theme object. Is method ke through hum dropdown view ke theme ko represent karne wale Theme object ko retrieve kar sakte hain.</p>
              `,
  
              parameter: [],
            },


            {
              dep: false,
              name: "setDropDownViewTheme",
              id: "setDropDownViewTheme()",
              dataTypeName: `abstract void`,
              code: `<a href="#setDropDownViewTheme()">setDropDownViewTheme</a>(@Nullable Resources.Theme theme)`,
  
              fullCode: `abstract void <a href="#setDropDownViewTheme()">setDropDownViewTheme</a>(@Nullable Resources.Theme theme)`,

              des: `Ye method, dropdown view theme ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setDropDownViewTheme() method ka use dropdown view ke theme ko set karne ke liye hota hai. Hum is method ke through dropdown view ke theme ko represent karne wale Theme object ko provide kar sakte hain.</p>

              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@Nullable Resources.Theme theme`,
                      des: `<p>Resources.Theme type ka nullable parameter jo dropdown view ke theme ko represent karta hai.</p>`,
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
  