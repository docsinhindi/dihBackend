

module.exports.androidx_window_core_layout = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.core.layout",
        overview: [

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.core.layout/class/WindowHeightSizeClass`,
                name: `WindowHeightSizeClass`,
                id: "",
                des: `<p>Is class ka use, window ke available height ko compact, medium, ya expanded size classes mein classify karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.core.layout/class/WindowSizeClass`,
                name: `WindowSizeClass`,
                id: "",
                des: `<p>WindowSizeClass class ka use, window ke available width aur height ko compact, medium, ya expanded size classes mein classify karne ke liye hota hai</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.core.layout/class/WindowWidthSizeClass`,
                name: `WindowWidthSizeClass`,
                id: "",
                des: `<p>WindowWidthSizeClass class ka use, window ke available width ko compact, medium, ya expanded size classes mein classify karne ke liye hota hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}