
module.exports.androidx_window_testing_layout = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.testing.layout",
        overview: [

          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.testing.layout/class/DisplayFeatureTesting`,
                name: `DisplayFeatureTesting`,
                id: "",
                des: `<p>Yeh class testing purposes ke liye display features ko simulate karne aur test karne me use hoti hai. Display features jaise ki folding, hinge, notch, etc., ko test karne ke liye is class ka use kiya ja sakta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.testing.layout/class/FoldingFeatureTestingConstants`,
                name: `FoldingFeatureTestingConstants`,
                id: "",
                des: `<p>Yeh class testing purposes ke liye folding feature constants ko define karne me use hoti hai. Folding features ko test karne ke liye predefined constants ko provide karne ke liye is class ka use kiya ja sakta hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.testing.layout/class/WindowLayoutInfoPublisherRule`,
                name: `WindowLayoutInfoPublisherRule`,
                id: "",
                des: `<p>Yeh class activity embedding scenarios ko testing ke liye use hoti hai. Iska use window layout info ko simulate aur test karne me hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.testing.layout/class/WindowLayoutInfoTesting`,
                name: `WindowLayoutInfoTesting`,
                id: "",
                des: `<p>Yeh class activity embedding scenarios ko testing ke liye use hoti hai. Iska use window layout info ko simulate aur test karne me hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.testing.layout/class/WindowMetricsCalculatorRule`,
                name: `WindowMetricsCalculatorRule`,
                id: "",
                des: `<p>Yeh class activity embedding scenarios ko testing ke liye use hoti hai. Iska use window metrics ko simulate aur test karne me hota hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}