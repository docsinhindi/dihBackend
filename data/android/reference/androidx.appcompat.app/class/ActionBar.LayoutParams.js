module.exports.ActionBar_LayoutParams = (req, res) => {
  res.status(200).send({
    name: "ActionBar.LayoutParams",
    hCode: `public class <a href="#ActionBar.LayoutParams">ActionBar.LayoutParams</a> extends ViewGroup.MarginLayoutParams`,

    des: 
      `<p>ActionBar.LayoutParams ka use ActionBar ke layout ko customize karne ke liye kiya jata hai. Jab hum ActionBar ko layout karte hai, jaise ki ActionBar ke buttons, tabs, logo, title, subtitle, etc., to hum in elements ko arrange karne aur unki properties ko set karne ke liye ActionBar.LayoutParams class ka istemal karte hai.</p>`,
    
    img: [],


    summary: {
      success: true,

      publicfield: {
        success: true,
        name: "Public Fields",

        method: [
          {
            dep: false,
            name: "gravity",
            id: "gravity()",
            dataTypeName: `int`,
            code: `<a href="#gravity()">gravity</a>`,

            fullCode: `public int <a href="#gravity()">gravity</a>`,
            des: `Iska upyog ActionBar ke layout parameters me gravity ko specify karne ke liye kiya jata hai.`,

            longDes: `
            <p>Iska upyog ActionBar ke layout parameters me gravity ko specify karne ke liye kiya jata hai.</p>

            <p>Gravity, UI element ko kis tarah se position kiya jayega ya kis taraf akarshit kiya jayega, yeh define karta hai. ActionBar.LayoutParams class ActionBar ke layout parameters ko represent karta hai, jaise width, height, aur gravity.</p>

            <p>gravity variable, integer value hai jo gravity ko define karta hai. Hum Gravity.START, Gravity.END, Gravity.CENTER, Gravity.TOP, Gravity.BOTTOM, Gravity.CENTER_HORIZONTAL, Gravity.CENTER_VERTICAL jaise gravity constants ka upyog kar sakte hai.</p>

            <p>Jab hum gravity variable ko set karte hai, tab ActionBar ke layout parameters me gravity set ho jata hai. Gravity ke anusar ActionBar ka position aur alignment decide hota hai.</p>
            `,

            parameter: [
              {
                name: "See also",
                success: true,
                parameter: [
                  {
                    dataTypeName: `Gravity`,
                    des: ``,
                  },
                ],
              },
            ],
          },
        ],
      },

      publicConstructor: {
        name: "Public Constructor",
        success: false,

        method: [
          {
            dep: false,
            name: `LayoutParams`,
            id: "LayoutParams(int)",
            code: `<a href="#LayoutParams(int)">LayoutParams</a>(int gravity)`,
            fullCode: `public <a href="#LayoutParams(int)">LayoutParams</a>(int gravity)`,
            des: `Is constructor ka upyog ActionBar ke layout parameters ko initialize karne ke liye kiya jata hai.`,
            longDes: `<p>Is constructor ka upyog ActionBar ke layout parameters ko initialize karne ke liye kiya jata hai.

            Is constructor me gravity parameter ke roop me ek integer value liya jata hai, jo gravity ko represent karta hai.</p>

            <p>ActionBar.LayoutParams class ActionBar ke layout parameters ko define karta hai, jaise width, height, aur gravity. Constructor ke through hum layout parameters ko initialize karte hai.</p>
            
            <p>Jab hum LayoutParams constructor ko gravity parameter ke saath implement karte hai, tab ActionBar ke layout parameters me gravity set ho jata hai. Gravity ke anusar ActionBar ka position aur alignment decide hota hai.</p>`,
            parameter: [],
          },
          {
            dep: false,
            name: `LayoutParams`,
            id: "LayoutParams(ActionBar.LayoutParams)",
            code: `<a href="#LayoutParams(ActionBar.LayoutParams)">LayoutParams</a>(ActionBar.LayoutParams source)`,
            fullCode: `public <a href="#LayoutParams(ActionBar.LayoutParams)">LayoutParams</a>(ActionBar.LayoutParams source)`,
            des: `Is constructor ka upyog karke hum ek ActionBar.LayoutParams object ke layout parameters ko dusre ActionBar.LayoutParams object se copy kar sakte hai. Yeh useful hota hai, jab hum ek ActionBar.LayoutParams object ke values ko base bana kar dusre object ko initialize karna chahte hai.`,
            longDes: `
            <p>Is constructor me source parameter ke roop me ek ActionBar.LayoutParams object liya jata hai, jo existing layout parameters ko represent karta hai.</p>

            <p>ActionBar.LayoutParams class ActionBar ke layout parameters ko define karta hai, jaise width, height, aur gravity. Constructor ke through hum layout parameters ko initialize karte hai.</p>

            <p>Jab hum LayoutParams constructor ko source parameter ke saath implement karte hai, tab ek naya ActionBar.LayoutParams object create hota hai jisme existing layout parameters se values copy ho jati hai. Yani, source object ke layout parameters ki values LayoutParams object me copy ho jati hai.</p>`,
            parameter: [],
          },
          {
            dep: false,
            name: `LayoutParams`,
            id: "LayoutParams(ViewGroup.LayoutParams)",
            code: `<a href="#LayoutParams(ViewGroup.LayoutParams)">LayoutParams</a>(ViewGroup.LayoutParams source)`,
            fullCode: `public <a href="#LayoutParams(ViewGroup.LayoutParams)">LayoutParams</a>(ViewGroup.LayoutParams source)`,
            des: `Is constructor ka upyog karke hum ek ActionBar.LayoutParams object ke layout parameters ko dusre ViewGroup.LayoutParams object se copy kar sakte hai. Yeh useful hota hai, jab hum ek ViewGroup.LayoutParams object ke values ko base bana kar ActionBar.LayoutParams object ko initialize karna chahte hai.`,
            longDes: `
            <p>Is constructor me source parameter ke roop me ek ViewGroup.LayoutParams object liya jata hai, jo existing layout parameters ko represent karta hai.</p>

            <p>ActionBar.LayoutParams class ActionBar ke layout parameters ko define karta hai, jaise width, height, aur gravity. Constructor ke through hum layout parameters ko initialize karte hai.</p>

            <p>Jab hum LayoutParams constructor ko source parameter ke saath implement karte hai, tab ek naya ActionBar.LayoutParams object create hota hai jisme existing layout parameters se values copy ho jati hai. Yani, source object ke layout parameters ki values LayoutParams object me copy ho jati hai.</p>
            `,
            parameter: [],
          },
          {
            dep: false,
            name: `LayoutParams`,
            id: "LayoutParams(Context,AttributeSet)",
            code: `<a href="#LayoutParams(Context,AttributeSet)">LayoutParams</a>(@NonNull Context c, AttributeSet attrs)`,
            fullCode: `public <a href="#LayoutParams(Context,AttributeSet)">LayoutParams</a>(@NonNull Context c, AttributeSet attrs)`,
            des: `Is constructor ka upyog karke hum ActionBar ke layout parameters ko XML attributes se set kar sakte hai. Yeh useful hota hai, jab hum ActionBar ko XML layout file se inflate karte hai aur layout parameters ko XML attributes ke dwaara configure karna chahte hai.`,
            longDes: `
            <p>Is constructor me c parameter ke roop me ek Context object aur attrs parameter ke roop me AttributeSet object liya jata hai. Context object humein resource access karne aur layout parameters ko inflate karne ke liye provide karta hai, jabki AttributeSet object XML attributes ko represent karta</p>
            
            <p>ActionBar.LayoutParams class ActionBar ke layout parameters ko define karta hai, jaise width, height, aur gravity. Constructor ke through hum layout parameters ko initialize karte hai.</p>

            <p>Jab hum LayoutParams constructor ko Context object aur AttributeSet object ke saath implement karte hai, tab ek naya ActionBar.LayoutParams object create hota hai jisme XML attributes se layout parameters ki values initialize ho jati hai.</p>
            `,
            parameter: [],
          },
          {
            dep: false,
            name: `LayoutParams`,
            id: "LayoutParams(int,int)",
            code: `<a href="#LayoutParams(int,int)">LayoutParams</a>(int width, int height)`,
            fullCode: `public <a href="#LayoutParams(int,int)">LayoutParams</a>(int width, int height)`,
            des: `Is constructor ka upyog karke hum ActionBar ke layout parameters ko width aur height values ke dwaara set kar sakte hai. Yeh useful hota hai, jab hum ActionBar ka size customise karna chahte hai aur uski width aur height ko explicit tarike se specify karna chahte hai.`,
            longDes: `
            <p>Is constructor me width parameter ke roop me ek integer value liya jata hai, jo ActionBar ke width ko represent karta hai. Iske baad height parameter ke roop me ek integer value liya jata hai, jo ActionBar ke height ko represent karta hai.</p>

            <p>ActionBar.LayoutParams class ActionBar ke layout parameters ko define karta hai, jaise width, height, aur gravity. Constructor ke through hum layout parameters ko initialize karte hai.</p>

            <p>Jab hum LayoutParams constructor ko width aur height parameter ke saath implement karte hai, tab ek naya ActionBar.LayoutParams object create hota hai jisme specified width aur height values se layout parameters ki values initialize ho jati hai.</p>
            `,
            parameter: [],
          },
          {
            dep: false,
            name: `LayoutParams`,
            id: "LayoutParams(int,int,int)",
            code: `<a href="#LayoutParams(int,int,int)">LayoutParams</a>(int width, int height, int gravity)`,
            fullCode: `public <a href="#LayoutParams(int,int,int)">LayoutParams</a>(int width, int height, int gravity)`,
            des: `Is constructor ka upyog karke hum ActionBar ke layout parameters ko width, height, aur gravity values ke dwaara set kar sakte hai. Yeh useful hota hai, jab hum ActionBar ka size aur position customise karna chahte hai aur uski width, height, aur gravity ko explicit tarike se specify karna chahte hai.`,
            longDes: `
            <p>Is constructor me width parameter ke roop me ek integer value liya jata hai, jo ActionBar ke width ko represent karta hai. Iske baad height parameter ke roop me ek integer value liya jata hai, jo ActionBar ke height ko represent karta hai. Aur phir gravity parameter ke roop me ek integer value liya jata hai, jo ActionBar ke gravity ko represent karta hai.</p>

            <p>ActionBar.LayoutParams class ActionBar ke layout parameters ko define karta hai, jaise width, height, aur gravity. Constructor ke through hum layout parameters ko initialize karte hai.</p>

            <p>Jab hum LayoutParams constructor ko width, height, aur gravity parameter ke saath implement karte hai, tab ek naya ActionBar.LayoutParams object create hota hai jisme specified width, height, aur gravity values se layout parameters ki values initialize ho jati hai.</p>
            `,
            parameter: [],
          },
        ],
      },

      inheritedConstant: {
        name: "Inherited Constants",
        id:"inheritedConstants",
        success: false,

        method: [
          {
            name: "From android.view.ViewGroup.LayoutParams",
            arr: [
              {
                dep: true,
                dataTypeName: `
                static final int`,
                id: "",
                code: `FILL_PARENT = -1`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `static final int`,
                id: "",
                code: `MATCH_PARENT = -1`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `static final int`,
                id: "",
                code: `WRAP_CONTENT = -2`,
                fullCode: ``,
                des: ``,
              },
            ],
          },
        ],
      },


      inheritedfield: {
        name: "Inherited fields",
        id:"inheritedFields",
        success: false,

        method: [
          {
            name: "From android.view.ViewGroup.LayoutParams",
            arr: [
              {
                dep: false,
                dataTypeName: `int`,
                id: "",
                code: `height`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `LayoutAnimationController.AnimationParameters`,
                id: "",
                code: `layoutAnimationParameters`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `int`,
                id: "",
                code: `width`,
                fullCode: ``,
                des: ``,
              },
            ],
          },
          {
            name: "From android.view.ViewGroup.MarginLayoutParams",
            arr: [
              {
                dep: false,
                dataTypeName: `int`,
                id: "",
                code: `bottomMargin`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `int`,
                id: "",
                code: `leftMargin`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `int`,
                id: "",
                code: `rightMargin`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `int`,
                id: "",
                code: `topMargin`,
                fullCode: ``,
                des: ``,
              },
            ],
          },
        ],
      },

      inheritedMethod: {
        name: "Inherited methods",
        id:"inheritedMethods",
        success: false,

        method: [
          {
            name: "From android.view.ViewGroup.LayoutParams",
            arr: [
              {
                dep: false,
                dataTypeName: `void`,
                id: "",
                code: `setBaseAttributes(TypedArray a, int widthAttr, int heightAttr)`,
                fullCode: ``,
                des: ``,
              }
            ],
          },
          {
            name: "From android.view.ViewGroup.MarginLayoutParams",
            arr: [
              {
                dep: false,
                dataTypeName: `int`,
                id: "",
                code: `getLayoutDirection()`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `int`,
                id: "",
                code: `getMarginEnd()`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `int`,
                id: "",
                code: `getMarginStart()`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `boolean`,
                id: "",
                code: `isMarginRelative()`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `void`,
                id: "",
                code: `resolveLayoutDirection(int layoutDirection)`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `void`,
                id: "",
                code: `setLayoutDirection(int layoutDirection)`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `void`,
                id: "",
                code: `setMarginEnd(int end)`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `void`,
                id: "",
                code: `setMarginStart(int start)`,
                fullCode: ``,
                des: ``,
              },
              {
                dep: false,
                dataTypeName: `void`,
                id: "",
                code: `setMargins(int left, int top, int right, int bottom)`,
                fullCode: ``,
                des: ``,
              },
            ],
          },
        ],
      },
    },
  });
};
