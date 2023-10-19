

module.exports.androidx_window_testing_embedding = (req, res)=>{
    res.status(200).send({
      overview:{
        name:"androidx.window.testing.embedding",
        overview: [
          {
            name: "Classes",
            success: false,
    
            arr: [
              {
                dep: false,
                url:`/android/reference/androidx.window.testing.embedding/class/ActivityEmbeddingRule`,
                name: `ActivityEmbeddingRule`,
                id: "",
                des: `<p>Yeh class activity embedding scenarios ko test karne ke liye use hoti hai. Iska use UI components ko embedding scenarios mein test karne me hota hai jahan ek activity ko dusre activity ke andar ya uske saath associate kiya jata hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.testing.embedding/class/TestActivityStack`,
                name: `TestActivityStack`,
                id: "",
                des: `<p>Yeh class activity embedding scenarios ko testing ke liye use hoti hai. Iska use activity embedding aur window stacking behavior ko simulate aur test karne me hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.testing.embedding/class/TestSplitAttributesCalculatorParams`,
                name: `TestSplitAttributesCalculatorParams`,
                id: "",
                des: `<p>Yeh class activity embedding scenarios ko testing ke liye use hoti hai. Iska use window split attributes ko simulate aur test karne me hota hai.</p>`,
              },
              {
                dep: false,
                url:`/android/reference/androidx.window.testing.embedding/class/TestSplitInfo`,
                name: `TestSplitInfo`,
                id: "",
                des: `<p>Yeh class activity embedding scenarios ko testing ke liye use hoti hai. Iska use window split behavior ko simulate aur test karne me hota hai.</p>`,
              },
            ],
          },
        ]
          }
    })
    console.log("okh");
}