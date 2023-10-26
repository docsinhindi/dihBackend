module.exports.Toolbar = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "Toolbar",
      hCode: `public class <a href="#Toolbar">Toolbar</a>  extends ViewGroup implements MenuHost`,
  
      des: 
        `
        <p>Ye class, action bar ke liye custom toolbar implementation ko provide karti hai.</p>
        
  
        <p>Toolbar class ka use action bar ke jagah par custom toolbar ko implement karne ke liye kiya jata hai. Ye class, application ke title, logo, menu options, aur custom views ko ek unified toolbar ke roop mein combine karke display karta hai.</p>
  
       
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
              name: `Toolbar`,
              id: "Toolbar(Context)",
              code: `<a href="#Toolbar(Context)">Toolbar</a>(@NonNull Context context)`,
              fullCode: `public <a href="#Toolbar(Context)">Toolbar</a>(@NonNull Context context)`,

              des: `Is constructor ka use, Toolbar view ko code mein dynamically create karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar(@NonNull Context context) constructor ka use, Toolbar view ko code mein create karne ke liye hota hai. Aap is constructor ko use karke Toolbar object bana sakte hain, aur usko layout XML file mein inflate ya kisi ViewGroup mein add kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisse Toolbar create kiya jata hai. Typically, aap apne activity ya fragment ka context pass karte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `Toolbar`,
              id: "Toolbar(Context,AttributeSet)",
              code: `<a href="#Toolbar(Context,AttributeSet)">Toolbar</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public <a href="#Toolbar(Context,AttributeSet)">Toolbar</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Is constructor ka use, Toolbar view ko XML layout file mein define karne ke liye hota hai, jisse aap usko layout file se inflate kar sakte hain aur uske attributes ko set kar sakte hain.`,

              longDes: `
              <p>Toolbar(@NonNull Context context, @Nullable AttributeSet attrs) constructor ka use, Toolbar view ko XML layout file mein define karne ke liye hota hai. Aap is constructor ko use karke Toolbar object bana sakte hain, aur XML layout file se uske attributes ko set kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisse Toolbar create kiya jata hai. Typically, aap apne activity ya fragment ka context pass karte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, jo XML layout file se Toolbar attributes ko retrieve karne ke liye use hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `Toolbar`,
              id: "Toolbar(Context,AttributeSet,int)",
              code: `<a href="#Toolbar(Context,AttributeSet,int)">Toolbar</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public <a href="#Toolbar(Context,AttributeSet,int)">Toolbar</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Is constructor ka use, Toolbar view ko XML layout file mein define karne ke liye hota hai, jisse aap usko layout file se inflate kar sakte hain aur uske attributes ko set kar sakte hain. defStyleAttr parameter ka use view ke default style attribute ko apply karne ke liye hota hai.`,

              longDes: `
              <p>Toolbar(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) constructor ka use, Toolbar view ko XML layout file mein define karne ke liye hota hai. Aap is constructor ko use karke Toolbar object bana sakte hain, aur XML layout file se uske attributes ko set kar sakte hain. Is constructor ke defStyleAttr parameter ka use view ke default style attribute ko apply karne ke liye hota hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisse Toolbar create kiya jata hai. Typically, aap apne activity ya fragment ka context pass karte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, jo XML layout file se Toolbar attributes ko retrieve karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Default style attribute, jo Toolbar view ke default style ko define karta hai. Isse aap view ke style attributes ko override kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



          ],
        },
        
