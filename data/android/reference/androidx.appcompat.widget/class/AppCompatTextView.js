module.exports.AppCompatTextView = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatTextView",
      hCode: `public class <a href="#AppCompatTextView">AppCompatTextView</a>  extends TextView implements TintableBackgroundView, TintableCompoundDrawablesView, EmojiCompatConfigurationView`,
  
      des: 
        `
        <p>Ye class, TextView widget ka AppCompat version hai, jo backward compatibility ko support karta ha</p>
        
  
        <p>AppCompatTextView class, TextView class ka subclass hai aur AppCompatTextViewAutoSizeHelper ke sath inherit karti hai. Iska use text ko display karne ke liye kiya jata hai, jahan hum text styling, theme, font, etc., ko AppCompat library ke features ke saath control kar sakte hain.</p>
  
       
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
              name: `AppCompatTextView`,
              id: "AppCompatTextView(Context)",
              code: `<a href="#AppCompatTextView(Context)">AppCompatTextView</a>(@NonNull Context context)`,
              fullCode: `public <a href="#AppCompatTextView(Context)">AppCompatTextView</a>(@NonNull Context context)`,

              des: `Ye constructor, AppCompatTextView ka ek instance (object) create karne ke liye use hota hai.`,

              longDes: `
              <p>Is constructor ke through, hum AppCompatTextView ka ek object create kar sakte hain. Is object ko use karke hum TextView ke saare standard features aur properties ko backward compatibility ke saath utilize kar sakte hain.</p>

              <p>AppCompatTextView class, TextView class ko extend karti hai, isliye isme TextView ke saare features, jaise text display, styling, text color, text size, gravity, etc., mojud hote hain. Lekin isme ek badi advantage hota hai ki ye purane Android versions par bhi sahi tarike se kaam karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>View ko inflate karne ke liye Context object.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatTextView`,
              id: "AppCompatTextView(Context,AttributeSet)",
              code: `<a href="#AppCompatTextView(Context,AttributeSet)">AppCompatTextView</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public <a href="#AppCompatTextView(Context,AttributeSet)">AppCompatTextView</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Is constructor ke through, hum AppCompatTextView ka ek object create kar sakte hain.`,

              longDes: `
              <p>Is constructor ke through, hum AppCompatTextView ka ek object create kar sakte hain. Is object ko use karke hum TextView ke saare standard features aur properties ko backward compatibility ke saath utilize kar sakte hain. Is constructor mein attrs parameter ke zariye hum XML layout file mein specify kiye gaye attributes ko read kar sakte hain aur uske corresponding TextView object ko customize kar sakte hain.</p>

              <p>AppCompatTextView class, TextView class ko extend karti hai, isliye isme TextView ke saare features, jaise text display, styling, text color, text size, gravity, etc., maujud hote hain. Lekin isme ek badi advantage hota hai ki ye purane Android versions par bhi sahi tarike se kaam karta hai aur AppCompatTextView ko hum XML layout file mein bhi use kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>View ko inflate karne ke liye Context object.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatTextView`,
              id: "AppCompatTextView(Context,AttributeSet,int)",
              code: `<a href="#AppCompatTextView(Context,AttributeSet,int)">AppCompatTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public <a href="#AppCompatTextView(Context,AttributeSet,int)">AppCompatTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Is constructor ke through, hum AppCompatTextView ka ek object create kar sakte hain.`,

              longDes: `
              <p>Is constructor ke through, hum AppCompatTextView ka ek object create kar sakte hain. Is object ko use karke hum TextView ke saare standard features aur properties ko backward compatibility ke saath utilize kar sakte hain. Is constructor mein attrs parameter ke zariye hum XML layout file mein specify kiye gaye attributes ko read kar sakte hain aur uske corresponding TextView object ko customize kar sakte hain. defStyleAttr parameter se hum default style resource ID specify kar sakte hain, jisse AppCompatTextView apne default style ko apply karega.</p>

              <p>AppCompatTextView class, TextView class ko extend karti hai, isliye isme TextView ke saare features, jaise text display, styling, text color, text size, gravity, etc., maujud hote hain. Lekin isme ek badi advantage hota hai ki ye purane Android versions par bhi sahi tarike se kaam karta hai aur AppCompatTextView ko hum XML layout file mein bhi use kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>View ko inflate karne ke liye Context object.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>View ke XML attributes ko represent karne wala AttributeSet object.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Default style attribute resource ID.</p>`,
                      },
                    ],
                  },
              ],
            },
          ],
        },


        ///
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "getCustomSelectionActionModeCallback",
              id: "getCustomSelectionActionModeCallback()",
              dataTypeName: `@Nullable ActionMode.Callback`,
              code: `<a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,
  
              fullCode: `public @Nullable ActionMode.Callback <a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,

              des: `getCustomSelectionActionModeCallback() method ka use, custom selection action mode callback ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getCustomSelectionActionModeCallback() method, AppCompatTextView ke custom selection action mode callback ko retrieve karne ke liye use hota hai. Jab aap AppCompatTextView mein long press karke text select karte hain aur selection action mode activate hota hai, toh system pehle getCustomSelectionActionModeCallback() method ko check karta hai. Agar yeh method null return karta hai, toh default action mode behavior apply hota hai. Lekin agar yeh method non-null callback return karta hai, toh system us custom callback ko use karke action mode behavior ko customize karta hai.</p>

              <p>getCustomSelectionActionModeCallback() method ka return type ActionMode.Callback hota hai. Yeh callback, ActionMode interface ko implement karta hai, jisme aap text selection action mode events ko handle kar sakte hain</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getFirstBaselineToTopHeight",
              id: "getFirstBaselineToTopHeight()",
              dataTypeName: `int`,
              code: `<a href="#getFirstBaselineToTopHeight()">getFirstBaselineToTopHeight</a>()`,
  
              fullCode: `public int <a href="#getFirstBaselineToTopHeight()">getFirstBaselineToTopHeight</a>()`,

              des: `getFirstBaselineToTopHeight() method, TextView ke first baseline se top edge tak ki height ko pixels mein retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getFirstBaselineToTopHeight() method, AppCompatTextView ke first baseline se top edge tak ki height ko pixels mein retrieve karne ke liye use hota hai. First baseline, text ka pehla line hota hai jiska position text ke height mein hota hai. Top edge, AppCompatTextView ke text ka shuruvaat ka position hota hai.</p>

              <p>Yeh method, text ko render karne ke liye kaafi upyogi hota hai, jaise agar aap text ko vertically center karne ke liye layout kar rahe hain ya fir text ke saath kisi graphic element ko align karna chahte hain.</p>

              <p>getFirstBaselineToTopHeight() method ka return type int hota hai, yani ki yeh ek integer value return karta hai jo pixels mein first baseline se top edge tak ki height ko represent karta hai.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getLastBaselineToBottomHeight",
              id: "getLastBaselineToBottomHeight()",
              dataTypeName: `int`,
              code: `<a href="#getLastBaselineToBottomHeight()">getLastBaselineToBottomHeight</a>()`,
  
              fullCode: `public int <a href="#getLastBaselineToBottomHeight()">getLastBaselineToBottomHeight</a>()`,

              des: `getLastBaselineToBottomHeight() method, TextView ke last baseline se bottom edge tak ki height ko pixels mein retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getLastBaselineToBottomHeight() method, AppCompatTextView ke last baseline se bottom edge tak ki height ko pixels mein retrieve karne ke liye use hota hai. Last baseline, text ka last line hota hai jiska position text ke bottom edge mein hota hai. Bottom edge, AppCompatTextView ke text ka ant ka position hota hai.</p>

              <p>Yeh method, text ko render karne ke liye kaafi upyogi hota hai, jaise agar aap text ko vertically center karne ke liye layout kar rahe hain ya fir text ke saath kisi graphic element ko align karna chahte hain.</p>

              <p>getLastBaselineToBottomHeight() method ka return type int hota hai, yani ki yeh ek integer value return karta hai jo pixels mein last baseline se bottom edge tak ki height ko represent karta hai.</p>
              `,

              parameter: [],
            },




            {
              dep: false,
              name: "getText",
              id: "getText()",
              dataTypeName: `CharSequence`,
              code: `<a href="#getText()">getText</a>()`,
  
              fullCode: `public CharSequence <a href="#getText()">getText</a>()`,

              des: `getText() method, TextView ke text content ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getText() method, AppCompatTextView ke text content ko retrieve karne ke liye use hota hai. Is method ko call karke aap AppCompatTextView mein currently displayed text ko retrieve kar sakte hain.</p>

              <p>getText() method ka return type CharSequence hota hai. CharSequence ek interface hota hai, jo text-based data ko represent karta hai, jaise ki String ya SpannableString. CharSequence ka use karte hue, aap text ko read-only tarike se access kar sakte hain, ya fir use manipulate karne ke liye SpannableString ka bhi use kar sakte hain.</p>
              `,

              parameter: [],
            },




            {
              dep: false,
              name: "getTextClassifier",
              id: "getTextClassifier()",
              dataTypeName: `@NonNull TextClassifier`,
              code: `<a href="#getTextClassifier()">getTextClassifier</a>()`,
  
              fullCode: `@RequiresApi(api = 26)</br>public @NonNull TextClassifier <a href="#getTextClassifier()">getTextClassifier</a>()`,

              des: `Is method ka use, text classification aur language recognition ka feature enable karne ke liye hota hai.`,
  
              longDes: `
              <p>getTextClassifier() method, AppCompatTextView ke liye text classification aur language recognition ka TextClassifier object retrieve karne ke liye use hota hai. Text classification ek AI-based feature hai, jo text ko analyze karke uske context aur category ko recognize karta hai. Isse aap text ko natural language processing (NLP) ke techniques se samajh sakte hain, jaise ki text ka language detect karna, entity recognition karna (jaise ki places, names, dates, etc.), ya sentiment analysis karna (jaise ki text ka tone positive hai ya negative).</p>

              <p>getTextClassifier() method ka return type TextClassifier hota hai, yani ki yeh ek TextClassifier object return karta hai. Aap is object ka use karke text classification aur language recognition ke liye APIs ka benefit utha sakte hain.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getTextMetricsParamsCompat",
              id: "getTextMetricsParamsCompat()",
              dataTypeName: `@NonNull PrecomputedTextCompat.Params`,
              code: `<a href="#getTextMetricsParamsCompat()">getTextMetricsParamsCompat</a>()`,
  
              fullCode: `public @NonNull PrecomputedTextCompat.Params <a href="#getTextMetricsParamsCompat()">getTextMetricsParamsCompat</a>()`,

              des: `ye method, PrecomputedTextCompat.Params object ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTextMetricsParamsCompat() method, AppCompatTextView ke liye PrecomputedTextCompat.Params object ko retrieve karne ke liye use hota hai. Is object mein text rendering optimization ke liye required parameters store hote hain.</p>

              <p>Optimized text rendering se matalab hai ki text ko screen par render karne ke liye less computation aur processing kiya jaye, jisse text rendering speed aur performance improve hoti hai. Text rendering optimization especially text size, font, line spacing, hyphenation, aur text justification jaise factors ko consider karke kiya jata hai.</p>

              <p>getTextMetricsParamsCompat() method ka return type PrecomputedTextCompat.Params hota hai, yani ki yeh ek PrecomputedTextCompat.Params object return karta hai.</p>
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

              des: `ye method, EmojiCompat support enabled hai ya nahi, yani ki EmojiCompat feature ka status check karne ke liye hota hai.`,
  
              longDes: `
              <p>isEmojiCompatEnabled() method, AppCompatTextView ke liye EmojiCompat support enabled hai ya nahi, yani ki devices mein EmojiCompat feature available hai ya nahi, iska status check karne ke liye use hota hai.</p>

              <p>Agar isEmojiCompatEnabled() method true return karta hai, toh EmojiCompat support available hai, aur aap AppCompatTextView mein latest emojis ka use kar sakte hain. Lekin agar yeh false return karta hai, toh EmojiCompat support available nahi hai, aur aapko older emojis ke saath kaam karna padega.</p>
              
              <p>isEmojiCompatEnabled() method ka return type boolean hota hai. Yeh method true ya false return karta hai, taki aap EmojiCompat support ke status ko check kar sakein.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "onCreateInputConnection",
              id: "onCreateInputConnection()",
              dataTypeName: `InputConnection`,
              code: `<a href="#onCreateInputConnection()">onCreateInputConnection</a>(EditorInfo outAttrs)`,
  
              fullCode: `public InputConnection <a href="#onCreateInputConnection()">onCreateInputConnection</a>(EditorInfo outAttrs)`,

              des: `ye method, InputConnection object ko create karne ke liye hota hai.`,
  
              longDes: `
              <p>onCreateInputConnection(EditorInfo outAttrs) method, AppCompatTextView ke liye InputConnection object ko create karne ke liye hota hai. Is method ko override karke aap custom implementation of InputConnection provide kar sakte hain, jisse aap text typing process ko control kar sakte hain, input filtering kar sakte hain, ya fir specific behavior add kar sakte hain.</p>
              
              <p>onCreateInputConnection(EditorInfo outAttrs) method ka return type InputConnection hota hai. Yeh method InputConnection object return karta hai, jisse aap input method ke saath communication kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `EditorInfo outAttrs`,
                        des:`<p>Yeh parameter, EditorInfo object hai jisme input method ke liye information store hoti hai. Aap is object mein inputType, imeOptions, actionLabel, actionId, initialSelStart, initialSelEnd, initialCapsMode jaise properties ko set kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setAllCaps",
              id: "setAllCaps()",
              dataTypeName: `void`,
              code: `<a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,
  
              fullCode: `public void <a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,

              des: `ye method, AppCompatTextView mein text ke saare characters ko uppercase (capital letters) mein display karne ke liye hota hai.`,
  
              longDes: `
              <p>setAllCaps(boolean allCaps) method ka use, AppCompatTextView mein text ke saare characters ko uppercase mein display karne ke liye hota hai. Jab aap is method ko true ke saath call karte hain, toh text ke saare characters uppercase mein dikhai denge. Aur jab aap ise false ke saath call karte hain, toh text ke characters ke case original rahenge.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean allCaps`,
                        des:`<p>Yeh parameter ek boolean value hai, jisse aap text ke characters ko uppercase mein (true) ya original case mein (false) display kar sakte hain.</p>`,
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

              des: `ye method, AppCompatTextView ke background ko ek Drawable object se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundDrawable(@Nullable Drawable background) method, AppCompatTextView ke background ko ek Drawable object se set karne ke liye use hota hai. Drawable object aapko XML drawables (shape drawables, vector drawables) ya bitmap images represent karta hai, jinhe AppCompatTextView ke background ke roop mein use kiya jata hai.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Yeh parameter ek Drawable object leta hai, jise aap AppCompatTextView ke background ke roop mein set karna chahte hain. Drawable object aap XML resources se ContextCompat.getDrawable() method ya direct Drawable class ke constructor se create kar sakte hain.</p>`,
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

              des: `ye method, AppCompatTextView ke background ko ek drawable resource file se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundResource(@DrawableRes int resId) method, AppCompatTextView ke background ko ek drawable resource file se set karne ke liye use hota hai. Is method ka parameter resId, ek integer value hota hai jo drawable resource file ka identifier hota hai. Is identifier ki madad se, AppCompatTextView background ke roop mein specified drawable resource ko apply kiya jata hai.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Yeh parameter ek integer value hai, jo drawable resource file ka identifier hai. Aap drawable resource file ko R.drawable.drawable_name ke format mein specify karte hain.</p>`,
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

              des: `ye method, AppCompatTextView mein compound drawables (left, top, right, bottom) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setCompoundDrawables() method ka use, AppCompatTextView mein compound drawables (left, top, right, bottom) ko set karne ke liye hota hai. Is method ki madad se aap chaar tarah ke drawables ko ek AppCompatTextView ke text ke aas-paas set kar sakte hain. Aap inme se kisi bhi tarah ke drawable ko null rakh sakte hain, jisse specific positions pe koi drawable set nahi ho.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable left`,
                        des:`<p>Yeh parameter Drawable type ka hota hai, jo text ke left side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Yeh parameter bhi Drawable type ka hota hai, jo text ke top side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable right`,
                        des:`<p>Yeh parameter fir se Drawable type ka hota hai, jo text ke right side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Yeh parameter bhi Drawable type ka hota hai, jo text ke bottom side pe set kiya jata hai.</p>`,
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

              des: `ye method, AppCompatTextView mein compound drawables ko set karne ke liye hota hai, lekin is method mein positions ko "relative" tarike se set kiya jata hai.`,
  
              longDes: `
              <p>setCompoundDrawablesRelative() method ka use, AppCompatTextView mein compound drawables (start, top, end, bottom) ko set karne ke liye hota hai, lekin positions ko "relative" tarike se set kiya jata hai. Is method ki madad se aap chaar tarah ke drawables ko AppCompatTextView ke text ke aas-paas relative positions pe set kar sakte hain. Relative positions, UI layout direction ke anusaar adjust hote hain. For example, agar layout direction left-to-right hai, toh start drawable left side pe set hoga aur end drawable right side pe set hoga. Agar layout direction right-to-left hai, toh positions opposite honge.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable start`,
                        des:`<p>Yeh parameter Drawable type ka hota hai, jo text ke start (left for left-to-right layout, right for right-to-left layout) side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Yeh parameter bhi Drawable type ka hota hai, jo text ke top side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable end`,
                        des:`<p>Yeh parameter fir se Drawable type ka hota hai, jo text ke end (right for left-to-right layout, left for right-to-left layout) side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Yeh parameter bhi Drawable type ka hota hai, jo text ke bottom side pe set kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setCompoundDrawablesRelativeWithIntrinsicBounds",
              id: "setCompoundDrawablesRelativeWithIntrinsicBounds()",
              dataTypeName: `void`,
              code: `<a href="#setCompoundDrawablesRelativeWithIntrinsicBounds()">setCompoundDrawablesRelativeWithIntrinsicBounds</a>(
                @Nullable Drawable start,
                @Nullable Drawable top,
                @Nullable Drawable end,
                @Nullable Drawable bottom
            )`,
  
              fullCode: `@RequiresApi(value = Build.VERSION_CODES.JELLY_BEAN_MR1)</br>public void <a href="#setCompoundDrawablesRelativeWithIntrinsicBounds()">setCompoundDrawablesRelativeWithIntrinsicBounds</a>(
                @Nullable Drawable start,
                @Nullable Drawable top,
                @Nullable Drawable end,
                @Nullable Drawable bottom
            )`,

              des: `ye method, AppCompatTextView mein compound drawables ko intrinsic bounds ke saath set karne ke liye hota hai.`,
  
              longDes: `
              <p>setCompoundDrawablesRelativeWithIntrinsicBounds() method ka use, AppCompatTextView mein compound drawables ko intrinsic bounds ke saath set karne ke liye hota hai. Intrinsic bounds, drawable ke asli width aur height hoti hain, jisse drawable ke natural size ko maintain karne mein madad milti hai. Yani ki, agar aap drawable ko original size mein set karna chahte hain, toh setCompoundDrawablesRelativeWithIntrinsicBounds() method ka use karte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable start`,
                        des:`<p>Yeh parameter Drawable type ka hota hai, jo text ke start (left for left-to-right layout, right for right-to-left layout) side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Yeh parameter bhi Drawable type ka hota hai, jo text ke top side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable end`,
                        des:`<p>Yeh parameter fir se Drawable type ka hota hai, jo text ke end (right for left-to-right layout, left for right-to-left layout) side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Yeh parameter bhi Drawable type ka hota hai, jo text ke bottom side pe set kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setCompoundDrawablesRelativeWithIntrinsicBounds",
              id: "setCompoundDrawablesRelativeWithIntrinsicBounds()",
              dataTypeName: `void`,
              code: `<a href="#setCompoundDrawablesRelativeWithIntrinsicBounds()">setCompoundDrawablesRelativeWithIntrinsicBounds</a>(
                int start,
                int top,
                int end,
                int bottom
            )`,
  
              fullCode: `@RequiresApi(value = Build.VERSION_CODES.JELLY_BEAN_MR1)</br>public void <a href="#setCompoundDrawablesRelativeWithIntrinsicBounds()">setCompoundDrawablesRelativeWithIntrinsicBounds</a>(
                int start,
                int top,
                int end,
                int bottom
            )`,

              des: `ye method, AppCompatTextView mein compound drawables ko intrinsic bounds ke saath set karne ke liye hota hai, lekin is method mein drawable resources ke resource IDs ka use hota hai.`,
  
              longDes: `
              <p>setCompoundDrawablesRelativeWithIntrinsicBounds() method ka use, AppCompatTextView mein compound drawables ko intrinsic bounds ke saath set karne ke liye hota hai. Intrinsic bounds, drawable ke asli width aur height hoti hain, jisse drawable ke natural size ko maintain karne mein madad milti hai. Yani ki, agar aap drawable ko original size mein set karna chahte hain, toh setCompoundDrawablesRelativeWithIntrinsicBounds() method ka use karte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int start`,
                        des:`<p>Yeh parameter ek integer value hai, jo drawable resource ID hai, jo text ke start (left for left-to-right layout, right for right-to-left layout) side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int top`,
                        des:`<p>Yeh parameter bhi ek integer value hai, jo drawable resource ID hai, jo text ke top side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int end`,
                        des:`<p>Yeh parameter fir se ek integer value hai, jo drawable resource ID hai, jo text ke end (right for left-to-right layout, left for right-to-left layout) side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int bottom`,
                        des:`<p>Yeh parameter bhi ek integer value hai, jo drawable resource ID hai, jo text ke bottom side pe set kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: "setCompoundDrawablesWithIntrinsicBounds",
              id: "setCompoundDrawablesWithIntrinsicBounds()",
              dataTypeName: `void`,
              code: `<a href="#setCompoundDrawablesWithIntrinsicBounds()">setCompoundDrawablesWithIntrinsicBounds</a>(
                @Nullable Drawable left,
                @Nullable Drawable top,
                @Nullable Drawable right,
                @Nullable Drawable bottom
            )`,
  
              fullCode: `public void <a href="#setCompoundDrawablesWithIntrinsicBounds()">setCompoundDrawablesWithIntrinsicBounds</a>(
                @Nullable Drawable left,
                @Nullable Drawable top,
                @Nullable Drawable right,
                @Nullable Drawable bottom
            )`,

              des: `ye method, AppCompatTextView mein compound drawables ko intrinsic bounds ke saath set karne ke liye hota hai.`,
  
              longDes: `
              <p>setCompoundDrawablesWithIntrinsicBounds() method ka use, AppCompatTextView mein compound drawables ko intrinsic bounds ke saath set karne ke liye hota hai. Intrinsic bounds, drawable ke asli width aur height hoti hain, jisse drawable ke natural size ko maintain karne mein madad milti hai. Yani ki, agar aap drawable ko original size mein set karna chahte hain, toh setCompoundDrawablesWithIntrinsicBounds() method ka use karte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable left`,
                        des:`<p>Yeh parameter Drawable type ka hota hai, jo text ke left side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable top`,
                        des:`<p>Yeh parameter bhi Drawable type ka hota hai, jo text ke top side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable right`,
                        des:`<p>Yeh parameter fir se Drawable type ka hota hai, jo text ke right side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Drawable bottom`,
                        des:`<p>Yeh parameter bhi Drawable type ka hota hai, jo text ke bottom side pe set kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setCompoundDrawablesWithIntrinsicBounds",
              id: "setCompoundDrawablesWithIntrinsicBounds()",
              dataTypeName: `void`,
              code: `<a href="#setCompoundDrawablesWithIntrinsicBounds()">setCompoundDrawablesWithIntrinsicBounds</a>(
                int left,
                int top,
                int right,
                int bottom
            )`,
  
              fullCode: `public void <a href="#setCompoundDrawablesWithIntrinsicBounds()">setCompoundDrawablesWithIntrinsicBounds</a>(
                int left,
                int top,
                int right,
                int bottom
            )`,

              des: `ye method, AppCompatTextView mein compound drawables ko intrinsic bounds ke saath set karne ke liye hota hai, lekin is method mein drawable resources ke resource IDs ka use hota hai.`,
  
              longDes: `
              <p>setCompoundDrawablesWithIntrinsicBounds() method ka use, AppCompatTextView mein compound drawables ko intrinsic bounds ke saath set karne ke liye hota hai. Intrinsic bounds, drawable ke asli width aur height hoti hain, jisse drawable ke natural size ko maintain karne mein madad milti hai. Yani ki, agar aap drawable ko original size mein set karna chahte hain, toh setCompoundDrawablesWithIntrinsicBounds() method ka use karte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int left`,
                        des:`<p>Yeh parameter ek integer value hai, jo drawable resource ID hai, jo text ke left side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int top`,
                        des:`<p>Yeh parameter bhi ek integer value hai, jo drawable resource ID hai, jo text ke top side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int right`,
                        des:`<p>Yeh parameter fir se ek integer value hai, jo drawable resource ID hai, jo text ke right side pe set kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int bottom`,
                        des:`<p>Yeh parameter bhi ek integer value hai, jo drawable resource ID hai, jo text ke bottom side pe set kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setCustomSelectionActionModeCallback",
              id: "setCustomSelectionActionModeCallback()",
              dataTypeName: `void`,
              code: `<a href="#setCustomSelectionActionModeCallback()">setCustomSelectionActionModeCallback</a>(
                @Nullable ActionMode.Callback actionModeCallback
            )`,
  
              fullCode: `public void <a href="#setCustomSelectionActionModeCallback()">setCustomSelectionActionModeCallback</a>(
                @Nullable ActionMode.Callback actionModeCallback
            )`,

              des: `ye method, AppCompatTextView mein custom selection action mode callback ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setCustomSelectionActionModeCallback() method, AppCompatTextView mein custom selection action mode callback ko set karne ke liye use hota hai. Is method ki madad se aap apne AppCompatTextView par custom selection action mode behavior ko define kar sakte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable ActionMode.Callback actionModeCallback`,
                        des:`<p>Yeh parameter ActionMode.Callback type ka hota hai, jisse aap custom selection action mode behavior ko handle karne ke liye set kar sakte hain. Agar aap null pass karte hain, toh custom selection action mode disable ho jata hai, aur default behavior activate hota hai.</p>`,
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

              des: `ye method, AppCompatTextView mein EmojiCompat feature ko enable ya disable karne ke liye hota hai.`,
  
              longDes: `
              <p>setEmojiCompatEnabled() method, AppCompatTextView mein EmojiCompat feature ko enable ya disable karne ke liye use hota hai. Agar aap EmojiCompat ko enable karte hain, toh EmojiCompat automatic tarike se latest emoji versions ko older Android devices mein support karega. Isse aap apne AppCompatTextView ya kisi bhi text-based UI component mein latest emojis ko display kar sakte hain, jisse users ko better emoji experience milega.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>Yeh parameter boolean type ka hota hai. Agar aap true pass karte hain, toh EmojiCompat enable ho jata hai, aur agar aap false pass karte hain, toh EmojiCompat disable ho jata hai.</p>`,
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

              des: `ye method, AppCompatTextView mein text ko input karne se pehle apply kiye jane wale filters ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setFilters() method, AppCompatTextView mein text ko input karne se pehle apply kiye jane wale filters ko set karne ke liye use hota hai. Aap ek array mein multiple input filters define kar sakte hain aur fir AppCompatTextView ko us array of filters ke saath configure kar sakte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull InputFilter[] filters`,
                        des:`<p>Yeh parameter InputFilter[] type ka hota hai, jisme ek ya ek se zyada input filters ka array hota hai, jo text ko input karne se pehle apply kiya jayega.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setFirstBaselineToTopHeight",
              id: "setFirstBaselineToTopHeight()",
              dataTypeName: `void`,
              code: `<a href="#setFirstBaselineToTopHeight()">setFirstBaselineToTopHeight</a>(
                @Px @IntRange(from = 0) int firstBaselineToTopHeight
            )`,
  
              fullCode: `public void <a href="#setFirstBaselineToTopHeight()">setFirstBaselineToTopHeight</a>(
                @Px @IntRange(from = 0) int firstBaselineToTopHeight
            )`,

              des: `ye method, AppCompatTextView mein text ke first baseline se view ke top edge tak ka distance (height) set karne ke liye hota hai.`,
  
              longDes: `
              <p>setFirstBaselineToTopHeight() method ka use, AppCompatTextView mein text ke first baseline se view ke top edge tak ka distance (height) set karne ke liye hota hai. Isse aap text ko vertical alignment mein customize kar sakte hain. Agar aap text ko vertically center karna chahte hain ya fir specific vertical position pe set karna chahte hain, toh setFirstBaselineToTopHeight() method ka use karke isko achieve kiya ja sakta hai.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Px @IntRange(from = 0) int firstBaselineToTopHeight`,
                        des:`<p>Yeh parameter ek integer value hai, jo pixels mein text ke first baseline se view ke top edge tak ka distance represent karta hai. Is parameter mein value 0 ya usse greater honi chahiye.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setLastBaselineToBottomHeight",
              id: "setLastBaselineToBottomHeight()",
              dataTypeName: `void`,
              code: `<a href="#setLastBaselineToBottomHeight()">setLastBaselineToBottomHeight</a>(
                @Px @IntRange(from = 0) int lastBaselineToBottomHeight
            )`,
  
              fullCode: `public void <a href="#setLastBaselineToBottomHeight()">setLastBaselineToBottomHeight</a>(
                @Px @IntRange(from = 0) int lastBaselineToBottomHeight
            )`,

              des: `ye method, AppCompatTextView mein text ke last baseline se view ke bottom edge tak ka distance (height) set karne ke liye hota hai.`,
  
              longDes: `
              <p>setLastBaselineToBottomHeight() method ka use, AppCompatTextView mein text ke last baseline se view ke bottom edge tak ka distance (height) set karne ke liye hota hai. Isse aap text ko vertical alignment mein customize kar sakte hain. Agar aap text ko vertically center karna chahte hain ya fir specific vertical position pe set karna chahte hain, toh setLastBaselineToBottomHeight() method ka use karke isko achieve kiya ja sakta hai.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Px @IntRange(from = 0) int lastBaselineToBottomHeight`,
                        des:`<p>Yeh parameter ek integer value hai, jo pixels mein text ke last baseline se view ke bottom edge tak ka distance represent karta hai. Is parameter mein value 0 ya usse greater honi chahiye.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setLineHeight",
              id: "setLineHeight()",
              dataTypeName: `void`,
              code: `<a href="#setLineHeight()">setLineHeight</a>(@Px @IntRange(from = 0) int lineHeight)`,
  
              fullCode: `public void <a href="#setLineHeight()">setLineHeight</a>(@Px @IntRange(from = 0) int lineHeight)`,

              des: `ye method, AppCompatTextView mein text ke lines ke beech mein spacing (line height) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setLineHeight() method ka use, AppCompatTextView mein text ke lines ke beech mein spacing ko set karne ke liye hota hai. Isse aap text ke lines ke spacing ko adjust kar sakte hain aur text ko vertically optimize kar sakte hain. Agar aap text ko spaced-out (alag-alag) lines ke sath display karna chahte hain ya fir lines ko closely-spaced (paas-paas) karna chahte hain, toh setLineHeight() method ka use karke isko achieve kiya ja sakta hai.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Px @IntRange(from = 0) int lineHeight`,
                        des:`<p>Yeh parameter ek integer value hai, jo pixels mein text ke lines ke beech ki spacing (line height) ko represent karta hai. Is parameter mein value 0 ya usse greater honi chahiye.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setPrecomputedText",
              id: "setPrecomputedText()",
              dataTypeName: `void`,
              code: `<a href="#setPrecomputedText()">setPrecomputedText</a>(@NonNull PrecomputedTextCompat precomputed)`,
  
              fullCode: `public void <a href="#setPrecomputedText()">setPrecomputedText</a>(@NonNull PrecomputedTextCompat precomputed)`,

              des: `ye method, AppCompatTextView mein precomputed (pesh-niyukt) text ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setPrecomputedText() method, AppCompatTextView mein precomputed text ko set karne ke liye use hota hai. Isse text rendering performance improve hoti hai, kyunki text ko pehle se compute karke PrecomputedTextCompat object ke roop mein ready-to-display form mein set kiya jata hai.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull PrecomputedTextCompat precomputed`,
                        des:`<p>Yeh parameter PrecomputedTextCompat type ka hota hai, jisme precomputed text object hota hai, jo AppCompatTextView mein set kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTextAppearance",
              id: "setTextAppearance()",
              dataTypeName: `void`,
              code: `<a href="#setTextAppearance()">setTextAppearance</a>(Context context, int resId)`,
  
              fullCode: `public void <a href="#setTextAppearance()">setTextAppearance</a>(Context context, int resId)`,

              des: `ye method, AppCompatTextView mein text appearance ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTextAppearance() method, AppCompatTextView mein text appearance ko set karne ke liye use hota hai. Aap is method ki madad se text appearance resources ko AppCompatTextView se associate kar sakte hain. Ye resources system-defined ya app-defined ho sakte hain, jisse aap text ko easily style kar sakte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Yeh parameter Context type ka hota hai, jo AppCompatTextView ko associate kiya gaya text appearance resource file ke context ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int resId`,
                        des:`<p>Yeh parameter ek integer value hai, jo text appearance resource ka unique ID hai. Is ID se aap AppCompatTextView ko text appearance se associate kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTextClassifier",
              id: "setTextClassifier()",
              dataTypeName: `void`,
              code: `<a href="#setTextClassifier()">setTextClassifier</a>(@Nullable TextClassifier textClassifier)`,
  
              fullCode: `@RequiresApi(api = 26)</br>public void <a href="#setTextClassifier()">setTextClassifier</a>(@Nullable TextClassifier textClassifier)`,

              des: `ye method, AppCompatTextView mein text ko classify aur process karne ke liye ek TextClassifier object ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTextClassifier() method, AppCompatTextView mein text classifier (TextClassifier) object ko set karne ke liye hota hai. Text classifier, text ko smartly process karke usme se entities aur actions ko extract karne mein madad karta hai. Isse aap apne text-based UI components (jaise AppCompatTextView) ko text classification aur contextually enhanced features provide kar sakte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable TextClassifier textClassifier`,
                        des:`<p>Yeh parameter TextClassifier type ka hota hai, jo AppCompatTextView mein set kiya gaya text classifier object hai. Is parameter mein aap null bhi pass kar sakte hain, agar aap custom text classifier use nahi karna chahte.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTextFuture",
              id: "setTextFuture()",
              dataTypeName: `void`,
              code: `<a href="#setTextFuture()">setTextFuture</a>(@Nullable Future<PrecomputedTextCompat> future)`,
  
              fullCode: `public void <a href="#setTextFuture()">setTextFuture</a>(@Nullable Future<PrecomputedTextCompat> future)`,

              des: `ye method, AppCompatTextView mein asynchronous tarike se text ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTextFuture() method, AppCompatTextView mein asynchronous text setting ko allow karta hai. Isse aap background thread mein text ko precompute karke PrecomputedTextCompat object ke form mein bana sakte hain, aur phir usse setTextFuture() method ke through AppCompatTextView mein set kar sakte hain. Asynchronous tarike se text ko set karne se UI thread ko block hone se bachaya jata hai, aur smooth scrolling aur overall better performance achieve kiya ja sakta hai, jab text ko rendering ke liye ready ho.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Future<PrecomputedTextCompat> future`,
                        des:`<p>Aap isme PrecomputedTextCompat object ki ek instance pass kar sakte hain, jo text ko precompute karne ke liye use hoga. Agar aap null pass karte hain, toh text ko normal tarike se set kiya jayega, bina precompute kiye.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setTextMetricsParamsCompat",
              id: "setTextMetricsParamsCompat()",
              dataTypeName: `void`,
              code: `<a href="#setTextMetricsParamsCompat()">setTextMetricsParamsCompat</a>(@NonNull PrecomputedTextCompat.Params params)`,
  
              fullCode: `public void <a href="#setTextMetricsParamsCompat()">setTextMetricsParamsCompat</a>(@NonNull PrecomputedTextCompat.Params params)`,

              des: `ye method, AppCompatTextView mein text rendering ke liye metrics parameters ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTextMetricsParamsCompat() method, AppCompatTextView mein text metrics parameters ko set karne ke liye use hota hai. Isse aap text rendering ke liye specific parameters ko customize kar sakte hain aur text display ko visually appealing banane ke liye text ko optimize kar sakte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull PrecomputedTextCompat.Params params`,
                        des:`<p>Yeh parameter PrecomputedTextCompat.Params type ka hota hai, jo text metrics parameters ka object hota hai, jisse AppCompatTextView mein set kiya jata hai. Is parameter mein aap null nahi pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTextSize",
              id: "setTextSize()",
              dataTypeName: `void`,
              code: `<a href="#setTextSize()">setTextSize</a>(int unit, float size)`,
  
              fullCode: `public void <a href="#setTextSize()">setTextSize</a>(int unit, float size)`,

              des: `ye method, AppCompatTextView mein text ka size (font size) set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTextSize() method, AppCompatTextView mein text ka size (font size) set karne ke liye use hota hai. Is method ki madad se aap text ko specific size mein set kar sakte hain, jisse aap text ke appearance ko customize kar sakte hain.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int unit`,
                        des:`<p>Yeh parameter integer value hai, jo text size ko represent karta hai. Text size ko specify karne ke liye aap different units ka use kar sakte hain, jaise ki TypedValue.COMPLEX_UNIT_SP (scaled pixels), TypedValue.COMPLEX_UNIT_DIP (density-independent pixels), TypedValue.COMPLEX_UNIT_PT (points), TypedValue.COMPLEX_UNIT_PX (pixels), etc. Unit specify karne ke liye TypedValue class ke constants ka use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `float size`,
                        des:`<p>Yeh parameter float value hai, jo text size ko define karta hai. Size value ko unit ke according specify karna hota hai, jaise 16 pixels, 14 scaled pixels, 20 density-independent pixels, etc.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTypeface",
              id: "setTypeface()",
              dataTypeName: `void`,
              code: `<a href="#setTypeface()">setTypeface</a>(@Nullable Typeface tf, int style)`,
  
              fullCode: `public void <a href="#setTypeface()">setTypeface</a>(@Nullable Typeface tf, int style)`,

              des: `ye method, AppCompatTextView mein text ke liye custom typeface (font) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTypeface() method, AppCompatTextView mein custom typeface (font) ko set karne ke liye use hota hai. Isse aap apne text ko app-defined fonts se replace kar sakte hain, jisse text ka appearance aur style change ho jata hai.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Typeface tf`,
                        des:`<p>Yeh parameter Typeface type ka hota hai, jo text ke liye custom typeface object represent karta hai. Aap isme null bhi pass kar sakte hain, agar aap default typeface use karna chahte hain.</p>`,
                      },
                      {
                        dataTypeName: `int style`,
                        des:`<p>Yeh parameter integer value hota hai, jo text ke style ko represent karta hai. Is parameter mein aap text ke style ko set kar sakte hain, jaise Typeface.NORMAL, Typeface.BOLD, Typeface.ITALIC, Typeface.BOLD_ITALIC jaisi values ka use karte hain.</p>`,
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
  
              des: `Ye method, AppCompatTextView mein state changes ke time par drawable resources ke state ko update karne ke liye hota hai.`,
  
              longDes: `
                <p>drawableStateChanged() method, AppCompatTextView mein drawable resources ke state ko update karne ke liye override kiya gaya method hota hai. Jab bhi AppCompatTextView ke state mein changes hote hain, jaise ki focus state, pressed state, enabled/disabled state, ya selected state, tabhi yeh method call hota hai. Is method ki madad se aap AppCompatTextView ke drawable resources ko update kar sakte hain, jisse visual representation ke liye appropriate states ka use ho.</p>
                    `,
  
              parameter: [],
            },
  


            {
              dep: false,
              name: "onLayout",
              id: "onLayout()",
              dataTypeName: `void`,
              code: `<a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              fullCode: `protected void <a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              des: `Ye method, AppCompatTextView mein view ke layout process ko handle karne ke liye hota hai.`,
  
              longDes: `
                <p>onLayout() method, AppCompatTextView mein view ke layout process ko control karne ke liye override kiya gaya method hota hai. Jab bhi AppCompatTextView ki layout process hoti hai, tab yeh method call hota hai. Is method mein aap view ke child views ko arrange karne, unki positions ko set karne, aur view ka final size determine karne ke liye logic define kar sakte hain.</p>
                    `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean changed`,
                        des:`<p>Yeh parameter boolean value hai, jo batata hai ki view ka layout abhi kya change hua hai ya nahi. Agar true hai, toh view ka layout abhi change hua hai aur usmein modifications hui hain, jaise ki size change ya position change. Agar false hai, toh koi layout change nahi hua hai.</p>`,
                      },
                      {
                        dataTypeName: `int left`,
                        des:`<p>Yeh parameter integer value hai, jo view ka left position coordinate hai.</p>`,
                      },
                      {
                        dataTypeName: `int top`,
                        des:`<p>Yeh parameter integer value hai, jo view ka top position coordinate hai.</p>`,
                      },
                      {
                        dataTypeName: `int right`,
                        des:`<p>Yeh parameter integer value hai, jo view ka right position coordinate hai.</p>`,
                      },
                      {
                        dataTypeName: `int bottom`,
                        des:`<p>Yeh parameter integer value hai, jo view ka bottom position coordinate hai.</p>`,
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
  
              des: `Ye method, AppCompatTextView mein view ke dimensions (width aur height) ko measure karne ke liye hota hai.`,
  
              longDes: `
                <p>onMeasure() method, AppCompatTextView mein view ke dimensions (width aur height) ko measure karne ke liye use hota hai. Jab bhi AppCompatTextView ki layout process hoti hai, tab yeh method call hota hai. Is method mein aap view ke dimensions ko measure karne ke liye logic define kar sakte hain, jisse view ko screen space ke according layout kiya ja sake.</p>
                    `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int widthMeasureSpec`,
                        des:`<p>Yeh parameter integer value hai, jo view ka width aur uski measure specification (mode aur size) ko represent karta hai. Is parameter se aapko pata chalta hai ki view ka width kis tarah layout hoga aur kitna space available hai.</p>`,
                      },
                      {
                        dataTypeName: `int heightMeasureSpec`,
                        des:`<p>Yeh parameter integer value hai, jo view ka height aur uski measure specification (mode aur size) ko represent karta hai. Is parameter se aapko pata chalta hai ki view ka height kis tarah layout hoga aur kitna space available hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  


            {
              dep: false,
              name: "onTextChanged",
              id: "onTextChanged()",
              dataTypeName: `void`,
              code: `<a href="#onTextChanged()">onTextChanged</a>(
                CharSequence text,
                int start,
                int lengthBefore,
                int lengthAfter
            )`,
  
              fullCode: `protected void <a href="#onTextChanged()">onTextChanged</a>(
                CharSequence text,
                int start,
                int lengthBefore,
                int lengthAfter
            )`,
  
              des: `Ye method, AppCompatTextView mein text ki change hone par is event ko handle karne ke liye hota hai.`,
  
              longDes: `
                <p>onTextChanged() method, AppCompatTextView mein text ki change hone par is event ko handle karne ke liye override kiya gaya method hota hai. Jab bhi AppCompatTextView ke text mein koi changes hote hain, jaise ki text ke characters add ya remove hote hain, tab yeh method call hota hai. Is method mein aap text ke change hone par required actions perform kar sakte hain, jaise ki text ko validate karna, kuch specific processing karna, ya text ke changes ko log karna.</p>
                    `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence text`,
                        des:`<p>Yeh parameter CharSequence type ka hota hai, jo text ke new contents ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int start`,
                        des:`<p>Yeh parameter integer value hota hai, jo text ke changes ka starting index batata hai. Is index se pehle ke text ko lengthBefore characters tak replace kiya gaya hai.</p>`,
                      },
                      {
                        dataTypeName: `int lengthBefore`,
                        des:`<p>Yeh parameter integer value hota hai, jo text ke changes se pehle ke text ka length (number of characters) batata hai, jo replace kiya gaya hai.</p>`,
                      },
                      {
                        dataTypeName: `int lengthAfter`,
                        des:`<p>Yeh parameter integer value hota hai, jo text ke changes ke baad ke text ka length (number of characters) batata hai.</p>`,
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
  