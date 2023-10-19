

module.exports.androidx_appcompat_content_res = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.appcompat.content.res",
        overview: [

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.content.res/class/AppCompatResources`,
                name: `AppCompatResources`,
                id: "",
                des: `<p>AppCompatResources class ka use, AppCompat theme aur styling ke sath resources ko load aur manage karne ke liye kiya jata hai. Is class ke methods, Android resources ke backward compatibility ke sath AppCompat library ke theme, drawable, color, aur anya resources ko resolve aur retrieve karne ka kaam karte hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}