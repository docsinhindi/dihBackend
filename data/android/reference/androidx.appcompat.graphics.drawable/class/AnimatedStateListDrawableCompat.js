module.exports.AnimatedStateListDrawableCompat = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "AnimatedStateListDrawableCompat",
      hCode: `public class <a href="#AnimatedStateListDrawableCompat">AnimatedStateListDrawableCompat</a>  extends StateListDrawableCompat`,
  
      des: 
        `
        <p>AnimatedStateListDrawableCompat class ka use, state-based animations ko handle karne ke liye kiya jata hai. Ye class state transitions aur animations ko define aur manage karne me madad karta hai, jisse UI elements ke appearance me smooth aur seamless transitions hote hai.</p>
        
  
        <p>AnimatedStateListDrawableCompat class, state-based animations ko support karta hai aur Drawable resources ke based par specific states ko map karta hai. Iska use karke developers, different states (jaise ki pressed, selected, focused, etc.) ke liye corresponding animations aur drawables ko define kar sakte hai.</p>
  
       
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
              name: `AnimatedStateListDrawableCompat`,
              id: "AnimatedStateListDrawableCompat()",
              code: `AnimatedStateListDrawableCompat()`,
              fullCode: `public AnimatedStateListDrawableCompat()`,

              des: `Is constructor ka use, AnimatedStateListDrawableCompat object banane ke liye kiya jata hai.`,

              longDes: `<p>Is constructor ka use, AnimatedStateListDrawableCompat object banane ke liye kiya jata hai.</p>

              <p>AnimatedStateListDrawableCompat class ke methods ka use karke, developers state transitions, animations, aur drawables ko define kar sakte hai. Is class ke through, developers Android Lollipop version se pahle ke devices par bhi state-based animations ka benefit le sakte hai, backward compatibility support ke sath.</p>
              `,
              parameter: [],
            },



          ],
        },
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "addState",
              id: "addState()",
              dataTypeName: `void`,
              code: `<a href="#addState()">addState</a>(@NonNull int[] stateSet, @NonNull Drawable drawable, int id)`,
  
              fullCode: `public void <a href="#addState()">addState</a>(@NonNull int[] stateSet, @NonNull Drawable drawable, int id)`,

              des: `Ye method, animation state ke basis par drawable ko AnimationStateListDrawableCompat mein add karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, animation state ke basis par drawable ko AnimationStateListDrawableCompat mein add karne ke liye use hota hai.</p>

              <p>addState() method ka use karke hum drawable object ko animation state ke sath AnimationStateListDrawableCompat mein add kar sakte hain. AnimationStateListDrawableCompat multiple states ke basis par drawable ko represent karta hai aur unko animate karta hai.</p>
  
              <p>addState() method, specified stateSet, drawable, aur id parameters se AnimationStateListDrawableCompat mein drawable object ko add karta hai. stateSet parameter specified state values ko represent karta hai, drawable parameter specified state ke liye display kiya jayega, aur id parameter state ke liye unique identifier hai.</p>
              `,

             

  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull int[] stateSet`,
                        des:`<p>int array, jisme drawable ko apply karne ke liye state values hote hain.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Drawable drawable`,
                        des:`<p>Drawable object, jo specified state ke liye display kiya jayega.</p>`,
                      },
                      {
                        dataTypeName: `int id`,
                        des:`<p>int value, jo state ke liye unique identifier hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "addTransition",
              id: "addTransition()",
              dataTypeName: `void <T extends Drawable & Animatable>`,
              code: `<a href="#addTransition()">addTransition</a>(
    int fromId,
    int toId,
    @NonNull T transition,
    boolean reversible
)`,
  
              fullCode: `public void <T extends Drawable & Animatable> <a href="#addTransition()">addTransition</a>(
    int fromId,
    int toId,
    @NonNull T transition,
    boolean reversible
)`,

              des: `Ye method, drawable ke transition animation ko AnimationStateListDrawableCompat mein add karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, drawable ke transition animation ko AnimationStateListDrawableCompat mein add karne ke liye use hota hai.</p>

              <p>addTransition() method ka use karke hum drawable ke transition animation ko AnimationStateListDrawableCompat mein add kar sakte hain. Transition animation, ek state se dusre state mein smooth transition ko represent karta hai.</p>
  
              <p>addTransition() method, specified fromId, toId, transition, aur reversible parameters se AnimationStateListDrawableCompat mein transition animation ko add karta hai. fromId parameter source state identifier ko represent karta hai, toId parameter destination state identifier ko represent karta hai, transition parameter transition animation ko represent karta hai, aur reversible parameter batata hai ki transition animation reversible hai ya nahi.</p>
              `,

             
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int fromId`,
                        des:`<p> int value, transition animation ka source state identifier.</p>`,
                      },
                      {
                        dataTypeName: `int toId`,
                        des:`<p>int value, transition animation ka destination state identifier.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull T transition`,
                        des:`<p>Drawable object, jo transition animation represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `boolean reversible`,
                        des:`<p>boolean value, jo batata hai ki transition animation reversible hai ya nahi.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "create",
              id: "create()",
              dataTypeName: `static @Nullable AnimatedStateListDrawableCompat`,
              code: `<a href="#create()">create</a>(
                @NonNull Context context,
                @DrawableRes int resId,
                @Nullable Resources.Theme theme
            )`,
  
              fullCode: `public static @Nullable AnimatedStateListDrawableCompat <a href="#create()">create</a>(
                @NonNull Context context,
                @DrawableRes int resId,
                @Nullable Resources.Theme theme
            )`,

              des: `Ye method, AnimationStateListDrawableCompat object ko create karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, AnimationStateListDrawableCompat object ko create karne ke liye use hota hai.</p>

              <p>create() method ka use karke hum AnimationStateListDrawableCompat object ko create kar sakte hain. Is method ke through hum specified resId parameter se XML drawable resource ko inflate karke AnimationStateListDrawableCompat object ko bana sakte hain.</p>
  
              <p>create() method, specified resId parameter se XML drawable resource ko inflate karke AnimationStateListDrawableCompat object ko create karta hai. Is method ka use karke hum AnimationStateListDrawableCompat object ko retrieve kar sakte hain.</p>
              `,

             
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisme resource ID ko resolve karna hai.</p>`,
                      },
                      {
                        dataTypeName: `@DrawableRes int resId`,
                        des:`<p>Drawable resource ID, jise inflate karke AnimationStateListDrawableCompat object ko create karna hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Resources.Theme theme`,
                        des:`<p>Theme object, jiska use kiya jaye to inflate the drawable resource. Agar null hai, to default theme use hoga.</p>`,
                      },
                    ],
                  },
              ],
            },

  


            {
              dep: false,
              name: "createFromXmlInner",
              id: "createFromXmlInner()",
              dataTypeName: `static @NonNull AnimatedStateListDrawableCompat`,
              code: `<a href="#createFromXmlInner()">createFromXmlInner</a>(
    @NonNull Context context,
    @NonNull Resources resources,
    @NonNull XmlPullParser parser,
    @NonNull AttributeSet attrs,
    @Nullable Resources.Theme theme
)`,
  
              fullCode: `public static @NonNull AnimatedStateListDrawableCompat <a href="#createFromXmlInner()">createFromXmlInner</a>(
    @NonNull Context context,
    @NonNull Resources resources,
    @NonNull XmlPullParser parser,
    @NonNull AttributeSet attrs,
    @Nullable Resources.Theme theme
)`,

              des: `Ye method, XML file se AnimationStateListDrawableCompat object ko create karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, XML file se AnimationStateListDrawableCompat object ko create karne ke liye use hota hai.</p>

              <p>createFromXmlInner() method ka use karke hum XML file se AnimationStateListDrawableCompat object ko create kar sakte hain. Is method ke through hum specified parser parameter ke dwara XML file ko parse karke AnimationStateListDrawableCompat object ko bana sakte hain.</p>
  
              <p>createFromXmlInner() method, specified parser, attrs, aur theme parameters se XML file ko parse karke AnimationStateListDrawableCompat object ko create karta hai. Is method ka use karke hum AnimationStateListDrawableCompat object ko retrieve kar sakte hain.</p>
              `,

             
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisme resource ID ko resolve karna hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Resources resources`,
                        des:`<p>Resources object, jisme XML file se resources retrieve kiye jayenge.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull XmlPullParser parser`,
                        des:`<p>XmlPullParser object, jiska use XML file ko parse karne ke liye kiya jayega.</p>`,
                      },
                      {
                        dataTypeName: ` @NonNull AttributeSet attrs`,
                        des:`<p>AttributeSet object, jisme XML attributes ko represent kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Resources.Theme theme`,
                        des:`<p>Theme object, jiska use kiya jaye to inflate the drawable resource. Agar null hai, to default theme use hoga.</p>`,
                      },
                    ],
                  },
              ],
            },

  


            {
              dep: false,
              name: "inflate",
              id: "inflate()",
              dataTypeName: `void`,
              code: `<a href="#inflate()">inflate</a>(
                @NonNull Context context,
                @NonNull Resources resources,
                @NonNull XmlPullParser parser,
                @NonNull AttributeSet attrs,
                @Nullable Resources.Theme theme
            )`,
  
              fullCode: `public void <a href="#inflate()">inflate</a>(
                @NonNull Context context,
                @NonNull Resources resources,
                @NonNull XmlPullParser parser,
                @NonNull AttributeSet attrs,
                @Nullable Resources.Theme theme
            )`,

              des: `Ye method, XML file se AnimationStateListDrawableCompat object ko inflate karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, XML file se AnimationStateListDrawableCompat object ko inflate karne ke liye use hota hai.</p>

              <p>inflate() method ka use karke hum XML file se AnimationStateListDrawableCompat object ko inflate kar sakte hain. Is method ke through hum specified parser parameter ke dwara XML file ko parse karke AnimationStateListDrawableCompat object ko bana sakte hain.</p>
  
              <p>inflate() method, specified parser, attrs, aur theme parameters se XML file ko parse karke AnimationStateListDrawableCompat object ko inflate karta hai. Is method ka use karke hum AnimationStateListDrawableCompat object ko retrieve kar sakte hain.</p>
              `,

             
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Context object, jisme resource ID ko resolve karna hai.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull Resources resources`,
                        des:`<p>Resources object, jisme XML file se resources retrieve kiye jayenge.</p>`,
                      },
                      {
                        dataTypeName: `@NonNull XmlPullParser parser`,
                        des:`<p>XmlPullParser object, jiska use XML file ko parse karne ke liye kiya jayega.</p>`,
                      },
                      {
                        dataTypeName: ` @NonNull AttributeSet attrs`,
                        des:`<p>AttributeSet object, jisme XML attributes ko represent kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable Resources.Theme theme`,
                        des:`<p>Theme object, jiska use kiya jaye to inflate the drawable resource. Agar null hai, to default theme use hoga.</p>`,
                      },
                    ],
                  },
              ],
            },

  


            {
              dep: false,
              name: "isStateful",
              id: "isStateful()",
              dataTypeName: `boolean`,
              code: `<a href="#isStateful()">isStateful</a>()`,
  
              fullCode: `public boolean <a href="#isStateful()">isStateful</a>()`,

              des: `Ye method, AnimationStateListDrawableCompat object ke liye stateful behavior ka presence ko check karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, AnimationStateListDrawableCompat object ke liye stateful behavior ka presence ko check karne ke liye use hota hai.</p>

              <p>isStateful() method ka use karke hum AnimationStateListDrawableCompat object ke liye stateful behavior ka presence ko check kar sakte hain. Stateful behavior, drawable ke alag-alag states ko represent karta hai, jaise normal state, pressed state, selected state, etc. Agar isStateful() method true return karta hai, to ye indicate karta hai ki AnimationStateListDrawableCompat object stateful hai aur alag-alag states ke basis par customize kiya ja sakta hai.</p>
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

              des: `Ye method, AnimationStateListDrawableCompat object ke current state par jump karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, AnimationStateListDrawableCompat object ke current state par jump karne ke liye use hota hai.</p>

              <p>jumpToCurrentState() method ka use karke hum AnimationStateListDrawableCompat object ke current state par jump kar sakte hain. Jab hum is method ko invoke karte hain, to agar koi animation chal rahi hai, usko immediately stop karke drawable object ke current state par jump kar jata hai. Isse animation ka current frame displayed state ban jata hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "mutate",
              id: "mutate()",
              dataTypeName: `@NonNull Drawable`,
              code: `<a href="#mutate()">mutate</a>()`,
  
              fullCode: `public @NonNull Drawable <a href="#mutate()">mutate</a>()`,

              des: `Ye method, AnimationStateListDrawableCompat object ko mutable (modifiable) banane ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, AnimationStateListDrawableCompat object ko mutable (modifiable) banane ke liye use hota hai.</p>

              <p>mutate() method ka use karke hum AnimationStateListDrawableCompat object ko mutable banate hain. Mutable object, original object ke copies create karne ke liye use hota hai, jisse hum unko independently modify kar sakte hain. Jab hum mutate() method ko invoke karte hain, to ek mutable copy of the drawable object create hota hai aur usko modify karne ke liye hume mil jata hai.</p>

              <p>mutate() method ka return type Drawable hota hai, jo mutable copy of the drawable object ko represent karta hai. Is mutable copy ko modify karne ke liye hum usko customizations, like changing its properties or states, apply kar sakte hain without affecting the original object or other mutable copies.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "setTint",
              id: "setTint()",
              dataTypeName: `abstract void`,
              code: `<a href="#setTint()">setTint</a>(@ColorInt int tint)`,
  
              fullCode: `public abstract void <a href="#setTint()">setTint</a>(@ColorInt int tint)`,

              des: `Ye method, AnimationStateListDrawableCompat object ke tint color ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, AnimationStateListDrawableCompat object ke tint color ko set karne ke liye use hota hai.</p>

              <p>setTint() method ka use karke hum AnimationStateListDrawableCompat object ke tint color ko specify kar sakte hain. Tint color, drawable object ke existing colors ko modify karne ke liye use hota hai.</p>

              <p>setTint() method, specified tint parameter se AnimationStateListDrawableCompat object ke tint color ko set karta hai. Ye method drawable object ke sabhi states ke liye tint color apply karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@ColorInt int tint`,
                        des:`<p>int value, jise tint color ke roop mein specify kiya jata hai. Ye parameter @ColorInt annotation ke sath mark kiya jata hai, indicating that it should be a valid color integer.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setTintList",
              id: "setTintList()",
              dataTypeName: `abstract void`,
              code: `<a href="#setTintList()">setTintList</a>(ColorStateList tint)`,
  
              fullCode: `public abstract void <a href="#setTintList()">setTintList</a>(ColorStateList tint)`,

              des: `Ye method, AnimationStateListDrawableCompat object ke tint color ke liye ColorStateList ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, AnimationStateListDrawableCompat object ke tint color ke liye ColorStateList ko set karne ke liye use hota hai.</p>

              <p>setTintList() method ka use karke hum AnimationStateListDrawableCompat object ke tint color ke liye ColorStateList ko specify kar sakte hain. ColorStateList, drawable object ke alag-alag states ke liye tint colors ko represent karta hai.</p>

              <p>setTintList() method, specified tint parameter se AnimationStateListDrawableCompat object ke tint color ke liye ColorStateList ko set karta hai. Ye method drawable object ke alag-alag states ke liye tint colors apply karta hai, jaise normal state, pressed state, selected state, etc.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ColorStateList tint`,
                        des:`<p>ColorStateList object, jise tint colors ke roop mein specify kiya jata hai. Ye parameter ColorStateList data type ke sath mark kiya jata hai</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setTintMode",
              id: "setTintMode()",
              dataTypeName: `abstract void`,
              code: `<a href="#setTintMode()">setTintMode</a>(PorterDuff.Mode tintMode)`,
  
              fullCode: `public abstract void <a href="#setTintMode()">setTintMode</a>(PorterDuff.Mode tintMode)`,

              des: `Ye method, AnimationStateListDrawableCompat object ke tint color ke liye PorterDuff mode ko set karne ke liye use hota hai.`,
  
              longDes: `
              <p>Ye method, AnimationStateListDrawableCompat object ke tint color ke liye PorterDuff mode ko set karne ke liye use hota hai.</p>

              <p>setTintMode() method ka use karke hum AnimationStateListDrawableCompat object ke tint color ke liye PorterDuff mode ko specify kar sakte hain. PorterDuff mode, tint color aur existing drawable color ke blending rules ko define karta hai.</p>

              <p>setTintMode() method, specified tintMode parameter se AnimationStateListDrawableCompat object ke tint color ke liye PorterDuff mode ko set karta hai. Ye method tint color aur existing drawable color ke blending mode ko apply karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `PorterDuff.Mode tintMode`,
                        des:`<p>PorterDuff.Mode object, jise tint color ke blending mode ke roop mein specify kiya jata hai.</p>`,
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

              des: `Ye method, AnimationStateListDrawableCompat object ke visibility ko set karne aur animation ko restart karne ke liye use hota hai..`,
  
              longDes: `
              <p>Ye method, AnimationStateListDrawableCompat object ke visibility ko set karne aur animation ko restart karne ke liye use hota hai.</p>

              <p>setVisible() method ka use karke hum AnimationStateListDrawableCompat object ke visibility ko set kar sakte hain. Agar visible parameter true hai, to drawable object visible ho jata hai, aur agar visible parameter false hai, to drawable object invisible ho jata hai.</p>

              <p>setVisible() method, specified visible parameter ke basis par AnimationStateListDrawableCompat object ke visibility ko set karta hai. Agar restart parameter true hai, to animation ko restart kar diya jata hai, jisse drawable object ke current state ka animation chalu ho jata hai. Agar restart parameter false hai, to animation ko maintain kiya jata hai, jisse drawable object apne current state ko maintain karta hai.</p>

              <p>Method ka return type boolean hota hai. Agar visibility state mein koi change hua hai, to true return kiya jata hai, aur agar koi change nahi hua hai, to false return kiya jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean visible`,
                        des:`<p>boolean value, jise drawable object ko visible (true) ya invisible (false) karne ke roop mein specify kiya jata hai.</p>`,
                      },
                      {
                        dataTypeName: `boolean restart`,
                        des:`<p>boolean value, jise animation ko restart (true) ya current state mein maintain (false) karne ke roop mein specify kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },
