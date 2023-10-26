module.exports.AppCompatAutoCompleteTextView = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatAutoCompleteTextView",
      hCode: `public class <a href="#AppCompatAutoCompleteTextView">AppCompatAutoCompleteTextView</a>  extends AutoCompleteTextView implements TintableBackgroundView, EmojiCompatConfigurationView, TintableCompoundDrawablesView`,
  
      des: 
        `
        <p>Ye class, AutoCompleteTextView widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatAutoCompleteTextView class, AppCompatTextView class se extend hoti hai aur AutoCompleteTextView class ka subclass hai. Iska use text input field ke roop mein kiya jata hai, jahan user ko suggestions aur autocompletion ki facility provide karni hoti hai.</p>
  
       
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
              name: `AppCompatAutoCompleteTextView`,
              id: "AppCompatAutoCompleteTextView(Context)",
              code: `<a href="#AppCompatAutoCompleteTextView(Context)">AppCompatAutoCompleteTextView</a>(@NonNull Context context)`,
              fullCode: `public <a href="#AppCompatAutoCompleteTextView(Context)">AppCompatAutoCompleteTextView</a>(@NonNull Context context)`,

              des: `Ye constructor, AppCompatAutoCompleteTextView ke ek instance ko diye gaye context se initialize karne ke liye use hota hai.`,

              longDes: `<p>AppCompatAutoCompleteTextView(@NonNull Context context) constructor, AppCompatAutoCompleteTextView class ke ek instance ko diye gaye context se initialize karne ke liye use hota hai. Is constructor ka use karke hum customized autocomplete text fields create kar sakte hain aur Android platform ke older versions par bhi consistent UI experience provide kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jiski madad se AppCompatAutoCompleteTextView instance ko initialize kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatAutoCompleteTextView`,
              id: "AppCompatAutoCompleteTextView(Context,AttributeSet)",
              code: `<a href="#AppCompatAutoCompleteTextView(Context,AttributeSet)">AppCompatAutoCompleteTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,
              fullCode: `public <a href="#AppCompatAutoCompleteTextView(Context,AttributeSet)">AppCompatAutoCompleteTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,

              des: `Ye constructor, AppCompatAutoCompleteTextView ke ek instance ko diye gaye context aur attribute set se initialize karne ke liye use hota hai.`,

              longDes: `<p>AppCompatAutoCompleteTextView(@NonNull Context context, @Nullable AttributeSet attrs) constructor, AppCompatAutoCompleteTextView class ke ek instance ko diye gaye context aur attribute set se initialize karne ke liye use hota hai. Is constructor ka use karke hum customized autocomplete text fields create kar sakte hain aur Android platform ke older versions par bhi consistent UI experience provide kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jiski madad se AppCompatAutoCompleteTextView instance ko initialize kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, jiski madad se XML attributes se AppCompatAutoCompleteTextView instance ko initialize kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            

            {
              dep: false,
              name: `AppCompatAutoCompleteTextView`,
              id: "AppCompatAutoCompleteTextView(Context,AttributeSet,int)",
              code: `<a href="#AppCompatAutoCompleteTextView(Context,AttributeSet,int)">AppCompatAutoCompleteTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public <a href="#AppCompatAutoCompleteTextView(Context,AttributeSet,int)">AppCompatAutoCompleteTextView</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Ye constructor, AppCompatAutoCompleteTextView ke ek instance ko diye gaye context, attribute set, aur default style attribute se initialize karne ke liye use hota hai.`,

              longDes: `<p>AppCompatAutoCompleteTextView(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) constructor, AppCompatAutoCompleteTextView class ke ek instance ko diye gaye context, attribute set, aur default style attribute se initialize karne ke liye use hota hai. Is constructor ka use karke hum customized autocomplete text fields create kar sakte hain aur Android platform ke older versions par bhi consistent UI experience provide kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jiski madad se AppCompatAutoCompleteTextView instance ko initialize kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>AttributeSet object, jiski madad se XML attributes se AppCompatAutoCompleteTextView instance ko initialize kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>int value, default style attribute resource ID, jiski madad se AppCompatAutoCompleteTextView instance ko initialize kiya jata hai.</p>`,
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
              name: "getCustomSelectionActionModeCallback",
              id: "getCustomSelectionActionModeCallback()",
              dataTypeName: `@Nullable ActionMode.Callback`,
              code: `<a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,
  
              fullCode: `public @Nullable ActionMode.Callback <a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,

              des: `Ye method, AppCompatAutoCompleteTextView mein custom selection action mode callback ko retrieve karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, AppCompatAutoCompleteTextView mein custom selection action mode callback ko retrieve karne ke liye use hota hai.</p>

              <p>Is method ka return type ActionMode.Callback hai, jise @Nullable annotation ke saath annotate kiya gaya hai. Yani ki ye method ActionMode.Callback object ya null return kar sakta hai.</p>
  
              <p>Action mode, ek temporary context-sensitive bar hoti hai jo text selection ke time display hoti hai. Jab hum text ko long-press karke select karte hain, tab action mode activate hoti hai aur hume various options provide karti hai, jaise copy, paste, cut, etc.</p>
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

              des: `Ye method, EmojiCompat ka upyog karke Emoji ke saath kaam karne ke liye use hota hai.`,
  
              longDes: `
              <p>Is method ka upyog EmojiCompat library ke current state ko jaanane ke liye kiya jaata hai. EmojiCompat library, Android platform ke emoji support ko enhance karne ke liye use hoti hai. Agar EmojiCompat library enable ki gayi hai, toh is method true return karega, aur agar disable ki gayi hai, toh false return karega.</p>
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

              des: `onCreateInputConnection() method ka use keyboard input ko AutoCompleteTextView ke sath manage karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>onCreateInputConnection() method ka use keyboard input ko AutoCompleteTextView ke sath manage karne ke liye kiya jata hai. Jab AutoCompleteTextView focus mein hota hai aur keyboard se input liya ja raha hai, toh yeh method keyboard events aur input handling ke liye ek InputConnection object ko create karta hai.</p>

              <p>onCreateInputConnection() method, InputConnection object ko create karne ka kaam karta hai, jisse keyboard input AutoCompleteTextView ke sath manage ho sake. Is method ka return type InputConnection hota hai.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `EditorInfo outAttrs`,
                    des:`<p>EditorInfo object, jisme keyboard input ka metadata store hota hai.</p>`,
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

              des: `Is method ka use View ke background ko change karne mein kiya jata hai.`,
  
              longDes: `
              <p>setBackgroundDrawable() method, View ke background ko specified Drawable object se replace karta hai. Agar aap kisi specific Drawable resource file (drawable resource) ya ek Bitmap ya ColorDrawable se background set karna chahte hain, toh is method ka upayog kiya ja sakta hai.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable Drawable background`,
                    des:`<p>Background ke roop mein set kiya jaane wala Drawable object. Is parameter mein null bhi ho sakta hai, jisse view ka background remove ho jata hai.</p>`,
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

              des: `ye method, View ko ek drawable resource file (drawable resource) se background set karne ke liye upayog hota hai. `,
  
              longDes: `
              <p>setBackgroundResource() method, View ke background ko specified drawable resource se replace karta hai. Is method ka upayog kisi bhi drawable resource file (XML drawable ya bitmap image) ya ek color resource (R.color) se background set karne ke liye kiya ja sakta hai.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@DrawableRes int resId`,
                    des:`<p>Background ke roop mein set kiya jaane wala drawable resource file ka resource ID. Is resource ID ka data type int hota hai.</p>`,
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

              des: `ye method, AutoCompleteTextView mein compound drawables (left, top, right, bottom) ko set karne ke liye upayog hota hai. Compound drawables, text ke saath ek saath image ya icon ko display karne ke liye use kiye jate hain.`,
  
              longDes: `
              <p>setCompoundDrawables() method, AutoCompleteTextView ke text ke aas-paas specified drawables (left, top, right, bottom) ko set karne mein madad karta hai. Jaise ki aap left side mein ek icon, top mein ek image, right mein ek icon, ya bottom mein ek image display karna chahte hain.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: ` @Nullable Drawable left`,
                    des:`<p>TextView ke left side mein display hone wala Drawable object.</p>`,
                  },
                  {
                    dataTypeName: ` @Nullable Drawable top`,
                    des:`<p>TextView ke top side mein display hone wala Drawable object.</p>`,
                  },
                  {
                    dataTypeName: ` @Nullable Drawable right`,
                    des:`<p>TextView ke right side mein display hone wala Drawable object.</p>`,
                  },
                  {
                    dataTypeName: ` @Nullable Drawable bottom`,
                    des:`<p>TextView ke bottom side mein display hone wala Drawable object.</p>`,
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

              des: `ye method, AutoCompleteTextView mein compound drawables (start, top, end, bottom) ko set karne ke liye upayog hota hai. Compound drawables, text ke saath ek saath image ya icon ko display karne ke liye use kiye jate hain.`,
  
              longDes: `
              <p>setCompoundDrawablesRelative() method, AutoCompleteTextView ke text ke aas-paas specified drawables (start, top, end, bottom) ko set karne mein madad karta hai. Is method ka use bhi setCompoundDrawables() method ki tarah text ke saath ek saath icons ya images ko display karne ke liye hota hai.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: ` @Nullable Drawable start`,
                    des:`<p>TextView ke start (left in LTR languages, right in RTL languages) side mein display hone wala Drawable object.</p>`,
                  },
                  {
                    dataTypeName: ` @Nullable Drawable top`,
                    des:`<p>TextView ke top side mein display hone wala Drawable object.</p>`,
                  },
                  {
                    dataTypeName: ` @Nullable Drawable end`,
                    des:`<p>TextView ke end (right in LTR languages, left in RTL languages) side mein display hone wala Drawable object.</p>`,
                  },
                  {
                    dataTypeName: ` @Nullable Drawable bottom`,
                    des:`<p>TextView ke bottom side mein display hone wala Drawable object.</p>`,
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

              des: `Is method ka use text selection menu ko modify karne aur custom behavior implement karne ke liye kiya jata hai.`,
  
              longDes: `
              <p>ActionMode.Callback ek interface hai, jisko AutoCompleteTextView ke text selection action mode ko handle karne ke liye implement kiya jata hai. Is interface ke through aap text selection actions (copy, cut, paste, etc.) ke events ko handle kar sakte hain aur action mode ke appearance aur behavior ko customize kar sakte hain.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable ActionMode.Callback actionModeCallback`,
                    des:`<p>AutoCompleteTextView ke text selection action mode ko customize karne ke liye ActionMode.Callback interface implement karne wala object. Is parameter mein null bhi ho sakta hai, jisse default selection action mode behavior restore ho jata hai.</p>`,
                  },
                ],
              },
          ],
            },



            {
              dep: false,
              name: "setDropDownBackgroundResource",
              id: "setDropDownBackgroundResource()",
              dataTypeName: `void`,
              code: `<a href="#setDropDownBackgroundResource()">setDropDownBackgroundResource</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setDropDownBackgroundResource()">setDropDownBackgroundResource</a>(@DrawableRes int resId)`,

              des: `Ye method dropdown list ke background ko set karne ke liye istemal hota hai, jise hum ek specified Drawable resource se define kar sakte hain.`,
  
              longDes: `
              <p>setDropDownBackgroundResource() method ke through hum AutoCompleteTextView ke dropdown list ke background ko customize kar sakte hain. Normally, dropdown list ka background system theme ya styles se define hota hai, lekin is method ka use karke hum apne khud ke custom background drawable ko set kar sakte hain.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@DrawableRes int resId`,
                    des:`<p>Ek Drawable resource ka identifier, jiska istemal dropdown list ke background ke roop mein hoga. @DrawableRes annotation iss parameter ko indicate karta hai ki yahaan par hum ek valid Drawable resource ka ID dena chahiye.</p>`,
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

              des: `setEmojiCompatEnabled() method ke dwara hum EmojiCompat ko AppCompatAutoCompleteTextView par enable ya disable kar sakte hain.`,
  
              longDes: `
              <p>setEmojiCompatEnabled() method ke dwara hum EmojiCompat ko AppCompatAutoCompleteTextView par enable ya disable kar sakte hain. EmojiCompat ek Android Support Library component hai, jo Unicode emoji ke backward compatibility aur rendering ko manage karta hai.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean enabled`,
                    des:`<p>Boolean value jo darshata hai ki EmojiCompat sakriya karna hai ya nahi. true ke sthan par agar hum enabled parameter ko pass karte hain to EmojiCompat sakriya ho jata hai, jabki false ke sthan par asakriya ho jata hai.</p>`,
                  },
                ],
              },
          ],
            },



            {
              dep: false,
              name: "setKeyListener",
              id: "setKeyListener()",
              dataTypeName: `void`,
              code: `<a href="#setKeyListener()">setKeyListener</a>(@Nullable KeyListener keyListener)`,
  
              fullCode: `public void <a href="#setKeyListener()">setKeyListener</a>(@Nullable KeyListener keyListener)`,

              des: `setKeyListener() method ke dwara hum AppCompatAutoCompleteTextView mein ek custom KeyListener ko set kar sakte hain.`,
  
              longDes: `
              <p>setKeyListener() method ke dwara hum AppCompatAutoCompleteTextView mein ek custom KeyListener ko set kar sakte hain. KeyListener, keyboard events (jaise key press, key release) ko intercept karta hai aur unhe handle karta hai. Isse hum AppCompatAutoCompleteTextView ke text input behavior ko customize kar sakte hain.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@Nullable KeyListener keyListener`,
                    des:`<p>Ek KeyListener object jo AppCompatAutoCompleteTextView mein set kiya jana hai. @Nullable annotation batata hai ki yeh parameter null ho sakta hai.</p>`,
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

              des: `setTextAppearance() method ke zariye hum AppCompatAutoCompleteTextView ke text ko specific style se set kar sakte hain. `,
  
              longDes: `
              <p>setTextAppearance() method ke zariye hum AppCompatAutoCompleteTextView ke text ko specific style se set kar sakte hain. Text appearance styles XML resource files mein define kiye jate hain, jinme text size, text color, text style (bold, italic), font family, aadi ka configuration hota hai. Hum in styles ko alag-alag views par apply karne ke liye setTextAppearance() method ka use karte hain.</p>
              `,

  
              parameter: [
                {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Context context`,
                    des:`<p>Context object, jiska istemal text appearance style ke inflate karne mein hoga.</p>`,
                  },
                  {
                    dataTypeName: `int resId`,
                    des:`<p>Resource ID (integer value) jo text appearance style ko represent karta hai. Yeh resource R.style ya R.styleable se obtain kiya jata hai.</p>`,
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
  
              des: `Is method ka use view ke drawable resources, jaise background, text color, aadi ke state changes ke handling mein hota hai.`,
  
              longDes: `
                <p>Is method ka use view ke drawable resources, jaise background, text color, aadi ke state changes ke handling mein hota hai.</p>
  
                <p>jab ek AppCompatAutoCompleteTextView view ke internal state me koi changes hota hai, jaise focus state change ho, view enable ya disable ho, pressed state ho, ya selected state ho, to drawableStateChanged() method automatically invoke hota hai.</p>

                <p>Ek common use case, drawableStateChanged() method ka override karke view ke background drawable ko state changes ke hisab se update karna hota hai. Jaise, agar view focusable hai toh focus state mein uska background color change ho sakta hai, ya agar view disabled hai toh disabled state mein uska background color ya alpha change ho sakta hai.</p>
                    `,
  
              parameter: [],
            },
  



          ],
        },
  
     
     
  

      },
    });
  };
  