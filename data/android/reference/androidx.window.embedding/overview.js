
module.exports.androidx_window_embedding = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.embedding",
        overview: [

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/ActivityEmbeddingController`,
                name: `ActivityEmbeddingController`,
                id: "",
                des: `<p>Ye class activity ya activity stack se related operations ke liye use hoti hai. </p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/ActivityEmbeddingOptions`,
                name: `ActivityEmbeddingOptions`,
                id: "",
                des: `<p>Ye class activity embedding feature ke liye configuration options provide karti hai. Activity embedding feature se app ka task window do containers mein split ho jaata hai: primary aur secondary.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/ActivityFilter`,
                name: `ActivityFilter`,
                id: "",
                des: `<p>Ye class activity embedding feature ke liye filter options provide karti hai. Activity embedding feature se app ka task window do containers mein split ho jaata hai: primary aur secondary.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/ActivityRule`,
                name: `ActivityRule`,
                id: "",
                des: `<p>Ye class activity embedding feature ke liye rules provide karti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/ActivityRule.Builder`,
                name: `ActivityRule.Builder`,
                id: "",
                des: `<p> Ye class activity embedding feature ke liye ActivityRule object ko build karne ke liye use hoti hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/ActivityStack`,
                name: `ActivityStack`,
                id: "",
                des: `<p>ActivityStack class ka use karke aap apne app ke activities ko ek stack mein manage kar sakte hain.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/EmbeddingAspectRatio`,
                name: `EmbeddingAspectRatio`,
                id: "",
                des: `<p>Is class ka use Window embedding scenario mein window ka aspect ratio set karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/EmbeddingRule`,
                name: `EmbeddingRule`,
                id: "",
                des: `<p>Is class ka use Window embedding scenario mein window ke behavior aur properties ko define aur customize karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/RuleController`,
                name: `RuleController`,
                id: "",
                des: `<p>Is class ka use Window embedding scenario mein embedding rules ko manage aur apply karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitAttributes`,
                name: `SplitAttributes`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke attributes aur properties ko define aur customize karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitAttributes.Builder`,
                name: `SplitAttributes.Builder`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke attributes aur properties ko define aur customize karne ke liye hota hai, SplitAttributes object create karte waqt.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitAttributes.LayoutDirection`,
                name: `SplitAttributes.LayoutDirection`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke embedded window ki layout direction (left-to-right or right-to-left) ko define aur customize karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitAttributes.SplitType`,
                name: `SplitAttributes.SplitType`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke embedded window ki split type ko define aur customize karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitAttributesCalculatorParams`,
                name: `SplitAttributesCalculatorParams`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke attributes ko calculate karne ke liye hota hai, jaise ki embedded window ka split type, layout direction, width, height, etc.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitController`,
                name: `SplitController`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke control aur management ke liye hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek embedded window ko display kiya jata hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitController.SplitSupportStatus`,
                name: `SplitController.SplitSupportStatus`,
                id: "",
                des: `<p>Is class ka use kiya jata hai Split-Screen mode ke support status ko determine karne ke liye, yani kya device Split-Screen mode ko support karta hai ya nahi.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitInfo`,
                name: `SplitInfo`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke embedded window ki information ko represent karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitPairFilter`,
                name: `SplitPairFilter`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke filters ko represent aur manage karne ke liye hota hai, jo ek pair (dono) of embedded windows ko match karne ke liye use hote hain.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitRule`,
                name: `SplitRule`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke rules ko represent aur manage karne ke liye hota hai, jahan pe screen ko multiple sections mein divide kiya jata hai aur har section mein ek pair (dono) of embedded windows ko display kiya jata hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitPairRule.Builder`,
                name: `SplitPairRule.Builder`,
                id: "",
                des: `<p>Is class ka use SplitPairRule object ko create aur configure karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitPlaceholderRule`,
                name: `SplitPlaceholderRule`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke placeholder windows ke liye rule ko represent aur manage karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitPlaceholderRule.Builder`,
                name: `SplitPlaceholderRule.Builder`,
                id: "",
                des: `<p>Is class ka use SplitPlaceholderRule object ko create aur configure karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitRule`,
                name: `SplitRule`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke embedded windows, placeholder windows, aur unke rules ko manage karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.embedding/class/SplitRule.FinishBehavior`,
                name: `SplitRule.FinishBehavior`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke rules mein define kiye gaye behavior ko represent aur manage karne ke liye hota hai, jab embedded windows ko finish kiya jaye.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}