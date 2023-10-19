module.exports.AppCompatActivity = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatActivity",
      hCode: `public class <a href="#AppCompatActivity">AppCompatActivity</a>  extends FragmentActivity implements AppCompatCallback, TaskStackBuilder.SupportParentable, ActionBarDrawerToggle.DelegateProvider`,
  
      des: 
        `
        <p>Ye class, Activity class se extend hoti hai aur AndroidX library ka hissa hai.</p>
        
  
        <p>AppCompatActivity class ka upyog modern Android applications mein kiya jata hai, jahaan hum Material Design guidelines ko follow karne aur backward compatibility ko support karne ki zaroorat hoti hai. Is class ka upyog karne se hum Material Design ke features aur theme ko older Android versions tak extend kar sakte hai.</p>
  
        <p>Kuch key features aur use cases of AppCompatActivity class hai:</p>
        <ol>
            <li><b>Backward compatibility:</b> AppCompatActivity class AndroidX library ka ek hissa hai aur ye backward compatibility provide karti hai. Isse hum Material Design ke features, action bar, toolbar, navigation drawer, etc. ko bhi Android ke purane versions par implement kar sakte hai.</li>

            <li><b>AppCompat themes:</b> AppCompatActivity class allows us to use AppCompat themes, jaise Theme.AppCompat, Theme.AppCompat.Light, etc. In themes ko use karke hum consistent look and feel across different Android versions achieve kar sakte hai.</li>

            <li><b>Action Bar and Toolbar support:</b> AppCompatActivity class Action Bar aur Toolbar ka support provide karti hai. Hum is class ka upyog karke easily Action Bar ya Toolbar ko set up aur customize kar sakte hai apne app mein.</li>

            <li><b>Fragment support:</b> AppCompatActivity class FragmentActivity class ke through fragments ka support provide karti hai. Hum is class ka upyog karke easily fragments ko add, replace, aur manage kar sakte hai apne activity mein.</li>

            <li><b>Activity lifecycle management:</b> AppCompatActivity class activity ki lifecycle management ke liye methods provide karti hai, jaise onCreate(), onStart(), onResume(), etc. Hum in methods ko override karke specific lifecycle events ko handle kar sakte hai.</li>

            <li><b>Resource compatibility:</b> AppCompatActivity class resource compatibility mein help karti hai. Ye class hume allow karti hai ki hum same resources, jaise layouts, drawables, aur styles, ko different Android versions mein use kar sake.</li>
        </ol>
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
              name: `AppCompatActivity`,
              id: "AppCompatActivity()",
              code: `AppCompatActivity()`,
              fullCode: `public AppCompatActivity()`,
              des: `Is constructor ka use AppCompatActivity class ke objects banane ke liye kiya jata hai.`,

              longDes: `<p>Is constructor ka use AppCompatActivity class ke objects banane ke liye kiya jata hai.</p>

              <p>AppCompatActivity class, Android Jetpack library mein provide kiya gaya hai aur ye class, Activity class ka ek subclass hai. Ye class Android platform ke naye version mein material design guidelines aur backward compatibility features ko support karne ke liye use hoti hai.</p>

              <p>Is constructor ka use AppCompatActivity class ke objects ko initialize karne ke liye kiya jata hai. Ye constructor AppCompatActivity class ke internal state variables aur members ko default values se initialize karta hai.</p>

              <p>Is constructor ke through AppCompatActivity class ke objects banane se, hum Android applications mein modern UI design aur material design guidelines ka benefit utha sakte hain. Iske sath hi, ye class backward compatibility features provide karti hai, jisse hum apne applications ko aadhar Android version se pichhle versions mein bhi run kar sakte hain.</p>
              `,
              parameter: [],
            },


            {
              dep: false,
              name: `AppCompatActivity`,
              id: "AppCompatActivity(int)",
              code: `@ContentView </br>AppCompatActivity(@LayoutRes int contentLayoutId)`,
              fullCode: `@ContentView </br>public AppCompatActivity(@LayoutRes int contentLayoutId)`,

              des: `AppCompatActivity constructor public AppCompatActivity(@LayoutRes int contentLayoutId) ek parameter leta hai, jise contentLayoutId kaha jata hai. Yeh parameter ek layout resource identifier hai, jise Activity ke content view ke roop mein set karne ke liye use kiya jata hai.`,

              longDes: `<p>AppCompatActivity constructor public AppCompatActivity(@LayoutRes int contentLayoutId) ek parameter leta hai, jise contentLayoutId kaha jata hai. Yeh parameter ek layout resource identifier hai, jise Activity ke content view ke roop mein set karne ke liye use kiya jata hai.</p>

              <p>Is constructor ke dwara hum AppCompatActivity ke object ko initialize kar sakte hain aur ek layout file ko specify kar sakte hain, jo Activity ke content view ke roop mein dikhai dega. contentLayoutId parameter mein hum layout resource file ka identifier pass karte hain, jise setContentView() method mein istemal kiya jata hai.</p>

              <p>Iske alawa, AppCompatActivity class hume Material Design ka support bhi provide karta hai, jisse hum purane Android versions mein bhi Material Design ke guidelines ko follow kar sakte hain. Is class ka use karke hum ek consistent UI experience create kar sakte hain, jisme hum Toolbar, ActionBar, DrawerLayout, NavigationView, FloatingActionButton, Snackbar jaise Material Design ke components ka upyog kar sakte hain.</p>

              <p>Sarvottam roop se kaha ja sakta hai ki AppCompatActivity class, backward compatibility ke sath Material Design ke guidelines ko follow karne aur Activity ke layout resource ko inflate karne ke liye istemal hoti hai. Isse hum ek consistent UI experience bana sakte hain, jo purane Android versions par bhi acchi tarah se kaam karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@LayoutRes int contentLayoutId`,
                        des:`<p>contentLayoutId parameter mein hum layout resource file ka identifier pass karte hain.</p>`,
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
              name: "addContentView",
              id: "addContentView()",
              dataTypeName: `void`,
              code: `<a href="#addContentView()">addContentView</a>(View view, ViewGroup.LayoutParams params)`,
  
              fullCode: `public void <a href="#addContentView()">addContentView</a>(View view, ViewGroup.LayoutParams params)`,

              des: `Is method ke dwara hum dynamically ek View ko existing layout mein jod sakte hain.`,
  
              longDes: `
              <p>Is method ka use generally tab kiya jata hai jab hum existing layout mein programmatically ek View ko add karna chahte hain. Isse hum dynamic UI components generate kar sakte hain aur unko Activity ke content view mein render kar sakte hain.</p>

              <p>addContentView() method setContentView() method se thoda alag hai. Jab hum setContentView() method ka use karte hain, toh wo specified layout resource file ko inflate karke Activity ke content view ke roop mein set karta hai. Lekin addContentView() method se hum existing layout mein ek aur View add kar sakte hain.</p>
  
              <p>Is method ka use karne ke liye, hume ek View object create karna hota hai, jise hum addContentView() method ke through existing layout mein add karna chahte hain. params parameter ki madad se hum define karte hain ki view ko kis tarah se layout mein position kiya jaye, jaise width, height, margin, gravity, etc.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View view`,
                        des:`<p>view: Ye parameter wo View hai, jise hum existing layout mein jodna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `ViewGroup.LayoutParams params`,
                        des:`<p>params: Ye parameter ViewGroup.LayoutParams ki object hai, jo view ko layout mein kaise place karna hai usko define karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "closeOptionsMenu",
              id: "closeOptionsMenu()",
              dataTypeName: `void`,
              code: `<a href="#closeOptionsMenu()">closeOptionsMenu</a>()`,
  
              fullCode: `public void <a href="#closeOptionsMenu()">closeOptionsMenu</a>()`,
              des: `Iska upyog AlertDialog.Builder object ke associated Context object ko retrieve karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>AlertDialog.Builder class mein getContext method ka upyog humein AlertDialog.Builder object ke dwara bind kiye gaye Context object ko prapt karne ke liye kiya jata hai. Context object AlertDialog.Builder object ke saath joda hota hai aur AlertDialog.Builder object us context ke madyam se AlertDialog ka construction karta hai.</p>
  
                <p>Is method ki madad se hum AlertDialog.Builder object ke associated Context object ko obtain kar sakte hai. Context object ko further use karke hum AlertDialog ke construction ya customization ke liye required resources, layouts, strings, etc., tak pahunch sakte hai.</p>`,

                codeSnippets: {
                    fdes:`<p>Yaha ek example hai, jisme closeOptionsMenu() method ka use kiya jata hai:</p>`,
                    code:`@Override
                    public boolean onOptionsItemSelected(MenuItem item) {
                        int itemId = item.getItemId();
                        if (itemId == R.id.action_hide_menu) {
                            closeOptionsMenu(); // Options menu band karna
                            return true;
                        }
                        return super.onOptionsItemSelected(item);
                    }`,
                    des:`<p>Is example mein, jab action_hide_menu item select kiya jata hai, closeOptionsMenu() method ko call kiya jata hai. Isse options menu band ho jata hai.<p>`
                },
  
              parameter: [],
            },
  


  
            {
              dep: false,
              name: "dispatchKeyEvent",
              id: "dispatchKeyEvent()",
              dataTypeName: `boolean`,
              code: `<a href="#dispatchKeyEvent()">dispatchKeyEvent</a>(KeyEvent event)`,
  
              fullCode: `public boolean <a href="#dispatchKeyEvent()">dispatchKeyEvent</a>(KeyEvent event)`,

              des: `Yeh method ek KeyEvent object ko dispatch (send) karne ke liye istemal kiya jata hai. Is method ka use key events (like key presses or key releases) ko handle karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Jab koi key event generate hota hai, jaise physical key press ya release, touch event, ya keyboard event, toh Android System us event ko sabhi active components tak pahunchata hai. dispatchKeyEvent() method ka use karke hum KeyEvent object ko AppCompatActivity tak pahuncha sakte hain, taki hum us event ko handle kar sake.</p>
  
                <p>dispatchKeyEvent() method ki return type boolean hoti hai, jo indicate karta hai ki event ko handle kiya gaya hai ya nahi. Agar hum event ko handle karte hain aur uska impact UI ya application state par hai, toh hum true return karte hain. Agar hum event ko handle nahi karte hain, toh hum false return karte hain, jisse event ko further components tak propagate kiya jata hai.</p>

                <p>Is method ka use cases-based scenarios mein kiya jata hai. Kuch examples niche diye gaye hain:</p>

                <ol>
                <li>Custom Key Handling: Agar aap specific key press ya key release events ko custom tarike se handle karna chahte hain, toh aap dispatchKeyEvent() method ka use kar sakte hain. Aap KeyEvent object ke properties ko check karke desired behavior implement kar sakte hain.</li>

                <li>Intercepting Key Events: Agar aap kisi specific component ke key events ko intercept (rokkar) handle karna chahte hain, tab aap dispatchKeyEvent() method ka use kar sakte hain. Aap event ko handle karke true return kar sakte hain, jisse event ko further components tak propagate nahi hone diya jayega.</li>
                </ol>`,

                codeSnippets: {
                    fdes:`<p>Yaha ek example hai, jisme dispatchKeyEvent() method ka use kiya jata hai:</p>`,
                    code:`@Override
                    public boolean dispatchKeyEvent(KeyEvent event) {
                        int keyCode = event.getKeyCode();
                        if (keyCode == KeyEvent.KEYCODE_VOLUME_UP) {
                            // Handle Volume Up key press event
                            // ...
                            return true;
                        } else if (keyCode == KeyEvent.KEYCODE_VOLUME_DOWN) {
                            // Handle Volume Down key press event
                            // ...
                            return true;
                        }
                    
                        return super.dispatchKeyEvent(event);
                    }
                    `,
                    des:`<p>Is example mein, hum dispatchKeyEvent() method override kar rahe hain. Jab koi key event generate hota hai, method mein hum KeyEvent object ke properties ko check kar rahe hain. Agar volume up ya volume down key press event hai, toh hum us event ko handle karke true return kar rahe hain. Aise key events ko handle karne ke baad, event ko further components tak propagate nahi kiya jata hai.</p>`
                },
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `KeyEvent event`,
                        des:`<p>Yeh parameter key events ko represent karta hai, jaise key press ya key release events.</p>`,
                      },
                    ],
                  },
              ],
            },
  

  
            {
              dep: false,
              name: "dispatchKeyShortcutEvent",
              id: "dispatchKeyShortcutEvent()",
              dataTypeName: `boolean`,
              code: `<a href="#dispatchKeyShortcutEvent()">dispatchKeyShortcutEvent</a>(KeyEvent event)`,
  
              fullCode: `public boolean <a href="#dispatchKeyShortcutEvent()">dispatchKeyShortcutEvent</a>(KeyEvent event)`,

              des: `Yeh method ek KeyEvent object ko dispatch (send) karne ke liye istemal kiya jata hai, jab shortcut key press hoti hai. Is method ka use shortcut keys ke events ko handle karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Shortcut keys, jaise Ctrl+C (copy), Ctrl+V (paste), ya Ctrl+S (save) hote hain. Jab koi shortcut key press hoti hai, Android System us event ko active components tak pahunchata hai. dispatchKeyShortcutEvent() method ka use karke hum KeyEvent object ko AppCompatActivity tak pahuncha sakte hain, taki hum shortcut key events ko handle kar sake.</p>
  
                <p>dispatchKeyShortcutEvent() method ki return type boolean hoti hai, jo indicate karta hai ki event ko handle kiya gaya hai ya nahi. Agar hum event ko handle karte hain aur uska impact UI ya application state par hai, toh hum true return karte hain. Agar hum event ko handle nahi karte hain, toh hum false return karte hain, jisse event ko further components tak propagate kiya jata hai.</p>

                <p>Shortcut key events ko handle karne ke liye, hum dispatchKeyShortcutEvent() method ko override kar sakte hain. Is method mein hum KeyEvent object ke properties ko check karke desired behavior implement kar sakte hain.</p>

               `,

                codeSnippets: {
                    fdes:`<p>Yahan ek example hai dispatchKeyShortcutEvent() method ka use karne ka:</p>`,
                    code:`public class MainActivity extends AppCompatActivity {
                        // ...
                    
                        @Override
                        public boolean dispatchKeyShortcutEvent(KeyEvent event) {
                            if (event.isCtrlPressed() && event.getKeyCode() == KeyEvent.KEYCODE_C) {
                                // Handle Ctrl+C key combination
                                // Perform custom logic
                                return true; // Event handled
                            }
                            return super.dispatchKeyShortcutEvent(event);
                        }
                    
                        // ...
                    }
                    `,
                    des:`<p>Is example mein, dispatchKeyShortcutEvent() method Ctrl+C key combination ko handle karne ke liye override kiya gaya hai. Agar Ctrl+C key combination hogi, to hum apna custom logic perform kar sakte hain aur true return karke batate hain ki humne event handle kar liya hai. Isse Ctrl+C key combination ka default behavior nahi hoga.</p>`
                },
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `KeyEvent event`,
                        des:`<p>Yeh parameter key events ko represent karta hai, jaise key press ya key release events.</p>`,
                      },
                    ],
                  },
              ],
            },
  

  
            {
              dep: false,
              name: "findViewById",
              id: "findViewById()",
              dataTypeName: `T`,
              code: `&lt;T extends View&gt; <a href="#findViewById()">findViewById</a>(@IdRes int id)`,
  
              fullCode: `public T &lt;T extends View&gt; <a href="#findViewById()">findViewById</a>(@IdRes int id)`,

              des: `Yeh method se ek View object retrieve kiya ja sakta hai, jiska ID hum provide karte hain. Is method ka use UI elements ko access karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>findViewById() method ki generic signature public T &lt;T extends View&gt; findViewById(@IdRes int id) hai. Generic type parameter T View class ya uska subclass ka hai. Isse hum specify kar sakte hain ki hum kis type ki View object retrieve karna chahte hain. Example ke taur par, agar hum Button object retrieve karna chahte hain, toh hum Button class ko type parameter ke roop mein specify kar sakte hain.</p>
  
                <p>Method ka id parameter int type ka hai, jisme hum View element ke unique identifier resource ID ko provide karte hain. Yeh resource ID hum XML layout file mein define karte hain.</p>

                <p>findViewById() method se hum specific ID se associated View object retrieve kar sakte hain. Agar View object available hai, toh method usko return karta hai, warna null return hota hai.</p>

               `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@IdRes int id`,
                        des:`<p>Method ka id parameter int type ka hai, jisme hum View element ke unique identifier resource ID ko provide karte hain. Yeh resource ID hum XML layout file mein define karte hain.</p>`,
                      },
                    ],
                  },
              ],
            },
  


  
            {
              dep: false,
              name: "getDelegate",
              id: "getDelegate()",
              dataTypeName: `@NonNull AppCompatDelegate`,
              code: `<a href="#getDelegate()">getDelegate</a>()`,
  
              fullCode: `public @NonNull AppCompatDelegate <a href="#getDelegate()">getDelegate</a>()`,

              des: `Is method ka use AppCompatDelegate se related operations ko perform karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>AppCompatDelegate Android Support Library ka ek important component hai, jo AppCompat theme, ActionBar, night mode, resource inflation, etc. jaise features ko handle karta hai. getDelegate() method se hum is delegate object ko retrieve kar sakte hain, taki uske through AppCompat functionality ka use kar sake.</p>
  
                <p>getDelegate() method @NonNull annotation ke saath declare kiya gaya hai, jisse yeh method kabhi bhi null value return nahi karega.</p>

               `,

               codeSnippets: {
                fdes:`<p>Yaha ek example hai, jisme getDelegate() method ka use kiya jata hai:</p>`,
                
                code:`AppCompatDelegate delegate = getDelegate();
                if (delegate != null) {
                    // Perform AppCompatDelegate related operations
                    delegate.setLocalNightMode(AppCompatDelegate.MODE_NIGHT_YES);
                    delegate.getSupportActionBar().setTitle("My App");
                }
                `,
                des:`<p>Is example mein, hum getDelegate() method ka use karke AppCompatDelegate object retrieve kar rahe hain. Agar delegate object available hai, toh uske through AppCompatDelegate ke related operations perform kar sakte hain. Example mein, hum setLocalNightMode() method ka use karke night mode ko enable kar rahe hain aur getSupportActionBar() method se ActionBar ko retrieve karke uski title ko set kar rahe hain.</p>`
            },


              parameter: [],
            },
  

  
            {
              dep: false,
              name: "getDrawerToggleDelegate",
              id: "getDrawerToggleDelegate()",
              dataTypeName: `@Nullable ActionBarDrawerToggle.Delegate`,
              code: `<a href="#getDrawerToggleDelegate()">getDrawerToggleDelegate</a>()`,
  
              fullCode: `public @Nullable ActionBarDrawerToggle.Delegate <a href="#getDrawerToggleDelegate()">getDrawerToggleDelegate</a>()`,

              des: `Is tarah ke methods, delegates ya interfaces general scenario mein navigation drawer aur action bar ke interaction ko control karne ke liye istemal kiye ja sakte hain.`,
  
              longDes: `
                <p>Is tarah ke methods, delegates ya interfaces general scenario mein navigation drawer aur action bar ke interaction ko control karne ke liye istemal kiye ja sakte hain.</p>

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

              des: `getMenuInflater() method ka upayog AppCompatActivity instance ke liye MenuInflater object prapt karne ke liye kiya jata hai, jiske through aap menu resource ko inflate kar sakte hain aur menu items ko configure kar sakte hain.`,
  
              longDes: `
                <p>Yeh method MenuInflater type ka object return karta hai, jise @NonNull annotation ke saath annotate kiya gaya hai. MenuInflater class, Android framework mein menu resources ko inflate (yaani XML se load) karne aur unhe Java code mein represent karne ke liye istemal hoti hai.</p>

                <p>getMenuInflater() method, AppCompatActivity class ke instance ke liye ek MenuInflater object prapt karne ka madhyam pradan karta hai. Is method ka upayog typically onCreateOptionsMenu(Menu) method mein kiya jata hai, jahan par aap menu resource ko inflate karne ke liye MenuInflater ki jarurat hoti hai.</p>

                <p>Jab aap ek activity ko create karte hain, toh aap onCreateOptionsMenu(Menu) method ko override kar sakte hain. Is method mein aap getMenuInflater() method ka upayog karke XML se menu resource ko inflate kar sakte hain. Inflate karne ke baad, aap menu items aur unke event handlers ko configure kar sakte hain.</p>

                <p>Yeh MenuInflater object, menu resource XML ko inflate karne aur menu item objects ko create karne ke liye istemal hota hai. MenuInflater class ke methods, XML file se menu resource ko inflate karte hain aur uske base par Menu object ko generate karte hain. Iske baad, aap Menu object ke methods ka upayog karke menu items ko customize aur event handlers ko set kar sakte hain.</p>

               `,


              parameter: [],
            },
  



  
            {
              dep: false,
              name: "getResources",
              id: "getResources()",
              dataTypeName: `Resources`,
              code: `<a href="#getResources()">getResources</a>()`,
  
              fullCode: `public Resources <a href="#getResources()">getResources</a>()`,

              des: `Yeh method Resources type ka object return karta hai. Resources class, Android framework mein resource files (jaise ki layouts, strings, colors, drawables, etc.) ke access aur manage karne ke liye istemal hoti hai.`,
  
              longDes: `
                <p>Yeh method Resources type ka object return karta hai. Resources class, Android framework mein resource files (jaise ki layouts, strings, colors, drawables, etc.) ke access aur manage karne ke liye istemal hoti hai.</p>

                <p>getResources() method, AppCompatActivity class ke instance ke liye ek Resources object prapt karne ka madhyam pradan karta hai. Is method ka upayog aksar UI elements, strings, colors, aur aur resources ko access karne ke liye kiya jata hai.</p>

                <p>Jab aap ek activity ko create karte hain, toh aap getResources() method ka upayog karke activity ke context ke sath jude resources (jaise ki layouts, strings, colors, drawables) ko prapt kar sakte hain. Iske baad, aap in resources ko apne UI components aur application logic ke saath integrate kar sakte hain.</p>

               `,


              parameter: [],
            },
  




  
            {
              dep: false,
              name: "getSupportActionBar",
              id: "getSupportActionBar()",
              dataTypeName: `@Nullable ActionBar`,
              code: `<a href="#getSupportActionBar()">getSupportActionBar</a>()`,
  
              fullCode: `public @Nullable ActionBar <a href="#getSupportActionBar()">getSupportActionBar</a>()`,

              des: `Iska use ActionBar (action bar) object ko retrieve karne ke liye kiya jata hai. ActionBar, Android Material Design guidelines ke hisaab se, ek customizable toolbar hai jo screen ke top mein dikhaya jata hai.`,
  
              longDes: `
                <p>Iska use ActionBar (action bar) object ko retrieve karne ke liye kiya jata hai. ActionBar, Android Material Design guidelines ke hisaab se, ek customizable toolbar hai jo screen ke top mein dikhaya jata hai.</p>

                <p>getSupportActionBar() method ActionBar object ko return karta hai ya null value agar ActionBar available na ho. Iska use karke aap ActionBar par actions, title, subtitle, navigation options, menu items, etc. ko set kar sakte hain. Isse aap apne Android application ke graphical user interface ko enhance kar sakte hain aur consistent look-and-feel provide kar sakte hain.</p>

               `,


              parameter: [],
            },
  

  
            {
              dep: false,
              name: "getSupportParentActivityIntent",
              id: "getSupportParentActivityIntent()",
              dataTypeName: `@Nullable Intent`,
              code: `<a href="#getSupportParentActivityIntent()">getSupportParentActivityIntent</a>()`,
  
              fullCode: `public @Nullable Intent <a href="#getSupportParentActivityIntent()">getSupportParentActivityIntent</a>()`,

              des: `Iska use Parent Activity se related Intent retrieve karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Jab aap Android Studio mein "Up" navigation ka use karte hain, yani kisi child activity se parent activity par back jaate hain, toh getSupportParentActivityIntent() method parent activity ke Intent ko retrieve karne mein madad karta hai. Isse aap parent activity ko start karne ke liye appropriate Intent mil jata hai.</p>

                <p>Is method ke through aap parent activity par transition ko control kar sakte hain, jaise ki back button press karne par parent activity ko resume karna, parent activity ke data/state ko restore karna, ya koi specific action perform karna.</p>

               `,


              parameter: [],
            },
  
  
            {
              dep: false,
              name: "invalidateOptionsMenu",
              id: "invalidateOptionsMenu()",
              dataTypeName: `void`,
              code: `<a href="#invalidateOptionsMenu()">invalidateOptionsMenu</a>()`,
  
              fullCode: `public void <a href="#invalidateOptionsMenu()">invalidateOptionsMenu</a>()`,

              des: ` Iska use options menu ko invalid (outdated) karne aur menu ko refresh karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Jab aap invalidateOptionsMenu() method ko call karte hain, Android system ko signal milta hai ki options menu ko invalid karna aur usko refresh karne ki zaroorat hai. Isse onCreateOptionsMenu() method aur onPrepareOptionsMenu() method dobara invoke hote hain.</p>

                <p>onCreateOptionsMenu() method options menu ko inflate (create) karne aur usko activity mein display karne ke liye use hota hai. onPrepareOptionsMenu() method options menu ko modify aur update karne ke liye use hota hai. Jab invalidateOptionsMenu() method call hota hai, toh dono methods phir se invoke hote hain, jisse aap options menu ko update aur customize kar sakte hain..</p>

                <p>Is method ka use karte hue aap options menu ko dynamic aur interactive bana sakte hain, jaise ki menu items ko enable/disable karna, unki visibility ko toggle karna, ya koi specific action ke hisaab se menu ko update karna.</p>

               `,


              parameter: [],
            },
  
            {
              dep: false,
              name: "onConfigurationChanged",
              id: "onConfigurationChanged()",
              dataTypeName: `void`,
              code: `<a href="#onConfigurationChanged()">onConfigurationChanged</a>(@NonNull Configuration newConfig)`,
  
              fullCode: `public void <a href="#onConfigurationChanged()">onConfigurationChanged</a>(@NonNull Configuration newConfig)`,

              des: `Iska use activity ki configuration (jaise ki orientation, language, display size, etc.) mein koi change ho rahi hai toh us change ke handle karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Jab kisi configuration change hoti hai, jaise ki device ki orientation portrait se landscape mein ya vice versa badalne par, Android system by default activity ko recreate kar deta hai. Lekin, onConfigurationChanged() method ko override karke aap is default behavior ko override kar sakte hain. Aap is method mein custom logic implement kar sakte hain, jisse activity recreate nahi hoti hai, balki aap configuration change ko handle kar sakte hain.</p>

                <p>onConfigurationChanged() method Configuration object ko parameter ke roop mein leta hai, jisme new configuration ki details hoti hain. Aap is object ka use karke current configuration se related information, jaise ki orientation, language, display metrics, etc. retrieve kar sakte hain aur uske according apne activity ko update kar sakte hain.</p>

               `,


              parameter: [
                
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Configuration newConfig`,
                      des:`<p>Configuration object ko parameter ke roop mein leta hai, jisme new configuration ki details hoti hain.</p>`,
                    },
                  ],
                },
              ],
            },
  


  
            {
              dep: false,
              name: "onContentChanged",
              id: "onContentChanged()",
              dataTypeName: `void`,
              code: `<a href="#onContentChanged()">onContentChanged</a>()`,
  
              fullCode: `public void <a href="#onContentChanged()">onContentChanged</a>()`,

              des: `Iska use activity ki content (layout) ka change detect karne aur uske sath related actions perform karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Jab activity ka layout inflate hota hai, ya activity ke content mein koi modifications hoti hai, jaise ki setContentView() method ka use karke layout change karna, tab onContentChanged() method automatically invoke hota hai.</p>

               `,


              parameter: [],
            },
  


            {
              dep: false,
              name: "onCreateSupportNavigateUpTaskStack",
              id: "onCreateSupportNavigateUpTaskStack()",
              dataTypeName: `void`,
              code: `<a href="#onCreateSupportNavigateUpTaskStack()">onCreateSupportNavigateUpTaskStack</a>(@NonNull TaskStackBuilder builder)`,
  
              fullCode: `public void <a href="#onCreateSupportNavigateUpTaskStack()">onCreateSupportNavigateUpTaskStack</a>(@NonNull TaskStackBuilder builder)`,

              des: `Ye method, Action Bar par show ho rahe back button par click karne par call hota hai. Is method ki madad se back button par click karne par hum kisi specific activity tak navigate kar sakte hai.`,
  
              longDes: `
                <p>Ye method, Action Bar par show ho rahe back button par click karne par call hota hai. Is method ki madad se back button par click karne par hum kisi specific activity tak navigate kar sakte hai.</p>

                <p>Jab hum onCreateSupportNavigateUpTaskStack() method ko override karte hai, to hum apne application mein custom navigation behavior set kar sakte hai. Is method ko hum TaskStackBuilder object ke sath use karte hai, jisme hum apne desired navigation stack ko build kar sakte hai.</p>

                <p>Is method ke use se hum kisi specific activity tak back navigation kar sakte hai, jaise ki home screen, previous screen, ya kisi specific screen tak. Ye method Android Navigation component ke sath bhi use kiya ja sakta hai.</p>

               `,
               

               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                public void onCreateSupportNavigateUpTaskStack(@NonNull TaskStackBuilder builder) {
                    super.onCreateSupportNavigateUpTaskStack(builder);
                    // Yaha par hum apne desired activity tak navigation stack build kar sakte hai
                    builder.addParentStack(DestinationActivity.class);
                    builder.addNextIntent(new Intent(this, DestinationActivity.class));
                }
                `,
                des:`<p>Is example mein, hum DestinationActivity tak navigation stack build kar rahe hai. Jab back button par click kiya jayega, to DestinationActivity tak navigate ho jayega.</p>`
            },


              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull TaskStackBuilder builder`,
                      des:`<p>builder parameter ko use karke hum TaskStackBuilder object ka reference lete hai, jisse hum apne desired navigation stack ko build kar sakte hai. Is object ke sath hum addParentStack() aur addNextIntent() jaise methods ka use karke navigation stack mein activities ko add kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "onKeyDown",
              id: "onKeyDown()",
              dataTypeName: `boolean`,
              code: `<a href="#onKeyDown()">onKeyDown</a>(int keyCode, KeyEvent event)`,
  
              fullCode: `public boolean <a href="#onKeyDown()">onKeyDown</a>(int keyCode, KeyEvent event)`,

              des: `Ye method, jab koi hardware key press hota hai, tab call hota hai. Is method ka use key events ko handle karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>onKeyDown() method ek boolean value return karta hai, jiska use ye indicate karta hai ki event ko handle kiya gaya hai ya nahi. Agar hum true return karte hai, to ye indicate karta hai ki event handle ho gaya hai aur usko further propagate nahi kiya jana chahiye. Agar hum false return karte hai, to ye indicate karta hai ki event handle nahi hua hai aur usko further propagate kiya jana chahiye.</p>

                <p>Is method ke use se hum specific key events, jaise ki back button press, volume buttons press, etc. ko handle kar sakte hai. Hum is method ko override karke apne desired behavior ko implement kar sakte hai.</p>

               `,
               

               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                public boolean onKeyDown(int keyCode, KeyEvent event) {
                    if (keyCode == KeyEvent.KEYCODE_BACK) {
                        // Back button press ka handle yaha par kar sakte hai
                        // Aur true return karke indicate kar sakte hai ki event handle ho gaya hai
                        return true;
                    }
                    return super.onKeyDown(keyCode, event);
                }
                `,
                des:`<p>Is example mein, hum onKeyDown() method ko override karke back button press event ko handle kar rahe hai. Agar back button press hota hai, to hum true return karke indicate kar rahe hai ki event handle ho gaya hai.</p>`
            },


              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int keyCode`,
                      des:`<p>int keyCode: Ye parameter ek integer value hai, jisse press kiye gaye hardware key ka code represent karta hai. Hum is parameter ki madad se ye determine kar sakte hai ki kaunsa key press hua hai. Android platform mein predefined constants hote hain, jaise KeyEvent.KEYCODE_BACK (back button), KeyEvent.KEYCODE_VOLUME_UP (volume up button), etc.</p>`,
                    },
                    {
                      dataTypeName: `KeyEvent event`,
                      des:`<p>KeyEvent event: Ye parameter KeyEvent class ka object hai, jisse hum key event ke details ko access kar sakte hain. Is object ki madad se hum event ke properties, jaise key code, action (press, release), modifiers (CTRL, SHIFT, etc.) ko retrieve kar sakte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  



            {
              dep: false,
              name: "onMenuItemSelected",
              id: "onMenuItemSelected()",
              dataTypeName: `final boolean`,
              code: `<a href="#onMenuItemSelected()">onMenuItemSelected</a>(int featureId, @NonNull MenuItem item)`,
  
              fullCode: `public final boolean <a href="#onMenuItemSelected()">onMenuItemSelected</a>(int featureId, @NonNull MenuItem item)`,

              des: `Ye method ActionBar mein menu item select karne par call hota hai. Is method ka use menu item select events ko handle karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>onMenuItemSelected() method ek boolean value return karta hai, jiska use ye indicate karta hai ki menu item select event ko handle kiya gaya hai ya nahi. Agar hum true return karte hai, to ye indicate karta hai ki event handle ho gaya hai aur usko further propagate nahi kiya jana chahiye. Agar hum false return karte hai, to ye indicate karta hai ki event handle nahi hua hai aur usko further propagate kiya jana chahiye.</p>

                <p>Is method ke use se hum ActionBar mein show ho rahe menu items ke select events ko handle kar sakte hai. Hum is method ko override karke apne desired behavior ko implement kar sakte hai.</p>
               `,
               
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                public final boolean onMenuItemSelected(int featureId, @NonNull MenuItem item) {
                    int itemId = item.getItemId();
                    if (itemId == R.id.action_settings) {
                        // Settings menu item select ka handle yaha par kar sakte hai
                        // Aur true return karke indicate kar sakte hai ki event handle ho gaya hai
                        return true;
                    }
                    return super.onMenuItemSelected(featureId, item);
                }
                `,
                des:`<p>Is example mein, hum onMenuItemSelected() method ko override karke Settings menu item select event ko handle kar rahe hai. Agar Settings menu item select hota hai, to hum true return karke indicate kar rahe hai ki event handle ho gaya hai.</p>`
            },


              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int featureId`,
                      des:`<p>int featureId: Ye parameter ek integer value hai, jisse menu item select event ko generate karne wale feature ya resource ka ID represent karta hai. Is parameter ki value ActionBar ke feature ID ko represent kar sakti hai.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull MenuItem item`,
                      des:`<p>MenuItem item: Ye parameter MenuItem class ka object hai, jisse hum selected menu item ke details ko access kar sakte hain. Is object ki madad se hum menu item ke properties, jaise ID, title, icon, etc. ko retrieve kar sakte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "onMenuOpened",
              id: "onMenuOpened()",
              dataTypeName: `boolean`,
              code: `<a href="#onMenuOpened()">onMenuOpened</a>(int featureId, Menu menu)`,
  
              fullCode: `public boolean <a href="#onMenuOpened()">onMenuOpened</a>(int featureId, Menu menu)`,

              des: `Ye method ActionBar mein menu open hone par call hota hai. Is method ka use menu open event ko handle karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>onMenuOpened() method ek boolean value return karta hai, jiska use ye indicate karta hai ki menu open event ko handle kiya gaya hai ya nahi. Agar hum true return karte hai, to ye indicate karta hai ki event handle ho gaya hai aur usko further propagate nahi kiya jana chahiye. Agar hum false return karte hai, to ye indicate karta hai ki event handle nahi hua hai aur usko further propagate kiya jana chahiye.</p>

                <p>Is method ke use se hum ActionBar mein show ho rahe menu ko customize kar sakte hai, menu item ko enable/disable kar sakte hai, ya koi specific behavior implement kar sakte hai.</p>
               `,
               
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                public boolean onMenuOpened(int featureId, Menu menu) {
                    // Menu open event ka handle yaha par kar sakte hai
                    // Aur true return karke indicate kar sakte hai ki event handle ho gaya hai
                    
                    // Example: Disable a specific menu item
                    MenuItem menuItem = menu.findItem(R.id.menu_item_id);
                    if (menuItem != null) {
                        menuItem.setEnabled(false);
                    }
                    
                    return true;
                }
                `,
                des:`<p>Is example mein, hum onMenuOpened() method ko override karke menu open event ko handle kar rahe hai. Hum menu object ki madad se menu items ko customize kar rahe hai. Is case mein, hum ek specific menu item ko disable kar rahe hai.</p>`
            },


              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int featureId`,
                      des:`<p>int featureId: Ye parameter ek integer value hai, jisse menu open event ko generate karne wale feature ya resource ka ID represent karta hai. Is parameter ki value ActionBar ke feature ID ko represent kar sakti hai.</p>`,
                    },
                    {
                      dataTypeName: `Menu menu`,
                      des:`<p>Menu menu: Ye parameter Menu class ka object hai, jisse hum open huye menu ke details ko access kar sakte hain. Is object ki madad se hum menu items, submenus, icons, etc. ko retrieve aur customize kar sakte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "onPanelClosed",
              id: "onPanelClosed()",
              dataTypeName: `void`,
              code: `<a href="#onPanelClosed()">onPanelClosed</a>(int featureId, @NonNull Menu menu)`,
  
              fullCode: `public void <a href="#onPanelClosed()">onPanelClosed</a>(int featureId, @NonNull Menu menu)`,

              des: `Ye method ActionBar mein show ho rahe menu ya sub-menu ka close hone par call hota hai. Is method ka use menu ya sub-menu ka close event ko handle karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>onPanelClosed() method ko override karke hum menu ya sub-menu ka close event ko handle kar sakte hai. Is method mein hum desired behavior ko implement kar sakte hai, jaise menu close hone par kuch actions perform karna, UI ko update karna, ya koi notification display karna.</p>
               `,
               
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                public void onPanelClosed(int featureId, @NonNull Menu menu) {
                    super.onPanelClosed(featureId, menu);
                    
                    // Menu close event ka handle yaha par kar sakte hai
                    
                    // Example: Display a toast notification
                    Toast.makeText(this, "Menu closed", Toast.LENGTH_SHORT).show();
                }
                `,
                des:`<p>Is example mein, hum onPanelClosed() method ko override karke menu close event ko handle kar rahe hai. Hum Toast notification ki madad se "Menu closed" ka notification display kar rahe hai.</p>`
            },


              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int featureId`,
                      des:`<p>int featureId: Ye parameter ek integer value hai, jisse menu ya sub-menu ka feature ya resource ID represent karta hai. Is parameter ki value ActionBar ke feature ID ko represent kar sakti hai.</p>`,
                    },
                    {
                      dataTypeName: `Menu menu`,
                      des:`<p>Menu menu: Ye parameter Menu class ka object hai, jisse hum closed huye menu ya sub-menu ke details ko access kar sakte hain. Is object ki madad se hum menu items, submenus, icons, etc. ko retrieve aur customize kar sakte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "onPrepareSupportNavigateUpTaskStack",
              id: "onPrepareSupportNavigateUpTaskStack()",
              dataTypeName: `void`,
              code: `<a href="#onPrepareSupportNavigateUpTaskStack()">onPrepareSupportNavigateUpTaskStack</a>(@NonNull TaskStackBuilder builder)`,
  
              fullCode: `public void <a href="#onPrepareSupportNavigateUpTaskStack()">onPrepareSupportNavigateUpTaskStack</a>(@NonNull TaskStackBuilder builder)`,

              des: `Ye method, navigate up action (up button press) ke pahle task stack ko prepare karne ke liye call hota hai. Is method ka use task stack ko customize karne aur navigate up behavior ko control karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, navigate up action (up button press) ke pahle task stack ko prepare karne ke liye call hota hai. Is method ka use task stack ko customize karne aur navigate up behavior ko control karne ke liye kiya jata hai.</p>

                <p>onPrepareSupportNavigateUpTaskStack() method ko override karke hum task stack ko customize kar sakte hai. Hum is method mein desired behavior ko implement karke task stack mein kisi specific activity ko add, remove, ya modify kar sakte hai.</p>
               `,
               
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                public void onPrepareSupportNavigateUpTaskStack(@NonNull TaskStackBuilder builder) {
                    super.onPrepareSupportNavigateUpTaskStack(builder);
                    
                    // Task stack ko customize karne ka code yaha par likhe
                    
                    // Example: Add a specific activity to the task stack
                    Intent intent = new Intent(this, MyActivity.class);
                    builder.addNextIntent(intent);
                }
                `,
                des:`<p>Is example mein, hum onPrepareSupportNavigateUpTaskStack() method ko override karke task stack ko customize kar rahe hai. Hum TaskStackBuilder object ki madad se task stack ko modify kar rahe hai. Is case mein, hum builder object mein ek specific activity (MyActivity) ko add kar rahe hai.</p>`
            },


              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull TaskStackBuilder builder`,
                      des:`<p>TaskStackBuilder builder: Ye parameter TaskStackBuilder class ka object hai, jisse hum task stack ko modify aur customize kar sakte hain. Is object ki madad se hum task stack mein activities ko add, remove, ya modify kar sakte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  




            {
              dep: false,
              name: "onSupportActionModeFinished",
              id: "onSupportActionModeFinished()",
              dataTypeName: `void`,
              code: `<a href="#onSupportActionModeFinished()">onSupportActionModeFinished</a>(@NonNull ActionMode mode)`,
  
              fullCode: `@CallSuper</br>public void <a href="#onSupportActionModeFinished()">onSupportActionModeFinished</a>(@NonNull ActionMode mode)`,

              des: `Ye method, action mode (contextual action mode) ka samapt hone par call hota hai. Is method ka use action mode ke samapt hone se pahle aur baad mein kuch actions perform karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, action mode (contextual action mode) ka samapt hone par call hota hai. Is method ka use action mode ke samapt hone se pahle aur baad mein kuch actions perform karne ke liye kiya jata hai.</p>

                <p>onSupportActionModeFinished() method ko override karke hum action mode ke samapt hone ke events ko handle kar sakte hai. Is method mein hum desired behavior ko implement kar sakte hai, jaise UI ko update karna, resource release karna, ya koi notification display karna.</p>

                <p>@CallSuper annotation is method ke saath joda jata hai taaki hum is method ko override karte samay super class ka implementation bhi call kar sakein.</p>
               `,
               
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                @CallSuper
                public void onSupportActionModeFinished(@NonNull ActionMode mode) {
                    super.onSupportActionModeFinished(mode);
                    
                    // Action mode samapt hone ke events ka handle yaha par kar sakte hai
                    
                    // Example: Display a toast notification
                    Toast.makeText(this, "Action mode finished", Toast.LENGTH_SHORT).show();
                }
                `,
                des:`<p>Is example mein, hum onSupportActionModeFinished() method ko override karke action mode ke samapt hone ke events ko handle kar rahe hai. Hum Toast notification ki madad se "Action mode finished" ka notification display kar rahe hai.</p>`
            },


              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull ActionMode mode`,
                      des:`<p>ActionMode mode: Ye parameter ActionMode class ka object hai, jisse hum action mode ke details ko access kar sakte hain. Is object ki madad se hum action mode ka title, menu, custom view, ya koi aur properties ko retrieve kar sakte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  



            {
              dep: false,
              name: "onSupportActionModeStarted",
              id: "onSupportActionModeStarted()",
              dataTypeName: `void`,
              code: `<a href="#onSupportActionModeStarted()">onSupportActionModeStarted</a>(@NonNull ActionMode mode)`,
  
              fullCode: `@CallSuper</br>public void <a href="#onSupportActionModeStarted()">onSupportActionModeStarted</a>(@NonNull ActionMode mode)`,

              des: `Ye method, action mode (contextual action mode) ka shuru hone par call hota hai. Is method ka use action mode ke shuru hone se pahle aur baad mein kuch actions perform karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, action mode (contextual action mode) ka shuru hone par call hota hai. Is method ka use action mode ke shuru hone se pahle aur baad mein kuch actions perform karne ke liye kiya jata hai.</p>

                <p>onSupportActionModeStarted() method ko override karke hum action mode ke shuru hone ke events ko handle kar sakte hai. Is method mein hum desired behavior ko implement kar sakte hai, jaise UI ko update karna, kuch resources initialize karna, ya koi notification display karna.</p>

                <p>@CallSuper annotation is method ke saath joda jata hai taaki hum is method ko override karte samay super class ka implementation bhi call kar sakein.</p>
               `,
               
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                @CallSuper
                public void onSupportActionModeStarted(@NonNull ActionMode mode) {
                    super.onSupportActionModeStarted(mode);
                    
                    // Action mode shuru hone ke events ka handle yaha par kar sakte hai
                    
                    // Example: Display a toast notification
                    Toast.makeText(this, "Action mode started", Toast.LENGTH_SHORT).show();
                }
                `,
                des:`<p>Is example mein, hum onSupportActionModeStarted() method ko override karke action mode ke shuru hone ke events ko handle kar rahe hai. Hum Toast notification ki madad se "Action mode started" ka notification display kar rahe hai.</p>`
            },


              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull ActionMode mode`,
                      des:`<p>ActionMode mode: Ye parameter ActionMode class ka object hai, jisse hum action mode ke details ko access kar sakte hain. Is object ki madad se hum action mode ka title, menu, custom view, ya koi aur properties ko retrieve kar sakte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  



            {
              dep: true,
              name: "onSupportContentChanged",
              id: "onSupportContentChanged()",
              dataTypeName: `void`,
              code: `<del><a href="#onSupportContentChanged()">onSupportContentChanged</a></del>()`,
  
              fullCode: `public void <del><a href="#onSupportContentChanged()">onSupportContentChanged</a></del>()`,

              des: ` Ye method, activity ka content (UI) change hone par call hota hai. Is method ka use activity ke content mein koi changes hote hai, jaise views ka add/remove, layout ka update, ya data binding ka update, ko handle karne ke liye kiya jata hai.`,
  
              longDes: `
                <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>
                OnContentChanged ka istemal karein.</p></aside>

                <p> Ye method, activity ka content (UI) change hone par call hota hai. Is method ka use activity ke content mein koi changes hote hai, jaise views ka add/remove, layout ka update, ya data binding ka update, ko handle karne ke liye kiya jata hai.</p>

                <p>onSupportContentChanged() method ko override karke hum activity ke content changes ke events ko handle kar sakte hai. Is method mein hum desired behavior ko implement kar sakte hai, jaise views ko initialize karna, data binding ko refresh karna, ya koi aur UI-related operations perform karna.</p>
               `,
               
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                public void onSupportContentChanged() {
                    super.onSupportContentChanged();
                    
                    // Activity ke content changes ke events ka handle yaha par kar sakte hai
                    
                    // Example: Initialize views
                    TextView textView = findViewById(R.id.textView);
                    // ...
                }
                `,
                des:`<p>Is example mein, hum onSupportContentChanged() method ko override karke activity ke content changes ke events ko handle kar rahe hai. Hum findViewById() method ki madad se views ko initialize kar rahe hai.</p>`
            },


              parameter: [],
            },
  



            {
              dep: false,
              name: "onSupportNavigateUp",
              id: "onSupportNavigateUp()",
              dataTypeName: `boolean`,
              code: `<a href="#onSupportNavigateUp()">onSupportNavigateUp</a>()`,
  
              fullCode: `public boolean <a href="#onSupportNavigateUp()">onSupportNavigateUp</a>()`,

              des: `Ye method, navigate up action (up button press) ko handle karne ke liye call hota hai. Is method ka use navigate up behavior ko customize karne aur navigate up action ke event ko handle karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, navigate up action (up button press) ko handle karne ke liye call hota hai. Is method ka use navigate up behavior ko customize karne aur navigate up action ke event ko handle karne ke liye kiya jata hai.</p>

                <p>onSupportNavigateUp() method ko override karke hum navigate up action ke events ko handle kar sakte hai. Is method mein hum desired behavior ko implement kar sakte hai, jaise activity ko finish karna, back stack ko modify karna, ya koi aur navigation-related operations perform karna.</p>
               `,
               
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                public boolean onSupportNavigateUp() {
                    // Navigate up action ke events ka handle yaha par kar sakte hai
                    
                    // Example: Finish current activity
                    finish();
                    
                    return true;
                }
                `,
                des:`<p>Is example mein, hum onSupportNavigateUp() method ko override karke navigate up action ke events ko handle kar rahe hai. Hum finish() method ki madad se current activity ko finish kar rahe hai.</p>

                <p>onSupportNavigateUp() method ki return type boolean hoti hai. Hum true return karke batate hai ki navigate up action ko successfully handle kiya gaya hai, aur false return karke batate hai ki navigate up action ko handle nahi kiya gaya hai.</p>`
            },


              parameter: [],
            },
  

            {
              dep: false,
              name: "onWindowStartingSupportActionMode",
              id: "onWindowStartingSupportActionMode()",
              dataTypeName: `@Nullable ActionMode`,
              code: `<a href="#onWindowStartingSupportActionMode()">onWindowStartingSupportActionMode</a>(@NonNull ActionMode.Callback callback)`,
  
              fullCode: `public @Nullable ActionMode <a href="#onWindowStartingSupportActionMode()">onWindowStartingSupportActionMode</a>(@NonNull ActionMode.Callback callback)`,

              des: `Ye method, contextual action mode (action mode) ka shuru hone se pahle call hota hai. Is method ka use action mode ka custom behavior set karne aur action mode shuru hone se pahle kuch actions perform karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, contextual action mode (action mode) ka shuru hone se pahle call hota hai. Is method ka use action mode ka custom behavior set karne aur action mode shuru hone se pahle kuch actions perform karne ke liye kiya jata hai.</p>

                <p>onWindowStartingSupportActionMode() method ko override karke hum action mode ke shuru hone se pahle custom behavior ko set kar sakte hai. Is method mein hum ActionMode.Callback object ke through action mode ke events ko handle kar sakte hai aur action mode ka custom behavior define kar sakte hai.</p>
               `,
               
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                public @Nullable ActionMode onWindowStartingSupportActionMode(@NonNull ActionMode.Callback callback) {
                    // Action mode ke custom behavior ko set karne ka code yaha par likhe
                    
                    // Example: Create a custom action mode with custom view and menu
                    View customView = LayoutInflater.from(this).inflate(R.layout.custom_action_mode, null);
                    MenuInflater menuInflater = getMenuInflater();
                    Menu menu = new PopupMenu(this, customView).getMenu();
                    menuInflater.inflate(R.menu.custom_action_mode_menu, menu);
                    
                    ActionMode customActionMode = new ActionMode(this, callback);
                    customActionMode.setCustomView(customView);
                    customActionMode.setMenu(menu);
                    
                    return customActionMode;
                }
                `,
                des:`<p>Is example mein, hum onWindowStartingSupportActionMode() method ko override karke action mode ke custom behavior ko set kar rahe hai. Hum custom action mode ka layout inflate karke (custom_action_mode.xml), menu inflate karke (custom_action_mode_menu.xml), aur inko custom action mode object (customActionMode) se associate karke custom behavior ko define kar rahe hai.</p>
                
                <p>onWindowStartingSupportActionMode() method ka return type @Nullable ActionMode hota hai. Hum yaha par action mode ka custom instance return kar rahe hai. Agar hum null return karte hai, toh default behavior wala action mode shuru hoga.</p>`
            },


              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull ActionMode.Callback callback`,
                      des:`<p>ActionMode.Callback callback: Ye parameter ActionMode.Callback interface ka object hai, jisse hum action mode ke events ko handle kar sakte hain. Is object ki madad se hum action mode ke shuru hone, menu ko inflate karna, menu item selection, aur action mode ke samapt hone jaise events ko handle kar sakte hain.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "openOptionsMenu",
              id: "openOptionsMenu()",
              dataTypeName: `void`,
              code: `<a href="#openOptionsMenu()">openOptionsMenu</a>()`,
  
              fullCode: `public void <a href="#openOptionsMenu()">openOptionsMenu</a>()`,

              des: `Ye method, options menu ko open karne ke liye use hota hai. Is method ka use options menu ko programmaticaly open karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, options menu ko open karne ke liye use hota hai. Is method ka use options menu ko programmaticaly open karne ke liye kiya jata hai.</p>

                <p>openOptionsMenu() method ko call karne se options menu ka onCreateOptionsMenu() method automatically call hota hai, jisse options menu inflate hokar display hota hai. Agar options menu pehle se open hai, toh is method ka call karna usko refresh karta hai.</p>
               `,
               
              parameter: [],
            },

  

            {
              dep: false,
              name: "setContentView",
              id: "setContentView(int)",
              dataTypeName: `void`,
              code: `<a href="#setContentView(int)">setContentView</a>(@LayoutRes int layoutResID)`,
  
              fullCode: `public void <a href="#setContentView(int)">setContentView</a>(@LayoutRes int layoutResID)`,

              des: `Ye method, activity ka layout resource file se layout inflate karke display karta hai. Is method ka use activity ke UI ko set karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, activity ka layout resource file se layout inflate karke display karta hai. Is method ka use activity ke UI ko set karne ke liye kiya jata hai.</p>

                <p>setContentView() method ko call karne se activity ka layout inflate hota hai aur us layout ko activity ke visible area mein display kiya jata hai. Hum layout resource file ko XML format mein define karte hai, jisme hum views, view groups, aur unke properties ko define kar sakte hai.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@LayoutRes int layoutResID`,
                      des:`<p>int layoutResID: Ye parameter activity ka layout resource file ka ID hota hai. Hum yaha par layout resource file ka ID (R.layout.layout_file) pass karte hai, jisse corresponding layout inflate hota hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "setContentView",
              id: "setContentView(View)",
              dataTypeName: `void`,
              code: `<a href="#setContentView(View)">setContentView</a>(View view)`,
  
              fullCode: `public void <a href="#setContentView(View)">setContentView</a>(View view)`,

              des: `Ye method, activity ka layout ko ek specific View object se set karta hai. Is method ka use custom layout ke ek View object ko activity ke layout ke roop mein display karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, activity ka layout ko ek specific View object se set karta hai. Is method ka use custom layout ke ek View object ko activity ke layout ke roop mein display karne ke liye kiya jata hai.</p>

                <p>setContentView(View view) method ko call karne se activity ka layout set hota hai aur us layout mein diya gaya View object display hota hai. Hum kisi bhi custom View object ko create kar sakte hai aur use activity ke layout ke roop mein set kar sakte hai.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `View view`,
                      des:`<p>View view: Ye parameter activity ke layout ke roop mein display karne ke liye ek View object hai. Hum yaha par kisi bhi custom View object ko pass kar sakte hai, jise hum activity ke layout ke roop mein display karna chahte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: false,
              name: "setContentView",
              id: "setContentView(View,ViewGroup.LayoutParams)",
              dataTypeName: `void`,
              code: `<a href="#setContentView(View,ViewGroup.LayoutParams)">setContentView</a>(View view, ViewGroup.LayoutParams params)`,
  
              fullCode: `public void <a href="#setContentView(View,ViewGroup.LayoutParams)">setContentView</a>(View view, ViewGroup.LayoutParams params)`,

              des: `Ye method, activity ka layout ko ek specific View object ke sath, aur uske layout parameters ke sath set karta hai. Is method ka use custom layout ke View object ko activity ke layout ke roop mein display karne ke sath layout parameters ko customize karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, activity ka layout ko ek specific View object ke sath, aur uske layout parameters ke sath set karta hai. Is method ka use custom layout ke View object ko activity ke layout ke roop mein display karne ke sath layout parameters ko customize karne ke liye kiya jata hai.</p>

                <p>setContentView(View view, ViewGroup.LayoutParams params) method ko call karne se activity ka layout set hota hai aur us layout mein diya gaya View object display hota hai. Hum layout parameters ko customize kar sakte hai, jaise width, height, alignment, margins, etc.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `View view`,
                      des:`<p>View view: Ye parameter activity ke layout ke roop mein display karne ke liye ek View object hai. Hum yaha par kisi bhi custom View object ko pass kar sakte hai, jise hum activity ke layout ke roop mein display karna chahte hai.</p>`,
                    },
                    {
                      dataTypeName: `ViewGroup.LayoutParams params`,
                      des:`<p>ViewGroup.LayoutParams params: Ye parameter layout parameters ko define karne ke liye hai. Hum yaha par ViewGroup.LayoutParams class se ek object create karke pass karte hai, jisme hum desired layout parameters ko set kar sakte hai, jaise width, height, alignment, margins, etc. Isse hum view ka layout behavior customize kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: false,
              name: "setSupportActionBar",
              id: "setSupportActionBar()",
              dataTypeName: `void`,
              code: `<a href="#setSupportActionBar()">setSupportActionBar</a>(@Nullable Toolbar toolbar)`,
  
              fullCode: `public void <a href="#setSupportActionBar()">setSupportActionBar</a>(@Nullable Toolbar toolbar)`,

              des: `Ye method, support action bar ko set karne ke liye use hota hai. Action bar, yani toolbar, activity ke top portion mein title, logo, menu options, aur navigation controls ko display karne ke liye hota hai. setSupportActionBar() method ka use toolbar ko activity ke action bar ke roop mein set karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>Ye method, support action bar ko set karne ke liye use hota hai. Action bar, yani toolbar, activity ke top portion mein title, logo, menu options, aur navigation controls ko display karne ke liye hota hai. setSupportActionBar() method ka use toolbar ko activity ke action bar ke roop mein set karne ke liye kiya jata hai.</p>

                <p>setSupportActionBar() method ko call karne se activity ke action bar ke roop mein specified Toolbar object set hota hai. Isse activity ke default action bar ko replace karke, custom toolbar ko activity ke top portion mein display kiya jata hai.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@Nullable Toolbar toolbar`,
                      des:`<p>Toolbar toolbar: Ye parameter activity ke action bar ke roop mein set karne ke liye ek Toolbar object hai. Hum yaha par kisi bhi custom Toolbar object ko pass kar sakte hai, jise hum activity ke action bar ke roop mein set karna chahte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: true,
              name: "setSupportProgress",
              id: "setSupportProgress()",
              dataTypeName: `void`,
              code: `<del><a href="#setSupportProgress()">setSupportProgress</a></del>(int progress)`,
  
              fullCode: `public void <del><a href="#setSupportProgress()">setSupportProgress</a></del>(int progress)`,

              des: `Ye method, support progress indicator (progress bar) ka progress level set karne ke liye use hota hai. Progress indicator activity ke title bar ya action bar ke roop mein display hota hai, jisse ongoing task ka progress visually indicate kiya ja sakta hai. `,
  
              longDes: `
              <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>AppCompat mein ab progress bars upalabdh nahi hai.</p></aside>
                <p>Ye method, support progress indicator (progress bar) ka progress level set karne ke liye use hota hai. Progress indicator activity ke title bar ya action bar ke roop mein display hota hai, jisse ongoing task ka progress visually indicate kiya ja sakta hai.</p>

                <p>setSupportProgress(int progress) method ko call karne se activity ke support progress indicator ka progress level set hota hai. Ye method activity ke support action bar mein hi kaam karta hai, isliye "Support" prefix ke sath hai. Support action bar, Android Support Library ke hisse mein provide kiya gaya hai, jisse hum backward compatibility maintain kar sakte hai.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int progress`,
                      des:`<p>int progress: Ye parameter progress indicator ka naya progress level hota hai. Progress level 0 se lekar maximum tak ki range mein hota hai. Yaha par hum kisi bhi valid integer value ko pass kar sakte hai, jisse progress indicator ka progress level set ho jayega.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: true,
              name: "setSupportProgressBarIndeterminate",
              id: "setSupportProgressBarIndeterminate()",
              dataTypeName: `void`,
              code: `<del><a href="#setSupportProgressBarIndeterminate()">setSupportProgressBarIndeterminate</a></del>(boolean indeterminate)`,
  
              fullCode: `public void <del><a href="#setSupportProgressBarIndeterminate()">setSupportProgressBarIndeterminate</a></del>(boolean indeterminate)`,

              des: `Ye method, support progress indicator (progress bar) ko indeterminate mode mein set karne ke liye use hota hai. Indeterminate mode mein progress indicator ek infinite animation ke roop mein chalta hai, jisse ongoing task ka progress level specific nahi hota, lekin task ki chal rahi hai indication di jati hai.`,
  
              longDes: `
              <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>AppCompat mein ab progress bars upalabdh nahi hai.</p></aside>

                <p>Ye method, support progress indicator (progress bar) ko indeterminate mode mein set karne ke liye use hota hai. Indeterminate mode mein progress indicator ek infinite animation ke roop mein chalta hai, jisse ongoing task ka progress level specific nahi hota, lekin task ki chal rahi hai indication di jati hai.</p>

                <p>setSupportProgressBarIndeterminate(boolean indeterminate) method ko call karne se activity ke support progress indicator ko indeterminate mode mein set kiya jata hai. Ye method activity ke support action bar mein hi kaam karta hai, isliye "Support" prefix ke sath hai. Support action bar, Android Support Library ke hisse mein provide kiya gaya hai, jisse hum backward compatibility maintain kar sakte hai.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `boolean indeterminate`,
                      des:`<p>boolean indeterminate: Ye parameter indeterminate mode ko enable (true) ya disable (false) karne ke liye hai. Agar hum is parameter ko true pass karte hai, to progress indicator indeterminate mode mein set ho jayega, jahan par ek infinite animation chalne ke roop mein task ki indication di jayegi. Agar hum is parameter ko false pass karte hai, to progress indicator determinate mode mein set ho jayega, jahan par specific progress level display kiya jayega.</p>`,
                    },
                  ],
                },
              ],
            },
  
            {
              dep: true,
              name: "setSupportProgressBarIndeterminateVisibility",
              id: "setSupportProgressBarIndeterminateVisibility()",
              dataTypeName: `void`,
              code: `<del><a href="#setSupportProgressBarIndeterminateVisibility()">setSupportProgressBarIndeterminateVisibility</a></del>(boolean visible)`,
  
              fullCode: `public void <del><a href="#setSupportProgressBarIndeterminateVisibility()">setSupportProgressBarIndeterminateVisibility</a></del>(boolean visible)`,

              des: `Ye method, support progress indicator (progress bar) ki visibility (dikhayi) ko toggle karne ke liye use hota hai. Hum is method ka use karke progress indicator ko visible ya invisible kar sakte hai, jisse task ki progress indication ko control kiya ja sakta hai.`,
  
              longDes: `
              <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>AppCompat mein ab progress bars upalabdh nahi hai.</p></aside>

                <p>Ye method, support progress indicator (progress bar) ki visibility (dikhayi) ko toggle karne ke liye use hota hai. Hum is method ka use karke progress indicator ko visible ya invisible kar sakte hai, jisse task ki progress indication ko control kiya ja sakta hai.</p>

                <p>setSupportProgressBarIndeterminateVisibility(boolean visible) method ko call karne se activity ke support progress indicator ki visibility set hoti hai. Ye method activity ke support action bar mein hi kaam karta hai, isliye "Support" prefix ke sath hai. Support action bar, Android Support Library ke hisse mein provide kiya gaya hai, jisse hum backward compatibility maintain kar sakte hai.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `boolean visible`,
                      des:`<p>boolean visible: Ye parameter progress indicator ki visibility ko control karne ke liye hai. Agar hum is parameter ko true pass karte hai, to progress indicator visible ho jayega aur task ki progress indication display hogi. Agar hum is parameter ko false pass karte hai, to progress indicator invisible ho jayega aur task ki progress indication hide hogi.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: true,
              name: "setSupportProgressBarVisibility",
              id: "setSupportProgressBarVisibility()",
              dataTypeName: `void`,
              code: `<del><a href="#setSupportProgressBarVisibility()">setSupportProgressBarVisibility</a></del>(boolean visible)`,
  
              fullCode: `public void <del><a href="#setSupportProgressBarVisibility()">setSupportProgressBarVisibility</a></del>(boolean visible)`,

              des: `Ye method, support progress indicator (progress bar) ki visibility (dikhayi) ko toggle karne ke liye use hota hai. Hum is method ka use karke progress indicator ko visible ya invisible kar sakte hai, jisse task ki progress indication ko control kiya ja sakta hai.`,
  
              longDes: `
              <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>AppCompat mein ab progress bars upalabdh nahi hai.</p></aside>

                <p>Ye method, support progress indicator (progress bar) ki visibility (dikhayi) ko toggle karne ke liye use hota hai. Hum is method ka use karke progress indicator ko visible ya invisible kar sakte hai, jisse task ki progress indication ko control kiya ja sakta hai.</p>

                <p>setSupportProgressBarVisibility(boolean visible) method ko call karne se activity ke support progress indicator ki visibility set hoti hai. Ye method activity ke support action bar mein hi kaam karta hai, isliye "Support" prefix ke sath hai. Support action bar, Android Support Library ke hisse mein provide kiya gaya hai, jisse hum backward compatibility maintain kar sakte hai.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `boolean visible`,
                      des:`<p>boolean visible: Ye parameter progress indicator ki visibility ko control karne ke liye hai. Agar hum is parameter ko true pass karte hai, to progress indicator visible ho jayega aur task ki progress indication display hogi. Agar hum is parameter ko false pass karte hai, to progress indicator invisible ho jayega aur task ki progress indication hide hogi.</p>`,
                    },
                  ],
                },
              ],
            },
  
  

            {
              dep: false,
              name: "setTheme",
              id: "setTheme()",
              dataTypeName: `void`,
              code: `<a href="#setTheme()">setTheme</a>(@StyleRes int resId)`,
  
              fullCode: `public void <a href="#setTheme()">setTheme</a>(@StyleRes int resId)`,

              des: `Ye method activity ke theme ko set karne ke liye use hota hai. Hum is method ka use karke activity ke theme ko runtime mein change kar sakte hai.`,
  
              longDes: `

                <p>Ye method activity ke theme ko set karne ke liye use hota hai. Hum is method ka use karke activity ke theme ko runtime mein change kar sakte hai.</p>

                <p>setTheme(@StyleRes int resId) method ko call karne se activity ke theme set hota hai. Is method ke parameter mein hum ek theme resource ID pass karte hai, jisse activity ke theme ko us resource ID se map kiya jata hai. Theme resource ID @StyleRes annotation ke sath annotate kiya jata hai, jo valid style resource ID ko represent karta hai.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@StyleRes int resId`,
                      des:`<p>@StyleRes int resId: Ye parameter activity ke theme ko represent karne ke liye hai. Isme hum ek style resource ID pass karte hai, jisse activity ke theme ko us resource ID se map kiya jata hai. Style resource ID @StyleRes annotation ke sath annotate kiya jata hai, jo valid style resource ID ko represent karta hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "startSupportActionMode",
              id: "startSupportActionMode()",
              dataTypeName: `@Nullable ActionMode`,
              code: `<a href="#startSupportActionMode()">startSupportActionMode</a>(@NonNull ActionMode.Callback callback)`,
  
              fullCode: `public @Nullable ActionMode <a href="#startSupportActionMode()">startSupportActionMode</a>(@NonNull ActionMode.Callback callback)`,

              des: `Ye method support action mode ko shuru karne ke liye use hota hai. Support action mode, context menu jaise temporary actions ke liye alternate user interface provide karta hai.`,
  
              longDes: `

                <p>Ye method support action mode ko shuru karne ke liye use hota hai. Support action mode, context menu jaise temporary actions ke liye alternate user interface provide karta hai.</p>

                <p>startSupportActionMode() method ko call karne se activity ke support action mode shuru ho jata hai. Is method ke parameter mein hum ek ActionMode.Callback object pass karte hai, jisse action mode ke events aur actions handle kiye jate hai.</p>

                <p>ActionMode.Callback interface ko implement karne wale object ke through hum action mode ke events aur actions ko control karte hai. Is interface mein kuch callback methods jaise onCreateActionMode(), onPrepareActionMode(), onActionItemClicked(), onDestroyActionMode() etc. hote hai, jinhe hum implement karke action mode ke behavior ko customize kar sakte hai.</p>
               `,
          
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull ActionMode.Callback callback`,
                      des:`<p>@NonNull ActionMode.Callback callback: Ye parameter action mode ke events aur actions ko handle karne ke liye ActionMode.Callback interface ka ek implementation object hai. Is object ke through hum action mode ke behavior ko customize kar sakte hai. </p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "supportInvalidateOptionsMenu",
              id: "supportInvalidateOptionsMenu()",
              dataTypeName: `void`,
              code: `<a href="#supportInvalidateOptionsMenu()">supportInvalidateOptionsMenu</a>()`,
  
              fullCode: `public void <a href="#supportInvalidateOptionsMenu()">supportInvalidateOptionsMenu</a>()`,

              des: `Ye method activity ke options menu ko refresh karne ke liye use hota hai. Hum is method ka use karke options menu ko invalid (outdated) mark kar sakte hai aur usko refresh karne ke liye onCreateOptionsMenu() method ko firse invoke kar sakte hai.`,
  
              longDes: `
              <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Call invalidateOptionsMenu directly.</p></aside>


                <p>Ye method activity ke options menu ko refresh karne ke liye use hota hai. Hum is method ka use karke options menu ko invalid (outdated) mark kar sakte hai aur usko refresh karne ke liye onCreateOptionsMenu() method ko firse invoke kar sakte hai.</p>

                <p>supportInvalidateOptionsMenu() method ko call karne se activity ke options menu ko refresh karne ka request bheja jata hai. Isse Android system onCreateOptionsMenu() method ko invoke karta hai, jisse options menu ko update karne ka mauka milta hai. Ye method typically options menu ke dynamic changes ko handle karne ke liye istemal kiya jata hai.</p>
               `,
          
              parameter: [],
            },
  


            {
              dep: false,
              name: "supportNavigateUpTo",
              id: "supportNavigateUpTo()",
              dataTypeName: `void`,
              code: `<a href="#supportNavigateUpTo()">supportNavigateUpTo</a>(@NonNull Intent upIntent)`,
  
              fullCode: `public void <a href="#supportNavigateUpTo()">supportNavigateUpTo</a>(@NonNull Intent upIntent)`,

              des: `Ye method activity ke current task stack ko up navigation ke through navigate karne ke liye use hota hai. Hum is method ka use karke activity ko up navigation hierarchy mein ek specific destination tak navigate kar sakte hai.`,
  
              longDes: `


                <p>Ye method activity ke current task stack ko up navigation ke through navigate karne ke liye use hota hai. Hum is method ka use karke activity ko up navigation hierarchy mein ek specific destination tak navigate kar sakte hai.</p>

                <p>supportNavigateUpTo() method ko call karne se activity ke current task stack ko up navigation ke through navigate karne ka request bheja jata hai. Is method ke parameter mein hum ek Intent object pass karte hai, jisse up navigation destination ko represent kiya jata hai. Activity task stack mein up navigation destination tak pahuchne ke liye system back stack ko appropriate modifications ke sath update karta hai.</p>
               `,
            
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`// Create an Intent for the up navigation destination
                Intent upIntent = new Intent(this, MainActivity.class);
                upIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                
                // Navigate up to the specified destination
                supportNavigateUpTo(upIntent);
                `,
                des:`<p>Is example mein, MainActivity tak up navigation ke liye ek Intent object create kiya gaya hai. Fir, supportNavigateUpTo(upIntent) method ko call karke activity ko up navigation hierarchy mein MainActivity tak navigate kiya gaya hai.</p>
                
                <p>supportNavigateUpTo() method ka use typically activity ke onOptionsItemSelected() method mein kiya jata hai, jab options menu mein up navigation option select hota hai. Is method ke through hum up navigation ke destination tak activity ko navigate kar sakte hai aur task stack ko update kar sakte hai.</p>`
            },

              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Intent upIntent`,
                      des:`<p>@NonNull Intent upIntent: Ye parameter up navigation destination ko represent karne ke liye ek Intent object hai. Is object ke through hum specify karte hai ki activity ko up navigation ke through kis destination tak navigate karna hai. Isme typically up navigation destination activity ki class name ya action, category, data, flags etc. specify kiya jata hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "supportRequestWindowFeature",
              id: "supportRequestWindowFeature()",
              dataTypeName: `boolean`,
              code: `<a href="#supportRequestWindowFeature()">supportRequestWindowFeature</a>(int featureId)`,
  
              fullCode: `public boolean <a href="#supportRequestWindowFeature()">supportRequestWindowFeature</a>(int featureId)`,

              des: `Ye method activity ke window features (jaise title bar, action bar, progress bar, etc.) ko request karne ke liye use hota hai. Hum is method ka use karke activity ke window ke specific features ko enable ya disable kar sakte hai.`,
  
              longDes: `


                <p>Ye method activity ke window features (jaise title bar, action bar, progress bar, etc.) ko request karne ke liye use hota hai. Hum is method ka use karke activity ke window ke specific features ko enable ya disable kar sakte hai.</p>

                <p>supportRequestWindowFeature() method ko call karne se activity ke window features ko enable ya disable karne ka request bheja jata hai. Is method ke parameter mein hum ek featureId pass karte hai, jisse hum specify karte hai ki kaun sa window feature ko request karna hai.</p>

                <p>Window features ko enable ya disable karne se pehle supportRequestWindowFeature() method ko call karna zaruri hai. Isse hum window features ko manipulate kar sakte hai, jaise ki title bar ko hide karna, action bar ko enable karna, progress bar ko show karna, etc.</p>
               `,
            
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`// Request to enable the action bar
                supportRequestWindowFeature(Window.FEATURE_ACTION_BAR);
                
                // Request to disable the title bar
                supportRequestWindowFeature(Window.FEATURE_NO_TITLE);
                `,
                des:`<p>Is example mein, supportRequestWindowFeature() method ko call karke window features ko enable ya disable karne ka request bheja gaya hai. Pehle line mein action bar ko enable karne ke liye Window.FEATURE_ACTION_BAR featureId pass kiya gaya hai. Dusre line mein title bar ko disable karne ke liye Window.FEATURE_NO_TITLE featureId pass kiya gaya hai.</p>
                
                <p>supportRequestWindowFeature() method ka use activity ke lifecycle events, onCreate() method ya onCreateOptionsMenu() method ke pehle kiya jata hai. Isse hum activity ke window features ko request kar sakte hai aur unko enable ya disable kar sakte hai.</p>`
            },

              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int featureId`,
                      des:`<p>Feature ID ek integer value hoti hai, jisse hum specify karte hai ki kaun sa window feature ko enable ya disable karna hai. Android SDK mein kuch pre-defined constants available hote hai, jinhe hum feature ID ke roop mein use kar sakte hai. Ye constants Window class mein define kiye gaye hote hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "supportShouldUpRecreateTask",
              id: "supportShouldUpRecreateTask()",
              dataTypeName: `boolean`,
              code: `<a href="#supportShouldUpRecreateTask()">supportShouldUpRecreateTask</a>(@NonNull Intent targetIntent)`,
  
              fullCode: `public boolean <a href="#supportShouldUpRecreateTask()">supportShouldUpRecreateTask</a>(@NonNull Intent targetIntent)`,

              des: `Ye method activity ke up navigation ke through task recreate hona chahiye ya nahi, yani ki naya task stack create hona chahiye ya existing task stack mein navigate hona chahiye, isko decide karne ke liye use hota hai.`,
  
              longDes: `


                <p>Ye method activity ke up navigation ke through task recreate hona chahiye ya nahi, yani ki naya task stack create hona chahiye ya existing task stack mein navigate hona chahiye, isko decide karne ke liye use hota hai.</p>

                <p>supportShouldUpRecreateTask() method ko call karne se activity task stack ke recreate hona chahiye ya nahi, iska decision liya jata hai. Is method ke parameter mein hum ek Intent object pass karte hai, jisse up navigation destination ko represent kiya jata hai. Method us Intent object ke basis par determine karta hai ki activity ke up navigation ke through task recreate hona chahiye ya nahi.</p>

                <p>Agar supportShouldUpRecreateTask() method true return karta hai, toh activity ke up navigation ke through task recreate hoga. Iska matlab hai ki ek naya task stack create hoga, jisme up navigation destination activity top-level activity hogi.</p>

                <p>Agar supportShouldUpRecreateTask() method false return karta hai, toh activity ke up navigation ke through existing task stack mein navigate hoga. Task stack ko modify karne ki zarurat nahi hogi.</p>
               `,
            
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`// Determine if task recreation is required
                boolean recreateTask = supportShouldUpRecreateTask(upIntent);
                
                if (recreateTask) {
                    // Recreate the task stack
                    TaskStackBuilder.create(this)
                        .addNextIntentWithParentStack(upIntent)
                        .startActivities();
                } else {
                    // Navigate within the existing task stack
                    navigateUpTo(upIntent);
                }
                `,
                des:`<p>Is example mein, supportShouldUpRecreateTask() method ka use kiya gaya hai task recreation ke decision ke liye. upIntent ke basis par method se task recreate hona chahiye ya nahi, ye check kiya gaya hai. Agar supportShouldUpRecreateTask() method true return karta hai, toh naya task stack create karne ke liye TaskStackBuilder ka use kiya jata hai. Agar method false return karta hai, toh existing task stack mein navigate karne ke liye navigateUpTo() method ka use kiya jata hai.</p>`
            },

              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull Intent targetIntent`,
                      des:`<p>targetIntent object ke through hum specify karte hai ki activity ko up navigation ke through kis destination tak navigate karna hai. Isme typically up navigation destination activity ki class name ya action, category, data, flags, etc. specify kiya jata hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


          ],
        },
  
        
        protectedMethod: {
          success: true,
          name: "Protected methods",
  
          method: [
            {
              dep: false,
              name: "attachBaseContext",
              id: "attachBaseContext()",
              dataTypeName: `void`,
              code: `<a href="#attachBaseContext()">attachBaseContext</a>(Context newBase)`,
  
              fullCode: `protected void <a href="#attachBaseContext()">attachBaseContext</a>(Context newBase)`,

              des: `Ye method activity ka base context ko attach karne ke liye use hota hai. Is method ka use karke hum activity ke base context ko modify kar sakte hai.`,
  
              longDes: `
              <p>Ye method activity ka base context ko attach karne ke liye use hota hai. Is method ka use karke hum activity ke base context ko modify kar sakte hai.</p>

              <p>attachBaseContext() method ko override karke hum activity ke base context ko customize kar sakte hai. Hum is method mein newBase parameter ke through naya context receive karte hai, jise hum modify karke wapas return kar sakte hai.</p>

              <p>Typically, attachBaseContext() method ka use language localization (bhasha localisation) ke liye kiya jata hai. Agar hum apne application mein multiple languages ko support karna chahte hai aur strings, layouts, resources, etc. ko runtime mein bhasha ke anusaar modify karna chahte hai, toh attachBaseContext() method ka use karke context ko localize kar sakte hai.</p>
                  `,

                  
               codeSnippets: {
                fdes:`<p>Example:</p>`,
                
                code:`@Override
                protected void attachBaseContext(Context newBase) {
                    // Perform language localization here
                    Context localizedContext = localizeContext(newBase);
                    super.attachBaseContext(localizedContext);
                }
                
                private Context localizeContext(Context baseContext) {
                    // Customize the base context as per language preference
                    // and return the modified context
                    // ...
                }
                `,

                des:`<p>Is example mein, attachBaseContext() method ko override kiya gaya hai. attachBaseContext() method mein newBase parameter ke through naya base context receive kiya jata hai. Fir localizeContext() method ka use karke base context ko customize kiya jata hai. Isme language localization ke liye base context ko modify karne ka logic implement kiya jata hai.</p>
                
                <p>Modified base context ko super.attachBaseContext() ke through set kiya jata hai, jisse base context successfully attach ho jata hai.</p>`
            },
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Context newBase`,
                      des:`<p>newBase parameter ke through hum activity ke base context ko receive karte hai. Base context activity ke lifecycle aur configuration ke sath juda hota hai. Is base context par hum application level resources, system services, theme, locale, etc. ka access kar sakte hai</p>`,
                    },
                  ],
                },
              ],
            },


            {
              dep: false,
              name: "onDestroy",
              id: "onDestroy()",
              dataTypeName: `void`,
              code: `<a href="#onDestroy()">onDestroy</a>()`,
  
              fullCode: `protected void <a href="#onDestroy()">onDestroy</a>()`,

              des: `Ye method activity ke lifecycle ka ek important callback hai, jise activity destroy hone se pehle system invoke karta hai. Is method ka use activity ko clean up karne, resources ko release karne, aur memory leaks se bachne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Ye method activity ke lifecycle ka ek important callback hai, jise activity destroy hone se pehle system invoke karta hai. Is method ka use activity ko clean up karne, resources ko release karne, aur memory leaks se bachne ke liye kiya jata hai.</p>

              <p>onDestroy() method activity destroy hone se pehle execute hota hai. Activity destroy hone ke reasons ho sakte hai, jaise user ke explicit back press, system ka memory constraint, screen rotation, configuration change, etc. Jab activity destroy ho jati hai, tab onDestroy() method call hota hai.</p>

              <p>onDestroy() method ko override karke hum activity destroy hone se pehle necessary clean up operations ko perform kar sakte hai. Is method mein hum resources, listeners, receivers, threads, services, database connections, etc. ko release kar sakte hai.</p>
                  `,

                
  
              parameter: [],
            },


            
            {
              dep: false,
              name: "onLocalesChanged",
              id: "onLocalesChanged()",
              dataTypeName: `void`,
              code: `<a href="#onLocalesChanged()">onLocalesChanged</a>(@NonNull LocaleListCompat locales)`,
  
              fullCode: `protected void <a href="#onLocalesChanged()">onLocalesChanged</a>(@NonNull LocaleListCompat locales)`,

              des: `Ye method activity ke locales (bhashaon) mein changes hone par system dvara invoke kiya jata hai. Is method ka use activity ke locales ko update karne aur appropriate UI changes karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Ye method activity ke locales (bhashaon) mein changes hone par system dvara invoke kiya jata hai. Is method ka use activity ke locales ko update karne aur appropriate UI changes karne ke liye kiya jata hai.</p>

              <p>onLocalesChanged() method ko override karke hum activity ke locales mein changes hone par usmein required modifications kar sakte hai. Is method mein hum locales parameter ke through modified locales ko receive karte hai.</p>

              <p>locales parameter LocaleListCompat type ka object hai, jo activity ke updated locales ko represent karta hai. LocaleListCompat class AndroidX library mein upasthit hai, aur ye multiple locales ko handle karne ke liye use hoti hai.</p>

              <p>Hum onLocalesChanged() method ka use karke activity ke locales ke hisaab se UI elements, strings, layouts, resources, etc. ko update kar sakte hai. Is method mein hum activity ke locales ke anusaar appropriate locale-specific changes kar sakte hai, jaise language-specific strings ko reload karna, UI language ko update karna, etc.</p>
                  `,

  
              parameter: [ 
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull LocaleListCompat locales`,
                      des:`<p>locales parameter ke through hum activity ke updated locales ko receive karte hai. LocaleListCompat class AndroidX library mein upasthit hai, aur ye multiple locales ko handle karne ke liye use hoti hai. LocaleListCompat object multiple locales ko store kar sakta hai.</p>`,
                    },
                  ],
                },
              
              ],
            },

            
            {
              dep: false,
              name: "onNightModeChanged",
              id: "onNightModeChanged()",
              dataTypeName: `void`,
              code: `<a href="#onNightModeChanged()">onNightModeChanged</a>(int mode)`,
  
              fullCode: `protected void <a href="#onNightModeChanged()">onNightModeChanged</a>(int mode)`,

              des: `Ye method activity ke night mode (raat ka mode) mein changes hone par system dvara invoke kiya jata hai. Is method ka use activity ke night mode ko update karne aur appropriate UI changes karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Ye method activity ke night mode (raat ka mode) mein changes hone par system dvara invoke kiya jata hai. Is method ka use activity ke night mode ko update karne aur appropriate UI changes karne ke liye kiya jata hai.</p>

              <p>onNightModeChanged() method ko override karke hum activity ke night mode mein changes hone par usmein required modifications kar sakte hai. Is method mein hum mode parameter ke through modified night mode ko receive karte hai.</p>

              <p>mode parameter ek integer value hai, jo activity ke updated night mode ko represent karta hai. Night mode ke liye system predefined constants hote hai, jaise AppCompatDelegate.MODE_NIGHT_YES (raat ka mode), AppCompatDelegate.MODE_NIGHT_NO (din ka mode), AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM (system ke anusar mode), etc.</p>

              <p>Hum onNightModeChanged() method ka use karke activity ke night mode ke hisaab se UI elements, colors, themes, layouts, resources, etc. ko update kar sakte hai. Is method mein hum activity ke night mode ke anusaar appropriate UI changes kar sakte hai. </p>
                  `,

  
              parameter: [ 
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int mode`,
                      des:`<p>mode parameter ke through hum activity ke updated night mode ko receive karte hai. Ye integer value hai, jo night mode ko represent karta hai.</p>`,
                    },
                  ],
                },
              
              ],
            },


            
            {
              dep: false,
              name: "onPostCreate",
              id: "onPostCreate()",
              dataTypeName: `void`,
              code: `<a href="#onPostCreate()">onPostCreate</a>(@Nullable Bundle savedInstanceState)`,
  
              fullCode: `protected void <a href="#onPostCreate()">onPostCreate</a>(@Nullable Bundle savedInstanceState)`,

              des: `Ye method activity ke onCreate() method ke baad system dvara invoke kiya jata hai. Is method ka use activity ke UI initialization aur state restoration ke liye kiya jata hai.`,
  
              longDes: `
              <p>Ye method activity ke onCreate() method ke baad system dvara invoke kiya jata hai. Is method ka use activity ke UI initialization aur state restoration ke liye kiya jata hai.</p>

              <p>onPostCreate() method ko override karke hum activity ke UI elements ko initialize kar sakte hai aur kisi saved instance state ko restore kar sakte hai. Is method mein hum savedInstanceState parameter ke through previously saved state ko receive karte hai.</p>

              <p>avedInstanceState parameter ek Bundle object hai, jo activity ke onSaveInstanceState() method mein saved state ko represent karta hai. Agar activity recreate hoti hai, to is parameter mein non-null value hoti hai, jisse hum saved state ko restore kar sakte hai. Agar activity fresh launch hoti hai, to is parameter mein null hota hai.</p>
                  `,

              
  
              parameter: [ 
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@Nullable Bundle savedInstanceState`,
                      des:`<p>savedInstanceState parameter ke through hum previously saved state ko receive karte hai. Agar activity recreate hoti hai, to is parameter mein non-null value hoti hai, jisse hum saved state ko restore kar sakte hai. Agar activity fresh launch hoti hai, to is parameter mein null hota hai.</p>`,
                    },
                  ],
                },
              
              ],
            },


            
            
            {
              dep: false,
              name: "onPostResume",
              id: "onPostResume()",
              dataTypeName: `void`,
              code: `<a href="#onPostResume()">onPostResume</a>()`,
  
              fullCode: `protected void <a href="#onPostResume()">onPostResume</a>()`,

              des: `Ye method activity ke onResume() method ke baad system dvara invoke kiya jata hai. Is method ka use activity ke UI updates aur background tasks ke resume karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Ye method activity ke onResume() method ke baad system dvara invoke kiya jata hai. Is method ka use activity ke UI updates aur background tasks ke resume karne ke liye kiya jata hai.</p>

              <p>onPostResume() method ko override karke hum activity ke UI elements ko update kar sakte hai, kisi background task ko resume kar sakte hai, aur kisi external resources ko refresh kar sakte hai. Is method ko onResume() ke baad invoke karna recommended hai, kyunki onResume() method mein activity ke visible state ki guarantee nahi hoti.</p>
                  `,

                  
  
              parameter: [],
            },

     
            
            {
              dep: false,
              name: "onStart",
              id: "onStart()",
              dataTypeName: `void`,
              code: `<a href="#onStart()">onStart</a>()`,
  
              fullCode: `protected void <a href="#onStart()">onStart</a>()`,

              des: `Ye method activity lifecycle ka ek important callback hai. Jab activity visible ho jati hai, tab system onStart() method ko invoke karta hai. Is method ka use activity ke initialization aur visible state me required operations ko perform karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Ye method activity lifecycle ka ek important callback hai. Jab activity visible ho jati hai, tab system onStart() method ko invoke karta hai. Is method ka use activity ke initialization aur visible state me required operations ko perform karne ke liye kiya jata hai.</p>

              <p>onStart() method ko override karke hum activity ke visible state se related tasks ko handle kar sakte hai. Ye method typically UI components ko initialize karta hai, resources ko load karta hai, listeners ko register karta hai, aur kisi background task ko start karta hai. Is method me aap activity ko visible hone se pahle kuch required operations perform kar sakte hai.</p>
                  `,

              parameter: [],
            },


            
            {
              dep: false,
              name: "onStop",
              id: "onStop()",
              dataTypeName: `void`,
              code: `<a href="#onStop()">onStop</a>()`,
  
              fullCode: `protected void <a href="#onStop()">onStop</a>()`,

              des: `Ye method activity lifecycle ka ek important callback hai. Jab activity foreground se background me move ho jati hai, tab system onStop() method ko invoke karta hai. Is method ka use activity ke visible state se bahar hone se pahle required operations ko perform karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Ye method activity lifecycle ka ek important callback hai. Jab activity foreground se background me move ho jati hai, tab system onStop() method ko invoke karta hai. Is method ka use activity ke visible state se bahar hone se pahle required operations ko perform karne ke liye kiya jata hai.</p>

              <p>onStop() method ko override karke hum activity ke visible state se bahar hone se pahle tasks ko handle kar sakte hai. Ye method typically UI components ko cleanup karta hai, resources ko release karta hai, listeners ko unregister karta hai, aur background tasks ko stop karta hai. Is method me aap activity ke visible state se bahar hone se pahle kuch required operations perform kar sakte hai.</p>
                  `,

  
              parameter: [],
            },


            {
              dep: false,
              name: "onTitleChanged",
              id: "onTitleChanged()",
              dataTypeName: `void`,
              code: `<a href="#onTitleChanged()">onTitleChanged</a>(CharSequence title, int color)`,
  
              fullCode: `protected void <a href="#onTitleChanged()">onTitleChanged</a>(CharSequence title, int color)`,

              des: `Ye method activity ke title ka change ho jane par system dvara invoke kiya jata hai. Is method ka use activity ke title ko update karne aur title ke sath jude hue visual changes ko handle karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>Ye method activity ke title ka change ho jane par system dvara invoke kiya jata hai. Is method ka use activity ke title ko update karne aur title ke sath jude hue visual changes ko handle karne ke liye kiya jata hai.</p>

              <p>onTitleChanged() method ko override karke hum activity ke title ko update kar sakte hai aur title ke sath jude hue visual changes ko handle kar sakte hai. Jab activity ke title me koi change hota hai, tab system onTitleChanged() method ko invoke karta hai aur usme updated title aur color pass karta hai.</p>
                  `,

                  
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence title`,
                      des:`<p>CharSequence title: Yeh parameter activity ka updated title hai. Isme activity ke naya title ka value hota hai, jise hum UI me update kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `int color`,
                      des:`<p>int color: Yeh parameter title ke sath jude hue visual changes ke liye color value hai. Isme title ke liye naya color code hota hai, jise hum visual changes ke liye handle kar sakte hai, jaise title ka color change karna.</p>`,
                    },
                  ],
                },
              
              ],
            },


            {
              dep: false,
              name: "shouldDumpInternalState",
              id: "shouldDumpInternalState()",
              dataTypeName: `final boolean`,
              code: `<a href="#shouldDumpInternalState()">shouldDumpInternalState</a>(@Nullable String[] args)`,
  
              fullCode: `protected final boolean <a href="#shouldDumpInternalState()">shouldDumpInternalState</a>(@Nullable String[] args)`,

              des: `check karta hai ki internal state ko dump kiya jana chahiye , kyuki kuch special args activity dawara hi handled kiye jaate hai.`,
  
              longDes: `
              <p>check karta hai ki internal state ko dump kiya jana chahiye, kyuki kuch special args activity dawara hi control kiye jate hai.</p>

              <p>dump ko laagu karne wale subclass aamtaur per iske saath start hone chahiye:</p>
                  `,

                  
               codeSnippets: {
                fdes:``,
                
                code:`@Override
                public void dump(@NonNull String prefix, @Nullable FileDescriptor fd,
                       @NonNull PrintWriter writer, @Nullable String[] args) {
                   super.dump(prefix, fd, writer, args);
                
                   if (!shouldDumpInternalState(args)) {
                       return;
                   }
                   // dump internal starte
                }`,

                des:``
            },
  
              parameter: [],
            },


            

          ]
      },

      
      extensionFunctions: {
        success: true,
        name: "Extension functions",

        method: [
          {
            dep: false,
            name: "ActivityKt.setupActionBarWithNavController",
            id: "ActivityKt.setupActionBarWithNavController(AppCompatActivity,NavController,DrawerLayout)",
            dataTypeName: `final void`,
            code: `<a href="#ActivityKt.setupActionBarWithNavController(AppCompatActivity,NavController,DrawerLayout)">ActivityKt.setupActionBarWithNavController</a>(
              @NonNull AppCompatActivity receiver,
              @NonNull NavController navController,
              DrawerLayout drawerLayout
          )`,

            fullCode: `public final void <a href="#ActivityKt.setupActionBarWithNavController(AppCompatActivity,NavController,DrawerLayout)">ActivityKt.setupActionBarWithNavController</a>(
              @NonNull AppCompatActivity receiver,
              @NonNull NavController navController,
              DrawerLayout drawerLayout
          )`,

            des: `AppCompatActivity class mein ActivityKt.setupActionBarWithNavController() ek extension function hai. Ye function, Navigation component ke saath ActionBar ko setup karne ke liye use kiya jata hai.`,

            longDes: `
            <p>AppCompatActivity class mein ActivityKt.setupActionBarWithNavController() ek extension function hai. Ye function, Navigation component ke saath ActionBar ko setup karne ke liye use kiya jata hai.</p>

            <p>Is function ka use AppCompatActivity mein Navigation component ko integrate karne ke liye kiya jata hai. Ye function ActionBar ko navigation ke events ke saath sync karta hai, jaise back button press karne par navigation stack se previous destination par jaana, ActionBar me title update karna current destination ke hisaab se, ityadi.</p>

            <p>Function ka use typically onCreate() method mein kiya jata hai, jab NavController initialize ho chuka hota hai. Is function ko call karne se ActionBar me back button show ho jata hai, jise user press karke previous destination pe ja sakta hai.</p>
            `,

           


            parameter: [
              {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull AppCompatActivity receiver,`,
                      des:`<p>receiver: AppCompatActivity instance, jispar ActionBar setup kiya jayega.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull NavController navController`,
                      des:`<p>navController: NavController instance, jise ActionBar ke saath associate karna hai.</p>`,
                    },
                    {
                      dataTypeName: `DrawerLayout drawerLayout`,
                      des:`<p>drawerLayout: (optional) DrawerLayout instance, agar aap navigation drawer ka use kar rahe hain toh ise provide karein.</p>`,
                    },
                  ],
                },
            ],
          },

          
          {
            dep: false,
            name: "ActivityKt.setupActionBarWithNavController",
            id: "ActivityKt.setupActionBarWithNavController(AppCompatActivity,NavController,AppBarConfiguration)",
            dataTypeName: `final void`,
            code: `<a href="#ActivityKt.setupActionBarWithNavController(AppCompatActivity,NavController,AppBarConfiguration)">ActivityKt.setupActionBarWithNavController</a>(
              @NonNull AppCompatActivity receiver,
              @NonNull NavController navController,
              @NonNull AppBarConfiguration configuration
          )`,

            fullCode: `public final void <a href="#ActivityKt.setupActionBarWithNavController(AppCompatActivity,NavController,AppBarConfiguration)">ActivityKt.setupActionBarWithNavController</a>(
              @NonNull AppCompatActivity receiver,
              @NonNull NavController navController,
              @NonNull AppBarConfiguration configuration
          )`,

            des: `AppCompatActivity class mein ActivityKt.setupActionBarWithNavController() ek extension function hai. Ye function, Navigation component ke saath ActionBar ko setup karne ke liye use kiya jata hai, lekin yahan par AppBarConfiguration ka use kiya jata hai.`,

            longDes: `
            <p>AppCompatActivity class mein ActivityKt.setupActionBarWithNavController() ek extension function hai. Ye function, Navigation component ke saath ActionBar ko setup karne ke liye use kiya jata hai, lekin yahan par AppBarConfiguration ka use kiya jata hai.</p>

            <p>AppBarConfiguration class, ActionBar ke behavior aur navigation ke liye configuration provide karta hai. Is class ke object mein aap navigation graph, top-level destinations, up button ke behavior, ityadi configure kar sakte hain.</p>

            <p>Is function ka use AppCompatActivity mein Navigation component ko integrate karne ke liye kiya jata hai. Ye function ActionBar ko navigation ke events ke saath sync karta hai, jaise back button press karne par navigation stack se previous destination par jaana, ActionBar me title update karna current destination ke hisaab se, ityadi. AppBarConfiguration ke saath setup karne se additional configuration aur customization options milte hain.</p>
            `,

           
            parameter: [
              {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull AppCompatActivity receiver,`,
                      des:`<p>receiver: AppCompatActivity instance, jispar ActionBar setup kiya jayega.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull NavController navController`,
                      des:`<p>navController: NavController instance, jise ActionBar ke saath associate karna hai.</p>`,
                    },
                    {
                      dataTypeName: `@NonNull AppBarConfiguration configuration`,
                      des:`<p>configuration: AppBarConfiguration instance, jo ActionBar ke behavior ko configure karta hai.</p>`,
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
  