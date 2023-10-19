
module.exports.androidx_appcompat_content_res =  {
    title: "androidx.appcompat.content.res",
    loc: "Android Developer > Reference",

    des: `androidx.appcompat.content.res package AndroidX library ka ek hissa hai. Is package me, application resources ko load karne ke liye classes and interfaces provide kiye gaye hai. Ye package backward compatibility ke liye use kiya jata hai, jisse hum Android ke older versions me bhi Material Design ke features ka istemal kar sake.`,

    link: "/android/reference/androidx.appcompat.content.res/overview",
    suggestion: [
      {
        title: "AppCompatResources",
        loc: "Android Developer > Reference > Class",

        des: `AppCompatResources class, androidx.appcompat.content.res package me mojud ek utility class hai jo hum Material Design ke resources ko backward compatibility ke sath load karne me help karta hai.`,

        link: "/android/reference/androidx.appcompat.content.res/class/AppCompatResources",
        suggestion: [
          {
            title: "getColorStateList | AppCompatResources",

            loc: "Android Developer > Reference > Class > AppCompatResources",

            des: `Ye method, specified color resource ke liye ColorStateList object provide karta hai. ColorStateList object, color ke states ko define karta hai, jaise normal, pressed, focused, disabled etc. Isse, view ke state ke anusar corresponding color ka selection kiya ja sakta hai.`,

            link: "/android/reference/androidx.appcompat.content.res/class/AppCompatResources#getColorStateList()",
          },
          {
            title: "getDrawable | AppCompatResources",

            loc: "Android Developer > Reference > Class > AppCompatResources",

            des: `Ye method, specified drawable resource ke liye Drawable object provide karta hai. Agar device Android API version 21 se kam hai, to is method se retrieve ki gayi Drawable, pre-Lollipop version ke devices me bhi support ki jati hai.

            Is method ka upyog, developer kisi bhi view ke background, image source ya kisi bhi drawable resource ko retrieve karne ke liye kar sakta hai. Isse, app ke different views ke liye ek hi drawable resource ka reuse kiya jaa sakta hai, jisse app ke size aur performance par positive impact padta hai.`,

            link: "/android/reference/androidx.appcompat.content.res/class/AppCompatResources#getDrawable()",
          },
        ]
      },
    ],
  };