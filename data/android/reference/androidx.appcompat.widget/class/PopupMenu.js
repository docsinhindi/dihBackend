module.exports.PopupMenu = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "PopupMenu",
      hCode: `public class <a href="#PopupMenu">PopupMenu</a>`,
  
      des: 
        `
        <p>Ye class, pop-up menu ko implement karne ke liye use hoti hai.</p>
        
  
        <p>PopupMenu class ka use contextual actions, overflow menu, aur anchor-based menu ko display karne ke liye kiya jata hai. Is class ke through aap ek anchor view ke saath jude huye menu options ko pop-up menu ke roop mein dikhaya ja sakta hai.</p>
  
       
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
              name: `PopupMenu`,
              id: "PopupMenu(Context,View)",
              code: `<a href="#PopupMenu(Context,View)">PopupMenu</a>(@NonNull Context context, @NonNull View anchor)`,
              
              fullCode: `public <a href="#PopupMenu(Context,View)">PopupMenu</a>(@NonNull Context context, @NonNull View anchor)`,

              des: `Is constructor ka use karke aap ek popup menu ko ek specific anchor view ke saath associate kar sakte hain, jisse user us anchor view par click karte hai, wahan par popup menu dikhai dega.`,

              longDes: `<p>PopupMenu constructor ka use, dropdown menu ya popup menu ko create karne ke liye hota hai. Is constructor ke parameters mein aapko ek Context object aur ek View object provide karna hota hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter, PopupMenu object ko create karne ke liye application context ko specify karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull View anchor`,
                        des:`<p>Is parameter mein aapko ek anchor view provide karna hota hai. Anchor view, woh view hota hai jiske relative position par popup menu display hoga. Jab user anchor view par click karta hai, wahan par popup menu show hoga.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `PopupMenu`,
              id: "PopupMenu(Context,View,int)",
              code: `<a href="#PopupMenu(Context,View,int)">PopupMenu</a>(@NonNull Context context, @NonNull View anchor, int gravity)`,
              
              fullCode: `public <a href="#PopupMenu(Context,View,int)">PopupMenu</a>(@NonNull Context context, @NonNull View anchor, int gravity)`,

              des: `Is constructor ka use karke aap ek popup menu ko ek specific anchor view ke saath associate kar sakte hain aur menu ka position (gravity) ko customize kar sakte hain.`,

              longDes: `
              <p>PopupMenu constructor ka use, dropdown menu ya popup menu ko create karne ke liye hota hai. Is constructor ke parameters mein aapko ek Context object, ek View object, aur ek gravity parameter provide karna hota hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter, PopupMenu object ko create karne ke liye application context ko specify karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull View anchor`,
                        des:`<p>Is parameter mein aapko ek anchor view provide karna hota hai. Anchor view, woh view hota hai jiske relative position par popup menu display hoga. Jab user anchor view par click karta hai, wahan par popup menu show hoga.</p>`,
                      },
                      {
                        dataTypeName: `int gravity`,
                        des:`<p>Is parameter mein aapko menu ka position (gravity) provide karna hota hai. Gravity, popup menu ke position ko control karta hai. Aap Gravity.START, Gravity.END, Gravity.CENTER, Gravity.TOP, Gravity.BOTTOM, ya inke combinations ka use kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `PopupMenu`,
              id: "PopupMenu(Context,View,int,int,int)",
              code: `<a href="#PopupMenu(Context,View,int,int,int)">PopupMenu</a>(
                @NonNull Context context,
                @NonNull View anchor,
                int gravity,
                @AttrRes int popupStyleAttr,
                @StyleRes int popupStyleRes
            )`,
              
              fullCode: `public <a href="#PopupMenu(Context,View,int,int,int)">PopupMenu</a>(
                @NonNull Context context,
                @NonNull View anchor,
                int gravity,
                @AttrRes int popupStyleAttr,
                @StyleRes int popupStyleRes
            )`,

              des: `Is constructor ka use karke aap ek popup menu ko ek specific anchor view ke saath associate kar sakte hain, menu ka position (gravity) ko customize kar sakte hain, aur popup menu ke style ko bhi customize kar sakte hain.`,

              longDes: `
              <p>PopupMenu constructor ka use, dropdown menu ya popup menu ko create karne ke liye hota hai. Is constructor ke parameters mein aapko ek Context object, ek View object, gravity, popupStyleAttr, aur popupStyleRes provide karna hota hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter, PopupMenu object ko create karne ke liye application context ko specify karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull View anchor`,
                        des:`<p>Is parameter mein aapko ek anchor view provide karna hota hai. Anchor view, woh view hota hai jiske relative position par popup menu display hoga. Jab user anchor view par click karta hai, wahan par popup menu show hoga.</p>`,
                      },
                      {
                        dataTypeName: `int gravity`,
                        des:`<p>Is parameter mein aapko menu ka position (gravity) provide karna hota hai. Gravity, popup menu ke position ko control karta hai. Aap Gravity.START, Gravity.END, Gravity.CENTER, Gravity.TOP, Gravity.BOTTOM, ya inke combinations ka use kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@AttrRes int popupStyleAttr`,
                        des:`<p>Is parameter mein aapko popup menu ke style ke liye XML attribute resource ID provide karna hota hai. Isse aap popup menu ke style ko customize kar sakte hain, XML resource ke attributes ke through.</p>`,
                      },
                      {
                        dataTypeName: `@StyleRes int popupStyleRes`,
                        des:`<p>Is parameter mein aapko popup menu ke style ke liye style resource ID provide karna hota hai. Isse aap popup menu ke style ko ek style resource ke sath customize kar sakte hain.</p>`,
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
              name: "dismiss",
              id: "dismiss()",
              dataTypeName: `void`,
              code: `<a href="#dismiss()">dismiss</a>()`,
  
              fullCode: `public void <a href="#dismiss()">dismiss</a>()`,

              des: `Is method ka upayog, PopupMenu ko hide (dismiss) karne ke liye hota hai.`,
  
              longDes: `
              <p>dismiss() method, PopupMenu ko hide karne ke liye use hota hai. Jab aap ek PopupMenu ko display kar rahe hote hain aur user ne kisi menu item ko select kar liya hai ya phir user ne kisi bahari area par touch kiya hai, tab aapko dismiss() method ka upayog karke PopupMenu ko hide kar dena hota hai.</p>

              <p>Jab PopupMenu dismiss ho jata hai, uska display context khatam ho jata hai, aur kisi bhi further interactions ke liye wo visible nahi rehta hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "getDragToOpenListener",
              id: "getDragToOpenListener()",
              dataTypeName: `@NonNull View.OnTouchListener`,
              code: `<a href="#getDragToOpenListener()">getDragToOpenListener</a>()`,
  
              fullCode: `public @NonNull View.OnTouchListener <a href="#getDragToOpenListener()">getDragToOpenListener</a>()`,

              des: `Is method ka upayog, PopupMenu ko drag karke open karne ke liye ek View.OnTouchListener object provide karne ke liye hota hai.`,
  
              longDes: `
              <p>getDragToOpenListener() method, PopupMenu ko drag karke open karne ke liye ek View.OnTouchListener object provide karta hai. Jab aap ek PopupMenu ko display karne ke liye show() method ka use karte hain, to normally woh long press (tap-and-hold) event par hi open hota hai. Lekin getDragToOpenListener() method ka use karke aap us PopupMenu ko drag karke open kar sakte hain.</p>

              <p>Iska matlab hai ki aap ek View par touch karke use drag (move) karne se PopupMenu open ho jayega. Jab touch ko release karenge, PopupMenu menu options ko dikha dega. Yeh drag-and-open functionality user interface mein ek seamless aur user-friendly experience create karne mein madad karta hai.</p>

              <p>getDragToOpenListener() method ka return type @NonNull View.OnTouchListener hota hai, yani ki ek View.OnTouchListener object return hota hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getGravity",
              id: "getGravity()",
              dataTypeName: `int`,
              code: `<a href="#getGravity()">getGravity</a>()`,
  
              fullCode: `public int <a href="#getGravity()">getGravity</a>()`,

              des: `Is method ka upayog, PopupMenu ke display gravity ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getGravity() method, PopupMenu ke display gravity ko retrieve karne ke liye hota hai. Display gravity ka matlab hota hai ki PopupMenu kis position par display hoga, yaani ki kis taraf se khulega.</p>

              <p>PopupMenu ka display gravity, anchor view ke saath sambandhit hota hai. Jab aap PopupMenu ko show() method ke madhyam se display karte hain, to aap anchor view ko specify karte hain jis par PopupMenu attach hoga. Anchor view aur PopupMenu ke beech mein alignment ka ek important aspect hai. Is alignment ko control karne ke liye getGravity() method ka upayog hota hai.</p>

              <p>getGravity() method ka return type int hota hai, yani ki ye method ek integer value return karta hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "getMenu",
              id: "getMenu()",
              dataTypeName: `@NonNull Menu`,
              code: `<a href="#getMenu()">getMenu</a>()`,
  
              fullCode: `public @NonNull Menu <a href="#getMenu()">getMenu</a>()`,

              des: `Is method ka upayog, PopupMenu ke associated menu ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getMenu() method, PopupMenu ke associated menu ko retrieve karne ke liye hota hai. Jab aap PopupMenu object create karte hain, to aap usmein menu items add karte hain, jise user ke liye options dikhai ja sakte hain.</p>

              <p>getMenu() method ka upayog kisi bhi PopupMenu object se uske associated menu ko access karne ke liye hota hai. Iska matalab, aap is method ka upayog karke PopupMenu ke menu items ko programmatically modify kar sakte hain, unhein hide/show kar sakte hain, ya phir unke properties ko customize kar sakte hain.</p>

              <p>getMenu() method ka return type @NonNull Menu hota hai, yani ki ye method ek non-null Menu object return karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getMenuInflater",
              id: "getMenuInflater()",
              dataTypeName: `@NonNull MenuInflater`,
              code: `<a href="#getMenuInflater()">getMenuInflater</a>()`,
  
              fullCode: `public @NonNull MenuInflater <a href="#getMenuInflater()">getMenuInflater</a>()`,

              des: `Is method ka upayog, PopupMenu ke liye ek MenuInflater object retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getMenuInflater() method, PopupMenu ke liye ek MenuInflater object retrieve karne ke liye hota hai. MenuInflater ka upayog XML resource file se menu items ko inflate karne ke liye hota hai. Jab aap PopupMenu ke menu items ko XML resource file se inflate karna chahte hain, tab getMenuInflater() method ka use karke MenuInflater object retrieve karte hain.</p>

              <p>Is retrieved MenuInflater object ka inflate() method ka use karke XML resource file se PopupMenu ke menu items ko inflate kiya ja sakta hai. Inflated menu items fir PopupMenu ke sath associate ho jate hain aur user unhein dekh aur interact kar sakta hai.</p>

              <p>getMenuInflater() method ka return type @NonNull MenuInflater hota hai, yani ki ye method ek non-null MenuInflater object return karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "inflate",
              id: "inflate()",
              dataTypeName: `void`,

              code: `<a href="#inflate()">inflate</a>(@MenuRes int menuRes)`,
  
              fullCode: `public void <a href="#inflate()">inflate</a>(@MenuRes int menuRes)`,

              des: `Is method ka upayog, PopupMenu ke menu items ko ek specified XML resource file se inflate karne ke liye hota hai.`,
  
              longDes: `
              <p>inflate(@MenuRes int menuRes) method, PopupMenu ke menu items ko ek specified XML resource file se inflate karne ke liye hota hai. Is method ke jariye aap Android resources mein define kiye gaye menu items ka use kar sakte hain, jisse aapko menu items ko programmatic way se define karne ki jarurat nahi hoti hai.</p>

              <p>Aap ek XML resource file mein menu items ko define kar sakte hain, jiska format res/menu directory mein hota hai. XML file mein aap menu items, submenus, icons, aur unke attributes ko define kar sakte hain. inflate(@MenuRes int menuRes) method ka use karke aap specified XML resource file ko PopupMenu ke sath associate kar sakte hain.</p>

              <p>inflate(@MenuRes int menuRes) method void type ka hota hai, yani ki is method se koi specific value return nahi hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@MenuRes int menuRes`,
                        des:`<p>Ye parameter ek integer value hota hai, jo menu XML resource file ka ID hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setForceShowIcon",
              id: "setForceShowIcon()",
              dataTypeName: `void`,

              code: `<a href="#setForceShowIcon()">setForceShowIcon</a>(boolean forceShowIcon)`,
  
              fullCode: `public void <a href="#setForceShowIcon()">setForceShowIcon</a>(boolean forceShowIcon)`,

              des: `Is method ka upayog, PopupMenu ke menu items ke saath icons ko dikhan ke liye aur unhein force show karne ke liye hota hai.`,
  
              longDes: `
              <p>setForceShowIcon(boolean forceShowIcon) method, PopupMenu ke menu items ke saath icons ko dikhan ke liye aur unhein force show karne ke liye hota hai. By default, PopupMenu menu items ke saath icons ko show nahi karta hai, lekin aap is method ka use karke icons ko show kar sakte hain.</p>

              <p>Kuch scenarios mein, menu items ke saath icons ko display karna user experience ko enhance kar sakta hai, jisse users ko options ko recognize karne aur select karne mein madad milti hai. Icons, menu items ko visually distinguishable banate hain aur actions ko samajhne mein asaan karte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean forceShowIcon`,
                        des:`<p>Ye parameter ek boolean value hai, jo icons ko force show karne ke liye use hota hai. Agar forceShowIcon true hai, to PopupMenu menu items ke saath icons ko dikhayega, aur agar false hai, to icons ko hide kar dega.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setGravity",
              id: "setGravity()",
              dataTypeName: `void`,

              code: `<a href="#setGravity()">setGravity</a>(int gravity)`,
  
              fullCode: `public void <a href="#setGravity()">setGravity</a>(int gravity)`,

              des: `Is method ka upayog, PopupMenu ke display gravity ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setGravity(int gravity) method, PopupMenu ke display gravity ko set karne ke liye hota hai. Display gravity ka matlab hota hai ki PopupMenu kis position par display hoga, yaani ki kis taraf se khulega.</p>

              <p>PopupMenu ka display gravity, anchor view ke saath sambandhit hota hai. By default, PopupMenu bottom gravity par open hota hai. Lekin aap setGravity(int gravity) method ka use karke PopupMenu ko desired gravity mein open kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int gravity`,
                        des:`<p>Ye parameter ek integer value hota hai, jo PopupMenu ke display gravity ko represent karta hai. Ismein aap Android ke Gravity class mein define kiye gaye constants ka use kar sakte hain, jaise Gravity.TOP, Gravity.BOTTOM, Gravity.LEFT, Gravity.RIGHT, Gravity.CENTER, etc.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setOnDismissListener",
              id: "setOnDismissListener()",
              dataTypeName: `void`,

              code: `<a href="#setOnDismissListener()">setOnDismissListener</a>(@Nullable PopupMenu.OnDismissListener listener)`,
  
              fullCode: `public void <a href="#setOnDismissListener()">setOnDismissListener</a>(@Nullable PopupMenu.OnDismissListener listener)`,

              des: `Is method ka upayog, PopupMenu ko dismiss (hide) hone par ek listener ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setOnDismissListener(@Nullable PopupMenu.OnDismissListener listener) method, PopupMenu ko dismiss hone par ek listener ko set karne ke liye hota hai. Jab bhi aap PopupMenu ko dismiss karte hain, yani ki use hide karte hain, to us time par OnDismissListener ke onDismiss() method call hota hai.</p>

              <p>OnDismissListener interface ek callback interface hota hai, jiska ek method onDismiss(PopupMenu menu) hota hai. Is method ko implement karke aap apne custom logic ko define kar sakte hain, jo PopupMenu dismiss hone par execute hoga.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable PopupMenu.OnDismissListener listener`,
                        des:`<p>Ye parameter ek PopupMenu.OnDismissListener object leta hai, jo PopupMenu ke dismiss hone par listener ka implementation represent karta hai. Agar aap null pass karte hain, to koi listener set nahi hota hai aur koi specific action execute nahi hota hai PopupMenu dismiss hone par.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setOnMenuItemClickListener",
              id: "setOnMenuItemClickListener()",
              dataTypeName: `void`,

              code: `<a href="#setOnMenuItemClickListener()">setOnMenuItemClickListener</a>(
                @Nullable PopupMenu.OnMenuItemClickListener listener
            )`,
  
              fullCode: `public void <a href="#setOnMenuItemClickListener()">setOnMenuItemClickListener</a>(
                @Nullable PopupMenu.OnMenuItemClickListener listener
            )`,

              des: `Is method ka upayog, PopupMenu ke menu items par click karne par ek listener ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setOnMenuItemClickListener(@Nullable PopupMenu.OnMenuItemClickListener listener) method, PopupMenu ke menu items par click karne par ek listener ko set karne ke liye hota hai. Jab bhi koi menu item select hota hai, yani ki user us item par click karta hai, to OnMenuItemClickListener ke onMenuItemClick(MenuItem item) method call hota hai.</p>

              <p>OnMenuItemClickListener ek interface hota hai, jiska ek method onMenuItemClick(MenuItem item) hota hai. Is method ko implement karke aap apne custom logic ko define kar sakte hain, jo kisi specific menu item par click hone par execute hoga.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable PopupMenu.OnMenuItemClickListener listener`,
                        des:`<p>Ye parameter ek PopupMenu.OnMenuItemClickListener object leta hai, jo PopupMenu ke menu items par click hone par listener ka implementation represent karta hai. Agar aap null pass karte hain, to koi listener set nahi hota hai aur koi specific action execute nahi hota hai PopupMenu ke menu items par click hone par.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "show",
              id: "show()",
              dataTypeName: `void`,

              code: `<a href="#show()">show</a>()`,
  
              fullCode: `public void <a href="#show()">show</a>()`,

              des: `Is method ka upayog, PopupMenu ko display karne ke liye hota hai.`,
  
              longDes: `
              <p>show() method, PopupMenu ko display karne ke liye hota hai. Jab aap show() method ko call karte hain, PopupMenu view screen par appear ho jata hai, jismein us context menu ke options dikhai jaate hain. show() method ko call karne ke liye, aapko ek anchor view specify karna hota hai, jiske around PopupMenu dikhaya jayega.</p>
              `,

              parameter: [],
            },


          ],
        },
  
        
  

      },
    });
  };
  