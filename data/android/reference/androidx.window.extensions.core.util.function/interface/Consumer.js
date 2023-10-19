module.exports.Consumer = (req, res) => {
    console.log("okh");
    res.status(200).send({
      name: "Consumer",
      hCode: "@FunctionalInterface</br>public interface <a href='#Consumer'>Consumer</a>&lt;T&gt;",
  
      des:`
      <p>Consumer interface ka use hota hai jab aap ek function ko represent karna chahte hain jo ek value ya object ko accept karega aur usko process karega lekin koi value return nahi karega. Is interface ka use typically data processing operations me hota hai, jaise ki ek collection of elements ko iterate karke har element ko process karna.</p>

      <p>Java me, Consumer interface ke sath aksar lambdas ka use hota hai jo ek concise tarike se functionality ko represent karte hain. Yeh lambdas streams me data processing ko flexible aur readable banane me madad karte hain.</p>
      `,
      
      img: [],
  
      list: {},
  
      summary: {
        success: true,
  
        publicMethod: {
          success: true,
          name: "Public Methods",
  
          method: [
            {
              dep: false,
              name: "accept",
              id: "accept()",
              dataTypeName: `abstract void`,
              code: `<a href="#accept()">accept</a>(T t)`,
  
              fullCode: `abstract void <a href="#accept()">accept</a>(T t)`,

              des: `Is method ka use ek input parameter ko accept karke us par koi action perform karne ke liye hota hai. Consumer interface ka use primarily data ko consume (use) karne wale operations mein hota hai, jaise ki ek collection ko iterate karke har element par koi action perform karna.`,
  
              longDes: `<p>Consumer functional interface ka main use kisi value ko process karne ke liye hota hai, jaise ki use display karna, manipulate karna, ya koi aur action perform karna. Is interface ka instance banakar aap accept() method ko call karke value ko process kar sakte hain.</p>`,
  
              parameter: [
                {
                  name: "Parameters",
                  success: true,
                  parameter: [
                    {
                      dataTypeName: `T t`,
                      des: `<p>Yeh parameter ek generic type T ka object hota hai, jise Consumer accept karta hai aur process karta hai.</p>`,
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    });
  };
  