module.exports.DrawerArrowDrawable = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "DrawerArrowDrawable",
      hCode: `public class <a href="#DrawerArrowDrawable">DrawerArrowDrawable</a>  extends Drawable`,
  
      des: 
        `
        <p>DrawerArrowDrawable class ka use, navigation drawer icon ko customize aur animate karne ke liye kiya jata hai. Is class ke methods, navigation drawer icon ke appearance, direction, animation, aur styling ko control karne me madad karte hai.</p>
        
  
        <p>DrawerArrowDrawable class ka use karke developers, navigation drawer icon ke appearance ko customize kar sakte hai. Is class ke methods ka use karke, arrow ki position, rotation, color, length, thickness, aur gap size ko modify kar sakte hai.</p>
  
       
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
  


        constant: {
          name: "Constants",
          success: true,
          method: [
            {
              dep: false,
              name: "ARROW_DIRECTION_END",
              id: "ARROW_DIRECTION_END",
              dataTypeName: `static final int`,
              code: `<a href="#ARROW_DIRECTION_END">ARROW_DIRECTION_END</a> = 3`,
              fullCode: `public static final int <a href="#ARROW_DIRECTION_END">ARROW_DIRECTION_END</a> = 3`,

              des:`ARROW_DIRECTION_END ka value 3 hai, aur iska use arrow ke disha ko specify karne ke liye kiya jata hai. Yahan, 3 ka matlab hai ki arrow ka direction end (ant) ki taraf hai..`,

              longDes: `<p>ARROW_DIRECTION_END ka value 3 hai, aur iska use arrow ke disha ko specify karne ke liye kiya jata hai. Yahan, 3 ka matlab hai ki arrow ka direction end (ant) ki taraf hai.</p>`,

              codeSnippets: {
                fdes:`<p>example:</p>`,

                code:`DrawerArrowDrawable drawerArrowDrawable = new DrawerArrowDrawable();
                int arrowDirection = DrawerArrowDrawable.ARROW_DIRECTION_END;
                drawerArrowDrawable.setDirection(arrowDirection);
                `,

                des:`<p>Is example mein, DrawerArrowDrawable object ko utpann kar rahe hain. Uske baad, arrowDirection variable mein ARROW_DIRECTION_END constant ko specify kar rahe hain. Fir, setDirection() method ka upyog karke arrow ke direction ko arrowDirection ke anusar set kar rahe hain.</p>`
            },



              parameter: [],
            },



            {
              dep: false,
              name: "ARROW_DIRECTION_LEFT",
              id: "ARROW_DIRECTION_LEFT",
              dataTypeName: `static final int`,
              code: `<a href="#ARROW_DIRECTION_LEFT">ARROW_DIRECTION_LEFT</a> = 0`,
              fullCode: `public static final int <a href="#ARROW_DIRECTION_LEFT">ARROW_DIRECTION_LEFT</a> = 0`,

              des:`ARROW_DIRECTION_LEFT ka value 0 hai, aur iska use arrow ke disha ko specify karne ke liye kiya jata hai. Yahan, 0 ka matlab hai ki arrow ka direction left (baayein) ki taraf hai.`,

              longDes: `<p>ARROW_DIRECTION_LEFT ka value 0 hai, aur iska use arrow ke disha ko specify karne ke liye kiya jata hai. Yahan, 0 ka matlab hai ki arrow ka direction left (baayein) ki taraf hai.</p>`,


              codeSnippets: {
                fdes:`<p>example:</p>`,

                code:`DrawerArrowDrawable drawerArrowDrawable = new DrawerArrowDrawable();
                int arrowDirection = DrawerArrowDrawable.ARROW_DIRECTION_LEFT;
                drawerArrowDrawable.setDirection(arrowDirection);
                `,

                des:`<p>Is example mein, DrawerArrowDrawable object ko utpann kar rahe hain. Uske baad, arrowDirection variable mein ARROW_DIRECTION_LEFT constant ko specify kar rahe hain. Fir, setDirection() method ka upyog karke arrow ke direction ko arrowDirection ke anusar set kar rahe hain.</p>`
            },


              parameter: [],
            },





            {
              dep: false,
              name: "ARROW_DIRECTION_RIGHT",
              id: "ARROW_DIRECTION_RIGHT",
              dataTypeName: `static final int`,
              code: `<a href="#ARROW_DIRECTION_RIGHT">ARROW_DIRECTION_RIGHT</a> = 1`,
              fullCode: `public static final int <a href="#ARROW_DIRECTION_RIGHT">ARROW_DIRECTION_RIGHT</a> = 1`,

              des:`ARROW_DIRECTION_RIGHT ka value 1 hai, aur iska use arrow ke disha ko specify karne ke liye kiya jata hai. Yahan, 1 ka matlab hai ki arrow ka direction right (daayein) ki taraf hai.`,

              longDes: `<p>ARROW_DIRECTION_RIGHT ka value 1 hai, aur iska use arrow ke disha ko specify karne ke liye kiya jata hai. Yahan, 1 ka matlab hai ki arrow ka direction right (daayein) ki taraf hai.</p>`,


              codeSnippets: {
                fdes:`<p>example:</p>`,

                code:`DrawerArrowDrawable drawerArrowDrawable = new DrawerArrowDrawable();
                int arrowDirection = DrawerArrowDrawable.ARROW_DIRECTION_RIGHT;
                drawerArrowDrawable.setDirection(arrowDirection);
                `,

                des:`<p>Is example mein, DrawerArrowDrawable object ko utpann kar rahe hain. Uske baad, arrowDirection variable mein ARROW_DIRECTION_RIGHT constant ko specify kar rahe hain. Fir, setDirection() method ka upyog karke arrow ke direction ko arrowDirection ke anusar set kar rahe hain.</p>`
            },


              parameter: [],
            },




            {
              dep: false,
              name: "ARROW_DIRECTION_START",
              id: "ARROW_DIRECTION_START",
              dataTypeName: `static final int`,
              code: `<a href="#ARROW_DIRECTION_START">ARROW_DIRECTION_START</a> = 2`,
              fullCode: `public static final int <a href="#ARROW_DIRECTION_START">ARROW_DIRECTION_START</a> = 2`,

              des:`ARROW_DIRECTION_START ka value 2 hai, aur iska use arrow ke disha ko specify karne ke liye kiya jata hai. Yahan, 2 ka matlab hai ki arrow ka direction start (shuruat) ki taraf hai.`,

              longDes: `<p>ARROW_DIRECTION_START ka value 2 hai, aur iska use arrow ke disha ko specify karne ke liye kiya jata hai. Yahan, 2 ka matlab hai ki arrow ka direction start (shuruat) ki taraf hai.</p>`,


              codeSnippets: {
                fdes:`<p>example:</p>`,

                code:`DrawerArrowDrawable drawerArrowDrawable = new DrawerArrowDrawable();
                int arrowDirection = DrawerArrowDrawable.ARROW_DIRECTION_START;
                drawerArrowDrawable.setDirection(arrowDirection);
                `,

                des:`<p>Is example mein, DrawerArrowDrawable object ko utpann kar rahe hain. Uske baad, arrowDirection variable mein ARROW_DIRECTION_START constant ko specify kar rahe hain. Fir, setDirection() method ka upyog karke arrow ke direction ko arrowDirection ke anusar set kar rahe hain.</p>`
            },


              parameter: [],
            },




            //
  
          ],
        },
  

        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `DrawerArrowDrawable`,
              id: "DrawerArrowDrawable()",
              code: `<a href="#DrawerArrowDrawable()">DrawerArrowDrawable</a>(Context context)`,
              fullCode: `public <a href="#DrawerArrowDrawable()">DrawerArrowDrawable</a>(Context context)`,

              des: `Ye constructor, DrawerArrowDrawable object ko initialize karne ke liye upyog hota hai.`,

              longDes: `<p>DrawerArrowDrawable(Context context) constructor ke dwara hum DrawerArrowDrawable object ko initialize aur instantiate kar sakte hain. Is constructor ka upyog DrawerArrowDrawable class ke ek naye object ko create karne ke liye kiya jata hai.</p>

              <p>DrawerArrowDrawable(Context context) constructor ke andar, hum Drawable object ke liye required resources, properties, aur state ko initialize kar sakte hain. Context object, Drawable object ke liye required resources tak pahunchane mein madad karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Context object, jiska upyog Drawable object ke utpann karne mein kiya jata hai.</p>`,
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

              des: `Ye method, Drawable object ke visual representation ko Canvas par draw (chitrit) karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>draw() method ke dwara hum Drawable object ke visual representation ko Canvas par draw kar sakte hain. Canvas ek 2D drawing surface hai jahan hum shapes, images, text, aadi ko render kar sakte hain.</p>

              <p>draw() method ka upyog karke hum Drawable object ko Canvas par draw kar sakte hain. Drawable object ke visual representation, jaise shape, image, color, aadi Canvas par render kiya jata hai. Canvas, draw() method ko invoke karne ke liye upyog hota hai aur Drawable object ko screen par display karne mein madad karta hai.</p>
              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Canvas canvas`,
                        des:`<p>Canvas object, jisme Drawable object ko draw karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "getArrowHeadLength",
              id: "getArrowHeadLength()",
              dataTypeName: `float`,
              code: `<a href="#getArrowHeadLength()">getArrowHeadLength</a>()`,
  
              fullCode: `public float <a href="#getArrowHeadLength()">getArrowHeadLength</a>()`,

              des: `Ye method, DrawerArrowDrawable object ke arrow ke sir (head) ki lambai (length) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getArrowHeadLength() method ke dwara hum DrawerArrowDrawable object ke arrow ke sir (head) ki lambai ko float value ke roop mein prapt kar sakte hain.</p>

              <p>getArrowHeadLength() method ka upyog DrawerArrowDrawable object ke arrow ke sir (head) ki lambai ko retrieve karne ke liye kiya jata hai. Ye lambai, arrow icon ke sir (head) ke visual representation ko customize karne ke liye upyog hoti hai.</p>
              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "getArrowShaftLength",
              id: "getArrowShaftLength()",
              dataTypeName: `float`,
              code: `<a href="#getArrowShaftLength()">getArrowShaftLength</a>()`,
  
              fullCode: `public float <a href="#getArrowShaftLength()">getArrowHeadLength</a>()`,

              des: `Ye method, DrawerArrowDrawable object ke arrow ke shaft (lambaai) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getArrowShaftLength() method ke dwara hum DrawerArrowDrawable object ke arrow ke shaft (lambaai) ko float value ke roop mein prapt kar sakte hain.</p>

              <p>getArrowShaftLength() method ka upyog DrawerArrowDrawable object ke arrow ke shaft (lambaai) ko retrieve karne ke liye kiya jata hai. Shafts, arrow icon ke visual representation ko customize karne ke liye upyog hote hain. Ye lambai arrow ke sir (head) ke baad se arrow ke tail (pichhla bhaag) tak ki hoti hai.</p>
              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "getBarLength",
              id: "getBarLength()",
              dataTypeName: `float`,
              code: `<a href="#getBarLength()">getBarLength</a>()`,
  
              fullCode: `public float <a href="#getBarLength()">getBarLength</a>()`,

              des: `Ye method, DrawerArrowDrawable object ke bar (rekha) ki lambai (length) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getBarLength() method ke dwara hum DrawerArrowDrawable object ke bar (rekha) ki lambai ko float value ke roop mein prapt kar sakte hain.</p>

              <p>getBarLength() method ka upyog DrawerArrowDrawable object ke bar (rekha) ki lambai ko retrieve karne ke liye kiya jata hai. Bar, arrow icon ke visual representation ko customize karne ke liye upyog hoti hai. Ye lambai arrow ke shaft (lambaai) aur arrow ke sir (head) ke beech ki hoti hai.</p>
              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "getBarThickness",
              id: "getBarThickness()",
              dataTypeName: `float`,
              code: `<a href="#getBarThickness()">getBarThickness</a>()`,
  
              fullCode: `public float <a href="#getBarThickness()">getBarThickness</a>()`,

              des: `Ye method, DrawerArrowDrawable object ke bar (rekha) ki motai (thickness) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getBarThickness() method ke dwara hum DrawerArrowDrawable object ke bar (rekha) ki motai ko float value ke roop mein prapt kar sakte hain.</p>

              <p>getBarThickness() method ka upyog DrawerArrowDrawable object ke bar (rekha) ki motai ko retrieve karne ke liye kiya jata hai. Bar, arrow icon ke visual representation ko customize karne ke liye upyog hoti hai. Ye motai bar ki width ko represent karti hai.</p>
              `,

             
              parameter: [],
            },

  
  

            {
              dep: false,
              name: "getColor",
              id: "getColor()",
              dataTypeName: `@ColorInt int`,
              code: `<a href="#getColor()">getColor</a>()`,
  
              fullCode: `public @ColorInt int <a href="#getColor()">getColor</a>()`,

              des: `Ye method, DrawerArrowDrawable object ke color ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getColor() method ke dwara hum DrawerArrowDrawable object ke color ko int value ke roop mein prapt kar sakte hain. @ColorInt annotation, ye indicate karta hai ki method se prapt kiya gaya int value ek valid color representation hai.</p>

              <p>getColor() method ka upyog DrawerArrowDrawable object ke color ko retrieve karne ke liye kiya jata hai. Color, arrow icon ke visual representation ko customize karne ke liye upyog hota hai. Ye method int value return karta hai, jo ek color representation ko represent karta hai.</p>
              `,

             
              parameter: [],
            },

  
  

            {
              dep: false,
              name: "getDirection",
              id: "getDirection()",
              dataTypeName: `int`,
              code: `<a href="#getDirection()">getDirection</a>()`,
  
              fullCode: `public int <a href="#getDirection()">getDirection</a>()`,

              des: `Ye method, DrawerArrowDrawable object ke arrow ke direction (dishaa) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getDirection() method ke dwara hum DrawerArrowDrawable object ke arrow ke direction ko int value ke roop mein prapt kar sakte hain.</p>

              <p>getDirection() method ka upyog DrawerArrowDrawable object ke arrow ke direction ko retrieve karne ke liye kiya jata hai. Arrow ke direction, arrow icon ke visual representation ko customize karne ke liye upyog hota hai. Ye method int value return karta hai, jiska value arrow ke direction ko represent karta hai.</p>
              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "getGapSize",
              id: "getGapSize()",
              dataTypeName: `float`,
              code: `<a href="#getGapSize()">getGapSize</a>()`,
  
              fullCode: `public float <a href="#getGapSize()">getGapSize</a>()`,

              des: `Ye method, DrawerArrowDrawable object ke gap size ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getGapSize() method ke dwara hum DrawerArrowDrawable object ke gap size ko float value ke roop mein prapt kar sakte hain.</p>

              <p>getGapSize() method ka upyog DrawerArrowDrawable object ke gap size ko retrieve karne ke liye kiya jata hai. Gap size, arrow icon ke visual representation mein arrow ke sir (head) aur bar (rekha) ke beech ki khali jagah ko represent karta hai. Ye khali jagah icon ke components ke beech ka spacing hota hai.</p>
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

              des: `Ye method, DrawerArrowDrawable object ke intrinsic height (natural height) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getIntrinsicHeight() method ke dwara hum DrawerArrowDrawable object ke intrinsic height ko integer value ke roop mein prapt kar sakte hain.</p>

              <p>getIntrinsicHeight() method ka upyog DrawerArrowDrawable object ke intrinsic height ko retrieve karne ke liye kiya jata hai. Intrinsic height, arrow icon ka default height hota hai, jise Drawable object ki natural size ke roop mein refer kiya jata hai.</p>
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

              des: ` Ye method, DrawerArrowDrawable object ke intrinsic width (natural width) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getIntrinsicWidth() method ke dwara hum DrawerArrowDrawable object ke intrinsic width ko integer value ke roop mein prapt kar sakte hain.</p>

              <p>getIntrinsicWidth() method ka upyog DrawerArrowDrawable object ke intrinsic width ko retrieve karne ke liye kiya jata hai. Intrinsic width, arrow icon ka default width hota hai, jise Drawable object ki natural size ke roop mein refer kiya jata hai.</p>
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

              des: `Ye method, Drawable object ke opacity (apradhanshilta) ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getOpacity() method ke dwara hum DrawerArrowDrawable object ke opacity ko integer value ke roop mein prapt kar sakte hain. Ye method alpha blending ko represent karne wali predefined constants return karta hai.</p>

              <p>getOpacity() method ka upyog karte hue hum DrawerArrowDrawable object ke opacity ko retrieve kar sakte hain. Opacity, Drawable object ki apardhanshilta ko indicate karta hai, yaani ki ye batata hai ki Drawable object kitna transparent ya opaque hai.</p>

              <p>Method ka return type int hota hai, jisme underlying drawable object ke opacity level ko darshaya jata hai. Opacity level ko alag-alag constants ke form mein represent kiya jata hai, jaise PixelFormat.TRANSPARENT, PixelFormat.OPAQUE, PixelFormat.TRANSLUCENT, etc.</p>
              `,

             
              parameter: [],
            },


  

            {
              dep: false,
              name: "getPaint",
              id: "getPaint()",
              dataTypeName: `final Paint`,
              code: `<a href="#getPaint()">getPaint</a>()`,
  
              fullCode: `public final Paint <a href="#getPaint()">getPaint</a>()`,

              des: `Ye method, DrawerArrowDrawable object ke Paint object ko retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>getPaint() method ke dwara hum DrawerArrowDrawable object ke Paint object ko prapt kar sakte hain. Paint class, Android framework mein drawing operations ko handle karne ke liye upyog hoti hai.</p>

              <p>getPaint() method ka upyog DrawerArrowDrawable object ke Paint object ko retrieve karne ke liye kiya jata hai. Paint object, drawing properties jaise color, stroke width, style, shader, aadi ko store karta hai. Iske through hum Paint object ke properties ko customize kar aur drawing operations ko control kar sakte hain.</p>

              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "getProgress",
              id: "getProgress()",
              dataTypeName: `@FloatRange(from = 0.0, to = 1.0) float`,
              code: `<a href="#getProgress()">getProgress</a>()`,
  
              fullCode: `public @FloatRange(from = 0.0, to = 1.0) float <a href="#getProgress()">getProgress</a>()`,

              des: `Ye method, DrawerArrowDrawable object ke progress ko retrieve karne ke liye upyog hota hai. @FloatRange annotation, ye indicate karta hai ki method se prapt kiya gaya float value 0.0 se 1.0 ke beech mein honi chahiye.`,
  
              longDes: `
              <p>getProgress() method ke dwara hum DrawerArrowDrawable object ke progress ko float value ke roop mein prapt kar sakte hain. Ye float value 0.0 se 1.0 ke beech mein honi chahiye.</p>

              <p>getProgress() method ka upyog DrawerArrowDrawable object ke progress ko retrieve karne ke liye kiya jata hai. Progress, arrow icon ke visual representation ko customize karne ke liye upyog hota hai. Ye progress value arrow ke transition state ya animation ke liye upyog hoti hai.</p>

              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "isSpinEnabled",
              id: "isSpinEnabled()",
              dataTypeName: `boolean`,
              code: `<a href="#isSpinEnabled()">isSpinEnabled</a>()`,
  
              fullCode: `public boolean <a href="#isSpinEnabled()">isSpinEnabled</a>()`,

              des: `Ye method, DrawerArrowDrawable object mein spin (ghoomna) enabled hai ya nahi, yani ki arrow icon ghoom sakta hai ya nahi, ye retrieve karne ke liye upyog hota hai.`,
  
              longDes: `
              <p>isSpinEnabled() method ke dwara hum DrawerArrowDrawable object mein spin enabled hai ya nahi, yani ghoomne ki permission hai ya nahi, ye boolean value ke roop mein prapt kar sakte hain.</p>

              <p>isSpinEnabled() method ka upyog DrawerArrowDrawable object mein spin enabled hai ya nahi, yani arrow icon ko ghoomne ki permission hai ya nahi, retrieve karne ke liye kiya jata hai. Agar method true return karta hai, toh arrow icon ghoom sakta hai, aur agar false return karta hai, toh arrow icon ghoomne ki permission nahi hai.</p>

              `,

             
              parameter: [],
            },

  

            {
              dep: false,
              name: "setAlpha",
              id: "setAlpha()",
              dataTypeName: `void`,
              code: `<a href="#setAlpha()">setAlpha</a>(int alpha)`,
  
              fullCode: `public void <a href="#setAlpha()">setAlpha</a>(int alpha)`,

              des: `Ye method, DrawerArrowDrawable object ke alpha (transparency) value ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setAlpha() method ka upyog, DrawerArrowDrawable object ke alpha value ko set karne ke liye kiya jata hai. alpha parameter ke dwara, hum desired alpha value ko specify kar sakte hain. Alpha value 0 se 255 tak ka integer hota hai, jahan 0 poora transparent (invisible) ko aur 255 poora opaque (visible) ko represent karta hai.</p>

              <p>setAlpha() method ka upyog karte hue, hum DrawerArrowDrawable object ke alpha value ko customize kar sakte hai. Isse drawable ka transparency level set ho jata hai. Jis tarah se alpha value increase hoti hai, drawable ki opacity badhti hai aur visible hoti hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int alpha`,
                        des:`<p>DrawerArrowDrawable object ke alpha value ko represent karne ke liye integer value. Isme 0 se 255 tak ka value specify kiya ja sakta hai, jahan 0 poora transparent (invisible) aur 255 poora opaque (visible) ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setArrowHeadLength",
              id: "setArrowHeadLength()",
              dataTypeName: `void`,
              code: `<a href="#setArrowHeadLength()">setArrowHeadLength</a>(float length)`,
  
              fullCode: `public void <a href="#setArrowHeadLength()">setArrowHeadLength</a>(float length)`,

              des: `Ye method, DrawerArrowDrawable object ke arrow head length (mukh ki lambai) ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setArrowHeadLength() method ka upyog, DrawerArrowDrawable object ke arrow head ki length ko set karne ke liye kiya jata hai. length parameter ke dwara, hum desired arrow head length ko specify kar sakte hain.</p>

              <p>setArrowHeadLength() method ka upyog karte hue, hum DrawerArrowDrawable object ke arrow head length ko customize kar sakte hai. Isse arrow head ki lambai set hoti hai, jis se arrow ka shape aur appearance change hota hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `float length`,
                        des:`<p>DrawerArrowDrawable object ke arrow head ki length ko represent karne ke liye floating-point value. Isme positive value specify kiya jata hai, jisse arrow head ki length set hoti hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setArrowShaftLength",
              id: "setArrowShaftLength()",
              dataTypeName: `void`,
              code: `<a href="#setArrowShaftLength()">setArrowShaftLength</a>(float length)`,
  
              fullCode: `public void <a href="#setArrowShaftLength()">setArrowShaftLength</a>(float length)`,

              des: `Ye method, DrawerArrowDrawable object ke arrow shaft length (shaft ki lambai) ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setArrowShaftLength() method ka upyog, DrawerArrowDrawable object ke arrow shaft ki length ko set karne ke liye kiya jata hai. length parameter ke dwara, hum desired arrow shaft length ko specify kar sakte hain.</p>

              <p>setArrowShaftLength() method ka upyog karte hue, hum DrawerArrowDrawable object ke arrow shaft length ko customize kar sakte hai. Isse arrow shaft ki lambai set hoti hai, jis se arrow ka shape aur appearance change hota hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `float length`,
                        des:`<p>DrawerArrowDrawable object ke arrow shaft ki length ko represent karne ke liye floating-point value. Isme positive value specify kiya jata hai, jisse arrow shaft ki length set hoti hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "setBarLength",
              id: "setBarLength()",
              dataTypeName: `void`,
              code: `<a href="#setBarLength()">setBarLength</a>(float length)`,
  
              fullCode: `public void <a href="#setBarLength()">setBarLength</a>(float length)`,

              des: `Ye method, DrawerArrowDrawable object ke bar length (stambh ki lambai) ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setBarLength() method ka upyog, DrawerArrowDrawable object ke bar ki length ko set karne ke liye kiya jata hai. length parameter ke dwara, hum desired bar length ko specify kar sakte hain.</p>

              <p>setBarLength() method ka upyog karte hue, hum DrawerArrowDrawable object ke bar length ko customize kar sakte hai. Isse bar ki lambai set hoti hai, jis se arrow ka shape aur appearance change hota hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `float length`,
                        des:`<p>DrawerArrowDrawable object ke bar ki length ko represent karne ke liye floating-point value. Isme positive value specify kiya jata hai, jisse bar ki length set hoti hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setBarThickness",
              id: "setBarThickness()",
              dataTypeName: `void`,
              code: `<a href="#setBarThickness()">setBarThickness</a>(float width)`,
  
              fullCode: `public void <a href="#setBarThickness()">setBarThickness</a>(float width)`,

              des: `Ye method, DrawerArrowDrawable object ke bar thickness (stambh ki width) ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setBarThickness() method ka upyog, DrawerArrowDrawable object ke bar ki thickness ko set karne ke liye kiya jata hai. width parameter ke dwara, hum desired bar thickness ko specify kar sakte hain.</p>

              <p>setBarThickness() method ka upyog karte hue, hum DrawerArrowDrawable object ke bar thickness ko customize kar sakte hai. Isse bar ki motai set hoti hai, jis se arrow ka shape aur appearance change hota hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `float width`,
                        des:`<p>DrawerArrowDrawable object ke bar ki thickness ko represent karne ke liye floating-point value. Isme positive value specify kiya jata hai, jisse bar ki motai set hoti hai.</p>`,
                      },
                    ],
                  },
              ],
            },



  

            {
              dep: false,
              name: "setColor",
              id: "setColor()",
              dataTypeName: `void`,
              code: `<a href="#setColor()">setColor</a>(@ColorInt int color)`,
  
              fullCode: `public void <a href="#setColor()">setColor</a>(@ColorInt int color)`,

              des: `Ye method, DrawerArrowDrawable object ke color ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setColor() method ka upyog, DrawerArrowDrawable object ke color ko set karne ke liye kiya jata hai. color parameter ke dwara, hum desired color ko specify kar sakte hain.</p>

              <p>setColor() method ka upyog karte hue, hum DrawerArrowDrawable object ke color ko customize kar sakte hai. Isse arrow ka color set hota hai, jis se arrow ka appearance change hota hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@ColorInt int color`,
                        des:`<p>DrawerArrowDrawable object ke color ko represent karne ke liye @ColorInt annotation ke saath integer value. Isme color value ke liye valid integer value specify kiya jata hai.</p>`,
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
              code: `<a href="#setColorFilter()">setColorFilter</a>(ColorFilter colorFilter)`,
  
              fullCode: `public void <a href="#setColorFilter()">setColorFilter</a>(ColorFilter colorFilter)`,

              des: `Ye method, DrawerArrowDrawable object ke color filter ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setColorFilter() method ka upyog, DrawerArrowDrawable object ke color filter ko set karne ke liye kiya jata hai. colorFilter parameter ke dwara, hum desired color filter ko specify kar sakte hain.</p>

              <p>setColorFilter() method ka upyog karte hue, hum DrawerArrowDrawable object ke color filter ko customize kar sakte hai. Color filter ka upyog karte hue, hum drawable par color transformations, such as tinting or color modulation, apply kar sakte hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ColorFilter colorFilter`,
                        des:`<p>ColorFilter object, jisse color filter ke configuration aur properties ko represent kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setDirection",
              id: "setDirection()",
              dataTypeName: `void`,
              code: `<a href="#setDirection()">setDirection</a>(int direction)`,
  
              fullCode: `public void <a href="#setDirection()">setDirection</a>(int direction)`,

              des: `Ye method, DrawerArrowDrawable object ke direction (dishaa) ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setDirection() method ka upyog, DrawerArrowDrawable object ke direction ko set karne ke liye kiya jata hai. direction parameter ke dwara, hum desired direction ko specify kar sakte hain.</p>

              <p>setDirection() method ka upyog karte hue, hum DrawerArrowDrawable object ke direction ko customize kar sakte hai. Isse arrow ki disha set hoti hai, jis se arrow ka orientation aur appearance change hota hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int direction`,
                        des:`<p>DrawerArrowDrawable object ke direction ko represent karne ke liye integer value. Isme valid direction value specify kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setGapSize",
              id: "setGapSize()",
              dataTypeName: `void`,
              code: `<a href="#setGapSize()">setGapSize</a>(float gap)`,
  
              fullCode: `public void <a href="#setGapSize()">setGapSize</a>(float gap)`,

              des: `Ye method, DrawerArrowDrawable object ke gap size (do alag alag shiro ke beech ka antar) ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setGapSize() method ka upyog, DrawerArrowDrawable object ke gap size ko set karne ke liye kiya jata hai. gap parameter ke dwara, hum desired gap size ko specify kar sakte hain.</p>

              <p>setGapSize() method ka upyog karte hue, hum DrawerArrowDrawable object ke gap size ko customize kar sakte hai. Isse arrow ke dono alag alag shiro (heads) ke beech ka antar set hota hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `float gap`,
                        des:`<p>DrawerArrowDrawable object ke gap size ko represent karne ke liye floating-point value. Isme positive value specify kiya jata hai, jisse gap size set hoti hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  

            {
              dep: false,
              name: "setProgress",
              id: "setProgress()",
              dataTypeName: `void`,
              code: `<a href="#setProgress()">setProgress</a>(@FloatRange(from = 0.0, to = 1.0) float progress)`,
  
              fullCode: `public void <a href="#setProgress()">setProgress</a>(@FloatRange(from = 0.0, to = 1.0) float progress)`,

              des: `Ye method, DrawerArrowDrawable object ke progress ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setProgress() method ka upyog, DrawerArrowDrawable object ke progress ko set karne ke liye kiya jata hai. progress parameter ke dwara, hum desired progress value ko specify kar sakte hain. Progress value 0.0 se 1.0 tak ka floating-point number hota hai.</p>

              <p>setProgress() method ka upyog karte hue, hum DrawerArrowDrawable object ke progress ko customize kar sakte hai. Isse arrow ka progress set hota hai, jis se arrow ka shape aur appearance dynamic tarike se change hota hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@FloatRange(from = 0.0, to = 1.0) float progress`,
                        des:`<p>DrawerArrowDrawable object ke progress ko represent karne ke liye @FloatRange(from = 0.0, to = 1.0) annotation ke saath floating-point value. Isme 0.0 se 1.0 tak ki valid range mein value specify ki jati hai.</p>`,
                      },
                    ],
                  },
              ],
            },



  

            {
              dep: false,
              name: "setSpinEnabled",
              id: "setSpinEnabled()",
              dataTypeName: `void`,
              code: `<a href="#setSpinEnabled()">setSpinEnabled</a>(boolean enabled)`,
  
              fullCode: `public void <a href="#setSpinEnabled()">setSpinEnabled</a>(boolean enabled)`,

              des: `Ye method, DrawerArrowDrawable object ke spin enabled ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setSpinEnabled() method ka upyog, DrawerArrowDrawable object ke spin enabled state ko set karne ke liye kiya jata hai. enabled parameter ke dwara, hum desired spin state ko specify kar sakte hain.</p>

              <p>setSpinEnabled() method ka upyog karte hue, hum DrawerArrowDrawable object ke spin enabled state ko customize kar sakte hai. Spin enabled state ke sath, arrow ka animation chakkar lene ka tariqa aur orientation badal jata hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>DrawerArrowDrawable object ke spin enabled state ko represent karne ke liye boolean value. enabled true hone par spin enabled hota hai aur false hone par spin disabled ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "setVerticalMirror",
              id: "setVerticalMirror()",
              dataTypeName: `void`,
              code: `<a href="#setVerticalMirror()">setVerticalMirror</a>(boolean verticalMirror)`,
  
              fullCode: `public void <a href="#setVerticalMirror()">setVerticalMirror</a>(boolean verticalMirror)`,

              des: `Ye method, DrawerArrowDrawable object ka vertical mirror set karne ke liye use hota hai.`,
  
              longDes: `
              <p>setVerticalMirror() method ka upyog, DrawerArrowDrawable object ka vertical mirror state ko set karne ke liye kiya jata hai. verticalMirror parameter ke dwara, hum desired vertical mirror state ko specify kar sakte hain.</p>

              <p>setVerticalMirror() method ka upyog karte hue, hum DrawerArrowDrawable object ka vertical mirror state ko customize kar sakte hai. Vertical mirror state ke sath, arrow ka orientation badal jata hai jisse uska image vertically flipped ho jata hai.</p>

              `,

             
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean verticalMirror`,
                        des:`<p>DrawerArrowDrawable object ka vertical mirror state ko represent karne ke liye boolean value. verticalMirror true hone par vertical mirror state set hota hai aur false hone par normal state maintained hota hai.</p>`,
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
  