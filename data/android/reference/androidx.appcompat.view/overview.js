

module.exports.androidx_appcompat_view = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.appcompat.view",
        overview: [
          {
            name: "Interfaces",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.view/interface/ActionMode.Callback`,
                name: `ActionMode.Callback`,
                id: "",
                des: `<p>Ye interface, ActionMode ke events aur actions ko handle karne ke liye upayog hota hai.</p>`,
              },
              {
                dep: true,
                url:`/android/reference/androidx.appcompat.view/interface/CollapsibleActionView`,
                name: `CollapsibleActionView`,
                id: "",
                des: `<p>Ye interface, ActionBar mein collapsible (jhuke) hone wale action views ke liye support pradan karta hai.</p>`,
              },
            ],
          },

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.view/class/ActionMode`,
                name: `ActionMode`,
                id: "",
                des: `<p>ActionMode class, modern ActionBar ke liye support pradan karta hai aur contextual actions ko handle karne ke liye upayog hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.view/class/ContextThemeWrapper`,
                name: `ContextThemeWrapper`,
                id: "",
                des: `<p>Ye class, ContextWrapper class se extend hoti hai aur theme ko apply karne ke liye use hoti hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}