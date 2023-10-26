module.exports.LinearLayoutCompat = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "LinearLayoutCompat",
      hCode: `public class <a href="#LinearLayoutCompat">LinearLayoutCompat</a>  extends ViewGroup`,
  
      des: 
        `
        <p>Ye class LinearLayout class ka ek subclass hai, jo AppCompat styling aur compatibility features ko support karta hai.</p>

        <p>LinearLayoutCompat class ka use linear layout UI element ko implement karne ke liye kiya jata hai. Linear layout, child views ko ek line mein linearly arrange karne ke liye use hota hai, ya to horizontally (row-wise) ya vertically (column-wise).</p>
        
        <p>LinearLayoutCompat class, standard LinearLayout class ke saath AppCompat library ka suvidha pradaan karta hai. Ye backward compatibility features provide karta hai, jisse aap apne linear layout ko purane Android version (jaise pre-Lollipop) mein bhi consistent appearance aur behavior de sakte hai.</p>
  
       
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
              name: "HORIZONTAL",
              id: "HORIZONTAL",
              dataTypeName: `static final int`,
              code: `<a href="#HORIZONTAL">HORIZONTAL</a> = 0`,
              fullCode: `public static final int <a href="#HORIZONTAL">HORIZONTAL</a> = 0`,

              des:`Is constant ka use, LinearLayoutCompat view ko horizontal orientation mein arrange karne ke liye hota hai.`,

              longDes: `
              <p>public static final int HORIZONTAL = 0 constant, LinearLayoutCompat view ko horizontal orientation mein arrange karne ke liye use hota hai. Yani ki, agar aap LinearLayoutCompat view mein child views ko ek saath horizontal line par arrange karna chahte hain, toh aap LinearLayoutCompat.HORIZONTAL constant ka use karke LinearLayoutCompat view ki orientation ko set kar sakte hain.</p>

              <p>LinearLayoutCompat view ka orientation set karne ke liye, aap setOrientation() method ka use kar sakte hain aur LinearLayoutCompat.HORIZONTAL constant ko parameter ke roop mein pass kar sakte hain.</p>`
              ,
              parameter: [],
            },



            {
              dep: false,
              name: "SHOW_DIVIDER_BEGINNING",
              id: "SHOW_DIVIDER_BEGINNING",
              dataTypeName: `static final int`,
              code: `<a href="#SHOW_DIVIDER_BEGINNING">SHOW_DIVIDER_BEGINNING</a> = 1`,
              fullCode: `public static final int <a href="#SHOW_DIVIDER_BEGINNING">SHOW_DIVIDER_BEGINNING</a> = 1`,

              des:`Is constant ka use, LinearLayoutCompat view mein child views ke beech mein divider (separation line) ko show karne ke liye hota hai, aur ye divider view ke beginning (shuruaat) mein display kiya jata hai.`,

              longDes: `
              <p>public static final int SHOW_DIVIDER_BEGINNING = 1 constant, LinearLayoutCompat view mein child views ke beech mein divider (separation line) ko show karne ke liye use hota hai. Is constant ka use, setShowDividers() method ke parameter ke roop mein kiya jata hai. Jab aap SHOW_DIVIDER_BEGINNING constant ko setShowDividers() method ke parameter ke roop mein pass karte hain, toh LinearLayoutCompat view mein child views ke beginning (shuruaat) ke pehle ek divider line show kiya jata hai.</p>

              <p>Aap setShowDividers() method ka use karke SHOW_DIVIDER_BEGINNING constant ko parameter ke roop mein pass kar sakte hain.</p>`
              ,
              parameter: [],
            },
          


            {
              dep: false,
              name: "SHOW_DIVIDER_END",
              id: "SHOW_DIVIDER_END",
              dataTypeName: `static final int`,
              code: `<a href="#SHOW_DIVIDER_END">SHOW_DIVIDER_END</a> = 4`,
              fullCode: `public static final int <a href="#SHOW_DIVIDER_END">SHOW_DIVIDER_END</a> = 4`,

              des:`Is constant ka use, LinearLayoutCompat view mein child views ke beech mein divider (separation line) ko show karne ke liye hota hai, aur ye divider view ke end (ant) mein display kiya jata hai.`,

              longDes: `
              <p>public static final int SHOW_DIVIDER_END = 4 constant, LinearLayoutCompat view mein child views ke beech mein divider (separation line) ko show karne ke liye use hota hai. Is constant ka use, setShowDividers() method ke parameter ke roop mein kiya jata hai. Jab aap SHOW_DIVIDER_END constant ko setShowDividers() method ke parameter ke roop mein pass karte hain, toh LinearLayoutCompat view mein child views ke end (ant) ke baad ek divider line show kiya jata hai.</p>

              <p>Aap setShowDividers() method ka use karke SHOW_DIVIDER_END constant ko parameter ke roop mein pass kar sakte hain.</p>`
              ,
              parameter: [],
            },
          


            {
              dep: false,
              name: "SHOW_DIVIDER_MIDDLE",
              id: "SHOW_DIVIDER_MIDDLE",
              dataTypeName: `static final int`,
              code: `<a href="#SHOW_DIVIDER_MIDDLE">SHOW_DIVIDER_MIDDLE</a> = 2`,
              fullCode: `public static final int <a href="#SHOW_DIVIDER_MIDDLE">SHOW_DIVIDER_MIDDLE</a> = 2`,

              des:`Is constant ka use, LinearLayoutCompat view mein child views ke beech mein divider (separation line) ko show karne ke liye hota hai, aur ye divider view ke middle mein display kiya jata hai.`,

              longDes: `
              <p>public static final int SHOW_DIVIDER_MIDDLE = 2 constant, LinearLayoutCompat view mein child views ke beech mein divider (separation line) ko show karne ke liye use hota hai. Is constant ka use, setShowDividers() method ke parameter ke roop mein kiya jata hai. Jab aap SHOW_DIVIDER_MIDDLE constant ko setShowDividers() method ke parameter ke roop mein pass karte hain, toh LinearLayoutCompat view mein child views ke beech mein ek divider line show kiya jata hai, jo view ke middle mein aata hai.</p>

              <p>Aap setShowDividers() method ka use karke SHOW_DIVIDER_MIDDLE constant ko parameter ke roop mein pass kar sakte hain.</p>`
              ,
              parameter: [],
            },
          

            {
              dep: false,
              name: "SHOW_DIVIDER_NONE",
              id: "SHOW_DIVIDER_NONE",
              dataTypeName: `static final int`,
              code: `<a href="#SHOW_DIVIDER_NONE">SHOW_DIVIDER_NONE</a> = 0`,
              fullCode: `public static final int <a href="#SHOW_DIVIDER_NONE">SHOW_DIVIDER_NONE</a> = 0`,

              des:`Is constant ka use, LinearLayoutCompat view mein child views ke beech mein koi divider (separation line) show karne ke liye nahi hota hai. Yani ki, SHOW_DIVIDER_NONE constant ka value 0 hota hai, isse indicate kiya jata hai ki LinearLayoutCompat view mein koi bhi divider display nahi hoga.`,

              longDes: `
              <p>public static final int SHOW_DIVIDER_NONE = 0 constant, LinearLayoutCompat view mein child views ke beech mein koi bhi divider (separation line) show karne ke liye use nahi hota hai. Is constant ka use, setShowDividers() method ke parameter ke roop mein kiya jata hai. Jab aap SHOW_DIVIDER_NONE constant ko setShowDividers() method ke parameter ke roop mein pass karte hain, toh LinearLayoutCompat view mein koi bhi divider line show nahi hota hai.</p>

              <p>Aap setShowDividers() method ka use karke SHOW_DIVIDER_NONE constant ko parameter ke roop mein pass kar sakte hain.</p>`
              ,
              parameter: [],
            },
          

            {
              dep: false,
              name: "VERTICAL",
              id: "VERTICAL",
              dataTypeName: `static final int`,
              code: `<a href="#VERTICAL">VERTICAL</a> = 1`,
              fullCode: `public static final int <a href="#VERTICAL">VERTICAL</a> = 1`,

              des:`Is constant ka use, LinearLayoutCompat view ko vertical orientation mein arrange karne ke liye hota hai.`,

              longDes: `
              <p>public static final int VERTICAL = 1 constant, LinearLayoutCompat view ko vertical orientation mein arrange karne ke liye use hota hai. Yani ki, agar aap LinearLayoutCompat view mein child views ko ek saath vertical line par arrange karna chahte hain, toh aap LinearLayoutCompat.VERTICAL constant ka use karke LinearLayoutCompat view ki orientation ko set kar sakte hain.</p>

              <p>LinearLayoutCompat view ka orientation set karne ke liye, aap setOrientation() method ka use kar sakte hain aur LinearLayoutCompat.VERTICAL constant ko parameter ke roop mein pass kar sakte hain.</p>`
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
              name: `LinearLayoutCompat`,
              id: "LinearLayoutCompat(Context)",
              code: `<a href="#LinearLayoutCompat(Context)">LinearLayoutCompat</a>(@NonNull Context context)`,
              fullCode: `public <a href="#LinearLayoutCompat(Context)">LinearLayoutCompat</a>(@NonNull Context context)`,

              des: `Is constructor ka use, LinearLayoutCompat class se ek naya LinearLayoutCompat view object create karne ke liye hota hai.`,

              longDes: `
              <p>Is constructor, LinearLayoutCompat class se ek naya LinearLayoutCompat view object create karne ke liye use hota hai. Is constructor mein aapko Context object dena hota hai, jisse LinearLayoutCompat view ko kis activity ya application context mein display karna hai, wo specify hota hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter Context type ka hota hai, jisse aap layout ko inflate (convert) karke XML file se Java object mein badal sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },
