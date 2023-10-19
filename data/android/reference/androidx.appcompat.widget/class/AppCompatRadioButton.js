module.exports.AppCompatRadioButton = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatRadioButton",
      hCode: `public class <a href="#AppCompatRadioButton">AppCompatRadioButton</a>  extends RadioButton implements TintableCompoundButton, TintableBackgroundView, EmojiCompatConfigurationView, TintableCompoundDrawablesView`,
  
      des: 
        `
        <p>Ye class, RadioButton widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatRadioButton class, RadioButton class ka subclass hai aur AppCompatCompoundButton class se inherit karti hai. Iska use multiple options ke beech se single option select karne ke liye kiya jata hai.</p>
  
       
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
              name: `AppCompatRadioButton`,
              id: "AppCompatRadioButton(Context)",
              code: `AppCompatRadioButton(Context context)`,
              fullCode: `public AppCompatRadioButton(Context context)`,

              des: `Ye constructor, AppCompatRadioButton view ko initialize karne ke liye hota hai.`,

              longDes: `
              <p>Ye constructor, AppCompatRadioButton view ko initialize karne ke liye hota hai. Is constructor ko use karke aap ek naya AppCompatRadioButton object create kar sakte hain. Isme aapko context object provide karna hota hai, jisse view ko inflate karne mein madad milti hai aur resources ko access karne ke liye use hota hai.</p>

              <p>AppCompatRadioButton ek hissa hai Android Support Library (ab AndroidX ke naam se jana jata hai) ka, jo Android framework ke compatibility ke liye provide kiya gaya hai. Ye class RadioButton class ka ek enhanced version hai, jise older Android versions mein bhi consistent tarike se use kiya ja sakta hai. RadioButton view, user se ek choice select karne ke liye options ko display karta hai aur user ek hi option ko ek samay mein select kar sakta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap constructor ko call kar rahe hain. Context, view ko inflate karne aur resources ko access karne ke liye use hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: `AppCompatRadioButton`,
              id: "AppCompatRadioButton(Context,AttributeSet)",
              code: `AppCompatRadioButton(Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public AppCompatRadioButton(Context context, @Nullable AttributeSet attrs)`,

              des: `Ye constructor, AppCompatRadioButton view ko XML layout file se inflate karne aur initialize karne ke liye hota hai.`,

              longDes: `
              <p>Ye constructor, AppCompatRadioButton view ko XML layout file se inflate karne aur initialize karne ke liye hota hai. Jab aap AppCompatRadioButton view ko XML layout file mein define karte hain, to ye constructor internally use hota hai view ko inflate karne ke liye.</p>

              <p>AppCompatRadioButton ek hissa hai Android Support Library (ab AndroidX ke naam se jana jata hai) ka, jo Android framework ke compatibility ke liye provide kiya gaya hai. Ye class RadioButton class ka ek enhanced version hai, jise older Android versions mein bhi consistent tarike se use kiya ja sakta hai. RadioButton view, user se ek choice select karne ke liye options ko display karta hai aur user ek hi option ko ek samay mein select kar sakta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap constructor ko call kar rahe hain. Context, view ko inflate karne aur resources ko access karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jisse XML attributes ko represent kiya jata hai. Isse view ke XML attributes ko extract karne ke liye use kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: `AppCompatRadioButton`,
              id: "AppCompatRadioButton(Context,AttributeSet,int)",
              code: `AppCompatRadioButton(
                Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public AppCompatRadioButton(
                Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Ye constructor, AppCompatRadioButton view ko XML layout file se inflate karne aur initialize karne ke liye hota hai, sath hi sath default style attributes ko apply karne mein madad karta hai.`,

              longDes: `
              <p>Ye constructor, AppCompatRadioButton view ko XML layout file se inflate karne aur initialize karne ke liye hota hai. Is constructor ko use karke aap ek naya AppCompatRadioButton object create kar sakte hain aur use XML layout file mein define ki gayi attributes ke sath initialize kar sakte hain.</p>

              <p>Is constructor mein ek aur fayda hai - aap defStyleAttr parameter ke through default style attributes ko apply kar sakte hain. Jab aap defStyleAttr parameter ko specify karte hain, tab AppCompatRadioButton view ko XML attributes se related default style attributes automatically apply ho jate hain. Agar aapne XML layout file mein kisi attribute ka value specify nahi kiya hai, to us attribute ke liye default value default style attributes se apply ho jayega.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Ye parameter ek Context object hai, jise aap constructor ko call kar rahe hain. Context, view ko inflate karne aur resources ko access karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jisse XML attributes ko represent kiya jata hai. Isse view ke XML attributes ko extract karne ke liye use kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye parameter ek integer value hai, jo default style attribute resource ID ko represent karta hai. Isse view ko XML attributes ke liye default style attributes apply karne mein madad milti hai.</p>`,
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
              name: "getCompoundPaddingLeft",
              id: "getCompoundPaddingLeft()",
              dataTypeName: `int`,
              code: `<a href="#getCompoundPaddingLeft()">getCompoundPaddingLeft</a>()`,
  
              fullCode: `public int <a href="#getCompoundPaddingLeft()">getCompoundPaddingLeft</a>()`,

              des: `Ye method, AppCompatRadioButton view ke left side mein padding ke liye ek calculated value return karta hai.`,
  
              longDes: `
              <p>getCompoundPaddingLeft() method, AppCompatRadioButton view ke left side mein padding ke liye ek calculated value return karta hai. Is padding ke madhyam se view ke text aur compound drawables (agar koi present hai) ke bich mein space diya jata hai. Compound drawables, RadioButton ke left, top, right, aur bottom sides par set kiye ja sakte hain.</p>

              <p>Jab aap AppCompatRadioButton view mein kuchh text aur left side par koi compound drawable set karte hain, to text ke left side par spacing chahiye hoti hai, jisse text aur compound drawable ke beech mein space ho. getCompoundPaddingLeft() method ka use is space ko calculate karne ke liye kiya jata hai.</p>
  
              <p>getCompoundPaddingLeft() method ek integer value return karta hai, jo left side padding ka calculated value hota hai. Is value ko aap padding ke taur par istemal kar sakte hain.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "isEmojiCompatEnabled",
              id: "isEmojiCompatEnabled()",
              dataTypeName: `boolean`,
              code: `<a href="#isEmojiCompatEnabled()">isEmojiCompatEnabled</a>()`,
  
              fullCode: `public boolean <a href="#isEmojiCompatEnabled()">isEmojiCompatEnabled</a>()`,

              des: `ye method, EmojiCompat support ke presence ko check karne ke liye hota hai.`,
  
              longDes: `
              <p>isEmojiCompatEnabled() method, EmojiCompat support ke presence ko check karne ke liye hota hai. Is method ka return value true hota hai agar EmojiCompat library present hai, nahi toh false hota hai.</p>

              <p>isEmojiCompatEnabled() method ka return value boolean hai, jo true hota hai agar EmojiCompat library available hai, nahi toh false hota hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "setAllCaps",
              id: "setAllCaps()",
              dataTypeName: `void`,
              code: `<a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,
  
              fullCode: `public void <a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,

              des: `ye  method, RadioButton ke text ko uppercase (sabhi capital alphabets) mein display karne ke liye use hota hai.`,
  
              longDes: `
              <p>setAllCaps(boolean allCaps) method ka use karte hain, jab hamein AppCompatRadioButton ke text mein uppercase (sabhi alphabets ko capital letters me) formatting ko enable ya disable karna hota hai.</p>

              <p>Jab aap is method ko true ke sath call karte hain (setAllCaps(true)), to AppCompatRadioButton ke text ke sabhi alphabets uppercase mein dikhayi denge. Agar aap is method ko false ke sath call karte hain (setAllCaps(false)), to text normal case mein rahega, jaisa ki aapne use kiya hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean allCaps`,
                        des:`<p>Ye parameter ek boolean value hai, jo text ke uppercase formatting ko enable (true) ya disable (false) karne ke liye use hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setBackgroundDrawable",
              id: "setBackgroundDrawable()",
              dataTypeName: `void`,
              code: `<a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable background)`,
  
              fullCode: `public void <a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable background)`,

              des: `Is method ka use, AppCompatRadioButton ke background drawable ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use karte hain, jab hamein AppCompatRadioButton ke background mein kisi bhi Drawable resource ko set karna hota hai. Background Drawable ek image, shape, color, ya gradient ho sakta hai.</p>

              <p>Is method ki madad se aap AppCompatRadioButton ke background ko customize kar sakte hain, jisse aapke radio button ko aapke design requirements ke anuroop dikhaya ja sake.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke background mein set kiya jata hai. Is parameter mein aap kisi bhi valid Drawable resource ko pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setBackgroundResource",
              id: "setBackgroundResource()",
              dataTypeName: `void`,
              code: `<a href="#setBackgroundResource()">setBackgroundResource</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setBackgroundResource()">setBackgroundResource</a>(@DrawableRes int resId)`,

              des: `Is method ka use, AppCompatRadioButton ke background mein ek drawable resource ID ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use karte hain, jab hamein AppCompatRadioButton ke background mein kisi bhi drawable resource ID ko set karna hota hai. Background drawable resource ek image, shape, color, ya gradient resource ho sakta hai.</p>

              <p>Is method ki madad se aap AppCompatRadioButton ke background ko customize kar sakte hain, jisse aapke radio button ko aapke design requirements ke anuroop dikhaya ja sake.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ye parameter ek int value hai, jo drawable resource ID ko represent karta hai. Is parameter mein aap kisi bhi valid drawable resource ID ko pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setButtonDrawable",
              id: "setButtonDrawable(Drawable)",
              dataTypeName: `void`,
              code: `<a href="#setButtonDrawable(Drawable)">setButtonDrawable</a>(Drawable buttonDrawable)`,
  
              fullCode: `public void <a href="#setButtonDrawable(Drawable)">setButtonDrawable</a>(Drawable buttonDrawable)`,

              des: `Is method ka use, AppCompatRadioButton ke RadioButton ke button (tick mark) ke drawable ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use karte hain, jab hamein AppCompatRadioButton ke button drawable ko customize karna hota hai. Yani ki aap RadioButton ke tick mark ko apne khud ke design ke anusar badal sakte hain.</p>

              <p>Is method ki madad se aap kisi bhi Drawable resource ko AppCompatRadioButton ke button drawable ke roop mein set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable buttonDrawable`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke button drawable ke roop mein set kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setButtonDrawable",
              id: "setButtonDrawable(int)",
              dataTypeName: `void`,
              code: `<a href="#setButtonDrawable(int)">setButtonDrawable</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setButtonDrawable(int)">setButtonDrawable</a>(@DrawableRes int resId)`,

              des: `Is method ka use, AppCompatRadioButton ke RadioButton ke button (tick mark) ke drawable resource ID ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>Is method ka use karte hain, jab hamein AppCompatRadioButton ke button drawable ko customize karna hota hai. Yani ki aap RadioButton ke tick mark ko kisi drawable resource ID se set kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ye parameter ek int value hai, jo drawable resource ID ko represent karta hai. Is parameter mein aap kisi bhi valid drawable resource ID ko pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setCompoundDrawables",
              id: "setCompoundDrawables()",
              dataTypeName: `void`,
              code: `<a href="#setCompoundDrawables()">setCompoundDrawables</a>(
                @Nullable Drawable left,
                @Nullable Drawable top,
                @Nullable Drawable right,
                @Nullable Drawable bottom
            )`,
  
              fullCode: `public void <a href="#setCompoundDrawables()">setCompoundDrawables</a>(
                @Nullable Drawable left,
                @Nullable Drawable top,
                @Nullable Drawable right,
                @Nullable Drawable bottom
            )`,

              des: `Is method ka use, AppCompatRadioButton ke text ke saath compound drawables (images) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>is method ka use karte hain, jab hamein AppCompatRadioButton ke text ke saath compound drawables ko set karna hota hai. Compound drawables, text ke chaaron taraf ek se adhik images hote hain, jo text ke saath combine hote hain aur AppCompatRadioButton ke visual representation ko enhance karte hain.</p>

              <p>Is method ki madad se aap AppCompatRadioButton ke text ke left, top, right, aur bottom me kisi bhi Drawable resource ko set kar sakte hain. Aap ek Drawable object ko left parameter mein, dusre ko top parameter mein, tisre ko right parameter mein, aur chauthe ko bottom parameter mein pass kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable left`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke text ke left side mein set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke text ke top side mein set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable right`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke text ke right side mein set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke text ke bottom side mein set kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setCompoundDrawablesRelative",
              id: "setCompoundDrawablesRelative()",
              dataTypeName: `void`,
              code: `<a href="#setCompoundDrawablesRelative()">setCompoundDrawablesRelative</a>(
                @Nullable Drawable start,
                @Nullable Drawable top,
                @Nullable Drawable end,
                @Nullable Drawable bottom
            )`,
  
              fullCode: `@RequiresApi(value = Build.VERSION_CODES.JELLY_BEAN_MR1)</br>public void <a href="#setCompoundDrawablesRelative()">setCompoundDrawablesRelative</a>(
                @Nullable Drawable start,
                @Nullable Drawable top,
                @Nullable Drawable end,
                @Nullable Drawable bottom
            )`,

              des: `Is method ka use, AppCompatRadioButton ke text ke saath compound drawables (images) ko set karne ke liye hota hai, lekin ismein left aur right positions ko relative layout rules ke according define kiya jata hai.`,
  
              longDes: `
              <p>is method ka use karte hain, jab hamein AppCompatRadioButton ke text ke saath compound drawables ko set karna hota hai. Is method mein, start, top, end, aur bottom positions ko relative layout rules ke hisab se define kiya jata hai. Yani ki, agar device ka layout direction Left-to-Right (LTR) hai, to start position left side hoga aur end position right side hoga. Agar layout direction Right-to-Left (RTL) hai, to positions ka order opposite ho jayega, yani start position right side hoga aur end position left side hoga.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable start`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke text ke start (left) side mein set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke text ke top side mein set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable end`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke text ke end (right) side mein set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Ye parameter ek Drawable object hai, jo AppCompatRadioButton ke text ke bottom side mein set kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setEmojiCompatEnabled",
              id: "setEmojiCompatEnabled()",
              dataTypeName: `void`,
              code: `<a href="#setEmojiCompatEnabled()">setEmojiCompatEnabled</a>(boolean enabled)`,
  
              fullCode: `public void <a href="#setEmojiCompatEnabled()">setEmojiCompatEnabled</a>(boolean enabled)`,

              des: `Ye method, AppCompatRadioButton view mein Emoji Compatibility feature ko enable ya disable karne ke liye hota hai.`,
  
              longDes: `
              <p>ye method, AppCompatRadioButton view mein Emoji Compatibility feature ko enable ya disable karne ke liye hota hai. Emoji Compatibility feature ka use emojis ke sahi tarike se rendering ko ensure karne ke liye hota hai. Older Android versions mein, emojis ka rendering sometimes inconsistent ho sakta hai, lekin Emoji Compatibility support ke saath, emojis ko uniform tarike se display kiya jata hai, taki unke designs sahi tarah se dikhayi dein.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>Ek boolean value, jiska use EmojiCompat support ko enable ya disable karne ke liye kiya jata hai. Agar enabled true hai, to EmojiCompat support enable hoga, aur agar enabled false hai, to EmojiCompat support disable hoga.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setFilters",
              id: "setFilters()",
              dataTypeName: `void`,
              code: `<a href="#setFilters()">setFilters</a>(@NonNull InputFilter[] filters)`,
  
              fullCode: `public void <a href="#setFilters()">setFilters</a>(@NonNull InputFilter[] filters)`,

              des: `setFilters() method ka use RadioButton ke text par lagu kiye jane wale filters ko set karne ke liye hota hai. `,
  
              longDes: `
              <p>setFilters() method ka use RadioButton ke text par lagu kiye jane wale filters ko set karne ke liye hota hai. Aap is method mein ek InputFilter array provide karte hain, jisme ek se zyada filters ho sakte hain. In filters ko RadioButton ke text par apply kiya jata hai aur text ke corresponding changes ya restrictions implement hote hain.</p>

              <p>InputFilter, Android mein text ko manipulate karne ke liye ek interface hai. Iska use text mein specific rules aur constraints lagane ke liye hota hai. InputFilter ka upayog kisi bhi text entry ko validate, modify, ya limit karne ke liye kiya ja sakta hai. Jaise ki, aap text ki length ko limit kar sakte hain, kuch specific characters ko allow ya disallow kar sakte hain, ya phir text mein kisi pattern ko validate kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull InputFilter[] filters`,
                        des:`<p>InputFilter array, jisme ek se zyada filters hote hain, jinhe RadioButton ke text par apply kiya jata hai.</p>`,
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
              name: "drawableStateChanged",
              id: "drawableStateChanged()",
              dataTypeName: `void`,
              code: `<a href="#drawableStateChanged()">drawableStateChanged</a>()`,
  
              fullCode: `protected void <a href="#drawableStateChanged()">drawableStateChanged</a>()`,
  
              des: `Is method ka use view ke state changes ke sath drawable resources (jaise ki backgrounds, tints, etc.) ke state changes ko handle karne ke liye hota hai. `,
  
              longDes: `
                <p>drawableStateChanged() method ka main use, view ke state changes ke sath usme use kiye gaye drawable resources (jaise ki backgrounds, tints, etc.) ke state changes ko handle karna hota hai. Jab bhi view ka state change hota hai, jaise ki view focused, pressed, enabled, disabled, etc., to is method ko automatically call kiya jata hai.</p>
                    `,
  
              parameter: [],
            },
  

          ],
        },
  
  
     
  

      },
    });
  };
  