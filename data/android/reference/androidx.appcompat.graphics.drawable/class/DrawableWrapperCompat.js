module.exports.DrawableWrapperCompat = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "DrawableWrapperCompat",
      hCode: `public class <a href="#DrawableWrapperCompat">DrawableWrapperCompat</a>  extends Drawable implements Drawable.Callback`,
  
      des: 
        `
        <p>DrawableWrapperCompat class ka use, existing Drawable objects ko wrap aur customize karne ke liye kiya jata hai. Is class ke methods, DrawableWrapper ke features aur behavior ko backward compatibility ke sath provide karte hai.</p>
        
  
        <p>DrawableWrapperCompat class, existing Drawable objects ko wrap karta hai aur backward compatibility ke sath customize karne ki suvidha deta hai. Is class ka use karke developers, DrawableWrapper ke features ko backward compatibility ke sath use kar sakte hai, existing Drawable objects ko customize kar sakte hai, aur unko modify karke stateful behavior implement kar sakte hai.</p>
  
       
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
              name: `DrawableWrapperCompat`,
              id: "DrawableWrapperCompat()",
              code: `DrawableWrapperCompat(Drawable drawable)`,
              fullCode: `public DrawableWrapperCompat(Drawable drawable)`,

              des: `Ye constructor, DrawableWrapperCompat ke object ko initialize karne ke liye istemal hota hai.`,

              longDes: `<p>DrawableWrapperCompat class ek abstract class hai, jo Drawable class ko extend karti hai. Is constructor ka upyog karke hum DrawableWrapperCompat ke object ko banate hain aur usme diye gaye drawable ko initialize karte hain.</p>

              <p>DrawableWrapperCompat class ka upyog karke hum ek wrapper drawable create kar sakte hain, jiske andar hum ek existing Drawable object ko encapsulate kar sakte hain. Isse hum DrawableWrapperCompat class ke additional features, customization, ya modifications ko use kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable drawable`,
                        des:`<p>Drawable object, jo DrawableWrapperCompat object ke underlying drawable ke roop mein set kiya jayega.</p>`,
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
              name: "draw",
              id: "draw()",
              dataTypeName: `void`,
              code: `<a href="#draw()">draw</a>(@NonNull Canvas canvas)`,
  
              fullCode: `public void <a href="#draw()">draw</a>(@NonNull Canvas canvas)`,

              des: `Ye method, DrawableWrapperCompat ke drawable object ke liye drawing (chitrankan) ko handle karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>draw() method ka upyog karke hum DrawableWrapperCompat ke drawable object ko ek Canvas object par draw (chitra) kar sakte hain. Canvas object, 2D drawing operations ko perform karne ke liye istemal hota hai.</p>

              <p>draw() method ke andar hum drawable ke drawing operations ko customize kar sakte hain. Hum canvas parameter ko use karke Canvas object ko prapt kar sakte hain, jisme hum drawing operations ko execute kar sakte hain.</p>
  
              <p>draw() method ko override karke hum apne custom DrawableWrapperCompat class mein iska implementation provide kar sakte hain. Isme hum drawable ke drawing operations ko customize kar sakte hain, jaise shape, color, transformations, blending modes, aur anya drawing instructions.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Canvas canvas`,
                        des:`<p>Canvas object, jisme drawable ko draw karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: "getChangingConfigurations",
              id: "getChangingConfigurations()",
              dataTypeName: `int`,
              code: `<a href="#getChangingConfigurations()">getChangingConfigurations</a>()`,
  
              fullCode: `public int <a href="#getChangingConfigurations()">getChangingConfigurations</a>()`,

              des: `Ye method, DrawableWrapperCompat ke drawable object ke liye changing configurations (badalne wali configurations) ko darshata hai.`,
  
              longDes: `
              <p>getChangingConfigurations() method ka upyog karke hum DrawableWrapperCompat ke drawable object ke badalne wali configurations ko prapt kar sakte hain. Badalne wali configurations, drawable ke intrinsic state mein hone wale badlavon ko represent karte hain, jaise resource configurations, theme changes, screen orientation, etc.</p>
  
              <p>Method ka return type int hota hai, jo badalne wali configurations ko bitwise OR ke roop mein combine kiya gaya hai. Yeh value Drawable class ke getChangingConfigurations() method se inherit hoti hai.</p>
              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "getCurrent",
              id: "getCurrent()",
              dataTypeName: `Drawable`,
              code: `<a href="#getCurrent()">getCurrent</a>()`,
  
              fullCode: `public Drawable <a href="#getCurrent()">getCurrent</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getCurrent() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ko prapt kar sakte hain. Underlying drawable, yani wo Drawable object jiske upar DrawableWrapperCompat object ka wrapper hai.</p>
  
              <p>Method ka return type Drawable hota hai, jisse hum prapt kiya gaya underlying drawable object prapt kar sakte hain. Agar koi underlying drawable object set nahi kiya gaya hai, ya phir koi invalid drawable object hai, to null return kiya jayega.</p>
              `,

             
              parameter: [],
            },

  
  

            {
              dep: false,
              name: "getDrawable",
              id: "getDrawable()",
              dataTypeName: `@Nullable Drawable`,
              code: `<a href="#getDrawable()">getDrawable</a>()`,
  
              fullCode: `public @Nullable Drawable <a href="#getDrawable()">getDrawable</a>()`,

              des: `Ye method, DrawableWrapperCompat ke drawable object ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getDrawable() method ka upyog karke hum DrawableWrapperCompat ke drawable object ko prapt kar sakte hain. Ye method underlying drawable object ko darshata hai, jiske upar DrawableWrapperCompat object ka wrapper hai.</p>
  
              <p>Method ka return type Drawable ho sakta hai ya null ho sakta hai. Agar koi valid underlying drawable object set nahi kiya gaya hai, to null return kiya jayega.</p>
              `,

             
              parameter: [],
            },

  
  

            {
              dep: false,
              name: "getIntrinsicHeight",
              id: "getIntrinsicHeight()",
              dataTypeName: `int`,
              code: `<a href="#getIntrinsicHeight()">getIntrinsicHeight</a>()`,
  
              fullCode: `public int <a href="#getIntrinsicHeight()">getIntrinsicHeight</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ki intrinsic height (prakritik unchai) ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getIntrinsicHeight() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ki intrinsic height ko prapt kar sakte hain. Intrinsic height, drawable ka original height hota hai, jise wo design-time par laya gaya hai.</p>
  
              <p>Method ka return type int hota hai, jisme underlying drawable object ki intrinsic height hoti hai. Agar koi valid drawable object set nahi kiya gaya hai, to 0 return kiya jayega.</p>
              `,

             
              parameter: [],
            },

  
  

            {
              dep: false,
              name: "getIntrinsicWidth",
              id: "getIntrinsicWidth()",
              dataTypeName: `int`,
              code: `<a href="#getIntrinsicWidth()">getIntrinsicWidth</a>()`,
  
              fullCode: `public int <a href="#getIntrinsicWidth()">getIntrinsicWidth</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ki intrinsic width (prakritik chaudai) ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getIntrinsicWidth() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ki intrinsic width ko prapt kar sakte hain. Intrinsic width, drawable ka original width hota hai, jise wo design-time par laya gaya hai.</p>
  
              <p>Method ka return type int hota hai, jisme underlying drawable object ki intrinsic width hoti hai. Agar koi valid drawable object set nahi kiya gaya hai, to 0 return kiya jayega.</p>
              `,

             
              parameter: [],
            },

  
  
  

            {
              dep: false,
              name: "getMinimumHeight",
              id: "getMinimumHeight()",
              dataTypeName: `int`,
              code: `<a href="#getMinimumHeight()">getMinimumHeight</a>()`,
  
              fullCode: `public int <a href="#getMinimumHeight()">getMinimumHeight</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ki minimum height ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getMinimumHeight() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ki minimum height ko prapt kar sakte hain. Minimum height, drawable ka minimum required height hota hai, jise wo layout-time par istemal karna chahta hai.</p>
  
              <p>Method ka return type int hota hai, jisme underlying drawable object ki minimum height hoti hai. Agar koi valid drawable object set nahi kiya gaya hai, to 0 return kiya jayega.</p>
              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "getMinimumWidth",
              id: "getMinimumWidth()",
              dataTypeName: `int`,
              code: `<a href="#getMinimumWidth()">getMinimumWidth</a>()`,
  
              fullCode: `public int <a href="#getMinimumWidth()">getMinimumWidth</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ki minimum width ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getMinimumWidth() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ki minimum width ko prapt kar sakte hain. Minimum width, drawable ka minimum required width hota hai, jise wo layout-time par istemal karna chahta hai.</p>
  
              <p>Method ka return type int hota hai, jisme underlying drawable object ki minimum width hoti hai. Agar koi valid drawable object set nahi kiya gaya hai, to 0 return kiya jayega.</p>
              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "getOpacity",
              id: "getOpacity()",
              dataTypeName: `int`,
              code: `<a href="#getOpacity()">getOpacity</a>()`,
  
              fullCode: `public int <a href="#getOpacity()">getOpacity</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke opacity ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getOpacity() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ke opacity level ko prapt kar sakte hain. Opacity level, drawable ke through dikhaya jaane wale content ki transparency darshata hai.</p>
  
              <p>Method ka return type int hota hai, jisme underlying drawable object ke opacity level ko darshaya jata hai. Opacity level ko alag-alag constants ke form mein represent kiya jata hai, jaise PixelFormat.TRANSPARENT, PixelFormat.OPAQUE, PixelFormat.TRANSLUCENT, etc.</p>
              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "getPadding",
              id: "getPadding()",
              dataTypeName: `boolean`,
              code: `<a href="#getPadding()">getPadding</a>(Rect padding)`,
  
              fullCode: `public boolean <a href="#getPadding()">getPadding</a>(Rect padding)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object se padding ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getPadding(Rect padding) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object se padding (alagav) ko prapt kar sakte hain. Padding, drawable ke content ke charo taraf ke shetr ko represent karta hai, jahan additional space ya spacing hai.</p>
  
              <p>Method ka return type boolean hota hai. Agar padding prapt karne mei saksham hai aur padding Rect object mein set ho jata hai, to method true return karta hai. Agar padding prapt karne mei asamarth hai ya koi error aata hai, to method false return karta hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Rect padding`,
                        des:`<p>Method ka parameter padding ek Rect object hota hai, jisme padding ki details ko store karne ke liye istemal kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

  

            {
              dep: false,
              name: "getState",
              id: "getState()",
              dataTypeName: `int[]`,
              code: `<a href="#getState()">getState</a>()`,
  
              fullCode: `public int[] <a href="#getState()">getState</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke sthiti (state) ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getState() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ke sthiti (state) ko prapt kar sakte hain. Stithi, drawable object ke current state (current state) ko darshata hai, jaise pressed state, focused state, disabled state, etc.</p>
  
              <p>Method ka return type int[] hota hai, jisme underlying drawable object ke sthiti (state) ka array hota hai. Har element, specific state ko represent karta hai. Agar koi valid drawable object set nahi kiya gaya hai, to null return kiya jayega.</p>
              `,

             
              parameter: [],
            },

  
  

            {
              dep: false,
              name: "getTransparentRegion",
              id: "getTransparentRegion()",
              dataTypeName: `Region`,
              code: `<a href="#getTransparentRegion()">getTransparentRegion</a>()`,
  
              fullCode: `public Region <a href="#getTransparentRegion()">getTransparentRegion</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object se transparent region (prashparen) ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>getTransparentRegion() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object se transparent region ko prapt kar sakte hain. Transparent region, drawable ke andar ke bhag ko darshata hai jahaan transparency hoti hai.</p>
  
              <p>Method ka return type Region hota hai, jisse hum prapt ki gayi transparent region ko darshaya jata hai. Agar koi valid drawable object set nahi kiya gaya hai ya phir transparency na ho, to null return kiya jayega.</p>
              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "invalidateDrawable",
              id: "invalidateDrawable()",
              dataTypeName: `void`,
              code: `<a href="#invalidateDrawable()">invalidateDrawable</a>(Drawable who)`,
  
              fullCode: `public void <a href="#invalidateDrawable()">invalidateDrawable</a>(Drawable who)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ko invalid karta hai, jisse redraw (dubara chitra) karne ke liye prerit kiya jata hai.`,
  
              longDes: `
              <p>invalidateDrawable(Drawable who) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ko invalid kar sakte hain. Jab ek drawable object ke sthiti (state) mein koi badlav hota hai, jaise uska rang, alpha (transparent) value, ya koi aur attribute, to usko dubara chitra karne ke liye invalidate kiya jata hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable who`,
                        des:`<p>Method ka parameter who ek Drawable object hota hai, jisse hum invalid karne ke liye specify kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "isAutoMirrored",
              id: "isAutoMirrored()",
              dataTypeName: `boolean`,
              code: `<a href="#isAutoMirrored()">isAutoMirrored</a>()`,
  
              fullCode: `public boolean <a href="#isAutoMirrored()">isAutoMirrored</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke auto mirroring ki sthiti ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>isAutoMirrored() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ki auto mirroring sthiti ko prapt kar sakte hain. Auto mirroring ka matlab hota hai ki drawable object, mirroring (abhass) ko automatically apply karega jab uska layout direction (layout disha) badalti hai.</p>

              <p>Method ka return type boolean hota hai. Agar underlying drawable object auto mirroring enable hai, to method true return karta hai. Agar auto mirroring disable hai, to method false return karta hai.</p>
              `,

             
              parameter: [],
            },

  

  

            {
              dep: false,
              name: "isStateful",
              id: "isStateful()",
              dataTypeName: `boolean`,
              code: `<a href="#isStateful()">isStateful</a>()`,
  
              fullCode: `public boolean <a href="#isStateful()">isStateful</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke statefulness ko prapt karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>isStateful() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ki statefulness ko prapt kar sakte hain. Statefulness ka matlab hota hai ki drawable object, various states ke liye defined ho aur uske liye appropriate visual representation provide kar sake.</p>

              <p>Method ka return type boolean hota hai. Agar underlying drawable object stateful hai, to method true return karta hai. Agar stateful nahi hai, to method false return karta hai.</p>
              `,

             
              parameter: [],
            },

  
  

            {
              dep: false,
              name: "jumpToCurrentState",
              id: "jumpToCurrentState()",
              dataTypeName: `void`,
              code: `<a href="#jumpToCurrentState()">jumpToCurrentState</a>()`,
  
              fullCode: `public void <a href="#jumpToCurrentState()">jumpToCurrentState</a>()`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke current state par turant switch karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>jumpToCurrentState() method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ko current state par jaldi switch kar sakte hain. Ye method unanimated transitions aur animations ko avsar dene ke bajaye, drawable ko turant apne current state par le jata hai.</p>
              `,

             
              parameter: [],
            },

  
  

            {
              dep: false,
              name: "scheduleDrawable",
              id: "scheduleDrawable()",
              dataTypeName: `void`,
              code: `<a href="#scheduleDrawable()">scheduleDrawable</a>(Drawable who, Runnable what, long when)`,
  
              fullCode: `public void <a href="#scheduleDrawable()">scheduleDrawable</a>(Drawable who, Runnable what, long when)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke liye ek drawable callback ko schedule karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>scheduleDrawable(Drawable who, Runnable what, long when) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ke liye ek drawable callback ko schedule kar sakte hain. Drawable callback, ek Runnable object hota hai jisko scheduled time par execute kiya jata hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable who`,
                        des:`<p>Drawable object jiske liye callback schedule karna hai.</p>`,
                      },
                      {
                        dataTypeName: `Runnable what`,
                        des:`<p>Scheduled time par execute hone wala Runnable object.</p>`,
                      },
                      {
                        dataTypeName: `long when`,
                        des:`<p>Callback ka scheduled time, jise milliseconds mein represent kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  

            {
              dep: false,
              name: "setAlpha",
              id: "setAlpha()",
              dataTypeName: `void`,
              code: `<a href="#setAlpha()">setAlpha</a>(int alpha)`,
  
              fullCode: `public void <a href="#setAlpha()">setAlpha</a>(int alpha)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke alpha (opacity) value ko set karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setAlpha(int alpha) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ki alpha value ko set kar sakte hain. Alpha value, drawable object ki opacity level ko darshata hai, jahaan 0 fully transparent hota hai aur 255 fully opaque hota hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int alpha`,
                        des:`<p>Method ke parameter alpha ek integer value hoti hai, jiske range 0 se 255 tak hoti hai. 0 value par drawable object fully transparent ho jata hai, aur 255 value par fully opaque ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  

            {
              dep: false,
              name: "setAutoMirrored",
              id: "setAutoMirrored()",
              dataTypeName: `void`,
              code: `<a href="#setAutoMirrored()">setAutoMirrored</a>(boolean mirrored)`,
  
              fullCode: `public void <a href="#setAutoMirrored()">setAutoMirrored</a>(boolean mirrored)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke liye auto mirroring ko enable ya disable karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setAutoMirrored(boolean mirrored) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ke liye auto mirroring ko enable ya disable kar sakte hain. Auto mirroring ka matlab hota hai ki drawable object, mirroring  ko automatically apply karega jab uska layout direction badalti hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean mirrored`,
                        des:`<p>Method ka parameter mirrored ek boolean value hoti hai. Agar mirrored true hai, to auto mirroring enable ho jayega. Agar mirrored false hai, to auto mirroring disable ho jayega.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setChangingConfigurations",
              id: "setChangingConfigurations()",
              dataTypeName: `void`,
              code: `<a href="#setChangingConfigurations()">setChangingConfigurations</a>(int configs)`,
  
              fullCode: `public void <a href="#setChangingConfigurations()">setChangingConfigurations</a>(int configs)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke changing configurations (badalte huye configurations) ko set karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setChangingConfigurations(int configs) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ke changing configurations ko set kar sakte hain. Changing configurations, drawable object ke saath judi huyi configurations hai, jinhein badalte samay indicate kiya jata hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int configs`,
                        des:`<p>Method ka parameter configs ek integer value hoti hai, jiske binary representation mein changing configurations ko darshaya jata hai. Different configurations ko combine karne ke liye bitwise OR operator ka upyog kiya jata hai, jaise config1 | config2.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setColorFilter",
              id: "setColorFilter()",
              dataTypeName: `void`,
              code: `<a href="#setColorFilter()">setColorFilter</a>(ColorFilter cf)`,
  
              fullCode: `public void <a href="#setColorFilter()">setColorFilter</a>(ColorFilter cf)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke liye ek color filter ko set karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setColorFilter(ColorFilter cf) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ke liye ek color filter ko set kar sakte hain. Color filter, drawable object ke rendering process mein ek rang parivartan ke liye istemal hota hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ColorFilter cf`,
                        des:`<p>Method ka parameter cf ek ColorFilter object hota hai, jisse hum color filter specify kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setDither",
              id: "setDither()",
              dataTypeName: `void`,
              code: `<a href="#setDither()">setDither</a>(boolean dither)`,
  
              fullCode: `public void <a href="#setDither()">setDither</a>(boolean dither)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke dithering ko enable ya disable karne ke liye istemal hota hai`,
  
              longDes: `
              <p>setDither(boolean dither) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ke dithering ko enable ya disable kar sakte hain. Dithering, drawable object ke rendering process mein ek technique hai jiske dwara smooth gradient aur color transitions achieve kiye jate hain.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean dither`,
                        des:`<p>Method ka parameter dither ek boolean value hoti hai. Agar dither true hai, to dithering enable ho jata hai. Agar dither false hai, to dithering disable ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  


            {
              dep: false,
              name: "setDrawable",
              id: "setDrawable()",
              dataTypeName: `void`,
              code: `<a href="#setDrawable()">setDrawable</a>(@Nullable Drawable drawable)`,
  
              fullCode: `public void <a href="#setDrawable()">setDrawable</a>(@Nullable Drawable drawable)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ko set karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>SetDrawable(@Nullable Drawable drawable) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ko replace kar sakte hain. Is method ke dwara hum kisi bhi Drawable object ko DrawableWrapperCompat ke andar set kar sakte hain.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable drawable`,
                        des:`<p>Method ke parameter drawable ek nullable Drawable object hota hai. Hum is parameter mein us Drawable object ko provide kar sakte hain jise hum DrawableWrapperCompat ke underlying drawable object ke roop mein set karna chahte hain. Agar drawable parameter null hai, to DrawableWrapperCompat ke underlying drawable object ko null kar diya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setFilterBitmap",
              id: "setFilterBitmap()",
              dataTypeName: `void`,
              code: `<a href="#setFilterBitmap()">setFilterBitmap</a>(boolean filter)`,
  
              fullCode: `public void <a href="#setFilterBitmap()">setFilterBitmap</a>(boolean filter)`,

              des: `Ye method, DrawableWrapperCompat ke underlying drawable object ke bitmap filtering ko enable ya disable karne ke liye istemal hota hai.`,
  
              longDes: `
              <p>setFilterBitmap(boolean filter) method ka upyog karke hum DrawableWrapperCompat ke underlying drawable object ke liye bitmap filtering ko enable ya disable kar sakte hain. Bitmap filtering, drawable object ke bitmap rendering process mein ek technique hai jiske dwara bitmap ko high-quality me dikhaya ja sakta hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean filter`,
                        des:`<p>Method ka parameter filter ek boolean value hoti hai. Agar filter true hai, to bitmap filtering enable ho jata hai. Agar filter false hai, to bitmap filtering disable ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "setHotspot",
              id: "setHotspot()",
              dataTypeName: `void`,
              code: `<a href="#setHotspot()">setHotspot</a>(float x, float y)`,
  
              fullCode: `public void <a href="#setHotspot()">setHotspot</a>(float x, float y)`,

              des: `Ye method, ek Drawable object ke hotspot ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setHotspot() method ke dwara hum ek Drawable object ka hotspot sthapit kar sakte hain. Hotspot, ek point hai jahan se Drawable ke animations aur touch events shuru hote hain. Jab kisi view par touch input diya jata hai, to us view par hotspots ke coordinates ke saath interact kiya jata hai.</p>

              <p>setHotspot() method ka upyog karke hum Drawable object ke hotspot ko set kar sakte hain. Isse, jab bhi kisi view par touch events generate hote hain, woh view Drawable ke specified hotspot coordinates ke saath interact karta hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `float x`,
                        des:`<p>X-coordinate (horizontal coordinate) hota hai jahan par hotspot sthapit karna hai.</p>`,
                      },
                      {
                        dataTypeName: `float y`,
                        des:`<p>Y-coordinate (vertical coordinate) hota hai jahan par hotspot sthapit karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setHotspotBounds",
              id: "setHotspotBounds()",
              dataTypeName: `void`,
              code: `<a href="#setHotspotBounds()">setHotspotBounds</a>(int left, int top, int right, int bottom)`,
  
              fullCode: `public void <a href="#setHotspotBounds()">setHotspotBounds</a>(int left, int top, int right, int bottom)`,

              des: `Ye method, ek Drawable object ke hotspot ke bounds (simit) ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setHotspotBounds() method ke dwara hum ek Drawable object ke hotspot ke simit ko set kar sakte hain. Hotspot bounds, ek rectangular area hota hai jahan Drawable ke animations aur touch events shuru hote hain. Jab kisi view par touch input diya jata hai, to us view ke hotspot bounds ke andar ke coordinates ke saath interact kiya jata hai.</p>

              <p>setHotspotBounds() method ka upyog karke hum Drawable object ke hotspot ke simit ko set kar sakte hain. Isse, jab bhi kisi view par touch events generate hote hain, woh view Drawable ke specified hotspot bounds ke andar ke coordinates ke saath interact karta hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int left`,
                        des:`<p>Hotspot bounds ka left coordinate hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int top`,
                        des:`<p>Hotspot bounds ka top coordinate hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int right`,
                        des:`<p>Hotspot bounds ka right coordinate hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int bottom`,
                        des:`<p>Hotspot bounds ka bottom coordinate hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  

            {
              dep: false,
              name: "setState",
              id: "setState()",
              dataTypeName: `boolean`,
              code: `<a href="#setState()">setState</a>(int[] stateSet)`,
  
              fullCode: `public boolean <a href="#setState()">setState</a>(int[] stateSet)`,

              des: `Ye method, ek Drawable object ke sthiti (state) ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setState() method ke dwara hum ek Drawable object ke sthiti (state) ko set kar sakte hain. Drawable ke sthiti (state) ka matlab hota hai uski current halat, jaise pressed (daba hua), focused (dhyan kendrit), enabled (samarth), aadi. Har sthiti ke liye ek state ID hota hai.</p>

              <p>setState() method ka upyog karke hum Drawable object ke sthiti (state) ko set kar sakte hain. Yeh method sthiti (state) IDs ke array ko lekar usko Drawable object ke current sthiti (state) ke roop mein apply karta hai. Method true boolean value return karta hai agar Drawable object ke sthiti mein koi badlav hota hai, aur false return karta hai agar koi badlav nahi hota hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int[] stateSet`,
                        des:`<p>Ek int array hai, jisme Drawable ke sthiti IDs ko represent kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  
  

            {
              dep: false,
              name: "setTint",
              id: "setTint()",
              dataTypeName: `void`,
              code: `<a href="#setTint()">setTint</a>(int tint)`,
  
              fullCode: `public void <a href="#setTint()">setTint</a>(int tint)`,

              des: `Ye method, ek Drawable object ke tint color ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setTint() method ke dwara hum ek Drawable object ke tint color ko set kar sakte hain. Tint color, ek single color hota hai jo Drawable object ke upar apply kiya jata hai. Tint color Drawable object ke existing colors ke saath blend ho jata hai..</p>

              <p>setTint() method ka upyog karke hum Drawable object ke tint color ko set kar sakte hain. Tint color Drawable object ke visual appearance ko modify karne ke liye upyog hota hai. Agar tint parameter ke roop mein resource ID diya jata hai, to Drawable object tint color resource se liya jayega. Agar tint parameter ke roop mein RGB color code diya jata hai, to wo color code directly use kiya jayega.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int tint`,
                        des:`<p>Ek integer value hai, jisme tint color ka resource ID ya RGB color code hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "setTintList",
              id: "setTintList()",
              dataTypeName: `void`,
              code: `<a href="#setTintList()">setTintList</a>(ColorStateList tint)`,
  
              fullCode: `public void <a href="#setTintList()">setTintList</a>(ColorStateList tint)`,

              des: `Ye method, ek Drawable object ke tint color ki ColorStateList ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setTintList() method ke dwara hum ek Drawable object ke tint color ke liye ColorStateList ko set kar sakte hain. ColorStateList, multiple colors ko state IDs ke saath associate karne ke liye upyog hoti hai. Har state ID ke liye ek specific color provide kiya jata hai.</p>

              <p>setTintList() method ka upyog karke hum Drawable object ke tint color ke liye ColorStateList ko set kar sakte hain. Isse Drawable object ke visual appearance aur behavior ko state-based colors ke saath customize kiya ja sakta hai. Drawable ke sthiti (state) ke anusar, ColorStateList se appropriate color apply kiya jata hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ColorStateList tint`,
                        des:`<p>Ek ColorStateList object hai, jisme tint colors ke state IDs aur unke corresponding colors hote hain.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setTintMode",
              id: "setTintMode()",
              dataTypeName: `void`,
              code: `<a href="#setTintMode()">setTintMode</a>(PorterDuff.Mode tintMode)`,
  
              fullCode: `public void <a href="#setTintMode()">setTintMode</a>(PorterDuff.Mode tintMode)`,

              des: `Ye method, ek Drawable object ke tint mode ko set karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>setTintMode() method ke dwara hum ek Drawable object ke tint mode ko set kar sakte hain. Tint mode, tint color ko Drawable ke existing colors ke saath kaise combine (blend) kiya jayega, ye define karta hai. PorterDuff.Mode enumeration ka upyog tint mode ko specify karne ke liye kiya jata hai.</p>

              <p>setTintMode() method ka upyog karke hum Drawable object ke tint mode ko set kar sakte hain. Tint mode, tint color ko Drawable ke existing colors ke saath kaise combine kiya jayega, ye control karta hai. Tint mode ke anusaar, tint color ka interaction existing colors ke saath determine hota hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `PorterDuff.Mode tintMode`,
                        des:`<p>Ek PorterDuff.Mode object hai, jisme tint mode ka type specified hota hai, jaise SRC_IN, SRC_OVER, DST_IN, aadi.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "setVisible",
              id: "setVisible()",
              dataTypeName: `boolean`,
              code: `<a href="#setVisible()">setVisible</a>(boolean visible, boolean restart)`,
  
              fullCode: `public boolean <a href="#setVisible()">setVisible</a>(boolean visible, boolean restart)`,

              des: `Ye method, ek Drawable object ki visibility (dikhava) ko set karne ke liye upyog hota hai aur optional taur par animation ko restart karne ke liye bhi use kiya ja sakta hai.`,
  
              longDes: `
              <p>setVisible() method ke dwara hum ek Drawable object ki visibility (dikhava) ko set kar sakte hain. Method ke pehle parameter 'visible' se hum dikhava status ko control karte hain, jahan 'true' visible (dikhai deta hai) aur 'false' invisible (chhupa hua) ho jata hai. Method ke doosre parameter 'restart' se animation restart karne ki avashyakta ko control kiya jata hai, jahan 'true' animation restart hoti hai aur 'false' animation ko restart nahi kiya jata hai.</p>

              <p>setVisible() method ka upyog karke hum Drawable object ki visibility ko set kar sakte hain. Visible parameter se Drawable object ko visible ya invisible kar sakte hain. Agar restart parameter 'true' hai, to animation ko restart kar diya jata hai.</p>

              <p>Method true boolean value return karta hai agar visibility status mein koi badlav hota hai, aur false return karta hai agar koi badlav nahi hota hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean visible`,
                        des:`<p>Boolean value jo visibility status ko control karta hai, jahan 'true' visible (dikhai deta hai) aur 'false' invisible (chhupa hua) ho jata hai.</p>`,
                      },
                      {
                        dataTypeName: `boolean restart`,
                        des:`<p>Boolean value jo animation restart karne ki avashyakta ko control karta hai, jahan 'true' animation restart hoti hai aur 'false' animation ko restart nahi kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "unscheduleDrawable",
              id: "unscheduleDrawable()",
              dataTypeName: `void`,
              code: `<a href="#unscheduleDrawable()">unscheduleDrawable</a>(Drawable who, Runnable what)`,
  
              fullCode: `public void <a href="#unscheduleDrawable()">unscheduleDrawable</a>(Drawable who, Runnable what)`,

              des: `Ye method, Drawable object ke liye previously scheduled (schedule kiye gaye) huye Runnable ko cancel karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>unscheduleDrawable() method ke dwara hum Drawable object ke liye previously scheduled huye Runnable ko cancel kar sakte hain. Scheduled Runnable, Drawable object ke animation, callback, ya koi dusri asynchronous task ke liye schedule kiya jata hai.</p>

              <p>unscheduleDrawable() method ka upyog karke hum Drawable object ke previously scheduled huye Runnable ko cancel kar sakte hain. Method uncheduled Runnable object ko cancel kar deta hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable who`,
                        des:`<p>Cancel kiye jaane wale Drawable object.</p>`,
                      },
                      {
                        dataTypeName: `Runnable what`,
                        des:`<p>Cancel kiye jaane wale Runnable object.</p>`,
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
              name: "onBoundsChange",
              id: "onBoundsChange()",
              dataTypeName: `void`,
              code: `<a href="#onBoundsChange()">onBoundsChange</a>(Rect bounds)`,
  
              fullCode: `protected void <a href="#onBoundsChange()">onBoundsChange</a>(Rect bounds)`,
  
              des: `Ye method, Drawable object ke bounds (simit) mein badlav hone par invoke hota hai.`,
  
              longDes: `
                <p>onBoundsChange() method, DrawableWrapperCompat class ke subclasses dwara override kiya jata hai. Jab Drawable object ke bounds mein koi badlav hota hai, to yeh method subclass mein implement kiya gaya code ko execute karta hai.</p>
  
                <p>onBoundsChange() method ka upyog Drawable object ke bounds mein badlav hone par related logic ko handle karne ke liye kiya jata hai. Bounds mein badlav ho sakta hai, jab Drawable object ko kisi view ya container ke saath associate kiya jata hai aur view ka size, shape, position, orientation, aadi badalte hai.</p>
                    `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `Rect bounds`,
                      des: `<p>Ek Rect object hai, jisme Drawable ke updated bounds (simit) ko represent kiya jata hai.</p>`,
                    },
                  ],
                },
              ],
            },
  



            {
              dep: false,
              name: "onLevelChange",
              id: "onLevelChange()",
              dataTypeName: `boolean`,
              code: `<a href="#onLevelChange()">onLevelChange</a>(int level)`,
  
              fullCode: `protected boolean <a href="#onLevelChange()">onLevelChange</a>(int level)`,
  
              des: `Ye method, Drawable object ke level (satah) mein badlav hone par invoke hota hai.`,
  
              longDes: `
                <p>onLevelChange() method, DrawableWrapperCompat class ke subclasses dwara override kiya jata hai. Jab Drawable object ke level mein koi badlav hota hai, to yeh method subclass mein implement kiya gaya code ko execute karta hai.</p>
  
                <p>onLevelChange() method ka upyog Drawable object ke level mein badlav hone par related logic ko handle karne ke liye kiya jata hai. Level mein badlav ho sakta hai, jab Drawable object ko kisi view ya container ke saath associate kiya jata hai aur level ko modify kiya jata hai.</p>
  
                <p>Method true boolean value return karta hai agar level change ke baad Drawable object ka visual state update hota hai, aur false return karta hai agar koi badlav nahi hota hai.</p>
                    `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `int level`,
                      des: `<p>Ek integer value hai, jisse Drawable ke updated level (satah) ko represent kiya jata hai.</p>`,
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
  