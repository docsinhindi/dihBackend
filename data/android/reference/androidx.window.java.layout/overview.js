

module.exports.androidx_window_java_layout= (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.java.layout",
        overview: [
          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.java.layout/class/WindowInfoTrackerCallbackAdapter`,
                name: `WindowInfoTrackerCallbackAdapter`,
                id: "",
                des: `<p>Is class ka use window layout info tracker ke callback events ko handle karne ke liye hota hai. Window layout info tracker, screen space mein windows ke layout changes ko track karta hai. Callback adapter, in events ko handle karne ke liye ek convenient way provide karta hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}