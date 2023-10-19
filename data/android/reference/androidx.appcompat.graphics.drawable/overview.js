

module.exports.androidx_appcompat_graphics_drawable = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.appcompat.graphics.drawable",
        overview: [

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat`,
                name: `AnimatedStateListDrawableCompat`,
                id: "",
                des: `<p>AnimatedStateListDrawableCompat class ka use, state-based animations ko handle karne ke liye kiya jata hai. Ye class state transitions aur animations ko define aur manage karne me madad karta hai, jisse UI elements ke appearance me smooth aur seamless transitions hote hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat`,
                name: `DrawableContainerCompat`,
                id: "",
                des: `<p>DrawableContainerCompat class ka use, multiple drawables ko manage karne aur display karne ke liye kiya jata hai. Is class ke methods, DrawableContainer ke features aur behavior ko backward compatibility ke sath provide karte hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat`,
                name: `DrawableWrapperCompat`,
                id: "",
                des: `<p>DrawableWrapperCompat class ka use, existing Drawable objects ko wrap aur customize karne ke liye kiya jata hai. Is class ke methods, DrawableWrapper ke features aur behavior ko backward compatibility ke sath provide karte hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable`,
                name: `DrawerArrowDrawable`,
                id: "",
                des: `<p>DrawerArrowDrawable class ka use, navigation drawer icon ko customize aur animate karne ke liye kiya jata hai. Is class ke methods, navigation drawer icon ke appearance, direction, animation, aur styling ko control karne me madad karte hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat`,
                name: `StateListDrawableCompat`,
                id: "",
                des: `<p>StateListDrawableCompat class ka use, view ke state changes ke sath different drawables ko handle aur display karne ke liye kiya jata hai. Is class ke methods, StateListDrawable ke features aur behavior ko backward compatibility ke sath provide karte hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}