//
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "addMenuProvider",
              id: "addMenuProvider(MenuProvider)",
              dataTypeName: `void`,
              code: `<a href="#addMenuProvider(MenuProvider)">addMenuProvider</a>(@NonNull MenuProvider provider)`,
  
              fullCode: `@MainThread</br>public void <a href="#addMenuProvider(MenuProvider)">addMenuProvider</a>(@NonNull MenuProvider provider)`,

              des: `Is method ka use, Toolbar ke menu items ko dynamic tarike se provide karne ke liye hota hai.`,
  
              longDes: `
              <p>addMenuProvider(@NonNull MenuProvider provider) method ka use, Toolbar ke menu items ko dynamic tarike se provide karne ke liye hota hai. Aap apne app ke requirements ke hisab se custom menu items ko create karne ke liye ek MenuProvider implement kar sakte hain aur use is method ke through Toolbar se jod sakte hain.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull MenuProvider provider`,
                        des:`<p>Ek MenuProvider object, jo Toolbar ke liye custom menu items provide karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            

            {
              dep: false,
              name: "addMenuProvider",
              id: "addMenuProvider(MenuProvider,LifecycleOwner)",
              dataTypeName: `void`,
              code: `<a href="#addMenuProvider(MenuProvider,LifecycleOwner)">addMenuProvider</a>(
                @NonNull MenuProvider provider,
                @NonNull LifecycleOwner owner
            )`,
  
              fullCode: `@MainThread</br>public void <a href="#addMenuProvider(MenuProvider,LifecycleOwner)">addMenuProvider</a>(
                @NonNull MenuProvider provider,
                @NonNull LifecycleOwner owner
            )`,

              des: `Is method ka use, Toolbar ke menu items ko dynamic tarike se provide karne ke liye hota hai aur sath hi sath menu items ko lifecycle events ke sath bind karne ke liye bhi use hota hai.`,
  
              longDes: `
              <p>addMenuProvider(@NonNull MenuProvider provider, @NonNull LifecycleOwner owner) method ka use, Toolbar ke menu items ko dynamic tarike se provide karne ke liye hota hai. Aap apne app ke requirements ke hisab se custom menu items ko create karne ke liye ek MenuProvider implement kar sakte hain aur use is method ke through Toolbar se jod sakte hain. Iske sath hi, aap owner parameter ke jariye Toolbar ke menu items ko lifecycle events ke sath bind kar sakte hain, jisse menu items ko activity or fragment lifecycle ke hisab se handle kiya ja sake.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull MenuProvider provider`,
                        des:`<p>Ek MenuProvider object, jo Toolbar ke liye custom menu items provide karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull LifecycleOwner owner`,
                        des:`<p>Ek LifecycleOwner object, jisse Toolbar ke menu items ko lifecycle events ke sath bind kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            

            {
              dep: false,
              name: "addMenuProvider",
              id: "addMenuProvider(MenuProvider,LifecycleOwner,Lifecycle.State)",
              dataTypeName: `void`,
              code: `<a href="#addMenuProvider(MenuProvider,LifecycleOwner,Lifecycle.State)">addMenuProvider</a>(
                @NonNull MenuProvider provider,
                @NonNull LifecycleOwner owner,
                @NonNull Lifecycle.State state
            )`,
  
              fullCode: `@MainThread</br>public void <a href="#addMenuProvider(MenuProvider,LifecycleOwner,Lifecycle.State)">addMenuProvider</a>(
                @NonNull MenuProvider provider,
                @NonNull LifecycleOwner owner,
                @NonNull Lifecycle.State state
            )`,

              des: `Is method ka use, Toolbar ke menu items ko dynamic tarike se provide karne ke liye hota hai, lekin yeh method Lifecycle.State parameter ke jariye specific lifecycle state mein menu items ko bind karne ki anumati deta hai.`,
  
              longDes: `
              <p>addMenuProvider(@NonNull MenuProvider provider, @NonNull LifecycleOwner owner, @NonNull Lifecycle.State state) method ka use, Toolbar ke menu items ko dynamic tarike se provide karne ke liye hota hai. Aap apne app ke requirements ke hisab se custom menu items ko create karne ke liye ek MenuProvider implement kar sakte hain aur use is method ke through Toolbar se jod sakte hain. Iske sath hi, aap owner parameter ke jariye Toolbar ke menu items ko lifecycle events ke sath bind kar sakte hain, aur state parameter ke jariye specific lifecycle state mein menu items ko bind kar sakte hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull MenuProvider provider`,
                        des:`<p>Ek MenuProvider object, jo Toolbar ke liye custom menu items provide karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull LifecycleOwner owner`,
                        des:`<p>Ek LifecycleOwner object, jisse Toolbar ke menu items ko lifecycle events ke sath bind kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Lifecycle.State state`,
                        des:`<p>Ek Lifecycle.State enum value, jisse aap specify kar sakte hain ki menu items ka bind kis lifecycle state mein hona chahiye.</p>`,
                      },
                    ],
                  },
              ],
            },


            

            {
              dep: false,
              name: "collapseActionView",
              id: "collapseActionView()",
              dataTypeName: `void`,
              code: `<a href="#collapseActionView()">collapseActionView</a>()`,
  
              fullCode: `public void <a href="#collapseActionView()">collapseActionView</a>()`,

              des: `Is method ka use karte hain jab aap ek action view ko expand (yaani show) karke extra functionality ya input ko user ko dikhana chahte hain, aur jab user interaction se us action view ko hide karna chahte hain.`,
  
              longDes: `
              <p>collapseActionView() method ka use karte hain jab aap kisi action view ko expand (yaani show) karte hain, jisse user ko extra functionality ya input provide kiya ja sake. Lekin jab user is extra functionality ko use karna band kare aur action view ko hide karna chahe, tab aap is method ka use karte hain.</p>
              `,
  
              parameter: [],
            },


  


            

            {
              dep: false,
              name: "dismissPopupMenus",
              id: "dismissPopupMenus()",
              dataTypeName: `void`,
              code: `<a href="#dismissPopupMenus()">dismissPopupMenus</a>()`,
  
              fullCode: `public void <a href="#dismissPopupMenus()">dismissPopupMenus</a>()`,

              des: `Is method ka use karte hain jab aap Toolbar mein open huye menu popups ko band karna chahte hain.`,
  
              longDes: `
              <p>dismissPopupMenus() method ka use karte hain jab aap Toolbar mein open huye menu popups ko dismiss karna chahte hain. Menu popups typically show up when the user taps on the menu button or overflow icon on the Toolbar. In some cases, you might want to programmatically close these menus, and that's when you can use the dismissPopupMenus() method.</p>
              `,
  
              parameter: [],
            },



            

            {
              dep: false,
              name: "generateLayoutParams",
              id: "generateLayoutParams()",
              dataTypeName: `Toolbar.LayoutParams`,
              code: `<a href="#generateLayoutParams()">generateLayoutParams</a>(AttributeSet attrs)`,
  
              fullCode: `public Toolbar.LayoutParams <a href="#generateLayoutParams()">generateLayoutParams</a>(AttributeSet attrs)`,

              des: `Is method ka use, Toolbar view ke layout parameters ko AttributeSet se generate karne ke liye hota hai.`,
  
              longDes: `
              <p>generateLayoutParams(AttributeSet attrs) method, Toolbar ke layout parameters ko AttributeSet se generate karne ke liye use hota hai. Jab aap Toolbar XML layout file mein define karte hain, toh isme XML attributes ka use hota hai, jisse aap Toolbar ke layout parameters ko customize kar sakte hain. Ye method in attributes ko parse karke Toolbar.LayoutParams object ko return karta hai, jo Toolbar ke layout parameters ko represent karta hai.</p>

              <p>generateLayoutParams(AttributeSet attrs) method ka return type Toolbar.LayoutParams hota hai. Ye Toolbar ke layout parameters ko represent karne wala object hota hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>Ye parameter Toolbar XML tag ke attributes ko represent karne wale AttributeSet object ko leta hai. Isse method XML attributes ko parse karke Toolbar.LayoutParams object ko generate karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            

            {
              dep: false,
              name: "getCollapseContentDescription",
              id: "getCollapseContentDescription()",
              dataTypeName: `@Nullable CharSequence`,
              code: `<a href="#getCollapseContentDescription()">getCollapseContentDescription</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:collapseContentDescription")</br>public @Nullable CharSequence <a href="#getCollapseContentDescription()">getCollapseContentDescription</a>()`,

              des: `Ye attribute Toolbar ke collapse button ke liye content description ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>getCollapseContentDescription() method, Toolbar class mein available hai, aur iska use Toolbar ke collapse button (navigation button ya up button) ke liye content description retrieve karne ke liye hota hai. Content description ek text hota hai jo screen readers aur accessibility services dwara padha jata hai, taki visually impaired users bhi app ke navigation elements ke bare mein information prapt kar sake.</p>

              <p>getCollapseContentDescription() method ka return type CharSequence hota hai, yani ki ye method koi text ya character sequence return karta hai. Content description ko CharSequence type mein retrieve kiya jata hai.</p>
              `,
  
              parameter: [],
            },



            

            {
              dep: false,
              name: "getCollapseIcon",
              id: "getCollapseIcon()",
              dataTypeName: `@Nullable Drawable`,
              code: `<a href="#getCollapseIcon()">getCollapseIcon</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:collapseIcon")</br>public @Nullable Drawable <a href="#getCollapseIcon()">getCollapseIcon</a>()`,

              des: `Is method ka use, Toolbar ke collapse icon (hamburger icon) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getCollapseIcon() method, Toolbar ke collapse icon (hamburger icon) ko retrieve karne ke liye hota hai. Collapse icon, Toolbar ke left side mein, usually navigation button ke roop mein dikhaya jata hai. Iska use navigation drawer ya navigation menu ko toggle karne ke liye hota hai. Jab user navigation drawer ko khole ya band karta hai, tab collapse icon ki appearance change hoti hai, jisse user ko current state ka indication milta hai.</p>

              <p>getCollapseIcon() method, Drawable type ka return karta hai, yani ki is method se aapko Toolbar ke collapse icon ka reference milta hai. Agar collapse icon set nahi kiya gaya hai ya koi error hai, to yeh method null return karega.</p>
              `,
  
              parameter: [],
            },


            

            {
              dep: false,
              name: "getContentInsetEnd",
              id: "getContentInsetEnd()",
              dataTypeName: `int`,
              code: `<a href="#getContentInsetEnd()">getContentInsetEnd</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:contentInsetEnd")</br>public int <a href="#getContentInsetEnd()">getContentInsetEnd</a>()`,

              des: `Is method ka use, Toolbar ke content (including title, subtitle, and action views) ke right side ka inset (padding) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getContentInsetEnd() method, Toolbar ke content ke right side ka inset (padding) ko retrieve karne ke liye hota hai. Ye inset, Toolbar ke title, subtitle, and action views ke right side mein space provide karta hai. Iska use content ko contentInsetStart ke sath balance karne ke liye hota hai, jisse content center-aligned ho sake.</p>

              <p>ContentInsetEnd, contentInsets ka ek hissa hota hai, jo content ko Toolbar ke right side se adjust karne mein help karta hai. Ye insets, Toolbar ke default size ya custom size set karne par apply hote hain, jisse content ko user interface ke saath sahi tarike se align kiya ja sake.</p>

              <p>getContentInsetEnd() method, int type ka return karta hai, yani ki is method se aapko content ke right side ka inset (padding) ka size milta hai. Is size ko pixels mein represent kiya jata hai.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getContentInsetEndWithActions",
              id: "getContentInsetEndWithActions()",
              dataTypeName: `int`,
              code: `<a href="#getContentInsetEndWithActions()">getContentInsetEndWithActions</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:contentInsetEndWithActions")</br>public int <a href="#getContentInsetEndWithActions()">getContentInsetEndWithActions</a>()`,

              des: `Is method ka use, Toolbar ke content ke right side ka inset (padding) ko actions (action views) ke saath consider karke retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getContentInsetEndWithActions() method, Toolbar ke content ke right side ka inset (padding) ko actions (action views) ke saath consider karke retrieve karne ke liye hota hai. Jab Toolbar par kuch actions, jaise ki action buttons ya menu items, add kiye jaate hain, toh Toolbar ke right side mein space diya jata hai, jisse actions proper spacing ke saath appear kar sakein.</p>

              <p>Is method ka use content ko contentInsetStart ke saath balance karne ke liye hota hai, jisse content center-aligned ho sake.</p>

              <p>ContentInsetEndWithActions, contentInsets ka ek hissa hota hai, jo content ko Toolbar ke right side se actions ke saath adjust karne mein help karta hai. Ye insets, Toolbar ke default size ya custom size set karne par apply hote hain, jisse content ko user interface ke saath sahi tarike se align kiya ja sake.</p>

              <p>getContentInsetEndWithActions() method, int type ka return karta hai, yani ki is method se aapko content ke right side ka inset (padding) ka size milta hai, actions (action views) ko consider karke.</p>
              `,
  
              parameter: [],
            },




            {
              dep: false,
              name: "getContentInsetLeft",
              id: "getContentInsetLeft()",
              dataTypeName: `int`,
              code: `<a href="#getContentInsetLeft()">getContentInsetLeft</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:contentInsetLeft")</br>public int <a href="#getContentInsetLeft()">getContentInsetLeft</a>()`,

              des: `Is method ka use, Toolbar ke content (including title, subtitle, and action views) ke left side ka inset (padding) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getContentInsetLeft() method, Toolbar ke content ke left side ka inset (padding) ko retrieve karne ke liye hota hai. Ye inset, Toolbar ke title, subtitle, and action views ke left side mein space provide karta hai. Iska use content ko contentInsetRight ke sath balance karne ke liye hota hai, jisse content center-aligned ho sake.</p>

              <p>ContentInsetLeft, contentInsets ka ek hissa hota hai, jo content ko Toolbar ke left side se adjust karne mein help karta hai. Ye insets, Toolbar ke default size ya custom size set karne par apply hote hain, jisse content ko user interface ke saath sahi tarike se align kiya ja sake.</p>

              <p>getContentInsetLeft() method, int type ka return karta hai, yani ki is method se aapko content ke left side ka inset (padding) ka size milta hai. Is size ko pixels mein represent kiya jata hai.</p>
              `,
  
              parameter: [],
            },




            {
              dep: false,
              name: "getContentInsetRight",
              id: "getContentInsetRight()",
              dataTypeName: `int`,
              code: `<a href="#getContentInsetRight()">getContentInsetRight</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:contentInsetRight")</br>public int <a href="#getContentInsetRight()">getContentInsetRight</a>()`,

              des: `Is method ka use, Toolbar ke content (including title, subtitle, and action views) ke right side ka inset (padding) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getContentInsetRight() method, Toolbar ke content ke right side ka inset (padding) ko retrieve karne ke liye hota hai. Ye inset, Toolbar ke title, subtitle, and action views ke right side mein space provide karta hai. Iska use content ko contentInsetLeft ke sath balance karne ke liye hota hai, jisse content center-aligned ho sake.</p>

              <p>ContentInsetRight, contentInsets ka ek hissa hota hai, jo content ko Toolbar ke right side se adjust karne mein help karta hai. Ye insets, Toolbar ke default size ya custom size set karne par apply hote hain, jisse content ko user interface ke saath sahi tarike se align kiya ja sake.</p>

              <p>getContentInsetRight() method, int type ka return karta hai, yani ki is method se aapko content ke right side ka inset (padding) ka size milta hai. Is size ko pixels mein represent kiya jata hai.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getContentInsetStart",
              id: "getContentInsetStart()",
              dataTypeName: `int`,
              code: `<a href="#getContentInsetStart()">getContentInsetStart</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:contentInsetStart")</br>public int <a href="#getContentInsetStart()">getContentInsetStart</a>()`,

              des: `Is method ka use, Toolbar ke content (including title, subtitle, and action views) ke left side ka inset (padding) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getContentInsetStart() method, Toolbar ke content ke left side ka inset (padding) ko retrieve karne ke liye hota hai. Ye inset, Toolbar ke title, subtitle, and action views ke left side mein space provide karta hai. Iska use content ko contentInsetEnd ke sath balance karne ke liye hota hai, jisse content center-aligned ho sake.</p>

              <p>ContentInsetStart, contentInsets ka ek hissa hota hai, jo content ko Toolbar ke left side se adjust karne mein help karta hai. Ye insets, Toolbar ke default size ya custom size set karne par apply hote hain, jisse content ko user interface ke saath sahi tarike se align kiya ja sake.</p>

              <p>getContentInsetStart() method, int type ka return karta hai, yani ki is method se aapko content ke left side ka inset (padding) ka size milta hai. Is size ko pixels mein represent kiya jata hai.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getContentInsetStartWithNavigation",
              id: "getContentInsetStartWithNavigation()",
              dataTypeName: `int`,
              code: `<a href="#getContentInsetStartWithNavigation()">getContentInsetStartWithNavigation</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:contentInsetStartWithNavigation")</br>public int <a href="#getContentInsetStartWithNavigation()">getContentInsetStartWithNavigation</a>()`,

              des: `Is method ka use, Toolbar ke content (including title, subtitle, and action views) ke left side ka inset (padding) ko navigation icon (hamburger icon) ke saath consider karke retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getContentInsetStartWithNavigation() method, Toolbar ke content ke left side ka inset (padding) ko navigation icon (hamburger icon) ke saath consider karke retrieve karne ke liye hota hai. Jab Toolbar par navigation icon add kiya jata hai, jaise ki hamburger icon navigation drawer toggle karne ke liye, to Toolbar ke left side mein space diya jata hai, jisse icon proper spacing ke saath appear kare.</p>

              <p>ContentInsetStartWithNavigation, contentInsets ka ek hissa hota hai, jo content ko Toolbar ke left side se navigation icon ke saath adjust karne mein help karta hai. Ye insets, Toolbar ke default size ya custom size set karne par apply hote hain, jisse content ko user interface ke saath sahi tarike se align kiya ja sake.</p>

              <p>getContentInsetStartWithNavigation() method, int type ka return karta hai, yani ki is method se aapko content ke left side ka inset (padding) ka size milta hai, navigation icon ke saath consider karke.</p>
              `,
  
              parameter: [],
            },


            {
              dep: false,
              name: "getCurrentContentInsetEnd",
              id: "getCurrentContentInsetEnd()",
              dataTypeName: `int`,
              code: `<a href="#getCurrentContentInsetEnd()">getCurrentContentInsetEnd</a>()`,
  
              fullCode: `public int <a href="#getCurrentContentInsetEnd()">getCurrentContentInsetEnd</a>()`,

              des: `Is method ka use Toolbar view ke current content inset ke end (right) side ki value ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getCurrentContentInsetEnd() method, Toolbar view ke current content inset ke end (right) side ki value ko retrieve karne ke liye use hota hai. Content insets, view ke content ko display karne ke liye reserved space hota hai, jo view ke borders se count kiya jata hai. Ye insets typically status bar, navigation bar, aur app bar ke presence ko account mein lete hain.</p>

              <p>Toolbar ka layout XML mein aksar android:contentInsetStart aur android:contentInsetEnd attributes se content insets set kiye jate hain. In attributes ke value, start (left) aur end (right) sides ke liye content insets ko define karte hai</p>

              <p>getCurrentContentInsetEnd() method ka return type int hota hai, yani ki ye method ek integer value return karta hai, jo current content inset ke end (right) side ko represent karta hai.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getCurrentContentInsetLeft",
              id: "getCurrentContentInsetLeft()",
              dataTypeName: `int`,
              code: `<a href="#getCurrentContentInsetLeft()">getCurrentContentInsetLeft</a>()`,
  
              fullCode: `public int <a href="#getCurrentContentInsetLeft()">getCurrentContentInsetLeft</a>()`,

              des: `Is method ka use Toolbar view ke current content inset ke left side ki value ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getCurrentContentInsetLeft() method, Toolbar view ke current content inset ke left side ki value ko retrieve karne ke liye use hota hai. Content insets, view ke content ko display karne ke liye reserved space hota hai, jo view ke borders se count kiya jata hai. Ye insets typically status bar, navigation bar, aur app bar ke presence ko account mein lete hain.</p>

              <p>Toolbar ka layout XML mein aksar android:contentInsetStart aur android:contentInsetEnd attributes se content insets set kiye jate hain. In attributes ke value, start (left) aur end (right) sides ke liye content insets ko define karte hain.</p>

              <p>getCurrentContentInsetLeft() method ka return type int hota hai, yani ki ye method ek integer value return karta hai, jo current content inset ke left side ko represent karta hai.</p>
              `,
  
              parameter: [],
            },




            {
              dep: false,
              name: "getCurrentContentInsetRight",
              id: "getCurrentContentInsetRight()",
              dataTypeName: `int`,
              code: `<a href="#getCurrentContentInsetRight()">getCurrentContentInsetRight</a>()`,
  
              fullCode: `public int <a href="#getCurrentContentInsetRight()">getCurrentContentInsetRight</a>()`,

              des: `Is method ka use Toolbar view ke current content inset ke right (end) side ki value ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getCurrentContentInsetRight() method, Toolbar view ke current content inset ke right (end) side ki value ko retrieve karne ke liye use hota hai. Content insets, view ke content ko display karne ke liye reserved space hota hai, jo view ke borders se count kiya jata hai. Ye insets typically status bar, navigation bar, aur app bar ke presence ko account mein lete hain.</p>

              <p>Toolbar ka layout XML mein aksar android:contentInsetStart aur android:contentInsetEnd attributes se content insets set kiye jate hain. In attributes ke value, start (left) aur end (right) sides ke liye content insets ko define karte hain.</p>

              <p>getCurrentContentInsetRight() method ka return type int hota hai, yani ki ye method ek integer value return karta hai, jo current content inset ke right (end) side ko represent karta hai.</p>
              `,
  
              parameter: [],
            },




            {
              dep: false,
              name: "getCurrentContentInsetStart",
              id: "getCurrentContentInsetStart()",
              dataTypeName: `int`,
              code: `<a href="#getCurrentContentInsetStart()">getCurrentContentInsetStart</a>()`,
  
              fullCode: `public int <a href="#getCurrentContentInsetStart()">getCurrentContentInsetStart</a>()`,

              des: `Is method ka use Toolbar view ke current content inset ke start (left) side ki value ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getCurrentContentInsetStart() method, Toolbar view ke current content inset ke start (left) side ki value ko retrieve karne ke liye use hota hai. Content insets, view ke content ko display karne ke liye reserved space hota hai, jo view ke borders se count kiya jata hai. Ye insets typically status bar, navigation bar, aur app bar ke presence ko account mein lete hain.</p>

              <p>Toolbar ka layout XML mein aksar android:contentInsetStart aur android:contentInsetEnd attributes se content insets set kiye jate hain. In attributes ke value, start (left) aur end (right) sides ke liye content insets ko define karte hain.</p>

              <p>getCurrentContentInsetStart() method ka return type int hota hai, yani ki ye method ek integer value return karta hai, jo current content inset ke start (left) side ko represent karta hai.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getLogo",
              id: "getLogo()",
              dataTypeName: `Drawable`,
              code: `<a href="#getLogo()">getLogo</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:logo")</br>public Drawable <a href="#getLogo()">getLogo</a>()`,

              des: `Is method ka use Toolbar view ke logo ke liye set ki gayi Drawable resource ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getLogo() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke logo attribute ko access kar sakte hain, jo ki XML layout mein define ki gayi Drawable resource ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein logo ko set karne ke liye android:logo attribute ka use hota hai. Is attribute ke value mein hum ek Drawable resource ID ya Drawable object specify kar sakte hain, jo Toolbar ke logo ke roop mein display hoga.</p>

              <p>getLogo() method ka return type Drawable hota hai, yani ki ye method ek Drawable object return karta hai, jo Toolbar ke logo ke roop mein set ki gayi Drawable resource ko represent karta hai.</p>
              `,
  
              parameter: [],
            },


  

            {
              dep: false,
              name: "getLogoDescription",
              id: "getLogoDescription()",
              dataTypeName: `CharSequence`,
              code: `<a href="#getLogoDescription()">getLogoDescription</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:logoDescription")</br>public CharSequence <a href="#getLogoDescription()">getLogoDescription</a>()`,

              des: `Is method ka use Toolbar view ke logo description attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getLogoDescription() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke logo description attribute ko access kar sakte hain, jo XML layout mein define ki gayi logo description ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein logo description ko set karne ke liye android:logoDescription attribute ka use hota hai. Is attribute ke value mein hum ek string specify kar sakte hain, jo Toolbar ke logo ke liye description provide karta hai. Ye description screen readers ke liye helpful hoti hai, jo visually impaired users ko app ke elements ke baare mein batati hai.</p>

              <p>getLogoDescription() method ka return type CharSequence hota hai, yani ki ye method ek CharSequence object return karta hai, jo Toolbar ke logo description ko represent karta hai.</p>
              `,
  
              parameter: [],
            },


  

            {
              dep: false,
              name: "getMenu",
              id: "getMenu()",
              dataTypeName: `Menu`,
              code: `<a href="#getMenu()">getMenu</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:menu")</br>public Menu <a href="#getMenu()">getMenu</a>()`,

              des: `Is method ka use Toolbar view ke menu attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getMenu() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke menu attribute ko access kar sakte hain, jo XML layout mein define ki gayi menu resource ID ya object ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein menu ko set karne ke liye android:menu attribute ka use hota hai. Is attribute ke value mein hum ek menu resource ID specify kar sakte hain, jo Toolbar ke options menu ko define karta hai. Alternately, hum direct Menu object ko Toolbar se set kar sakte hain.</p>

              <p>getMenu() method ka return type Menu hota hai, yani ki ye method Menu object return karta hai, jo Toolbar ke menu ko represent karta hai.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getNavigationContentDescription",
              id: "getNavigationContentDescription()",
              dataTypeName: `@Nullable CharSequence`,
              code: `<a href="#getNavigationContentDescription()">getNavigationContentDescription</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:navigationContentDescription")</br>public @Nullable CharSequence <a href="#getNavigationContentDescription()">getNavigationContentDescription</a>()`,

              des: `Is method ka use Toolbar view ke navigation icon (navigation button) ke liye set ki gayi content description attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getNavigationContentDescription() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke navigation icon ke liye set ki gayi content description attribute ko access kar sakte hain, jo XML layout mein define ki gayi string ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein navigation icon ke liye content description ko set karne ke liye android:navigationContentDescription attribute ka use hota hai. Is attribute ke value mein hum ek string specify kar sakte hain, jo navigation icon ke liye accessibility purpose ke liye use hoti hai, jisse visually impaired users ko icon ke purpose ke baare mein bataya ja sake.</p>

              <p>getNavigationContentDescription() method ka return type @Nullable CharSequence hota hai, yani ki ye method ek nullable CharSequence object return karta hai, jo Toolbar ke navigation icon ke liye set ki gayi content description ko represent karta hai. Nullable return type batata hai ki ye method null bhi return kar sakta hai, agar navigation icon ke liye content description set nahi ki gayi hai.</p>
              `,
  
              parameter: [],
            },




            {
              dep: false,
              name: "getNavigationIcon",
              id: "getNavigationIcon()",
              dataTypeName: `@Nullable Drawable`,
              code: `<a href="#getNavigationIcon()">getNavigationIcon</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:navigationIcon")</br>public @Nullable Drawable <a href="#getNavigationIcon()">getNavigationIcon</a>()`,

              des: `Is method ka use Toolbar view ke navigation icon (navigation button) ke liye set ki gayi Drawable resource ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getNavigationIcon() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke navigation icon ke liye set ki gayi Drawable resource ko access kar sakte hain, jo XML layout mein define ki gayi Drawable ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein navigation icon ko set karne ke liye android:navigationIcon attribute ka use hota hai. Is attribute ke value mein hum ek Drawable resource ID specify kar sakte hain, jo navigation icon ke roop mein display hoga.</p>

              <p>getNavigationIcon() method ka return type @Nullable Drawable hota hai, yani ki ye method ek nullable Drawable object return karta hai, jo Toolbar ke navigation icon ke liye set ki gayi Drawable resource ko represent karta hai. Nullable return type batata hai ki ye method null bhi return kar sakta hai, agar navigation icon ke liye koi Drawable set nahi ki gayi hai.</p>
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

              des: `Is method ka use Toolbar view ke overflow icon (menu ke overflow button) ke liye set ki gayi Drawable resource ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getOverflowIcon() method, Toolbar view ke overflow icon ke liye set ki gayi Drawable resource ko retrieve karne ke liye use hota hai. Overflow icon, menu button ke roop mein display hota hai, jo extra menu options ko show karta hai jab screen par space kam ho.</p>

              <p>Toolbar ka layout XML mein overflow icon ko set karne ke liye android:overflowIcon attribute ka use hota hai. Is attribute ke value mein hum ek Drawable resource ID specify kar sakte hain, jo overflow icon ke roop mein display hoga.</p>

              <p>getOverflowIcon() method ka return type @Nullable Drawable hota hai, yani ki ye method ek nullable Drawable object return karta hai, jo Toolbar ke overflow icon ke liye set ki gayi Drawable resource ko represent karta hai. Nullable return type batata hai ki ye method null bhi return kar sakta hai, agar overflow icon ke liye koi Drawable set nahi ki gayi hai.</p>
              `,
  
              parameter: [],
            },


  

            {
              dep: false,
              name: "getPopupTheme",
              id: "getPopupTheme()",
              dataTypeName: `@StyleRes int`,
              code: `<a href="#getPopupTheme()">getPopupTheme</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:popupTheme")</br>public @StyleRes int <a href="#getPopupTheme()">getPopupTheme</a>()`,

              des: `Is method ka use Toolbar view ke popup menu ke liye set ki gayi theme resource ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getPopupTheme() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke popup menu ke liye set ki gayi theme resource ID ko access kar sakte hain, jo XML layout mein define ki gayi style resource ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein popup menu ke liye theme ko set karne ke liye android:popupTheme attribute ka use hota hai. Is attribute ke value mein hum ek style resource ID specify kar sakte hain, jo popup menu ke design aur appearance ko define karta hai.</p>

              <p>getPopupTheme() method ka return type @StyleRes int hota hai, yani ki ye method ek integer value return karta hai, jo Toolbar ke popup menu ke liye set ki gayi theme resource ID ko represent karta hai.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getSubtitle",
              id: "getSubtitle()",
              dataTypeName: `CharSequence`,
              code: `<a href="#getSubtitle()">getSubtitle</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:subtitle")</br>public CharSequence <a href="#getSubtitle()">getSubtitle</a>()`,

              des: `Is method ka use Toolbar view ke subtitle (secondary title) ke liye set ki gayi CharSequence ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSubtitle() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke subtitle ke liye set ki gayi CharSequence ko access kar sakte hain, jo XML layout mein define ki gayi subtitle string ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein subtitle ko set karne ke liye android:subtitle attribute ka use hota hai. Is attribute ke value mein hum ek string specify kar sakte hain, jo subtitle ke roop mein display hoga.</p>

              <p>getSubtitle() method ka return type CharSequence hota hai, yani ki ye method ek CharSequence object return karta hai, jo Toolbar ke subtitle ko represent karta hai.</p>
              `,
  
              parameter: [],
            },




            {
              dep: false,
              name: "getTitle",
              id: "getTitle()",
              dataTypeName: `CharSequence`,
              code: `<a href="#getTitle()">getTitle</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:title")</br>public CharSequence <a href="#getTitle()">getTitle</a>()`,

              des: `Is method ka use Toolbar view ke title (main title) ke liye set ki gayi CharSequence ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTitle() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke title ke liye set ki gayi CharSequence ko access kar sakte hain, jo XML layout mein define ki gayi title string ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein title ko set karne ke liye android:title attribute ka use hota hai. Is attribute ke value mein hum ek string specify kar sakte hain, jo title ke roop mein display hoga.</p>

              <p>getTitle() method ka return type CharSequence hota hai, yani ki ye method ek CharSequence object return karta hai, jo Toolbar ke title ko represent karta hai.</p>
              `,
  
              parameter: [],
            },





            {
              dep: false,
              name: "getTitleMarginBottom",
              id: "getTitleMarginBottom()",
              dataTypeName: `int`,
              code: `<a href="#getTitleMarginBottom()">getTitleMarginBottom</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:titleMarginBottom")</br>public int <a href="#getTitleMarginBottom()">getTitleMarginBottom</a>()`,

              des: `Is method ka use Toolbar view ke title ke bottom side ke liye set ki gayi margin value ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTitleMarginBottom() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke title ke bottom side ke liye set ki gayi margin value ko access kar sakte hain, jo XML layout mein define ki gayi integer value ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein title ke liye bottom side margin ko set karne ke liye android:titleMarginBottom attribute ka use hota hai. Is attribute ke value mein hum ek integer value specify kar sakte hain, jo title ke bottom side ke liye margin create karta hai.</p>

              <p>getTitleMarginBottom() method ka return type int hota hai, yani ki ye method ek integer value return karta hai, jo Toolbar ke title ke bottom side ke liye set ki gayi margin value ko represent karta hai.</p>
              `,
  
              parameter: [],
            },





            {
              dep: false,
              name: "getTitleMarginEnd",
              id: "getTitleMarginEnd()",
              dataTypeName: `int`,
              code: `<a href="#getTitleMarginEnd()">getTitleMarginEnd</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:titleMarginEnd")</br>public int <a href="#getTitleMarginEnd()">getTitleMarginEnd</a>()`,

              des: `Is method ka use Toolbar view ke title ke end (right in left-to-right layout, left in right-to-left layout) side ke liye set ki gayi margin value ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTitleMarginEnd() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke title ke end (right) side ke liye set ki gayi margin value ko access kar sakte hain, jo XML layout mein define ki gayi integer value ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein title ke liye end (right) side margin ko set karne ke liye android:titleMarginEnd attribute ka use hota hai. Is attribute ke value mein hum ek integer value specify kar sakte hain, jo title ke end (right) side ke liye margin create karta hai.</p>

              <p>getTitleMarginEnd() method ka return type int hota hai, yani ki ye method ek integer value return karta hai, jo Toolbar ke title ke end (right) side ke liye set ki gayi margin value ko represent karta hai.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getTitleMarginStart",
              id: "getTitleMarginStart()",
              dataTypeName: `int`,
              code: `<a href="#getTitleMarginStart()">getTitleMarginStart</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:titleMarginStart")</br>public int <a href="#getTitleMarginStart()">getTitleMarginStart</a>()`,

              des: `Is method ka use Toolbar view ke title ke start (left in left-to-right layout, right in right-to-left layout) side ke liye set ki gayi margin value ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTitleMarginStart() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke title ke start (left) side ke liye set ki gayi margin value ko access kar sakte hain, jo XML layout mein define ki gayi integer value ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein title ke liye start (left) side margin ko set karne ke liye android:titleMarginStart attribute ka use hota hai. Is attribute ke value mein hum ek integer value specify kar sakte hain, jo title ke start (left) side ke liye margin create karta hai.</p>

              <p>getTitleMarginStart() method ka return type int hota hai, yani ki ye method ek integer value return karta hai, jo Toolbar ke title ke start (left) side ke liye set ki gayi margin value ko represent karta hai.</p>
              `,
  
              parameter: [],
            },


  


            {
              dep: false,
              name: "getTitleMarginTop",
              id: "getTitleMarginTop()",
              dataTypeName: `int`,
              code: `<a href="#getTitleMarginTop()">getTitleMarginTop</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:titleMarginTop")</br>public int <a href="#getTitleMarginTop()">getTitleMarginTop</a>()`,

              des: `Is method ka use Toolbar view ke title ke top side ke liye set ki gayi margin value ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTitleMarginTop() method par lagaya jata hai. Is annotation ke through, hum Toolbar ke title ke top side ke liye set ki gayi margin value ko access kar sakte hain, jo XML layout mein define ki gayi integer value ko represent karta hai.</p>

              <p>Toolbar ka layout XML mein title ke liye top side margin ko set karne ke liye android:titleMarginTop attribute ka use hota hai. Is attribute ke value mein hum ek integer value specify kar sakte hain, jo title ke top side ke liye margin create karta hai.</p>

              <p>getTitleMarginTop() method ka return type int hota hai, yani ki ye method ek integer value return karta hai, jo Toolbar ke title ke top side ke liye set ki gayi margin value ko represent karta hai.</p>
              `,
  
              parameter: [],
            },


  


            {
              dep: false,
              name: "hasExpandedActionView",
              id: "hasExpandedActionView()",
              dataTypeName: `boolean`,
              code: `<a href="#hasExpandedActionView()">hasExpandedActionView</a>()`,
  
              fullCode: `public boolean <a href="#hasExpandedActionView()">hasExpandedActionView</a>()`,

              des: ` Is method ka use check karne ke liye hota hai ki kya kisi menu item ke liye expandable action view Toolbar mein open hai ya nahi.`,
  
              longDes: `
              <p>hasExpandedActionView() method, Toolbar view mein check karne ke liye use hota hai ki kya kisi menu item ke liye expandable action view open hai ya nahi. Expandable action view, menu item ke liye custom layout hota hai, jise user click karke expand (open) kar sakta hai aur usme additional options, settings ya controls display kar sakta hai.</p>

              <p>Jab koi menu item expandable action view ke liye design kiya jata hai, tab hasExpandedActionView() method ko use karke check kiya ja sakta hai ki kya user ne us menu item ke expandable action view ko open kiya hai ya nahi. Agar action view open hai, toh method true return karega, aur agar action view close hai ya nahi hai, toh method false return karega.</p>
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

              des: `Is method ka use Toolbar mein present overflow menu (jo extra menu options ko show karta hai jab screen par space kam ho) ko hide karne ke liye hota hai.`,
  
              longDes: `
              <p>hideOverflowMenu() method, Toolbar mein present overflow menu ko hide karne ke liye use hota hai. Jab screen par space kam hota hai aur kuchh menu items ko puri tarah se display karne ki jagah nahi hoti, toh overflow menu mein bache huye options ko show kiya jata hai. Is overflow menu ko hide karne ke liye, hideOverflowMenu() method ka use kiya jata hai.</p>

              <p>hideOverflowMenu() method ka return type boolean hota hai, yani ki ye method ek boolean value return karta hai, jo bataata hai ki overflow menu ko hide karne me safalta hui hai ya nahi. Agar overflow menu hide ho gaya toh method true return karega, aur agar hide nahi ho paya toh method false return karega.</p>
              `,
  
              parameter: [],
            },


  


            {
              dep: false,
              name: "inflateMenu",
              id: "inflateMenu()",
              dataTypeName: `void`,
              code: `<a href="#inflateMenu()">inflateMenu</a>(@MenuRes int resId)`,
  
              fullCode: `public void <a href="#inflateMenu()">inflateMenu</a>(@MenuRes int resId)`,

              des: `Is method ka use Toolbar mein ek menu resource file se menu items ko inflate (add) karne ke liye hota hai.`,
  
              longDes: `
              <p>inflateMenu(@MenuRes int resId) method, Toolbar mein ek menu resource file se menu items ko inflate karne ke liye use hota hai. Menu resource file, XML file hota hai jisme menu items ko define kiya jata hai, jinhe app ke Toolbar mein display kiya jata hai.</p>

              <p>Jab aap inflateMenu() method ko call karte hain, usme aap ek @MenuRes annotation ke saath ek integer value pass karte hain, jo menu resource file ko represent karta hai. Is method ke use se Toolbar mein menu items add ho jate hain aur wo menu items screen par visible ho jate hain.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@MenuRes int resId`,
                        des:`<p>Ye parameter ek integer value leta hai, jo menu resource file ko represent karta hai, jisse aap Toolbar mein inflate karna chahte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "invalidateMenu",
              id: "invalidateMenu()",
              dataTypeName: `void`,
              code: `<a href="#invalidateMenu()">invalidateMenu</a>()`,
  
              fullCode: `@MainThread</br>public void <a href="#invalidateMenu()">invalidateMenu</a>()`,

              des: `Is method ka use Toolbar ke menu items ko refresh karne aur unhein invalid (outdated) mark karne ke liye hota hai. Ye method main thread (UI thread) par execute hona chahiye.`,
  
              longDes: `
              <p>invalidateMenu() method, Toolbar ke menu items ko refresh karne aur unhein invalid (outdated) mark karne ke liye use hota hai. Jab aap is method ko call karte hain, toh Toolbar apne menu items ko refresh karta hai, jisse wo updated content ko display kar sake.</p>

              <p>Is method ko aksar menu items ke state, visibility, enabled status, ya visibility ko dynamically change karne ke liye use kiya jata hai. Jab aap menu items ke properties ko programmatically modify karte hain, toh invalidateMenu() method ko call karke updated changes ko Toolbar mein apply kar sakte hain.</p>
              `,
  
              parameter: [],
            },



            {
              dep: false,
              name: "isBackInvokedCallbackEnabled",
              id: "isBackInvokedCallbackEnabled()",
              dataTypeName: `boolean`,
              code: `<a href="#isBackInvokedCallbackEnabled()">isBackInvokedCallbackEnabled</a>()`,
  
              fullCode: `public boolean <a href="#isBackInvokedCallbackEnabled()">isBackInvokedCallbackEnabled</a>()`,

              des: `isBackInvokedCallbackEnabled() method, Toolbar view ke liye OnBackInvokedCallback ko enable ya disable karne ke liye use hota hai. Is method ka return type boolean hota hai, yani ki is method se true ya false value return hoti hai.`,
  
              longDes: `
              <p>isBackInvokedCallbackEnabled() method, Toolbar view ke liye OnBackInvokedCallback ko enable ya disable karne ke liye use hota hai. Is method ka return type boolean hota hai, yani ki is method se true ya false value return hoti hai.</p>

              <p>Aap is method ka use karke check kar sakte hain ki aapka Toolbar view OnBackInvokedCallback ko support karta hai ya nahi. Agar is method se true value return hoti hai, to aapka Toolbar view OnBackInvokedCallback ko support karta hai, aur aap apne app me back gesture ko handle kar sakte hain. Agar is method se false value return hoti hai, to aapka Toolbar view OnBackInvokedCallback ko support nahi karta hai, aur aapko back gesture ko handle karne ke liye koi aur tarika use karna padega.</p>
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

              des: `Is method ka use, pata lagane ke liye hota hai ki kya toolbar mein overflow menu (jise hum commonly three-dots menu ke roop mein dekhte hain) display ho raha hai ya nahi.`,
  
              longDes: `
              <p>isOverflowMenuShowing() method, Toolbar mein present overflow menu ka status check karne ke liye hota hai. Overflow menu, jab Toolbar mein available space se zyada action buttons ya options hote hain, to woh overflow menu ke roop mein display hote hain. Overflow menu ko three-dots icon (kebabs icon) ke roop mein bhi dekha jata hai.</p>

              <p>Aap isOverflowMenuShowing() method ka use karke jaan sakte hain ki kya toolbar mein overflow menu visible hai ya nahi. Agar overflow menu visible hai, to aap uske appropriate handling ko kar sakte hain.</p>

              <p>isOverflowMenuShowing() method boolean type ka hota hai, yani ki is method se ek boolean value return hoti hai. Agar overflow menu visible hai, to method true return karta hai, aur agar overflow menu nahi dikhai de raha hai, to method false return karta hai.</p>
              `,
  
              parameter: [],
            },


  


            {
              dep: false,
              name: "onHoverEvent",
              id: "onHoverEvent()",
              dataTypeName: `boolean`,
              code: `<a href="#onHoverEvent()">onHoverEvent</a>(MotionEvent ev)`,
  
              fullCode: `public boolean <a href="#onHoverEvent()">onHoverEvent</a>(MotionEvent ev)`,

              des: `Is method ka use, Toolbar view par hover events ko handle karne ke liye hota hai.`,
  
              longDes: `
              <p>onHoverEvent(MotionEvent ev) method, Toolbar view par hover events ko handle karne ke liye hota hai. Jab bhi koi hover event Toolbar par occur karta hai, yani jab koi vyakti Toolbar par touch screen ke upar hover karta hai, to onHoverEvent() method call hota hai. Aap is method ko override karke apne Toolbar view par hover events ke saath interact kar sakte hain.</p>

              <p>onHoverEvent(MotionEvent ev) method boolean type ka hota hai, yani ki is method se ek boolean value return hoti hai. Aapko is method mein true return karna hota hai, agar aapne hover event ko handle kar liya hai aur false return karna hota hai, agar aapne hover event ko handle nahi kiya hai aur event ko further propagate karna hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `MotionEvent ev`,
                        des:`<p>Ye parameter MotionEvent type ka hota hai, jo hover event information ko represent karta hai. Is event mein touch screen ke upar hover karne se related details jaise coordinates, action, time, etc. available hote hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  


            {
              dep: false,
              name: "onRtlPropertiesChanged",
              id: "onRtlPropertiesChanged()",
              dataTypeName: `void`,
              code: `<a href="#onRtlPropertiesChanged()">onRtlPropertiesChanged</a>(int layoutDirection)`,
  
              fullCode: `public void <a href="#onRtlPropertiesChanged()">onRtlPropertiesChanged</a>(int layoutDirection)`,

              des: `Is method ka use, Toolbar view ke layout direction (RTL or LTR) mein kisi change ke samay (runtime) uske properties ko update karne ke liye hota hai.`,
  
              longDes: `
              <p>onRtlPropertiesChanged(int layoutDirection) method, Toolbar view ke layout direction (RTL or LTR) me kisi change ke samay call hota hai. Is method ka use aap tab karte hain, jab aapke app ka layout direction dynamic hai aur runtime par change ho sakta hai.</p>

              <p>Jab layout direction change hota hai, onRtlPropertiesChanged() method ko override karke aap apne Toolbar view ke properties ko update kar sakte hain, taki content sahi direction mein flow kare aur UI elements theek tareeke se display ho.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int layoutDirection`,
                        des:`<p>Ye parameter ek integer type ka hota hai, jo View.LAYOUT_DIRECTION_LTR ya View.LAYOUT_DIRECTION_RTL values me se ek ko represent karta hai. View.LAYOUT_DIRECTION_LTR LTR layout direction ko represent karta hai, aur View.LAYOUT_DIRECTION_RTL RTL layout direction ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "onTouchEvent",
              id: "onTouchEvent()",
              dataTypeName: `boolean`,
              code: `<a href="#onTouchEvent()">onTouchEvent</a>(MotionEvent ev)`,
  
              fullCode: `public boolean <a href="#onTouchEvent()">onTouchEvent</a>(MotionEvent ev)`,

              des: `Is method ka use, Toolbar view par touch events ko handle karne ke liye hota hai.`,
  
              longDes: `
              <p>onTouchEvent(MotionEvent ev) method, Toolbar view par touch events ko handle karne ke liye hota hai. Jab bhi koi touch event Toolbar par occur karta hai, yani jab koi vyakti Toolbar par touch karta hai, to onTouchEvent() method call hota hai. Aap is method ko override karke apne Toolbar view par touch events ke saath interact kar sakte hain.</p>

              <p>onTouchEvent(MotionEvent ev) method boolean type ka hota hai, yani ki is method se ek boolean value return hoti hai. Aapko is method mein true return karna hota hai, agar aapne touch event ko handle kar liya hai aur false return karna hota hai, agar aapne touch event ko handle nahi kiya hai aur event ko further propagate karna hai.</p>
              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `MotionEvent ev`,
                        des:`<p>Ye parameter MotionEvent type ka hota hai, jo touch event information ko represent karta hai. Is event mein touch kiya gaya action, touch ke coordinates, touch ke time, etc. ke details available hote hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "removeMenuProvider",
              id: "removeMenuProvider()",
              dataTypeName: `void`,
              code: `<a href="#removeMenuProvider()">removeMenuProvider</a>(@NonNull MenuProvider provider)`,
  
              fullCode: `@MainThread</br>public void <a href="#removeMenuProvider()">removeMenuProvider</a>(@NonNull MenuProvider provider)`,

              des: `Is method ka use, Toolbar se ek specific MenuProvider ko hatane ke liye hota hai.`,
  
              longDes: `
              <p>removeMenuProvider(@NonNull MenuProvider provider) method, Toolbar se ek specific MenuProvider ko remove karne ke liye hota hai. MenuProvider ek interface hai, jo Toolbar ke liye menu items ko provide karta hai. Agar aapne Toolbar mein multiple MenuProvider set kiye hain aur aap kisi ek ko remove karna chahte hain, to is method ka use karte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull MenuProvider provider`,
                        des:`<p>Ye parameter MenuProvider type ka hota hai, jo Toolbar se remove karna hai. MenuProvider interface implement karke, aap menu items ko dynamically Toolbar mein add kar sakte hain. Ab aap us provider ko remove kar sakte hain, jisse uska influence Toolbar par khatam ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setBackInvokedCallbackEnabled",
              id: "setBackInvokedCallbackEnabled()",
              dataTypeName: `void`,
              code: `<a href="#setBackInvokedCallbackEnabled()">setBackInvokedCallbackEnabled</a>(boolean enabled)`,
  
              fullCode: `public void <a href="#setBackInvokedCallbackEnabled()">setBackInvokedCallbackEnabled</a>(boolean enabled)`,

              des: `Is method ka use, Toolbar mein back navigation ke liye ek callback ko enable ya disable karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackInvokedCallbackEnabled(boolean enabled) method, Toolbar mein back navigation ke liye ek callback ko enable ya disable karne ke liye hota hai. Back navigation ka matalab hota hai jab user device ke hardware back button ya software back button (navigation bar par) press karta hai, tab Toolbar par registered callback ko invoke karna.</p>

              <p>Back navigation callback ka use tab kiya jata hai jab aap chahte hain ki jab user back button press kare, tab aap koi specific action perform karein. Is callback ko enable karke aap Toolbar mein back navigation ke event ko intercept kar sakte hain aur uske anusaar app ke kisi particular functionality ko trigger kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>Ye parameter ek boolean value hota hai, jisse aap back navigation callback ko enable (true) ya disable (false) kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setCollapseContentDescription",
              id: "setCollapseContentDescription(CharSequence)",
              dataTypeName: `void`,
              code: `<a href="#setCollapseContentDescription(CharSequence)">setCollapseContentDescription</a>(@Nullable CharSequence description)`,
  
              fullCode: `public void <a href="#setCollapseContentDescription(CharSequence)">setCollapseContentDescription</a>(@Nullable CharSequence description)`,

              des: `Is method ka use, Toolbar ke collapse button (up navigation button) ke liye content description ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setCollapseContentDescription(@Nullable CharSequence description) method, Toolbar ke collapse button (up navigation button) ke liye content description ko set karne ke liye hota hai. Collapse button, typically, top-left corner mein hota hai, aur jab aap ise press karte hain, to app ki previous activity ya parent activity mein navigate hota hai.</p>

              <p>Content description ka use accessibility ke liye important hota hai. Jab aap description set karte hain, toh screen readers aur other accessibility services, visually impaired users ke liye content description padh sakte hain, jisse unhe button ka purpose samajhne mein madad milti hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable CharSequence description`,
                        des:`<p>Ye parameter CharSequence type ka hota hai, jisse aap collapse button ke liye content description set kar sakte hain. CharSequence text ya string hota hai, jo button ke liye accessibility ke liye describe karta hai ki button ka kya use hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setCollapseContentDescription",
              id: "setCollapseContentDescription(int)",
              dataTypeName: `void`,
              code: `<a href="#setCollapseContentDescription(int)">setCollapseContentDescription</a>(@StringRes int resId)`,
  
              fullCode: `public void <a href="#setCollapseContentDescription(int)">setCollapseContentDescription</a>(@StringRes int resId)`,

              des: `Is method ka use, Toolbar mein show hone wale collapse action button ka content description set karne ke liye hota hai, lekin isme content description ko resource ID ke through set kiya jata hai.`,
  
              longDes: `
              <p>setCollapseContentDescription(@StringRes int resId) method, Toolbar mein show hone wale collapse action button (up button) ka content description set karne ke liye hota hai. Is method mein content description ko resource ID ke form mein provide kiya jata hai, jisse use ek string resource se retrieve kiya ja sakta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@StringRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo Toolbar mein show hone wale collapse action button ke content description ke liye string resource ID represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setCollapseIcon",
              id: "setCollapseIcon(Drawable)",
              dataTypeName: `void`,
              code: `<a href="#setCollapseIcon(Drawable)">setCollapseIcon</a>(@Nullable Drawable icon)`,
  
              fullCode: `public void <a href="#setCollapseIcon(Drawable)">setCollapseIcon</a>(@Nullable Drawable icon)`,

              des: `Is method ka use, Toolbar mein show hone wale collapse action button (up button) ka icon set karne ke liye hota hai.`,
  
              longDes: `
              <p>setCollapseIcon(@Nullable Drawable icon) method, Toolbar mein show hone wale collapse action button (up button) ka icon set karne ke liye hota hai. Collapse action button typically left side mein hota hai, aur jab aap us button ko press karte hain, to app ki previous activity ya parent activity mein navigate hota hai. Is method ki madad se aap up button ke icon ko apne design ke according customize kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable icon`,
                        des:`<p>Ye parameter Drawable type ka hota hai, jisse aap collapse action button ka icon set kar sakte hain. Drawable ek image ya vector graphics ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setCollapseIcon",
              id: "setCollapseIcon(int)",
              dataTypeName: `void`,
              code: `<a href="#setCollapseIcon(int)">setCollapseIcon</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setCollapseIcon(int)">setCollapseIcon</a>(@DrawableRes int resId)`,

              des: `Is method ka use, Toolbar mein show hone wale collapse action button (up button) ka icon set karne ke liye hota hai, lekin isme icon ko resource ID ke through set kiya jata hai.`,
  
              longDes: `
              <p>setCollapseIcon(@DrawableRes int resId) method, Toolbar mein show hone wale collapse action button (up button) ka icon set karne ke liye use hota hai. Iska use app ke navigation flow ko visually enhance karne mein kiya ja sakta hai, jisse users ko back navigation button ko recognize karne mein madad milti hai. Is tarike se, aap up button ke icon ko easily customize kar sakte hain, bina kisi custom drawable object create kiye.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo Toolbar mein show hone wale collapse action button ke icon ke liye drawable resource ID represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setContentInsetEndWithActions",
              id: "setContentInsetEndWithActions()",
              dataTypeName: `void`,
              code: `<a href="#setContentInsetEndWithActions()">setContentInsetEndWithActions</a>(int insetEndWithActions)`,
  
              fullCode: `public void <a href="#setContentInsetEndWithActions()">setContentInsetEndWithActions</a>(int insetEndWithActions)`,

              des: `Is method ka use, Toolbar ke content area ke right end mein actions (menu items) ke liye space set karne ke liye hota hai.`,
  
              longDes: `
              <p>setContentInsetEndWithActions(int insetEndWithActions) method, Toolbar ke content area ke right end mein actions (menu items) ke liye space set karne ke liye hota hai. Actions, Toolbar ke right end mein show kiye jate hain. Jab aap setContentInsetEndWithActions() method ka use karte hain, to aap insetEndWithActions parameter mein specify ki gayi value ke hisaab se, actions ke liye space ko set kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int insetEndWithActions`,
                        des:`<p>Ye parameter int type ka hota hai, jo right end mein actions (menu items) ke liye space ko represent karta hai. Ye space, pixels mein specify kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setContentInsetStartWithNavigation",
              id: "setContentInsetStartWithNavigation()",
              dataTypeName: `void`,
              code: `<a href="#setContentInsetStartWithNavigation()">setContentInsetStartWithNavigation</a>(int insetStartWithNavigation)`,
  
              fullCode: `public void <a href="#setContentInsetStartWithNavigation()">setContentInsetStartWithNavigation</a>(int insetStartWithNavigation)`,

              des: `Is method ka use, Toolbar ke content area ke left start mein navigation button (up button) ke liye space set karne ke liye hota hai.`,
  
              longDes: `
              <p>setContentInsetStartWithNavigation(int insetStartWithNavigation) method, Toolbar ke content area ke left start mein navigation button (up button) ke liye space set karne ke liye hota hai. Navigation button typically left side mein hota hai, aur jab aap us button ko press karte hain, to app ki previous activity ya parent activity mein navigate hota hai. Is method ki madad se aap up button ke liye space ko customize kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int insetStartWithNavigation`,
                        des:`<p>Ye parameter int type ka hota hai, jo left start mein navigation button (up button) ke liye space ko represent karta hai. Ye space, pixels mein specify kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setContentInsetsAbsolute",
              id: "setContentInsetsAbsolute()",
              dataTypeName: `void`,
              code: `<a href="#setContentInsetsAbsolute()">setContentInsetsAbsolute</a>(int contentInsetLeft, int contentInsetRight)`,
  
              fullCode: `public void <a href="#setContentInsetsAbsolute()">setContentInsetsAbsolute</a>(int contentInsetLeft, int contentInsetRight)`,

              des: `Is method ka use, Toolbar ke content area ke absolute left aur right sides ke liye padding (insets) set karne ke liye hota hai.`,
  
              longDes: `
              <p>setContentInsetsAbsolute(int contentInsetLeft, int contentInsetRight) method, Toolbar ke content area ke left aur right sides ke liye padding (insets) ko set karne ke liye hota hai. Padding, content area ke surrounding area mein extra space provide karta hai. Is method ki madad se aap content area ke left aur right sides ke liye spacing ko customize kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int contentInsetLeft`,
                        des:`<p>Ye parameter int type ka hota hai, jo content area ke left side ke liye padding ko represent karta hai. Ye padding, pixels mein specify kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int contentInsetRight`,
                        des:`<p>Ye parameter int type ka hota hai, jo content area ke right side ke liye padding ko represent karta hai. Ye padding, pixels mein specify kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setContentInsetsRelative",
              id: "setContentInsetsRelative()",
              dataTypeName: `void`,
              code: `<a href="#setContentInsetsRelative()">setContentInsetsRelative</a>(int contentInsetStart, int contentInsetEnd)`,
  
              fullCode: `public void <a href="#setContentInsetsRelative()">setContentInsetsRelative</a>(int contentInsetStart, int contentInsetEnd)`,

              des: `Is method ka use, Toolbar ke content area ke start (left for LTR languages) aur end (right for LTR languages) sides ke liye padding (insets) set karne ke liye hota hai.`,
  
              longDes: `
              <p>setContentInsetsRelative(int contentInsetStart, int contentInsetEnd) method, Toolbar ke content area ke start (left for LTR languages) aur end (right for LTR languages) sides ke liye padding (insets) ko set karne ke liye hota hai. Padding, content area ke surrounding area mein extra space provide karta hai. Is method ki madad se aap content area ke start aur end sides ke liye spacing ko customize kar sakte hain, jo ki layout direction ke according change ho sakta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int contentInsetStart`,
                        des:`<p>Ye parameter int type ka hota hai, jo content area ke start side (left for LTR languages) ke liye padding ko represent karta hai. Ye padding, pixels mein specify kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int contentInsetEnd`,
                        des:`<p>Ye parameter int type ka hota hai, jo content area ke end side (right for LTR languages) ke liye padding ko represent karta hai. Ye padding, pixels mein specify kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setLogo",
              id: "setLogo(Drawable)",
              dataTypeName: `void`,
              code: `<a href="#setLogo(Drawable)">setLogo</a>(Drawable drawable)`,
  
              fullCode: `public void <a href="#setLogo(Drawable)">setLogo</a>(Drawable drawable)`,

              des: `Is method ka use, Toolbar mein logo icon ya image ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setLogo(Drawable drawable) method, Toolbar mein logo icon ya image ko set karne ke liye use hota hai. Logo typically app ka icon hota hai, jo app ke brand ya identity ko represent karta hai. Is method ki madad se aap apne Toolbar mein custom logo icon ko set kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable drawable`,
                        des:`<p>Ye parameter Drawable type ka hota hai, jisse aap logo icon ya image ko set kar sakte hain. Drawable ek image ya vector graphics ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setLogo",
              id: "setLogo(int)",
              dataTypeName: `void`,
              code: `<a href="#setLogo(int)">setLogo</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setLogo(int)">setLogo</a>(@DrawableRes int resId)`,

              des: `Is method ka use, Toolbar mein logo icon ya image ko set karne ke liye hota hai, lekin isme logo icon ko resource ID ke through set kiya jata hai.`,
  
              longDes: `
              <p>setLogo(@DrawableRes int resId) method, Toolbar mein logo icon ya image ko set karne ke liye use hota hai. Is method mein logo icon ko resource ID ke form mein provide kiya jata hai, jisse use ek drawable resource se retrieve kiya ja sakta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo Toolbar mein logo icon ya image ke liye drawable resource ID represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setLogoDescription",
              id: "setLogoDescription(CharSequence)",
              dataTypeName: `void`,
              code: `<a href="#setLogoDescription(CharSequence)">setLogoDescription</a>(CharSequence description)`,
  
              fullCode: `public void <a href="#setLogoDescription(CharSequence)">setLogoDescription</a>(CharSequence description)`,

              des: `Is method ka use, Toolbar mein logo icon ya image ke liye ek description (accessibility content description) set karne ke liye hota hai.`,
  
              longDes: `
              <p>setLogoDescription(CharSequence description) method, Toolbar mein logo icon ya image ke liye ek description (accessibility content description) set karne ke liye hota hai. Accessibility content description, logo icon ko visually impaired users ya accessibility services (jaise ki screen readers) ke liye explain karta hai, taki unhe icon ka meaning aur purpose samajhne mein madad milti ho.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence description`,
                        des:`<p>Ye parameter CharSequence type ka hota hai, jo logo icon ya image ke liye accessibility content description represent karta hai. Isme text ka use kiya jata hai jo icon ko describe karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



  

            {
              dep: false,
              name: "setLogoDescription",
              id: "setLogoDescription(int)",
              dataTypeName: `void`,
              code: `<a href="#setLogoDescription(int)">setLogoDescription</a>(@StringRes int resId)`,
  
              fullCode: `public void <a href="#setLogoDescription(int)">setLogoDescription</a>(@StringRes int resId)`,

              des: ` Is method ka use, Toolbar mein logo icon ya image ke liye ek description (accessibility content description) set karne ke liye hota hai. Is method mein description ko resource ID ke through set kiya jata hai.`,
  
              longDes: `
              <p>setLogoDescription(@StringRes int resId) method, Toolbar mein logo icon ya image ke liye ek description (accessibility content description) set karne ke liye use hota hai. Accessibility content description, logo icon ko visually impaired users ya accessibility services (jaise ki screen readers) ke liye explain karta hai, taki unhe icon ka meaning aur purpose samajhne mein madad milti ho. Is method mein description ko resource ID ke form mein provide kiya jata hai, jisse use ek string resource se retrieve kiya ja sakta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@StringRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo Toolbar mein logo icon ya image ke liye accessibility content description ke liye string resource ID represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setNavigationContentDescription",
              id: "setNavigationContentDescription(CharSequence)",
              dataTypeName: `void`,
              code: `<a href="#setNavigationContentDescription(CharSequence)">setNavigationContentDescription</a>(@Nullable CharSequence description)`,
  
              fullCode: `public void <a href="#setNavigationContentDescription(CharSequence)">setNavigationContentDescription</a>(@Nullable CharSequence description)`,

              des: `Is method ka use, Toolbar ke navigation button (up button) ke liye ek description (accessibility content description) set karne ke liye hota hai.`,
  
              longDes: `
              <p>setNavigationContentDescription(@Nullable CharSequence description) method, Toolbar ke navigation button (up button) ke liye ek description (accessibility content description) set karne ke liye use hota hai. Navigation button typically left side mein hota hai, aur jab aap us button ko press karte hain, to app ki previous activity ya parent activity mein navigate hota hai. Accessibility content description, navigation button ko visually impaired users ya accessibility services (jaise ki screen readers) ke liye explain karta hai, taki unhe button ka meaning aur purpose samajhne mein madad milti ho.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable CharSequence description`,
                        des:`<p>Ye parameter CharSequence type ka hota hai, jo navigation button (up button) ke liye accessibility content description represent karta hai. Isme text ka use kiya jata hai jo button ko describe karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setNavigationContentDescription",
              id: "setNavigationContentDescription(int)",
              dataTypeName: `void`,
              code: `<a href="#setNavigationContentDescription(int)">setNavigationContentDescription</a>(@StringRes int resId)`,
  
              fullCode: `public void <a href="#setNavigationContentDescription(int)">setNavigationContentDescription</a>(@StringRes int resId)`,

              des: `Is method ka use, Toolbar ke navigation button (up button) ke liye ek description (accessibility content description) set karne ke liye hota hai.`,
  
              longDes: `
              <p>setNavigationContentDescription(@StringRes int resId) method, Toolbar ke navigation button (up button) ke liye ek description (accessibility content description) set karne ke liye use hota hai. Navigation button typically left side mein hota hai, aur jab aap us button ko press karte hain, to app ki previous activity ya parent activity mein navigate hota hai. Accessibility content description, navigation button ko visually impaired users ya accessibility services (jaise ki screen readers) ke liye explain karta hai, taki unhe button ka meaning aur purpose samajhne mein madad milti ho. Is method mein description ko resource ID ke form mein provide kiya jata hai, jisse use ek string resource se retrieve kiya ja sakta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@StringRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo navigation button (up button) ke liye accessibility content description ke liye string resource ID represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setNavigationIcon",
              id: "setNavigationIcon(Drawable)",
              dataTypeName: `void`,
              code: `<a href="#setNavigationIcon(Drawable)">setNavigationIcon</a>(@Nullable Drawable icon)`,
  
              fullCode: `public void <a href="#setNavigationIcon(Drawable)">setNavigationIcon</a>(@Nullable Drawable icon)`,

              des: `Is method ka use, Toolbar ke navigation button (up button) ke liye ek custom icon ya drawable set karne ke liye hota hai.`,
  
              longDes: `
              <p>setNavigationIcon(@Nullable Drawable icon) method, Toolbar ke navigation button (up button) ke liye ek custom icon ya drawable set karne ke liye use hota hai. Navigation button typically left side mein hota hai, aur jab aap us button ko press karte hain, to app ki previous activity ya parent activity mein navigate hota hai. Aap is method ki madad se apne choice ke icon ya drawable ko navigation button ke liye set kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable icon`,
                        des:`<p>Ye parameter Drawable type ka hota hai, jo navigation button (up button) ke liye set kiya jaane wala custom icon ya drawable represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setNavigationIcon",
              id: "setNavigationIcon(int)",
              dataTypeName: `void`,
              code: `<a href="#setNavigationIcon(int)">setNavigationIcon</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setNavigationIcon(int)">setNavigationIcon</a>(@@DrawableRes int resId)`,

              des: `Is method ka use, Toolbar ke navigation button (up button) ke liye ek custom icon ya drawable set karne ke liye hota hai.`,
  
              longDes: `
              <p>setNavigationIcon(@DrawableRes int resId) method, Toolbar ke navigation button (up button) ke liye ek custom icon ya drawable set karne ke liye use hota hai. Navigation button typically left side mein hota hai, aur jab aap us button ko press karte hain, to app ki previous activity ya parent activity mein navigate hota hai. Aap is method ki madad se apne choice ke icon ya drawable ko navigation button ke liye set kar sakte hain. Is method mein icon ko resource ID ke form mein provide kiya jata hai, jisse use ek drawable resource se retrieve kiya ja sakta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo navigation button (up button) ke liye set kiya jaane wala custom icon ya drawable ka resource ID represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setNavigationOnClickListener",
              id: "setNavigationOnClickListener()",
              dataTypeName: `void`,
              code: `<a href="#setNavigationOnClickListener()">setNavigationOnClickListener</a>(View.OnClickListener listener)`,
  
              fullCode: `public void <a href="#setNavigationOnClickListener()">setNavigationOnClickListener</a>(View.OnClickListener listener)`,

              des: `Is method ka use, Toolbar ke navigation button (up button) par click karne par ek event listener ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setNavigationOnClickListener(View.OnClickListener listener) method, Toolbar ke navigation button (up button) par click karne par ek event listener ko set karne ke liye use hota hai. Event listener, click ya tap jaise user actions ko capture karne mein madad karta hai. Jab navigation button par click hota hai, to OnClickListener interface ka onClick(View v) method call hota hai, jisse aap apne code mein specified actions perform kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View.OnClickListener listener`,
                        des:`<p>Ye parameter View.OnClickListener type ka hota hai, jo navigation button (up button) par click event ko capture karta hai. OnClickListener ek interface hota hai, jiska ek abstract method onClick(View v) hota hai. Aapko onClick() method ko override karna hota hai taki aap specific actions ko perform kar sakein.</p>`,
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
              code: `<a href="#setOnMenuItemClickListener()">setOnMenuItemClickListener</a>(Toolbar.OnMenuItemClickListener listener)`,
  
              fullCode: `public void <a href="#setOnMenuItemClickListener()">setOnMenuItemClickListener</a>(Toolbar.OnMenuItemClickListener listener)`,

              des: `Is method ka use, Toolbar mein menu items par click karne par ek event listener ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setOnMenuItemClickListener(Toolbar.OnMenuItemClickListener listener) method, Toolbar mein menu items par click karne par ek event listener ko set karne ke liye use hota hai. Event listener, menu item click jaise user actions ko capture karne mein madad karta hai. Jab kisi bhi menu item par click hota hai, to OnMenuItemClickListener interface ka onMenuItemClick(MenuItem item) method call hota hai, jisse aap apne code mein specified actions perform kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Toolbar.OnMenuItemClickListener listener`,
                        des:`<p>Ye parameter Toolbar.OnMenuItemClickListener type ka hota hai, jo menu item click event ko capture karta hai. OnMenuItemClickListener ek interface hota hai, jiska ek abstract method onMenuItemClick(MenuItem item) hota hai. Aapko onMenuItemClick() method ko override karna hota hai taki aap specific actions ko perform kar sakein.</p>`,
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

              des: `Is method ka use, Toolbar ke overflow menu icon (three dots menu icon) ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setOverflowIcon(@Nullable Drawable icon) method, Toolbar ke overflow menu icon (three dots menu icon) ko customize karne ke liye use hota hai. By default, overflow menu icon system defined hota hai, lekin aap is method ki madad se apne app ke design ke according custom icon ya drawable ko set kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable icon`,
                        des:`<p>Ye parameter Drawable type ka hota hai, jo overflow menu icon ko represent karta hai. Aap is method mein ek custom icon ya drawable set kar sakte hain.</p>`,
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

              des: `Is method ka use, Toolbar ke overflow menu ke liye ek custom popup theme ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setPopupTheme(@StyleRes int resId) method, Toolbar ke overflow menu ke liye ek custom popup theme ko set karne ke liye use hota hai. Jab aap overflow menu icon par click karte hain, to ek popup menu open hota hai jisme aapke menu items show hote hain. Is popup menu ko customize karne ke liye, aap ek custom style resource ka use kar sakte hain, jo popup menu ke appearance ko control karta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@StyleRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo custom popup theme ka resource ID represent karta hai. Isme aap apne app ke resources mein define kiye gaye style resource ka ID provide kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setSubtitle",
              id: "setSubtitle(int)",
              dataTypeName: `void`,
              code: `<a href="#setSubtitle(int)">setSubtitle</a>(@StringRes int resId)`,
  
              fullCode: `public void <a href="#setSubtitle(int)">setSubtitle</a>(@StringRes int resId)`,

              des: `Is method ka use, Toolbar mein ek subtitle ya secondary title ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setSubtitle(@StringRes int resId) method, Toolbar mein ek subtitle ya secondary title ko set karne ke liye use hota hai. Subtitle typically primary title ke niche display hota hai aur additional context provide karta hai. Is method mein subtitle ko resource ID ke form mein provide kiya jata hai, jisse use ek string resource se retrieve kiya ja sakta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@StringRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo subtitle ko represent karne ke liye string resource ID hota hai. Isme aap apne app ke resources mein define kiye gaye string resource ka ID provide kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setSubtitle",
              id: "setSubtitle(CharSequence)",
              dataTypeName: `void`,
              code: `<a href="#setSubtitle(CharSequence)">setSubtitle</a>(CharSequence subtitle)`,
  
              fullCode: `public void <a href="#setSubtitle(CharSequence)">setSubtitle</a>(CharSequence subtitle)`,

              des: `Is method ka use, Toolbar mein ek subtitle ya secondary title ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setSubtitle(CharSequence subtitle) method, Toolbar mein ek subtitle ya secondary title ko set karne ke liye use hota hai. Subtitle typically primary title ke niche display hota hai aur additional context provide karta hai. Is method mein subtitle ko CharSequence type (jaise ki String ya SpannableString) ke form mein provide kiya jata hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence subtitle`,
                        des:`<p>Ye parameter CharSequence type ka hota hai, jo subtitle ko represent karta hai. Aap is method mein ek String ya SpannableString object provide kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setSubtitleTextAppearance",
              id: "setSubtitleTextAppearance()",
              dataTypeName: `void`,
              code: `<a href="#setSubtitleTextAppearance()">setSubtitleTextAppearance</a>(Context context, @StyleRes int resId)`,
  
              fullCode: `public void <a href="#setSubtitleTextAppearance()">setSubtitleTextAppearance</a>(Context context, @StyleRes int resId)`,

              des: `Is method ka use, Toolbar mein set ki gayi subtitle (secondary title) ke text ka appearance (font style, color, size, etc.) ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setSubtitleTextAppearance(Context context, @StyleRes int resId) method, Toolbar mein set ki gayi subtitle ke text ka appearance (font style, color, size, etc.) ko customize karne ke liye use hota hai. Aap is method ki madad se ek custom text style resource ka use karke subtitle ke text ko modify kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Ye parameter Context type ka hota hai, jo resources ko access karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@StyleRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo subtitle text ke custom style ka resource ID represent karta hai. Isme aap apne app ke resources mein define kiye gaye style resource ka ID provide kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setSubtitleTextColor",
              id: "setSubtitleTextColor(ColorStateList)",
              dataTypeName: `void`,
              code: `<a href="#setSubtitleTextColor(ColorStateList)">setSubtitleTextColor</a>(@NonNull ColorStateList color)`,
  
              fullCode: `public void <a href="#setSubtitleTextColor(ColorStateList)">setSubtitleTextColor</a>(@NonNull ColorStateList color)`,

              des: ` Is method ka use, Toolbar mein set ki gayi subtitle (secondary title) ke text ke color ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setSubtitleTextColor(@NonNull ColorStateList color) method, Toolbar mein set ki gayi subtitle ke text ke color ko customize karne ke liye use hota hai. ColorStateList ek resource hai jo multiple colors ko state (focused, pressed, selected, default, etc.) ke basis par represent karta hai. Aap is method mein ek custom ColorStateList object provide kar sakte hain, jisse subtitle ke text ke color ko customize kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull ColorStateList color`,
                        des:`<p>Ye parameter ColorStateList type ka hota hai, jo subtitle ke text ke color ko represent karta hai. Aap isme ek ColorStateList object provide kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setSubtitleTextColor",
              id: "setSubtitleTextColor(int)",
              dataTypeName: `void`,
              code: `<a href="#setSubtitleTextColor(int)">setSubtitleTextColor</a>(@ColorInt int color)`,
  
              fullCode: `public void <a href="#setSubtitleTextColor(int)">setSubtitleTextColor</a>(@ColorInt int color)`,

              des: `Is method ka use, Toolbar mein set ki gayi subtitle (secondary title) ke text ke color ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setSubtitleTextColor(@ColorInt int color) method, Toolbar mein set ki gayi subtitle ke text ke color ko customize karne ke liye use hota hai. Is method mein subtitle ke text ke liye ek single color provide kiya jata hai, jisse subtitle text ka color set kiya jata hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@ColorInt int color`,
                        des:`<p>Ye parameter int type ka hota hai, jo subtitle ke text ke color ka ek RGB integer value hota hai. Isme aap ek specific color ka RGB value provide kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTitle",
              id: "setTitle(int)",
              dataTypeName: `void`,
              code: `<a href="#setTitle(int)">setTitle</a>(@StringRes int resId)`,
  
              fullCode: `public void <a href="#setTitle(int)">setTitle</a>(@StringRes int resId)`,

              des: `Is method ka use, Toolbar mein ek title ya primary title ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitle(@StringRes int resId) method, Toolbar mein ek title ya primary title ko set karne ke liye use hota hai. Title, usually app ke top mein center mein display hota hai aur app ke context ko describe karta hai. Is method mein title ko resource ID ke form mein provide kiya jata hai, jisse use ek string resource se retrieve kiya ja sakta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@StringRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo title ko represent karne ke liye string resource ID hota hai. Isme aap apne app ke resources mein define kiye gaye string resource ka ID provide kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setTitle",
              id: "setTitle(CharSequence)",
              dataTypeName: `void`,
              code: `<a href="#setTitle(CharSequence)">setTitle</a>(CharSequence title)`,
  
              fullCode: `public void <a href="#setTitle(CharSequence)">setTitle</a>(CharSequence title)`,

              des: `Is method ka use, Toolbar mein ek title ya primary title ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitle(CharSequence title) method, Toolbar mein ek title ya primary title ko set karne ke liye use hota hai. Title, usually app ke top mein center mein display hota hai aur app ke context ko describe karta hai. Is method mein title ko CharSequence type (jaise ki String ya SpannableString) ke form mein provide kiya jata hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence title`,
                        des:`<p>Ye parameter CharSequence type ka hota hai, jo title ko represent karta hai. Aap isme ek String object ya SpannableString object provide kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setTitleMargin",
              id: "setTitleMargin()",
              dataTypeName: `void`,
              code: `<a href="#setTitleMargin()">setTitleMargin</a>(int start, int top, int end, int bottom)`,
  
              fullCode: `public void <a href="#setTitleMargin()">setTitleMargin</a>(int start, int top, int end, int bottom)`,

              des: `Is method ka use, Toolbar ke title ke liye layout margins (spacing) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitleMargin(int start, int top, int end, int bottom) method, Toolbar ke title ke liye layout margins (spacing) ko set karne ke liye use hota hai. Layout margins, view ko uske parent container ke borders se kitna door rakhna hai, ye define karte hain. Is method mein aap title ke liye left, top, right, aur bottom sides par alag-alag margins specify kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int start`,
                        des:`<p>Ye parameter int type ka hota hai, jo title ke left side ke liye margin specify karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int top`,
                        des:`<p>Ye parameter int type ka hota hai, jo title ke top side ke liye margin specify karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int end`,
                        des:`<p>Ye parameter int type ka hota hai, jo title ke right side ke liye margin specify karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int bottom`,
                        des:`<p>Ye parameter int type ka hota hai, jo title ke bottom side ke liye margin specify karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTitleMarginBottom",
              id: "setTitleMarginBottom()",
              dataTypeName: `void`,
              code: `<a href="#setTitleMarginBottom()">setTitleMarginBottom</a>(int margin)`,
  
              fullCode: `public void <a href="#setTitleMarginBottom()">setTitleMarginBottom</a>(int margin)`,

              des: `Is method ka use, Toolbar ke title ke liye bottom side par layout margin (spacing) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitleMarginBottom(int margin) method, Toolbar ke title ke liye bottom side par layout margin (spacing) ko set karne ke liye use hota hai. Layout margins, view ko uske parent container ke borders se kitna door rakhna hai, ye define karte hain. Is method mein aap title ke bottom side ke liye margin specify kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int margin`,
                        des:`<p>Ye parameter int type ka hota hai, jo title ke bottom side ke liye margin specify karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setTitleMarginEnd",
              id: "setTitleMarginEnd()",
              dataTypeName: `void`,
              code: `<a href="#setTitleMarginEnd()">setTitleMarginEnd</a>(int margin)`,
  
              fullCode: `public void <a href="#setTitleMarginEnd()">setTitleMarginEnd</a>(int margin)`,

              des: `Is method ka use, Toolbar ke title ke liye end side par layout margin (spacing) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitleMarginEnd(int margin) method, Toolbar ke title ke liye end side par layout margin (spacing) ko set karne ke liye use hota hai. Layout margins, view ko uske parent container ke borders se kitna door rakhna hai, ye define karte hain. Is method mein aap title ke end side ke liye margin specify kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int margin`,
                        des:`<p>Ye parameter int type ka hota hai, jo title ke end side ke liye margin specify karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTitleMarginStart",
              id: "setTitleMarginStart()",
              dataTypeName: `void`,
              code: `<a href="#setTitleMarginStart()">setTitleMarginStart</a>(int margin)`,
  
              fullCode: `public void <a href="#setTitleMarginStart()">setTitleMarginStart</a>(int margin)`,

              des: `Is method ka use, Toolbar ke title ke liye start side par layout margin (spacing) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitleMarginStart(int margin) method, Toolbar ke title ke liye start side par layout margin (spacing) ko set karne ke liye use hota hai. Layout margins, view ko uske parent container ke borders se kitna door rakhna hai, ye define karte hain. Is method mein aap title ke start side ke liye margin specify kar sakte hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int margin`,
                        des:`<p>Ye parameter int type ka hota hai, jo title ke start side ke liye margin specify karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTitleMarginTop",
              id: "setTitleMarginTop()",
              dataTypeName: `void`,
              code: `<a href="#setTitleMarginTop()">setTitleMarginTop</a>(int margin)`,
  
              fullCode: `public void <a href="#setTitleMarginTop()">setTitleMarginTop</a>(int margin)`,

              des: `Is method ka use, Toolbar ke title ke liye top side par layout margin (spacing) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitleMarginTop(int margin) method, Toolbar ke title ke liye top side par layout margin (spacing) ko set karne ke liye use hota hai. Layout margins, view ko uske parent container ke borders se kitna door rakhna hai, ye define karte hain. Is method mein aap title ke top side ke liye margin specify kar sakte hain</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int margin`,
                        des:`<p>Ye parameter int type ka hota hai, jo title ke top side ke liye margin specify karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTitleTextAppearance",
              id: "setTitleTextAppearance()",
              dataTypeName: `void`,
              code: `<a href="#setTitleTextAppearance()">setTitleTextAppearance</a>(Context context, @StyleRes int resId)`,
  
              fullCode: `public void <a href="#setTitleTextAppearance()">setTitleTextAppearance</a>(Context context, @StyleRes int resId)`,

              des: `Is method ka use, Toolbar ke title ke text ka appearance (styling) ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitleTextAppearance(Context context, @StyleRes int resId) method, Toolbar ke title ke text ka appearance (styling) ko customize karne ke liye use hota hai. Is method mein aap title ke text ke liye ek style resource provide karte hain, jisse title ka text appearance change ho jata hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Ye parameter Context type ka hota hai, jo method ko call karne wale activity ya application context ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@StyleRes int resId`,
                        des:`<p>Ye parameter int type ka hota hai, jo title text ke appearance ke liye style resource ID hota hai. Isme aap apne app ke resources mein define kiye gaye style resource ka ID provide kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },






            {
              dep: false,
              name: "setTitleTextColor",
              id: "setTitleTextColor(ColorStateList)",
              dataTypeName: `void`,
              code: `<a href="#setTitleTextColor(ColorStateList)">setTitleTextColor</a>(@NonNull ColorStateList color)`,
  
              fullCode: `public void <a href="#setTitleTextColor(ColorStateList)">setTitleTextColor</a>(@NonNull ColorStateList color)`,

              des: `Is method ka use, Toolbar ke title ke text ke liye text color ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitleTextColor(@NonNull ColorStateList color) method, Toolbar ke title ke text ke liye text color (rang) ko set karne ke liye use hota hai. Is method mein aap ColorStateList object provide karte hain, jisme title ke text ke liye alag-alag states (jaise normal state, pressed state, focused state, etc.) ke liye colors define hote hain.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull ColorStateList color`,
                        des:`<p>Ye parameter ColorStateList type ka hota hai, jo title text ke liye text color states ko represent karta hai. Aap isme alag-alag states ke liye colors define kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTitleTextColor",
              id: "setTitleTextColor(int)",
              dataTypeName: `void`,
              code: `<a href="#setTitleTextColor(int)">setTitleTextColor</a>(@ColorInt int color)`,
  
              fullCode: `public void <a href="#setTitleTextColor(int)">setTitleTextColor</a>(@ColorInt int color)`,

              des: `Is method ka use, Toolbar ke title ke text ke liye text color ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTitleTextColor(@ColorInt int color) method, Toolbar ke title ke text ke liye text color ko set karne ke liye use hota hai. Is method mein aap ek int value provide karte hain, jo title ke text ke liye ek specific color represent karta hai.</p>

              `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@ColorInt int color`,
                        des:`<p>Ye parameter int type ka hota hai, jo title text ke liye text color ko represent karta hai. </p>`,
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

              des: `Is method ka use, Toolbar mein overflow menu ko dikhaane ke liye hota hai.`,
  
              longDes: `
              <p>showOverflowMenu() method, Toolbar mein overflow menu ko dikhaane ke liye use hota hai. Overflow menu, jab Toolbar mein kam jagah hoti hai aur sabhi menu items display nahi ho paate, tab additional menu items ko overflow menu mein rakhne ke liye use kiya jata hai. Overflow menu, 3 vertical dots ya overflow icon ke roop mein dikhta hai, jisse users additional menu items tak pahunch sakte hain.</p>

              <p>Method ek boolean value return karta hai, jo batata hai ki overflow menu dikhaya gaya hai ya nahi. true return hoga agar overflow menu dikhaya gaya hai, aur false return hoga agar overflow menu pehle se hi dikhaya gaya tha ya fir kisi reason se dikhaya nahi gaya.</p>

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
  
              des: `Is method ka use, Toolbar ke child views ke layout parameters ko validate karne ke liye hota hai.`,
  
              longDes: `
                <p>checkLayoutParams(ViewGroup.LayoutParams p) method, Toolbar ke child views ke layout parameters ko validate karne ke liye use hota hai. Jab aap Toolbar class se ek custom view bana rahe hote hain aur us view ke layout parameters ko validate karna chahte hain, tab aap is method ko override karke apne custom view ke layout parameters ko validate kar sakte hain</p>

                <p>Method ek boolean value return karta hai. true return hota hai agar layout parameters valid hain, aur false return hota hai agar layout parameters invalid hain.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ViewGroup.LayoutParams p`,
                        des:`<p>Ye parameter ViewGroup.LayoutParams type ka hota hai, jo validate kiye ja rahe layout parameters ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  
  
            {
              dep: false,
              name: "generateDefaultLayoutParams",
              id: "generateDefaultLayoutParams()",
              dataTypeName: `Toolbar.LayoutParams`,
              code: `<a href="#generateDefaultLayoutParams()">generateDefaultLayoutParams</a>()`,
  
              fullCode: `protected Toolbar.LayoutParams <a href="#generateDefaultLayoutParams()">generateDefaultLayoutParams</a>()`,
  
              des: `Is method ka use, Toolbar ke liye default layout parameters ko generate karne ke liye hota hai.`,
  
              longDes: `
                <p>generateDefaultLayoutParams() method, Toolbar ke liye default layout parameters ko generate karne ke liye use hota hai. Jab aap Toolbar class se ek custom view bana rahe hote hain aur us view ke liye default layout parameters generate karna chahte hain, tab aap is method ko override karke apne custom view ke liye default layout parameters ko customize kar sakte hain.</p>

                <p>Toolbar.LayoutParams: Method Toolbar.LayoutParams type ka default layout parameters return karta hai.</p>
                
                `,
  
              parameter: [],
            },
  

  
            {
              dep: false,
              name: "generateLayoutParams",
              id: "generateLayoutParams()",
              dataTypeName: `Toolbar.LayoutParams`,
              code: `<a href="#generateLayoutParams()">generateLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              fullCode: `protected Toolbar.LayoutParams <a href="#generateLayoutParams()">generateLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              des: `Is method ka use, Toolbar ke liye custom layout parameters ko generate karne ya existing layout parameters ko modify karne ke liye hota hai.`,
  
              longDes: `
                <p>generateLayoutParams(ViewGroup.LayoutParams p) method, Toolbar ke liye custom layout parameters ko generate karne ya existing layout parameters ko modify karne ke liye use hota hai. Jab aap Toolbar class se ek custom view bana rahe hote hain aur us view ke liye custom layout parameters ko generate ya modify karna chahte hain, tab aap is method ko override karke apne custom layout parameters ko generate ya modify kar sakte hain.</p>

                <p>Toolbar.LayoutParams: Method Toolbar.LayoutParams type ka custom layout parameters return karta hai.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ViewGroup.LayoutParams p`,
                        des:`<p>Ye parameter ViewGroup.LayoutParams type ka hota hai, jo existing layout parameters ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  

  
            {
              dep: false,
              name: "onAttachedToWindow",
              id: "onAttachedToWindow()",
              dataTypeName: `void`,
              code: `<a href="#onAttachedToWindow()">onAttachedToWindow</a>()`,
  
              fullCode: `protected void <a href="#onAttachedToWindow()">onAttachedToWindow</a>()`,
  
              des: `Is method ka use, Toolbar ko window (UI hierarchy) se attach karne par execute hota hai.`,
  
              longDes: `
                <p>onAttachedToWindow() method, Toolbar ko window (UI hierarchy) se attach karne par execute hota hai. Jab aap Toolbar view ko kisi Activity ya Fragment ke UI hierarchy mein add karte hain, tab yah method automatically call hota hai. Is method ka use Toolbar ke initialization aur setup process ko complete karne ke liye kiya jata hai.</p>
                
                `,
  
              parameter: [],
            },
  


  
            {
              dep: false,
              name: "onDetachedFromWindow",
              id: "onDetachedFromWindow()",
              dataTypeName: `void`,
              code: `<a href="#onDetachedFromWindow()">onDetachedFromWindow</a>()`,
  
              fullCode: `protected void <a href="#onDetachedFromWindow()">onDetachedFromWindow</a>()`,
  
              des: `Is method ka use, Toolbar ko window (UI hierarchy) se detach karne par execute hota hai.`,
  
              longDes: `
                <p>onDetachedFromWindow() method, Toolbar ko window (UI hierarchy) se detach karne par execute hota hai. Jab aap Toolbar view ko kisi Activity ya Fragment ke UI hierarchy se remove karte hain, tab yah method automatically call hota hai. Is method ka use Toolbar ke cleanup aur resources release karne ke liye kiya jata hai.</p>
                
                `,
  
              parameter: [],
            },
  


  
            {
              dep: false,
              name: "onLayout",
              id: "onLayout()",
              dataTypeName: `void`,
              code: `<a href="#onLayout()">onLayout</a>(boolean changed, int l, int t, int r, int b)`,
  
              fullCode: `protected void <a href="#onLayout()">onLayout</a>(boolean changed, int l, int t, int r, int b)`,
  
              des: `Is method ka use, Toolbar ke child views ko layout karne ke liye hota hai.`,
  
              longDes: `
                <p>onLayout(boolean changed, int l, int t, int r, int b) method, Toolbar ke child views ko layout karne ke liye use hota hai. Jab Toolbar ke size ya content me koi changes hote hain, tab yah method automatically call hota hai. Is method mein aap apne child views ko unke naye positions aur sizes par layout kar sakte hain.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean changed`,
                        des:`<p>Ye parameter ek boolean value hai, jo batata hai ki Toolbar ke layout me koi changes huye hain ya nahi. Agar is parameter ki value true hai, toh Toolbar ke layout me changes hue hain, aur aap apne child views ko naye positions aur sizes par layout karna chahte hain. Agar value false hai, toh koi changes nahi hue hain aur aapko child views ko layout karne ki zarurat nahi hai.</p>`,
                      },
                      {
                        dataTypeName: `int l`,
                        des:`<p>int type ka parameter hai, jo Toolbar ke left (left-most) coordinate position ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int t`,
                        des:`<p>int type ka parameter hai, jo Toolbar ke top (top-most) coordinate position ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int r`,
                        des:`<p>int type ka parameter hai, jo Toolbar ke right (right-most) coordinate position ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int b`,
                        des:`<p>int type ka parameter hai, jo Toolbar ke bottom (bottom-most) coordinate position ko represent karta hai.</p>`,
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
  
              des: `Is method ka use, Toolbar view ke width aur height ko measure karne ke liye hota hai.`,
  
              longDes: `
                <p>onMeasure(int widthMeasureSpec, int heightMeasureSpec) method, Toolbar view ke width aur height ko measure karne ke liye use hota hai. Jab aap Toolbar ko layout hierarchy mein add karte hain ya fir koi size change hoti hai, tab yah method automatically call hota hai. Is method mein aap apne Toolbar view ke width aur height ko measure kar sakte hain, taki uski size aur layout behavior sahi tarike se ho.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int widthMeasureSpec`,
                        des:`<p>int type ka parameter hai, jo Toolbar ke width ke liye measure information provide karta hai. Is parameter mein measure size aur measure mode hota hai, jo width ko represent karte hain.</p>`,
                      },
                      {
                        dataTypeName: `int heightMeasureSpec`,
                        des:`<p>int type ka parameter hai, jo Toolbar ke height ke liye measure information provide karta hai. Is parameter mein measure size aur measure mode hota hai, jo height ko represent karte hain.</p>`,
                      },
                    ],
                  },
              ],
            },
  


  
            {
              dep: false,
              name: "onRestoreInstanceState",
              id: "onRestoreInstanceState()",
              dataTypeName: `void`,
              code: `<a href="#onRestoreInstanceState()">onRestoreInstanceState</a>(Parcelable state)`,
  
              fullCode: `protected void <a href="#onRestoreInstanceState()">onRestoreInstanceState</a>(Parcelable state)`,
  
              des: `Is method ka use, Toolbar view ke previously saved state ko restore karne ke liye hota hai.`,
  
              longDes: `
                <p>onRestoreInstanceState(Parcelable state) method, Toolbar view ke previously saved state ko restore karne ke liye use hota hai. Jab aap Toolbar view ko recreate karte hain (orientation change ya activity recreate hone par), tab Toolbar ke state ko save karna zaruri hota hai, taki wo apne previous state ko restore kar sake. onRestoreInstanceState() method, is saved state ko restore karne ke liye use hota hai.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Parcelable state`,
                        des:`<p>Parcelable type ka parameter hai, jo Toolbar ke saved state ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  


  
            {
              dep: false,
              name: "onSaveInstanceState",
              id: "onSaveInstanceState()",
              dataTypeName: `Parcelable`,
              code: `<a href="#onSaveInstanceState()">onSaveInstanceState</a>()`,
  
              fullCode: `protected Parcelable <a href="#onSaveInstanceState()">onSaveInstanceState</a>()`,
  
              des: `Is method ka use, Toolbar view ke state ko save karne ke liye hota hai.`,
  
              longDes: `
                <p>onSaveInstanceState() method, Toolbar view ke state ko save karne ke liye use hota hai. Jab aap Toolbar view ko recreate karte hain (orientation change ya activity recreate hone par), tab Toolbar ke state ko save karna zaruri hota hai, taki wo recreate hone ke baad apne previous state ko restore kar sake. onSaveInstanceState() method, is saved state ko generate karne ke liye use hota hai.</p>

                <p>Parcelable: Method, Parcelable type ka object return karta hai, jo Toolbar ke current state ko represent karta hai.</p>
                
                `,
  
              parameter: [],
            },
  
//

          ],
        },
     
      
     
      extensionFunctions: {
        success: true,
        name: "Extension functions",

        method: [
          {
            dep: false,
            name: "ToolbarKt.setupWithNavController",
            id: "ToolbarKt.setupWithNavController(Toolbar,NavController,AppBarConfiguration)",
            dataTypeName: `final void`,
            code: `<a href="#ToolbarKt.setupWithNavController(Toolbar,NavController,AppBarConfiguration)">ToolbarKt.setupWithNavController</a>(
              @NonNull Toolbar receiver,
              @NonNull NavController navController,
              @NonNull AppBarConfiguration configuration
          )`,

            fullCode: `public final void <a href="#ToolbarKt.setupWithNavController(Toolbar,NavController,AppBarConfiguration)">ToolbarKt.setupWithNavController</a>(
              @NonNull Toolbar receiver,
              @NonNull NavController navController,
              @NonNull AppBarConfiguration configuration
          )`,

            des: `Is method ka use, Toolbar view ko NavController aur AppBarConfiguration ke saath associate karne ke liye hota hai. Ye method Navigation component ke saath integration ko simplify karta hai.`,

            longDes: `
            <p>ToolbarKt.setupWithNavController() method, NavController aur AppBarConfiguration ke saath Toolbar view ko associate karne ke liye use hota hai. Jab aap Toolbar view ko Navigation component ke saath integrate karna chahte hain, tab aap is method ka use kar sakte hain.</p>
            `,

           


            parameter: [
              {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Toolbar receiver`,
                      des:`<p>Toolbar view, jise aap associate karna chahte hain.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull NavController navController`,
                      des:`<p>NavController object, jisko aap Toolbar view se connect karna chahte hain. NavController navigation graph aur navigation actions ka management karta hai.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull AppBarConfiguration configuration`,
                      des:`<p>AppBarConfiguration object, jiske zariye aap specify kar sakte hain ki Toolbar view ka behavior kya hona chahiye, jaise ki konsi destination par back button show karna hai ya konsi destination par drawer icon show karna hai.</p>`,
                    },
                  ],
                },
            ],
          },




          {
            dep: false,
            name: "ToolbarKt.setupWithNavController",
            id: "ToolbarKt.setupWithNavController(Toolbar,NavController,DrawerLayout)",
            dataTypeName: `final void`,
            code: `<a href="#ToolbarKt.setupWithNavController(Toolbar,NavController,DrawerLayout)">ToolbarKt.setupWithNavController</a>(
              @NonNull Toolbar receiver,
              @NonNull NavController navController,
              DrawerLayout drawerLayout
          )`,

            fullCode: `public final void <a href="#ToolbarKt.setupWithNavController(Toolbar,NavController,DrawerLayout)">ToolbarKt.setupWithNavController</a>(
              @NonNull Toolbar receiver,
              @NonNull NavController navController,
              DrawerLayout drawerLayout
          )`,

            des: `Is method ka use, Toolbar view ko NavController aur DrawerLayout ke saath associate karne ke liye hota hai. Ye method Navigation component ke saath integration ko simplify karta hai, jisse aap navigation ka behavior sahi tarike se manage kar sakte hain.`,

            longDes: `
            <p>ToolbarKt.setupWithNavController() method, NavController aur DrawerLayout ke saath Toolbar view ko associate karne ke liye use hota hai. Jab aap Toolbar view ko Navigation component aur DrawerLayout ke saath integrate karna chahte hain, tab aap is method ka use kar sakte hain.</p>
            `,

           


            parameter: [
              {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Toolbar receiver`,
                      des:`<p>Toolbar view, jise aap associate karna chahte hain.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull NavController navController`,
                      des:`<p>NavController object, jisko aap Toolbar view se connect karna chahte hain. NavController navigation graph aur navigation actions ka management karta hai.</p>`,
                    },
                    {
                      dataTypeName: `DrawerLayout drawerLayout`,
                      des:`<p>DrawerLayout object, jisko aap Toolbar view ke drawer icon ke saath associate karna chahte hain. DrawerLayout navigation drawer ke management ke liye use hota hai.</p>`,
                    },
                  ],
                },
            ],
          },



        ]
      }
  
  

      },
    });
  };
  