//


            {
              dep: false,
              name: `LinearLayoutCompat`,
              id: "LinearLayoutCompat(Context,AttributeSet)",
              code: `<a href="#LinearLayoutCompat(Context,AttributeSet)">LinearLayoutCompat</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public <a href="#LinearLayoutCompat(Context,AttributeSet)">LinearLayoutCompat</a>(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Is constructor ka use, LinearLayoutCompat class se ek naya LinearLayoutCompat view object create karne ke liye hota hai.`,

              longDes: `
              <p>LinearLayoutCompat class ka ye constructor, ek LinearLayoutCompat object create karne ke liye hota hai, jise aap XML layout file se inflate kar sakte hain aur usme define kiye gaye attributes ko access kar sakte hain.</p>

              <p>Android me layout designing generally XML files mein kiya jata hai. Jab aap XML layout file se kisi layout ko inflate karte hain, to us layout ke attributes AttributeSet object mein store ho jate hain. Is constructor ke attrs parameter se aap in attributes ko obtain kar sakte hain, aur unka use karke layout ko customize kar sakte hain.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter Context type ka hota hai, jisse aap layout ko inflate (convert) karke XML file se Java object mein badal sakte hain</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter AttributeSet type ka hota hai, jo XML layout file mein define kiye gaye attributes ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: `LinearLayoutCompat`,
              id: "LinearLayoutCompat(Context,AttributeSet,int)",
              code: `<a href="#LinearLayoutCompat(Context,AttributeSet,int)">LinearLayoutCompat</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public <a href="#LinearLayoutCompat(Context,AttributeSet,int)">LinearLayoutCompat</a>(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Is constructor ka use, LinearLayoutCompat class se ek naya LinearLayoutCompat view object create karne ke liye hota hai.`,

              longDes: `
              <p>LinearLayoutCompat class ka ye constructor, ek LinearLayoutCompat object create karne ke liye hota hai, jise aap XML layout file se inflate kar sakte hain aur usme define kiye gaye attributes ko access kar sakte hain. Is constructor ke attrs parameter se aap in attributes ko obtain kar sakte hain, aur unka use karke layout ko customize kar sakte hain. defStyleAttr parameter se aap layout ke default style attribute resource ID ko specify kar sakte hain.</p>

              <p>Android me layout designing generally XML files mein kiya jata hai. Jab aap XML layout file se kisi layout ko inflate karte hain, to us layout ke attributes AttributeSet object mein store ho jate hain. Is constructor ke attrs parameter se aap in attributes ko obtain kar sakte hain, aur unka use karke layout ko customize kar sakte hain. Agar aap defStyleAttr parameter ko specify karte hain, to layout ke default style attribute resource ID use hoga, jo XML file mein define kiya gaya hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter Context type ka hota hai, jisse aap layout ko inflate (convert) karke XML file se Java object mein badal sakte hain.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter AttributeSet type ka hota hai, jo XML layout file mein define kiye gaye attributes ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye parameter int type ka hota hai, jo layout XML file mein define kiye gaye default style attribute resource ID ko represent karta hai.</p>`,
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
              name: "generateLayoutParams",
              id: "generateLayoutParams()",
              dataTypeName: `LinearLayoutCompat.LayoutParams`,
              code: `<a href="#generateLayoutParams()">generateLayoutParams</a>(AttributeSet attrs)`,
  
              fullCode: `public LinearLayoutCompat.LayoutParams <a href="#generateLayoutParams()">generateLayoutParams</a>(AttributeSet attrs)`,

              des: `Is method ka use, LinearLayoutCompat ke child views ke liye LayoutParams object generate karne ke liye hota hai.`,
  
              longDes: `
              <p>generateLayoutParams(AttributeSet attrs) method, LinearLayoutCompat ke child views ke liye LayoutParams object generate karne ke liye hota hai. Jab aap XML layout file mein LinearLayoutCompat ka use karte hain aur child views ke liye layout_width aur layout_height ke saath additional attributes specify karte hain, to ye method un attributes ko parse karke unke basis par LayoutParams object create karta hai.</p>
  
              <p>Aap is method ko directly call nahi karte hain. Jab aap XML layout file mein LinearLayoutCompat ke child views declare karte hain, to Android system automatically is method ko internally call karke appropriate LayoutParams object generate karta hai, jise phir layout mein apply kiya jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AttributeSet attrs`,
                        des:`<p>Ye parameter, XML layout file mein declare kiye gaye attributes ko represent karta hai. Isse method parse karta hai, taki LayoutParams object generate kiya ja sake.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "getBaseline",
              id: "getBaseline()",
              dataTypeName: `int`,
              code: `<a href="#getBaseline()">getBaseline</a>()`,
  
              fullCode: `public int <a href="#getBaseline()">getBaseline</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke child views mein se kisi ek view ka baseline position (yani text-based views jaise TextView mein text ka bottom line) retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getBaseline() method, LinearLayoutCompat view group ke child views mein se kisi ek view ka baseline position retrieve karne ke liye hota hai. Baseline position text-based views (jaise TextView) mein text ka bottom line hota hai, jo text ke characters ko align karta hai.</p>
  
              <p>LinearLayoutCompat view group ke underlaying implementation, child views ke getBaseline() method ko call karke unka baseline position calculate karta hai. Agar LinearLayoutCompat ke child views mein se koi bhi view baseline support nahi karta hai (e.g., non-text views), to getBaseline() method -1 return karega, indicating ki baseline position nahi mili.</p>

              <p>getBaseline() method, int type ka hota hai, yani ki is method se ek integer value return hoti hai, jo baseline position ko represent karti hai. Baseline position usually view ki top edge se measure hoti hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getBaselineAlignedChildIndex",
              id: "getBaselineAlignedChildIndex()",
              dataTypeName: `int`,
              code: `<a href="#getBaselineAlignedChildIndex()">getBaselineAlignedChildIndex</a>()`,
  
              fullCode: `@Attribute(value = "android:baselineAlignedChildIndex")</br>public int <a href="#getBaselineAlignedChildIndex()">getBaselineAlignedChildIndex</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke child views mein se baseline align karne ke liye specify kiya gaya child view ka index retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getBaselineAlignedChildIndex() method, LinearLayoutCompat view group ke child views mein se baseline align karne ke liye specify kiya gaya child view ka index retrieve karne ke liye hota hai. Baseline alignment ka matlab hota hai ki LinearLayoutCompat view group ke child views ke text-based views (jaise TextView) ka baseline position ek doosre ke saath align ho.</p>
  
              <p>Agar aap android:baselineAlignedChildIndex attribute ko XML layout file mein set karte hain, to LinearLayoutCompat view group un child views mein se us view ka baseline position align karega, jiska index specified kiya gaya hai. Isse aap specific child view ko baki views ke saath baseline align kar sakte hain.</p>

              <p>getBaselineAlignedChildIndex() method, int type ka hota hai, yani ki is method se ek integer value return hoti hai, jo baseline align karne ke liye specify kiya gaya child view ka index represent karti hai. Indexing 0 se shuru hoti hai, yaani pehla child view ka index 0 hota hai, dusra ka 1, aur aage aise hi.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getDividerDrawable",
              id: "getDividerDrawable()",
              dataTypeName: `Drawable`,
              code: `<a href="#getDividerDrawable()">getDividerDrawable</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:divider")</br>public Drawable <a href="#getDividerDrawable()">getDividerDrawable</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group mein specified divider drawable resource ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getDividerDrawable() method, LinearLayoutCompat view group mein specify kiye gaye divider drawable resource ko retrieve karne ke liye hota hai. Aap androidx.appcompat:divider attribute ka use karke XML layout file mein divider drawable resource specify kar sakte hain.</p>
  
              <p>Divider drawables ka use, LinearLayoutCompat ke child views ke beech mein space create karne ke liye hota hai. Divider, child views ke spacing ko visually distinguish karne ke liye use kiya jata hai. Aap chahe to shape drawable ya color drawable ka use karke apne pasandeeda divider design create kar sakte hain.</p>

              <p>getDividerDrawable() method, Drawable type ka hota hai, yani ki is method se ek Drawable object return hota hai, jo divider drawable resource ko represent karta hai.</p>
              `,

              parameter: [],
            },

  

            
            {
              dep: false,
              name: "getDividerPadding",
              id: "getDividerPadding()",
              dataTypeName: `int`,
              code: `<a href="#getDividerPadding()">getDividerPadding</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:dividerPadding")</br>public int <a href="#getDividerPadding()">getDividerPadding</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke child views ke beech mein dikhaye gaye divider ke liye specify ki gayi padding (spacing) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getDividerPadding() method, LinearLayoutCompat view group mein specify ki gayi dividerPadding attribute se divider ke liye specify ki gayi padding (spacing) ko retrieve karne ke liye hota hai. Aap androidx.appcompat:dividerPadding attribute ka use karke XML layout file mein divider ke liye spacing specify kar sakte hain.</p>
  
              <p>Divider padding ka use, LinearLayoutCompat ke child views ke beech mein dikhaye gaye divider ke aas-paas space create karne ke liye hota hai. Isse aap divider ko child views se visually alag rakh sakte hain aur layout ka design enhance kar sakte hain.</p>

              <p>getDividerPadding() method, int type ka hota hai, yani ki is method se ek integer value return hoti hai, jo divider ke liye specify ki gayi padding (spacing) ko represent karti hai. Padding usually pixels mein measure kiya jata hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getGravity",
              id: "getGravity()",
              dataTypeName: `@GravityInt int`,
              code: `<a href="#getGravity()">getGravity</a>()`,
  
              fullCode: `@Attribute(value = "android:gravity")</br>public @GravityInt int <a href="#getGravity()">getGravity</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye specify kiye gaye gravity attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getGravity() method, LinearLayoutCompat view group ke liye specify kiye gaye gravity attribute ko retrieve karne ke liye hota hai. Aap android:gravity attribute ka use karke XML layout file mein LinearLayoutCompat ke liye gravity specify kar sakte hain.</p>
  
              <p>Gravity attribute, LinearLayoutCompat ke child views ko view group ke andar kis tarah se align kiya jayega wo specify karta hai. Is attribute mein different values use kiye ja sakte hain, jaise ki center, start, end, top, bottom, center_vertical, center_horizontal, fill, etc. Is attribute ko use karke aap child views ko view group ke center mein align kar sakte hain ya fir unhe vertical ya horizontal direction mein align kar sakte hain.</p>

              <p>getGravity() method, @GravityInt int type ka hota hai. Yani ki is method se ek integer value return hoti hai, jo gravity attribute ko represent karta hai. @GravityInt annotation, gravity values ko distinguish karne ke liye use kiya jata hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getOrientation",
              id: "getOrientation()",
              dataTypeName: `int`,
              code: `<a href="#getOrientation()">getOrientation</a>()`,
  
              fullCode: `@Attribute(value = "android:orientation", intMapping = [@Attribute.IntMap(name = "horizontal", value = 0), @Attribute.IntMap(name = "vertical", value = 1)])</br>public int <a href="#getOrientation()">getOrientation</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke orientation attribute ko retrieve karne ke liye hota hai, jisse layout ke child views ko horizontal ya vertical direction mein arrange karne mein madad milti hai.`,
  
              longDes: `
              <p>getOrientation() method, LinearLayoutCompat view group ke liye specify kiye gaye orientation attribute ko retrieve karne ke liye hota hai. Aap android:orientation attribute ka use karke XML layout file mein LinearLayoutCompat ke liye orientation specify kar sakte hain.</p>
  
              <p>Orientation attribute, LinearLayoutCompat ke child views ko view group ke andar kis direction mein arrange kiya jayega wo specify karta hai. Is attribute mein usually two values use kiye jate hain - horizontal (jo child views ko horizontal direction mein arrange karega) aur vertical (jo child views ko vertical direction mein arrange karega).</p>

              <p>getOrientation() method, int type ka hota hai. Yani ki is method se ek integer value return hoti hai, jo orientation attribute ko represent karta hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getShowDividers",
              id: "getShowDividers()",
              dataTypeName: `int`,
              code: `<a href="#getShowDividers()">getShowDividers</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:showDividers", intMapping = [@Attribute.IntMap(name = "none", value = 0), @Attribute.IntMap(name = "beginning", value = 1, mask = 1), @Attribute.IntMap(name = "middle", value = 2, mask = 2), @Attribute.IntMap(name = "end", value = 4, mask = 4)])</br>public int <a href="#getShowDividers()">getShowDividers</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye specify kiye gaye showDividers attribute ko retrieve karne ke liye hota hai, jisse layout mein child views ke beech mein dividers (separators) dikhane ya chhupane mein madad milti hai.`,
  
              longDes: `
              <p>getShowDividers() method, LinearLayoutCompat view group ke liye specify kiye gaye showDividers attribute ko retrieve karne ke liye hota hai. Aap androidx.appcompat:showDividers attribute ka use karke XML layout file mein LinearLayoutCompat ke liye dividers (separators) dikhane ya chhupane ka option specify kar sakte hain.</p>
  
              <p>@Attribute.IntMap annotation, attribute values ko int values se map karne ke liye use hota hai. Yani ki none value ko 0, beginning value ko 1, middle value ko 2, aur end value ko 4 se map kiya jata hai. mask attribute specify karta hai ki kis combination mein dividers dikhane hai.</p>

              <p>getShowDividers() method, int type ka hota hai. Yani ki is method se ek integer value return hoti hai, jo showDividers attribute ko represent karta hai. Ye integer value binary representation mein hoti hai, jisme har bit divider ke show/hide status ko represent karta hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getWeightSum",
              id: "getWeightSum()",
              dataTypeName: `float`,
              code: `<a href="#getWeightSum()">getWeightSum</a>()`,
  
              fullCode: `@Attribute(value = "android:weightSum")</br>public float <a href="#getWeightSum()">getWeightSum</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye specify ki gayi weightSum attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getWeightSum() method, LinearLayoutCompat view group ke liye specify ki gayi weightSum attribute ko retrieve karne ke liye hota hai. Aap android:weightSum attribute ka use karke XML layout file mein LinearLayoutCompat ke liye weightSum specify kar sakte hain.</p>
  
              <p>weightSum attribute ka use, LinearLayoutCompat ke child views ke liye weight distribution specify karne ke liye hota hai. Child views ke liye layout_weight attribute ka use karke aap unhe linear layout ke andar ek specific proportion mein distribute kar sakte hain. Ye proportion weightSum attribute ke value ke basis pe calculate hota hai.</p>

              <p>getWeightSum() method, float type ka hota hai. Yani ki is method se ek floating-point value return hoti hai, jo weightSum attribute ko represent karta hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "isBaselineAligned",
              id: "isBaselineAligned()",
              dataTypeName: `boolean`,
              code: `<a href="#isBaselineAligned()">isBaselineAligned</a>()`,
  
              fullCode: `@Attribute(value = "android:baselineAligned")</br>public boolean <a href="#isBaselineAligned()">isBaselineAligned</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye specify ki gayi baselineAligned attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>isBaselineAligned() method, LinearLayoutCompat view group ke liye specify ki gayi baselineAligned attribute ko retrieve karne ke liye hota hai. Aap android:baselineAligned attribute ka use karke XML layout file mein LinearLayoutCompat ke liye baseline alignment ka option specify kar sakte hain.</p>
  
              <p>baselineAligned attribute ka use, LinearLayoutCompat ke child views ko unke baselines ko align karne ke liye hota hai. Baseline alignment, text-based views (jaise TextView) ke liye important hota hai, taki text ke characters ek doosre ke saath visually consistent dikhein.</p>

              <p>Agar aap android:baselineAligned attribute ko true set karte hain, to LinearLayoutCompat view group, uske child views ke baselines ko align karega. Isse child views ke text-based content ka alignment behtar hota hai, jisse layout ka overall appearance improve hota hai.</p>

              <p>Agar aap android:baselineAligned attribute ko false set karte hain, to LinearLayoutCompat view group, baselines ko align nahi karega, aur child views ko layout ke unaligned position pe arrange karega. Isse text-based content ke alignment me inconsistencies ho sakte hain.</p>
              `,

              parameter: [],
            },


  
  
            {
              dep: false,
              name: "isMeasureWithLargestChildEnabled",
              id: "isMeasureWithLargestChildEnabled()",
              dataTypeName: `boolean`,
              code: `<a href="#isMeasureWithLargestChildEnabled()">isMeasureWithLargestChildEnabled</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:measureWithLargestChild")</br>public boolean <a href="#isMeasureWithLargestChildEnabled()">isMeasureWithLargestChildEnabled</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye specify ki gayi measureWithLargestChild attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>isMeasureWithLargestChildEnabled() method, LinearLayoutCompat view group ke liye specify ki gayi measureWithLargestChild attribute ko retrieve karne ke liye hota hai. Aap androidx.appcompat:measureWithLargestChild attribute ka use karke XML layout file mein LinearLayoutCompat ke liye measureWithLargestChild ka option specify kar sakte hain.</p>
  
              <p>measureWithLargestChild attribute ka use, LinearLayoutCompat ke child views ke size ko dynamically adjust karne ke liye hota hai. Agar aap androidx.appcompat:measureWithLargestChild attribute ko true set karte hain, to LinearLayoutCompat view group, apne child views ke sizes ko measure karte waqt, unme se sabse bade child view ke size ko consider karega. Phir dusre child views ko us bade child view ke size ke saath match karega. Isse, layout ke child views ka size dynamically adjust ho jata hai, aur sabhi child views ek jaise size ke ho jate hain jisse content ka placement achha dikhta hai.</p>
              
              <p>Agar aap androidx.appcompat:measureWithLargestChild attribute ko false set karte hain, to LinearLayoutCompat view group, apne child views ke sizes ko normally measure karega, unhe individually consider karega, aur unke original sizes ko maintain karega.</p>
              `,

              parameter: [],
            },

  

  
  
            {
              dep: false,
              name: "onInitializeAccessibilityEvent",
              id: "onInitializeAccessibilityEvent()",
              dataTypeName: `void`,
              code: `<a href="#onInitializeAccessibilityEvent()">onInitializeAccessibilityEvent</a>(AccessibilityEvent event)`,
  
              fullCode: `public void <a href="#onInitializeAccessibilityEvent()">onInitializeAccessibilityEvent</a>(AccessibilityEvent event)`,

              des: `Is method ka use, LinearLayoutCompat view group ko accessibility services ke liye initialize karne ke liye hota hai.`,
  
              longDes: `
              <p>onInitializeAccessibilityEvent(AccessibilityEvent event) method, LinearLayoutCompat view group ko accessibility services ke liye initialize karne ke liye hota hai. Accessibility services visually impaired users aur users with disabilities ko assist karne ke liye use hote hain. In services ko use karke, users layout ke elements ko explore kar sakte hain, unke functions ko samajh sakte hain, aur unke sath interact kar sakte hain.</p>
  
              <p>AccessibilityEvent object, accessibility services ko layout ke events (jaise ki view group ya view ke focus change, click, text change, etc.) ke bare mein information deta hai. onInitializeAccessibilityEvent(AccessibilityEvent event) method mein, aap LinearLayoutCompat view group ke liye specific accessibility information ko AccessibilityEvent object mein set kar sakte hain, jisse wo information accessibility services ke liye available ho.</p>
              
              <p>Is method ka use karke aap LinearLayoutCompat view group ko accessible bana sakte hain, taki visually impaired users aur users with disabilities bhi layout ko sahi se use kar sakein.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AccessibilityEvent event`,
                        des:`<p>onInitializeAccessibilityEvent(AccessibilityEvent event) method void type ka hota hai, yani ki is method se koi specific value return nahi hoti hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  

  
  
            {
              dep: false,
              name: "onInitializeAccessibilityNodeInfo",
              id: "onInitializeAccessibilityNodeInfo()",
              dataTypeName: `void`,
              code: `<a href="#onInitializeAccessibilityNodeInfo()">onInitializeAccessibilityNodeInfo</a>(AccessibilityNodeInfo info)`,
  
              fullCode: `public void <a href="#onInitializeAccessibilityNodeInfo()">onInitializeAccessibilityNodeInfo</a>(AccessibilityNodeInfo info)`,

              des: `Is method ka use, LinearLayoutCompat view group ko accessibility services ke liye AccessibilityNodeInfo object ke sath initialize karne ke liye hota hai.`,
  
              longDes: `
              <p>onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo info) method, LinearLayoutCompat view group ko accessibility services ke liye AccessibilityNodeInfo object ke sath initialize karne ke liye hota hai. Accessibility services visually impaired users aur users with disabilities ko assist karne ke liye use hote hain. In services ko use karke, users layout ke elements ko explore kar sakte hain, unke functions ko samajh sakte hain, aur unke sath interact kar sakte hain.</p>
  
              <p>AccessibilityNodeInfo object, LinearLayoutCompat view group ko represent karta hai accessibility tree mein. Is object mein view group ke properties, actions, aur accessibility information hoti hai. onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo info) method mein, aap LinearLayoutCompat view group ke liye specific accessibility information ko AccessibilityNodeInfo object mein set kar sakte hain, jisse wo information accessibility services ke liye available ho.</p>
              
              <p>Is method ka use karke aap LinearLayoutCompat view group ko accessible bana sakte hain, taki visually impaired users aur users with disabilities bhi layout ko sahi se use kar sakein.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AccessibilityNodeInfo info`,
                        des:`<p>Ye parameter AccessibilityNodeInfo type ka hota hai, jo LinearLayoutCompat view group ko represent karta hai accessibility tree mein.</p>`,
                      },
                    ],
                  },
              ],
            },


  
  
            {
              dep: false,
              name: "setBaselineAligned",
              id: "setBaselineAligned()",
              dataTypeName: `void`,
              code: `<a href="#setBaselineAligned()">setBaselineAligned</a>(boolean baselineAligned)`,
  
              fullCode: `public void <a href="#setBaselineAligned()">setBaselineAligned</a>(boolean baselineAligned)`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye baseline alignment ka option set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBaselineAligned(boolean baselineAligned) method, LinearLayoutCompat view group ke liye baseline alignment ka option set karne ke liye hota hai. Baseline alignment, text-based views (jaise TextView) ke liye important hota hai, taki text ke characters ek doosre ke saath visually consistent dikhein.</p>
  
              <p>Agar aap setBaselineAligned(true) method ko call karte hain, to LinearLayoutCompat view group, apne child views ke baselines ko align karega. Isse child views ke text-based content ka alignment behtar hota hai, jisse layout ka overall appearance improve hota hai.</p>
              
              <p>Agar aap setBaselineAligned(false) method ko call karte hain, to LinearLayoutCompat view group, baselines ko align nahi karega, aur child views ko layout ke unaligned position pe arrange karega. Isse text-based content ke alignment me inconsistencies ho sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean baselineAligned`,
                        des:`<p>Ye parameter boolean type ka hota hai. true pass karne se LinearLayoutCompat view group ke child views ke baselines align honge, aur false pass karne se baselines align nahi honge.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
  
            {
              dep: false,
              name: "setBaselineAlignedChildIndex",
              id: "setBaselineAlignedChildIndex()",
              dataTypeName: `void`,
              code: `<a href="#setBaselineAlignedChildIndex()">setBaselineAlignedChildIndex</a>(int i)`,
  
              fullCode: `public void <a href="#setBaselineAlignedChildIndex()">setBaselineAlignedChildIndex</a>(int i)`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye baseline alignment ke liye child view ka index set karne ke liye hota hai.`,
  
              longDes: `
              <p>setBaselineAlignedChildIndex(int i) method, LinearLayoutCompat view group ke liye baseline alignment ke liye child view ka index set karne ke liye hota hai. Baseline alignment, text-based views (jaise TextView) ke liye important hota hai, taki text ke characters ek doosre ke saath visually consistent dikhein.</p>
  
              <p>Is method ka use karke aap specify kar sakte hain ki kaun sa child view LinearLayoutCompat view group mein baseline alignment ke liye use hoga. Baseline alignment ke liye generally aap text-based views ko choose karte hain, jisse text characters ka alignment sahi se ho sake.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int i`,
                        des:`<p>Ye parameter integer type ka hota hai, jo LinearLayoutCompat view group ke child views ki index ko represent karta hai. Index 0 se shuru hota hai, jisse LinearLayoutCompat ke pehle child view ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setDividerDrawable",
              id: "setDividerDrawable()",
              dataTypeName: `void`,
              code: `<a href="#setDividerDrawable()">setDividerDrawable</a>(Drawable divider)`,
  
              fullCode: `public void <a href="#setDividerDrawable()">setDividerDrawable</a>(Drawable divider)`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye dividers (bich ki rekhaayein) ke liye custom drawable set karne ke liye hota hai.`,
  
              longDes: `
              <p>setDividerDrawable(Drawable divider) method, LinearLayoutCompat view group ke liye dividers (bich ki rekhaayein) ke liye custom drawable set karne ke liye hota hai. Default behavior mein, LinearLayoutCompat view group, child views ke beech mein ek simple divider line automatically display karta hai. Lekin, aap setDividerDrawable() method ka use karke, apne custom drawable ko specify kar sakte hain jise dividers ke taur par display karna chahte hain.</p>
  
              <p>Custom drawable ek Drawable object hota hai, jisme aap kisi bhi shape, color, gradient, image ya anya graphical representation ko define kar sakte hain. Aap ek shape drawable (jaise lines, rectangles, etc.), vector drawable, ya nine-patch images ka use kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable divider`,
                        des:`<p>Ye parameter Drawable type ka hota hai, jo LinearLayoutCompat view group ke liye dividers ke custom drawable ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setDividerPadding",
              id: "setDividerPadding()",
              dataTypeName: `void`,
              code: `<a href="#setDividerPadding()">setDividerPadding</a>(int padding)`,
  
              fullCode: `public void <a href="#setDividerPadding()">setDividerPadding</a>(int padding)`,

              des: `Is method ka use, LinearLayoutCompat view group ke dividers ke beech mein padding (chhota) set karne ke liye hota hai.`,
  
              longDes: `
              <p>setDividerPadding(int padding) method, LinearLayoutCompat view group ke dividers ke beech mein padding (chhota) set karne ke liye hota hai. Default behavior mein, LinearLayoutCompat view group, dividers ke beech mein koi padding nahi hota hai. Lekin aap setDividerPadding() method ka use karke, dividers ke around padding set kar sakte hain, jisse dividers ke dono taraf chhota space create ho.</p>
  
              <p>Padding ek integer value hota hai, jo pixel units mein hota hai. Aap positive value specify karke dividers ke around padding create kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int padding`,
                        des:`<p>Ye parameter integer type ka hota hai, jo LinearLayoutCompat view group ke dividers ke beech mein padding ko represent karta hai. Padding pixel units mein specify karna hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "setGravity",
              id: "setGravity()",
              dataTypeName: `void`,
              code: `<a href="#setGravity()">setGravity</a>(@GravityInt int gravity)`,
  
              fullCode: `public void <a href="#setGravity()">setGravity</a>(@GravityInt int gravity)`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye gravity (alignment) option set karne ke liye hota hai.`,
  
              longDes: `
              <p>setGravity(@GravityInt int gravity) method, LinearLayoutCompat view group ke liye gravity (alignment) option set karne ke liye hota hai. Is method ki madad se aap specify kar sakte hain ki LinearLayoutCompat ke child views kis direction mein align honge ya kaise arrange honge. Gravity option, child views ko arrange karne ke liye horizontal aur vertical dono directions mein specify kiya ja sakta hai.</p>
  
              <p>Gravity option ko set karne ke liye aap @GravityInt annotation ke sath integer value pass karte hain. Isme aap horizontal aur vertical gravity ko combine kar sakte hain, jisse child views ka alignment ek single value mein define ho jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@GravityInt int gravity`,
                        des:`<p>Ye parameter integer type ka hota hai, jo LinearLayoutCompat view group ke gravity option ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
  
            {
              dep: false,
              name: "setHorizontalGravity",
              id: "setHorizontalGravity()",
              dataTypeName: `void`,
              code: `<a href="#setHorizontalGravity()">setHorizontalGravity</a>(int horizontalGravity)`,
  
              fullCode: `public void <a href="#setHorizontalGravity()">setHorizontalGravity</a>(int horizontalGravity)`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye horizontal gravity (horizontal alignment) option set karne ke liye hota hai.`,
  
              longDes: `
              <p>setHorizontalGravity(int horizontalGravity) method, LinearLayoutCompat view group ke liye horizontal gravity (horizontal alignment) option set karne ke liye hota hai. Is method ki madad se aap specify kar sakte hain ki LinearLayoutCompat ke child views horizontal direction mein kis tarah align honge ya kaise arrange honge.</p>
  
              <p>Horizontal gravity option ko set karne ke liye aap integer value pass karte hain, jo Gravity class ke constants se liya jata hai. Kuch common horizontal gravity constants hain:</p>
              <ul>
              <li><b>Gravity.LEFT:</b> Child views ko container ke left mein align karta hai (default behavior).</li>
              <li><b>Gravity.RIGHT:</b> Child views ko container ke right mein align karta hai.</li>
              <li><b>Gravity.CENTER_HORIZONTAL:</b> Child views ko container ke horizontal center mein align karta hai.</li>
              </ul>

              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int horizontalGravity`,
                        des:`<p>Ye parameter integer type ka hota hai, jo LinearLayoutCompat view group ke horizontal gravity option ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "setMeasureWithLargestChildEnabled",
              id: "setMeasureWithLargestChildEnabled()",
              dataTypeName: `void`,
              code: `<a href="#setMeasureWithLargestChildEnabled()">setMeasureWithLargestChildEnabled</a>(boolean enabled)`,
  
              fullCode: `public void <a href="#setMeasureWithLargestChildEnabled()">setMeasureWithLargestChildEnabled</a>(boolean enabled)`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye measure option ko set karne ke liye hota hai, jisse largest child view ke size ko measure karne me madad milti hai.`,
  
              longDes: `
              <p>setMeasureWithLargestChildEnabled(boolean enabled) method, LinearLayoutCompat view group ke liye measure option ko set karne ke liye hota hai. Jab aap is method ko true value ke saath call karte hain, to LinearLayoutCompat view group ka measure behavior change ho jata hai.</p>
  
              <p>By default, LinearLayoutCompat view group, child views ko unke intrinsic (default) size ke according measure karta hai. Lekin, agar aap setMeasureWithLargestChildEnabled(true) method ko call karte hain, to LinearLayoutCompat view group, apne largest child view ke size ko measure karke baaki child views ko usse match karne ki koshish karega. Isse, sabhi child views ka size largest child view ke size ke according adjust ho jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>Ye parameter boolean type ka hota hai. true pass karne se setMeasureWithLargestChildEnabled option enable ho jata hai, aur false pass karne se disable ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },

            {
              dep: false,
              name: "setOrientation",
              id: "setOrientation()",
              dataTypeName: `void`,
              code: `<a href="#setOrientation()">setOrientation</a>(int orientation)`,
  
              fullCode: `public void <a href="#setOrientation()">setOrientation</a>(int orientation)`,

              des: `Is method ka use, LinearLayoutCompat view group ke orientation ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setOrientation(int orientation) method, LinearLayoutCompat view group ke orientation ko set karne ke liye hota hai. Orientation determine karta hai ki LinearLayoutCompat view group, apne child views ko kis direction mein arrange karega: horizontal ya vertical.</p>
  
              <p>Aap LinearLayoutCompat.HORIZONTAL ya LinearLayoutCompat.VERTICAL constant ka use karke orientation ko set kar sakte hain. Default behavior mein, LinearLayoutCompat view group ka orientation LinearLayoutCompat.HORIZONTAL hota hai, jisse child views horizontal direction mein arrange hote hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int orientation`,
                        des:`<p>Ye parameter integer type ka hota hai, jo LinearLayoutCompat view group ke orientation ko represent karta hai. Aap LinearLayoutCompat.HORIZONTAL ya LinearLayoutCompat.VERTICAL constant ka value pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: "setShowDividers",
              id: "setShowDividers()",
              dataTypeName: `void`,
              code: `<a href="#setShowDividers()">setShowDividers</a>(int showDividers)`,
  
              fullCode: `public void <a href="#setShowDividers()">setShowDividers</a>(int showDividers)`,

              des: `Is method ka use, LinearLayoutCompat view group ke dividers (bich ki rekhaayein) ko show karne aur customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setShowDividers(int showDividers) method, LinearLayoutCompat view group ke dividers (bich ki rekhaayein) ko show karne aur customize karne ke liye hota hai. Dividers, LinearLayoutCompat view group mein child views ke beech mein dikhai deti hain aur unhe visually separate karti hain. Aap is method ki madad se specify kar sakte hain ki dividers kis tarike se dikhayi den aur kaise customize kiye jayen.</p>
  
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int showDividers`,
                        des:`<p>Ye parameter integer type ka hota hai, jo LinearLayoutCompat view group ke dividers ko represent karta hai. Aap is parameter mein kuch predefined constants ka use kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "setVerticalGravity",
              id: "setVerticalGravity()",
              dataTypeName: `void`,
              code: `<a href="#setVerticalGravity()">setVerticalGravity</a>(int verticalGravity)`,
  
              fullCode: `public void <a href="#setVerticalGravity()">setVerticalGravity</a>(int verticalGravity)`,

              des: `Is method ka use, LinearLayoutCompat view group ke liye vertical gravity (vertical alignment) option set karne ke liye hota hai.`,
  
              longDes: `
              <p>setVerticalGravity(int verticalGravity) method, LinearLayoutCompat view group ke liye vertical gravity (vertical alignment) option set karne ke liye hota hai. Is method ki madad se aap specify kar sakte hain ki LinearLayoutCompat ke child views vertically kis tarah align honge ya kaise arrange honge.</p>

              <p>Vertical gravity option ko set karne ke liye aap integer value pass karte hain, jo Gravity class ke constants se liya jata hai. Kuch common vertical gravity constants hain:</p>
              <ul>
              <li><b>Gravity.TOP:</b> Child views ko container ke top mein align karta hai (default behavi</li>
              <li><b>Gravity.BOTTOM:</b> Child views ko container ke bottom mein align karta hai.</li>
              <li><b>Gravity.CENTER_VERTICAL:</b> Child views ko container ke vertical center mein align karta hai.</li>
              </ul>
  
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int verticalGravity`,
                        des:`<p>Ye parameter integer type ka hota hai, jo LinearLayoutCompat view group ke vertical gravity option ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


  
            {
              dep: false,
              name: "setWeightSum",
              id: "setWeightSum()",
              dataTypeName: `void`,
              code: `<a href="#setWeightSum()">setWeightSum</a>(float weightSum)`,
  
              fullCode: `public void <a href="#setWeightSum()">setWeightSum</a>(float weightSum)`,

              des: `Is method ka use, LinearLayoutCompat view group mein weight sum (total weight) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setWeightSum(float weightSum) method, LinearLayoutCompat view group mein weight sum (total weight) ko set karne ke liye hota hai. Weight sum ek value hoti hai, jo LinearLayoutCompat ke child views ke liye weight distribution mein use hoti hai. Child views ke liye specify kiye gaye weight values, weight sum ke hisab se normalize hote hain.</p>

              <p>Jab aap setWeightSum(float weightSum) method ko call karte hain, to LinearLayoutCompat view group ke child views ke weight values normalize karne ke liye use hone wali weight sum set ho jati hai.</p>

              <p>Weight sum ka use particularly useful hota hai jab aap LinearLayoutCompat mein weight attribute ka use karte hain, jisse child views ko ek specific ratio mein distribute kiya jata hai. Weight sum, weight attribute ke values ko normalize karne mein madad karta hai.</p>
              
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `float weightSum`,
                        des:`<p>Ye parameter float type ka hota hai, jo LinearLayoutCompat view group ke weight sum ko represent karta hai. Weight sum ki value 1 se jyada ya 0 se kam ho sakti hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
  
            {
              dep: false,
              name: "shouldDelayChildPressedState",
              id: "shouldDelayChildPressedState()",
              dataTypeName: `boolean`,
              code: `<a href="#shouldDelayChildPressedState()">shouldDelayChildPressedState</a>()`,
  
              fullCode: `public boolean <a href="#shouldDelayChildPressedState()">shouldDelayChildPressedState</a>()`,

              des: `Is method ka use, LinearLayoutCompat view group ke child views ki pressed state (jab user view ko press karta hai) ko delay karne ke liye hota hai.`,
  
              longDes: `
              <p>shouldDelayChildPressedState() method, LinearLayoutCompat view group ke child views ki pressed state (jab user view ko press karta hai) ko delay karne ke liye hota hai. Jab aap kisi view ko press karte hain, to view ka pressed state activate hota hai, jisse view ka appearance temporarily change ho jata hai (jaise ki background color ya image change ho jata hai).</p>

              <p>By default, LinearLayoutCompat view group apne child views ki pressed state ko delay nahi karta hai, yani ki jab user view ko press karta hai, to child views ka pressed state immediately activate ho jata hai. Lekin, kuch cases mein, aapko chahiye ho sakta hai ki child views ka pressed state ko delay kiya jaye, jisse touch feedback ki duration ko control kiya ja sake.</p>

              <p>shouldDelayChildPressedState() method boolean type ka hota hai, yani ki is method se ek boolean value return hoti hai. Agar ye method true return karta hai, to LinearLayoutCompat view group apne child views ki pressed state ko delay karega, aur agar false return karta hai, to delay nahi karega.</p>
              
              `,

              parameter: [],
            },


          ],
        },
  
        //
      
        protectedMethod: {
          success: true,
          name: "Protected methods",
  
          method: [
            {
              dep: false,
              name: "checkLayoutParams",
              id: "checkLayoutParams()",
              dataTypeName: `boolean`,
              code: `<a href="#checkLayoutParams()">checkLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              fullCode: `protected boolean <a href="#checkLayoutParams()">checkLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              des: `Is method ka use, LinearLayoutCompat view group ke child views ke LayoutParams object ko validate karne ke liye hota hai.`,
  
              longDes: `
                <p>checkLayoutParams(ViewGroup.LayoutParams p) method, LinearLayoutCompat view group ke child views ke LayoutParams object ko validate karne ke liye hota hai. Jab aap LinearLayoutCompat view group mein kisi child view ko add karte hain, to aap us child view ke liye appropriate LayoutParams object create karke set karte hain. Ye LayoutParams object ViewGroup.LayoutParams class se extend hota hai.</p>

                <p>Lekin kuch cases mein, aap apne custom LayoutParams class ko bhi use kar sakte hain, jo ViewGroup.LayoutParams class se directly extend nahi hota hai, lekin LinearLayoutCompat view group ke requirements ko satisfy karta hai. Is tarah ke custom LayoutParams class ke object ko LinearLayoutCompat view group ke child view ke liye set karne ke liye, aapko checkLayoutParams() method ko override karna hota hai.</p>

                <p>Yadi aap apne custom LayoutParams class ko LinearLayoutCompat view group ke child view ke liye use karte hain aur checkLayoutParams() method ko override nahi karte hain, to LinearLayoutCompat view group aapke custom LayoutParams object ko validate nahi karega aur ClassCastException ho sakta hai.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ViewGroup.LayoutParams p`,
                        des:`<p>Ye parameter ViewGroup.LayoutParams type ka hota hai, jo child view ke liye set kiye gaye LayoutParams object ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  

            {
              dep: false,
              name: "generateDefaultLayoutParams",
              id: "generateDefaultLayoutParams()",
              dataTypeName: `LinearLayoutCompat.LayoutParams`,
              code: `<a href="#generateDefaultLayoutParams()">generateDefaultLayoutParams</a>()`,
  
              fullCode: `protected LinearLayoutCompat.LayoutParams <a href="#generateDefaultLayoutParams()">generateDefaultLayoutParams</a>()`,
  
              des: `Is method ka use, LinearLayoutCompat view group ke liye default layout parameters (LayoutParams) object ko generate karne ke liye hota hai. `,
  
              longDes: `
                <p>generateDefaultLayoutParams() method, LinearLayoutCompat view group ke liye default layout parameters (LayoutParams) object ko generate karne ke liye hota hai. Default layout parameters object ka use kiya jata hai jab aap LinearLayoutCompat view group mein kisi child view ko add karte hain aur us child view ke liye specific layout parameters object nahi provide karte hain.</p>

                <p>Jab aap child view ko addView() method ke through LinearLayoutCompat view group ke andar add karte hain aur us child view ke liye layout parameters object null pass karte hain, to generateDefaultLayoutParams() method call hota hai. Is method ki madad se LinearLayoutCompat view group apne default layout parameters object ko create karta hai aur usse child view ke liye use karta hai.</p>

                <p>Agar aap LinearLayoutCompat view group mein kisi specific child view ke liye custom layout parameters (derived from LinearLayoutCompat.LayoutParams) use karna chahte hain, to aapko generateDefaultLayoutParams() method ko override karna hota hai. Aap apne custom layout parameters object ko create karke use kar sakte hai.</p>

                <p>generateDefaultLayoutParams() method, LinearLayoutCompat.LayoutParams type ka object return karta hai, yani ki is method se ek LinearLayoutCompat.LayoutParams object generate hota hai, jo default layout parameters represent karta hai.</p>
                
                `,
  
              parameter: [],
            },
  

  

            {
              dep: false,
              name: "generateLayoutParams",
              id: "generateLayoutParams()",
              dataTypeName: `LinearLayoutCompat.LayoutParams`,
              code: `<a href="#generateLayoutParams()">generateLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              fullCode: `protected LinearLayoutCompat.LayoutParams <a href="#generateLayoutParams()">generateLayoutParams</a>(ViewGroup.LayoutParams p)`,
  
              des: `Is method ka use, LinearLayoutCompat view group ke liye custom layout parameters (LayoutParams) object ko generate karne ke liye hota hai, jab aap kisi child view ke liye existing LayoutParams object ko modify karke custom parameters create karna chahte hain.`,
  
              longDes: `
                <p>generateLayoutParams(ViewGroup.LayoutParams p) method, LinearLayoutCompat view group ke liye custom layout parameters (LayoutParams) object ko generate karne ke liye hota hai. Jab aap LinearLayoutCompat view group mein kisi child view ko add karte hain aur us child view ke liye specific layout parameters object provide karte hain, to generateLayoutParams() method call hota hai.</p>

                <p>Is method ki madad se LinearLayoutCompat view group apne default layout parameters object ko create karta hai aur usse child view ke liye custom layout parameters object generate karta hai. Yadi aap apne custom LayoutParams class ko use karte hain, jo LinearLayoutCompat.LayoutParams class se directly extend nahi hota hai, to aapko generateLayoutParams() method ko override karna hota hai.</p>

                <p>Jab aap generateLayoutParams() method ko override karte hain, to aapko input parameter p se existing LayoutParams object milta hai, jise aap modify karke apne custom layout parameters object ko create kar sakte hain.</p>

                <p>generateLayoutParams(ViewGroup.LayoutParams p) method, LinearLayoutCompat.LayoutParams type ka object return karta hai, yani ki is method se ek LinearLayoutCompat.LayoutParams object generate hota hai, jo custom layout parameters represent karta hai.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `ViewGroup.LayoutParams p`,
                        des:`<p>Ye parameter ViewGroup.LayoutParams type ka hota hai, jo child view ke liye set kiye gaye existing LayoutParams object ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },
  

  

            {
              dep: false,
              name: "onDraw",
              id: "onDraw()",
              dataTypeName: `void`,
              code: `<a href="#onDraw()">onDraw</a>(@NonNull Canvas canvas)`,
  
              fullCode: `protected void <a href="#onDraw()">onDraw</a>(@NonNull Canvas canvas)`,
  
              des: `Is method ka use, LinearLayoutCompat view group ke andar present child views ko canvas par draw karne ke liye hota hai.`,
  
              longDes: `
                <p>onDraw(@NonNull Canvas canvas) method, LinearLayoutCompat view group ke andar present child views ko canvas par draw karne ke liye hota hai. Ye method, LinearLayoutCompat view group ke drawing process ka ek important part hota hai.</p>

                <p>Jab aap LinearLayoutCompat view group ko screen par render (display) karate hain, to onDraw() method automatically call hota hai. Is method mein, LinearLayoutCompat view group apne har child view ke draw() method ko call karta hai. Child views apne corresponding canvas par draw hote hain.</p>

                <p>Is method ko override karne ka main purpose hota hai custom drawing behavior ko implement karna. Yadi aap kisi specific child view ko customize karke draw karna chahte hain, to aap onDraw() method ko override kar sakte hain aur desired drawing logic ko implement kar sakte hain.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Canvas canvas`,
                        des:`<p>Ye parameter Canvas type ka hota hai, jo view group ke drawing operations ke liye use hota hai. Canvas ek graphical surface hai, jispar aap shapes, text, images, etc. ko draw kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },
  

  

            {
              dep: false,
              name: "onLayout",
              id: "onLayout()",
              dataTypeName: `void`,
              code: `<a href="#onLayout()">onLayout</a>(boolean changed, int l, int t, int r, int b)`,
  
              fullCode: `protected void <a href="#onLayout()">onLayout</a>(boolean changed, int l, int t, int r, int b)`,
  
              des: `Is method ka use, LinearLayoutCompat view group ke andar present child views ko unke final positions par layout karne ke liye hota hai.`,
  
              longDes: `
                <p>onLayout(boolean changed, int l, int t, int r, int b) method, LinearLayoutCompat view group ke andar present child views ko unke final positions par layout karne ke liye hota hai. Ye method, LinearLayoutCompat view group ke layout process ka ek important part hota hai.</p>

                <p>Jab aap LinearLayoutCompat view group ko screen par render (display) karate hain, to onLayout() method automatically call hota hai. Is method mein, LinearLayoutCompat view group apne har child view ke layout() method ko call karta hai. Child views ke layout parameters (LayoutParams) ke based par, unhe unke final positions par arrange kiya jata hai.</p>

                <p>Is method ko override karne ka main purpose hota hai custom layout behavior ko implement karna. Yadi aap kisi specific child view ko customize karke layout karna chahte hain, to aap onLayout() method ko override kar sakte hain aur desired layout logic ko implement kar sakte hain.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean changed`,
                        des:`<p>Ye parameter boolean type ka hota hai. Isse pata chalta hai ki LinearLayoutCompat view group ke layout me koi changes huye hain ya nahi. Yadi layout me koi changes huye hain, to changed parameter ki value true hoti hai, warna false hoti hai.</p>`,
                      },
                      {
                        dataTypeName: `int l`,
                        des:`<p>Ye parameter int type ka hota hai. Isse pata chalta hai LinearLayoutCompat view group ke left edge (x-coordinate) ka position kya hai.</p>`,
                      },
                      {
                        dataTypeName: `int t`,
                        des:`<p>Ye parameter int type ka hota hai. Isse pata chalta hai LinearLayoutCompat view group ke top edge (y-coordinate) ka position kya hai.</p>`,
                      },
                      {
                        dataTypeName: `int r`,
                        des:`<p>Ye parameter int type ka hota hai. Isse pata chalta hai LinearLayoutCompat view group ke right edge (x-coordinate) ka position kya hai.</p>`,
                      },
                      {
                        dataTypeName: `int b`,
                        des:`<p>Ye parameter int type ka hota hai. Isse pata chalta hai LinearLayoutCompat view group ke bottom edge (y-coordinate) ka position kya hai.</p>`,
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
  
              des: `Is method ka use, LinearLayoutCompat view group ke child views ko measure karne ke liye hota hai, taki unhe sahi size mein layout kiya ja sake.`,
  
              longDes: `
                <p>onMeasure(int widthMeasureSpec, int heightMeasureSpec) method, LinearLayoutCompat view group ke child views ko measure karne ke liye hota hai. Is method ka purpose hai child views ko unke desired width aur height par arrange karne ke liye unhe measure karna. Child views ke sizes, layout parameters (LayoutParams) ke based par decide kiye jate hain.</p>

                <p>LinearLayoutCompat view group ke onMeasure() method mein, har child view ke measure() method ko call kiya jata hai. Isse child views apne MeasureSpec values ke based par apne dimensions ko calculate karte hain.</p>

                <p>MeasureSpec ek integer value hota hai, jo width ya height ke liye size aur mode ko represent karta hai. Mode, width ya height ko kaise measure karna hai, usse related hota hai. Size, actual width ya height value hota hai.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int widthMeasureSpec`,
                        des:`<p>Ye parameter int type ka hota hai, jo child views ke width ko measure karne ke liye use hota hai. Isme width size aur mode dono represent hote hain.</p>`,
                      },
                      {
                        dataTypeName: `int heightMeasureSpec`,
                        des:`<p>Ye parameter int type ka hota hai, jo child views ke height ko measure karne ke liye use hota hai. Isme height size aur mode dono represent hote hain.</p>`,
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
  