

module.exports.androidx_window_java_embedding = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.java.embedding",
        overview: [

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.java.embedding/class/SplitControllerCallbackAdapter`,
                name: `SplitControllerCallbackAdapter`,
                id: "",
                des: `<p>Is class ka use Split-Screen mode ke controller ke callback events ko handle karne ke liye hota hai. Split-Screen mode mein, screen space ko multiple sections mein divide kiya jata hai aur har section mein alag-alag windows ko display kiya jata hai. Callback adapter, in events ko handle karne ke liye ek convenient way provide karta hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}