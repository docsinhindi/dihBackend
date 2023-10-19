module.exports.AppCompatImageView = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AppCompatImageView",
      hCode: `public class <a href="#AppCompatImageView">AppCompatImageView</a>  extends ImageView implements TintableBackgroundView`,
  
      des: 
        `
        <p>Ye class, ImageView widget ka AppCompat version hai, jo backward compatibility ko support karta hai.</p>
        
  
        <p>AppCompatImageView class, ImageView class ka subclass hai aur AppCompatDrawableManager ke sath inherit karti hai. Iska use images aur drawable resources ko display karne ke liye kiya jata hai.</p>
  
       
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
              name: `AppCompatImageView`,
              id: "AppCompatImageView(Context)",
              code: `AppCompatImageView(@NonNull Context context)`,
              fullCode: `public AppCompatImageView(@NonNull Context context)`,

              des: `Ye constructor, AppCompatImageView class ka object create karne ke liye hota hai.`,

              longDes: `
              <p>AppCompatImageView(@NonNull Context context) constructor, AppCompatImageView class ka object create karne ke liye hota hai. Aap is constructor ka use karke AppCompatImageView view ko dynamically create kar sakte hain.</p>

              <p>AppCompatImageView ek hissa hai Android Support Library (ab AndroidX ke naam se jana jata hai) ka, jo Android framework ke compatibility ke liye provide kiya gaya hai. Is view class ka use karke aap ImageView ko customize kar sakte hain aur vector drawables, tints, color states jaise features ka benefit utha sakte hain, jo older Android versions mein native ImageView class mein available nahi hote.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter Context object leta hai, jo AppCompatImageView view ko create karne ke liye required hota hai. Context object view ke creation aur uske resource access ke liye use hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatImageView`,
              id: "AppCompatImageView(Context,AttributeSet)",
              code: `AppCompatImageView(@NonNull Context context, @Nullable AttributeSet attrs)`,

              fullCode: `public AppCompatImageView(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Ye constructor, AppCompatImageView view ka object create karne ke liye hota hai, jiska use XML layout file mein define kiye gaye attributes ke saath AppCompatImageView ko inflate karne ke liye kiya jata hai.`,

              longDes: `
              <p>ye constructor, AppCompatImageView view ka object create karne ke liye hota hai. Is constructor mein Context object ke saath AttributeSet object bhi provide kiya jata hai. Context object view ke creation aur uske resource access ke liye use hota hai, jabki AttributeSet object view ke XML attributes ko represent karta hai.</p>

              <p>Jab aap AppCompatImageView view ko XML layout file mein include karte hain, to Android framework AppCompatImageView class ka ek object create karta hai. Is process ko inflate karna kehte hain. Inflated view ke saath XML attributes, AttributeSet object mein store hote hain, jise aap constructor ke through view ke object mein pass kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter Context object leta hai, jo AppCompatImageView view ko create karne ke liye required hota hai. Context object view ke creation aur uske resource access ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter AttributeSet object leta hai, jo view ke XML attributes ko represent karta hai. Isse hum XML attributes ke values ko access kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `AppCompatImageView`,
              id: "AppCompatImageView(Context,AttributeSet,int)",
              code: `AppCompatImageView(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              
              fullCode: `public AppCompatImageView(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Ye constructor, AppCompatImageView view ka object create karne ke liye hota hai, jiska use XML layout file mein define kiye gaye attributes ke saath AppCompatImageView ko inflate karne ke liye kiya jata hai, sath hi sath ek default style resource ko apply karne ke liye bhi use hota hai.`,

              longDes: `
              <p>ye constructor, AppCompatImageView view ka object create karne ke liye hota hai. Is constructor mein Context object ke saath AttributeSet object bhi provide kiya jata hai. Context object view ke creation aur uske resource access ke liye use hota hai, jabki AttributeSet object view ke XML attributes ko represent karta hai. Iske alawa, is constructor mein ek integer value defStyleAttr bhi provide kiya jata hai, jo ek default style resource ID ko represent karta hai.</p>

              <p>Jab aap AppCompatImageView view ko XML layout file mein include karte hain, to Android framework AppCompatImageView class ka ek object create karta hai. Is process ko inflate karna kehte hain. Inflated view ke saath XML attributes, AttributeSet object mein store hote hain, jise aap constructor ke through view ke object mein pass kar sakte hain. Sath hi, aap defStyleAttr parameter mein specify kiye gaye default style resource ko bhi apply kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter Context object leta hai, jo AppCompatImageView view ko create karne ke liye required hota hai. Context object view ke creation aur uske resource access ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter AttributeSet object leta hai, jo view ke XML attributes ko represent karta hai. Isse hum XML attributes ke values ko access kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye parameter ek integer value hai, jo default style resource ID ko represent karta hai. Isse hum view ko ek default style se initialize kar sakte hain.</p>`,
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

              des: `Is method ka use, AppCompatImageView view ke rendering behavior ko control karne ke liye hota hai.`,
  
              longDes: `
              <p>hasOverlappingRendering() method ka use, view ke rendering behavior ko determine karne ke liye hota hai. Is method ko override karke, aap apne custom AppCompatImageView class mein view ke rendering behavior ko customize kar sakte hain.</p>

              <p>By default, AppCompatImageView view ke hasOverlappingRendering() method true return karta hai, jisse yeh batata hai ki view ke rendering layers overlapping hain. Yani ki, view ke multiple layers, jaise ki background, image, foreground, etc., ek doosre ke upar overlap ho sakte hain.</p>
  
              <p>Agar aap apne custom AppCompatImageView class mein is method ko override karke false return karte hain, to aap batate hain ki view ke rendering layers ek doosre ke upar overlap nahi karte hain. Isse drawing optimizations ki ja sakti hain aur view ke rendering performance ko improve kiya ja sakta hai.</p>
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

              des: `Is method ka use, AppCompatImageView view ke background ko ek Drawable object se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundDrawable(@Nullable Drawable background) method, AppCompatImageView view ke background ko ek Drawable object se set karne ke liye hota hai. Background Drawable ek image, color, shape, gradient, ya koi bhi visual representation ho sakta hai.</p>
  
              <p>Aap is method ka use karke AppCompatImageView view ke background mein kisi bhi custom Drawable object ko set kar sakte hain, jisse view ka background customize ho sake.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable background`,
                        des:`<p>Ye parameter ek Drawable object leta hai, jo AppCompatImageView view ke background ko represent karta hai. Aap is parameter mein kisi bhi valid Drawable object ko pass kar sakte hain.</p>`,
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

              des: `Is method ka use, AppCompatImageView view ke background ko ek drawable resource ID se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBackgroundResource(@DrawableRes int resId) method, AppCompatImageView view ke background ko ek drawable resource ID se set karne ke liye hota hai. Background drawable resource ek image, shape, color, ya gradient resource ho sakta hai.</p>
  
              <p>Aap is method ka use karke AppCompatImageView view ke background mein kisi bhi drawable resource ko set kar sakte hain, jisse view ka background customize ho sake.</p>
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
              name: "setImageBitmap",
              id: "setImageBitmap()",
              dataTypeName: `void`,
              code: `<a href="#setImageBitmap()">setImageBitmap</a>(Bitmap bm)`,
  
              fullCode: `public void <a href="#setImageBitmap()">setImageBitmap</a>(Bitmap bm)`,

              des: `Is method ka use, AppCompatImageView view ke image source ko ek Bitmap object se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageBitmap(Bitmap bm) method, AppCompatImageView view ke image source ko ek Bitmap object se set karne ke liye hota hai. Aap is method ka use karke AppCompatImageView view mein kisi bhi custom Bitmap image ko display kar sakte hain.</p>
  
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Bitmap bm`,
                        des:`<p>Ye parameter ek Bitmap object leta hai, jo AppCompatImageView view ke image source ko represent karta hai. Aap is parameter mein kisi bhi valid Bitmap object ko pass kar sakte hain.</p>`,
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

              des: `Is method ka use, AppCompatImageView view ke image source ko ek Drawable object se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageDrawable(@Nullable Drawable drawable) method, AppCompatImageView view ke image source ko ek Drawable object se set karne ke liye hota hai. Aap is method ka use karke AppCompatImageView view mein kisi bhi custom Drawable image ko display kar sakte hain.</p>
  
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable drawable`,
                        des:`<p>Ye parameter ek Drawable object leta hai, jo AppCompatImageView view ke image source ko represent karta hai. Aap is parameter mein kisi bhi valid Drawable object ko pass kar sakte hain.</p>`,
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

              des: `Is method ka use, AppCompatImageView view ke image level ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageLevel(int level) method, AppCompatImageView view ke image level ko set karne ke liye hota hai. Image level, ImageView par display kiye jane wale images mein se ek specific image ko indicate karta hai. Image level ke use se aap different states ya variations ke liye alag-alag images ko ImageView mein display kar sakte hain.</p>

              <p>Ye method image resources ke sath kaam karta hai, jinme multiple states ya variations ho, jinhe ek level number ke saath represent kiya jata hai. ImageView mein in different levels ke corresponding images ko display karne ke liye setImageLevel() method ka use kiya jata hai.</p>
  
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int level`,
                        des:`<p>Ye parameter ek integer value hai, jo image level ko represent karta hai. Aap is parameter mein kisi bhi level number ko pass kar sakte hain.</p>`,
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

              des: `Is method ka use, AppCompatImageView view ke image source ko ek drawable resource ID se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageResource(@DrawableRes int resId) method, AppCompatImageView view ke image source ko ek drawable resource ID se set karne ke liye hota hai. Background drawable resource ek image, shape, color, ya gradient resource ho sakta hai.</p>

              <p>Aap is method ka use karke AppCompatImageView view mein kisi bhi drawable resource ko set kar sakte hain, jisse view ka image customize ho sake.</p>
  
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
              name: "setImageURI",
              id: "setImageURI()",
              dataTypeName: `void`,
              code: `<a href="#setImageURI()">setImageURI</a>(@Nullable Uri uri)`,
  
              fullCode: `public void <a href="#setImageURI()">setImageURI</a>(@Nullable Uri uri)`,

              des: `Is method ka use, AppCompatImageView view ke image source ko ek Uri object se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setImageURI(@Nullable Uri uri) method, AppCompatImageView view ke image source ko ek Uri object se set karne ke liye hota hai. Aap is method ka use karke AppCompatImageView view mein kisi bhi Uri object ko image source ke taur par set kar sakte hain.</p>

              <p>Uri ek uniform resource identifier hota hai, jo file, content, ya network location ko represent karta hai. Aap is method ka use karke local file, content provider ya web URL se image ko set kar sakte hain.</p>
  
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Uri uri`,
                        des:`<p>Ye parameter ek Uri object leta hai, jo AppCompatImageView view ke image source ko represent karta hai. Aap is parameter mein kisi bhi valid Uri object ko pass kar sakte hain.</p>`,
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
  
              des: `Ye method, AppCompatImageView view ke drawable state ko track karne aur update karne ke liye hota hai.`,
  
              longDes: `
                <p>drawableStateChanged() method, AppCompatImageView view ke drawable state ko track karne aur update karne ke liye hota hai. Drawable state ka matlab hai, view ke background ya image jaise drawables ke different states, jaise ki enabled, pressed, focused, selected, etc.</p>

                <p>Jab bhi AppCompatImageView view ke drawable state mein koi change hota hai, jaise ki view focus ho ya pressed ho, to drawableStateChanged() method automatically call hota hai. Is method ke andar aap view ke current state ko check kar sakte hain aur uske corresponding drawable resources ko update kar sakte hain, jisse view ka appearance change ho sake.</p>
                    `,
  
              parameter: [],
            },
  

          ],
        },
  
        
     
  

      },
    });
  };
  