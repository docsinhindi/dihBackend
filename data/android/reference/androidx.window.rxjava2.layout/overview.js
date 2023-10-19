

module.exports.androidx_window_rxjava2_layout = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.rxjava2.layout",
        overview: [

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.rxjava2.layout/class/WindowInfoTrackerRx`,
                name: `WindowInfoTrackerRx`,
                id: "",
                des: `<p>Yeh class WindowInfoTracker interface ko implement karti hai aur RxJava 2 observables ka use karke window layout information ko track karti hai. RxJava 2 observables ka use karke aap window layout changes ko observe kar sakte hain aur un par reaction kar sakte hain.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}