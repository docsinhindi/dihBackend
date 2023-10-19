module.exports.androidx_window = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window",
        overview: [

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window/class/WindowProperties`,
                name: `WindowProperties`,
                id: "",
                des: `<p>Is class ka use Window Manager ke properties aur states ko access karne ke liye hota hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}