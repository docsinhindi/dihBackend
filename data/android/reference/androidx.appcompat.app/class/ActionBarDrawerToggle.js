module.exports.ActionBarDrawerToggle = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ActionBarDrawerToggle",
      hCode: `public class <a href="#ActionBarDrawerToggle">ActionBarDrawerToggle</a> implements DrawerLayout.DrawerListener`,
  
      des: 
        `<p>ActionBarDrawerToggle ka use navigation drawer (hamburger menu) ke sath ActionBar ko synchronize karne ke liye kiya jata hai. Ye class ActionBar me aapke navigation drawer ke open aur close events ko handle karta hai aur ActionBar ke state ko uske anusar update karta hai.</p>

        <p>ActionBarDrawerToggle class ke through hum navigation drawer toggle icon (hamburger icon) ko ActionBar me display kar sakte hai. Iske saath hi, ye class navigation drawer ke open aur close events ko detect karta hai aur ActionBar ke sath corresponding changes ko apply karta hai, jaise ki toggle icon ka animation, title changes, aur navigation drawer ke accessibility features ko manage karna.</p>

        <p>Is class ke objects ko DrawerLayout ke sath associate kiya jata hai aur ActionBarDrawerToggle ke methods ka upyog ActionBar ke sath coordination establish karne ke liye kiya jata hai. Ye methods include karte hai onDrawerOpened(), onDrawerClosed(), onDrawerSlide(), jinhe hum override karke custom behavior implement kar sakte hai.</p>`,
      
      img: [],
  
  
      summary: {
        success: true,

        nestedType: {
            name: "Nested Types",
            success: true,
    
            method: [
              {
                name: `public interface ActionBarDrawerToggle.Delegate`,
                des: `ActionBarDrawerToggle class navigation drawer ke open aur close events ko detect karne ke liye Delegate interface ka istemal karta hai. Ye interface `,
                dep: false,
                longDes: ``,
              },
              {
                name: `public interface ActionBarDrawerToggle.DelegateProvider`,
                des: `Implementing Activity ko ActionBarDrawerToggle ke saath istemaal karne ke liye ActionBarDrawerToggle.Delegate ko vapas karne ki anumati deta hai.`,
                dep: false,
                longDes: ``,
              }
    
              
            ],
          },
  
     
        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `ActionBarDrawerToggle`,
              id: "ActionBarDrawerToggle(Activity,DrawerLayout,int,int)",
              code: `<a href="#ActionBarDrawerToggle(Activity,DrawerLayout,int,int)">ActionBarDrawerToggle</a>(
                Activity activity,
                DrawerLayout drawerLayout,
                @StringRes int openDrawerContentDescRes,
                @StringRes int closeDrawerContentDescRes
            )`,
              fullCode: `public <a href="#ActionBarDrawerToggle(Activity,DrawerLayout,int,int)">ActionBarDrawerToggle</a>(
                Activity activity,
                DrawerLayout drawerLayout,
                @StringRes int openDrawerContentDescRes,
                @StringRes int closeDrawerContentDescRes
            )`,
              des: `Is constructor ka upyog ActionBarDrawerToggle object banane ke liye kiya jata hai. Ye constructor Activity, DrawerLayout, aur drawer ke open/close content descriptions ke resource IDs ko prapt karne ke liye istemal hota hai.`,
              longDes: `
              <p>Is constructor ka upyog ActionBarDrawerToggle object banane ke liye kiya jata hai. Ye constructor Activity, DrawerLayout, aur drawer ke open/close content descriptions ke resource IDs ko prapt karne ke liye istemal hota hai.</p>
  
              <p>Is constructor ke through, ActionBarDrawerToggle object banaya ja sakta hai jo navigation drawer ke events ko handle karne ke liye ActionBar ke sath synchronize karta hai. Ye object ActionBar par toggle icon (hamburger icon) ko display karne aur toggle icon ke click events ko capture karne ke liye use hota hai. Isse navigation drawer ke open/close state ko ActionBar ke sath coordinate karne mein madad milti hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Activity activity`,
                      des:`<p>Current activity jisme navigation drawer istemal ho raha hai. Is parameter se ActionBar ke state aur toggle icon ka behavior handle kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `DrawerLayout drawerLayout`,
                      des:`<p>DrawerLayout object jo navigation drawer ko represent karta hai. Is parameter se toggle icon ke click events aur drawer ke state ko synchronize kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@StringRes int openDrawerContentDescRes`,
                      des:`<p>Drawer ke open state ke liye content description ka resource ID. Isse toggle icon par long press karne par aur accessibility purposes ke liye content description provide kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@StringRes int closeDrawerContentDescRes`,
                      des:`<p>Drawer ke close state ke liye content description ka resource ID. Isse toggle icon par long press karne par aur accessibility purposes ke liye content description provide kiya jata hai.</p>`,
                    },
                  ],
                },
                
              ],
            }, 
            
            {
              dep: false,
              name: `ActionBarDrawerToggle`,
              id: "ActionBarDrawerToggle(Activity,DrawerLayout,Toolbar,int,int)",
              code: `<a href="#ActionBarDrawerToggle(Activity,DrawerLayout,Toolbar,int,int)">ActionBarDrawerToggle</a>(
                Activity activity,
                DrawerLayout drawerLayout,
                Toolbar toolbar,
                @StringRes int openDrawerContentDescRes,
                @StringRes int closeDrawerContentDescRes
            )
            `,
              fullCode: `public <a href="#ActionBarDrawerToggle(Activity,DrawerLayout,Toolbar,int,int)">ActionBarDrawerToggle</a>(
                Activity activity,
                DrawerLayout drawerLayout,
                Toolbar toolbar,
                @StringRes int openDrawerContentDescRes,
                @StringRes int closeDrawerContentDescRes
            )
            `,
              des: `Is constructor ka upyog ActionBarDrawerToggle object banane ke liye kiya jata hai. Ye constructor Activity, DrawerLayout, Toolbar, aur drawer ke open/close content descriptions ke resource IDs ko prapt karne ke liye istemal hota hai.`,
              longDes: `
              <p>Is constructor ka upyog ActionBarDrawerToggle object banane ke liye kiya jata hai. Ye constructor Activity, DrawerLayout, Toolbar, aur drawer ke open/close content descriptions ke resource IDs ko prapt karne ke liye istemal hota hai.</p>
  
              <p>Is constructor ke through, ActionBarDrawerToggle object banaya ja sakta hai jo navigation drawer ke events ko handle karne ke liye ActionBar ke sath synchronize karta hai. Ye object ActionBar par toggle icon (hamburger icon) ko display karne, toggle icon ke click events ko capture karne, aur drawer ke open/close state ko ActionBar ke sath coordinate karne ke liye use hota hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Activity activity`,
                      des:`<p>Current activity jisme navigation drawer istemal ho raha hai. Is parameter se ActionBar ke state aur toggle icon ka behavior handle kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `DrawerLayout drawerLayout`,
                      des:`<p>DrawerLayout object jo navigation drawer ko represent karta hai. Is parameter se toggle icon ke click events aur drawer ke state ko synchronize kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `Toolbar toolbar`,
                      des:`<p>object jo ActionBar ko represent karta hai. Is parameter se toggle icon ko ActionBar par display kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@StringRes int openDrawerContentDescRes`,
                      des:`<p>Drawer ke open state ke liye content description ka resource ID. Isse toggle icon par long press karne par aur accessibility purposes ke liye content description provide kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `@StringRes int closeDrawerContentDescRes`,
                      des:`<p>Drawer ke close state ke liye content description ka resource ID. Isse toggle icon par long press karne par aur accessibility purposes ke liye content description provide kiya jata hai.</p>`,
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
                name: "getDrawerArrowDrawable",
                id: "getDrawerArrowDrawable()",
                dataTypeName: `@NonNull DrawerArrowDrawable`,
                code: `<a href="#getDrawerArrowDrawable()">getDrawerArrowDrawable</a>()`,
    
                fullCode: `public @NonNull DrawerArrowDrawable <a href="#getDrawerArrowDrawable()">getDrawerArrowDrawable</a>()`,
                des: `getDrawerArrowDrawable() method ActionBarDrawerToggle class ke toggle icon ke DrawerArrowDrawable object ko prapt karne ke liye use hota hai, jisse toggle icon ko customize kiya ja sakta hai.`,
    
                longDes: `
                <p>getDrawerArrowDrawable() method ke dwara DrawerArrowDrawable object prapt kiya ja sakta hai, jiske baad is object ke through toggle icon ke appearance ko customize kiya ja sakta hai. Ismein various properties aur methods available hote hain jaise setBarLength(), setBarThickness(), setColor(), setSpinEnabled(), etc., jinhe use karke toggle icon ke design aur behavior ko modify kiya ja sakta hai.</p>
                `,
    
                parameter: [
                  {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull DrawerArrowDrawable`,
                        des:`<p>DrawerArrowDrawable, navigation drawer toggle icon (hamburger icon) ke liye ek drawable hai</p>`,
                      },
                    ],
                  },
                 
                ],
              },
    
              {
                dep: false,
                name: "getToolbarNavigationClickListener",
                id: "getToolbarNavigationClickListener()",
                dataTypeName: `View.OnClickListener`,
                code: `<a href="#getToolbarNavigationClickListener()">getToolbarNavigationClickListener</a>()`,
    
                fullCode: `public View.OnClickListener <a href="#getToolbarNavigationClickListener()">getToolbarNavigationClickListener</a>()`,
                des: `getToolbarNavigationClickListener() method ActionBarDrawerToggle class ke navigation icon ke click events ko capture karne ke liye use hota hai. Ye method View.OnClickListener object return karta hai, jise navigation icon par set karne se click events ko handle kiya ja sakta hai.`,
    
                longDes: `
                  <p>Is method ka upyog ActionBarDrawerToggle object ke sath jude navigation events ko handle karne ke liye kiya jata hai. Jab ActionBarDrawerToggle ka object banaya jata hai, tab Toolbar ke navigation icon (back icon) ko toggle icon (hamburger icon) ke roop mein set kiya jata hai. getToolbarNavigationClickListener() method ke dwara prapt kiye gaye View.OnClickListener object ko Toolbar ke navigation icon par set karne se, click events ko capture karne ke liye listener set ho jata hai.</p>
    
                  <p>View.OnClickListener object ko navigation icon par set karne ke baad, jab navigation icon par click event occur hota hai, onClick() method invoke hota hai. Is method mein navigation drawer ko open/close karne ke liye toggle icon ke click event ko handle kiya jata hai. Isse navigation drawer ke open/close state ko toggle icon ke click event ke sath synchronize kiya ja sakta hai.</p>`,
    
                parameter: [
                  {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View.OnClickListener`,
                        des: `<p>Ye method View.OnClickListener object return karta hai, jise navigation icon par set karne se click events ko handle kiya ja sakta hai.</p>`,
                      },
                    ],
                  },
                  {
                    name: "See also",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View.setToolbarNavigationClickListener`,
                        des: ``,
                      },
                      {
                        dataTypeName: `setDrawerIndicatorEnabled`,
                        des: ``,
                      },
                      {
                        dataTypeName: `isDrawerIndicatorEnabled`,
                        des: ``,
                      },
                    ],
                  },
                ],
              },
    
              {
                dep: false,
                name: "isDrawerIndicatorEnabled",
                id: "isDrawerIndicatorEnabled()",
                dataTypeName: `boolean`,
                code: `<a href="#isDrawerIndicatorEnabled()">isDrawerIndicatorEnabled</a>()`,
    
                fullCode: `public boolean <a href="#isDrawerIndicatorEnabled()">isDrawerIndicatorEnabled</a>()`,
                des: `isDrawerIndicatorEnabled() method ActionBarDrawerToggle class ke drawer indicator (toggle icon) ke enable/disable status ko prapt karne ke liye use hota hai.`,
    
                longDes: `  
                  <p>Is method ka upyog kiya jata hai ActionBarDrawerToggle object ke drawer indicator (toggle icon) ko enable/disable karne ke liye. Agar is method se true value return hoti hai, tab toggle icon (hamburger icon) ActionBar par display hota hai aur click events ko handle karta hai. Aur agar false value return hoti hai, tab toggle icon ko disable kiya jata hai aur click events ko handle nahi karta hai.</p>
    
                  <p>Drawer indicator ka use navigation drawer ke open/close state ko toggle icon ke sath sync karne ke liye hota hai. Jab navigation drawer khulta hai, toggle icon navigation icon se toggle ho jata hai (hamburger icon se back icon me change ho jata hai), aur jab drawer band ho jata hai, toggle icon wapas hamburger icon me change ho jata hai.</p>`,
    
                parameter: [
                  {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean`,
                        des: `<p>Is method se true ya false value return hoti hai, jis se drawer indicator ko enable/disable kiya ja sakta hai.</p>`,
                      }
                    ],
                  },
                  {
                    name: "See also",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `setDrawerIndicatorEnabled`,
                        des: ``,
                      }
                    ],
                  },
                ],
              },
    
              {
                dep: false,
                name: "isDrawerSlideAnimationEnabled",
                id: "isDrawerSlideAnimationEnabled()",
                dataTypeName: `boolean`,
                code: `<a href="#isDrawerSlideAnimationEnabled()">isDrawerSlideAnimationEnabled</a>()`,
    
                fullCode: `public boolean <a href="#isDrawerSlideAnimationEnabled()">isDrawerSlideAnimationEnabled</a>()`,
  
                des: `isDrawerSlideAnimationEnabled() method ActionBarDrawerToggle class ke drawer slide animation ke enable/disable status ko prapt karne ke liye use hota hai. Is method se true ya false value return hoti hai, jis se drawer slide animation ko enable/disable kiya ja sakta hai.`,
    
                longDes: `
    
                  <p>Is method ka upyog ActionBarDrawerToggle object ke drawer slide animation ko enable/disable karne ke liye kiya jata hai. Agar is method se true value return hoti hai, tab drawer slide animation ActionBarDrawerToggle object par apply hoti hai, jisse drawer ka smooth slide effect dekha ja sakta hai. Aur agar false value return hoti hai, tab drawer slide animation disable ho jati hai aur drawer ka slide effect nahi dikhta hai.</p>
  
                  <p>Drawer slide animation ka use navigation drawer ko open/close karte samay visual effect ko enhance karne ke liye hota hai. Jab navigation drawer khulta hai ya band hota hai, slide animation se drawer smoothly slide hota hai, jisse seamless transition effect create hota hai. isDrawerSlideAnimationEnabled() method ke dwara, drawer slide animation ko enable/disable kiya jata hai, jisse drawer ka slide effect ko control kiya ja sakta hai.</p>`,
    
                parameter: [
                  {
                    name: "Returns",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean`,
                        des: `<p> Is method se true ya false value return hoti hai, jis se drawer slide animation ko enable/disable kiya ja sakta hai.</p>`,
                      }
                    ],
                  },
                ],
              },
    
              {
                dep: false,
                name: "onConfigurationChanged",
                id: "onConfigurationChanged()",
                dataTypeName: `void`,
                code: `<a href="#onConfigurationChanged()">onConfigurationChanged</a>(Configuration newConfig)`,
    
                fullCode: `public void <a href="#onConfigurationChanged()">onConfigurationChanged</a>(Configuration newConfig)`,
  
                des: `onConfigurationChanged(Configuration newConfig) method ActionBarDrawerToggle class mein ek callback method hai. Jab device ki configuration, jaise screen orientation ya locale, badalti hai, tab yah method automatic roop se call hota hai.`,
    
                longDes: `
                  <p>onConfigurationChanged(Configuration newConfig) method ActionBarDrawerToggle class mein ek callback method hai. Jab device ki configuration, jaise screen orientation ya locale, badalti hai, tab yah method automatic roop se call hota hai.</p>
    
                  <p>Is method ka upyog ActionBarDrawerToggle ke sath judi UI tarkik ke samay sahi tarike se UI ko update karne ke liye kiya jata hai. Isme newConfig parameter ke roop mein Configuration object liya jata hai, jo naye configuration ki jankari deta hai, jaise nayi screen orientation, locale etc.</p>`,
    
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Configuration newConfig`,
                        des: `<pIsme newConfig parameter ke roop mein Configuration object liya jata hai, jo naye configuration ki jankari deta hai, jaise nayi screen orientation, locale etc.</p>`,
                      },
                    ],
                  },
                ],
              },
    
              {
                dep: false,
                name: "onDrawerClosed",
                id: "onDrawerClosed()",
                dataTypeName: `void`,
                code: `<a href="#onDrawerClosed()">onDrawerClosed</a>(View drawerView)`,
    
                fullCode: `public void <a href="#onDrawerClosed()">onDrawerClosed</a>(View drawerView)`,
  
                des: `Yah method navigation drawer band hone ke baad automatic roop se call hota hai.`,
                longDes: `<p>Is method ka upyog navigation drawer band hone ke baad kuch niyamit kriyayein karne ke liye kiya jata hai. Isme drawerView parameter ke roop mein View object liya jata hai, jo navigation drawer ka reference hota hai.</p>
  
                <p>Jab navigation drawer band hota hai, onDrawerClosed() method ko call kiya jata hai. Is method ko override karke, hum apne ActionBarDrawerToggle subclass mein apne custom logic ko shamil kar sakte hain. Isme aksar navigation drawer ke band hone ke baad kuch UI updates, navigation states ke reset, ya dusre kriyayein shamil hoti hai.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View drawerView`,
                        des: `<p>Isme drawerView parameter ke roop mein View object liya jata hai, jo navigation drawer ka reference hota hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    
              {
                dep: false,
                name: "onDrawerOpened",
                id: "onDrawerOpened()",
                dataTypeName: `void`,
                code: `<a href="#onDrawerOpened()">onDrawerOpened</a>(View drawerView)`,
    
                fullCode: `public void <a href="#onDrawerOpened()">onDrawerOpened</a>(View drawerView)`,
  
                des: `Yah method navigation drawer open hone ke baad automatic roop se call hota hai.`,
                longDes: `<p>Is method ka upyog navigation drawer open hone ke baad kuch niyamit kriyayein karne ke liye kiya jata hai. Isme drawerView parameter ke roop mein View object liya jata hai, jo navigation drawer ka reference hota hai.</p>
  
                <p>Jab navigation drawer khulta hai, onDrawerOpened() method ko call kiya jata hai. Is method ko override karke, hum apne ActionBarDrawerToggle subclass mein apne custom logic ko shamil kar sakte hain. Isme aksar navigation drawer ke khulne ke baad kuch UI updates, navigation states ke reset, ya dusre kriyayein shamil hoti hai.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View drawerView`,
                        des: `<p>Isme drawerView parameter ke roop mein View object liya jata hai, jo navigation drawer ka reference hota hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    
    
              {
                dep: false,
                name: "onDrawerSlide",
                id: "onDrawerSlide()",
                dataTypeName: `void`,
                code: `<a href="#onDrawerSlide()">onDrawerSlide</a>(View drawerView, float slideOffset)`,
    
                fullCode: `public void <a href="#onDrawerSlide()">onDrawerSlide</a>(View drawerView, float slideOffset)`,
  
                des: `Yah method navigation drawer sliding ke dauran automatic roop se call hota hai.`,

                longDes: `<p>Is method ka upyog navigation drawer sliding ke dauran kuch niyamit kriyayein karne ke liye kiya jata hai. drawerView parameter ke roop mein View object liya jata hai, jo navigation drawer ka reference hota hai. slideOffset parameter float data type ka hota hai, jo navigation drawer ke sliding ka offset deta hai. slideOffset 0.0 se 1.0 tak ki range mein hota hai.</p>
  
                <p>Jab navigation drawer sliding hota hai, onDrawerSlide() method ko call kiya jata hai. Is method ko override karke, hum apne ActionBarDrawerToggle subclass mein apne custom logic ko shamil kar sakte hain. Isme aksar navigation drawer ke sliding ke dauran UI updates, animations, ya dusre kriyayein shamil hoti hai.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View drawerView`,
                        des: `<p>Isme drawerView parameter ke roop mein View object liya jata hai, jo navigation drawer ka reference hota hai.</p>`,
                      },
                      {
                        dataTypeName: `float slideOffset`,
                        des: `<p>Yeh parameter float value hai, jo slide hone ki sthiti ko darshata hai. Iska maan 0.0 se 1.0 tak hota hai, 0.0 matlab drawer band hai aur 1.0 matlab drawer puri tarah khula hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
              {
                dep: false,
                name: "onDrawerStateChanged",
                id: "onDrawerStateChanged()",
                dataTypeName: `void`,
                code: `<a href="#onDrawerStateChanged()">onDrawerStateChanged</a>(int newState)`,
    
                fullCode: `public void <a href="#onDrawerStateChanged()">onDrawerStateChanged</a>(int newState)`,
  
                des: `Yah method navigation drawer ke sthiti (state) ke badalne par automatic roop se call hota hai.`,

                longDes: `<p>Is method ka upyog navigation drawer ke sthiti ke badalne par niyamit kriyayein karne ke liye kiya jata hai. newState parameter int data type ka hota hai, jo navigation drawer ke naye sthiti ko represent karta hai.</p>
  
                <p>Jab navigation drawer ki sthiti badalti hai, jaise khulta hai, band hota hai, ya drag hota hai, onDrawerStateChanged() method ko call kiya jata hai. Is method ko override karke, hum apne ActionBarDrawerToggle subclass mein apne custom logic ko shamil kar sakte hain. Isme aksar navigation drawer ke sthiti ke anusaar UI updates, animations, ya dusre kriyayein shamil hoti hai.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int newState`,
                        des: `<p>newState parameter int data type ka hota hai, jo navigation drawer ke naye sthiti ko represent karta hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    
              {
                dep: false,
                name: "onOptionsItemSelected",
                id: "onOptionsItemSelected()",
                dataTypeName: `void`,
                code: `<a href="#onOptionsItemSelected()">onOptionsItemSelected</a>(MenuItem item)`,
    
                fullCode: `public void <a href="#onOptionsItemSelected()">onOptionsItemSelected</a>(MenuItem item)`,
  
                des: `Yah method options menu item ka event handle karne ke liye ActionBarDrawerToggle ke saath istemaal kiya jata hai.`,

                longDes: `<p>Is method ka upyog options menu item ke events, jaise item par click hone par, handle karne ke liye kiya jata hai. item parameter MenuItem object ko represent karta hai, jisme click kiye gaye menu item ka reference hota hai.</p>
  
                <p>Jab options menu item par click hota hai, onOptionsItemSelected() method ko call kiya jata hai. Is method ko override karke, hum apne ActionBarDrawerToggle subclass mein apne custom logic ko shamil kar sakte hain. Isme hum options menu item ke events ko handle karke corresponding actions perform kar sakte hain.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `MenuItem item`,
                        des: `<p>item parameter MenuItem object ko represent karta hai, jisme click kiye gaye menu item ka reference hota hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
              {
                dep: false,
                name: "setDrawerArrowDrawable",
                id: "setDrawerArrowDrawable()",
                dataTypeName: `void`,
                code: `<a href="#setDrawerArrowDrawable()">setDrawerArrowDrawable</a>(@NonNull DrawerArrowDrawable drawable)`,
    
                fullCode: `public void <a href="#setDrawerArrowDrawable()">setDrawerArrowDrawable</a>(@NonNull DrawerArrowDrawable drawable)`,
  
                des: `Is method ka upyog navigation drawer ke toggle button par arrow drawable ko set karne ke liye kiya jata hai.`,

                longDes: `<p>Is method ka upyog navigation drawer ke toggle button par arrow drawable ko set karne ke liye kiya jata hai.

                drawable parameter DrawerArrowDrawable object ko represent karta hai, jo arrow icon ko draw karne ke liye istemaal kiya jaata hai.</p>
  
                <p>Jab setDrawerArrowDrawable() method ko call kiya jata hai, ActionBarDrawerToggle navigation drawer ke toggle button par arrow drawable ko set kar deta hai. Isse navigation drawer ke khulne ya bandh hone ke anusaar toggle button par arrow icon dikhaya ja sakta hai. Arrow drawable ki taraf se hum navigation drawer ke sthiti ko darshak ko sahi tarike se pradarshit kar sakte hain.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull DrawerArrowDrawable drawable`,
                        des: `<p>drawable parameter DrawerArrowDrawable object ko represent karta hai, jo arrow icon ko draw karne ke liye istemaal kiya jaata hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
              {
                dep: false,
                name: "setDrawerIndicatorEnabled",
                id: "setDrawerIndicatorEnabled()",
                dataTypeName: `void`,
                code: `<a href="#setDrawerIndicatorEnabled()">setDrawerIndicatorEnabled</a>(boolean enable)`,
    
                fullCode: `public void <a href="#setDrawerIndicatorEnabled()">setDrawerIndicatorEnabled</a>(boolean enable)`,
  
                des: `Is method ka upyog navigation drawer toggle button ke indicator ko enable ya disable karne ke liye kiya jata hai.`,

                longDes: `<p>enable parameter ek boolean value hai, jisme true ya false hota hai. Agar enable true hai, to navigation drawer toggle button ke indicator enable ho jata hai, aur agar false hai, to indicator disable ho jata hai.</p>
  
                <p>Jab setDrawerIndicatorEnabled() method ko call kiya jata hai, ActionBarDrawerToggle navigation drawer toggle button ke indicator ko enable ya disable kar deta hai. Isse navigation drawer toggle button par indicator (jaise ki hamare pas usually 3 horizontal lines ya arrow hota hai) dikhaya ja sakta hai ya nahi.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enable`,
                        des: `<p>enable parameter ek boolean value hai, jisme true ya false hota hai. Agar enable true hai, to navigation drawer toggle button ke indicator enable ho jata hai, aur agar false hai, to indicator disable ho jata hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
              {
                dep: false,
                name: "setDrawerSlideAnimationEnabled",
                id: "setDrawerSlideAnimationEnabled()",
                dataTypeName: `void`,
                code: `<a href="#setDrawerSlideAnimationEnabled()">setDrawerSlideAnimationEnabled</a>(boolean enable)`,
    
                fullCode: `public void <a href="#setDrawerSlideAnimationEnabled()">setDrawerSlideAnimationEnabled</a>(boolean enable)`,
  
                des: `Yah method navigation drawer ke sliding animation ko enable ya disable karne ke liye istemal kiya jata hai.`,

                longDes: `<p>enabled parameter ek boolean value hai, jisme true ya false hota hai. Agar enabled true hai, to navigation drawer ke sliding animation enable ho jati hai, aur agar false hai, to animation disable ho jati hai.</p>
  
                <p>Jab setDrawerSlideAnimationEnabled() method ko call kiya jata hai, ActionBarDrawerToggle navigation drawer ke sliding animation ko enable ya disable kar deta hai. Isse navigation drawer ke khulne aur bandh hone ke dauran slide animation ko dekhaya ja sakta hai ya nahi.</p>`,

                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enable`,
                        des: `<p>enabled parameter ek boolean value hai, jisme true ya false hota hai. Agar enabled true hai, to navigation drawer ke sliding animation enable ho jati hai, aur agar false hai, to animation disable ho jati hai.</p>`,
                      },
                    ],
                  },
                ],
              },
    
    
             
    
              {
                dep: false,
                name: "setHomeAsUpIndicator",
                id: "setHomeAsUpIndicator(Drawable)",
                dataTypeName: `void`,
                code: `<a href="#setHomeAsUpIndicator(Drawable)">setHomeAsUpIndicator</a>(Drawable indicator)`,
    
                fullCode: `public void <a href="#setHomeAsUpIndicator(Drawable)">setHomeAsUpIndicator</a>(Drawable indicator)`,
  
                des: `Is method ka istemal ActionBarDrawerToggle ke home button (hamburger icon) par ek custom indicator (Drawable) set karne ke liye kiya jata hai.`,
  
                longDes: `<p>Is method ka istemal ActionBarDrawerToggle ke home button (hamburger icon) par ek custom indicator (Drawable) set karne ke liye kiya jata hai.</p>
                
                <p>Jab yeh method call kiya jata hai, tab ActionBarDrawerToggle ke home button par diya gaya custom indicator set ho jata hai. Isse application ke action bar mein home button ke jagah par custom icon dikhai dega.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable indicator`,
                        des: `<p>Is method mein indicator parameter ke roop mein ek Drawable object pass kiya jata hai, jo custom indicator ko represent karta hai. Drawable kisi bhi graphic resource, image, ya vector graphics ko darshata hai.</p>`,
                      },
                    ],
                  }, 
                  {
                    name: "See also",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `setDrawerIndicatorEnabled`,
                        des: ``,
                      },
                    ],
                  }
                ],
              },
             
    
              {
                dep: false,
                name: "setHomeAsUpIndicator",
                id: "setHomeAsUpIndicator(int)",
                dataTypeName: `void`,
                code: `<a href="#setHomeAsUpIndicator(int)">setHomeAsUpIndicator</a>(int resId)`,
    
                fullCode: `public void <a href="#setHomeAsUpIndicator(int)">setHomeAsUpIndicator</a>(int resId)`,
  
                des: ` Is method ka istemal ActionBarDrawerToggle ke home button (hamburger icon) par ek custom indicator (resource ID) set karne ke liye kiya jata hai.`,
  
                longDes: `<p> Is method ka istemal ActionBarDrawerToggle ke home button (hamburger icon) par ek custom indicator (resource ID) set karne ke liye kiya jata hai.</p>
                
                <p>Jab yeh method call kiya jata hai, tab ActionBarDrawerToggle ke home button par diya gaya custom indicator set ho jata hai. Isse application ke action bar mein home button ke jagah par custom icon dikhai dega.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int resId`,
                        des: `<p>Is method mein resId parameter ke roop mein ek resource ID pass kiya jata hai, jo custom indicator ko darshata hai. Resource ID, drawable resource ko identify karne ke liye ek unique identifier hai.</p>`,
                      },
                    ],
                  }, 
                  {
                    name: "See also",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `setDrawerIndicatorEnabled`,
                        des: ``,
                      },
                    ],
                  }
                ],
              },
    
            
    
              {
                dep: false,
                name: "setToolbarNavigationClickListener",
                id: "setToolbarNavigationClickListener()",
                dataTypeName: `void`,
                code: `<a href="#setToolbarNavigationClickListener()">setToolbarNavigationClickListener</a>(
                    View.OnClickListener onToolbarNavigationClickListener
                )`,
    
                fullCode: `public void <a href="#setToolbarNavigationClickListener()">setToolbarNavigationClickListener</a>(
                    View.OnClickListener onToolbarNavigationClickListener
                )`,

                des: `Is method ka istemal ActionBarDrawerToggle ke toolbar navigation click listener ko set karne ke liye kiya jata hai.`,

                longDes: `<p>Is method ka istemal ActionBarDrawerToggle ke toolbar navigation click listener ko set karne ke liye kiya jata hai.</p>

                <p>Jab yeh method call kiya jata hai, tab ActionBarDrawerToggle ke toolbar navigation par click hone par diya gaya click listener set ho jata hai. Isse navigation button par click hone par onToolbarNavigationClickListener mein specify kiya gaya callback method invoke hota hai.</p>`,
                parameter: [
                  {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View.OnClickListener onToolbarNavigationClickListener`,
                        des: `<p>Is method mein onToolbarNavigationClickListener parameter ke roop mein ek View.OnClickListener object pass kiya jata hai, jo toolbar navigation click events ke liye ek listener hai.</p>`,
                      },
                    ],
                  },
                  {
                      name: "See also",
                      success: true,
                      parameter: [
                        {
                          dataTypeName: `setDrawerIndicatorEnabled`,
                          des: ``,
                        },
                      ],
                    },
                  
                ],
              },
    
              {
                dep: false,
                name: "syncState",
                id: "syncState()",
                dataTypeName: `void`,
                code: `<a href="#syncState()">syncState</a>()`,
    
                fullCode: `public void <a href="#syncState()">syncState</a>()`,

                des: `Is method ka istemal ActionBarDrawerToggle ke state ko action bar ke saath synchronize karne ke liye kiya jata hai.`,

                longDes: `<p>Jab hum navigation drawer (sliding menu) ka istemal karte hain, ActionBarDrawerToggle class ka object banaya jata hai. Is object ki madad se navigation drawer ko action bar ke saath connect kiya ja sakta hai. syncState() method ka upyog is connection ko sahi tarike se maintain karne ke liye kiya jata hai.</p>
                
                <p>Jab syncState() method call kiya jata hai, tab ActionBarDrawerToggle apne internal state ko action bar ke saath synchronize karta hai. Yeh action bar ke home button (hamburger icon) ke toggle behavior aur indicator ko handle karta hai, jisse navigation drawer ka open/close state action bar par sahi tarah se dikhe.</p>

                <p>syncState() method ka upyog activity ke onPostCreate() aur onConfigurationChanged() methods ke saath kiya jata hai, jisse navigation drawer ke state aur action bar ka state match ho sake.</p>`,
                parameter: [],
              },
    
            ],
          },
  
  
  
        
      },
    });
  };
  