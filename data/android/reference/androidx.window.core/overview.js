

module.exports.androidx_window_core = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.core",
        overview: [
          {
            name: "Annotations",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.core/Annotations/ExperimentalWindowApi`,
                name: `ExperimentalWindowApi`,
                id: "",
                des: `<p>Is annotation ka use, experimental window APIs ko annotate karne ke liye hota hai.</p>`,
              },
            ],
          },
 
        ]
          }
    })
    console.log("okh");
}