//
  

          ],
        },
  
        
      
        protectedMethod: {
          success: true,
          name: "Protected methods",
  
          method: [
            {
              dep: false,
              name: "onStateChange",
              id: "onStateChange()",
              dataTypeName: `boolean`,
              code: `<a href="#onStateChange()">onStateChange</a>(@NonNull int[] stateSet)`,
  
              fullCode: `protected boolean <a href="#onStateChange()">onStateChange</a>(@NonNull int[] stateSet)`,

              des: `Ye method, AnimationStateListDrawableCompat object ke state change event par invoke hota hai aur stateSet array ke basis par appropriate state ke liye animation ko chalata hai.`,
  
              longDes: `
              <p>onStateChange() method, drawable object ke state change event par invoke hota hai. Ye method AnimationStateListDrawableCompat object ke stateSet array ko receive karta hai, jisme current state ka information hota hai. Method ki return value boolean hoti hai, indicating whether the state change has resulted in a change in the drawable's appearance.</p>

              <p>onStateChange() method, specified stateSet parameter ke basis par AnimationStateListDrawableCompat object ke appropriate state ke liye animation ko chalata hai. Method animation ke chalne se pahle ek state change listener ko bhi invoke karta hai.</p>
                  `,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `@NonNull int[] stateSet`,
                      des:`<p>int array, jisme current state ka information hota hai. Ye parameter @NonNull annotation ke sath mark kiya jata hai, indicating that it should not be null.</p>`,
                    },
                  ],
                },
              ],
            },

          ]
      }
  
     
  

      },
    });
  };
  