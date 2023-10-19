module.exports.AppCompatImageButton = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatImageButton",
      hCode: `public class <a href="#AppCompatImageButton">AppCompatImageButton</a>  extends ImageButton implements TintableBackgroundView`,
  
      des: 
        `
        <p>Ye class, ImageButton widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatImageButton class, ImageButton class ka subclass hai aur AppCompatImageView class se inherit karti hai. Iska use images ya icons ke liye clickable buttons display karne ke liye kiya jata hai.</p>
  
       
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
              name: `AppCompatImageButton`,
              id: "AppCompatImageButton(Context)",
              code: `AppCompatImageButton(@NonNull Context context)`,

              fullCode: `public AppCompatImageButton(@NonNull Context context)`,

              des: `AppCompatImageButton class ka ek constructor hai, jo AppCompatImageButton ke objects ko initialize karne ke liye use hota hai.`,

              longDes: `<p>Is constructor ka use AppCompatImageButton object banane ke liye kiya jata hai.</p>

              <p>AppCompatImageButton class ke public AppCompatImageButton(@NonNull Context context) constructor ka use, AppCompatImageButton ke objects ko initialize karne ke liye hota hai. Aap is constructor ko use karke AppCompatImageButton view ko create kar sakte hain.</p>

              <p>AppCompatImageButton ek part hai of Android Support Library (now known as AndroidX) ka, jise Android framework ke compatibility ke liye provide kiya gaya hai. Is view class ka use karke aap ImageButton ko customize kar sakte hain aur vector drawables, tints, color states jaise features ka benefit utha sakte hain, jo older Android versions mein native ImageButton class mein available nahi hote.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter Context object leta hai, jo view ko create karne ke context ko represent karta hai. Context, activity, fragment ya application ka reference ho sakta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatImageButton`,
              id: "AppCompatImageButton(Context,AttributeSet)",
              code: `AppCompatImageButton(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,

              fullCode: `public AppCompatImageButton(
                @NonNull Context context,
                @Nullable AttributeSet attrs
            )`,

              des: `AppCompatImageButton class ka ek constructor hai, jo AppCompatImageButton ke objects ko initialize karne ke liye use hota hai.`,

              longDes: `<p>ye constructor AppCompatImageButton ke objects ko XML layout file se inflate karne ke liye use hota hai.</p>

              <p>is constructor ka use, AppCompatImageButton ke objects ko XML layout file se inflate karne ke liye hota hai. Jab aap XML layout file mein AppCompatImageButton view ka use karte hain, to Android system XML attributes aur values ko AppCompatImageButton object ke liye AttributeSet object ke roop mein pass karta hai. Is constructor mein context aur attrs parameters se XML attributes ko receive kiya jata hai.</p>

              <p>AppCompatImageButton ek part hai of Android Support Library (now known as AndroidX) ka, jise Android framework ke compatibility ke liye provide kiya gaya hai. Is view class ka use karke aap ImageButton ko customize kar sakte hain aur vector drawables, tints, color states jaise features ka benefit utha sakte hain, jo older Android versions mein native ImageButton class mein available nahi hote.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter Context object leta hai, jo view ko create karne ke context ko represent karta hai. Context, activity, fragment ya application ka reference ho sakta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter AttributeSet object leta hai, jo XML layout file mein AppCompatImageButton view ke specified attributes ko represent karta hai. XML attributes, view ke properties aur appearance ko define karte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `AppCompatImageButton`,
              id: "AppCompatImageButton(Context,AttributeSet,int)",
              code: `AppCompatImageButton(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              fullCode: `public AppCompatImageButton(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `AppCompatImageButton class ka ek constructor hai, jo AppCompatImageButton ke objects ko initialize karne ke liye use hota hai.`,

              longDes: `<p>ye constructor AppCompatImageButton ke objects ko XML layout file se inflate karne ke liye use hota hai, sath hi view ke default style ko override karne ke liye bhi istemal hota hai.</p>

              <p>is constructor ka use, AppCompatImageButton ke objects ko XML layout file se inflate karne ke liye hota hai aur sath hi view ke default style ko override karne ke liye bhi istemal hota hai. Jab aap XML layout file mein AppCompatImageButton view ka use karte hain, to Android system XML attributes aur values ko AppCompatImageButton object ke liye AttributeSet object ke roop mein pass karta hai. Is constructor mein context, attrs, aur defStyleAttr parameters se XML attributes ko receive kiya jata hai.</p>

              <p>AppCompatImageButton ek hissa hai Android Support Library (ab AndroidX ke naam se jana jata hai) ka, jo Android framework ke compatibility ke liye provide kiya gaya hai. Is view class ka use karke aap ImageButton ko customize kar sakte hain aur vector drawables, tints, color states jaise features ka benefit utha sakte hain, jo older Android versions mein native ImageButton class mein available nahi hote.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter Context object leta hai, jo view ko create karne ke context ko represent karta hai. Context, activity, fragment ya application ka reference ho sakta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter AttributeSet object leta hai, jo XML layout file mein AppCompatImageButton view ke specified attributes ko represent karta hai. XML attributes, view ke properties aur appearance ko define karte hain.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye parameter ek integer value hai, jo view ke default style resource ID ko represent karta hai. Agar aap apne view ko kisi specific default style se override karna chahte hain, to aap is parameter ko use kar sakte hain. Agar aap default style ka use karna chahte hain, to is parameter mein 0 ya R.attr.<style_name> pass karein.</p>`,
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
              name: "hasOverlappingRendering",
              id: "hasOverlappingRendering()",
              dataTypeName: `boolean`,
              code: `<a href="#hasOverlappingRendering()">hasOverlappingRendering</a>()`,
  
              fullCode: `public boolean <a href="#hasOverlappingRendering()">hasOverlappingRendering</a>()`,

              des: `Is method ka use view ke rendering behavior ko handle karne ke liye hota hai, jisse view ke overlapping rendering ko optimize kiya ja sake.`,
  
              longDes: `
              <p>hasOverlappingRendering() method ka use view ke overlapping rendering behavior ko optimize karne ke liye hota hai. Jab aap apne custom view ko implement karte hain aur aapko pata hai ki aapke view ke rendering overlapping wale scenarios mein correct hai, to aap is method ko override karke true return kar sakte hain.</p>

              <p>By default, View class mein hasOverlappingRendering() method true return karta hai, lekin specific views (like AppCompatImageButton) mein aapko apne use case ke hisab se is method ko customize karne ki flexibility hoti hai.</p>
  
              <p>Overlapping rendering tab hota hai jab ek view dusre view ke upar render hota hai, ya phir dono views partially ek dusre ke oopar render hote hain. Overlapping rendering ko handle karna important hai, kyunki isse performance impact ho sakta hai, jisse app ki performance kam ho sakti hai.</p>

              <p>hasOverlappingRendering() method ka return type hota hai boolean, yani ki is method se true ya false return hota hai.</p>
              `,

             
              parameter: [],
            },


            {
              dep: false,
              name: "setBackgroundDrawable",
              id: "setBackgroundDrawable()",
              dataTypeName: `void`,
              code: `<a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable background)`,
  
              fullCode: `public void <a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable background)`,

              des: `Is method ka use, AppCompatImageButton view ke background mein ek Drawable object set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundDrawable() method, AppCompatImageButton view ke background mein ek Drawable object set karne ke liye hota hai. Aap is method ka use karke AppCompatImageButton view ke background ko customize kar sakte hain. Background Drawable image, color, gradient, shape drawable, etc. ho sakta hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Ye parameter Drawable object leta hai, jo AppCompatImageButton view ke background mein set kiya jayega. Agar aap background ko remove karna chahte hain, to aap is parameter mein null pass karein.</p>`,
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

              des: `Is method ka use, AppCompatImageButton view ke background mein ek drawable resource ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundResource() method, AppCompatImageButton view ke background mein ek drawable resource ko set karne ke liye hota hai. Aap is method ka use karke AppCompatImageButton view ke background ko customize kar sakte hain. Background resource ek drawable image ya shape drawable ho sakta hai, jo XML resource file mein define hota hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ye parameter ek integer value hai, jo background drawable resource ka ID represent karta hai. Ye resource ID, res/drawable folder mein define kiye gaye drawable resource file ka ID hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setImageBitmap",
              id: "setImageBitmap()",
              dataTypeName: `void`,
              code: `<a href="#setImageBitmap()">setImageBitmap</a>(Bitmap bm)`,
  
              fullCode: `public void <a href="#setImageBitmap()">setImageBitmap</a>(Bitmap bm)`,

              des: `Is method ka use, AppCompatImageButton view ke image source ko ek Bitmap object se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageBitmap() method, AppCompatImageButton view ke image source ko ek Bitmap object se set karne ke liye hota hai. Aap is method ka use karke AppCompatImageButton view mein kisi specific image ko display kar sakte hain.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Bitmap bm`,
                        des:`<p>Ye parameter ek Bitmap object leta hai, jo AppCompatImageButton view ke image source ko represent karta hai. Aap chahe to Bitmap object ko apne image file se create kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setImageDrawable",
              id: "setImageDrawable()",
              dataTypeName: `void`,
              code: `<a href="#setImageDrawable()">setImageDrawable</a>(@Nullable Drawable drawable)`,
  
              fullCode: `public void <a href="#setImageDrawable()">setImageDrawable</a>(@Nullable Drawable drawable)`,

              des: `Is method ka use, AppCompatImageButton view ke image source ko ek Drawable object se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageDrawable() method, AppCompatImageButton view ke image source ko ek Drawable object se set karne ke liye hota hai. Aap is method ka use karke AppCompatImageButton view mein kisi specific drawable image ko display kar sakte hain.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable drawable`,
                        des:`<p>Ye parameter ek Drawable object leta hai, jo AppCompatImageButton view ke image source ko represent karta hai. Aap chahe to Drawable object ko XML resource se retrieve karke bhi use kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setImageLevel",
              id: "setImageLevel()",
              dataTypeName: `void`,
              code: `<a href="#setImageLevel()">setImageLevel</a>(int level)`,
  
              fullCode: `public void <a href="#setImageLevel()">setImageLevel</a>(int level)`,

              des: `Is method ka use, AppCompatImageButton view ke image drawable ke level ko set karne aur animated drawables ke level changes ko control karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageLevel(int level) method, AppCompatImageButton view ke image drawable ke level ko set karne ke liye hota hai. Image drawables level ke concept ka use animated drawables ko control karne mein kiya jata hai. Har level par drawable ka different representation hota hai. Is method se aap animated drawables ke frames ko control karke images ko display kar sakte hain.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int level`,
                        des:`<p>Ye parameter ek integer value hai, jo drawable image ke level ko represent karta hai. Level ki value usually 0 se lekar maximum drawable image ke defined levels tak hoti hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setImageResource",
              id: "setImageResource()",
              dataTypeName: `void`,
              code: `<a href="#setImageResource()">setImageResource</a>(@DrawableRes int resId)`,
  
              fullCode: `public void <a href="#setImageResource()">setImageResource</a>(@DrawableRes int resId)`,

              des: `Is method ka use, AppCompatImageButton view ke image source ko ek drawable resource se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageResource(@DrawableRes int resId) method, AppCompatImageButton view ke image source ko ek drawable resource se set karne ke liye hota hai. Aap is method ka use karke AppCompatImageButton view mein kisi specific drawable image resource ko display kar sakte hain.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Ye parameter ek integer value hai, jo drawable image resource ka ID represent karta hai. Ye resource ID, res/drawable folder mein define kiye gaye drawable resource file ka ID hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setImageURI",
              id: "setImageURI()",
              dataTypeName: `void`,
              code: `<a href="#setImageURI()">setImageURI</a>(@Nullable Uri uri)`,
  
              fullCode: `public void <a href="#setImageURI()">setImageURI</a>(@Nullable Uri uri)`,

              des: `Is method ka use, AppCompatImageButton view ke image source ko ek Uri object se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageURI(@Nullable Uri uri) method, AppCompatImageButton view ke image source ko ek Uri object se set karne ke liye hota hai. Uri object ek Universal Resource Identifier hota hai, jiska use content providers se data retrieve karne ya file paths ko represent karne ke liye kiya jata hai.</p>

              <p>Aap is method ka use karke kisi bhi Uri object se image ko AppCompatImageButton view mein display kar sakte hain. Ye Uri image file ka location represent karta hai, jise aap device storage, external storage, ya content provider se retrieve kar sakte hain.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Uri uri`,
                        des:`<p>Ye parameter ek Uri object leta hai, jo AppCompatImageButton view ke image source ko represent karta hai.</p>`,
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
  
              des: `Ye method, AppCompatImageButton view ke state changes (jaise ki focused, pressed, enabled, disabled, etc.) ko handle karne ke liye hota hai.`,
  
              longDes: `
                <p>drawableStateChanged() method, AppCompatImageButton view ke state changes ko handle karne ke liye hota hai. Jab AppCompatImageButton ka state change hota hai, jaise ki view focus ho jata hai, press ho jata hai, enable ya disable ho jata hai, ya phir view ke state mein koi bhi change hota hai, to ye method automatically call hota hai.</p>

                <p>Is method mein aap AppCompatImageButton ke current state ke hisab se view ke background aur image drawable par appropriate changes kar sakte hain, jisse view ka visual representation state ke anusar change ho sake.</p>
                    `,
  
              parameter: [],
            },
  

          ],
        },
  
        
     
  

      },
    });
  };
  