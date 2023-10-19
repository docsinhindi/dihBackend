

module.exports.androidx_window_layout = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.layout",
        overview: [
          {
            name: "Interfaces",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.layout/interface/DisplayFeature`,
                name: `DisplayFeature`,
                id: "",
                des: `<p>Ye interface display ke specific features ko represent karta hai, jaise ki cutout, fold, ya hinge. Iska use display ke geometry aur layout information ko describe karne ke liye hota hai, jisse aap display ke alag-alag areas ko identify aur handle kar sakte hain.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.window.layout/interface/FoldingFeature`,
                name: `FoldingFeature`,
                id: "",
                des: `<p>Ye interface ek specific type of display feature ko represent karta hai jo device ke folding mechanism ya hinge ke sath juda hota hai. Iska use device ke foldable design elements ko describe karne aur unke attributes ko access karne ke liye hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.window.layout/interface/WindowInfoTracker`,
                name: `WindowInfoTracker`,
                id: "",
                des: `<p>Is interface ka use window layout information ko track karne ke liye hota hai, jisse aap screen space mein window ke changes ko monitor aur handle kar sakte hain. Yeh interface window layouts ke updates ko capture karne aur unhe handle karne ke methods provide karta hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.window.layout/interface/WindowMetricsCalculator`,
                name: `WindowMetricsCalculator`,
                id: "",
                des: `<p>Is interface ka use display metrics aur window layout information ko calculate aur provide karne ke liye hota hai. Yeh interface screen size, display metrics, aur window layout information ko calculate karke provide karta hai jo layout optimizations aur UI rendering mein madadgar hota hai.</p>`,
              },
            ],
          },

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.layout/class/FoldingFeature.OcclusionType`,
                name: `FoldingFeature.OcclusionType`,
                id: "",
                des: `<p>Yeh class ek enumeration hai jo FoldingFeature interface ke saath juda hota hai aur foldable device ke folding feature ki occlusion type ko represent karta hai. Occlusion type bataata hai ki folding mechanism ke specific part ko kis tarah se occlude (cover) kiya gaya hai jab device fold kiya gaya hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.layout/class/FoldingFeature.Orientation`,
                name: `FoldingFeature.Orientation`,
                id: "",
                des: `<p>Yeh class ek enumeration hai jo FoldingFeature interface ke saath juda hota hai aur foldable device ke folding feature ki orientation ko represent karta hai. Folding feature ka orientation batata hai ki folding mechanism kis direction mein fold hota hai, jaise ki vertically (upar se neeche) ya horizontally (left se right).</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.layout/class/FoldingFeature.State`,
                name: `FoldingFeature.State`,
                id: "",
                des: `<p>Yeh class ek enumeration hai jo FoldingFeature interface ke saath juda hota hai aur foldable device ke folding feature ki state ko represent karta hai. Folding feature ka state batata hai ki folding mechanism kis state mein hai, jaise ki folded, half-open, ya flat.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.layout/class/WindowLayoutInfo`,
                name: `WindowLayoutInfo`,
                id: "",
                des: `<p>Yeh class window layout information ko represent karti hai jo screen par dikh rahe windows ke positions, sizes, aur visibility ko describe karte hain. Iska use UI elements ko optimize aur render karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.layout/class/WindowMetrics`,
                name: `WindowMetrics`,
                id: "",
                des: `<p>Yeh class display ke metrics aur window layout information ko represent karti hai. Iska use screen size, display metrics, aur window layout information ko retrieve aur access karne ke liye hota hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}