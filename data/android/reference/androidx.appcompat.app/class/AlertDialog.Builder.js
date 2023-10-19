module.exports.AlertDialog_Builder = (req, res) => {
    res.status(200).send({
      name: "AlertDialog.Builder",
      hCode: `public class <a href="#AlertDialog.Builder">AlertDialog.Builder</a>`,
  
      des: 
        `
        <p>AlertDialog.Builder class AlertDialog class ke saath juda ek helper class hai. Iska upyog AlertDialog ka construction aur customization karne ke liye kiya jata hai.</p>
        
  
        <p>AlertDialog.Builder class ka upyog AlertDialog object ko create karne ke liye kiya jata hai. Is class ke through hum AlertDialog ke various properties, jaise title, message, icon, buttons, custom views, etc., ko set kar sakte hai aur AlertDialog object ko build karke return kar sakte hai.</p>
  
        <p>AlertDialog.Builder class ke through hum AlertDialog ko construct karke customize kar sakte hai. Is class ke methods ka upyog karke hum AlertDialog ke appearance, behavior, aur interaction ko control kar sakte hai. Builder pattern ki madad se hum step-by-step AlertDialog ka construction aur configuration kar sakte hai.</p>
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
              name: `Builder`,
              id: "Builder(Context)",
              code: `Builder(@NonNull Context context)`,
              fullCode: `public Builder(@NonNull Context context)`,
              des: `Is constructor ka upyog karke hum AlertDialog.Builder object ko initialize karne ke baad, hum AlertDialog ke various properties, jaise title, message, icon, buttons, custom views, etc., ko set karne ke liye AlertDialog.Builder ke aur methods ka upyog kar sakte hai. `,

              longDes: `<p>AlertDialog.Builder class ka constructor humein ek AlertDialog.Builder object banane ki suvidha pradan karta hai. Is constructor ke dwara hum AlertDialog.Builder object ko initialize kar sakte hai, jisse hum AlertDialog ka construction aur customization kar sakte hai.</p>
              <p>Hum is constructor ke dwara Context object ko AlertDialog.Builder object se bind kar sakte hai. Context object AlertDialog.Builder object ke saath juda hoga aur AlertDialog.Builder object us context ke madyam se AlertDialog ka construction karega.</p>`,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>"context" parameter ek non-null Context object hai, jisse AlertDialog.Builder object ke context ko represent karte hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: `Builder`,
              id: "Builder(Context,int)",
              code: `Builder(@NonNull Context context, @StyleRes int themeResId)`,
              fullCode: `public Builder(@NonNull Context context, @StyleRes int themeResId)`,
              des: `Iska upyog AlertDialog.Builder object ka initialization aur custom theme ke saath AlertDialog banane ke liye kiya jata hai.`,

              longDes: `<p>Is constructor ke dwara hum AlertDialog.Builder object ko initialize kar sakte hai aur usme custom theme ko set kar sakte hai. Custom theme ka upyog karke hum AlertDialog ke appearance, style, aur design ko customize kar sakte hai.</p>
              <p>Jab hum AlertDialog.Builder object ko custom theme ke saath initialize karte hai, to AlertDialog jo build hogi wo us custom theme ke anurup dikhegi. Custom theme ki madad se hum AlertDialog ke background color, text style, button style, aur anya visual aspects ko modify kar sakte hai.</p>`,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>"context" parameter ek non-null Context object hai, jisse AlertDialog.Builder object ke context ko represent karte hai.</p>`,
                      },
                      {
                        dataTypeName: ` @StyleRes int themeResId`,
                        des:`<p>"themeResId" parameter ek integer hai, jisme custom theme ka resource ID hota hai. Is parameter ki madad se hum AlertDialog ke liye custom theme specify kar sakte hai.</p>`,
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
              name: "create",
              id: "create()",
              dataTypeName: `@NonNull AlertDialog`,
              code: `<a href="#create()">create</a>()`,
  
              fullCode: `public @NonNull AlertDialog <a href="#create()">create</a>()`,
              des: `Iska upyog AlertDialog object ko build karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>AlertDialog.Builder class mein create method ka upyog kiya jata hai jab hum AlertDialog.Builder object ke dvara specify ki gayi properties ke basis par AlertDialog object ko build karna chahte hai.</p>
  
              <p>Create method ke dwara hum AlertDialog.Builder object se AlertDialog object ko build kar sakte hai. Is method ko call karne se pehle, humein AlertDialog.Builder object ke dwara AlertDialog ke various properties, jaise title, message, icon, buttons, custom views, etc., ko set karna hota hai.</p>
              `,
  
              parameter: [],
            },
  
            {
              dep: false,
              name: "getContext",
              id: "getContext()",
              dataTypeName: `@NonNull Context`,
              code: `<a href="#getContext()">getContext</a>()`,
  
              fullCode: `public @NonNull Context <a href="#getContext()">getContext</a>()`,
              des: `Iska upyog AlertDialog.Builder object ke associated Context object ko retrieve karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>AlertDialog.Builder class mein getContext method ka upyog humein AlertDialog.Builder object ke dwara bind kiye gaye Context object ko prapt karne ke liye kiya jata hai. Context object AlertDialog.Builder object ke saath joda hota hai aur AlertDialog.Builder object us context ke madyam se AlertDialog ka construction karta hai.</p>
  
                <p>Is method ki madad se hum AlertDialog.Builder object ke associated Context object ko obtain kar sakte hai. Context object ko further use karke hum AlertDialog ke construction ya customization ke liye required resources, layouts, strings, etc., tak pahunch sakte hai.</p>`,
  
              parameter: [],
            },
  


            {
              dep: false,
              name: "setAdapter",
              id: "setAdapter(ListAdapter,DialogInterface.OnClickListener)",
              dataTypeName: `abstract Drawable`,
              code: `<a href="#setAdapter(ListAdapter,DialogInterface.OnClickListener)">setAdapter</a>(
    ListAdapter adapter,
    DialogInterface.OnClickListener listener
)`,
  
              fullCode: `public abstract Drawable <a href="#setAdapter(ListAdapter,DialogInterface.OnClickListener)">setAdapter</a>(
    ListAdapter adapter,
    DialogInterface.OnClickListener listener
)`,
              des: `Iska upyog AlertDialog ke dialog box mein ListView ke saath ek adapter aur item click listener set karne ke liye kiya jata hai.`,
  
              longDes: `  
                <p>Is method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein ListView ko display karna chahte hai aur ListView ke items ko bind karne ke liye ek adapter ka upyog karna chahte hai. ListAdapter object ke dwara hum ListView ke items ko populate kar sakte hai.</p>
  
                <p>Saath hi, hum ek item click listener bhi set kar sakte hai jisse hum ListView ke item click events ko handle kar sakte hai. DialogInterface.OnClickListener object ka upyog karke hum ListView ke item click events par react kar sakte hai aur corresponding actions perform kar sakte hai.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ListAdapter adapter`,
                      des: `<p>"adapter" parameter ek ListAdapter object hai, jisse ListView ke items ko bind karne ke liye use kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse ListView ke item click events ka handle kiya jata hai.</p>`,
                    }
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "setCancelable",
              id: "setCancelable()",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setCancelable()">setCancelable</a>(boolean cancelable)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setCancelable()">setCancelable</a>(boolean cancelable)`,

              des: `Iska upyog karte hai AlertDialog ke cancelable (cancel karne yogyata) ko set karne ke liye.`,
  
              longDes: `
  
                <p>setCancelable method ka upyog hum karte hai jab hum AlertDialog ko cancelable (dismissable) banana ya usse cancel karne ki permission dena chahte hai. Agar AlertDialog cancelable hai, tab user dialog box ke bahar click karke ya back button daba kar dialog box ko dismiss kar sakta hai.</p>

                <p>Agar hum setCancelable method ko false ke sath call karte hai, tab user AlertDialog ko cancel nahi kar sakta hai aur dialog box ko dismiss karne ke liye user ko specific actions perform karne ki avashyakta hoti hai, jaise buttons par click karna ya koi aur interaction.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `boolean cancelable`,
                      des: `<p>"cancelable" parameter ek boolean value hai, jisse hum specify kar sakte hai ki kya AlertDialog ko cancelable banana hai ya nahi. Agar cancelable true hai, tab user AlertDialog ko cancel (dismiss) kar sakta hai, aur agar false hai, tab user AlertDialog ko cancel nahi kar sakta hai.</p>`,
                    }
                  ],
                },
              ],
            },


  
            {
              dep: false,
              name: "setCursor",
              id: "setCursor()",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setCursor()">setCursor</a>(
    Cursor cursor,
    DialogInterface.OnClickListener listener,
    String labelColumn
)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setCursor()">setCursor</a>(
    Cursor cursor,
    DialogInterface.OnClickListener listener,
    String labelColumn
)`,

              des: `Iska upyog AlertDialog ke dialog box mein cursor-based data display aur item selection ke liye kiya jata hai.`,
  
              longDes: `
                <p>setCursor method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein cursor-based data ko display karna chahte hai, jaise ki database ke records, query results, ya kisi other data source se retrieve kiya gaya data. Cursor object ke dwara hum dialog box ke items ko populate kar sakte hai.</p>
  
                <p>Saath hi, hum item click listener bhi set kar sakte hai jisse hum dialog box ke item click events par react kar sakte hai aur corresponding actions perform kar sakte hai.

                "labelColumn" parameter ki madad se hum specify kar sakte hai ki cursor ka kaunsa column label/text represent karega, jisse dialog box ke items ke label/text ko retrieve kiya ja sake.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Cursor cursor`,
                      des: `<p>"cursor" parameter ek Cursor object hai, jisse dialog box mein display kiya jaane wala data represent karta hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse item click events ka handle kiya jata hai.</p>`,
                    },
                    {
                      dataTypeName: `String labelColumn`,
                      des: `<p>"labelColumn" parameter ek String hai, jo cursor ke column name ko specify karta hai, jisse dialog box ke items ke label/text ko retrieve kiya ja sakta hai.</p>`,
                    },
                  ],
                },
              ],
            },


  
            {
              dep: false,
              name: "setCustomTitle",
              id: "setCustomTitle()",
              dataTypeName: `AlertDialog.Builde`,
              code: `<a href="#setCustomTitle()">setCustomTitle</a>(@Nullable View customTitleView)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setCustomTitle()">setCustomTitle</a>(@Nullable View customTitleView)`,

              des: `Iska upyog karte hai AlertDialog ke custom title ko set karne ke liye.`,
              longDes: `<p>setCustomTitle method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein custom title ko display karna chahte hai. Custom title ke roop mein, hum apne pasandeeda layout ya view ko set kar sakte hai, jisse title ka appearance aur design ko customize kar sakte hai.</p>

              <p>"customTitleView" parameter ke dwara hum ek View object ko specify kar sakte hai, jo humare custom title ke layout aur design ko represent karega. Is View object mein hum title text, icons, images, ya koi bhi aur required elements ko include kar sakte hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@Nullable View customTitleView`,
                      des: `<p>"customTitleView" parameter ek nullable View object hai, jisse hum custom title ke taur par set karne ke liye use kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "setIcon",
              id: "setIcon(Drawable)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setIcon(Drawable)">setIcon</a>(@Nullable Drawable icon)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setIcon(Drawable)">setIcon</a>(@Nullable Drawable icon)`,
              des: `Iska upyog karte hai AlertDialog ke icon ko set karne ke liye.`,

              longDes: `<p>setIcon method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein icon ko display karna chahte hai. Icon dialog box ke visual representation ko enhance karta hai aur specific context ya visual cue ko provide karta hai.</p>

              <p>"icon" parameter ke dwara hum ek Drawable object ko specify kar sakte hai, jo humare icon ko represent karega. Is Drawable object mein hum vector icons, bitmap images, ya system-defined icons ko include kar sakte hai.</p>`,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable icon`,
                        des: `<p>"icon" parameter ek nullable Drawable object hai, jisse hum icon ke taur par set karne ke liye use kar sakte hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  

            {
              dep: false,
              name: "setIcon",
              id: "setIcon(int)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setIcon(int)">setIcon</a>(@DrawableRes int iconId)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setIcon(int)">setIcon</a>(@DrawableRes int iconId)`,
              des: `Iska upyog karte hai AlertDialog ke icon ko set karne ke liye, jahan icon ko Drawable resource ID ke dwara specify kiya jata hai.`,

              longDes: `<p>setIcon method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein icon ko display karna chahte hai. Icon dialog box ke visual representation ko enhance karta hai aur specific context ya visual cue ko provide karta hai.</p>

              <p>"iconId" parameter ke dwara hum ek Drawable resource ID ko specify kar sakte hai, jisse humare icon ko represent kiya jata hai. Drawable resource ID typically res/drawable folder mein sthit XML file ya bitmap image ko refer karta hai.</p>`,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int iconId`,
                        des: `<p>"iconId" parameter ek Drawable resource ID hai, jisse hum icon ke taur par set karne ke liye use kar sakte hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  



            {
              dep: false,
              name: "setIconAttribute",
              id: "setIconAttribute()",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setIconAttribute()">setIconAttribute</a>(@AttrRes int attrId)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setIconAttribute()">setIconAttribute</a>(@AttrRes int attrId)`,

              des: `Iska upyog karte hai AlertDialog ke icon ko set karne ke liye, jahan icon ko attribute resource ID ke dwara specify kiya jata hai.`,

              longDes: `<p>setIconAttribute method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein icon ko display karna chahte hai. Icon dialog box ke visual representation ko enhance karta hai aur specific context ya visual cue ko provide karta hai.</p>
              
              <p>"attrId" parameter ke dwara hum ek Attribute resource ID ko specify kar sakte hai, jisse humare icon ka source attribute represent kiya jata hai. Attribute resource ID typically res/values/styles.xml ya res/values/attrs.xml file mein sthit attribute ko refer karta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@AttrRes int attrId`,
                      des: `<p>"attrId" parameter ek Attribute resource ID hai, jisse hum icon ko set karne ke liye use kar sakte hai.</p>`,
                    },
                  ],
                }, 
              ],
            },

  
            {
              dep: true,
              name: "setInverseBackgroundForced",
              id: "setInverseBackgroundForced()",
              dataTypeName: `AlertDialog.Builder`,
              code: `<del><a href="#setInverseBackgroundForced()">setInverseBackgroundForced</a></del>(boolean useInverseBackground)`,
  
              fullCode: `public AlertDialog.Builder <del><a href="#setInverseBackgroundForced()">setInverseBackgroundForced</a></del>(boolean useInverseBackground)`,

              des: `Iska upyog AlertDialog ke inverse background ko force apply karne ke liye kiya jata hai.`,

              longDes: `
              <aside class="caution"><strong>Yah method deprecated hai. </strong></br><p>Ye flag sirf pre-Material themes ke liye istemaal hota hai. Iske bajaye, alert dialog theme mein window background ko specify karein.</p></aside>
              <p>setInverseBackgroundForced method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein inverse background ko force apply karna chahte hai. Inverse background, normally light theme mein dark color ka background hota hai aur dark theme mein light color ka background hota hai.</p>
              
              <p>"useInverseBackground" parameter ki madad se hum specify kar sakte hai ki kya inverse background ko force apply karna hai ya nahi. Agar hum setInverseBackgroundForced method ko true ke sath call karte hai, tab inverse background dialog box par apply ho jata hai, jisse dialog box ke visual appearance ko contrast create hota hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `boolean useInverseBackground`,
                      des: `<p>"useInverseBackground" parameter ek boolean value hai, jisse hum specify kar sakte hai ki kya inverse background ko force apply karna hai ya nahi. Agar useInverseBackground true hai, tab inverse background force apply hota hai, aur agar false hai, tab normal background apply hota hai.</p>`,
                    },
                  ],
                }, 
              ],
            },
  

            {
              dep: false,
              name: "setItems",
              id: "setItems(CharSequence,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setItems(CharSequence,DialogInterface.OnClickListener)">setItems</a>(
    CharSequence[] items,
    DialogInterface.OnClickListener listener
)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setItems(CharSequence,DialogInterface.OnClickListener)">setItems</a>(
    CharSequence[] items,
    DialogInterface.OnClickListener listener
)`,

              des: `Iska upyog karte hai AlertDialog ke items (list of options) ko set karne ke liye.`,
              longDes: `<p>setItems method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein ek list of options (items) ko display karna chahte hai. Is list ke har item ko user select kar sakta hai.

              "items" parameter ke dwara hum ek CharSequence array ko specify kar sakte hai, jisme hum list ke items ko define karte hai. Ye items text, labels, ya koi bhi informative content ho sakta hai, jise user dekh kar select kar sakta hai.</p>
              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum item click events ko handle kar sakte hai. Jab user koi item select karta hai, onClick method invoke hota hai, jisse hum us item ka action perform kar sakte hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence[] items`,
                      des: `<p>"items" parameter ek CharSequence array hai, jisme hum list ke items ko specify karte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum item click events ke liye set kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "setItems",
              id: "setItems(int,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setItems(int,DialogInterface.OnClickListener)">setItems</a>(@ArrayRes int itemsId, DialogInterface.OnClickListener listener)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setItems(int,DialogInterface.OnClickListener)">setItems</a>(@ArrayRes int itemsId, DialogInterface.OnClickListener listener)`,

              des: `Iska upyog karte hai AlertDialog ke items (list of options) ko set karne ke liye, jahan items ko resource ID ke dwara specify kiya jata hai.`,
              longDes: `<p>setItems method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein ek list of options (items) ko display karna chahte hai. Is list ke har item ko user select kar sakta hai.

              "itemsId" parameter ke dwara hum ek Array resource ID ko specify kar sakte hai, jisse humare items ka source resource represent kiya jata hai. Array resource typically res/values/arrays.xml file mein sthit string array ko refer karta hai.</p>
              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum item click events ko handle kar sakte hai. Jab user koi item select karta hai, onClick method invoke hota hai, jisse hum us item ka action perform kar sakte hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@ArrayRes int itemsId`,
                      des: `<p>"itemsId" parameter ek Array resource ID hai, jisse hum list ke items ko specify karne ke liye use kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum item click events ke liye set kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },



  
            {
              dep: false,
              name: "setMessage",
              id: "setMessage(CharSequence)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setMessage(CharSequence)">setMessage</a>(@Nullable CharSequence message)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setMessage(CharSequence)">setMessage</a>(@Nullable CharSequence message)`,

              des: `Iska upyog karte hai AlertDialog ke message ko set karne ke liye.`,
              longDes: `<p>setMessage method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein ek message ko display karna chahte hai. Ye message typically dialog box ke title ke niche ya content ke sath dikhai jata hai aur user ko specific information ya instructions provide karta hai.</p>

              <p>"message" parameter ke dwara hum ek CharSequence object ko specify kar sakte hai, jisme dialog box ke message ka text hota hai. Ye CharSequence object string, spannable text, ya koi bhi informative content ho sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@Nullable CharSequence message`,
                      des: `<p>"message" parameter ek CharSequence object hai, jisme hum dialog box ke message ka text specify kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },


  
            {
              dep: false,
              name: "setMessage",
              id: "setMessage(int)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setMessage(int)">setMessage</a>(@StringRes int messageId)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setMessage(int)">setMessage</a>(@StringRes int messageId)`,

              des: `Iska upyog karte hai AlertDialog ke message ko set karne ke liye, jahan message ko string resource ID ke dwara specify kiya jata hai.`,
              longDes: `<p>setMessage method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein ek message ko display karna chahte hai. Ye message typically dialog box ke title ke niche ya content ke sath dikhai jata hai aur user ko specific information ya instructions provide karta hai.</p>

              <p>"messageId" parameter ke dwara hum ek string resource ID ko specify kar sakte hai, jisse humare message ka source resource represent kiya jata hai. String resource typically res/values/strings.xml file mein sthit string ko refer karta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@StringRes int messageId`,
                      des: `<p>"messageId" parameter ek integer hai, jisse hum string resource ID ko represent karte hai. Is ID ke dwara hum dialog box ke message ka text specify kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },


  
            {
              dep: false,
              name: "setMultiChoiceItems",
              id: "setMultiChoiceItems(CharSequence,boolean,DialogInterface.OnMultiChoiceClickListener)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setMultiChoiceItems(CharSequence,boolean,DialogInterface.OnMultiChoiceClickListener)">setMultiChoiceItems</a>(
    CharSequence[] items,
    boolean[] checkedItems,
    DialogInterface.OnMultiChoiceClickListener listener
)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setMultiChoiceItems(CharSequence,boolean,DialogInterface.OnMultiChoiceClickListener)">setMultiChoiceItems</a>(
    CharSequence[] items,
    boolean[] checkedItems,
    DialogInterface.OnMultiChoiceClickListener listener
)`,

              des: ` Iska upyog karte hai AlertDialog ke dialog box mein multiple choice items (checkboxes ke sath) ko set karne ke liye.`,
              longDes: `
              <p>setMultiChoiceItems method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein multiple choice items ko display karna chahte hai, jahan har item ke sath ek checkbox hota hai. User ek ya adhik items ko select/unselect kar sakta hai.</p>

              <p>"items" parameter ke dwara hum ek CharSequence array ko specify kar sakte hai, jisme hum multiple choice items ko define karte hai. Ye items text, labels, ya koi bhi informative content ho sakta hai.</p>

              <p>"checkedItems" parameter ke dwara hum ek boolean array ko specify kar sakte hai, jisme hum selected items ke checked states ko indicate karte hai. True value indicate karta hai ki item selected hai, aur false value indicate karta hai ki item unselected hai.</p>
              
              <p>"listener" parameter ke dwara hum DialogInterface.OnMultiChoiceClickListener object ko set kar sakte hai, jisse hum item select/unselect events ko handle kar sakte hai. Jab user koi item ko select/unselect karta hai, onCheckedChanged method invoke hota hai, jisse hum us item ka action perform kar sakte hai.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence[] items`,
                      des: `<p>"items" parameter ek CharSequence array hai, jisme hum multiple choice items ko specify karte hai.</p>`,
                    },
                    {
                      dataTypeName: `boolean[] checkedItems`,
                      des: `<p>"checkedItems" parameter ek boolean array hai, jisme hum selected items ke checked states ko specify karte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnMultiChoiceClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnMultiChoiceClickListener object hai, jisse hum item select/unselect events ke liye set kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  

  
            {
              dep: false,
              name: "setMultiChoiceItems",
              id: "setMultiChoiceItems(int,boolean,DialogInterface.OnMultiChoiceClickListener)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setMultiChoiceItems(int,boolean,DialogInterface.OnMultiChoiceClickListener)">setMultiChoiceItems</a>(
                @ArrayRes int itemsId,
                boolean[] checkedItems,
                DialogInterface.OnMultiChoiceClickListener listener
            )`,
  
              fullCode: `public AlertDialog.Builder <a href="#setMultiChoiceItems(int,boolean,DialogInterface.OnMultiChoiceClickListener)">setMultiChoiceItems</a>(
                @ArrayRes int itemsId,
                boolean[] checkedItems,
                DialogInterface.OnMultiChoiceClickListener listener
            )`,

              des: ` Iska upyog karte hai AlertDialog ke dialog box mein multiple choice items (checkboxes ke sath) ko set karne ke liye, jahan items ko resource ID ke dwara specify kiya jata hai.`,
              longDes: `
              <p>setMultiChoiceItems method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein multiple choice items ko display karna chahte hai, jahan har item ke sath ek checkbox hota hai. User ek ya adhik items ko select/unselect kar sakta hai.</p>

              <p>"itemsId" parameter ke dwara hum ek Array resource ID ko specify kar sakte hai, jisse humare items ka source resource represent kiya jata hai. Array resource typically res/values/arrays.xml file mein sthit string array ko refer karta hai.</p>

              <p>"checkedItems" parameter ke dwara hum ek boolean array ko specify kar sakte hai, jisme hum selected items ke checked states ko indicate karte hai. True value indicate karta hai ki item selected hai, aur false value indicate karta hai ki item unselected hai.</p>
              
              <p>"listener" parameter ke dwara hum DialogInterface.OnMultiChoiceClickListener object ko set kar sakte hai, jisse hum item select/unselect events ko handle kar sakte hai. Jab user koi item ko select/unselect karta hai, onCheckedChanged method invoke hota hai, jisse hum us item ka action perform kar sakte hai.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@ArrayRes int itemsId`,
                      des: `<p>"itemsId" parameter ek integer hai, jisse hum Array resource ID ko represent karte hai. Is ID ke dwara hum multiple choice items ko specify kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `boolean[] checkedItems`,
                      des: `<p>"checkedItems" parameter ek boolean array hai, jisme hum selected items ke checked states ko specify karte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnMultiChoiceClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnMultiChoiceClickListener object hai, jisse hum item select/unselect events ke liye set kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "setMultiChoiceItems",
              id: "setMultiChoiceItems(Cursor,String,String,DialogInterface.OnMultiChoiceClickListener)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setMultiChoiceItems(Cursor,String,String,DialogInterface.OnMultiChoiceClickListener)">setMultiChoiceItems</a>(
    Cursor cursor,
    String isCheckedColumn,
    String labelColumn,
    DialogInterface.OnMultiChoiceClickListener listener
)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setMultiChoiceItems(Cursor,String,String,DialogInterface.OnMultiChoiceClickListener)">setMultiChoiceItems</a>(
    Cursor cursor,
    String isCheckedColumn,
    String labelColumn,
    DialogInterface.OnMultiChoiceClickListener listener
)`,

              des: ` Iska upyog karte hai AlertDialog ke dialog box mein multiple choice items (checkboxes ke sath) ko set karne ke liye, jahan items ko ek Cursor object ke dwara specify kiya jata hai.`,
              longDes: `
              <p>setMultiChoiceItems method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein multiple choice items ko display karna chahte hai, jahan har item ke sath ek checkbox hota hai. User ek ya adhik items ko select/unselect kar sakta hai.</p>

              <p>"cursor" parameter ke dwara hum ek Cursor object ko specify kar sakte hai, jisme humare items ka data sthit hota hai. Cursor object typically database ya query ke results se prapt kiya jata hai.</p>

              <p>"isCheckedColumn" parameter ke dwara hum ek String ko specify kar sakte hai, jisse hum checked states ke column name ko represent karte hai. Is column ke values se hum selected items ke checked states ko determine karte hai.</p>
              
              <p>"labelColumn" parameter ke dwara hum ek String ko specify kar sakte hai, jisse hum items ke label ke column name ko represent karte hai. Is column ke values se hum items ke labels ko determine karte hai.</p>
              
              <p>"listener" parameter ke dwara hum DialogInterface.OnMultiChoiceClickListener object ko set kar sakte hai, jisse hum item select/unselect events ko handle kar sakte hai. Jab user koi item ko select/unselect karta hai, onCheckedChanged method invoke hota hai, jisse hum us item ka action perform kar sakte hai.</p>

              <p>setMultiChoiceItems method ka upyog karke hum AlertDialog.Builder object ke dwara dialog box ke multiple choice items ko set kar sakte hai. Isse hum user ko multiple options provide kar sakte hai aur unki selection ko track kar sakte hai.</p>
              `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Cursor cursor`,
                      des: `<p>"cursor" parameter ek Cursor object hai, jisme hum multiple choice items ko represent karte hai.</p>`,
                    },
                    {
                      dataTypeName: `String isCheckedColumn`,
                      des: `<p>"isCheckedColumn" parameter ek String hai, jisse hum checked states ke column name ko specify karte hai.</p>`,
                    },
                    {
                      dataTypeName: `String labelColumn`,
                      des: `<p>"labelColumn" parameter ek String hai, jisse hum items ke label ke column name ko specify karte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnMultiChoiceClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnMultiChoiceClickListener object hai, jisse hum item select/unselect events ke liye set kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  




            {
              dep: false,
              name: "setNegativeButton",
              id: "setNegativeButton(CharSequence,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setNegativeButton(CharSequence,DialogInterface.OnClickListener)">setNegativeButton</a>(
    CharSequence text,
    DialogInterface.OnClickListener listener
)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setNegativeButton(CharSequence,DialogInterface.OnClickListener)">setNegativeButton</a>(
    CharSequence text,
    DialogInterface.OnClickListener listener
)`,

              des: `Iska upyog karte hai AlertDialog ke dialog box mein negative button ko set karne ke liye.`,

              longDes: `<p>setNegativeButton method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein ek negative button ko display karna chahte hai. Negative button typically "Cancel", "No", "Dismiss" jaise labels ke sath associated hota hai. Jab user negative button ko click karta hai, to dialog box dismiss ho jata hai aur negative button ka click event trigger hota hai.</p>
              
              <p>"text" parameter ke dwara hum negative button ka text specify kar sakte hai, jisse user ko button ka purpose pata chal jata hai. Ye text typically ek short phrase ya label hota hai.</p>

              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum negative button ka click event handle kar sakte hai. Jab user negative button ko click karta hai, onClick method invoke hota hai, jisse hum negative button ka action perform kar sakte hai, jaise dialog box dismiss karna.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence text`,
                      des: `<p>"text" parameter ek CharSequence object hai, jisme hum negative button ka text specify karte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum negative button ka click event handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  



            {
              dep: false,
              name: "setNegativeButton",
              id: "setNegativeButton(int,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setNegativeButton(int,DialogInterface.OnClickListener)">setNegativeButton</a>(
                @StringRes int textId,
                DialogInterface.OnClickListener listener
            )`,
  
              fullCode: `public AlertDialog.Builder <a href="#setNegativeButton(int,DialogInterface.OnClickListener)">setNegativeButton</a>(
                @StringRes int textId,
                DialogInterface.OnClickListener listener
            )`,

              des: `Iska upyog karte hai AlertDialog ke dialog box mein negative button ko set karne ke liye.`,

              longDes: `<p>setNegativeButton method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein ek negative button ko display karna chahte hai. Negative button typically "Cancel", "No", "Dismiss" jaise labels ke sath associated hota hai. Jab user negative button ko click karta hai, to dialog box dismiss ho jata hai aur negative button ka click event trigger hota hai.</p>
              
              <p>"textId" parameter ke dwara hum negative button ka text specify kar sakte hai, jisse user ko button ka purpose pata chal jata hai. Hum isme string resource ID ka upyog karte hai, jisse hum string resource file (strings.xml) se text retrieve kar sakte hai.</p>

              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum negative button ka click event handle kar sakte hai. Jab user negative button ko click karta hai, onClick method invoke hota hai, jisse hum negative button ka action perform kar sakte hai, jaise dialog box dismiss karna.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@StringRes int textId`,
                      des: `<p>"textId" parameter ek integer hai, jisse hum negative button ka text specify karte hai. Isme hum string resource ID ka upyog karte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum negative button ka click event handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "setNegativeButtonIcon",
              id: "setNegativeButtonIcon()",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setNegativeButtonIcon()">setNegativeButtonIcon</a>(Drawable icon)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setNegativeButtonIcon()">setNegativeButtonIcon</a>(Drawable icon)`,

              des: ` Iska upyog karte hai AlertDialog ke dialog box mein negative button ke liye ek icon (Drawable) ko set karne ke liye.`,
  
              longDes: `
                <p>setNegativeButtonIcon method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein negative button ke sath ek ikon (Drawable) ko display karna chahte hai. Ikon, typically ek chhota graphic hai jo negative button ko visually represent karta hai.<p>
  
                <p>"icon" parameter ke dwara hum negative button ke liye ek Drawable object ko specify kar sakte hai. Drawable object kisi bhi image, vector, ya shape ko represent karta hai. Isse hum negative button ke sath ikon ke roop mein koi graphic dikhana sakte hai, jisse user ko button ka purpose ya action samajhne mein madad milti hai.<p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Drawable icon`,
                      des: `<p>"icon" parameter ek Drawable object hai, jisse hum negative button ke liye ikon set kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },


  
           
            {
              dep: false,
              name: "setNeutralButton",
              id: "setNeutralButton(CharSequence,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setNeutralButton(CharSequence,DialogInterface.OnClickListener)">setNeutralButton</a>(
    CharSequence text,
    DialogInterface.OnClickListener listener
)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setNeutralButton(CharSequence,DialogInterface.OnClickListener)">setNeutralButton</a>(
    CharSequence text,
    DialogInterface.OnClickListener listener
)`,
              des: `Iska upyog karte hai AlertDialog ke dialog box mein neutral button ko set karne ke liye.`,

              longDes: 
              `<p>setNeutralButton method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein ek neutral button ko display karna chahte hai. Neutral button typically "Maybe", "Later", "Remind me" jaise labels ke sath associated hota hai. Jab user neutral button ko click karta hai, to dialog box dismiss ho jata hai aur neutral button ka click event trigger hota hai.</p>

              <p>"text" parameter ke dwara hum neutral button ka text specify kar sakte hai, jisse user ko button ka purpose pata chal jata hai. Ye text typically ek short phrase ya label hota hai.</p>

              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum neutral button ka click event handle kar sakte hai. Jab user neutral button ko click karta hai, onClick method invoke hota hai, jisse hum neutral button ka action perform kar sakte hai, jaise dialog box dismiss karna.</p>
              `,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence text`,
                      des: `<p>"text" parameter ek CharSequence object hai, jisme hum neutral button ka text specify karte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum neutral button ka click event handle kar sakte hai.</p>`,
                    },
                  ],
                },
                
              ],
            },
  
  
           
            {
              dep: false,
              name: "setNeutralButton",
              id: "setNeutralButton(int,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setNeutralButton(int,DialogInterface.OnClickListener)">setNeutralButton</a>(
    @StringRes int textId,
    DialogInterface.OnClickListener listener
)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setNeutralButton(int,DialogInterface.OnClickListener)">setNeutralButton</a>(
    @StringRes int textId,
    DialogInterface.OnClickListener listener
)`,
              des: `Iska upyog karte hai AlertDialog ke dialog box mein neutral button ko set karne ke liye.`,

              longDes: 
              `<p>setNeutralButton method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein ek neutral button ko display karna chahte hai. Neutral button typically "Maybe", "Later", "Remind me" jaise labels ke sath associated hota hai. Jab user neutral button ko click karta hai, to dialog box dismiss ho jata hai aur neutral button ka click event trigger hota hai.</p>

              <p>"textId" parameter ke dwara hum neutral button ka text specify kar sakte hai, jisse user ko button ka purpose pata chal jata hai. Hum isme string resource ID ka upyog karte hai, jisse hum string resource file (strings.xml) se text retrieve kar sakte hai.</p>

              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum neutral button ka click event handle kar sakte hai. Jab user neutral button ko click karta hai, onClick method invoke hota hai, jisse hum neutral button ka action perform kar sakte hai, jaise dialog box dismiss karna.</p>
              `,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@StringRes int textId`,
                      des: `<p>"textId" parameter ek integer hai, jisse hum neutral button ka text specify karte hai. Isme hum string resource ID ka upyog karte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum neutral button ka click event handle kar sakte hai.</p>`,
                    },
                  ],
                },
                
              ],
            },
  


            
            {
              dep: false,
              name: "setNeutralButtonIcon",
              id: "setNeutralButtonIcon()",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setNeutralButtonIcon()">setNeutralButtonIcon</a>(Drawable icon)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setNeutralButtonIcon()">setNeutralButtonIcon</a>(Drawable icon)`,

              des: `Iska upyog karte hai AlertDialog ke dialog box mein neutral button ke liye ek icon (Drawable) ko set karne ke liye.`,
  
              longDes: `
                <p>setNeutralButtonIcon method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein neutral button ke sath ek ikon (Drawable) ko display karna chahte hai. Ikon, typically ek chhota graphic hai jo neutral button ko visually represent karta hai.<p>
  
                <p>"icon" parameter ke dwara hum neutral button ke liye ek Drawable object ko specify kar sakte hai. Drawable object kisi bhi image, vector, ya shape ko represent karta hai. Isse hum neutral button ke sath ikon ke roop mein koi graphic dikhana sakte hai, jisse user ko button ka purpose ya action samajhne mein madad milti hai.<p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Drawable icon`,
                      des: `<p>"icon" parameter ek Drawable object hai, jisse hum neutral button ke liye ikon set kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },




            {
              dep: false,
              name: "setOnCancelListener",
              id: "setOnCancelListener()",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setOnCancelListener()">setOnCancelListener</a>(DialogInterface.OnCancelListener onCancelListener)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setOnCancelListener()">setOnCancelListener</a>(DialogInterface.OnCancelListener onCancelListener)`,

              des: `Iska upyog karte hai AlertDialog ke dialog box ke cancel event ko handle karne ke liye.`,

              longDes: `<p>setOnCancelListener method ka upyog hum karte hai jab hum AlertDialog ke dialog box ke cancel event ko monitor karna aur handle karna chahte hai. Cancel event tab trigger hota hai jab user dialog box ko cancel karta hai, jaise dialog box ko bahar click karke ya back button press karke.</p>

              <p>"onCancelListener" parameter ke dwara hum DialogInterface.OnCancelListener object ko set kar sakte hai, jisse hum dialog box ke cancel event ko handle kar sakte hai. Jab cancel event trigger hota hai, onCancel method invoke hota hai, jisse hum desired action perform kar sakte hai, jaise dialog box ko dismiss karna ya kuch aur action lena.</p>
              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `DialogInterface.OnCancelListener onCancelListener`,
                      des: `<p>"onCancelListener" parameter ek DialogInterface.OnCancelListener object hai, jisse hum dialog box ke cancel event ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
                
              ],
            },



            {
              dep: false,
              name: "setOnDismissListener",
              id: "setOnDismissListener()",
              dataTypeName: `AlertDialog.Builder`,
              code: `<a href="#setOnDismissListener()">setOnDismissListener</a>(
                DialogInterface.OnDismissListener onDismissListener
            )`,
  
              fullCode: `public AlertDialog.Builder <a href="#setOnDismissListener()">setOnDismissListener</a>(
                DialogInterface.OnDismissListener onDismissListener
            )`,

              des: `Iska upyog karte hai AlertDialog ke dialog box ke dismiss event ko handle karne ke liye.`,

              longDes: `<p>setOnDismissListener method ka upyog hum karte hai jab hum AlertDialog ke dialog box ke dismiss event ko monitor karna aur handle karna chahte hai. Dismiss event tab trigger hota hai jab user dialog box ko dismiss karta hai, jaise dialog box ke bahar click karke ya kisi button ka click karke.</p>

              <p>"onDismissListener" parameter ke dwara hum DialogInterface.OnDismissListener object ko set kar sakte hai, jisse hum dialog box ke dismiss event ko handle kar sakte hai. Jab dismiss event trigger hota hai, onDismiss method invoke hota hai, jisse hum desired action perform kar sakte hai, jaise kuch specific actions lena ya dialog box ke resource cleanup karna.</p>
              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `DialogInterface.OnDismissListener onDismissListener`,
                      des: `<p>"onDismissListener" parameter ek DialogInterface.OnDismissListener object hai, jisse hum dialog box ke dismiss event ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
                
              ],
            },




            {
              dep: false,
              name: "setOnItemSelectedListener",
              id: "setOnItemSelectedListener()",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setOnItemSelectedListener()">setOnItemSelectedListener</a>(AdapterView.OnItemSelectedListener listener)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setOnItemSelectedListener()">setOnItemSelectedListener</a>(AdapterView.OnItemSelectedListener listener)`,

              des: `Iska upyog karte hai AlertDialog ke dialog box mein AdapterView ke item select event ko handle karne ke liye.`,

              longDes: `<p>setOnItemSelectedListener method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein AdapterView ke item select event ko monitor karna aur handle karna chahte hai. Item select event tab trigger hota hai jab user AdapterView ke kisi item ko select karta hai, jaise ListView, Spinner, etc.</p>

              <p>"listener" parameter ke dwara hum AdapterView.OnItemSelectedListener object ko set kar sakte hai, jisse hum item select event ko handle kar sakte hai. Jab item select event trigger hota hai, onItemSelected method invoke hota hai, jisse hum selected item ke details aur desired actions perform kar sakte hai.</p>

              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `AdapterView.OnItemSelectedListener listener`,
                      des: `<p>"listener" parameter ek AdapterView.OnItemSelectedListener object hai, jisse hum item select event ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },


            {
              dep: false,
              name: "setOnKeyListener",
              id: "setOnKeyListener()",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setOnKeyListener()">setOnKeyListener</a>(DialogInterface.OnKeyListener onKeyListener)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setOnKeyListener()">setOnKeyListener</a>(DialogInterface.OnKeyListener onKeyListener)`,

              des: `Iska upyog karte hai AlertDialog ke dialog box ke key events ko handle karne ke liye.`,

              longDes: `<p>setOnKeyListener method ka upyog hum karte hai jab hum AlertDialog ke dialog box ke key events ko monitor karna aur handle karna chahte hai. Key events dialog box ke focus mein hai jab user keyboard se koi key press karta hai.</p>

              <p>"onKeyListener" parameter ke dwara hum DialogInterface.OnKeyListener object ko set kar sakte hai, jisse hum key events ko handle kar sakte hai. Jab koi key press event trigger hota hai, onKey method invoke hota hai, jisse hum pressed key ki details aur desired actions perform kar sakte hai.</p>

              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `DialogInterface.OnKeyListener onKeyListener`,
                      des: `<p>"onKeyListener" parameter ek DialogInterface.OnKeyListener object hai, jisse hum dialog box ke key events ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "setPositiveButton",
              id: "setPositiveButton(CharSequence,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setPositiveButton(CharSequence,DialogInterface.OnClickListener)">setPositiveButton</a>(
                CharSequence text,
                DialogInterface.OnClickListener listener
            )`,
  
              fullCode: `public AlertDialog.Builder <a href="#setPositiveButton(CharSequence,DialogInterface.OnClickListener)">setPositiveButton</a>(
                CharSequence text,
                DialogInterface.OnClickListener listener
            )`,

              des: `Iska upyog karte hai AlertDialog ke dialog box mein positive button ko set karne ke liye.`,

              longDes: `<p>setPositiveButton method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein positive button ko customize aur set karna chahte hai. Positive button ek button hota hai jo typically "OK" ya koi affirmative action ko represent karta hai.</p>

              <p>"text" parameter ke dwara hum positive button ka text set kar sakte hai, jisse user ko button ka purpose pata chal jata hai. "listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum positive button ke click event ko handle kar sakte hai. Jab positive button click event trigger hota hai, onClick method invoke hota hai, jisse hum desired actions perform kar sakte hai.</p>

              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence text`,
                      des: `<p>"text" parameter ek CharSequence object hai, jisme positive button ka text hota hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum positive button ke click event ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },



            {
              dep: false,
              name: "setPositiveButton",
              id: "setPositiveButton(int,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setPositiveButton(int,DialogInterface.OnClickListener)">setPositiveButton</a>(
                @StringRes int textId,
                DialogInterface.OnClickListener listener
            )`,
  
              fullCode: `public AlertDialog.Builder <a href="#setPositiveButton(int,DialogInterface.OnClickListener)">setPositiveButton</a>(
                @StringRes int textId,
                DialogInterface.OnClickListener listener
            )`,

              des: `Iska upyog karte hai AlertDialog ke dialog box mein positive button ko set karne ke liye.`,

              longDes: `<p>setPositiveButton method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein positive button ko customize aur set karna chahte hai. Positive button ek button hota hai jo typically "OK" ya koi affirmative action ko represent karta hai.</p>

              <p>"textId" parameter ke dwara hum positive button ka text resource ID set kar sakte hai, jisse user ko button ka purpose pata chal jata hai. "listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum positive button ke click event ko handle kar sakte hai. Jab positive button click event trigger hota hai, onClick method invoke hota hai, jisse hum desired actions perform kar sakte hai.</p>

              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@StringRes int textId,`,
                      des: `<p>"textId" parameter ek int value hai, jisme positive button ka text resource ID hota hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum positive button ke click event ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },




            {
              dep: false,
              name: "setPositiveButtonIcon",
              id: "setPositiveButtonIcon()",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setPositiveButtonIcon()">setPositiveButtonIcon</a>(Drawable icon)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setPositiveButtonIcon()">setPositiveButtonIcon</a>(Drawable icon)`,

              des: ` Iska upyog karte hai AlertDialog ke dialog box mein positive button ke liye icon (Drawable) ko set karne ke liye.`,

              longDes: `<p>setPositiveButtonIcon method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein positive button ke liye ek custom icon set karna chahte hai. Positive button icon ek graphical representation hoti hai jo button ke saath display hoti hai.</p>

              <p>"icon" parameter ke dwara hum positive button ke liye ek custom icon set kar sakte hai. Drawable object mein, hum ek image, vector drawable ya kisi bhi graphic resource ko use kar sakte hai. Isse positive button ko customize karke, uska appearance aur visual representation modify kar sakte hai.</p>

              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Drawable icon`,
                      des: `<p>"icon" parameter ek Drawable object hai, jisme positive button ke liye icon hota hai.</p>`,
                    }
                  ],
                },
              ],
            },
  


            {
              dep: false,
              name: "setSingleChoiceItems",
              id: "setSingleChoiceItems(ListAdapter,int,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setSingleChoiceItems(ListAdapter,int,DialogInterface.OnClickListener)">setSingleChoiceItems</a>(
                ListAdapter adapter,
                int checkedItem,
                DialogInterface.OnClickListener listener
            )`,
  
              fullCode: `public AlertDialog.Builder <a href="#setSingleChoiceItems(ListAdapter,int,DialogInterface.OnClickListener)">setSingleChoiceItems</a>(
                ListAdapter adapter,
                int checkedItem,
                DialogInterface.OnClickListener listener
            )`,

              des: `Iska upyog karte hai AlertDialog ke dialog box mein single choice items ko set karne ke liye, jahan ek hi item ko ek saath chunna (select) kiya ja sakta hai.`,

              longDes: `<p>setSingleChoiceItems method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein single choice items ko display karna chahte hai, jahan user ek hi item ko chun sakte hai. Isse typically radio buttons ka layout use hota hai, jahan ek hi item ko select karne ke liye radio buttons ka group banaya jata hai.</p>

              <p>"adapter" parameter ke dwara hum single choice items ko represent karne ke liye ek ListAdapter object set kar sakte hai. ListAdapter object mein, hum data source ko define karte hai jaise ki array, ArrayList, Cursor, etc., aur uske saath ek custom layout define karke items ko display karte hai.</p>

              <p>"checkedItem" parameter ke dwara hum default selected item ko specify kar sakte hai. Yadi koi item ko select karna pehle se hi pre-defined hai, to uska index "checkedItem" parameter mein specify kiya jata hai.</p>

              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum single choice items ke click events ko handle kar sakte hai. Jab koi item select kiya jata hai, onClick method invoke hota hai, jisse hum desired actions perform kar sakte hai.</p>

              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `ListAdapter adapter`,
                      des: `<p>"adapter" parameter ek ListAdapter object hai, jisse hum single choice items ko represent karte hai.</p>`,
                    },
                    {
                      dataTypeName: `int checkedItem`,
                      des: `<p>"checkedItem" parameter ek int value hai, jisse hum default selected item ko specify kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum single choice items ke click events ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: false,
              name: "setSingleChoiceItems",
              id: "setSingleChoiceItems(CharSequence,int,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setSingleChoiceItems(CharSequence,int,DialogInterface.OnClickListener)">setSingleChoiceItems</a>(
                CharSequence[] items,
                int checkedItem,
                DialogInterface.OnClickListener listener
            )`,
  
              fullCode: `public AlertDialog.Builder <a href="#setSingleChoiceItems(CharSequence,int,DialogInterface.OnClickListener)">setSingleChoiceItems</a>(
                CharSequence[] items,
                int checkedItem,
                DialogInterface.OnClickListener listener
            )`,

              des: `Iska upyog karte hai AlertDialog ke dialog box mein single choice items ko set karne ke liye, jahan ek hi item ko ek saath chunna (select) kiya ja sakta hai.`,

              longDes: `<p>setSingleChoiceItems method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein single choice items ko display karna chahte hai, jahan user ek hi item ko chun sakte hai. Isse typically radio buttons ka layout use hota hai, jahan ek hi item ko select karne ke liye radio buttons ka group banaya jata hai.</p>

              <p>"items" parameter ke dwara hum single choice items ko represent karne ke liye ek CharSequence array set kar sakte hai. Yeh array, dialog box mein display hone wale items ko contain karta hai.</p>

              <p>"checkedItem" parameter ke dwara hum default selected item ko specify kar sakte hai. Yadi koi item ko select karna pehle se hi pre-defined hai, to uska index "checkedItem" parameter mein specify kiya jata hai.</p>

              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum single choice items ke click events ko handle kar sakte hai. Jab koi item select kiya jata hai, onClick method invoke hota hai, jisse hum desired actions perform kar sakte hai.</p>

              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `CharSequence[] items,`,
                      des: `<p>"items" parameter ek CharSequence array hai, jisme hum single choice items ko represent karte hai.</p>`,
                    },
                    {
                      dataTypeName: `int checkedItem`,
                      des: `<p>"checkedItem" parameter ek int value hai, jisse hum default selected item ko specify kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum single choice items ke click events ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: false,
              name: "setSingleChoiceItems",
              id: "setSingleChoiceItems(int,int,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setSingleChoiceItems(int,int,DialogInterface.OnClickListener)">setSingleChoiceItems</a>(
                @ArrayRes int itemsId,
                int checkedItem,
                DialogInterface.OnClickListener listener
            )`,
  
              fullCode: `public AlertDialog.Builder <a href="#setSingleChoiceItems(int,int,DialogInterface.OnClickListener)">setSingleChoiceItems</a>(
                @ArrayRes int itemsId,
                int checkedItem,
                DialogInterface.OnClickListener listener
            )`,

              des: `Iska upyog AlertDialog ke dialog box mein single choice items ko set karne ke liye kiya jata hai, jahan ek hi item ko ek saath chuna (select) kiya ja sakta hai.`,

              longDes: `<p>setSingleChoiceItems method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein single choice items ko display karna chahte hai, jahan user ek hi item ko chun sakte hai. Isse typically radio buttons ka layout use hota hai, jahan ek hi item ko select karne ke liye radio buttons ka group banaya jata hai.</p>

              <p>"itemsId" parameter ke dwara hum single choice items ko represent karne wale string array resource ka ID specify kar sakte hai. Yeh resource, dialog box mein display hone wale items ko contain karta hai.</p>

              <p>"checkedItem" parameter ke dwara hum default selected item ko specify kar sakte hai. Yadi koi item ko select karna pehle se hi pre-defined hai, to uska index "checkedItem" parameter mein specify kiya jata hai.</p>

              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum single choice items ke click events ko handle kar sakte hai. Jab koi item select kiya jata hai, onClick method invoke hota hai, jisse hum desired actions perform kar sakte hai.</p>

              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@ArrayRes int itemsId`,
                      des: `<p>"itemsId" parameter ek int value hai, jisse hum single choice items ko represent karne wale string array resource ka ID specify kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `int checkedItem`,
                      des: `<p>"checkedItem" parameter ek int value hai, jisse hum default selected item ko specify kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum single choice items ke click events ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: false,
              name: "setSingleChoiceItems",
              id: "setSingleChoiceItems(Cursor,int,String,DialogInterface.OnClickListener)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setSingleChoiceItems(Cursor,int,String,DialogInterface.OnClickListener)">setSingleChoiceItems</a>(
                Cursor cursor,
                int checkedItem,
                String labelColumn,
                DialogInterface.OnClickListener listener
            )`,
  
              fullCode: `public AlertDialog.Builder <a href="#setSingleChoiceItems(Cursor,int,String,DialogInterface.OnClickListener)">setSingleChoiceItems</a>(
                Cursor cursor,
                int checkedItem,
                String labelColumn,
                DialogInterface.OnClickListener listener
            )`,

              des: `Iska upyog AlertDialog ke dialog box mein single choice items ko set karne ke liye kiya jata hai, jahan ek hi item ko ek saath chuna (select) kiya ja sakta hai.`,

              longDes: `<p>setSingleChoiceItems method ka upyog hum karte hai jab hum AlertDialog ke dialog box mein single choice items ko display karna chahte hai, jahan user ek hi item ko chun sakte hai. Isse typically radio buttons ka layout use hota hai, jahan ek hi item ko select karne ke liye radio buttons ka group banaya jata hai.</p>

              <p>"cursor" parameter ke dwara hum data source ke roop mein ek Cursor object provide kar sakte hai, jisse hum single choice items ko retrieve kar sakte hai. Cursor object mein data source se retrieve ki gayi rows aur columns hote hai. Each row represents a single choice item, and the specified column in the Cursor is used as the label for each item.</p>

              <p>"checkedItem" parameter ke dwara hum default selected item ko specify kar sakte hai. Yadi koi item ko select karna pehle se hi pre-defined hai, to uska index "checkedItem" parameter mein specify kiya jata hai.</p>

              <p>"labelColumn" parameter ke dwara hum specify kar sakte hai ki kaunsa column Cursor mein item labels ke liye use karna hai. Yeh column har ek item ke label ko represent karta hai.</p>

              <p>"listener" parameter ke dwara hum DialogInterface.OnClickListener object ko set kar sakte hai, jisse hum single choice items ke click events ko handle kar sakte hai. Jab koi item select kiya jata hai, onClick method invoke hota hai, jisse hum desired actions perform kar sakte hai.</p>

              <p>Method ka return type AlertDialog.Builder hai, jisse method chaining kiya ja sakta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Cursor cursor`,
                      des: `<p>"cursor" parameter ek Cursor object hai, jisse hum data source ke roop mein ek Cursor se single choice items ko retrieve kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `int checkedItem`,
                      des: `<p>"checkedItem" parameter ek int value hai, jisse hum default selected item ko specify kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `String labelColumn`,
                      des: `<p>"labelColumn" parameter ek String hai, jisse hum Cursor mein kaunsa column item label ke liye use karna hai woh specify kar sakte hai.</p>`,
                    },
                    {
                      dataTypeName: `DialogInterface.OnClickListener listener`,
                      des: `<p>"listener" parameter ek DialogInterface.OnClickListener object hai, jisse hum single choice items ke click events ko handle kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: false,
              name: "setTitle",
              id: "setTitle(CharSequence)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setTitle(CharSequence)">setTitle</a>(@Nullable CharSequence title)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setTitle(CharSequence)">setTitle</a>(@Nullable CharSequence title)`,

              des: `Iska upyog AlertDialog ke dialog box mein title ko set karne ke liye kiya jata hai.`,

              longDes: `<p>Iska upyog AlertDialog ke dialog box mein title ko set karne ke liye kiya jata hai.</p>

              <p>Jab hum is method ko use karte hai aur title parameter mein text provide karte hai, to AlertDialog ke dialog box mein diya gaya title text set ho jata hai. Isse user ko dialog box ka heading pata chal jata hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@Nullable CharSequence title`,
                      des: `<p>Jab hum is method ko use karte hai aur title parameter mein text provide karte hai, to AlertDialog ke dialog box mein diya gaya title text set ho jata hai.</p>`,
                    },
                  ],
                },
              ],
            },

            {
              dep: false,
              name: "setTitle",
              id: "setTitle(int)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setTitle(int)">setTitle</a>(@StringRes int titleId)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setTitle(int)">setTitle</a>(@StringRes int titleId)`,

              des: `Iska upyog AlertDialog ke dialog box mein title ko set karne ke liye kiya jata hai.`,

              longDes: `<p>Iska upyog AlertDialog ke dialog box mein title ko set karne ke liye kiya jata hai.</p>

              <p>Jab hum is method ko use karte hai aur titleId parameter mein resource ID provide karte hai, to AlertDialog ke dialog box mein diya gaya title text set ho jata hai. Android runtime dialog box ke title text ko string resource file se retrieve karke dialog box mein display karta hai.</p>`,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@StringRes int titleId`,
                      des: `<p>Jab hum is method ko use karte hai aur titleId parameter mein resource ID provide karte hai, to AlertDialog ke dialog box mein diya gaya title text set ho jata hai. </p>`,
                    },
                  ],
                },
              ],
            },


            {
              dep: false,
              name: "setView",
              id: "setView(int)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setView(int)">setView</a>(int layoutResId)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setView(int)">setView</a>(int layoutResId)`,

              des: `Iska upyog AlertDialog ke dialog box mein custom layout resource ko set karne ke liye kiya jata hai.`,

              longDes: `<p>Iska upyog AlertDialog ke dialog box mein custom layout resource ko set karne ke liye kiya jata hai.</p>

              <p>Method mein layoutResId parameter ek int value hai, jisme hum apne custom layout ka resource ID specify kar sakte hai. Custom layout, XML file ke roop mein define kiya gaya hota hai aur dialog box mein dikhane ke liye components, views, aur unki arrangement ka design provide karta hai.</p>

              <p>Jab hum is method ko use karte hai aur layoutResId parameter mein resource ID provide karte hai, to AlertDialog ke dialog box mein diya gaya custom layout inflate (load) ho jata hai aur dialog box mein display kiya jata hai.</p>

              <p>setView method ke dwara hum dialog box mein ek custom layout set karke text, buttons, images, form fields, ya kisi aur component ko dialog box ke sath jod sakte hai. Isse hum user ko kisi specific task ke liye input lena ya kisi information ko display karna ka mauka dete hai.</p>
              `,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int layoutResId`,
                      des: `<p>Method mein layoutResId parameter ek int value hai, jisme hum apne custom layout ka resource ID specify kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  

            {
              dep: false,
              name: "setView",
              id: "setView(View)",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#setView(View)">setView</a>(View view)`,
  
              fullCode: `public AlertDialog.Builder <a href="#setView(View)">setView</a>(View view)`,

              des: `Iska upyog AlertDialog ke dialog box mein ek custom View ko set karne ke liye kiya jata hai.`,

              longDes: `<p>Iska upyog AlertDialog ke dialog box mein ek custom View ko set karne ke liye kiya jata hai.</p>

              <p>Method mein view parameter ek View object hai, jisme hum apne custom View element ko specify kar sakte hai. Custom View, UI components aur unki arrangement ka design provide karta hai.</p>

              <p>Jab hum is method ko use karte hai aur view parameter mein custom View object provide karte hai, to AlertDialog ke dialog box mein diya gaya custom View inflate (load) ho jata hai aur dialog box mein display kiya jata hai.</p>

              <p>setView method ke dwara hum dialog box mein ek custom View set karke text, buttons, images, form fields, ya kisi aur component ko dialog box ke sath jod sakte hai. Isse hum user ko kisi specific task ke liye input lena ya kisi information ko display karna ka mauka dete hai.</p>
              `,
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `View view`,
                      des: `<p>Method mein view parameter ek View object hai, jisme hum apne custom View element ko specify kar sakte hai.</p>`,
                    },
                  ],
                },
              ],
            },
  
  

            {
              dep: false,
              name: "show",
              id: "show()",
              dataTypeName: `AlertDialog.Builder`,

              code: `<a href="#show()">show</a>()`,
  
              fullCode: `public AlertDialog.Builder <a href="#show()">show</a>()`,

              des: `Iska upyog AlertDialog ko display karne ke liye kiya jata hai.`,

              longDes: `<p>Iska upyog AlertDialog ko display karne ke liye kiya jata hai.</p>

              <p>Jab hum AlertDialog.Builder ka show() method ko call karte hai, to isse AlertDialog object ko create kiya jata hai aur use display kiya jata hai. AlertDialog, screen par visible ho jata hai aur user interaction ke liye taiyar ho jata hai.</p>

              <p>show() method ka upyog karte waqt, AlertDialog.Builder ke sabhi previously set kiye gaye properties, jaise title, message, buttons, icon, custom views, etc., AlertDialog object mein apply ho jate hai. Phir hum ise show() method ke dwara display kar sakte hai.</p>

              <p>Is method ka upyog karke hum AlertDialog ko screen par visible kar sakte hai, jisse user uske content aur interaction options tak pahuch sakte hai. AlertDialog ko show karne ke baad, hum user ke actions aur events ko handle karne ke liye listeners bhi register kar sakte hai.</p>
              `,
              parameter: [],
            },
  
          ],
        },
  
      },
    });
  };
  