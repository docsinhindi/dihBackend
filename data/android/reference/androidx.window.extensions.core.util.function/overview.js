

module.exports.androidx_window_extensions_core_util_function = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.extensions.core.util.function",
        overview: [
          {
            name: "Interfaces",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.extensions.core.util.function/interface/Consumer`,
                name: `Consumer`,
                id: "",
                des: `<p>Ye interface functional programming concept se judi hoti hai aur commonly Java 8 ke lambdas aur streams ke sath use hoti hai. Iska main purpose ek value ya object ko accept karna (consume karna) hota hai, lekin koi return value nahi hoti. Consumer interface ka use mainly data processing aur transformations me hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.window.extensions.core.util.function/interface/Function`,
                name: `Function`,
                id: "",
                des: `<p>Ye interface functional programming concept se judi hoti hai aur commonly Java 8 ke lambdas aur streams ke sath use hoti hai. Iska main purpose ek input value ko accept karna aur usse kuch output value generate karna hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.window.extensions.core.util.function/interface/Predicate`,
                name: `Predicate`,
                id: "",
                des: `<p>Ye interface functional programming concept se judi hoti hai aur commonly Java 8 ke lambdas aur streams ke sath use hoti hai. Iska main purpose ek value ya object ko test karna hota hai, jisse kuch condition ko check karke true ya false return kiya jata hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}