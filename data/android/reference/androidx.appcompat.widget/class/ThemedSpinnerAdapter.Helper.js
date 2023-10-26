module.exports.ThemedSpinnerAdapter_Helper = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ThemedSpinnerAdapter.Helper",
      hCode: `public final class <a href="#ThemedSpinnerAdapter.Helper">ThemedSpinnerAdapter.Helper</a>`,
  
      des: 
        `
        <p>Ye class, ThemedSpinnerAdapter interface ke saath associated helper class hai.</p>
        
  
        <p>ThemedSpinnerAdapter.Helper class ka use ThemedSpinnerAdapter interface ko implement karne wale adapter class ke liye kuchh helper methods ko provide karne ke liye kiya jata hai. Is class ke through aap adapter class ko theme-based customization ke liye support aur flexibility pradaan kar sakte hai.</p>
  
       
        `,
      img: [
        // {
        //   url: "https://nodejspaladres.s3.ap-south-1.amazonaws.com/uploads/Screenshot_20230313_145029.png",
        //   label: "Action bar",
        //   fig: "Figure 1.",
        // },
      ],
      summary: {
        success: true,
  
        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [

            {
              dep: false,
              name: `Helper`,
              id: "Helper(Context)",
              code: `<a href="#Helper(Context)">Helper</a>(@NonNull Context context)`,
              fullCode: `public <a href="#Helper(Context)">Helper</a>(@NonNull Context context)`,

              des: `ThemedSpinnerAdapter.Helper class ka Helper(@NonNull Context context) constructor, ek helper constructor hai, jiska use ThemedSpinnerAdapter ko create karne ke liye kiya jata hai.`,

              longDes: `<p>ThemedSpinnerAdapter.Helper class ka Helper(@NonNull Context context) constructor, ek helper constructor hai, jiska use ThemedSpinnerAdapter ko create karne ke liye kiya jata hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisko use karke ThemedSpinnerAdapter ko create kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

          ],
        },
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "getDropDownViewInflater",
              id: "getDropDownViewInflater()",
              dataTypeName: `@NonNull LayoutInflater`,
              code: `<a href="#getDropDownViewInflater()">getDropDownViewInflater</a>()`,
  
              fullCode: `public @NonNull LayoutInflater <a href="#getDropDownViewInflater()">getDropDownViewInflater</a>()`,

              des: `Is method ka use, ThemedSpinnerAdapter ke drop-down views ko inflate karne ke liye hota hai.`,
  
              longDes: `
              <p>getDropDownViewInflater() method, ThemedSpinnerAdapter.Helper class mein ThemedSpinnerAdapter ke drop-down views ko inflate karne ke liye hota hai. Jab aap apne Spinner ke drop-down views ko create karte hain, to aapko ek LayoutInflater object ki zaroorat hoti hai, jisse aap layout resources se views ko inflate kar sakte hain. Is method se aapko ye LayoutInflater object mil jata hai.</p>
  
              <p>Yeh method, LayoutInflater object return karta hai, jisse drop-down views ko inflate karne ke liye use kiya jata hai.</p>
              `,
  
              parameter: [],
            },




            {
              dep: false,
              name: "getDropDownViewTheme",
              id: "getDropDownViewTheme()",
              dataTypeName: `@Nullable Resources.Theme`,
              code: `<a href="#getDropDownViewTheme()">getDropDownViewTheme</a>()`,
  
              fullCode: `public @Nullable Resources.Theme <a href="#getDropDownViewTheme()">getDropDownViewTheme</a>()`,

              des: `Is method ka use, ThemedSpinnerAdapter ke drop-down views ke theme ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getDropDownViewTheme() method, ThemedSpinnerAdapter.Helper class mein ThemedSpinnerAdapter ke drop-down views ke theme ko retrieve karne ke liye hota hai. Jab aap apne Spinner ke drop-down views ko customize karte hain, to aapko drop-down views ke theme ke saath match karne ke liye ek Resources.Theme object ki zaroorat hoti hai. Is method se aapko ye Resources.Theme object mil jata hai.</p>
  
              <p>Yeh method, Resources.Theme object return karta hai, jisse drop-down views ke theme ko retrieve karne ke liye use kiya jata hai.</p>
              `,
  
              parameter: [],
            },


  
            {
              dep: false,
              name: "setDropDownViewTheme",
              id: "setDropDownViewTheme()",
              dataTypeName: `void`,
              code: `<a href="#setDropDownViewTheme()">setDropDownViewTheme</a>(@Nullable Resources.Theme theme)`,
  
              fullCode: `public void <a href="#setDropDownViewTheme()">setDropDownViewTheme</a>(@Nullable Resources.Theme theme)`,

              des: `Is method ka use, Spinner ke drop-down views ke theme ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setDropDownViewTheme(@Nullable Resources.Theme theme) method, ThemedSpinner class mein Spinner ke drop-down views ke theme ko set karne ke liye hota hai. Agar aap apne Spinner ke drop-down views ko customize karna chahte hain, jaise ki unke text color, background color, etc., to aap ek Resources.Theme object create karke is method ke through use kar sakte hain.</p>
              `,

  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Resources.Theme theme`,
                        des:`<p>Ek Resources.Theme object, jo drop-down views ke theme ko represent karta hai.</p>`,
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
  