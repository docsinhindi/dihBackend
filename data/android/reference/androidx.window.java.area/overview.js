

module.exports.androidx_window_java_area = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.java.area",
        overview: [

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.java.area/class/WindowAreaControllerCallbackAdapter`,
                name: `WindowAreaControllerCallbackAdapter`,
                id: "",
                des: `<p>Is class ka use window area controller ke callback events ko handle karne ke liye hota hai. Window area controller, screen space ko alag-alag areas mein divide karta hai jisse aap different windows ko manage aur arrange kar sakte hain. Callback adapter, in events ko handle karne ke liye ek convenient way provide karta hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}