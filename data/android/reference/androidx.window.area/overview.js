

module.exports.androidx_window_area = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.area",
        overview: [
          {
            name: "Interfaces",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.area/interface/WindowAreaController`,
                name: `WindowAreaController`,
                id: "",
                des: `<p>Is interface ka use, Android devices ke multiple physical areas (jaise ki folding devices ke different screen segments) ko represent aur control karne ke liye hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.window.area/interface/WindowAreaPresentationSessionCallback`,
                name: `WindowAreaPresentationSessionCallback`,
                id: "",
                des: `<p>Is interface ka use, Window Area API ke through Window Area Presentation Session ke events aur states ko monitor karne ke liye hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.window.area/interface/WindowAreaSession`,
                name: `WindowAreaSession`,
                id: "",
                des: `<p>Is interface ka use, Window Area API ke through Window Area Session ke behavior ko control karne aur manage karne ke liye hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.window.area/interface/WindowAreaSessionCallback`,
                name: `WindowAreaSessionCallback`,
                id: "",
                des: `<p>Is interface ka use, Window Area Session ke events aur states ko monitor karne aur handle karne ke liye hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.window.area/interface/WindowAreaSessionPresenter`,
                name: `WindowAreaSessionPresenter`,
                id: "",
                des: `<p>Is interface ka use, Window Area Session ke layouts aur transformations ko control aur render karne ke liye hota hai.</p>`,
              },
            ],
          },

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.area/class/WindowAreaCapability`,
                name: `WindowAreaCapability`,
                id: "",
                des: `<p>Is class ka use, Window Area API ke through devices ke multiple physical areas (jaise ki foldable devices ke different screen segments) ki capabilities ko represent karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.area/class/WindowAreaCapability.Operation`,
                name: `WindowAreaCapability.Operation`,
                id: "",
                des: `<p>Is class ka use, WindowAreaCapability class ke through Window Area capabilities ke supported operations ko represent karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.area/class/WindowAreaCapability.Status`,
                name: `WindowAreaCapability.Status`,
                id: "",
                des: `<p>Is class ka use, WindowAreaCapability class ke through Window Area capabilities ke status ko represent karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.area/class/WindowAreaInfo`,
                name: `WindowAreaInfo`,
                id: "",
                des: `<p>Is class ka use, Window Area API ke through devices ke alag-alag physical areas (jaise ki foldable devices ke different screen segments) ki information ko represent karne ke liye hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.area/class/WindowAreaInfo.Type`,
                name: `WindowAreaInfo.Type`,
                id: "",
                des: `<p>Is class ka use, window area ke type ko represent karne ke liye hota hai. Window area ek rectangular region hota hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}