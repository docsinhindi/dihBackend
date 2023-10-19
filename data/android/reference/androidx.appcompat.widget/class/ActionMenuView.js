module.exports.ActionMenuView = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionMenuView",
      hCode: `public class <a href="#ActionMenuView">ActionMenuView</a>  extends LinearLayoutCompat`,
  
      des: 
        `
        <p>Ye class, Android application ke action bar mein menu items ko display karne ke liye use hoti hai.</p>
        
  
        <p>ActionMenuView ka use ActionBar ya Toolbar ke andar menu items ko dikhane ke liye kiya jaata hai. Isse hum menu items ko ek organized manner mein arrange kar sakte hain, jaise ki icons ke saath, overflow ke liye ellipsis, etc. Ye class, action bar ke overflow menu ko bhi handle karne ki capability rakhti hai.</p>
       
        `,

        //
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
              name: `ActionMenuView`,
              id: "ActionMenuView(Context)",
              code: `ActionMenuView(@NonNull Context context)`,
              fullCode: `public ActionMenuView(@NonNull Context context)`,

              des: `Ye constructor, ActionMenuView class ka ek instance create karne ke liye use hota hai.`,

              longDes: `<p>Ye constructor, ActionMenuView class ka ek instance create karne ke liye use hota hai.</p>

              <p>ActionMenuView class ViewGroup class se inherit hoti hai, aur iska main purpose action menu items ko display karna aur handle karna hai. Action menu items typically include icons or text that represent specific actions, such as "Save," "Delete," or "Share."</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Non-null Context object, jisme ActionMenuView create kiya ja raha hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `ActionMenuView`,
              id: "ActionMenuView(Context,AttributeSet)",
              code: `ActionMenuView(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public ActionMenuView(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Ye constructor, ActionMenuView class ka instance create karne ke liye use hota hai aur XML layout file se attribute set ko bhi handle karta hai.`,

              longDes: `<p>Ye constructor, ActionMenuView class ka instance create karne ke liye use hota hai aur XML layout file se attribute set ko bhi handle karta hai.</p>

              <p>ActionMenuView class ViewGroup class se inherit hoti hai, aur iska main purpose action menu items ko display karna aur handle karna hai. Action menu items typically include icons or text that represent specific actions, such as "Save," "Delete," or "Share."</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Non-null Context object, jisme ActionMenuView create kiya ja raha hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Nullable AttributeSet object, jisse XML layout file se attribute set ko represent kiya jata hai.</p>`,
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
              name: "dismissPopupMenus",
              id: "dismissPopupMenus()",
              dataTypeName: `void`,
              code: `<a href="#dismissPopupMenus()">dismissPopupMenus</a>()`,
  
              fullCode: `public void <a href="#dismissPopupMenus()">dismissPopupMenus</a>()`,

              des: `Ye method, ActionMenuView mein open huye popup menus ko dismiss (band) karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView mein open huye popup menus ko dismiss (band) karne ke liye use hota hai.</p>

              <p>Is method ka use ActionMenuView ke huye sabhi popup menus ko dismiss karne ke liye hota hai. Jab ActionMenuView par koi popup menu open hota hai, jaise ki overflow menu ya sub-menus, tab hum dismissPopupMenus() method ka use karke unhe band kar sakte hain.</p>
  
              <p>Ye method internally MenuBuilder class ke dismissPopupMenus() method ko invoke karta hai, jo ActionMenuView ke saare popup menus ko dismiss kar deta hai.</p>
              `,

              parameter: [],
            },





            {
              dep: false,
              name: "dispatchPopulateAccessibilityEvent",
              id: "dispatchPopulateAccessibilityEvent()",
              dataTypeName: `boolean`,
              code: `<a href="#dispatchPopulateAccessibilityEvent()">dispatchPopulateAccessibilityEvent</a>(AccessibilityEvent event)`,
  
              fullCode: `public boolean <a href="#dispatchPopulateAccessibilityEvent()">dispatchPopulateAccessibilityEvent</a>(AccessibilityEvent event)`,

              des: `Ye method, AccessibilityEvent ko populate karne ke liye use hota hai. AccessibilityEvent, accessibility services ke liye information provide karne ke liye use hota hai.`,
  
              longDes: `
              <p>dispatchPopulateAccessibilityEvent() method ka use AccessibilityEvent ko populate karne ke liye hota hai. Ye method override kiya jata hai to customize accessibility event ke content aur details ko set karne ke liye.</p>
  
              <p>Method ki return value boolean hoti hai. Agar hum true return karte hain, to ye indicate karta hai ki humne accessibility event ko populate kar liya hai aur further event propagation rok di gayi hai. Agar false return kiya jata hai, to ye indicate karta hai ki accessibility event ko populate nahi kiya gaya hai aur event propagation continue hoti hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AccessibilityEvent event`,
                        des:`<p>AccessibilityEvent object, jise populate karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "generateLayoutParams",
              id: "generateLayoutParams()",
              dataTypeName: `ActionMenuView.LayoutParams`,
              code: `<a href="#generateLayoutParams()">generateLayoutParams</a>(AttributeSet attrs)`,
  
              fullCode: `public ActionMenuView.LayoutParams <a href="#generateLayoutParams()">generateLayoutParams</a>(AttributeSet attrs)`,

              des: `Ye method, XML attributes se ActionMenuView.LayoutParams object ko generate karne ke liye use hota hai.`,
  
              longDes: `
  
              <p>generateLayoutParams(AttributeSet attrs) method, XML attributes se ActionMenuView.LayoutParams object ko generate karne ke liye use hota hai. Hum is method ko use karke attribute set object ke basis par layout parameters ko customize kar sakte hain aur specific layout requirements ko handle kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>AttributeSet object, jisse XML attributes ko represent kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "getMenu",
              id: "getMenu()",
              dataTypeName: `Menu`,
              code: `<a href="#getMenu()">getMenu</a>()`,
  
              fullCode: `public Menu <a href="#getMenu()">getMenu</a>()`,

              des: `Is method ka use ActionMenuView ke menu items ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use ActionMenuView ke menu items ko retrieve karne ke liye hota hai. Jab hum ActionMenuView ka instance create karte hain, usmein ek Menu object bhi create hota hai, jismein hum menu items ko add karte hain. getMenu() method ka use karke hum us Menu object ko retrieve kar sakte hain.</p>
              `,

              parameter: [],
            },




            {
              dep: false,
              name: "getOverflowIcon",
              id: "getOverflowIcon()",
              dataTypeName: `@Nullable Drawable`,
              code: `<a href="#getOverflowIcon()">getOverflowIcon</a>()`,
  
              fullCode: `public @Nullable Drawable <a href="#getOverflowIcon()">getOverflowIcon</a>()`,

              des: `Ye method, ActionMenuView ke overflow icon (overflow menu ke icon) ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView ke overflow icon (overflow menu ke icon) ko retrieve karne ke liye use hota hai.</p>

              <p>Method ki return value Drawable type ki hoti hai, yani ek drawable object. Is method ke through hum ActionMenuView ke overflow icon ko represent karne wale drawable object ko retrieve kar sakte hain.</p>

              <p>Overflow icon, typically three dots ke symbol (⋮) ki form mein hota hai, jo indicate karta hai ki action menu items ko overflow menu mein display kiya gaya hai.</p>
              `,

              parameter: [],
            },




            {
              dep: false,
              name: "getPopupTheme",
              id: "getPopupTheme()",
              dataTypeName: `int`,
              code: `<a href="#getPopupTheme()">getPopupTheme</a>()`,
  
              fullCode: `public int <a href="#getPopupTheme()">getPopupTheme</a>()`,

              des: `Ye method, ActionMenuView ke popup menu ke theme resource ID ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView ke popup menu ke theme resource ID ko retrieve karne ke liye use hota hai.</p>

              <p>Method ki return value int type ki hoti hai, yani ek theme resource ID. Is method ke through hum ActionMenuView ke popup menu ke theme resource ID ko retrieve kar sakte hain.</p>

              <p>Popup theme, ActionMenuView ke overflow menu aur sub-menus ko display karne ke liye use hota hai. Ye theme resource ID, styles.xml file mein define kiya jata hai aur popup menu ke appearance, colors, fonts, etc. ko control karta hai.</p>
              `,

              parameter: [],
            },





            {
              dep: false,
              name: "hideOverflowMenu",
              id: "hideOverflowMenu()",
              dataTypeName: `boolean`,
              code: `<a href="#hideOverflowMenu()">hideOverflowMenu</a>()`,
  
              fullCode: `public boolean <a href="#hideOverflowMenu()">hideOverflowMenu</a>()`,

              des: `Ye method, ActionMenuView ke overflow menu ko hide karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView ke overflow menu ko hide karne ke liye use hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar overflow menu successfully hide ho jata hai, to true return hota hai. Agar overflow menu already hide hai ya hide karne mein koi issue hai, to false return hota hai.</p>

              <p>Overflow menu, ActionMenuView mein display hote hai jab available space kam ho jata hai aur action menu items ko pura nahi dikhaya ja sakta hai. Overflow menu typically three dots ke symbol (⋮) ki form mein hota hai. Jab overflow menu open hota hai, tab additional action menu items show hote hai jo space constraint ki wajah se visible nahi ho pa rahe the.</p>
              `,

              parameter: [],
            },






            {
              dep: false,
              name: "isOverflowMenuShowing",
              id: "isOverflowMenuShowing()",
              dataTypeName: `boolean`,
              code: `<a href="#isOverflowMenuShowing()">isOverflowMenuShowing</a>()`,
  
              fullCode: `public boolean <a href="#isOverflowMenuShowing()">isOverflowMenuShowing</a>()`,

              des: `Ye method, ActionMenuView ke overflow menu ka show/hide status ko check karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView ke overflow menu ka show/hide status ko check karne ke liye use hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar overflow menu currently show ho raha hai, to true return hota hai. Agar overflow menu hide hai ya show karne mein koi issue hai, to false return hota hai.</p>

              <p>Overflow menu, ActionMenuView mein display hote hai jab available space kam ho jata hai aur action menu items ko pura nahi dikhaya ja sakta hai. Overflow menu typically three dots ke symbol (⋮) ki form mein hota hai. Jab overflow menu open hota hai, tab additional action menu items show hote hai jo space constraint ki wajah se visible nahi ho pa rahe the.</p>
              `,

              parameter: [],
            },





            {
              dep: false,
              name: "onConfigurationChanged",
              id: "onConfigurationChanged()",
              dataTypeName: `void`,
              code: `<a href="#onConfigurationChanged()">onConfigurationChanged</a>(Configuration newConfig)`,
  
              fullCode: `public void <a href="#onConfigurationChanged()">onConfigurationChanged</a>(Configuration newConfig)`,

              des: `Ye method, ActionMenuView ke configuration change events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView ke configuration change events ko handle karne ke liye use hota hai.</p>

              <p>onConfigurationChanged() method, ActionMenuView ke configuration change events, jaise ki device orientation change, language change, font scale change, etc., ko handle karne ke liye override kiya jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Configuration newConfig`,
                        des:`<p>Configuration object, jo new configuration details ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "onDetachedFromWindow",
              id: "onDetachedFromWindow()",
              dataTypeName: `void`,
              code: `<a href="#onDetachedFromWindow()">onDetachedFromWindow</a>()`,
  
              fullCode: `public void <a href="#onDetachedFromWindow()">onDetachedFromWindow</a>()`,

              des: `Ye method, ActionMenuView ko window se detach hone ke event ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView ko window se detach hone ke event ko handle karne ke liye use hota hai.</p>

              <p>Jab ActionMenuView window se detach hoti hai, tab uska display area khatam ho jata hai, aur usmein visible menu items aur overflow menu bhi remove ho jate hain. Is scenario mein, hum onDetachedFromWindow() method ka use karke kuch cleanup tasks ko perform kar sakte hain, jaise ki resources release karna, listeners ko unregister karna, ya state ko reset karna.</p>
              `,

              parameter: [],
            },





            {
              dep: false,
              name: "setOnMenuItemClickListener",
              id: "setOnMenuItemClickListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnMenuItemClickListener()">setOnMenuItemClickListener</a>(
                ActionMenuView.OnMenuItemClickListener listener
            )`,
  
              fullCode: `public void <a href="#setOnMenuItemClickListener()">setOnMenuItemClickListener</a>(
                ActionMenuView.OnMenuItemClickListener listener
            )`,

              des: `Ye method, ActionMenuView par menu item click events ko handle karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView par menu item click events ko handle karne ke liye use hota hai.</p>

              <p>Hum setOnMenuItemClickListener() method ka use karke ActionMenuView par menu item click events ka listener set kar sakte hain. OnMenuItemClickListener interface ki implementation ko pass karke hum menu item click events ko capture kar sakte hain aur apne logic ke hisaab se handle kar sakte hain.</p>

              <p>OnMenuItemClickListener interface mein onMenuItemClick() method define hota hai, jise hum implement karte hain. Is method ke andar hum menu item click events ko handle kar sakte hain aur apne desired actions ko perform kar sakte hain, jaise ki specific menu item par click hone par kuch action execute karna.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ActionMenuView.OnMenuItemClickListener listener`,
                        des:`<p>ActionMenuView.OnMenuItemClickListener interface ka ek object, jisse menu item click events ko handle kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setOverflowIcon",
              id: "setOverflowIcon()",
              dataTypeName: `void`,
              code: `<a href="#setOverflowIcon()">setOverflowIcon</a>(@Nullable Drawable icon)`,
  
              fullCode: `public void <a href="#setOverflowIcon()">setOverflowIcon</a>(@Nullable Drawable icon)`,

              des: `Ye method, ActionMenuView ke overflow icon (overflow menu ke icon) ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView ke overflow icon (overflow menu ke icon) ko set karne ke liye use hota hai.</p>

              <p>Overflow icon, typically three dots ke symbol (⋮) ki form mein hota hai, jo indicate karta hai ki action menu items ko overflow menu mein display kiya gaya hai. setOverflowIcon() method ka use karke hum custom drawable icon ko overflow icon ke roop mein set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable icon`,
                        des:`<p>Nullable Drawable object, jisse overflow icon set kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setPopupTheme",
              id: "setPopupTheme()",
              dataTypeName: `void`,
              code: `<a href="#setPopupTheme()">setPopupTheme</a>(@StyleRes int resId)`,
  
              fullCode: `public void <a href="#setPopupTheme()">setPopupTheme</a>(@StyleRes int resId)`,

              des: `Ye method, ActionMenuView ke popup menu ke theme resource ID ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView ke popup menu ke theme resource ID ko set karne ke liye use hota hai.</p>

              <p>Popup theme, ActionMenuView ke overflow menu aur sub-menus ko display karne ke liye use hota hai. Ye theme resource ID, styles.xml file mein define kiya jata hai aur popup menu ke appearance, colors, fonts, etc. ko control karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@StyleRes int resId`,
                        des:`<p>Resource ID, jo popup menu ke theme ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "showOverflowMenu",
              id: "showOverflowMenu()",
              dataTypeName: `boolean`,
              code: `<a href="#showOverflowMenu()">showOverflowMenu</a>()`,
  
              fullCode: `public boolean <a href="#showOverflowMenu()">showOverflowMenu</a>()`,

              des: `Ye method, ActionMenuView ke overflow menu ko display karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, ActionMenuView ke overflow menu ko display karne ke liye use hota hai.</p>

              <p>Method ki return value boolean hoti hai. Agar overflow menu successfully show ho jata hai, to true return hota hai. Agar overflow menu already visible hai ya show karne mein koi issue hai, to false return hota hai.</p>

              <p>Overflow menu, ActionMenuView mein display hote hai jab available space kam ho jata hai aur action menu items ko pura nahi dikhaya ja sakta hai. Overflow menu typically three dots ke symbol (⋮) ki form mein hota hai. Jab overflow menu open hota hai, tab additional action menu items show hote hai jo space constraint ki wajah se visible nahi ho pa rahe the.</p>
              `,

              parameter: [],
            },
  

          ],
        },
  
        
         
        protectedMethod: {
          success: true,
          name: "Protected methods",
  
          method: [
            {
              dep: false,
              name: "checkLayoutParams",
              id: "checkLayoutParams()",
              dataTypeName: `boolean`,
              code: `<a href="#checkLayoutParams()">checkLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              fullCode: `protected boolean <a href="#checkLayoutParams()">checkLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              des: `Ye method, ActionMenuView ke child views ke layout parameters ko validate karne ke liye use hota hai.`,
  
              longDes: `
                <p>Ye method, ActionMenuView ke child views ke layout parameters ko validate karne ke liye use hota hai.</p>
  
                <p>checkLayoutParams() method hume ek boolean value return karta hai. Agar layout parameters p valid hai, to true return hota hai. Agar p invalid hai, to false return hota hai.</p>

                <p>ActionMenuView child views ke layout parameters ko validate karne ke liye hum checkLayoutParams() method ka use kar sakte hain. Is method ke through hum check kar sakte hain ki diye gaye layout parameters sahi format aur properties ke sath hai ya nahi.</p>
                    `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ViewGroup.LayoutParams p`,
                      des: `<p>ViewGroup.LayoutParams object, jise validate kiya jayega.</p>`,
                    },
                  ],
                },
              ],
            },
  



            {
              dep: false,
              name: "generateDefaultLayoutParams",
              id: "generateDefaultLayoutParams()",
              dataTypeName: `ActionMenuView.LayoutParams`,
              code: `<a href="#generateDefaultLayoutParams()">generateDefaultLayoutParams</a>()`,
  
              fullCode: `protected ActionMenuView.LayoutParams <a href="#generateDefaultLayoutParams()">generateDefaultLayoutParams</a>()`,
  
              des: `Ye method, ActionMenuView ke default layout parameters ko generate karne ke liye use hota hai.`,
  
              longDes: `
                <p>Ye method, ActionMenuView ke default layout parameters ko generate karne ke liye use hota hai.</p>
  
                <p>Method ki return value ActionMenuView.LayoutParams type ki hoti hai, yani ek ActionMenuView ke layout parameters object. Is method ke through hum ActionMenuView ke default layout parameters ko generate kar sakte hain.</p>
  
                <p>Default layout parameters, ActionMenuView ke child views ke liye initial layout properties ko define karte hain. Ye layout parameters set karne se pehle, child views ke layout properties ko customize karne ke liye modify kiya ja sakta hai.</p>
                    `,
  
              parameter: [],
            },
  


            {
              dep: false,
              name: "generateLayoutParams",
              id: "generateLayoutParams()",
              dataTypeName: `ActionMenuView.LayoutParams`,
              code: `<a href="#generateLayoutParams()">generateLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              fullCode: `protected ActionMenuView.LayoutParams <a href="#generateLayoutParams()">generateLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              des: `Ye method, ActionMenuView ke child views ke layout parameters ko generate karne ke liye use hota hai, based on the provided ViewGroup.LayoutParams object.`,
  
              longDes: `
                <p>Ye method, ActionMenuView ke child views ke layout parameters ko generate karne ke liye use hota hai, based on the provided ViewGroup.LayoutParams object.</p>
  
                <p>Method ki return value ActionMenuView.LayoutParams type ki hoti hai, yani ek ActionMenuView ke layout parameters object. Is method ke through hum ActionMenuView ke child views ke layout parameters ko generate kar sakte hain, based on the provided ViewGroup.LayoutParams object.</p>
                    `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ViewGroup.LayoutParams p`,
                      des: `<p>ViewGroup.LayoutParams object, jise base ke roop mein liya jayega child views ke layout parameters ko generate karne ke liye.</p>`,
                    },
                  ],
                },
              ],
            },
  



            {
              dep: false,
              name: "onLayout",
              id: "onLayout()",
              dataTypeName: `void`,
              code: `<a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              fullCode: `protected void <a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              des: `Ye method, ActionMenuView ke child views ko layout karne ke liye use hota hai.`,
  
              longDes: `
                <p>Ye method, ActionMenuView ke child views ko layout karne ke liye use hota hai.</p>
  
                <p>Jab ActionMenuView ka layout hierarchy change hota hai, tab onLayout() method automatically invoke hota hai. Is method ke andar hum apne child views ko layout positions par place kar sakte hain, unki sizes aur coordinates ko set kar sakte hain.</p>

                <p>onLayout() method mein typically hum ViewGroup ki subclasses mein child views ko layout positions par arrange karne ke logic implement karte hain. Hum ViewGroup.LayoutParams object se child views ke layout properties ko access karke unki positions aur sizes ko set kar sakte hain.</p>
                    `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `boolean changed`,
                      des: `<p>boolean value, indicate karta hai ki layout mein koi change hua hai ya nahi.</p>`,
                    },
                    {
                      dataTypeName: `int left`,
                      des: `<p>int value, view ka left coordinate.</p>`,
                    },
                    {
                      dataTypeName: `int top`,
                      des: `<p>int value, view ka top coordinate.</p>`,
                    },
                    {
                      dataTypeName: `int right`,
                      des: `<p>int value, view ka right coordinate.</p>`,
                    },
                    {
                      dataTypeName: `int bottom`,
                      des: `<p>int value, view ka bottom coordinate.</p>`,
                    },
                  ],
                },
              ],
            },
  



            {
              dep: false,
              name: "onMeasure",
              id: "onMeasure()",
              dataTypeName: `void`,
              code: `<a href="#onMeasure()">onMeasure</a>(int widthMeasureSpec, int heightMeasureSpec)`,
  
              fullCode: `protected void <a href="#onMeasure()">onMeasure</a>(int widthMeasureSpec, int heightMeasureSpec)`,
  
              des: `Ye method, ActionMenuView ke child views ke dimensions (width and height) ko measure karne ke liye use hota hai.`,
  
              longDes: `
                <p>Ye method, ActionMenuView ke child views ke dimensions (width and height) ko measure karne ke liye use hota hai.</p>
  
                <p>Jab ActionMenuView ka layout hierarchy create hota hai ya dimensions change hote hain, tab onMeasure() method automatically invoke hota hai. Is method ke andar hum apne child views ke dimensions ko measure kar sakte hain, unki width aur height ko set kar sakte hain.</p>

                <p>onMeasure() method mein hum typically ViewGroup ki subclasses mein child views ke dimensions ko measure karne ke logic implement karte hain. Hum MeasureSpec class ke methods ka use karke child views ke dimensions ko measure karte hain, jaise ki MeasureSpec.getSize() aur MeasureSpec.getMode().</p>
                    `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int widthMeasureSpec`,
                      des: `<p>int value, dimension ko measure karne ke liye width information ke saath provide kiya gaya hai.</p>`,
                    },
                    {
                      dataTypeName: `int heightMeasureSpec`,
                      des: `<p>int value, dimension ko measure karne ke liye height information ke saath provide kiya gaya hai.</p>`,
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
  