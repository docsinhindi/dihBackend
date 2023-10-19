module.exports.DrawableContainerCompat = (req, res) => {
  console.log("okh");
  res.status(200).send({
    name: "DrawableContainerCompat",
    hCode: `public class <a href="#DrawableContainerCompat">DrawableContainerCompat</a>  extends Drawable implements Drawable.Callback`,

    des: `
        <p>DrawableContainerCompat class ka use, multiple drawables ko manage karne aur display karne ke liye kiya jata hai. Is class ke methods, DrawableContainer ke features aur behavior ko backward compatibility ke sath provide karte hai.</p>
        
  
        <p>DrawableContainerCompat class, multiple drawables ko single container me manage karta hai. Ye class backward compatibility support ke sath DrawableContainer ke behavior ko provide karta hai. Iska use karke developers, backward compatibility ke sath multiple drawables ko handle kar sakte hai, unko activate aur display kar sakte hai, aur unko modify kar sakte hai.</p>
  
       
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
            name: `DrawableContainerCompat`,
            id: "DrawableContainerCompat()",
            code: `DrawableContainerCompat()`,
            fullCode: `public DrawableContainerCompat()`,

            des: `Is constructor ka use, DrawableContainerCompat object banane ke liye kiya jata hai.`,

            longDes: `<p>Is constructor ka use, DrawableContainerCompat object banane ke liye kiya jata hai.</p>

              <p>DrawableContainerCompat class ke through, developers multiple drawables ko single container me manage kar sakte hai. Is class ke methods ka use karke, developers drawables ke behavior ko control kar sakte hai, unko modify kar sakte hai, aur specific drawable ko activate aur display kar sakte hai.</p>
              `,
            parameter: [],
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
            name: "applyTheme",
            id: "applyTheme()",
            dataTypeName: `void`,
            code: `<a href="#applyTheme()">applyTheme</a>(@NonNull Resources.Theme theme)`,

            fullCode: `@RequiresApi(value = 21)</br>public void <a href="#applyTheme()">applyTheme</a>(@NonNull Resources.Theme theme)`,

            des: `Ye method, DrawableContainerCompat object ko specific theme ke sath apply karne ke liye use hota hai.`,

            longDes: `
              <p>applyTheme() method ka use karke hum DrawableContainerCompat object ko specific theme ke sath apply kar sakte hain. Theme, UI elements ke visual appearance ko define karta hai, jaise colors, styles, and attributes.</p>
  
              <p>applyTheme() method, specified theme parameter ke basis par DrawableContainerCompat object ko apply karta hai. Ye method DrawableContainerCompat ke saare child drawables ko traverse karke unko specified theme ke sath apply karta hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull Resources.Theme theme`,
                    des: `<p>Resources.Theme object, jise DrawableContainerCompat object ko apply karne ke theme ke roop mein specify kiya jata hai. Ye parameter @NonNull annotation ke sath mark kiya jata hai, indicating that it should not be null.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "canApplyTheme",
            id: "canApplyTheme()",
            dataTypeName: `boolean`,
            code: `<a href="#canApplyTheme()">canApplyTheme</a>()`,

            fullCode: `@RequiresApi(value = 21)</br>public boolean <a href="#canApplyTheme()">canApplyTheme</a>()`,

            des: `Ye method, DrawableContainerCompat object ke theme ko apply karne ke liye capability check karne ke liye use hota hai.`,

            longDes: `
              <p>canApplyTheme() method ka use karke hum check kar sakte hain ki kya DrawableContainerCompat object theme ko apply karne ki capability rakhta hai ya nahi.</p>
  
              <p>Method ka return type boolean hota hai. Agar DrawableContainerCompat object theme ko apply karne ki capability rakhta hai, to true return kiya jata hai, aur agar capability nahi hai, to false return kiya jata hai.</p>
              `,

            parameter: [],
          },

          {
            dep: false,
            name: "draw",
            id: "draw()",
            dataTypeName: `void`,
            code: `<a href="#draw()">draw</a>(@NonNull Canvas canvas)`,

            fullCode: `public void <a href="#draw()">draw</a>(@NonNull Canvas canvas)`,

            des: `Ye method, DrawableContainerCompat object ke child drawables ko specified Canvas par draw karne ke liye use hota hai.`,

            longDes: `
              <p>draw() method ka use karke hum DrawableContainerCompat object ke child drawables ko specified Canvas par draw kar sakte hain. Canvas, ek drawing surface hoti hai jahan par hum graphical elements ko render kar sakte hain.</p>
  
              <p>draw() method, specified canvas parameter par DrawableContainerCompat ke child drawables ko draw karne ke liye invoke hota hai. Ye method DrawableContainerCompat ke saare child drawables ko traverse karta hai aur unhe specified canvas par draw kar deta hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull Canvas canvas`,
                    des: `<p>Canvas object, jise DrawableContainerCompat object ke child drawables ko draw karne ke liye specify kiya jata hai. Ye parameter @NonNull annotation ke sath mark kiya jata hai, indicating that it should not be null.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getAlpha",
            id: "getAlpha()",
            dataTypeName: `int`,
            code: `<a href="#getAlpha()">getAlpha</a>()`,

            fullCode: `public int <a href="#getAlpha()">getAlpha</a>()`,

            des: `Ye method, DrawableContainerCompat object ke alpha value ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getAlpha() method ka use karke hum DrawableContainerCompat object ke alpha value ko retrieve kar sakte hain. Alpha value, drawable object ka transparency level define karta hai.</p>
  
              <p>Method ka return type int hota hai, jo alpha value ko represent karta hai. Valid alpha values range 0 se 255 tak hote hain, jahan 0 full transparent ko aur 255 full opaque ko represent karta hai.</p>
              `,

            parameter: [],
          },

          {
            dep: false,
            name: "getChangingConfigurations",
            id: "getChangingConfigurations()",
            dataTypeName: `int`,
            code: `<a href="#getChangingConfigurations()">getChangingConfigurations</a>()`,

            fullCode: `public int <a href="#getChangingConfigurations()">getChangingConfigurations</a>()`,

            des: `Ye method, DrawableContainerCompat object ke changing configurations ki bit mask ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getChangingConfigurations() method ka use karke hum DrawableContainerCompat object ke changing configurations ki bit mask ko retrieve kar sakte hain. Changing configurations, drawable object ke attributes aur resources ke liye specify kiye gaye configuration changes ko represent karte hain, jaise screen orientation, locale, theme, etc.</p>
  
              <p>Method ka return type int hota hai, jo changing configurations ki bit mask ko represent karta hai. Is bit mask mein har configuration change ke liye corresponding bit set hota hai. Multiple configurations ke liye, corresponding bits set hote hain.</p>
              `,

            parameter: [],
          },

          {
            dep: false,
            name: "getConstantState",
            id: "getConstantState()",
            dataTypeName: `final Drawable.ConstantState`,
            code: `<a href="#getConstantState()">getConstantState</a>()`,

            fullCode: `public public final Drawable.ConstantState <a href="#getConstantState()">getConstantState</a>()`,

            des: `Ye method, DrawableContainerCompat object ka constant state (immutable state) ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getConstantState() method ka use karke hum DrawableContainerCompat object ka constant state, yaani immutable state, ko retrieve kar sakte hain. Drawable object ka constant state uske intrinsic properties aur configurations ko store karta hai, jisse iska copy create karne ke liye use kiya jaa sakta hai.</p>
  
              <p>Method ka return type Drawable.ConstantState hota hai, jo Drawable object ka constant state represent karta hai. Drawable.ConstantState ek abstract class hai, jise derived classes implement karti hai. Derived class ka object Drawable.ConstantState ke roop mein return kiya jata hai.</p>
              `,

            parameter: [],
          },

          {
            dep: false,
            name: "getCurrent",
            id: "getCurrent()",
            dataTypeName: `@NonNull Drawable`,
            code: `<a href="#getCurrent()">getCurrent</a>()`,

            fullCode: `public @NonNull Drawable <a href="#getCurrent()">getCurrent</a>()`,

            des: `Ye method, DrawableContainerCompat object ke current drawable ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getCurrent() method ka use karke hum DrawableContainerCompat object ke current drawable ko retrieve kar sakte hain. Current drawable, DrawableContainerCompat object ke current state ke anusar visible drawable hota hai.</p>
  
              <p>Method ka return type Drawable hota hai, jo DrawableContainerCompat object ka current drawable represent karta hai. Ye drawable object ho sakta hai ki direct Drawable class ka instance ho ya phir derived classes ka instance ho.</p>
              `,

            parameter: [],
          },

          {
            dep: false,
            name: "getHotspotBounds",
            id: "getHotspotBounds()",
            dataTypeName: `void`,
            code: `<a href="#getHotspotBounds()">getHotspotBounds</a>(@NonNull Rect outRect)`,

            fullCode: `public void <a href="#getHotspotBounds()">getHotspotBounds</a>(@NonNull Rect outRect)`,

            des: `Ye method, DrawableContainerCompat object ke hot spot bounds ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getHotspotBounds() method ka use karke hum DrawableContainerCompat object ke hot spot bounds ko retrieve kar sakte hain. Hot spot bounds, drawable object ke specific area ko define karte hain jahan par touch events ke liye hotspot ki position set ki jati hai.</p>
  
              <p>Method, outRect parameter mein hot spot bounds ko populate karta hai. Isse hum specified Rect object ke properties ko obtain kar sakte hain, jaise left, top, right, bottom.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull Rect outRect`,
                    des: `<p>Rect object, jisme hot spot bounds ko store kiya jata hai. Ye parameter @NonNull annotation ke sath mark kiya jata hai, indicating that it should not be null.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getIntrinsicHeight",
            id: "getIntrinsicHeight()",
            dataTypeName: `int`,
            code: `<a href="#getIntrinsicHeight()">getIntrinsicHeight</a>()`,

            fullCode: `public int <a href="#getIntrinsicHeight()">getIntrinsicHeight</a>()`,

            des: `Ye method, DrawableContainerCompat object ke intrinsic height ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getIntrinsicHeight() method ka use karke hum DrawableContainerCompat object ke intrinsic height ko retrieve kar sakte hain. Intrinsic height, drawable object ka default height hota hai, jise drawable ke design ya image ka original height represent karta hai.</p>
  
              <p>Method ka return type int hota hai, jo intrinsic height ko pixels mein represent karta hai.</p>
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

            des: `Ye method, DrawableContainerCompat object ke intrinsic width ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getIntrinsicWidth() method ka use karke hum DrawableContainerCompat object ke intrinsic width ko retrieve kar sakte hain. Intrinsic width, drawable object ka default width hota hai, jise drawable ke design ya image ka original width represent karta hai.</p>
  
              <p>Method ka return type int hota hai, jo intrinsic width ko pixels mein represent karta hai.</p>
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

            des: `Ye method, DrawableContainerCompat object ke minimum height ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getMinimumHeight() method ka use karke hum DrawableContainerCompat object ke minimum height ko retrieve kar sakte hain. Minimum height, drawable object ka minimum required height hota hai, jisse drawable ko sahi se display karne ke liye chahiye.</p>
  
              <p>Method ka return type int hota hai, jo minimum height ko pixels mein represent karta hai.</p>
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

            des: `Ye method, DrawableContainerCompat object ke minimum width ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getMinimumWidth() method ka use karke hum DrawableContainerCompat object ke minimum width ko retrieve kar sakte hain. Minimum width, drawable object ka minimum required width hota hai, jisse drawable ko sahi se display karne ke liye chahiye.</p>
  
              <p>Method ka return type int hota hai, jo minimum width ko pixels mein represent karta hai.</p>
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

            des: `Ye method, DrawableContainerCompat object ke opacity level ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getOpacity() method ka use karke hum DrawableContainerCompat object ke opacity level ko retrieve kar sakte hain. Opacity level, drawable object ki transparency level ko represent karta hai, yaani kitna opaque ya transparent hai.</p>
  
              <p>Method ka return type int hota hai, jo opacity level ko represent karta hai. Is return value ko PixelFormat constants ke saath compare karke hum opacity level ko determine kar sakte hain. Kuch common PixelFormat constants hain:</p>

              <ul>
              <li><b>PixelFormat.OPAQUE:</b> Jab drawable fully opaque hai.</li>

              <li><b>PixelFormat.TRANSLUCENT:</b> Jab drawable partially transparent hai.</li>
               
              <li><b>PixelFormat.TRANSPARENT:</b> Jab drawable fully transparent hai.</li>
              </ul>
              `,

            parameter: [],
          },

          {
            dep: false,
            name: "getOutline",
            id: "getOutline()",
            dataTypeName: `void`,
            code: `<a href="#getOutline()">getOutline</a>(@NonNull Outline outline)`,

            fullCode: `@RequiresApi(value = 21)</br>public void <a href="#getOutline()">getOutline</a>(@NonNull Outline outline)`,

            des: `Ye method, DrawableContainerCompat object ke outline ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getOutline() method ka use karke hum DrawableContainerCompat object ke outline ko retrieve kar sakte hain. Outline, drawable object ke shape ya boundary ko define karta hai. Outline object ke through hum outline ki properties, jaise bounds, shape, ya phir clipping area, ko obtain kar sakte hain.</p>
  
              <p>Method, outline parameter mein DrawableContainerCompat object ke outline ko populate karta hai. Isse hum specified Outline object ke properties ko obtain kar sakte hain, jaise bounds, shape, ya phir clipping area.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull Outline outline`,
                    des: `<p>Outline object, jisme outline properties ko store kiya jata hai. Ye parameter @NonNull annotation ke sath mark kiya jata hai, indicating that it should not be null.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "getPadding",
            id: "getPadding()",
            dataTypeName: `boolean`,
            code: `<a href="#getPadding()">getPadding</a>(@NonNull Rect padding)`,

            fullCode: `public boolean <a href="#getPadding()">getPadding</a>(@NonNull Rect padding)`,

            des: `Ye method, DrawableContainerCompat object ke padding ko retrieve karne ke liye use hota hai.`,

            longDes: `
              <p>getPadding() method ka use karke hum DrawableContainerCompat object ke padding ko retrieve kar sakte hain. Padding, drawable object ke borders ke bheetar ka extra space hota hai, jise padding area kehte hain.</p>
  
              <p>Method, outline parameter mein DrawableContainerCompat object ke outline ko populate karta hai. Isse hum specified Outline object ke properties ko obtain kar sakte hain, jaise bounds, shape, ya phir clipping area.Method, padding parameter mein DrawableContainerCompat object ke padding ko populate karta hai. Isse hum specified Rect object ke properties ko obtain kar sakte hain, jaise left, top, right, bottom. Method ka return type boolean hota hai, jo padding ki availability ko indicate karta hai. Agar padding available hai, toh true return hota hai, aur agar padding available nahi hai, toh false return hota hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull Rect padding`,
                    des: `<p>Rect object, jisme padding ko store kiya jata hai. Ye parameter @NonNull annotation ke sath mark kiya jata hai, indicating that it should not be null.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "invalidateDrawable",
            id: "invalidateDrawable()",
            dataTypeName: `void`,
            code: `<a href="#invalidateDrawable()">invalidateDrawable</a>(@NonNull Drawable who)`,

            fullCode: `public void <a href="#invalidateDrawable()">invalidateDrawable</a>(@NonNull Drawable who)`,

            des: `Ye method, DrawableContainerCompat object mein maujood drawable ko invalid karne ke liye use hota hai.`,

            longDes: `
              <p>invalidateDrawable() method ka use karke hum DrawableContainerCompat object ke drawable ko invalid kar sakte hain. Jab ek drawable invalid ho jata hai, toh yeh DrawableContainerCompat object ko refresh karne ke liye trigger hota hai, jisse updated drawable ka display ho sake.</p>
  
              <p>Method, who parameter ke through DrawableContainerCompat object mein maujood drawable ko identify karta hai, aur usko invalid mark kar deta hai. Jab koi drawable invalid ho jata hai, toh DrawableContainerCompat object refresh ho jata hai, jisse updated drawable ka display ho sake.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull Drawable who`,
                    des: `<p>Invalidated drawable object, jise invalidate karna hai. Ye parameter @NonNull annotation ke sath mark kiya jata hai, indicating that it should not be null.</p>`,
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

            des: `Ye method, DrawableContainerCompat object ke auto-mirroring feature ko check karne ke liye use hota hai.`,

            longDes: `
              <p>AutoMirrored() method ka use karke hum DrawableContainerCompat object ke auto-mirroring feature ko check kar sakte hain. Auto-mirroring feature, drawable object ke mirroring behavior ko control karta hai. Jab auto-mirroring enable hota hai, toh drawable object automatically mirror hota hai based on the layout direction of the view.</p>
  
              <p>Method ka return type boolean hota hai, jo auto-mirroring feature ki availability ko indicate karta hai. Agar auto-mirroring enable hai, toh true return hota hai, aur agar auto-mirroring disable hai, toh false return hota hai.</p>
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

            des: `Ye method, DrawableContainerCompat object ke stateful nature ko check karne ke liye use hota hai.`,

            longDes: `
              <p>isStateful() method ka use karke hum DrawableContainerCompat object ke stateful nature ko check kar sakte hain. Stateful nature, drawable object ki ability ko represent karta hai ki woh apne state ke basis par visual changes kar sakta hai ya nahi. Stateful drawable objects, different states (jaise ki pressed, focused, selected, etc.) ke liye alag-alag visual representations provide karte hain.</p>
  
              <p>Method ka return type boolean hota hai, jo stateful nature ki availability ko indicate karta hai. Agar drawable stateful hai, toh true return hota hai, aur agar drawable stateful nahi hai, toh false return hota hai.</p>
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

            des: `Ye method, DrawableContainerCompat object ke drawable ke current state par direct jump karne ke liye use hota hai.`,

            longDes: `
              <p>jumpToCurrentState() method ka use karke hum DrawableContainerCompat object ke drawable ke current state par jump kar sakte hain, bypassing any ongoing animations or transitions. Jab hum is method ko invoke karte hain, toh drawable ke current state par direct jump ho jata hai, jisse koi pending animation ya transition skip ho jati hai.</p>
  
              <p>Is method ka use typically tab hota hai jab hum kisi event ya action ke baad drawable object ke state ko immediately update karna chahte hain aur kisi ongoing animation ya transition ko interrupt karna chahte hain.</p>
              `,

            parameter: [],
          },

          {
            dep: false,
            name: "mutate",
            id: "mutate()",
            dataTypeName: `Drawable`,
            code: `<a href="#mutate()">mutate</a>()`,

            fullCode: `public Drawable <a href="#mutate()">mutate</a>()`,

            des: `Ye method, DrawableContainerCompat object ke drawable ko mutate karne ke liye use hota hai.`,

            longDes: `
              <p>mutate() method ka use karke hum DrawableContainerCompat object ke drawable ko mutate kar sakte hain. Mutating a drawable means creating a new instance of the drawable that is independent of any other drawables sharing the same constant state. When a drawable is mutated, any modifications made to its properties will not affect other drawables sharing the same constant state.</p>
  
              <p>Method ka return type Drawable hota hai, jo mutated drawable object ko represent karta hai.</p>
              `,

            parameter: [],
          },

          {
            dep: false,
            name: "onLayoutDirectionChanged",
            id: "onLayoutDirectionChanged()",
            dataTypeName: `boolean`,
            code: `<a href="#onLayoutDirectionChanged()">onLayoutDirectionChanged</a>(int layoutDirection)`,

            fullCode: `public boolean <a href="#onLayoutDirectionChanged()">onLayoutDirectionChanged</a>(int layoutDirection)`,

            des: `Ye method, DrawableContainerCompat object ke drawable ke layout direction ka change ko handle karne ke liye use hota hai.`,

            longDes: `
              <p>onLayoutDirectionChanged() method ka use karke hum DrawableContainerCompat object ke drawable ke layout direction ka change ko handle kar sakte hain. Layout direction ka change typically tab hota hai jab layout context (jaise ki activity or fragment) ka layout direction change hota hai, jaise ki left-to-right se right-to-left ya vice versa.</p>
  
              <p>Method ka return type boolean hota hai, jo indicate karta hai ki layout direction change ke baad drawable object ka layout direction successfully update hua hai ya nahi. Agar update successful hua hai, toh true return hota hai, aur agar update nahi hua hai, toh false return hota hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int layoutDirection`,
                    des: `<p>Naya layout direction value, jaise View.LAYOUT_DIRECTION_LTR (left-to-right) ya View.LAYOUT_DIRECTION_RTL (right-to-left).</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "scheduleDrawable",
            id: "scheduleDrawable()",
            dataTypeName: `void`,
            code: `<a href="#scheduleDrawable()">scheduleDrawable</a>(@NonNull Drawable who, @NonNull Runnable what, long when)`,

            fullCode: `public void <a href="#scheduleDrawable()">scheduleDrawable</a>(@NonNull Drawable who, @NonNull Runnable what, long when)`,

            des: `Ye method, DrawableContainerCompat ke ek drawable container object ke liye drawable ke schedule ko register karne ke liye istemal hota hai.`,

            longDes: `
              <p>scheduleDrawable() method ka upyog karke hum drawable container mein ek drawable ke schedule ko register kar sakte hain. Schedule karne ke liye, hum who parameter mein drawable object, what parameter mein Runnable implementation (kriya) aur when parameter mein schedule karne ke timestamp ko specify karte hain.</p>
  
              <p>scheduleDrawable() method ka upyog karke hum drawable ke schedule ko register kar sakte hain, jaise animation, redraw, aadi. Schedule karne se drawable container system ko ye pata chalta hai ki kis samay par drawable ko update ya execute karna hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull Drawable who`,
                    des: `<p>Schedule karne ke liye drawable object.</p>`,
                  },
                  {
                    dataTypeName: `@NonNull Runnable what`,
                    des: `<p>Schedule kiya hua kriya (Runnable implementation).</p>`,
                  },
                  {
                    dataTypeName: `long when`,
                    des: `<p>Schedule timestamp (in milliseconds).</p>`,
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

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye alpha (opacity) ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setAlpha() method ka upyog karke hum drawable container ke alpha value ko set kar sakte hain. Method, alpha parameter mein diye gaye integer value se drawable container ke alpha ko update karta hai.</p>
  
              <p>setAlpha() method ka upyog karke hum drawable container ke alpha value ko customize kar sakte hain. Hum alpha parameter mein nayi alpha value specify karte hain, jisse drawable container ka opacity update hota hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int alpha`,
                    des: `<p>Naya alpha value, jiska range 0 se 255 tak hota hai, jahan 0 transparent ko darshata hai aur 255 fully opaque (adhik prakash pravah) ko darshata hai.</p>`,
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

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye auto-mirroring behavior ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setAutoMirrored() method ka upyog karke hum drawable container ke auto-mirroring behavior ko set kar sakte hain. Auto-mirroring behavior se y meant hai ki drawable container, layout direction ke anusaar apne drawables ko automatically mirror (reflect) kar sakta hai.</p>
  
              <p>setAutoMirrored() method ka upyog karke hum drawable container ke auto-mirroring behavior ko customize kar sakte hain. Agar mirrored parameter ki value true hai, to drawable container, layout direction ke anusaar apne drawables ko mirror karne ka prayas karega. Isse layout direction ke badalne par drawables ka orientation automatically adjust hoga.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean mirrored`,
                    des: `<p>Boolean value jo darshata hai ki drawable container ke drawables ko auto-mirror karna hai ya nahi. true hone par auto-mirroring enable ho jata hai aur false hone par disable ho jata hai.</p>`,
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
            code: `<a href="#setAutoMirrored()">setColorFilter</a>(ColorFilter colorFilter)`,

            fullCode: `public void <a href="#setColorFilter()">setColorFilter</a>(ColorFilter colorFilter)`,

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye color filter ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setColorFilter() method ka upyog karke hum drawable container ke color filter ko customize kar sakte hain. Method, colorFilter parameter mein diye gaye ColorFilter object se drawable container ke color filter ko update karta hai.</p>
  
              <p>setColorFilter() method ka upyog karke hum drawable container ke color filter ko set kar sakte hain. Color filter ka upyog karke hum drawable ke render ho rahe pixels par custom color transformations apply kar sakte hain, jaise color adjustment, saturation, brightness, contrast, aadi.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ColorFilter colorFilter`,
                    des: `<p>Naya color filter, jo ColorFilter class ka ek object hota hai.</p>`,
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

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye dithering ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setDither() method ka upyog karke hum drawable container ke dithering behavior ko customize kar sakte hain. Dithering ek technique hai jisme hum kam colors ke palettes ko use karke, smooth color transitions ko create karte hain.</p>
  
              <p>setDither() method ka upyog karke hum drawable container ke dithering behavior ko enable ya disable kar sakte hain. Agar dither parameter ki value true hai, to drawable container dithering technique ka upyog karega, jisse color transitions ko smooth banaya jata hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean dither`,
                    des: `<p>Boolean value jo darshata hai ki drawable container ke dithering behavior ko enable karna hai ya nahi. true hone par dithering enable ho jata hai aur false hone par disable ho jata hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setEnterFadeDuration",
            id: "setEnterFadeDuration()",
            dataTypeName: `void`,
            code: `<a href="#setEnterFadeDuration()">setEnterFadeDuration</a>(int ms)`,

            fullCode: `public void <a href="#setEnterFadeDuration()">setEnterFadeDuration</a>(int ms)`,

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye enter fade duration (pravesh fade avadhi) ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setEnterFadeDuration() method ka upyog karke hum drawable container ke enter fade duration ko customize kar sakte hain. Enter fade duration se meant hai ki drawable container mein naye drawables ka pravesh hone par fade effect ka samay avadhi ko control karna.</p>
  
              <p>setEnterFadeDuration() method ka upyog karke hum drawable container ke enter fade duration ko set kar sakte hain. Isse drawable container mein naye drawables ka pravesh hone par fade effect ki avadhi customize ho jati hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int ms`,
                    des: `<p>Enter fade ka samay avadhi milliseconds mein, jahan 0 se greater positive value tak hoti hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "setExitFadeDuration",
            id: "setExitFadeDuration()",
            dataTypeName: `void`,
            code: `<a href="#setExitFadeDuration()">setExitFadeDuration</a>(int ms)`,

            fullCode: `public void <a href="#setExitFadeDuration()">setExitFadeDuration</a>(int ms)`,

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye exit fade duration (bahar nikalne ka fade avadhi) ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setExitFadeDuration() method ka upyog karke hum drawable container ke exit fade duration ko customize kar sakte hain. Exit fade duration se meant hai ki drawable container se drawables ka bahar nikalne par fade effect ka samay avadhi ko control karna.</p>
  
              <p>setExitFadeDuration() method ka upyog karke hum drawable container ke exit fade duration ko set kar sakte hain. Isse drawable container se drawables ka bahar nikalne par fade effect ki avadhi customize ho jati hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int ms`,
                    des: `<p>Exit fade ka samay avadhi milliseconds mein, jahan 0 se greater positive value tak hoti hai.</p>`,
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

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye hotspot ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setHotspot() method ka upyog karke hum drawable container ke hotspot ko customize kar sakte hain. Hotspot ek specific point hai jahan se drawable par interaction (tap, hover, etc.) shuru ho sakta hai.</p>
  
              <p>setHotspot() method ka upyog karke hum drawable container ke hotspot ko set kar sakte hain, jisse drawable par interaction ko track kiya ja sake. X aur Y coordinates se hotspot ka position specify kiya jata hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `float x`,
                    des: `<p>Hotspot ka X coordinate value.</p>`,
                  },
                  {
                    dataTypeName: `float y`,
                    des: `<p>Hotspot ka Y coordinate value.</p>`,
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

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye hotspot bounds ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setHotspotBounds() method ka upyog karke hum drawable container ke hotspot bounds ko customize kar sakte hain. Hotspot bounds, drawable ke specific rectangular area hai jahan se interaction (tap, hover, etc.) shuru ho sakta hai.</p>
  
              <p>setHotspotBounds() method ka upyog karke hum drawable container ke hotspot bounds ko set kar sakte hain, jisse drawable par interaction ke specific rectangular area ko define kiya ja sake.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int left`,
                    des: `<p>Hotspot bounds ka left coordinate value.</p>`,
                  },
                  {
                    dataTypeName: `int top`,
                    des: `<p>Hotspot bounds ka top coordinate value.</p>`,
                  },
                  {
                    dataTypeName: `int right`,
                    des: `<p>Hotspot bounds ka right coordinate value.</p>`,
                  },
                  {
                    dataTypeName: `int bottom`,
                    des: `<p>Hotspot bounds ka bottom coordinate value.</p>`,
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
            code: `<a href="#setTint()">setTint</a>(@ColorInt int tintColor)`,

            fullCode: `public void <a href="#setTint()">setTint</a>(@ColorInt int tintColor)`,

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye tint color ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setTint() method ka upyog karke hum drawable container ke tint color ko customize kar sakte hain. Tint color, drawable par apply kiya gaya color filter hota hai jo original colors ko modify karta hai.</p>
  
              <p>setTint() method ka upyog karke hum drawable container ke tint color ko set kar sakte hain. Isse drawable container par apply hone wale color filter ke roop mein tint color ka upyog kiya jata hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@ColorInt int tintColor`,
                    des: `<p>Tint color ka int representation, jisme ARGB (Alpha, Red, Green, Blue) color values hote hain.</p>`,
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

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye tint color ke ColorStateList ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setTintList() method ka upyog karke hum drawable container ke tint color ko customize kar sakte hain. Tint color, drawable par apply kiya gaya color filter hota hai jo original colors ko modify karta hai. ColorStateList object multiple states ke liye tint colors provide karta hai.</p>
  
              <p>setTintList() method ka upyog karke hum drawable container ke tint color ko set kar sakte hain. Isse drawable container par apply hone wale color filter ke roop mein tint colors ke ColorStateList ka upyog kiya jata hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `ColorStateList tint`,
                    des: `<p>ColorStateList object, jisme tint colors ke alag-alag states ke liye color values hote hain.</p>`,
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
            code: `<a href="#setTintMode()">setTintMode</a>(@NonNull PorterDuff.Mode tintMode)`,

            fullCode: `public void <a href="#setTintMode()">setTintMode</a>(@NonNull PorterDuff.Mode tintMode)`,

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye tint mode ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setTintMode() method ka upyog karke hum drawable container ke tint mode ko customize kar sakte hain. Tint mode, drawable par apply kiye gaye color filter ke behavior aur blending operation ko control karta hai.</p>
  
              <p>setTintMode() method ka upyog karke hum drawable container ke tint mode ko set kar sakte hain. Isse drawable container par apply hone wale color filter ke behavior aur blending operation ko customize kiya jata hai, tintMode parameter ki value ke anusaar.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull PorterDuff.Mode tintMode`,
                    des: `<p>PorterDuff.Mode enumeration ka object, jisme tint mode ke alag-alag options maujood hote hain.</p>`,
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

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye drawable ke visibility ko set karne ke liye istemal hota hai.`,

            longDes: `
              <p>setVisible() method ka upyog karke hum drawable container ke drawable ke visibility ko customize kar sakte hain. visible parameter se hum drawable ko visible (dikhayi dene wala) ya invisible (chhupaya hua) kar sakte hain. restart parameter se hum drawable ki animation ya transition ko restart kar sakte hain.</p>
  
              <p>setVisible() method ka upyog karke hum drawable container ke drawable ke visibility ko control kar sakte hain. Agar visible parameter ki value true hai, to drawable visible hoga, aur agar visible parameter ki value false hai, to drawable invisible hoga. restart parameter ki value true hone par drawable ki animation ya transition restart ho jayegi, aur false hone par restart nahi hoga.</p>

              <p>Method ka return type boolean hai, jo visible state ko darshata hai. true return hota hai agar drawable visible hai, aur false return hota hai agar drawable invisible hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `boolean visible`,
                    des: `<p>Boolean value jo darshata hai ki drawable ko visible (true) ya invisible (false) karna hai.</p>`,
                  },
                  {
                    dataTypeName: `boolean restart`,
                    des: `<p>Boolean value jo darshata hai ki drawable ki animation ya transition ko restart (true) karna hai ya nahi (false).</p>`,
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
            code: `<a href="#unscheduleDrawable()">unscheduleDrawable</a>(@NonNull Drawable who, @NonNull Runnable what)`,

            fullCode: `public void <a href="#unscheduleDrawable()">unscheduleDrawable</a>(@NonNull Drawable who, @NonNull Runnable what)`,

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye drawable ke scheduling ko radd karne ke liye istemal hota hai.`,

            longDes: `
              <p>unscheduleDrawable() method ka upyog karke hum drawable container ke drawable ke scheduling ko radd kar sakte hain. Is method se drawable ke specific runnable ko cancel karke uski scheduling radd ki jaati hai.</p>
  
              <p>unscheduleDrawable() method ka upyog karke hum drawable container ke drawable ke scheduling ko radd kar sakte hain. Hum who parameter mein unscheduled drawable ko aur what parameter mein us drawable ke scheduling se associated runnable object ko specify karte hain. Isse drawable ki scheduling cancel ho jati hai aur associated runnable object execute nahi hota hai.</p>
              `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull Drawable who`,
                    des: `<p>Unscheduled drawable, jiske scheduling ko radd karna hai.</p>`,
                  },
                  {
                    dataTypeName: `@NonNull Runnable what`,
                    des: `<p>Runnable object, jo drawable ke scheduling se associated hai.</p>`,
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

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye bounds (simit) parivartan ke samay meghod hai.`,

            longDes: `
              <p>onBoundsChange() method ka upyog karke hum drawable container ke bounds (simit) parivartan ke samay custom logic aur behavior ko handle kar sakte hain. Jab drawable container ke bounds mein koi parivartan hota hai, jaise width, height, padding, etc., to ye method invoke hota hai.</p>

              <p>onBoundsChange() method ka upyog karke hum drawable container ke bounds parivartan ko observe kar sakte hain aur us parivartan ke anusaar kuch kriyaen perform kar sakte hain. Hum bounds parameter mein diye gaye Rect object se updated bounds ko prapt kar sakte hain aur uske hisab se behavior ko customize kar sakte hain.</p>

              <p>onBoundsChange() method ko override karke hum apne custom drawable container class mein iska implementation provide kar sakte hain. Isme hum drawable container ke bounds parivartan ke samay koi specific action perform kar sakte hain, jaise drawing operations, animation updates, aur anya custom behavior.</p>
                  `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Rect bounds`,
                    des: `<p>Rect object, jisme drawable container ke updated bounds ko represent karta hai.</p>`,
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

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye level parivartan ke samay method hai.`,

            longDes: `
              <p>onLevelChange() method ka upyog karke hum drawable container ke level parivartan ko handle kar sakte hain. Level parivartan drawable container ke intrinsic state ke ek maap ko darshata hai, jaise progress, rating, steps, etc.</p>

              <p>onLevelChange() method ka upyog karke hum drawable container ke level parivartan ko observe kar sakte hain aur us parivartan ke anusaar kuch kriyaen perform kar sakte hain. Hum level parameter mein diye gaye updated level ko prapt kar sakte hain aur uske hisab se behavior ko customize kar sakte hain.</p>

              <p>onLevelChange() method ko override karke hum apne custom drawable container class mein iska implementation provide kar sakte hain. Isme hum drawable container ke level parivartan ke samay koi specific action perform kar sakte hain, jaise drawing operations, animation updates, aur anya custom behavior. Method ka return type boolean hota hai, jo darshata hai ki level parivartan ke baad koi action liya gaya hai ya nahi.</p>
                  `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `int level`,
                    des: `<p>Integer value, jo drawable container ke updated level ko darshata hai.</p>`,
                  },
                ],
              },
            ],
          },

          {
            dep: false,
            name: "onStateChange",
            id: "onStateChange()",
            dataTypeName: `boolean`,
            code: `<a href="#onStateChange()">onStateChange</a>(@NonNull int[] state)`,

            fullCode: `protected boolean <a href="#onStateChange()">onStateChange</a>(@NonNull int[] state)`,

            des: `Ye method, DrawableContainerCompat ke drawable container object ke liye state parivartan ke samay method hai.`,

            longDes: `
              <p>onStateChange() method ka upyog karke hum drawable container ke state parivartan ko handle kar sakte hain. State parivartan drawable container ke state ko darshata hai, jaise selected, focused, pressed, disabled, etc.</p>

              <p>onStateChange() method ka upyog karke hum drawable container ke state parivartan ko observe kar sakte hain aur us parivartan ke anusaar kuch kriyaen perform kar sakte hain. Hum state parameter mein diye gaye updated state array ko prapt kar sakte hain aur uske hisab se behavior ko customize kar sakte hain.</p>

              <p>onStateChange() method ko override karke hum apne custom drawable container class mein iska implementation provide kar sakte hain. Isme hum drawable container ke state parivartan ke samay koi specific action perform kar sakte hain, jaise drawing operations, animation updates, aur anya custom behavior. Method ka return type boolean hota hai, jo darshata hai ki state parivartan ke baad koi action liya gaya hai ya nahi.</p>
                  `,

            parameter: [
              {
                name: "Parameters",
                success: true,
                parameter: [
                  {
                    dataTypeName: `@NonNull int[] state`,
                    des: `<p>int array, jisme drawable container ke updated state ko darshata hai.</p>`,
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
