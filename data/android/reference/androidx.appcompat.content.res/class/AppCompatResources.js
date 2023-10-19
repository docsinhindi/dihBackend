module.exports.AppCompatResources = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatResources",
      hCode: `public final class <a href="#AppCompatResources">AppCompatResources</a>`,
  
      des: 
        `
        <p>AppCompatResources class ka use, AppCompat theme aur styling ke sath resources ko load aur manage karne ke liye kiya jata hai. Is class ke methods, Android resources ke backward compatibility ke sath AppCompat library ke theme, drawable, color, aur anya resources ko resolve aur retrieve karne ka kaam karte hai.</p>
        
  
        <p>AppCompatResources class ka use karke, developers AppCompat library ke features aur backward compatibility ke sath resources ko load aur manage kar sakte hai. Is class ke methods ka use karke, theme-aware resources, drawable, aur colors ko retrieve kar sakte hai, jo Android version ke sath-sath backward compatibility ka support rakhte hai.</p>
  
       
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
  
      
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "getColorStateList",
              id: "getColorStateList()",
              dataTypeName: `static ColorStateList`,
              code: `<a href="#getColorStateList()">getColorStateList</a>(@NonNull Context context, @ColorRes int resId)`,
  
              fullCode: `public static ColorStateList <a href="#getColorStateList()">getColorStateList</a>(@NonNull Context context, @ColorRes int resId)`,

              des: `Ye method, specified resource ID se ColorStateList object ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getColorStateList() method ka use karke hum ColorStateList object ko retrieve kar sakte hain. ColorStateList multiple colors ke set ko represent karta hai, jisme har ek color ko unke corresponding state ke sath associate kiya jata hai. State ke basis par color select karne ke liye ColorStateList ka use kiya jata hai.</p>
  
              <p>getColorStateList() method, specified resId parameter ke corresponding ColorStateList object ko retrieve karta hai. Is method ke andar hum context object aur resource ID ka use karke resource ko resolve kar sakte hain aur uska ColorStateList object receive kar sakte hain.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameter",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisme resource ko retrieve karna hai.</p>`,
                      },
                      {
                        dataTypeName: `@ColorRes int resId`,
                        des:`<p>Resource ID, jiska corresponding ColorStateList retrieve karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: "getDrawable",
              id: "getDrawable()",
              dataTypeName: `static @Nullable Drawable`,
              code: `<a href="#getDrawable()">getDrawable</a>@NonNull Context context, @DrawableRes int resId)`,
  
              fullCode: `public static @Nullable Drawable <a href="#getDrawable()">getDrawable</a>(@NonNull Context context, @DrawableRes int resId)`,

              des: `Ye method, drawable resource ID se Drawable object retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>getDrawable() method ka use karke hum Drawable object ko retrieve kar sakte hain, jiska base drawable resource ID resId ke roop mein specify kiya gaya hai. Drawable object kisi bhi graphical element ko represent karta hai, jaise images, shapes, gradients, etc.</p>
  
              <p>getDrawable() method, specified resId parameter se Drawable object ko retrieve karta hai. Is method ka use karke hum drawable resource ID ke basis par Drawable object ko retrieve kar sakte hain.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameter",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisme resource ID ko resolve karna hai.</p>`,
                      },
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Resource ID, jise Drawable object retrieve karne ke liye use karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            //


  

          ],
        },
  
        
      
     
  

      },
    });
  };
  