module.exports.SwitchCompat = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "SwitchCompat",
      hCode: `public class <a href="#SwitchCompat">SwitchCompat</a> extends CompoundButton implements EmojiCompatConfigurationView`,
  
      des: 
        `
        <p>Ye class, switch UI element ko implement karne ke liye use hoti hai.</p>
        
  
        <p>SwitchCompat class ka use on/off (true/false) toggle functionality ko implement karne ke liye kiya jata hai. Is class ke through aap switch UI element ko customize kar sakte hai aur switch state changes ko handle kar sakte hai.</p>
  
       
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
              name: `SwitchCompat`,
              id: "SwitchCompat()",
              code: `SwitchCompat(@NonNull Context context)`,
              fullCode: `public SwitchCompat(@NonNull Context context)`,

              des: `Is constructor ka use, SwitchCompat view ko initialize karne ke liye hota hai.`,

              longDes: `
              <p>SwitchCompat(@NonNull Context context) constructor ka use, SwitchCompat view ko initialize karne ke liye hota hai. Aap is constructor ko use karke naya SwitchCompat object create kar sakte hain.</p>

              <p>SwitchCompat, ek Android Support Library (ab AndroidX ke naam se jana jata hai) ka hissa hai, jo ek toggle switch UI element provide karta hai. Ye switch, ON/OFF ya true/false jaise binary states ko represent karne ke liye use hota hai. SwitchCompat native Switch control ka ek modern version hai, jo backward compatibility ke liye provide kiya gaya hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek non-null Context object leta hai, jo SwitchCompat view ke liye context provide karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `SwitchCompat`,
              id: "SwitchCompat()",
              code: `SwitchCompat(@NonNull Context context, @Nullable AttributeSet attrs)`,
              fullCode: `public SwitchCompat(@NonNull Context context, @Nullable AttributeSet attrs)`,

              des: `Is constructor ka use, SwitchCompat view ko XML layout file se inflate karne aur XML attributes ko parse karne ke liye hota hai.`,

              longDes: `
              <p>SwitchCompat(@NonNull Context context, @Nullable AttributeSet attrs) constructor ka use, SwitchCompat view ko XML layout file se inflate karne aur XML attributes ko parse karne ke liye hota hai. Jab aap apne XML layout file mein SwitchCompat view ka define karte hain, to is constructor ko use karke XML attributes ko SwitchCompat view ke sath associate kiya jata hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek non-null Context object leta hai, jo SwitchCompat view ke liye context provide karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jo SwitchCompat view ke liye XML attributes ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },


            {
              dep: false,
              name: `SwitchCompat`,
              id: "SwitchCompat()",
              code: `SwitchCompat(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,
              fullCode: `public SwitchCompat(
                @NonNull Context context,
                @Nullable AttributeSet attrs,
                int defStyleAttr
            )`,

              des: `Is constructor ka use, SwitchCompat view ko XML layout file se inflate karne, XML attributes ko parse karne, aur default style attribute ko apply karne ke liye hota hai.`,

              longDes: `
              <p>SwitchCompat(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) constructor ka use, SwitchCompat view ko XML layout file se inflate karne, XML attributes ko parse karne, aur default style attribute ko apply karne ke liye hota hai. Jab aap apne XML layout file mein SwitchCompat view ka define karte hain, to is constructor ko use karke XML attributes ko SwitchCompat view ke sath associate kiya jata hai. Isme aap ek default style attribute bhi specify kar sakte hain, jo SwitchCompat view ke liye style customization provide karta hai.</p>
              `,
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Context context`,
                        des:`<p>Ye parameter ek non-null Context object leta hai, jo SwitchCompat view ke liye context provide karta hai.</p>`,
                      },
                      {
                        dataTypeName: `@Nullable AttributeSet attrs`,
                        des:`<p>Ye parameter ek AttributeSet object hai, jo SwitchCompat view ke liye XML attributes ko represent karta hai. Jab aap apne XML layout file mein SwitchCompat view ko define karte hain, to ye attributes us view ke sath associate hote hain. AttributeSet, XML attributes ke key-value pairs ko store karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int defStyleAttr`,
                        des:`<p>Ye parameter ek integer value hai, jo SwitchCompat view ke liye default style resource ID ko represent karta hai. Agar aap is parameter mein 0 ya koi invalid style resource ID pass karte hain, to SwitchCompat view ko default style ke sath initialize kiya jata hai.</p>`,
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
              code: `<a href="#draw()">draw</a>(@NonNull Canvas c)`,
  
              fullCode: `public void <a href="#draw()">draw</a>(@NonNull Canvas c)`,

              des: `Is method ka use, SwitchCompat view ke onDraw() event mein, view ko canvas par draw karne ke liye hota hai.`,
  
              longDes: `
              <p>draw(@NonNull Canvas c) method ka use, SwitchCompat view ke onDraw() event mein, view ko canvas par draw karne ke liye hota hai. Canvas ek 2D drawing surface hota hai, jiska use Android graphics APIs ka use karke shapes, text, images, aur other graphical elements ko draw karne ke liye kiya jata hai. Jab aap apne custom view ko draw karte hain, to aap onDraw() method mein canvas par drawing operations perform karte hain.</p>
  
              <p>draw(@NonNull Canvas c) method ko directly aapko call karne ki zarurat nahi hoti hai. Ye method internally Android framework dwara invoke hota hai, jab SwitchCompat view ko screen par draw karne ka samay aata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Canvas c`,
                        des:`<p>Ye parameter ek non-null Canvas object hai, jo drawing operations karne ke liye use hota hai. Is canvas par aap apne graphical elements ko draw kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "drawableHotspotChanged",
              id: "drawableHotspotChanged()",
              dataTypeName: `void`,
              code: `<a href="#drawableHotspotChanged()">drawableHotspotChanged</a>(float x, float y)`,
  
              fullCode: `public void <a href="#drawableHotspotChanged()">drawableHotspotChanged</a>(float x, float y)`,

              des: `Is method ka use, SwitchCompat view ke drawable elements (jaise ki background ya thumb) ke hotspot positions ko change karne ke liye hota hai.`,
  
              longDes: `
              <p>drawableHotspotChanged(float x, float y) method ka use, SwitchCompat view ke drawable elements (jaise ki background ya thumb) ke hotspot positions ko change karne ke liye hota hai. Hotspot position, ek drawable element ke andar ek specific coordinate hota hai, jisse touch event ke time drawable par focus aur touch highlight kiya ja sakta hai. Jab aap drawableHotspotChanged() method ko call karte hain, to aap SwitchCompat view ke drawable elements ke hotspot positions ko update kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `float x`,
                        des:`<p>Ye parameter ek float value hai, jo x-coordinate hota hai jaha pe hotspot position set karna hai.</p>`,
                      },
                      {
                        dataTypeName: `float y`,
                        des:`<p>Ye parameter ek float value hai, jo y-coordinate hota hai jaha pe hotspot position set karna hai.</p>`,
                      },
                    ],
                  },
              ],
            },

  
            {
              dep: false,
              name: "getCompoundPaddingLeft",
              id: "getCompoundPaddingLeft()",
              dataTypeName: `int`,
              code: `<a href="#getCompoundPaddingLeft()">getCompoundPaddingLeft</a>()`,
  
              fullCode: `public int <a href="#getCompoundPaddingLeft()">getCompoundPaddingLeft</a>()`,

              des: `Is method ka use, SwitchCompat view ke left side mein content aur compound drawable (jaise ki icon) ke liye padding ka size (dimension) retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getCompoundPaddingLeft() method ka use, SwitchCompat view ke left side mein content aur compound drawable (jaise ki icon) ke liye padding ka size retrieve karne ke liye hota hai. Compound padding ka size, view ke content aur uske compound drawable (jaise ki left, right, top, bottom mei icons) ke beech ka space hota hai. Is method ka use aap layout mei view ko proper spacing aur alignment ke liye kar sakte hain.</p>

              <p>getCompoundPaddingLeft() method ek integer value return karta hai, jo view ke left side mein content aur compound drawable ke liye padding ka size hota hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getCompoundPaddingRight",
              id: "getCompoundPaddingRight()",
              dataTypeName: `int`,
              code: `<a href="#getCompoundPaddingRight()">getCompoundPaddingRight</a>()`,
  
              fullCode: `public int <a href="#getCompoundPaddingRight()">getCompoundPaddingRight</a>()`,

              des: `Is method ka use, SwitchCompat view ke right side mein content aur compound drawable (jaise ki icon) ke liye padding ka size (dimension) retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getCompoundPaddingRight() method ka use, SwitchCompat view ke right side mein content aur compound drawable (jaise ki icon) ke liye padding ka size retrieve karne ke liye hota hai. Compound padding ka size, view ke content aur uske compound drawable (jaise ki left, right, top, bottom mei icons) ke beech ka space hota hai. Is method ka use aap layout mei view ko proper spacing aur alignment ke liye kar sakte hain.</p>

              <p>getCompoundPaddingRight() method ek integer value return karta hai, jo view ke right side mein content aur compound drawable ke liye padding ka size hota hai.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getCustomSelectionActionModeCallback",
              id: "getCustomSelectionActionModeCallback()",
              dataTypeName: `@Nullable ActionMode.Callback`,
              code: `<a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,
  
              fullCode: `public @Nullable ActionMode.Callback <a href="#getCustomSelectionActionModeCallback()">getCustomSelectionActionModeCallback</a>()`,

              des: `Is method ka use, SwitchCompat view ke liye custom text selection action mode callback retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getCustomSelectionActionModeCallback() method ka use, SwitchCompat view ke liye custom text selection action mode callback retrieve karne ke liye hota hai. Jab aap text selection handle karte hain SwitchCompat view mein, to action mode callback ki madad se aap text selection ke events ko handle kar sakte hain. Agar aapne custom selection action mode callback set kiya hai, to aap usko is method se retrieve karke use kar sakte hain.</p>

              <p>getCustomSelectionActionModeCallback() method ek ActionMode.Callback object return karta hai, jo SwitchCompat view ke liye custom text selection action mode callback represent karta hai. Agar custom selection action mode callback set nahi kiya gaya hai, to method null return karta hai.</p>
              `,

              parameter: [],
            },

  

  
            {
              dep: false,
              name: "getShowText",
              id: "getShowText()",
              dataTypeName: `boolean`,
              code: `<a href="#getShowText()">getShowText</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:showText")</br>public boolean <a href="#getShowText()">getShowText</a>()`,

              des: `Is method ka use, SwitchCompat view mein showText attribute ko retrieve karne ke liye hota hai. `,
  
              longDes: `
              <p>getShowText() method ka use, SwitchCompat view mein showText attribute ko retrieve karne ke liye hota hai. Ye attribute, SwitchCompat view mein showText property ko control karta hai, jiski madad se aap switch ke text ko ON/OFF states ke sath display ya hide kar sakte hain.</p>

              <p>getShowText() method ek boolean value return karta hai, jo SwitchCompat view ke showText attribute ko represent karta hai. Agar showText attribute true hai, to text show hoga, aur agar false hai, to text hide hoga.</p>
              `,

              parameter: [],
            },

  

  
            {
              dep: false,
              name: "getSplitTrack",
              id: "getSplitTrack()",
              dataTypeName: `boolean`,
              code: `<a href="#getSplitTrack()">getSplitTrack</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:splitTrack")</br>public boolean <a href="#getSplitTrack()">getSplitTrack</a>()`,

              des: `Is  method ka use, SwitchCompat view mein splitTrack attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSplitTrack() method ka use, SwitchCompat view mein splitTrack attribute ko retrieve karne ke liye hota hai. Ye attribute, SwitchCompat view mein splitTrack property ko control karta hai, jiski madad se aap switch ke track ko split (divide) karke ON/OFF states ke sath display kar sakte hain.</p>

              <p>getSplitTrack() method ek boolean value return karta hai, jo SwitchCompat view ke splitTrack attribute ko represent karta hai. Agar splitTrack attribute true hai, to track split hoga ON/OFF states ke sath, aur agar false hai, to track split nahi hoga.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getSwitchMinWidth",
              id: "getSwitchMinWidth()",
              dataTypeName: `int`,
              code: `<a href="#getSwitchMinWidth()">getSwitchMinWidth</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:switchMinWidth")</br>public int <a href="#getSwitchMinWidth()">getSwitchMinWidth</a>()`,

              des: `Is method ka use, SwitchCompat view mein switchMinWidth attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSwitchMinWidth() method ka use, SwitchCompat view mein switchMinWidth attribute ko retrieve karne ke liye hota hai. Ye attribute, SwitchCompat view mein switch ka minimum width ko control karta hai. Switch ka minimum width, switch ke track aur thumb (toggle button) ka width hota hai, jo switch ON/OFF states ke sath change ho sakta hai.</p>

              <p>getSwitchMinWidth() method ek integer value return karta hai, jo SwitchCompat view ke switchMinWidth attribute ko represent karta hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getSwitchPadding",
              id: "getSwitchPadding()",
              dataTypeName: `int`,
              code: `<a href="#getSwitchPadding()">getSwitchPadding</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:switchPadding")</br>public int <a href="#getSwitchPadding()">getSwitchPadding</a>()`,

              des: `Is method ka use, SwitchCompat view mein switchPadding attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getSwitchPadding() method ka use, SwitchCompat view mein switchPadding attribute ko retrieve karne ke liye hota hai. Ye attribute, SwitchCompat view mein switch ke track (background) aur thumb (toggle button) ke beech ka padding (spacing) ko control karta hai.</p>

              <p>getSwitchPadding() method ek integer value return karta hai, jo SwitchCompat view ke switchPadding attribute ko represent karta hai. Ye integer value pixels mein hoti hai, jiski madad se aap switch ke track aur thumb ke beech ka padding customize kar sakte hain.</p>
              `,

              parameter: [],
            },

  
  
  
            {
              dep: false,
              name: "getTextOff",
              id: "getTextOff()",
              dataTypeName: `CharSequence`,
              code: `<a href="#getTextOff()">getTextOff</a>()`,
  
              fullCode: `@Attribute(value = "android:textOff")</br>public CharSequence <a href="#getTextOff()">getTextOff</a>()`,

              des: `Is method ka use, SwitchCompat view mein textOff attribute ko retrieve karne ke liye hota hai. `,
  
              longDes: `
              <p>getTextOff() method ka use, SwitchCompat view mein textOff attribute ko retrieve karne ke liye hota hai. Ye attribute, SwitchCompat view ke OFF state mein display hone wale text (label) ko control karta hai.</p>

              <p>getTextOff() method ek CharSequence object return karta hai, jo SwitchCompat view ke textOff attribute ko represent karta hai. CharSequence ek interface hai, jiska use text (strings) ko represent karne ke liye hota hai. Is method se aap OFF state ke text ko retrieve kar sakte hain.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getTextOn",
              id: "getTextOn()",
              dataTypeName: `CharSequence`,
              code: `<a href="#getTextOn()">getTextOn</a>()`,
  
              fullCode: `@Attribute(value = "android:textOn")</br>public CharSequence <a href="#getTextOn()">getTextOn</a>()`,

              des: `Is method ka use, SwitchCompat view mein textOn attribute ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTextOn() method ka use, SwitchCompat view mein textOn attribute ko retrieve karne ke liye hota hai. Ye attribute, SwitchCompat view ke ON state mein display hone wale text (label) ko control karta hai.</p>

              <p>getTextOn() method ek CharSequence object return karta hai, jo SwitchCompat view ke textOn attribute ko represent karta hai. CharSequence ek interface hai, jiska use text (strings) ko represent karne ke liye hota hai. Is method se aap ON state ke text ko retrieve kar sakte hain.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getThumbDrawable",
              id: "getThumbDrawable()",
              dataTypeName: `Drawable`,
              code: `<a href="#getThumbDrawable()">getThumbDrawable</a>()`,
  
              fullCode: `@Attribute(value = "android:thumb")</br>public Drawable <a href="#getThumbDrawable()">getThumbDrawable</a>()`,

              des: `Is method ka use, SwitchCompat view mein thumb (toggle button) ke liye set kiya gaya drawable resource ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getThumbDrawable() method ka use, SwitchCompat view mein thumb (toggle button) ke liye set kiya gaya drawable resource ko retrieve karne ke liye hota hai. Thumb drawable, switch ke ON/OFF states ko visually represent karne ke liye use hota hai.</p>

              <p>getThumbDrawable() method ek Drawable object return karta hai, jo SwitchCompat view ke thumb drawable ko represent karta hai. Drawable ek class hai, jiska use graphics (images) ko represent karne ke liye hota hai.</p>
              `,

              parameter: [],
            },

  
  
            {
              dep: false,
              name: "getThumbTextPadding",
              id: "getThumbTextPadding()",
              dataTypeName: `int`,
              code: `<a href="#getThumbTextPadding()">getThumbTextPadding</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:thumbTextPadding")</br>public int <a href="#getThumbTextPadding()">getThumbTextPadding</a>()`,

              des: `Is method ka use, SwitchCompat view mein thumb (toggle button) aur text (label) ke beech ka padding (spacing) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getThumbTextPadding() method ka use, SwitchCompat view mein thumb (toggle button) aur text (label) ke beech ka padding (spacing) ko retrieve karne ke liye hota hai. Is attribute ki madad se aap thumb aur text ke spacing ko customize kar sakte hain.</p>

              <p>getThumbTextPadding() method ek integer value return karta hai, jo SwitchCompat view ke thumbTextPadding attribute ko represent karta hai. Ye integer value pixels mein hoti hai, jiski madad se aap thumb aur text ke beech ka padding set kar sakte hain.</p>
              `,

              parameter: [],
            },

  
            {
              dep: false,
              name: "getThumbTintList",
              id: "getThumbTintList()",
              dataTypeName: `@Nullable ColorStateList`,
              code: `<a href="#getThumbTintList()">getThumbTintList</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:thumbTint")</br>public @Nullable ColorStateList <a href="#getThumbTintList()">getThumbTintList</a>()`,

              des: `Is  method ka use, SwitchCompat view ke thumb (toggle button) ke liye set ki gayi tint color state list ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getThumbTintList() method ka use, SwitchCompat view ke thumb (toggle button) ke liye set ki gayi tint color state list ko retrieve karne ke liye hota hai. Tint color state list, thumb ke color ko ON/OFF states ke sath change karne ke liye use hota hai.</p>

              <p>getThumbTintList() method ek ColorStateList object return karta hai, jo SwitchCompat view ke thumbTint attribute ko represent karta hai. ColorStateList ek class hai, jiska use color states ke set ko represent karne ke liye hota hai. Is method se aap thumb ke color state list ko retrieve kar sakte hain.</p>
              `,

              parameter: [],
            },



            {
              dep: false,
              name: "getThumbTintMode",
              id: "getThumbTintMode()",
              dataTypeName: `@Nullable PorterDuff.Mode`,
              code: `<a href="#getThumbTintMode()">getThumbTintMode</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:thumbTintMode")</br>public @Nullable PorterDuff.Mode <a href="#getThumbTintMode()">getThumbTintMode</a>()`,

              des: `Is method ka use, SwitchCompat view ke thumb (toggle button) ke liye set ki gayi tint mode (PorterDuff mode) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getThumbTintMode() method ka use, SwitchCompat view ke thumb (toggle button) ke liye set ki gayi tint mode (PorterDuff mode) ko retrieve karne ke liye hota hai. Tint mode, thumb ke color ko kaise apply karna hai, wo define karta hai.</p>

              <p>getThumbTintMode() method ek PorterDuff.Mode object return karta hai, jo SwitchCompat view ke thumbTintMode attribute ko represent karta hai. PorterDuff.Mode ek enumeration hai, jiska use tint color ko apply karne ke tarike ko define karne ke liye hota hai. Is method se aap thumb ke tint mode ko retrieve kar sakte hain.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getTrackDrawable",
              id: "getTrackDrawable()",
              dataTypeName: `Drawable`,
              code: `<a href="#getTrackDrawable()">getTrackDrawable</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:track")</br>public Drawable <a href="#getTrackDrawable()">getTrackDrawable</a>()`,

              des: `Is method ka use, SwitchCompat view mein track (background) ke liye set ki gayi drawable resource ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTrackDrawable() method ka use, SwitchCompat view mein track (background) ke liye set ki gayi drawable resource ko retrieve karne ke liye hota hai. Track drawable, switch ke ON/OFF states ko visually represent karne ke liye use hota hai.</p>

              <p>getTrackDrawable() method ek Drawable object return karta hai, jo SwitchCompat view ke track drawable ko represent karta hai. Drawable ek class hai, jiska use graphics (images) ko represent karne ke liye hota hai.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getTrackTintList",
              id: "getTrackTintList()",
              dataTypeName: `@Nullable ColorStateList`,
              code: `<a href="#getTrackTintList()">getTrackTintList</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:trackTint")</br>public @Nullable ColorStateList <a href="#getTrackTintList()">getTrackTintList</a>()`,

              des: `Is method ka use, SwitchCompat view ke track (background) ke liye set ki gayi tint color state list ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTrackTintList() method ka use, SwitchCompat view ke track (background) ke liye set ki gayi tint color state list ko retrieve karne ke liye hota hai. Tint color state list, track ke color ko ON/OFF states ke sath change karne ke liye use hota hai.</p>

              <p>getTrackTintList() method ek ColorStateList object return karta hai, jo SwitchCompat view ke trackTint attribute ko represent karta hai. ColorStateList ek class hai, jiska use color states ke set ko represent karne ke liye hota hai. Is method se aap track ke color state list ko retrieve kar sakte hain.</p>
              `,

              parameter: [],
            },

  

            {
              dep: false,
              name: "getTrackTintMode",
              id: "getTrackTintMode()",
              dataTypeName: `@Nullable PorterDuff.Mode`,
              code: `<a href="#getTrackTintMode()">getTrackTintMode</a>()`,
  
              fullCode: `@Attribute(value = "androidx.appcompat:trackTintMode")</br>public @Nullable PorterDuff.Mode <a href="#getTrackTintMode()">getTrackTintMode</a>()`,

              des: `Is method ka use, SwitchCompat view ke track (background) ke liye set ki gayi tint mode (PorterDuff mode) ko retrieve karne ke liye hota hai.`,
  
              longDes: `
              <p>getTrackTintMode() method ka use, SwitchCompat view ke track (background) ke liye set ki gayi tint mode (PorterDuff mode) ko retrieve karne ke liye hota hai. Tint mode, track ke color ko kaise apply karna hai, wo define karta hai.</p>

              <p>getTrackTintMode() method ek PorterDuff.Mode object return karta hai, jo SwitchCompat view ke trackTintMode attribute ko represent karta hai. PorterDuff.Mode ek enumeration hai, jiska use tint color ko apply karne ke tarike ko define karne ke liye hota hai. Is method se aap track ke tint mode ko retrieve kar sakte hain.</p>
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

              des: `Is method ka use EmojiCompat support library ke enabled status ko check karne ke liye hota hai.`,
  
              longDes: `
              <p>isEmojiCompatEnabled() method ka use EmojiCompat support library ke enabled status ko check karne ke liye hota hai. EmojiCompat library, Android ke older versions mein bhi latest emojis ko display karne ke liye use hota hai. Agar aapne apne Android application mein EmojiCompat library ko integrate kiya hai aur wo enabled hai, to ye method true return karega, warna false return karega.</p>

              <p>isEmojiCompatEnabled() method, EmojiCompat library ke enabled status ke hisab se, true ya false return karta hai.</p>
              `,

              parameter: [],
            },


            {
              dep: false,
              name: "jumpDrawablesToCurrentState",
              id: "jumpDrawablesToCurrentState()",
              dataTypeName: `void`,
              code: `<a href="#jumpDrawablesToCurrentState()">jumpDrawablesToCurrentState</a>()`,
  
              fullCode: `public void <a href="#jumpDrawablesToCurrentState()">jumpDrawablesToCurrentState</a>()`,

              des: `Is method ka use, SwitchCompat view ke drawables (thumb, track, etc.) ko current state pe jump karne ke liye hota hai. Yani ki agar koi animation ya drawable transition chal rahi hai, to ye method use karke un drawables ko animation ke current state pe jump karata hai.`,
  
              longDes: `
              <p>jumpDrawablesToCurrentState() method, SwitchCompat view ke drawables (jaise ki thumb ya track) ko current state pe jump karne ke liye hota hai. Agar kisi drawable pe animation ya transition chal rahi hai, jaise ki pressed state ya focused state, to is method ka use karke aap us drawable ko current state pe jump kar sakte hain. Isse animation ko interrupt karke drawable ko ek dam se current state pe laya ja sakta hai.</p>
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

              des: `Is method ka use, accessibility events ko initialize karne ke liye hota hai, taki SwitchCompat view ke state changes aur actions ke information ko accessibility services tak provide kiya ja sake.`,
  
              longDes: `
              <p>onInitializeAccessibilityEvent(AccessibilityEvent event) method, SwitchCompat view ke liye accessibility event ko initialize karne ke liye hota hai. Accessibility events, visually impaired users ke liye important hote hain, jo screen readers aur other assistive technologies ki madad se app ko use karte hain. Jab SwitchCompat view ka state change hota hai ya koi action perform hota hai, jaise switch ON/OFF ho jana ya switch toggle karna, tab is method ka use hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AccessibilityEvent event`,
                        des:`<p>Ye parameter, AccessibilityEvent type ka ek object hota hai, jisme accessibility event ki details store hoti hain, jaise ki event type, event source, aur event time.</p>`,
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

              des: `Is method ka use, accessibility services ke liye SwitchCompat view ke AccessibilityNodeInfo ko initialize karne ke liye hota hai.`,
  
              longDes: `
              <p>onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo info) method, SwitchCompat view ke liye accessibility node info (AccessibilityNodeInfo) ko initialize karne ke liye hota hai. AccessibilityNodeInfo, ek important data structure hota hai jo ek view ke accessibility information ko represent karta hai. Jab accessibility services (jaise ki screen readers) app ke UI elements ke accessibility information tak pahunchte hain, to ye method use hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AccessibilityNodeInfo info`,
                        des:`<p>Ye parameter, AccessibilityNodeInfo type ka ek object hota hai, jisme SwitchCompat view ke accessibility information ko set karne ke liye methods hote hain, jaise ki setText(), setContentDescription(), etc.</p>`,
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
  
              fullCode: `public void <a href="#onMeasure()">onMeasure</a>(int widthMeasureSpec, int heightMeasureSpec)`,

              des: `Is method ka use, SwitchCompat view ke width (widthMeasureSpec) aur height (heightMeasureSpec) ko measure karne ke liye hota hai, taki view ka layout system ke sath sahi tarah se interact kar sake.`,
  
              longDes: `
              <p>onMeasure(int widthMeasureSpec, int heightMeasureSpec) method, SwitchCompat view ke width (widthMeasureSpec) aur height (heightMeasureSpec) ko measure karne ke liye hota hai. Jab SwitchCompat view ko layout system arrange karta hai, to wo view ki size ko determine karne ke liye is method ko call karta hai. View ke width aur height ka measure karne ke liye layout system, widthMeasureSpec aur heightMeasureSpec values provide karta hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int widthMeasureSpec`,
                        des:`<p>Ye parameter, view ke width ko measure karne ke liye ek integer value hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int heightMeasureSpec`,
                        des:`<p>Ye parameter, view ke height ko measure karne ke liye ek integer value hota hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "onPopulateAccessibilityEvent",
              id: "onPopulateAccessibilityEvent()",
              dataTypeName: `void`,
              code: `<a href="#onPopulateAccessibilityEvent()">onPopulateAccessibilityEvent</a>(AccessibilityEvent event)`,
  
              fullCode: `public void <a href="#onPopulateAccessibilityEvent()">onPopulateAccessibilityEvent</a>(AccessibilityEvent event)`,

              des: `Is method ka use, accessibility event ko populate (fill) karne ke liye hota hai, taki SwitchCompat view ke state changes aur actions ke information ko accessibility services tak provide kiya ja sake.`,
  
              longDes: `
              <p>onPopulateAccessibilityEvent(AccessibilityEvent event) method, SwitchCompat view ke liye accessibility event ko populate (fill) karne ke liye hota hai. Accessibility event, visually impaired users ke liye important hote hain, jo screen readers aur other assistive technologies ki madad se app ko use karte hain. Jab SwitchCompat view ka state change hota hai ya koi action perform hota hai, jaise switch ON/OFF ho jana ya switch toggle karna, tab is method ka use hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `AccessibilityEvent event`,
                        des:`<p>Ye parameter, AccessibilityEvent type ka ek object hota hai, jisme accessibility event ki details store hoti hain, jaise ki event type, event source, aur event time.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "onTouchEvent",
              id: "onTouchEvent()",
              dataTypeName: `boolean`,
              code: `<a href="#onTouchEvent()">onTouchEvent</a>(MotionEvent ev)`,
  
              fullCode: `public boolean <a href="#onTouchEvent()">onTouchEvent</a>(MotionEvent ev)`,

              des: `Is method ka use, SwitchCompat view par aane wale touch events ko handle karne ke liye hota hai, jisse user SwitchCompat view ko touch karke interact kar sake.`,
  
              longDes: `
              <p>onTouchEvent(MotionEvent ev) method, SwitchCompat view par aane wale touch events ko handle karne ke liye hota hai. Jab user SwitchCompat view ko touch karta hai, tab view is method ko call karta hai. Is method mein aap touch event ke type, coordinates, aur other details ko check kar sakte hain, aur user ke touch actions ke according SwitchCompat view ko handle kar sakte hain.</p>

              <p>onTouchEvent(MotionEvent ev) method ek boolean value return karta hai. Agar aapne touch event ko handle kar liya hai aur koi further action nahi lena chahte, to aap true return kar sakte hain, jisse event ko consume kar liya jayega. Agar aap false return karte hain, to event ko further propagate kiya jayega dusre views tak.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `MotionEvent ev`,
                        des:`<p>Ye parameter, MotionEvent type ka ek object hota hai, jisme touch event ki details jaise ki event type (ACTION_DOWN, ACTION_MOVE, ACTION_UP, etc.), coordinates (getX(), getY()), aur other touch event related information hoti hain.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setAllCaps",
              id: "setAllCaps()",
              dataTypeName: `void`,
              code: `<a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,
  
              fullCode: `public void <a href="#setAllCaps()">setAllCaps</a>(boolean allCaps)`,

              des: `Is method ka use, SwitchCompat view ke text ko all caps (sabhi capital letters) format mein set karne ke liye hota hai.`,
  
              longDes: `
              <p>setAllCaps(boolean allCaps) method, SwitchCompat view ke text ko all caps format mein set karne ke liye hota hai. Yani ki, agar aap is method ko true ke sath call karte hain, to SwitchCompat view ke text ko sabhi capital letters mein convert kar diya jata hai. Aur agar aap is method ko false ke sath call karte hain, to text ka original case maintain kiya jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean allCaps`,
                        des:`<p>Ye parameter ek boolean value hai. Agar aap true pass karte hain, to text ko all caps format mein convert kiya jata hai. Agar aap false pass karte hain, to original case maintain kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setChecked",
              id: "setChecked()",
              dataTypeName: `void`,
              code: `<a href="#setChecked()">setChecked</a>(boolean checked)`,
  
              fullCode: `public void <a href="#setChecked()">setChecked</a>(boolean checked)`,

              des: `Is method ka use, SwitchCompat view ke state ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setChecked(boolean checked) method, SwitchCompat view ke state ko set karne ke liye hota hai. Agar aap is method ko true ke sath call karte hain, to SwitchCompat view ka state ON ho jata hai (switch toggle ON), aur agar aap is method ko false ke sath call karte hain, to view ka state OFF ho jata hai (switch toggle OFF).</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean checked`,
                        des:`<p>Ye parameter ek boolean value hai. Agar aap true pass karte hain, to view ka state ON ho jata hai. Agar aap false pass karte hain, to view ka state OFF ho jata hai.</p>`,
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

              des: `Is method ka use, SwitchCompat view ke liye custom selection action mode callback ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setCustomSelectionActionModeCallback(@Nullable ActionMode.Callback actionModeCallback) method, SwitchCompat view ke liye custom selection action mode callback ko set karne ke liye hota hai. Selection action mode, text selection (copy, cut, paste, etc.) ko handle karne ke liye use hota hai. Jab user SwitchCompat view mein text select karta hai, tab action mode activate hota hai, jisme copy, cut, paste jaise options dikhte hain.</p>

              <p>Is method ko use karke aap SwitchCompat view ke text selection action mode ko customize kar sakte hain. Aap ek custom ActionMode.Callback object pass kar sakte hain, jisse aap text selection ke events ko handle kar sakte hain, jaise ki text copy, cut, paste, share, etc.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable ActionMode.Callback actionModeCallback`,
                        des:`<p>Ye parameter ek ActionMode.Callback object hai, jisse aap SwitchCompat view ke liye custom selection action mode callback set kar sakte hain. Agar aap null pass karte hain, to default action mode behavior use hota hai.</p>`,
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

              des: `Is method ka use, SwitchCompat view mein EmojiCompat support ko enable ya disable karne ke liye hota hai.`,
  
              longDes: `
              <p>setEmojiCompatEnabled(boolean enabled) method, SwitchCompat view mein EmojiCompat support ko enable ya disable karne ke liye hota hai. EmojiCompat ek Android library hai, jo Unicode emoji characters ko support karta hai. Agar aap EmojiCompat support ko enable karte hain, to SwitchCompat view mein emoji characters ko render karne ke liye EmojiCompat library ka use kiya jayega. Aur agar aap EmojiCompat support ko disable karte hain, to emoji characters ko direct Unicode characters ke rup mein display kiya jayega.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enabled`,
                        des:`<p>Ye parameter ek boolean value hai. Agar aap true pass karte hain, to EmojiCompat support enable ho jata hai. Agar aap false pass karte hain, to EmojiCompat support disable ho jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setFilters",
              id: "setFilters()",
              dataTypeName: `void`,
              code: `<a href="#setFilters()">setFilters</a>(@NonNull InputFilter[] filters)`,
  
              fullCode: `public void <a href="#setFilters()">setFilters</a>(@NonNull InputFilter[] filters)`,

              des: `Is method ka use, SwitchCompat view mein text ke input ko filter karne ke liye hota hai.`,
  
              longDes: `
              <p>setFilters(@NonNull InputFilter[] filters) method, SwitchCompat view mein text ke input ko filter karne ke liye hota hai. Aap ek ya multiple InputFilter objects ka array pass kar sakte hain, jisse text input ko restrict kiya ja sake. InputFilter, ek interface hai jo text input ko validate aur modify karne ke liye use hota hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull InputFilter[] filters`,
                        des:`<p>Ye parameter ek InputFilter type ka array hai, jisme aap ek ya multiple InputFilter objects pass kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setShowText",
              id: "setShowText()",
              dataTypeName: `void`,
              code: `<a href="#setShowText()">setShowText</a>(boolean showText)`,
  
              fullCode: `public void <a href="#setShowText()">setShowText</a>(boolean showText)`,

              des: `Is method ka use, SwitchCompat view mein ON/OFF state ke text ko display ya hide karne ke liye hota hai.`,
  
              longDes: `
              <p>setShowText(boolean showText) method, SwitchCompat view mein ON/OFF state ke text ko display ya hide karne ke liye hota hai. Agar aap is method ko true ke sath call karte hain, to SwitchCompat view mein ON/OFF state ke text ko display kiya jata hai. Aur agar aap is method ko false ke sath call karte hain, to text ko hide kiya jata hai.</p>

              <p>SwitchCompat view mein ON/OFF state ke text ko display karne ka default behavior hota hai. Lekin kabhi-kabhi aap text ko hide karna chahte hain, taki sirf switch ka visual representation dikhe, bina text ke. Is situation mein aap setShowText(false) method ka use karke text ko hide kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean showText`,
                        des:`<p>Ye parameter ek boolean value hai. Agar aap true pass karte hain, to ON/OFF state ke text ko display kiya jata hai. Agar aap false pass karte hain, to text ko hide kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setSplitTrack",
              id: "setSplitTrack()",
              dataTypeName: `void`,
              code: `<a href="#setSplitTrack()">setSplitTrack</a>(boolean splitTrack)`,
  
              fullCode: `public void <a href="#setSplitTrack()">setSplitTrack</a>(boolean splitTrack)`,

              des: `Is method ka use, SwitchCompat view ke track (background) ko ON/OFF states ke liye split karne ya combine karne ke liye hota hai.`,
  
              longDes: `
              <p>setSplitTrack(boolean splitTrack) method, SwitchCompat view ke track ko ON/OFF states ke liye split karne ya combine karne ke liye hota hai. Track, SwitchCompat view ke background ka hissa hota hai, jisme switch ka thumb (the round part that slides) move karta hai.</p>

              <p>By default, splitTrack value false hota hai, jisse SwitchCompat view ka track ON/OFF states ke liye ek combined background rehta hai. Lekin agar aap is method ko true ke sath call karte hain, to track ko split kar diya jata hai. Iska matlab hota hai ki ON aur OFF states ke liye alag-alag track segments ban jate hain, jisse visual representation mein track ON/OFF states ke beech mein ek gap create ho jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean splitTrack`,
                        des:`<p>Ye parameter ek boolean value hai. Agar aap true pass karte hain, to track ko split kar diya jata hai. Agar aap false pass karte hain, to track ko combine kiya jata hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setSwitchMinWidth",
              id: "setSwitchMinWidth()",
              dataTypeName: `void`,
              code: `<a href="#setSwitchMinWidth()">setSwitchMinWidth</a>(int pixels)`,
  
              fullCode: `public void <a href="#setSwitchMinWidth()">setSwitchMinWidth</a>(int pixels)`,

              des: `Is method ka use, SwitchCompat view ke minimum width ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setSwitchMinWidth(int pixels) method, SwitchCompat view ke minimum width ko set karne ke liye hota hai. Minimum width, view ka minimum size hota hai jisse view kabhi bhi kam size mein na ho sake.</p>

              <p>SwitchCompat view ka default minimum width system ke according set hota hai, taki sahi visual representation ho sake. Lekin kabhi-kabhi aapko apne design requirements ke according minimum width ko modify karna hota hai. Is situation mein aap setSwitchMinWidth(int pixels) method ka use karke view ke minimum width ko customize kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int pixels`,
                        des:`<p>Ye parameter ek integer value hai, jo view ke minimum width ko pixels mein represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setSwitchPadding",
              id: "setSwitchPadding()",
              dataTypeName: `void`,
              code: `<a href="#setSwitchPadding()">setSwitchPadding</a>(int pixels)`,
  
              fullCode: `public void <a href="#setSwitchPadding()">setSwitchPadding</a>(int pixels)`,

              des: `Is method ka use, SwitchCompat view ke toggle switch (thumb) ke padding ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setSwitchPadding(int pixels) method, SwitchCompat view ke toggle switch (thumb) ke padding ko set karne ke liye hota hai. Padding, view ke boundary se content (thumb, text, etc.) ke beech ka space hota hai.</p>

              <p>SwitchCompat view ka default switch padding system ke according set hota hai, taki sahi visual representation ho sake. Lekin kabhi-kabhi aapko apne design requirements ke according switch ke thumb ko content se door ya paas rakhna hota hai. Is situation mein aap setSwitchPadding(int pixels) method ka use karke view ke switch padding ko customize kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int pixels`,
                        des:`<p>Ye parameter ek integer value hai, jo view ke switch padding ko pixels mein represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setSwitchTextAppearance",
              id: "setSwitchTextAppearance()",
              dataTypeName: `void`,
              code: `<a href="#setSwitchTextAppearance()">setSwitchTextAppearance</a>(Context context, int resid)`,
  
              fullCode: `public void <a href="#setSwitchTextAppearance()">setSwitchTextAppearance</a>(Context context, int resid)`,

              des: `Is method ka use, SwitchCompat view ke ON/OFF states ke text (ON aur OFF) ke text appearance (font, color, size, etc.) ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setSwitchTextAppearance(Context context, int resid) method, SwitchCompat view ke ON/OFF states ke text (ON aur OFF) ke text appearance ko customize karne ke liye hota hai. Is method ko use karke aap SwitchCompat view ke text appearance ko set kar sakte hain, jaise ki font family, font size, font color, etc.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Context context`,
                        des:`<p>Ye parameter ek Context object hai, jo text appearance resources ko access karne ke liye use hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int resid`,
                        des:`<p>Ye parameter ek integer value hai, jo text appearance resources ka reference hai. Isme aap ek style resource ID pass kar sakte hain, jiska use text appearance ko define karne ke liye kiya gaya hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setSwitchTypeface",
              id: "setSwitchTypeface(Typeface)",
              dataTypeName: `void`,
              code: `<a href="#setSwitchTypeface(Typeface)">setSwitchTypeface</a>(Typeface typeface)`,
  
              fullCode: `public void <a href="#setSwitchTypeface(Typeface)">setSwitchTypeface</a>(Typeface typeface)`,

              des: `Is method ka use, SwitchCompat view ke ON/OFF states ke text (ON aur OFF) ke font (Typeface) ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setSwitchTypeface(Typeface typeface) method, SwitchCompat view ke ON/OFF states ke text (ON aur OFF) ke font (Typeface) ko customize karne ke liye hota hai. Aap is method mein kisi bhi custom Typeface object ko pass kar sakte hain, jisse ON aur OFF states ke text ko custom font mein display kiya ja sake.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Typeface typeface`,
                        des:`<p>Ye parameter ek Typeface object hai, jo custom font ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setSwitchTypeface",
              id: "setSwitchTypeface(Typeface,int)",
              dataTypeName: `void`,
              code: `<a href="#setSwitchTypeface(Typeface,int)">setSwitchTypeface</a>(Typeface tf, int style)`,
  
              fullCode: `public void <a href="#setSwitchTypeface(Typeface,int)">setSwitchTypeface</a>(Typeface tf, int style)`,

              des: `Is method ka use, SwitchCompat view ke ON/OFF states ke text (ON aur OFF) ke font (Typeface) aur uske style ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setSwitchTypeface(Typeface tf, int style) method, SwitchCompat view ke ON/OFF states ke text (ON aur OFF) ke font (Typeface) aur uske style ko customize karne ke liye hota hai. Aap is method mein kisi bhi custom Typeface object ko pass kar sakte hain, jisse ON aur OFF states ke text ko custom font mein display kiya ja sake. Saath hi, aap text ke style (bold, italic, normal) ko bhi customize kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Typeface tf`,
                        des:`<p>Ye parameter ek Typeface object hai, jo custom font ko represent karta hai.</p>`,
                      },
                      {
                        dataTypeName: `int style`,
                        des:`<p>Ye parameter ek integer value hai, jo text ke style ko define karta hai. Isme aap Typeface.BOLD, Typeface.ITALIC, Typeface.BOLD_ITALIC ya Typeface.NORMAL jaise constants ka use kar sakte hain.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTextOff",
              id: "setTextOff()",
              dataTypeName: `void`,
              code: `<a href="#setTextOff()">setTextOff</a>(CharSequence textOff)`,
  
              fullCode: `public void <a href="#setTextOff()">setTextOff</a>(CharSequence textOff)`,

              des: `Is method ka use, SwitchCompat view ke OFF state ke text (jo switch OFF ho jane par display hota hai) ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setTextOff(CharSequence textOff) method, SwitchCompat view ke OFF state ke text ko customize karne ke liye hota hai. Is method ko use karke aap OFF state ke text ko apne pasand ke text (e.g., "OFF", "Disabled", etc.) se replace kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence textOff`,
                        des:`<p>Ye parameter ek CharSequence hai, jo OFF state ke text ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTextOn",
              id: "setTextOn()",
              dataTypeName: `void`,
              code: `<a href="#setTextOn()">setTextOn</a>(CharSequence textOn)`,
  
              fullCode: `public void <a href="#setTextOn()">setTextOn</a>(CharSequence textOn)`,

              des: `Is method ka use, SwitchCompat view ke ON state ke text (jo switch ON ho jane par display hota hai) ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setTextOn(CharSequence textOn) method, SwitchCompat view ke ON state ke text ko customize karne ke liye hota hai. Is method ko use karke aap ON state ke text ko apne pasand ke text (e.g., "ON", "Enabled", etc.) se replace kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `CharSequence textOn`,
                        des:`<p>Ye parameter ek CharSequence hai, jo ON state ke text ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setThumbDrawable",
              id: "setThumbDrawable()",
              dataTypeName: `void`,
              code: `<a href="#setThumbDrawable()">setThumbDrawable</a>(Drawable thumb)`,
  
              fullCode: `public void <a href="#setThumbDrawable()">setThumbDrawable</a>(Drawable thumb)`,

              des: `Is method ka use, SwitchCompat view ke thumb (the round part that slides) ke Drawable ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setThumbDrawable(Drawable thumb) method, SwitchCompat view ke thumb (the round part that slides) ke Drawable ko customize karne ke liye hota hai. Thumb, switch ke toggle (slider) part ko represent karta hai, jisse user ON/OFF states ko select kar sakta hai. Aap is method ko use karke thumb ko apne design requirements ke hisab se customize kar sakte hain, jaise ki custom images, shapes, colors, etc., ka use karke.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable thumb`,
                        des:`<p>Ye parameter ek Drawable object hai, jo SwitchCompat view ke thumb ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setThumbResource",
              id: "setThumbResource()",
              dataTypeName: `void`,
              code: `<a href="#setThumbResource()">setThumbResource</a>(int resId)`,
  
              fullCode: `public void <a href="#setThumbResource()">setThumbResource</a>(int resId)`,

              des: ` Is method ka use, SwitchCompat view ke thumb (the round part that slides) ke Drawable ko ek resource ID se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setThumbResource(int resId) method, SwitchCompat view ke thumb (the round part that slides) ke Drawable ko ek resource ID se set karne ke liye hota hai. Aap is method ko use karke thumb ko ek Drawable resource se replace kar sakte hain, jaise ki custom images, shapes, colors, etc.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int resId`,
                        des:`<p>Ye parameter ek integer value hai, jo thumb Drawable resource ka reference hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setThumbTextPadding",
              id: "setThumbTextPadding()",
              dataTypeName: `void`,
              code: `<a href="#setThumbTextPadding()">setThumbTextPadding</a>(int pixels)`,
  
              fullCode: `public void <a href="#setThumbTextPadding()">setThumbTextPadding</a>(int pixels)`,

              des: `Is method ka use, SwitchCompat view ke thumb (the round part that slides) aur text (ON/OFF states ke text) ke beech mein padding ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setThumbTextPadding(int pixels) method, SwitchCompat view ke thumb aur text ke beech mein padding ko set karne ke liye hota hai. Jab aap SwitchCompat view mein ON/OFF states ke text ko display karte hain, to thumb aur text ke beech mein kuch space hona visually appealing hota hai. Is method ka use karke aap thumb aur text ke beech mein kitna space (padding) dena chahte hain, wo customize kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int pixels`,
                        des:`<p>Ye parameter ek integer value hai, jo thumb aur text ke beech mein padding ko pixels mein represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setThumbTintList",
              id: "setThumbTintList()",
              dataTypeName: `void`,
              code: `<a href="#setThumbTintList()">setThumbTintList</a>(@Nullable ColorStateList tint)`,
  
              fullCode: `public void <a href="#setThumbTintList()">setThumbTintList</a>(@Nullable ColorStateList tint)`,

              des: `Is method ka use, SwitchCompat view ke thumb (the round part that slides) ke tint color ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setThumbTintList(@Nullable ColorStateList tint) method, SwitchCompat view ke thumb ke tint color ko set karne ke liye hota hai. Tint color ek state-aware color list hota hai, jiska use thumb ko various states (normal, pressed, disabled, etc.) ke liye different colors dene ke liye kiya jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable ColorStateList tint`,
                        des:`<p>Ye parameter ek ColorStateList object hai, jo thumb ke tint colors ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setThumbTintMode",
              id: "setThumbTintMode()",
              dataTypeName: `void`,
              code: `<a href="#setThumbTintMode()">setThumbTintMode</a>(@Nullable PorterDuff.Mode tintMode)`,
  
              fullCode: `public void <a href="#setThumbTintMode()">setThumbTintMode</a>(@Nullable PorterDuff.Mode tintMode)`,

              des: `Is method ka use, SwitchCompat view ke thumb (the round part that slides) ke tint mode ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setThumbTintMode(@Nullable PorterDuff.Mode tintMode) method, SwitchCompat view ke thumb ke tint mode ko set karne ke liye hota hai. Tint mode, thumb ke tint color ko apply karne ke tarike ko control karta hai. Aap is method ka use karke thumb ke tint color ko normal color mode, alpha blending mode, multiply mode, etc., jaise tarike se apply kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable PorterDuff.Mode tintMode`,
                        des:`<p>Ye parameter ek PorterDuff.Mode object hai, jo thumb ke tint color ko apply karne ke tarike ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },





            {
              dep: false,
              name: "setTrackDrawable",
              id: "setTrackDrawable()",
              dataTypeName: `void`,
              code: `<a href="#setTrackDrawable()">setTrackDrawable</a>(Drawable track)`,
  
              fullCode: `public void <a href="#setTrackDrawable()">setTrackDrawable</a>(Drawable track)`,

              des: `Is method ka use, SwitchCompat view ke track (the background of the switch) ke Drawable ko customize karne ke liye hota hai.`,
  
              longDes: `
              <p>setTrackDrawable(Drawable track) method, SwitchCompat view ke track ke Drawable ko customize karne ke liye hota hai. Track, switch ke background ko represent karta hai, jisse thumb (the round part that slides) ON/OFF states ke beech slide karta hai. Aap is method ko use karke track ko apne design requirements ke hisab se customize kar sakte hain, jaise ki custom images, shapes, colors, etc.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Drawable track`,
                        des:`<p>Ye parameter ek Drawable object hai, jo SwitchCompat view ke track ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTrackResource",
              id: "setTrackResource()",
              dataTypeName: `void`,
              code: `<a href="#setTrackResource()">setTrackResource</a>(int resId)`,
  
              fullCode: `public void <a href="#setTrackResource()">setTrackResource</a>(int resId)`,

              des: `Is method ka use, SwitchCompat view ke track (the background of the switch) ke Drawable ko ek resource ID se set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTrackResource(int resId) method, SwitchCompat view ke track (the background of the switch) ke Drawable ko ek resource ID se set karne ke liye hota hai. Aap is method ko use karke track ko ek Drawable resource se replace kar sakte hain, jaise ki custom images, shapes, colors, etc.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int resId`,
                        des:`<p>Ye parameter ek integer value hai, jo track Drawable resource ka reference hai.</p>`,
                      },
                    ],
                  },
              ],
            },




            {
              dep: false,
              name: "setTrackTintList",
              id: "setTrackTintList()",
              dataTypeName: `void`,
              code: `<a href="#setTrackTintList()">setTrackTintList</a>(@Nullable ColorStateList tint)`,
  
              fullCode: `public void <a href="#setTrackTintList()">setTrackTintList</a>(@Nullable ColorStateList tint)`,

              des: `Is method ka use, SwitchCompat view ke track (the background of the switch) ke tint color ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTrackTintList(@Nullable ColorStateList tint) method, SwitchCompat view ke track ke tint color ko set karne ke liye hota hai. Tint color ek state-aware color list hota hai, jiska use track ko various states (normal, pressed, disabled, etc.) ke liye different colors dene ke liye kiya jata hai.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable ColorStateList tint`,
                        des:`<p>Ye parameter ek ColorStateList object hai, jo track ke tint colors ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "setTrackTintMode",
              id: "setTrackTintMode()",
              dataTypeName: `void`,
              code: `<a href="#setTrackTintMode()">setTrackTintMode</a>(@Nullable PorterDuff.Mode tintMode)`,
  
              fullCode: `public void <a href="#setTrackTintMode()">setTrackTintMode</a>(@Nullable PorterDuff.Mode tintMode)`,

              des: `Is method ka use, SwitchCompat view ke track (the background of the switch) ke tint mode ko set karne ke liye hota hai.`,
  
              longDes: `
              <p>setTrackTintMode(@Nullable PorterDuff.Mode tintMode) method, SwitchCompat view ke track ke tint mode ko set karne ke liye hota hai. Tint mode, track ke tint color ko apply karne ke tarike ko control karta hai. Aap is method ka use karke track ke tint color ko normal color mode, alpha blending mode, multiply mode, etc., jaise tarike se apply kar sakte hain.</p>
              `,

              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@Nullable PorterDuff.Mode tintMode`,
                        des:`<p>Ye parameter ek PorterDuff.Mode object hai, jo track ke tint color ko apply karne ke tarike ko represent karta hai.</p>`,
                      },
                    ],
                  },
              ],
            },



            {
              dep: false,
              name: "toggle",
              id: "toggle()",
              dataTypeName: `void`,
              code: `<a href="#toggle()">toggle</a>()`,
  
              fullCode: `public void <a href="#toggle()">toggle</a>()`,

              des: `Is method ka use, SwitchCompat view ke current state (ON/OFF) ko toggle karne ke liye hota hai.`,
  
              longDes: `
              <p>toggle() method, SwitchCompat view ke current state ko toggle (switch) karne ke liye hota hai. Agar SwitchCompat view ON state mein hai, to toggle() method call karne se uska state OFF ho jata hai, aur agar SwitchCompat view OFF state mein hai, to toggle() method call karne se uska state ON ho jata hai. Is method ko programmatically switch ki position toggle karne ke liye use kiya jata hai.</p>
              `,

              parameter: [],
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
  
              des: `drawableStateChanged() method, SwitchCompat class mein ek overridden method hai, jo Drawable state changes ke handling ke liye hota hai.`,
  
              longDes: `
                <p>drawableStateChanged() method, SwitchCompat view ke Drawable objects (jaise thumb, track, etc.) ke state changes ko handle karne ke liye hota hai. Jab bhi SwitchCompat view ke state me koi change hota hai (jaise focus, press, enabled, disabled, etc.), to is method ko automatically call kiya jata hai.</p>`,
  
              parameter: [],
            },



            {
              dep: false,
              name: "getThumbPosition",
              id: "getThumbPosition()",
              dataTypeName: `final @FloatRange(from = 0.0, to = 1.0) float`,
              code: `<a href="#getThumbPosition()">getThumbPosition</a>()`,
  
              fullCode: `protected final @FloatRange(from = 0.0, to = 1.0) float <a href="#getThumbPosition()">getThumbPosition</a>()`,
  
              des: `Is method ka use, SwitchCompat view ke thumb (the round part that slides) ka position (yaani ON ya OFF state mein kitna slide hua hai) ko decimal form mein retrieve karne ke liye hota hai.`,
  
              longDes: `
                <p>getThumbPosition() method, SwitchCompat view ke thumb ke position ko retrieve karne ke liye hota hai. Thumb position 0.0 se 1.0 ke beech mein hota hai, jahaan 0.0 state OFF ko represent karta hai, aur 1.0 state ON ko represent karta hai. Decimal form mein thumb position lene se aap precise value prapt kar sakte hain, jisse aap thumb ka position sahi tarah se customize kar sakte hain.</p>`,
  
              parameter: [],
            },



  
            {
              dep: false,
              name: "onCreateDrawableState",
              id: "onCreateDrawableState()",
              dataTypeName: `int[]`,
              code: `<a href="#onCreateDrawableState()">onCreateDrawableState</a>(int extraSpace)`,
  
              fullCode: `protected int[] <a href="#onCreateDrawableState()">onCreateDrawableState</a>(int extraSpace)`,
  
              des: `Is method ka use, SwitchCompat view ke Drawable state ko represent karne ke liye ek integer array (drawable state) ko create karne ke liye hota hai.`,
  
              longDes: `
                <p>onCreateDrawableState(int extraSpace) method, SwitchCompat view ke current state ke basis par Drawable state ko represent karne ke liye ek integer array (drawable state) ko create karta hai. Is method ka use primarily custom Drawable resources ke state-aware colors ya drawables ko handle karne ke liye kiya jata hai.</p>

                <p>extraSpace parameter, drawable state array ke liye extra space allocate karne ke liye hota hai. Is parameter ki value usually 0 hoti hai, lekin agar aapko additional state space ki zaroorat ho to aap ise customize kar sakte hain.</p>

                <p>Method, drawable state array (int[]) return karta hai, jise aap apne custom Drawable resources ke liye use kar sakte hain.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `int extraSpace`,
                        des:`<p>Ek integer value, jo drawable state array ke liye extra space allocate karne ke liye hota hai.</p>`,
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
              code: `<a href="#onDraw()">onDraw</a>(Canvas canvas)`,
  
              fullCode: `protected void <a href="#onDraw()">onDraw</a>(Canvas canvas)`,
  
              des: `onDraw(Canvas canvas) method, SwitchCompat class mein ek overridden method hai, jo SwitchCompat view ke custom drawing (appearance) ko handle karne ke liye hota hai.`,
  
              longDes: `
                <p>onDraw(Canvas canvas) method, SwitchCompat view ke custom drawing (appearance) ko handle karne ke liye hota hai. Jab bhi SwitchCompat view ko display karna hota hai, to ye method automatically call hota hai.</p>

                <p>Is method ka use primarily custom drawing ke liye kiya jata hai, jisse aap apne SwitchCompat view ke appearance ko modify kar sakte hain. Aap is method mein canvas ka use karke custom shapes, colors, and text ko draw kar sakte hain</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `Canvas canvas`,
                        des:`<p>Ye parameter ek Canvas object hai, jiska use drawing operations ko perform karne ke liye kiya jata hai.</p>`,
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
              code: `<a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              fullCode: `protected void <a href="#onLayout()">onLayout</a>(boolean changed, int left, int top, int right, int bottom)`,
  
              des: `Is method ka use primarily child views ke layout ko control karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>onLayout(boolean changed, int left, int top, int right, int bottom) method, SwitchCompat view ke child views (thumb, track, etc.) ko layout karne ke liye hota hai. Jab bhi SwitchCompat view ke size ya position mein koi change hota hai, to ye method automatically call hota hai.</p>

                <p>Is method ka use primarily child views ke layout ko control karne ke liye kiya jata hai. Aap is method mein child views ko specific positions par set kar sakte hain, based on the new size or position of the SwitchCompat view.</p>
                
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean changed`,
                        des:`<p>Ek boolean value, jo batata hai ki view ka size ya position kya change hua hai. Agar view ka koi parameter change hua hai, to ye true hota hai, otherwise false hota hai.</p>`,
                      },
                      {
                        dataTypeName: `int left`,
                        des:`<p>View ka left coordinate.</p>`,
                      },
                      {
                        dataTypeName: `int top`,
                        des:`<p>View ka top coordinate.</p>`,
                      },
                      {
                        dataTypeName: `int right`,
                        des:`<p>View ka right coordinate.</p>`,
                      },
                      {
                        dataTypeName: `int bottom`,
                        des:`<p>View ka bottom coordinate.</p>`,
                      },
                    ],
                  },
              ],
            },
  


  
            {
              dep: false,
              name: "setEnforceSwitchWidth",
              id: "setEnforceSwitchWidth()",
              dataTypeName: `final void`,
              code: `<a href="#setEnforceSwitchWidth()">setEnforceSwitchWidth</a>(boolean enforceSwitchWidth)`,
  
              fullCode: `protected final void <a href="#setEnforceSwitchWidth()">setEnforceSwitchWidth</a>(boolean enforceSwitchWidth)`,
  
              des: `Is method ka use, SwitchCompat view ke switch width ko enforce karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>setEnforceSwitchWidth(boolean enforceSwitchWidth) method, SwitchCompat view ke switch width ko enforce karne ke liye hota hai. Agar aap is method ko true parameter ke saath call karte hain, to SwitchCompat view ke width ko enforce kiya jata hai, jisse thumb aur track ke width properly set ho jate hain.</p>

                <p>SwitchCompat view ka default behavior hota hai ki uske width ko content (thumb, track, text, etc.) ke size ke hisab se adjust kiya jata hai. Lekin kabhi-kabhi aap chahte hain ki view ka width fixed ho aur content ke size ke hisab se view ka width badle.</p>

                <p>setEnforceSwitchWidth(boolean enforceSwitchWidth) method ka use aap tab karte hain jab aap apne custom SwitchCompat view ke dimensions ko customize karna chahte hain aur content ke size ke badle view ka width fixed rehna chahiye.</p>
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `boolean enforceSwitchWidth`,
                        des:`<p>Ek boolean value, jo batata hai ki SwitchCompat view ka width enforce karna hai ya nahi.</p>`,
                      },
                    ],
                  },
              ],
            },
  


  
            {
              dep: false,
              name: "verifyDrawable",
              id: "verifyDrawable()",
              dataTypeName: `boolean`,
              code: `<a href="#verifyDrawable()">verifyDrawable</a>(@NonNull Drawable who)`,
  
              fullCode: `protected boolean <a href="#verifyDrawable()">verifyDrawable</a>(@NonNull Drawable who)`,
  
              des: `Is method ka use, SwitchCompat view ke drawable resources ko verify karne ke liye kiya jata hai.`,
  
              longDes: `
                <p>verifyDrawable(@NonNull Drawable who) method, SwitchCompat view ke drawable resources ko verify karne ke liye hota hai. Jab bhi view ke drawable resources ka appearance change hota hai ya unmein koi invalid change hota hai, to ye method automatically call hota hai.</p>

                <p>Drawable resources ko verify karne ka mukhya uddeshya ye hai ki agar koi drawable resource invalid ho ya purane ho jaye, to aap unhe refresh kar sakein ya phir custom behavior implement kar sakein.</p>

                <p>Method, true ya false return karta hai, jisse bataya jata hai ki specified Drawable object valid hai ya nahi.</p>
                `,
  
              parameter: [
                {
                    name: "Parameters",
                    success: true,
                    parameter: [
                      {
                        dataTypeName: `@NonNull Drawable who`,
                        des:`<p>Ek Drawable object, jisko verify karna hai.</p>`,
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
  