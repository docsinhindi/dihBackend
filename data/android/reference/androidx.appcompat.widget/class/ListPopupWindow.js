module.exports.ListPopupWindow = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "ListPopupWindow",
      hCode: `public class <a href="#ListPopupWindow">ListPopupWindow</a>`,
  
      des: 
        `
        <p>Ye class, pop-up window (drop-down menu) ko implement karne ke liye use hoti hai.</p>
        
  
        <p>ListPopupWindow class ka use kisi specific item list ko pop-up window ke roop mein display karne ke liye kiya jata hai. Ye class, Spinner aur AutoCompleteTextView jaise UI elements ke saath sambandhit hai, jahan par user ko options ka list dikhana hota hai.</p>
  
       
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
              name: "INPUT_METHOD_FROM_FOCUSABLE",
              id: "",
              dataTypeName: `static final int`,
              code: `INPUT_METHOD_FROM_FOCUSABLE = 0`,
              fullCode: `public static final int INPUT_METHOD_FROM_FOCUSABLE = 0`,

              des:`Is constant ka use, ListPopupWindow me input method ko focusable karne ke liye hota hai.`,

              longDes: `
              <p>public static final int INPUT_METHOD_FROM_FOCUSABLE = 0 constant, ListPopupWindow me input method (e.g., keyboard) ko focusable karne ke liye use hota hai. Jab aap ListPopupWindow ko kholtay hain aur usmein input focusable banate hain, toh user keyboard se list items ko navigate karne ke liye arrow keys ka use kar sakta hai.</p>

              <p>Agar aap ListPopupWindow ko input method focusable nahi karte hain (e.g., ListPopupWindow.INPUT_METHOD_NEEDED constant ka use karke), toh user keyboard se list items ko navigate nahi kar payega, aur sirf touch interaction se items ko select kar payega.</p>`
              ,
              parameter: [],
            },



            {
              dep: false,
              name: "INPUT_METHOD_NEEDED",
              id: "",
              dataTypeName: `static final int`,
              code: `INPUT_METHOD_NEEDED = 1`,
              fullCode: `public static final int INPUT_METHOD_NEEDED = 1`,

              des:`Is constant ka use, ListPopupWindow me input method (e.g., keyboard) ki jarurat hoti hai, lekin use focusable nahi banaya jata hai.`,

              longDes: `
              <p>public static final int INPUT_METHOD_NEEDED = 1 constant, ListPopupWindow me input method (e.g., keyboard) ki jarurat hoti hai, lekin use focusable nahi banaya jata hai. Iska matlab hai ki jab aap ListPopupWindow ko kholtay hain aur usmein input method ki jarurat hoti hai (e.g., agar list me search karna hai jiske liye keyboard ki jarurat hai), toh input method automatically show ho jayega, lekin user keyboard se list items ko navigate nahi kar payega. Sirf touch interaction se items ko select kar payega.</p>

              <p>Input method ko focusable banane ke liye, ListPopupWindow.INPUT_METHOD_FROM_FOCUSABLE constant ka use kiya jata hai, jo keyboard se list items ko navigate karne ki anumati deta hai (is constant ke baare mein pichhla sawal mein bataya gaya).</p>`
              ,
              parameter: [],
            },
          


            {
              dep: false,
              name: "INPUT_METHOD_NOT_NEEDED",
              id: "",
              dataTypeName: `static final int`,
              code: `INPUT_METHOD_NOT_NEEDED = 2`,
              fullCode: `public static final int INPUT_METHOD_NOT_NEEDED = 2`,

              des:`Is constant ka use, ListPopupWindow me input method (e.g., keyboard) ki jarurat nahi hoti hai.`,

              longDes: `
              <p>public static final int INPUT_METHOD_NOT_NEEDED = 2 constant, ListPopupWindow me input method (e.g., keyboard) ki jarurat nahi hoti hai. Iska matlab hai ki jab aap ListPopupWindow ko kholtay hain, toh input method automatically show nahi hoga. Ismein, user list items ko sirf touch interaction se hi select kar sakta hai.</p>`
              ,
              parameter: [],
            },
          


            {
              dep: false,
              name: "MATCH_PARENT",
              id: "",
              dataTypeName: `static final int`,
              code: `MATCH_PARENT = -1`,
              fullCode: `public static final int MATCH_PARENT = -1`,

              des:`Is constant ka use, ListPopupWindow ke width ya height ko parent container ke width ya height ke equal karne ke liye hota hai`,

              longDes: `
              <p>public static final int MATCH_PARENT = -1 constant, ListPopupWindow ke width ya height ko parent container ke width ya height ke equal karne ke liye use hota hai. Yani ki, jab aap ListPopupWindow ko open karte hain, toh iska width ya height parent container ke width ya height ke equal ho jata hai. Isse, ListPopupWindow container ko fill karne mein madad milti hai.</p>`
              ,
              parameter: [],
            },
          

            {
              dep: false,
              name: "POSITION_PROMPT_ABOVE",
              id: "",
              dataTypeName: `static final int`,
              code: `POSITION_PROMPT_ABOVE = 0`,
              fullCode: `public static final int POSITION_PROMPT_ABOVE = 0`,

              des:`Is constant ka use, ListPopupWindow ke prompt view ko list ke upar show karne ke liye hota hai.`,

              longDes: `
              <p>public static final int POSITION_PROMPT_ABOVE = 0 constant, ListPopupWindow ke prompt view ko list ke upar show karne ke liye use hota hai. Prompt view ek view hota hai, jo list ke upar show hota hai aur usually list ko describe karta hai ya instructions deta hai. Agar aap prompt view ko ListPopupWindow ke upar show karna chahte hain, toh aap setPromptPosition() method ka use kar sakte hain.</p>`
              ,
              parameter: [],
            },
          

            {
              dep: false,
              name: "POSITION_PROMPT_BELOW",
              id: "",
              dataTypeName: `static final int`,
              code: `POSITION_PROMPT_BELOW = 1`,
              fullCode: `public static final int POSITION_PROMPT_BELOW = 1`,

              des:`Is constant ka use, ListPopupWindow ke prompt view ko list ke neeche show karne ke liye hota hai.`,

              longDes: `
              <p>public static final int POSITION_PROMPT_BELOW = 1 constant, ListPopupWindow ke prompt view ko list ke neeche show karne ke liye use hota hai. Prompt view ek view hota hai, jo list ke neeche show hota hai aur usually list ko describe karta hai ya instructions deta hai. Agar aap prompt view ko ListPopupWindow ke neeche show karna chahte hain, toh aap setPromptPosition() method ka use kar sakte hain.</p>`
              ,
              parameter: [],
            },
          

            {
              dep: false,
              name: "WRAP_CONTENT",
              id: "",
              dataTypeName: `static final int`,
              code: `WRAP_CONTENT = -2`,
              fullCode: `public static final int WRAP_CONTENT = -2`,

              des:`Is constant ka use, ListPopupWindow ke width ya height ko content ke hisab se set karne ke liye hota hai.`,

              longDes: `
              <p>public static final int WRAP_CONTENT = -2 constant, ListPopupWindow ke width ya height ko content ke hisab se set karne ke liye use hota hai. Yani ki, jab aap ListPopupWindow ko open karte hain, toh iska width ya height automatically content ke size ke according adjust ho jata hai. Isse, ListPopupWindow ke content ko fit karne mein madad milti hai.</p>

              <p>Aap setWidth() ya setHeight() method ka use karke WRAP_CONTENT constant ko parameter ke roop mein pass kar sakte hain</p>`
              ,
              parameter: [],
            },
          
          ],
        },


  

        publicConstructor: {
          name: "Public Constructor",
          success: false,
  
          method: [
            {
              dep: false,
              name: `ListPopupWindow`,
              id: "ListPopupWindow()",
              code: `ListPopupWindow(@NonNull Context context)`,
              fullCode: `public ListPopupWindow(@NonNull Context context)`,

              des: `Is constructor ka use ek dropdown list (ya popup menu) ko display karne ke liye hota hai, jisse users items ko choose kar sakte hain.`,

              longDes: `
              <p>public ListPopupWindow(@NonNull Context context) constructor, ListPopupWindow class ka ek constructor hai, jo ek Context object ko input ke roop mein leta hai. Context, Android application ki current state aur environment ki information provide karta hai. Is constructor ko use karke aap ListPopupWindow object create kar sakte hain.</p>

              <p>Is constructor ke through create kiya gaya ListPopupWindow object ek simple list-based popup window hota hai, jise aap ek anchor view ke pass show kar sakte hain. Popup window mein items ko display karne ke liye aap apne custom layout ya standard layout (jaise ki simple_list_item_1) ka use kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek NonNull Context object leta hai, jo ListPopupWindow ko create karne ke liye required hota hai. Context object application ki information provide karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: `ListPopupWindow`,
              id: "ListPopupWindow()",
              code: `ListPopupWindow(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public ListPopupWindow(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Is constructor ka use ek dropdown list (ya popup menu) ko display karne ke liye hota hai, jisse users items ko choose kar sakte hain. Ye constructor AttributeSet object ko input ke roop mein leta hai, jiske jariye aap ListPopupWindow ko XML layout file se configure kar sakte hain.`,

              longDes: `
              <p>public ListPopupWindow(@NonNull Context context, @Nullable AttributeSet attrs) constructor, ListPopupWindow class ka ek constructor hai, jo ek Context object aur ek AttributeSet object ko input ke roop mein leta hai. Context, Android application ki current state aur environment ki information provide karta hai. AttributeSet object XML layout file mein define kiye gaye attributes ki information ko represent karta hai.</p>

              <p>Is constructor ke through create kiya gaya ListPopupWindow object ek simple list-based popup window hota hai, jise aap ek anchor view ke pass show kar sakte hain. Popup window mein items ko display karne ke liye aap apne custom layout ya standard layout (jaise ki simple_list_item_1) ka use kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek NonNull Context object leta hai, jo ListPopupWindow ko create karne ke liye required hota hai. Context object application ki information provide karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek Nullable AttributeSet object leta hai, jo ListPopupWindow ko XML layout file se configure karne ke liye use hota hai. Agar aap apne ListPopupWindow ko XML layout file se configure nahi karna chahte hain, to aap is parameter ko null pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: `ListPopupWindow`,
              id: "ListPopupWindow()",
              code: `ListPopupWindow(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                @AttrRes int defStyleAttr
            )`,
              fullCode: `public ListPopupWindow(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                @AttrRes int defStyleAttr
            )`,

              des: `Is constructor ka use ek dropdown list ya popup menu create karne ke liye hota hai, jisse aap users ko items ko select karne ke liye provide kar sakte hain. AttributeSet object ki madad se aap XML layout file se ListPopupWindow ko configure kar sakte hain, aur defStyleAttr parameter ki madad se aap default style ko apply kar sakte hain.`,

              longDes: `
              <p>public ListPopupWindow(@NonNull Context context, @Nullable AttributeSet attrs, @AttrRes int defStyleAttr) constructor, ListPopupWindow class ka ek constructor hai, jo ek Context object, ek AttributeSet object, aur ek defStyleAttr resource ID ko input ke roop mein leta hai. Context, Android application ki current state aur environment ki information provide karta hai. AttributeSet object XML layout file mein define kiye gaye attributes ki information ko represent karta hai. defStyleAttr ek attribute style resource ID hota hai, jisse aap default style ko apply kar sakte hain.</p>

              <p>Is constructor ke through create kiya gaya ListPopupWindow object ek simple list-based popup window hota hai, jise aap ek anchor view ke pass show kar sakte hain. Popup window mein items ko display karne ke liye aap apne custom layout ya standard layout (jaise ki simple_list_item_1) ka use kar sakte hain. Default style resource ID ke madhyam se aap popup window ko customize kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek NonNull Context object leta hai, jo ListPopupWindow ko create karne ke liye required hota hai. Context object application ki information provide karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek Nullable AttributeSet object leta hai, jo ListPopupWindow ko XML layout file se configure karne ke liye use hota hai. Agar aap apne ListPopupWindow ko XML layout file se configure nahi karna chahte hain, to aap is parameter ko null pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@AttrRes int defStyleAttr`,
                        des:`<p>Ye parameter ek @AttrRes int hai, jo default style resource ID ko represent karta hai. Isse aap default style ko ListPopupWindow par apply kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: `ListPopupWindow`,
              id: "ListPopupWindow()",
              code: `ListPopupWindow(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                @AttrRes int defStyleAttr,
                @StyleRes int defStyleRes
            )`,
              fullCode: `public ListPopupWindow(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                @AttrRes int defStyleAttr,
                @StyleRes int defStyleRes
            )`,

              des: `Is constructor ka use ek dropdown list ya popup menu create karne ke liye hota hai, jisse aap users ko items ko select karne ke liye provide kar sakte hain. AttributeSet object ki madad se aap XML layout file se ListPopupWindow ko configure kar sakte hain, defStyleAttr aur defStyleRes parameters ki madad se aap default style ko apply kar sakte hain.`,

              longDes: `
              <p>public ListPopupWindow(@NonNull Context context, @Nullable AttributeSet attrs, @AttrRes int defStyleAttr, @StyleRes int defStyleRes) constructor, ListPopupWindow class ka ek constructor hai, jo ek Context object, ek AttributeSet object, ek defStyleAttr resource ID, aur ek defStyleRes resource ID ko input ke roop mein leta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek NonNull Context object leta hai, jo ListPopupWindow ko create karne ke liye required hota hai. Context object application ki information provide karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek Nullable AttributeSet object leta hai, jo ListPopupWindow ko XML layout file se configure karne ke liye use hota hai. Agar aap apne ListPopupWindow ko XML layout file se configure nahi karna chahte hain, to aap is parameter ko null pass kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@AttrRes int defStyleAttr`,
                        des:`<p>Ye parameter ek @AttrRes int hai, jo default style attribute resource ID ko represent karta hai. Isse aap default style ko ListPopupWindow par apply kar sakte hain. Agar aapko koi specific style attribute apply karna hai, to aap uska resource ID specify kar sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@StyleRes int defStyleRes`,
                        des:`<p>Ye parameter ek @StyleRes int hai, jo default style resource ID ko represent karta hai. Isse aap ListPopupWindow ko ek specific style ke sath initialize kar sakte hain.</p>`,
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
              name: "clearListSelection",
              id: "clearListSelection()",
              dataTypeName: `void`,
              code: `<a href="#clearListSelection()">clearListSelection</a>()`,
  
              fullCode: `public void <a href="#clearListSelection()">clearListSelection</a>()`,

              des: `Is method ka use ListPopupWindow mein currently selected item ko clear karne ke liye hota hai.`,
  
              longDes: `
              <p>public void clearListSelection() method, ListPopupWindow ke current selected item ka selection clear karne ke liye hota hai. Agar koi item select nahi hai, ya phir selection pehle se hi clear hai, to ye method kuchh nahi karta.</p>

              <p>Is method ka use tab hota hai jab aap dropdown list ko dynamically update kar rahe hain aur selection ko reset karna chahte hain. Aap ise ListPopupWindow object par call kar sakte hain, jab bhi aapko list ke selected item ko clear karna ho.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "createDragToOpenListener",
              id: "createDragToOpenListener()",
              dataTypeName: `View.OnTouchListener`,
              code: `<a href="#createDragToOpenListener()">createDragToOpenListener</a>(View src)`,
  
              fullCode: `public View.OnTouchListener <a href="#createDragToOpenListener()">createDragToOpenListener</a>(View src)`,

              des: `Is method ka use dropdown menu ko open karne ke liye ek touch listener create karne ke liye hota hai.`,
  
              longDes: `
              <p>createDragToOpenListener(View src) method ka use dropdown menu ko open karne ke liye ek touch listener create karne ke liye hota hai. Normally, jab aap kisi ListPopupWindow ko open karne ke liye uski anchor view (the view that triggers the opening of the popup) par click karte hain, tab popup khulta hai. Lekin, is method ka use karke aapko ek option milta hai ki aap ListPopupWindow ko open karne ke liye anchor view ko drag kar sakte hain.</p>

              <p>Yani, agar aap anchor view ko press karke hold karte huye usko drag karte hain toh ListPopupWindow open ho jata hai. Isse user ko ek alternate way milta hai dropdown menu ko open karne ka.</p>

              <p>Ye method ek View.OnTouchListener object return karta hai, jo dropdown menu ko open karne ke liye drag gestures ko handle karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `View src`,
                        des:`<p>View type ka parameter hai, jise ListPopupWindow anchor view ke roop mein use kiya jata hai. Yani, dropdown menu ko open karne ke liye reference view ke taur par is parameter ka upayog hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "dismiss",
              id: "dismiss()",
              dataTypeName: `void`,
              code: `<a href="#dismiss()">dismiss</a>()`,
  
              fullCode: `public void <a href="#dismiss()">dismiss</a>()`,

              des: `Is method ka use, dropdown menu ya pop-up list ko hide ya dismiss karne ke liye hota hai.`,
  
              longDes: `
              <p>dismiss() method ka use kisi bhi ListPopupWindow object ko hide karne ke liye hota hai. Jab aap ListPopupWindow ko open karte hain, toh woh anchor view ke pass ek dropdown menu ya pop-up list show karta hai. Aap dropdown menu ke items select kar sakte hain, lekin jab aap bahar click karte hain ya kisi dusre action ko perform karte hain, tab ListPopupWindow open rehta hai. Agar aap chahte hain ki dropdown menu ke bahar click karne ya kisi specific action ke baad dropdown menu hide ho jaye, toh iske liye dismiss() method ka use hota hai.</p>
              `,

              parameter: [],
            },

  


            {
              dep: false,
              name: "getAnchorView",
              id: "getAnchorView()",
              dataTypeName: `@Nullable View`,
              code: `<a href="#getAnchorView()">getAnchorView</a>()`,
  
              fullCode: `public @Nullable View <a href="#getAnchorView()">getAnchorView</a>()`,

              des: `Is method ka use ListPopupWindow ke anchor view ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getAnchorView() method, ListPopupWindow ke anchor view ko retrieve karne ke liye hota hai. Anchor view, wo view hota hai jiske saath ya upar ListPopupWindow display hota hai. Jab aap ListPopupWindow ko display karte hain, toh aapko specify karna hota hai ki wo kis view ke saath associated hai. getAnchorView() method se aap uss associated view ko retrieve kar sakte hain.</p>

              <p>getAnchorView() method ka return type @Nullable View hota hai, yani ki ye ek View object ya null return kar sakta hai. Agar anchor view set nahi ki gayi hai ya phir already dismiss ho chuki hai, toh ye null return karega.</p>
              `,

              parameter: [],
            },

  


            {
              dep: false,
              name: "getAnimationStyle",
              id: "getAnimationStyle()",
              dataTypeName: `@StyleRes int`,
              code: `<a href="#getAnimationStyle()">getAnimationStyle</a>()`,
  
              fullCode: `public @StyleRes int <a href="#getAnimationStyle()">getAnimationStyle</a>()`,

              des: `Is method ka use, ListPopupWindow ke animation style resource ID ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getAnimationStyle() method, ListPopupWindow ke animation style resource ID ko retrieve karne ke liye hota hai. Jab aap ListPopupWindow ko display karte hain, toh aap uske animation style ko customize kar sakte hain. Animation styles, popup window ke show aur hide hone par apply kiye jane wale animations ko define karte hain.</p>

              <p>Is method se aap ye jaan sakte hain ki currently set animation style konsa hai, taki aap use dekh saken aur customize karne ke liye koi changes kar saken.</p>

              <p>getAnimationStyle() method ka return type @StyleRes int hota hai, yani ki ye ek integer value return karta hai, jo ek valid animation style resource ID represent karta hai. Agar animation style set nahi kiya gaya hai, toh ye method 0 (zero) return karega.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getBackground",
              id: "getBackground()",
              dataTypeName: `@Nullable Drawable`,
              code: `<a href="#getBackground()">getBackground</a>()`,
  
              fullCode: `public @Nullable Drawable <a href="#getBackground()">getBackground</a>()`,

              des: `Is method ka use, ListPopupWindow ke background drawable ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getBackground() method, ListPopupWindow ke background drawable ko retrieve karne ke liye hota hai. Jab aap ListPopupWindow ko display karte hain, toh aap uske background ko customize kar sakte hain. Background drawable, popup window ke background ko define karta hai, jisme aap colors, gradients, shapes, images ya kisi bhi drawable resource ka use kar sakte hain.</p>

              <p>Is method se aap ye jaan sakte hain ki currently set background drawable konsa hai, taki aap use dekh saken aur customize karne ke liye koi changes kar saken.</p>

              <p>getBackground() method ka return type @Nullable Drawable hota hai, yani ki ye ek Drawable object ya null return kar sakta hai. Agar background drawable set nahi kiya gaya hai, toh ye method null return karega.</p>
              `,

              parameter: [],
            },

  


            {
              dep: false,
              name: "getEpicenterBounds",
              id: "getEpicenterBounds()",
              dataTypeName: `@Nullable Rect`,
              code: `<a href="#getEpicenterBounds()">getEpicenterBounds</a>()`,
  
              fullCode: `public @Nullable Rect <a href="#getEpicenterBounds()">getEpicenterBounds</a>()`,

              des: `Is method ka use, ListPopupWindow ke epicenter bounds (epicenter ka boundary) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getEpicenterBounds() method, ListPopupWindow ke epicenter bounds ko retrieve karne ke liye hota hai. Jab aap ListPopupWindow ko display karte hain, toh aap animation ka epicenter specify kar sakte hain. Epicenter bounds, epicenter point ke aas-paas ka rectangular boundary hota hai.</p>

              <p>Is method se aap epicenter bounds ka pata laga sakte hain, jisse aap epicenter ke aas-paas ka area customize kar sakte hain, aur animation ko visually appealing bana sakte hain.</p>

              <p>getEpicenterBounds() method ka return type @Nullable Rect hota hai, yani ki ye ek Rect object ya null return kar sakta hai. Agar epicenter bounds set nahi kiya gaya hai, toh ye method null return karega.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getHeight",
              id: "getHeight()",
              dataTypeName: `int`,
              code: `<a href="#getHeight()">getHeight</a>()`,
  
              fullCode: `public int <a href="#getHeight()">getHeight</a>()`,

              des: `Is method ka use, ListPopupWindow ke height (height ka size) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getHeight() method, ListPopupWindow ke height ko retrieve karne ke liye hota hai. Jab aap ListPopupWindow ko display karte hain, toh aap uske height ko customize kar sakte hain. Height define karta hai ki popup window kitni height tak display hogi.</p>

              <p>Is method se aap ye jaan sakte hain ki currently set height kya hai, taki aap use dekh saken aur customize karne ke liye koi changes kar saken.</p>

              <p>getHeight() method ka return type int hota hai, yani ki ye ek integer value return karta hai, jo current height size represent karta hai. Height size pixels mein hoti hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getHorizontalOffset",
              id: "getHorizontalOffset()",
              dataTypeName: `int`,
              code: `<a href="#getHorizontalOffset()">getHorizontalOffset</a>()`,
  
              fullCode: `public int <a href="#getHorizontalOffset()">getHorizontalOffset</a>()`,

              des: `Is method ka use, ListPopupWindow ke horizontal offset (horizontal displacement) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getHorizontalOffset() method, ListPopupWindow ke horizontal offset ko retrieve karne ke liye hota hai. Horizontal offset, popup window ki position ko horizontally (left/right) shift karne ke liye use hota hai. Agar aap ListPopupWindow ko kisi specific view ke saath associate karte hain (e.g., anchor view), toh aap horizontal offset set karke us view ke relative position ko customize kar sakte hain.</p>

              <p>Is method se aap ye jaan sakte hain ki currently set horizontal offset kya hai, taki aap use dekh saken aur customize karne ke liye koi changes kar saken.</p>

              <p>getHorizontalOffset() method ka return type int hota hai, yani ki ye ek integer value return karta hai, jo current horizontal offset represent karta hai. Horizontal offset pixels mein hota hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getInputMethodMode",
              id: "getInputMethodMode()",
              dataTypeName: `int`,
              code: `<a href="#getInputMethodMode()">getInputMethodMode</a>()`,
  
              fullCode: `public int <a href="#getInputMethodMode()">getInputMethodMode</a>()`,

              des: `Is method ka use, ListPopupWindow ke input method mode ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getInputMethodMode() method, ListPopupWindow ke input method mode ko retrieve karne ke liye hota hai. Input method mode, yeh specify karta hai ki ListPopupWindow kaise interact karega input method (soft keyboard) ke saath.</p>

              <p>Is method se aap ye jaan sakte hain ki currently set input method mode kya hai, taki aap use dekh saken aur customize karne ke liye koi changes kar saken.</p>

              <p>getInputMethodMode() method ka return type int hota hai, yani ki ye ek integer value return karta hai, jo current input method mode ko represent karta hai. Ye ek constant value hota hai, jiska value INPUT_METHOD_FROM_FOCUSABLE ya INPUT_METHOD_NEEDED ho sakta hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getListView",
              id: "getListView()",
              dataTypeName: `@Nullable ListView`,
              code: `<a href="#getListView()">getListView</a>()`,
  
              fullCode: `public @Nullable ListView <a href="#getListView()">getListView</a>()`,

              des: `Is method ka use, ListPopupWindow ke associated ListView ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getListView() method, ListPopupWindow ke associated ListView ko retrieve karne ke liye hota hai. Jab aap ListPopupWindow ko display karte hain aur usme ek list of items show karte hain, toh aap is method ka use karke us associated ListView object ko retrieve kar sakte hain.</p>

              <p>Is ListView object ka use karke aap ListView ke items ko customize kar sakte hain, unhe populate kar sakte hain, ya kisi specific item ko select kar sakte hain, jaise ki normal ListView mein karte hain.</p>

              <p>getListView() method ka return type @Nullable ListView hota hai, yani ki ye ek ListView object ya null return kar sakta hai. Agar associated ListView set nahi kiya gaya hai ya phir popup window dismiss ho chuki hai, toh ye method null return karega.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getPromptPosition",
              id: "getPromptPosition()",
              dataTypeName: `int`,
              code: `<a href="#getPromptPosition()">getPromptPosition</a>()`,
  
              fullCode: `public int <a href="#getPromptPosition()">getPromptPosition</a>()`,

              des: `Is method ka use, ListPopupWindow ke prompt position ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getPromptPosition() method, ListPopupWindow ke prompt position ko retrieve karne ke liye hota hai. Agar aapne ListPopupWindow mein prompt message set kiya hai (setPromptPosition() method se), toh is method se aap us prompt message ke position ko jaan sakte hain.</p>

              <p>getPromptPosition() method ka return type int hota hai, yani ki ye ek integer value return karta hai, jo prompt position ko represent karta hai. Prompt position ka value 4 possible positions mein se ek hota hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getSelectedItem",
              id: "getSelectedItem()",
              dataTypeName: `@Nullable Object`,
              code: `<a href="#getSelectedItem()">getSelectedItem</a>()`,
  
              fullCode: `public @Nullable Object <a href="#getSelectedItem()">getSelectedItem</a>()`,

              des: `Is method ka use, ListPopupWindow ke current selected item ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSelectedItem() method, ListPopupWindow ke current selected item ko retrieve karne ke liye hota hai. Jab aap ListPopupWindow mein se kisi item ko select karte hain, toh aap is method ka use karke us selected item ko retrieve kar sakte hain.</p>

              <p>getSelectedItem() method ka return type @Nullable Object hota hai, yani ki ye ek object ya null return kar sakta hai. Agar koi item select nahi kiya gaya hai ya phir selected item ka data type Object nahi hai, toh ye method null return karega.</p>
              `,

              parameter: [],
            },

  
  
  
            {
              dep: false,
              name: "getSelectedItemId",
              id: "getSelectedItemId()",
              dataTypeName: `long`,
              code: `<a href="#getSelectedItemId()">getSelectedItemId</a>()`,
  
              fullCode: `public long <a href="#getSelectedItemId()">getSelectedItemId</a>()`,

              des: `Is method ka use, ListPopupWindow mein se currently selected item ka unique ID (item identifier) retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSelectedItemId() method, ListPopupWindow mein se currently selected item ka unique ID ko retrieve karne ke liye hota hai. Agar aapne ListPopupWindow mein ek list of items set kiya hai aur user ne kisi item ko select kiya hai, toh aap is method ka use karke us selected item ka unique ID retrieve kar sakte hain.</p>

              <p>getSelectedItemId() method ka return type long hota hai, yani ki ye ek long integer value return karta hai, jo selected item ka unique ID represent karta hai. Agar koi item select nahi kiya gaya hai ya phir item ka ID numeric nahi hai, toh ye method INVALID_ROW_ID constant value return karega, jo -1 ke barabar hota hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getSelectedItemPosition",
              id: "getSelectedItemPosition()",
              dataTypeName: `int`,
              code: `<a href="#getSelectedItemPosition()">getSelectedItemPosition</a>()`,
  
              fullCode: `public int <a href="#getSelectedItemPosition()">getSelectedItemPosition</a>()`,

              des: `Is method ka use, ListPopupWindow mein se currently selected item ka position (index) retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSelectedItemPosition() method, ListPopupWindow mein se currently selected item ka position (index) retrieve karne ke liye hota hai. Agar aapne ListPopupWindow mein ek list of items set kiya hai aur user ne kisi item ko select kiya hai, toh aap is method ka use karke us selected item ka position jaan sakte hain.</p>

              <p>getSelectedItemPosition() method ka return type int hota hai, yani ki ye ek integer value return karta hai, jo selected item ka position (index) represent karta hai. Position 0-based hota hai, matlab 0 se shuru hota hai. Agar koi item select nahi kiya gaya hai, toh ye method -1 return karega.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getSelectedView",
              id: "getSelectedView()",
              dataTypeName: `@Nullable View`,
              code: `<a href="#getSelectedView()">getSelectedView</a>()`,
  
              fullCode: `public @Nullable View <a href="#getSelectedView()">getSelectedView</a>()`,

              des: `Is method ka use, ListPopupWindow mein se currently selected item ke associated view ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSelectedView() method, ListPopupWindow mein se currently selected item ke associated view ko retrieve karne ke liye hota hai. Jab aap ListPopupWindow mein se kisi item ko select karte hain, toh aap is method ka use karke us selected item ke view object ko retrieve kar sakte hain.</p>

              <p>getSelectedView() method ka return type @Nullable View hota hai, yani ki ye ek View object ya null return kar sakta hai. Agar koi item select nahi kiya gaya hai ya phir view associated with the selected item null ho, toh ye method null return karega.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getSoftInputMode",
              id: "getSoftInputMode()",
              dataTypeName: `int`,
              code: `<a href="#getSoftInputMode()">getSoftInputMode</a>()`,
  
              fullCode: `public int <a href="#getSoftInputMode()">getSoftInputMode</a>()`,

              des: `Is method ka use, ListPopupWindow ke soft input mode ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSoftInputMode() method, ListPopupWindow ke soft input mode ko retrieve karne ke liye hota hai. ListPopupWindow ka use karte waqt, aap is method ka use karke dekh sakte hain ki soft keyboard kis mode mein show hoga, ya phir kya mode set kiya gaya hai.</p>

              <p>getSoftInputMode() method ka return type int hota hai, yani ki ye ek integer value return karta hai, jo soft input mode ko represent karta hai. Soft input mode ka value kuch alag-alag constants mein se ek ho sakta hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getVerticalOffset",
              id: "getVerticalOffset()",
              dataTypeName: `int`,
              code: `<a href="#getVerticalOffset()">getVerticalOffset</a>()`,
  
              fullCode: `public int <a href="#getVerticalOffset()">getVerticalOffset</a>()`,

              des: `Is method ka use, ListPopupWindow ke vertical offset ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getVerticalOffset() method, ListPopupWindow ke vertical offset ko retrieve karne ke liye hota hai. Agar aap ListPopupWindow ko anchor view ke saath display karte hain, toh is method ka use karke aap dekh sakte hain ki popup window anchor view ke saath kitna vertically offset hai.</p>

              <p>getVerticalOffset() method ka return type int hota hai, yani ki ye ek integer value return karta hai, jo vertical offset ko represent karta hai. Is offset ko pixels mein measure kiya jaata hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getWidth",
              id: "getWidth()",
              dataTypeName: `int`,
              code: `<a href="#getWidth()">getWidth</a>()`,
  
              fullCode: `public int <a href="#getWidth()">getWidth</a>()`,

              des: `Is method ka use, ListPopupWindow ke width ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getWidth() method, ListPopupWindow ke width ko retrieve karne ke liye hota hai. Agar aap ListPopupWindow ko display karte waqt, uska width kisi specific value se set nahi karte hain, toh is method ka use karke aap dekh sakte hain ki ListPopupWindow ke kitne pixels width ki size hai.</p>

              <p>getWidth() method ka return type int hota hai, yani ki ye ek integer value return karta hai, jo ListPopupWindow ke width ko represent karta hai. Is width ko pixels mein measure kiya jaata hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "isInputMethodNotNeeded",
              id: "isInputMethodNotNeeded()",
              dataTypeName: `boolean`,
              code: `<a href="#isInputMethodNotNeeded()">isInputMethodNotNeeded</a>()`,
  
              fullCode: `public boolean <a href="#isInputMethodNotNeeded()">isInputMethodNotNeeded</a>()`,

              des: `Is method ka use, ListPopupWindow ke liye input method (soft keyboard) ki zaroorat nahi hai ya phir kisi specific scenario mein input method ki requirement nahi hai, yeh check karne ke liye hota hai.`,
  
              longDes: `
              <p>isInputMethodNotNeeded() method, ListPopupWindow ke liye input method ki zaroorat nahi hai ya phir kisi specific scenario mein input method ki requirement nahi hai, yeh check karne ke liye hota hai. Agar aapka ListPopupWindow text input fields (jaise EditText) ya keyboard interaction se unrelated hai, toh aap is method ka use karke dekh sakte hain ki input method ki zaroorat nahi hai.</p>

              <p>isInputMethodNotNeeded() method ka return type boolean hota hai, yani ki ye ek boolean value return karta hai. Agar ListPopupWindow ke liye input method ki zaroorat nahi hai, toh method true return karega, anyatha false return karega.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "isModal",
              id: "isModal()",
              dataTypeName: `boolean`,
              code: `<a href="#isModal()">isModal</a>()`,
  
              fullCode: `public boolean <a href="#isModal()">isModal</a>()`,

              des: `Is method ka use, ListPopupWindow ka modal behavior check karne ke liye hota hai.`,
  
              longDes: `
              <p>isModal() method, ListPopupWindow ka modal behavior check karne ke liye hota hai. Aap is method ka use karke dekh sakte hain ki ListPopupWindow ka behavior modal hai ya nahi. Yani, jab ListPopupWindow visible hota hai, kya background UI inactive ya disabled ho jata hai.</p>

              <p>isModal() method ka return type boolean hota hai, yani ki ye ek boolean value return karta hai. Agar ListPopupWindow ka behavior modal hai, toh method true return karega, anyatha false return karega.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "isShowing",
              id: "isShowing()",
              dataTypeName: `boolean`,
              code: `<a href="#isShowing()">isShowing</a>()`,
  
              fullCode: `public boolean <a href="#isShowing()">isShowing</a>()`,

              des: `Is method ka use, ListPopupWindow ka status check karne ke liye hota hai, yani ki ye method yeh batata hai ki kya ListPopupWindow display ho raha hai ya nahi.`,
  
              longDes: `
              <p>isShowing() method, ListPopupWindow ka status check karne ke liye hota hai. Jab aap ListPopupWindow ko display karne ke liye show() method ka use karte hain, tab aap is method ka use karke dekh sakte hain ki ListPopupWindow display ho raha hai ya nahi.</p>

              <p>isShowing() method ka return type boolean hota hai, yani ki ye ek boolean value return karta hai. Agar ListPopupWindow display ho raha hai, toh method true return karega, anyatha false return karega.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "onKeyDown",
              id: "onKeyDown()",
              dataTypeName: `boolean`,
              code: `<a href="#onKeyDown()">onKeyDown</a>(int keyCode, @NonNull KeyEvent event)`,
  
              fullCode: `public boolean <a href="#onKeyDown()">onKeyDown</a>(int keyCode, @NonNull KeyEvent event)`,

              des: `Is method ka use, ListPopupWindow ke key events (e.g., hardware key presses) ko handle karne ke liye hota hai.`,
  
              longDes: `
              <p>onKeyDown(int keyCode, @NonNull KeyEvent event) method, ListPopupWindow ke key events (e.g., hardware key presses) ko handle karne ke liye hota hai. Jab aap ListPopupWindow ko display karte hain, toh aap is method ka use karke dekh sakte hain ki kya user ne koi key press kiya hai aur us key press ko handle karke specific actions perform kar sakte hain.</p>

              <p>onKeyDown() method ka return type boolean hota hai, yani ki ye ek boolean value return karta hai. Agar aapne key press event ko handle kar liya hai aur further propagation ko rokna chahte hain, toh aap true return karein, anyatha false return karein.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int keyCode`,
                        des:`<p>Ye parameter, user dawara press kiye gaye key ka unique code hota hai. Isse aap ye determine kar sakte hain ki kaunsi key press hui hai (e.g., KEYCODE_BACK, KEYCODE_ENTER, etc.).</p>`,
                      },
                      {
                        dataTypeName: `@NonNull KeyEvent event`,
                        des:`<p>Ye parameter, KeyEvent object hota hai jo key event details jaise key code, action, timestamp, etc. ko store karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "onKeyPreIme",
              id: "onKeyPreIme()",
              dataTypeName: `boolean`,
              code: `<a href="#onKeyPreIme()">onKeyPreIme</a>(int keyCode, @NonNull KeyEvent event)`,
  
              fullCode: `public boolean <a href="#onKeyPreIme()">onKeyPreIme</a>(int keyCode, @NonNull KeyEvent event)`,

              des: `Is method ka use, ListPopupWindow ke key events ko handle karne ke liye hota hai, jinmein KeyEvent.KEYCODE_BACK key event shaamil hota hai, jo soft keyboard ke ek special key hota hai.`,
  
              longDes: `
              <p>onKeyPreIme(int keyCode, @NonNull KeyEvent event) method, ListPopupWindow ke key events ko handle karne ke liye hota hai, jinmein KeyEvent.KEYCODE_BACK key event shaamil hota hai. Soft keyboard par back key press kiya jaata hai, toh yeh method call hota hai. Aap is method ka use karke dekh sakte hain ki kya user ne back key press kiya hai aur us event ko handle karke specific actions perform kar sakte hain.</p>

              <p>onKeyPreIme() method ka return type boolean hota hai, yani ki ye ek boolean value return karta hai. Agar aapne key press event ko handle kar liya hai aur further propagation ko rokna chahte hain, toh aap true return karein, anyatha false return karein.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int keyCode`,
                        des:`<p>Ye parameter, user dawara press kiye gaye key ka unique code hota hai. Isse aap ye determine kar sakte hain ki kaunsi key press hui hai (e.g., KEYCODE_BACK, KEYCODE_ENTER, etc.).</p>`,
                      },
                      {
                        dataTypeName: `@NonNull KeyEvent event`,
                        des:`<p>Ye parameter, KeyEvent object hota hai jo key event details jaise key code, action, timestamp, etc. ko store karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "onKeyUp",
              id: "onKeyUp()",
              dataTypeName: `boolean`,
              code: `<a href="#onKeyUp()">onKeyUp</a>(int keyCode, @NonNull KeyEvent event)`,
  
              fullCode: `public boolean <a href="#onKeyUp()">onKeyUp</a>(int keyCode, @NonNull KeyEvent event)`,

              des: `Is method ka use, ListPopupWindow ke key events ko handle karne ke liye hota hai, jinmein KeyEvent.KEYCODE_ENTER key event shaamil hota hai, jo hardware keyboard ya D-pad se enter key press karne par hota hai.`,
  
              longDes: `
              <p>onKeyUp(int keyCode, @NonNull KeyEvent event) method, ListPopupWindow ke key events ko handle karne ke liye hota hai, jinmein KeyEvent.KEYCODE_ENTER key event shaamil hota hai. Aap is method ka use karke dekh sakte hain ki kya user ne enter key press kiya hai (e.g., hardware keyboard ya D-pad se) aur us event ko handle karke specific actions perform kar sakte hain.</p>

              <p>onKeyUp() method ka return type boolean hota hai, yani ki ye ek boolean value return karta hai. Agar aapne key press event ko handle kar liya hai aur further propagation ko rokna chahte hain, toh aap true return karein, anyatha false return karein.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int keyCode`,
                        des:`<p>Ye parameter, user dawara press kiye gaye key ka unique code hota hai. Isse aap ye determine kar sakte hain ki kaunsi key press hui hai (e.g., KEYCODE_ENTER, KEYCODE_DPAD_CENTER, etc.).</p>`,
                      },
                      {
                        dataTypeName: `@NonNull KeyEvent event`,
                        des:`<p>Ye parameter, KeyEvent object hota hai jo key event details jaise key code, action, timestamp, etc. ko store karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "performItemClick",
              id: "performItemClick()",
              dataTypeName: `boolean`,
              code: `<a href="#performItemClick()">performItemClick</a>(int position)`,
  
              fullCode: `public boolean <a href="#performItemClick()">performItemClick</a>(int position)`,

              des: `Is method ka use, ListPopupWindow mein ek item ko select aur click karne ke liye hota hai.`,
  
              longDes: `
              <p>performItemClick(int position) method, ListPopupWindow mein ek item ko select aur click karne ke liye hota hai. Is method ka use karke aap specific position par list ke ek item ko programmatically select kar sakte hain aur us item ko click kiya gaya maana jayega.</p>

              <p>performItemClick() method ka return type boolean hota hai, yani ki ye ek boolean value return karta hai. Agar item click successful hota hai, toh method true return karega, anyatha false return karega.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int position`,
                        des:`<p>Ye parameter, int type ka hota hai, jo select aur click karne wale item ki position ko represent karta hai. Position 0 se shuru hoti hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  
  
            {
              dep: false,
              name: "postShow",
              id: "postShow()",
              dataTypeName: `void`,
              code: `<a href="#postShow()">postShow</a>()`,
  
              fullCode: `public void <a href="#postShow()">postShow</a>()`,

              des: `Is method ka use, ListPopupWindow ko display karne ke baad specific actions ko perform karne ke liye hota hai.`,
  
              longDes: `
              <p>public void postShow() method ka use, ListPopupWindow ko display karne ke baad specific actions ko perform karne ke liye hota hai. Jab ListPopupWindow ko show() method se display kiya jata hai, to kabhi-kabhi window open hone ke baad specific code ko execute karne ki zaroorat hoti hai, jaise ki animation start karna, UI elements ko update karna, ya kisi specific event ko handle karna. Aise cases mein, postShow() method ka use kiya ja sakta hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "setAdapter",
              id: "setAdapter()",
              dataTypeName: `void`,
              code: `<a href="#setAdapter()">setAdapter</a>(@Nullable ListAdapter adapter)`,
  
              fullCode: `public void <a href="#setAdapter()">setAdapter</a>(@Nullable ListAdapter adapter)`,

              des: `Is method ka use, ListPopupWindow ko ek list view ke sath associate karne aur list view mein dikhane ke liye data provide karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setAdapter(@Nullable ListAdapter adapter) method ka use, ListPopupWindow ko ek list view ke data source ke roop mein ek ListAdapter object ko set karne ke liye hota hai. ListAdapter, data set ko list view mein display karne ke liye responsible hota hai. Aap is method ka use karke ListPopupWindow ko data ke sath bind kar sakte hain, jisse popup window mein list view mein data display ho sake.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable ListAdapter adapter`,
                        des:`<p>Ye parameter ek ListAdapter object leta hai, jo ListPopupWindow ke data source ke roop mein set kiya jata hai. Aap is ListAdapter object mein data set ko bind kar sakte hain, jise ListPopupWindow list view mein display karega.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
  
            {
              dep: false,
              name: "setAnchorView",
              id: "setAnchorView()",
              dataTypeName: `void`,
              code: `<a href="#setAnchorView()">setAnchorView</a>(@Nullable View anchor)`,
  
              fullCode: `public void <a href="#setAnchorView()">setAnchorView</a>(@Nullable View anchor)`,

              des: `Is method ka use, ListPopupWindow ko kisi specific view ke saath connect karne ke liye hota hai, jisse popup window ko wahaan display kiya ja sake.`,
  
              longDes: `
              <p>public void setAnchorView(@Nullable View anchor) method ka use, ListPopupWindow ko ek anchor view ke sath associate karne ke liye hota hai. Anchor view ek reference point hai, jisse popup window display hota hai. Jab aap show() method ko call karte hain, to ListPopupWindow anchor view ke upar position karta hai, jisse anchor view ke just neeche popup window dikhta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable View anchor`,
                        des:`<p>Ye parameter ek View object leta hai, jo ListPopupWindow ko associate karne ke liye use hota hai. Aap kisi bhi view ko anchor view ke roop mein use kar sakte hain, jaise ki Button, TextView, ya koi dusra layout element.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setAnimationStyle",
              id: "setAnimationStyle()",
              dataTypeName: `void`,
              code: `<a href="#setAnimationStyle()">setAnimationStyle</a>(@StyleRes int animationStyle)`,
  
              fullCode: `public void <a href="#setAnimationStyle()">setAnimationStyle</a>(@StyleRes int animationStyle)`,

              des: `Is method ka use, ListPopupWindow ke appearance ko customize karne aur user experience ko enhance karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setAnimationStyle(@StyleRes int animationStyle) method ka use, ListPopupWindow ke appearance ke liye ek animation style set karne ke liye hota hai. Aap is method ka use karke apne ListPopupWindow ke show aur hide karne ke animation ko customize kar sakte hain. Animation style ek XML resource file mein define kiya jata hai, jise aap @StyleRes annotation ke sath pass karte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@StyleRes int animationStyle`,
                        des:`<p>Ye parameter ek integer value leta hai, jo ek valid animation style resource ID ko represent karta hai. Animation style ko XML resource file mein define kiya jata hai, jisme animation ka duration, interpolator, scale, translate, fade, rotate jaise properties set kiye jate hain.</p>`,
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
              code: `<a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable d)`,
  
              fullCode: `public void <a href="#setBackgroundDrawable()">setBackgroundDrawable</a>(@Nullable Drawable d)`,

              des: `Is method ka use, ListPopupWindow ke background ko apne requirements ke anusar set karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setBackgroundDrawable(@Nullable Drawable d) method ka use, ListPopupWindow ke background ko customize karne ke liye hota hai. Aap is method ka use karke apne ListPopupWindow ke background ko kisi bhi Drawable object se replace ya set kar sakte hain. Drawable object, ek image, color, shape, ya gradient ko represent karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Drawable d`,
                        des:`<p>Ye parameter ek Drawable object leta hai, jo ListPopupWindow ke background ko represent karta hai. Aap kisi bhi Drawable object ko pass kar sakte hain, jaise ki BitmapDrawable, ColorDrawable, ya ShapeDrawable.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setContentWidth",
              id: "setContentWidth()",
              dataTypeName: `void`,
              code: `<a href="#setContentWidth()">setContentWidth</a>(int width)`,
  
              fullCode: `public void <a href="#setContentWidth()">setContentWidth</a>(int width)`,

              des: `Is method ka use, ListPopupWindow ke list view ka width apne requirements ke anusar customize karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setContentWidth(int width) method ka use, ListPopupWindow ke list view ka width (content width) set karne ke liye hota hai. ListPopupWindow by default apne content (list items) ke width ko wrap kar leti hai, lekin kabhi-kabhi aap isko apne requirements ke hisab se customize karna chahte hain, jisse list view ka width specific size ka ho.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int width`,
                        des:`<p>Ye parameter ek integer value leta hai, jo ListPopupWindow ke list view ka desired width represent karta hai. Aap is parameter mein kisi bhi positive integer value pass kar sakte hain, jisse list view ka width us value ke hisab se set ho jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "setDropDownGravity",
              id: "setDropDownGravity()",
              dataTypeName: `void`,
              code: `<a href="#setDropDownGravity()">setDropDownGravity</a>(int gravity)`,
  
              fullCode: `public void <a href="#setDropDownGravity()">setDropDownGravity</a>(int gravity)`,

              des: `Is method ka use, ListPopupWindow ke list view ko popup window ke dropdown position ke liye customize karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setDropDownGravity(int gravity) method ka use, ListPopupWindow ke dropdown (list view) ke liye gravity (alignment) ko set karne ke liye hota hai. Gravity ek constant value hota hai, jo ListPopupWindow ke dropdown position ko control karta hai, jisse list view ka position screen ke upar ya niche hone ke liye customize kiya ja sakta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int gravity`,
                        des:`<p>Ye parameter ek integer value leta hai, jo ListPopupWindow ke dropdown ke liye desired gravity (alignment) ko represent karta hai. Aap is parameter mein Gravity.TOP, Gravity.BOTTOM, Gravity.CENTER jaise constants ka use kar sakte hain, jisse dropdown list view ka position screen ke upar, niche ya beech mein set ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setEpicenterBounds",
              id: "setEpicenterBounds()",
              dataTypeName: `void`,
              code: `<a href="#setEpicenterBounds()">setEpicenterBounds</a>(@Nullable Rect bounds)`,
  
              fullCode: `public void <a href="#setEpicenterBounds()">setEpicenterBounds</a>(@Nullable Rect bounds)`,

              des: `ye method ListPopupWindow ke show animation ke epicenter bounds (center point) ko set karne ke liye hota hai. Epicenter bounds, animation ke starting point (center) ko define karte hain, jahan se animation ka effect shuru hota hai.`,
  
              longDes: `
              <p>public void setEpicenterBounds(@Nullable Rect bounds) method ka use, ListPopupWindow ke show animation ke epicenter bounds ko set karne ke liye hota hai. Epicenter bounds, animation ke starting point (center) ko define karte hain, jahan se animation ka effect shuru hota hai. Is method ka use primarily Material Design transitions mein hota hai, jahan shared element transitions ke epicenter bounds ko set karne ke liye upayog hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable Rect bounds`,
                        des:`<p>Ye parameter ek Rect object leta hai, jo epicenter bounds ko represent karta hai. Rect object mein animation ke starting point (center) ko define karne ke liye left, top, right, bottom coordinates ka use hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  


            {
              dep: false,
              name: "setHeight",
              id: "setHeight()",
              dataTypeName: `void`,
              code: `<a href="#setHeight()">setHeight</a>(int height)`,
  
              fullCode: `public void <a href="#setHeight()">setHeight</a>(int height)`,

              des: ` Is method ka use, ListPopupWindow ke height ko apne requirements ke anusar customize karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setHeight(int height) method ka use, ListPopupWindow ke height (length) ko set karne ke liye hota hai. ListPopupWindow by default height wrap content hota hai, lekin kabhi-kabhi aap isko apne requirements ke hisab se customize karna chahte hain, jisse popup window ka height specific size ka ho.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int height`,
                        des:`<p>Ye parameter ek integer value leta hai, jo ListPopupWindow ke desired height (length) ko represent karta hai. Aap is parameter mein kisi bhi positive integer value pass kar sakte hain, jisse ListPopupWindow ka height us value ke hisab se set ho jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "setHorizontalOffset",
              id: "setHorizontalOffset()",
              dataTypeName: `void`,
              code: `<a href="#setHorizontalOffset()">setHorizontalOffset</a>(int offset)`,
  
              fullCode: `public void <a href="#setHorizontalOffset()">setHorizontalOffset</a>(int offset)`,

              des: `Is method ka use, ListPopupWindow ke position ko apne requirements ke anusar customize karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setHorizontalOffset(int offset) method ka use, ListPopupWindow ke horizontal offset (horizontal position) ko set karne ke liye hota hai. Offset, horizontal position ko define karta hai, jahan se ListPopupWindow ko anchor view ke relative position mein display kiya jaye.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int offset`,
                        des:`<p>Ye parameter ek integer value leta hai, jo ListPopupWindow ke desired horizontal offset (horizontal position) ko represent karta hai. Aap is parameter mein kisi bhi integer value pass kar sakte hain, jisse ListPopupWindow ka horizontal position us value ke hisab se set ho jayega.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  

            {
              dep: false,
              name: "setInputMethodMode",
              id: "setInputMethodMode()",
              dataTypeName: `void`,
              code: `<a href="#setInputMethodMode()">setInputMethodMode</a>(int mode)`,
  
              fullCode: `public void <a href="#setInputMethodMode()">setInputMethodMode</a>(int mode)`,

              des: `Is method ka use, ListPopupWindow ke behavior ko keyboard ke sath sync karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setInputMethodMode(int mode) method ka use, ListPopupWindow ke input method mode ko set karne ke liye hota hai. Input method mode, ListPopupWindow ko soft keyboard (input method) ke saath kaise interact karna hai, yah define karta hai. ListPopupWindow ke do input method modes hote hain:</p>

              <ul>

              <li><b>INPUT_METHOD_FROM_FOCUSABLE:</b> Is mode mein, ListPopupWindow input method ko focusable view se interact karne ke liye allow karta hai. Agar aap kisi view par focusable set karte hain, to jab ListPopupWindow show ho raha hota hai, to input method automatically open ho jata hai, aur user input de sakta hai.</li>

              <li><b>INPUT_METHOD_NEEDED:</b> Is mode mein, ListPopupWindow input method ko explicitly required karta hai. Is mode mein, input method ka behavior device configuration aur current input method state par depend karta hai.</li>

              </ul>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int mode`,
                        des:`<p>Ye parameter ek integer value leta hai, jo ListPopupWindow ke desired input method mode ko represent karta hai. Aap is parameter mein INPUT_METHOD_FROM_FOCUSABLE ya INPUT_METHOD_NEEDED constant values ka use kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  

            {
              dep: false,
              name: "setListSelector",
              id: "setListSelector()",
              dataTypeName: `void`,
              code: `<a href="#setListSelector()">setListSelector</a>(Drawable selector)`,
  
              fullCode: `public void <a href="#setListSelector()">setListSelector</a>(Drawable selector)`,

              des: `Is method ka use, ListPopupWindow ke list items ko select karne ya highlight karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setListSelector(Drawable selector) method ka use, ListPopupWindow ke list items ka selector (highlight) ko set karne ke liye hota hai. Selector, list item ko select karne par uska background color ya background drawable ko represent karta hai. Jab user kisi list item par click karta hai, to ListPopupWindow us item ko visually highlight karne ke liye selector ka use karta hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable selector`,
                        des:`<p>Ye parameter ek Drawable object leta hai, jo ListPopupWindow ke list items ka selector (highlight) ko represent karta hai. Aap kisi bhi Drawable object ko pass kar sakte hain, jaise ki ColorDrawable (color highlight) ya BitmapDrawable (image highlight).</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "setModal",
              id: "setModal()",
              dataTypeName: `void`,
              code: `<a href="#setModal()">setModal</a>(boolean modal)`,
  
              fullCode: `public void <a href="#setModal()">setModal</a>(boolean modal)`,

              des: `ye method, ListPopupWindow ke modal behavior ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setModal(boolean modal) method ka use, ListPopupWindow ke modal behavior ko set karne ke liye hota hai. Agar aap setModal(true) method ka use karte hain, to ListPopupWindow show hone par baaki UI elements ke saath interaction ko block kar deta hai, jisse user ListPopupWindow ke bahar kisi aur view par click ya touch karne par ListPopupWindow automatically dismiss ho jata hai.</p>

              <p>Agar aap setModal(false) method ka use karte hain, to ListPopupWindow open rehta hai aur baaki UI elements ke saath interaction allowed rehta hai. Modal behavior ko disable karne se, user ListPopupWindow ke bahar click ya touch karne par ListPopupWindow dismiss nahi hoga.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean modal`,
                        des:`<p>Ye parameter ek boolean value leta hai, jo modal behavior ko represent karta hai. Agar modal parameter true hai, to modal behavior enabled hoga, aur agar false hai, to modal behavior disabled hoga.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "setOnDismissListener",
              id: "setOnDismissListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnDismissListener()">setOnDismissListener</a>(@Nullable PopupWindow.OnDismissListener listener)`,
  
              fullCode: `public void <a href="#setOnDismissListener()">setOnDismissListener</a>(@Nullable PopupWindow.OnDismissListener listener)`,

              des: ` Is method ka use, ListPopupWindow ke dismiss hone par ek listener ko set karne ke liye hota hai, jisse aap dismiss event ko capture karke apne desired actions perform kar sakte hain.`,
  
              longDes: `
              <p>public void setOnDismissListener(@Nullable PopupWindow.OnDismissListener listener) method ka use, ListPopupWindow ke dismiss event ko handle karne ke liye hota hai. ListPopupWindow dismiss hone par, registered listener ko inform kiya jata hai. PopupWindow.OnDismissListener ek interface hai, jisme onDismiss() method define hota hai, jise aap implement kar sakte hain, jisse dismiss event ko capture karke apne desired actions perform kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable PopupWindow.OnDismissListener listener`,
                        des:`<p>Ye parameter ek PopupWindow.OnDismissListener object leta hai, jo ListPopupWindow ke dismiss event ko handle karne ke liye use hoga. Aap null bhi pass kar sakte hain, agar aap dismiss event ko handle nahi karna chahte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


  
            {
              dep: false,
              name: "setOnItemClickListener",
              id: "setOnItemClickListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnItemClickListener()">setOnItemClickListener</a>(
                @Nullable AdapterView.OnItemClickListener clickListener
            )`,
  
              fullCode: `public void <a href="#setOnItemClickListener()">setOnItemClickListener</a>(
                @Nullable AdapterView.OnItemClickListener clickListener
            )`,

              des: `Is method ka use, ListPopupWindow ke list items par click karne par ek listener ko set karne ke liye hota hai, jisse aap list item click events ko capture karke apne desired actions perform kar sakte hain.`,
  
              longDes: `
              <p>public void setOnItemClickListener(@Nullable AdapterView.OnItemClickListener clickListener) method ka use, ListPopupWindow ke list items par click events ko handle karne ke liye hota hai. AdapterView.OnItemClickListener ek interface hai, jisme onItemClick() method define hota hai, jise aap implement kar sakte hain, jisse list item click events ko capture karke apne desired actions perform kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable AdapterView.OnItemClickListener clickListener`,
                        des:`<p>Ye parameter ek AdapterView.OnItemClickListener object leta hai, jo ListPopupWindow ke list items par click events ko handle karne ke liye use hoga. Aap null bhi pass kar sakte hain, agar aap list item click events ko handle nahi karna chahte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setOnItemSelectedListener",
              id: "setOnItemSelectedListener()",
              dataTypeName: `void`,
              code: `<a href="#setOnItemSelectedListener()">setOnItemSelectedListener</a>(
                @Nullable AdapterView.OnItemSelectedListener selectedListener
            )`,
  
              fullCode: `public void <a href="#setOnItemSelectedListener()">setOnItemSelectedListener</a>(
                @Nullable AdapterView.OnItemSelectedListener selectedListener
            )`,

              des: `Is method ka use, ListPopupWindow ke list items ke selection events ko capture karne ke liye ek listener ko set karne ke liye hota hai, jisse aap list item selection events ko handle karke apne desired actions perform kar sakte hain.`,
  
              longDes: `
              <p>public void setOnItemSelectedListener(@Nullable AdapterView.OnItemSelectedListener selectedListener) method ka use, ListPopupWindow ke list items ke selection events ko handle karne ke liye hota hai. AdapterView.OnItemSelectedListener ek interface hai, jisme onItemSelected() method aur onNothingSelected() method define hote hain. Aap onItemSelected() method ko override karke list item selection events ko capture kar sakte hain, jabki onNothingSelected() method ko override karke kisi bhi item ko select na karne par execute karne ke liye use kiya jata hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable AdapterView.OnItemSelectedListener selectedListener`,
                        des:`<p>Ye parameter ek AdapterView.OnItemSelectedListener object leta hai, jo ListPopupWindow ke list items ke selection events ko handle karne ke liye use hoga. Aap null bhi pass kar sakte hain, agar aap list item selection events ko handle nahi karna chahte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "setPromptPosition",
              id: "setPromptPosition()",
              dataTypeName: `void`,
              code: `<a href="#setPromptPosition()">setPromptPosition</a>(int position)`,
  
              fullCode: `public void <a href="#setPromptPosition()">setPromptPosition</a>(int position)`,

              des: `Is method ka use, ListPopupWindow ko anchor view ke relative position par display karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setPromptPosition(int position) method ka use, ListPopupWindow ko anchor view ke relative position par display karne ke liye hota hai. Position ek integer value hota hai, jisse aap ListPopupWindow ko anchor view ke relative position par set kar sakte hain.</p>

              <p>Position ke values kuch is tarah hote hain:</p>

              <ul>
              
              <li><b>POSITION_PROMPT_ABOVE:</b> Is value ka use karte hue, ListPopupWindow anchor view ke upar display hoga.</li>

              <li><b>POSITION_PROMPT_BELOW:</b> Is value ka use karte hue, ListPopupWindow anchor view ke niche display hoga.</li>

              </ul>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int position`,
                        des:`<p>Ye parameter ek integer value leta hai, jo ListPopupWindow ko anchor view ke relative position par set karta hai. Aap is parameter mein POSITION_PROMPT_ABOVE ya POSITION_PROMPT_BELOW constant values ka use kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setPromptView",
              id: "setPromptView()",
              dataTypeName: `void`,
              code: `<a href="#setPromptView()">setPromptView</a>(@Nullable View prompt)`,
  
              fullCode: `public void <a href="#setPromptView()">setPromptView</a>(@Nullable View prompt)`,

              des: `Is method ka use, ListPopupWindow mein ek custom view (jo prompt view ke roop mein dikhaya jayega) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setPromptView(@Nullable View prompt) method ka use, ListPopupWindow mein ek custom view (jo prompt view ke roop mein dikhaya jayega) ko set karne ke liye hota hai. Prompt view, ListPopupWindow ke anchor view ke paas ek custom view ke roop mein display hota hai, jo anchor view ke saath visually associate hota hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable View prompt`,
                        des:`<p>Ye parameter ek View object leta hai, jo ListPopupWindow mein prompt view ke roop mein set kiya jayega. Aap custom view ya pre-defined view (like TextView, ImageView, etc.) ko prompt view ke roop mein set kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

            
  
  
            {
              dep: false,
              name: "setSelection",
              id: "setSelection()",
              dataTypeName: `void`,
              code: `<a href="#setSelection()">setSelection</a>(int position)`,
  
              fullCode: `public void <a href="#setSelection()">setSelection</a>(int position)`,

              des: `Is method ka use, ListPopupWindow ke list items mein se kisi item ko default select karne ke liye hota hai.`,
  
              longDes: `
              <p>public void setSelection(int position) method ka use, ListPopupWindow ke list items mein se kisi item ko default select karne ke liye hota hai. position ek integer value hai, jo selected item ka position represent karta hai. Is method ka use karke aap ListPopupWindow ke list items mein se kisi item ko default select kar sakte hain, jisse popup window show hone par selected item automatically highlight ho jata hai.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int position`,
                        des:`<p>Ye parameter ek integer value hai, jo selected item ka position represent karta hai. ListPopupWindow ke list items mein se kisi item ko select karne ke liye, aap is parameter mein item ka position pass kar sakte hain. Position 0 se shuru hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setSoftInputMode",
              id: "setSoftInputMode()",
              dataTypeName: `void`,
              code: `<a href="#setSoftInputMode()">setSoftInputMode</a>(int mode)`,
  
              fullCode: `public void <a href="#setSoftInputMode()">setSoftInputMode</a>(int mode)`,

              des: `Is method ka use, soft input mode ko set karne ke liye hota hai. Soft input mode, virtual keyboard (soft keyboard) ke behavior ko control karne mein help karta hai, jab kisi ListPopupWindow object ko display kiya jata hai.`,
  
              longDes: `
              <p>setSoftInputMode(int mode) method ka use, ListPopupWindow object ko display karte waqt soft input mode ko set karne ke liye hota hai. Soft input mode, virtual keyboard ka behavior control karta hai, jab ListPopupWindow ko display kiya jata hai. Is method ke through aap ye specify kar sakte hain ki virtual keyboard kaise behave karega jab dropdown menu (ListPopupWindow) open hoga.</p>

              <p>Soft input mode ko control karne ke liye aap niche diye gaye constants ka use kar sakte hain:</p>
              <ul>

              <li><b>WindowManager.LayoutParams.SOFT_INPUT_STATE_UNCHANGED:</b> Agar aap is constant ko use karte hain, toh virtual keyboard ki state unchanged rahegi, yani ki agar keyboard pehle se khula hua tha, toh waisa hi rahega. Agar khula nahi tha, toh khula nahi hoga.</li>

              <li><b>WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN:</b> Is constant ko use karke virtual keyboard ko hide kar sakte hain, jab ListPopupWindow open ho.</li>

              <li><b>WindowManager.LayoutParams.SOFT_INPUT_STATE_VISIBLE:</b> Is constant ko use karke virtual keyboard ko open kar sakte hain jab ListPopupWindow open ho.</li>
              
              <li><b>WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_VISIBLE:</b> Is constant ko use karke virtual keyboard ko hamesha open kar sakte hain, chahe ListPopupWindow open ho ya na ho.</li>

              </ul>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int mode`,
                        des:`<p>setSoftInputMode() method ek integer parameter mode ko leta hai, jo soft input mode ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
  
            {
              dep: false,
              name: "setVerticalOffset",
              id: "setVerticalOffset()",
              dataTypeName: `void`,
              code: `<a href="#setVerticalOffset()">setVerticalOffset</a>(int offset)`,
  
              fullCode: `public void <a href="#setVerticalOffset()">setVerticalOffset</a>(int offset)`,

              des: `Is method ka istemal karke aap dropdown menu ko anchor view ke relative position par vertically adjust kar sakte hain, jab kisi ListPopupWindow object ko display karte hain.`,
  
              longDes: `
              <p>setVerticalOffset(int offset) method ka use, ListPopupWindow object ko vertical direction mein offset karne ke liye hota hai. Offset, view ko upar ya neeche move karne ke liye use kiya jata hai, taki dropdown menu ko desired position par display kiya ja sake.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int offset`,
                        des:`<p>setVerticalOffset() method ek integer parameter offset ko leta hai, jo vertical direction mein offset ko represent karta hai. Offset value pixels mein hoti hai aur isse view ko upar (negative offset value) ya neeche (positive offset value) move kiya ja sakta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
  
            {
              dep: false,
              name: "setWidth",
              id: "setWidth()",
              dataTypeName: `void`,
              code: `<a href="#setWidth()">setWidth</a>(int width)`,
  
              fullCode: `public void <a href="#setWidth()">setWidth</a>(int width)`,

              des: `Is method ka istemal karke aap dropdown menu (ListPopupWindow) ke width ko customize kar sakte hain, jab kisi ListPopupWindow object ko display karte hain.`,
  
              longDes: `
              <p>setWidth(int width) method ka use, ListPopupWindow object ko horizontal direction mein width set karne ke liye hota hai. Isse aap dropdown menu ki width ko desired size mein set kar sakte hain.</p>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int width`,
                        des:`<p>Is parameter mein aap dropdown menu ki width ko kitne pixels mein set karna chahte hain, wo value pass karna hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setWindowLayoutType",
              id: "setWindowLayoutType()",
              dataTypeName: `void`,
              code: `<a href="#setWindowLayoutType()">setWindowLayoutType</a>(int layoutType)`,
  
              fullCode: `public void <a href="#setWindowLayoutType()">setWindowLayoutType</a>(int layoutType)`,

              des: `Is method ka istemal karke aap dropdown menu (ListPopupWindow) ke window layout type ko customize kar sakte hain, jab kisi ListPopupWindow object ko display karte hain.`,
  
              longDes: `
              <p>setWindowLayoutType(int layoutType) method ka use, ListPopupWindow object ke window layout type ko set karne ke liye hota hai. Window layout type, popup window ka behavior aur positioning control karta hai.</p>

              <p>Is parameter mein aap kuch pre-defined constants ka use kar sakte hain:</p>

              <ul>

              <li><b>WindowManager.LayoutParams.TYPE_APPLICATION:</b> Is constant ka use karke, ListPopupWindow object ko application window type ke hisab se position kiya jata hai. Ye window type, default behavior hota hai.</li>

              <li><b>WindowManager.LayoutParams.TYPE_APPLICATION_ATTACHED_DIALOG:</b> Is constant ka use karke, ListPopupWindow object ko application attached dialog window type ke hisab se position kiya jata hai.</li>

              <li><b>WindowManager.LayoutParams.TYPE_SYSTEM_ALERT:</b> Is constant ka use karke, ListPopupWindow object ko system alert window type ke hisab se position kiya jata hai. Is type ke windows, other windows ke above display hote hain.</li>

              </ul>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int layoutType`,
                        des:`<p>setWindowLayoutType() method ek integer parameter layoutType ko leta hai, jo window layout type ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "show",
              id: "show()",
              dataTypeName: `void`,
              code: `<a href="#show()">show</a>()`,
  
              fullCode: `public void <a href="#show()">show</a>()`,

              des: `Is method ka istemal karke aap ListPopupWindow object ko anchor view ke pass position kar sakte hain aur dropdown menu ko screen par show kar sakte hain.`,
  
              longDes: `
              <p>show() method, ListPopupWindow object ko display karne ke liye use hota hai. Is method ka istemal karke aap dropdown menu ya list of items ko anchor view ke pass position kar sakte hain, jisse user us view par click karta hai, wahan par dropdown menu dikhai dega.</p>

              `,

              parameter: [],
            },

  
  

          ],
        },
  
        
      
     
  

      },
    });
  };
  