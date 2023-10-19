module.exports.androidx_appcompat_graphics_drawable = {
  title: "androidx.appcompat.graphics.drawable",
  loc: "Android Developer > Reference",

  des: `androidx.appcompat.graphics.drawable package ke classes, pre-Lollipop version ke devices me bhi vector drawables ka support karne me madad karte hain. Iske alawa, in classes ka upyog karke, developer apne apps me custom drawables aur transitions create aur implement kar sakta hai.`,

  link: "/android/reference/androidx.appcompat.graphics.drawable/overview",
  suggestion: [
    {
      title: "AnimatedStateListDrawableCompat",
      loc: "Android Developer > Reference > Class",

      des: `AnimatedStateListDrawableCompat class, androidx.appcompat.graphics.drawable package me mojud ek drawable hai jo, state-list animation provide karta hai.

        Ye drawable ek sequence ke sath multiple drawables ko combine karta hai aur inhe alag-alag states ke hisab se display karta hai. Ye state-list animation ke sath-sath ek simple animation, fade transitions, cross-fade, aur target states ke bich custom animation ka bhi support karta hai.`,

      link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat",
      suggestion: [
        {
          title:
            "AnimatedStateListDrawableCompat | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat > Constructor",

          des: `AnimatedStateListDrawableCompat class me AnimatedStateListDrawableCompat() ek constructor hai, jo ek naya AnimatedStateListDrawableCompat object create karta hai.

            Is constructor ke bina, AnimatedStateListDrawableCompat class ke objects ko create nahi kiya ja sakta hai. Is constructor ka use karke, hum AnimatedStateListDrawableCompat object ko initialize kar sakte hai aur usme states aur drawables add kar sakte hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#AnimatedStateListDrawableCompat()",
        },
        {
          title: "addState | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `addState() method, AnimatedStateListDrawableCompat class ka ek method hai jo AnimatedStateListDrawableCompat object me ek naya state aur uske corresponding drawable ko add karne ke liye use kiya jata hai. Is method ka use karke, hum AnimatedStateListDrawableCompat object ke liye ek list of state/drawable pairs ko build kar sakte hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#addState()",
        },
        {
          title: "addTransition | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `addTransition() method, AnimatedStateListDrawableCompat class ka ek method hai jo state transitions (state changes) ke liye use kiya jata hai. Is method ka use karke hum ek state se dusre state tak ka transition (yaani state change) define kar sakte hai, jisme ek animation drawable ka use hota hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#addTransition()",
        },
        {
          title: "create | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `create() method, AnimatedStateListDrawableCompat class ka ek static method hai jo ek animated state list drawable object ko create karne ke liye use kiya jata hai.

            Is method ke arguments me, hum context parameter me ek Context object pass karte hai, jo drawable resource ke inflate karne ke liye use hota hai. resId parameter me hum ek Drawable resource ID pass karte hai, jise hum create karna chahte hai. theme parameter optional hai aur ek Resources.Theme object ko represent karta hai, jo drawable resource ke theme ke liye use kiya ja sakta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#create()",
        },
        {
          title: "createFromXmlInner | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `createFromXmlInner() method, AnimatedStateListDrawableCompat class ka ek static method hai jo ek XML resource se animated state list drawable object ko create karne ke liye use kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#createFromXmlInner()",
        },
        {
          title: "inflate | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `inflate() method, AnimatedStateListDrawableCompat class ka ek non-static method hai jo ek XML resource ko inflate karke animated state list drawable object ko populate (fill) karne ke liye use kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#inflate()",
        },
        {
          title: "isStateful | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `public boolean isStateful() ek method hai jo AnimationStateListDrawableCompat class mein upalabdh hai. Is method ka upayog AnimationStateListDrawableCompat object ke current state ke stateful hone ki jaanch karne ke liye kiya jaata hai. Agar stateful hai to true, warna false return hota hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#isStateful()",
        },
        {
          title: "jumpToCurrentState | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `public void jumpToCurrentState() method ek AnimationStateListDrawableCompat object ke saath use kiya jaata hai. Is method ka upayog karke, Drawable animation ko uske aantim sthiti mein turant rok diya ja sakta hai. Yeh ek bahut hi upyogi method hai jab aap animation ko jaldi se rokna chahte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#jumpToCurrentState()",
        },
        {
          title: "mutate | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `public @NonNull Drawable mutate() method ek AnimationStateListDrawableCompat object ke saath use kiya jaata hai. Is method ka upayog karke, ek naya drawable object ko banaya ja sakta hai jo ki original drawable se mutate kiya gaya ho.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#mutate()",
        },
        {
          title: "setTint | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `public abstract void setTint(@ColorInt int tint) method ek AnimationStateListDrawableCompat object ke saath use kiya jaata hai. Is method ka upayog karke, Drawable ke saath ek tint color set kiya jaata hai. Ek @ColorInt value ka upyog kiya jaata hai jo tint color ko represent karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#setTint()",
        },
        {
          title: "setTintList | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `public abstract void setTintList(ColorStateList tint) method ek AnimationStateListDrawableCompat object ke saath use kiya jaata hai. Is method ka upayog karke, Drawable ke saath ek tint color list set ki jaati hai. Isme ColorStateList object pass kiya jaata hai jo ki tint color ke multiple states ko represent karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#setTintList()",
        },
        {
          title: "setTintMode | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `public abstract void setTintMode(PorterDuff.Mode tintMode) method ek AnimationStateListDrawableCompat object ke saath use kiya jaata hai. Is method ka upayog karke, Drawable ke saath ek tint mode set ki jaati hai. Isme PorterDuff.Mode object pass kiya jaata hai jo ki tint mode ko represent karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#setTintMode()",
        },
        {
          title: "setVisible | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `public boolean setVisible(boolean visible, boolean restart) method ek AnimationStateListDrawableCompat object ke saath use kiya jaata hai. Is method ke dwara hum ye set kar sakte hain ki drawable ko screen par dikhana hai ya nahi. Is method me, do parameters pass kiye jaate hain: visible aur restart.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#setVisible()",
        },
        {
          title: "onStateChange | AnimatedStateListDrawableCompat",

          loc: "Android Developer > Reference > Class > AnimatedStateListDrawableCompat",

          des: `Jab koi state change hota hai, jaise ki focus, pressed ya selected, tab onStateChange(@NonNull int[] stateSet) method call hota hai aur is method ke dwara drawable ka state update kiya jaata hai. Is method ka ek parameter hai jo int[] stateSet naam se jaana jaata hai, aur yeh current state ko represent karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/AnimatedStateListDrawableCompat#onStateChange()",
        },
      ],
    },
    {
      title: "DrawableContainerCompat",
      loc: "Android Developer > Reference > Class",

      des: `DrawableContainerCompat class ek Drawable container hota hai, jo multiple drawables ko store karne aur manage karne ki capability deta hai. Is class ke objects ka upayog drawables ko ek saath draw karne ke liye kiya jaata hai. Iske saath-saath, is class ke objects ko StateListDrawable aur AnimationDrawable jaise drawables ke sath istemal kiya jaa sakta hai.`,

      link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat",
      suggestion: [
        {
          title: "DrawableContainerCompat | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat > Constructor",

          des: `is constructor ka upayog DrawableContainerCompat class ke objects ko banane ke liye kiya jata hai. Jab is constructor ka upayog kiya jaata hai, toh ek khali DrawableContainerCompat object create ho jaata hai, jo multiple drawables ko store aur manage karne ki capability rakhta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#DrawableContainerCompat()",
        },
        {
          title: "applyTheme | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `applyTheme(@NonNull Resources.Theme theme) method DrawableContainerCompat class ka ek method hai, jo ek Resources.Theme object ko lekar Drawable ke theme attributes ko apply karta hai.

            Resources.Theme object, application ke theme attributes ko hold karne ke liye use kiya jata hai. Is method ka upayog drawable ke theme attributes ko apply karne ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#applyTheme()",
        },
        {
          title: "canApplyTheme | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `Jab ek Drawable ko kisi View me use kiya jaata hai, to us View ke theme attributes drawable ke attributes ko override kar dete hain. Par jab hum Drawable ko kisi View se directly use karte hain, to us samay hum use kar rahe View ke theme attributes nahi hote. Aise samay me, hum canApplyTheme() method ka upyog karke jaan sakte hain ki kya hum us Drawable container ke liye theme attributes apply kar sakte hain ya nahi.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#canApplyTheme()",
        },
        {
          title: "draw | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `draw(@NonNull Canvas canvas) method DrawableContainerCompat class ka ek method hai, jo Drawable container ke andar ke sabhi Drawables ko ek sath draw karne ke liye use kiya jata hai.

            Jab hum ek Drawable container ko kisi View me use karte hain, to isme ek se jyada Drawables hote hain, jo ek sath draw kiye jate hain. draw() method ke upyog se, hum in sabhi Drawables ko ek sath draw kar sakte hain. Is method me, hum ek Canvas object pass karte hain, jis par hum Drawables ko draw karna chahte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#draw()",
        },
        {
          title: "getAlpha | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getAlpha() method DrawableContainerCompat class ka ek method hai, jo Drawable container ke alpha value ko return karta hai. Drawable container me ek se jyada Drawables hote hain, aur in sabhi Drawables ka apna apna alpha value hota hai. Drawable container ka alpha value, in sabhi Drawables ke alpha value ka average hota hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getAlpha()",
        },
        {
          title: "getChangingConfigurations | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getChangingConfigurations() method DrawableContainerCompat class ka ek method hai, jo Drawable container ke changing configurations ke integer value ko return karta hai. Drawable container ke andar ke sabhi Drawables, ek se jyada configurations me change ho sakte hain. Ye configurations, device ke orientation, screen size, locale, theme, etc. jaise factors se depend karte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getChangingConfigurations()",
        },
        {
          title: "getConstantState | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getConstantState() method DrawableContainerCompat class ka ek method hai, jo Drawable container ke ConstantState object ko return karta hai. ConstantState object, ek Drawable ke mutable state ko represent karta hai. Isse ye pata chalta hai ki Drawable mutable hai ya immutable. Immutable Drawable, ek baar hi create hota hai aur uske baad uske state me koi bhi change nahi kiya ja sakta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getConstantState()",
        },
        {
          title: "getCurrent | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getCurrent() method DrawableContainerCompat class ka ek method hai, jo Drawable container ke current Drawable ko return karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getCurrent()",
        },
        {
          title: "getHotspotBounds | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getHotspotBounds(Rect outRect) method, DrawableContainerCompat class ka ek method hai, jo Drawable container ke hotspot ke bounds ko rect ke andar set karta hai.

            Hotspot ek point hota hai, jahan par user ne kisi Drawable ke upar click kiya hai. Is point ke aas-pass ek area hota hai, jise hotspot area kehte hain. getHotspotBounds() method ka use, hotspot area ko rect ke andar set karne ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getHotspotBounds()",
        },
        {
          title: "getIntrinsicHeight | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getIntrinsicHeight() method, DrawableContainerCompat class ka ek method hai, jo Drawable container ka intrinsic height return karta hai.

            Intrinsic height ek aisa height hota hai, jo Drawable ke design aur intrinsic properties se define hota hai. Ye height, Drawable ki actual size se alag hota hai aur iski value intrinsic properties ke aadhar par set ki jaati hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getIntrinsicHeight()",
        },
        {
          title: "getIntrinsicWidth | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getIntrinsicWidth() method, DrawableContainerCompat class ka ek method hai, jo Drawable container ka intrinsic width return karta hai.

            Intrinsic width ek aisa width hota hai, jo Drawable ke design aur intrinsic properties se define hota hai. Ye width, Drawable ki actual size se alag hota hai aur iski value intrinsic properties ke aadhar par set ki jaati hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getIntrinsicWidth()",
        },
        {
          title: "getMinimumHeight | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getMinimumHeight() method, DrawableContainerCompat class ka ek method hai, jo Drawable container ka minimum height return karta hai.

            Minimum height ek aisa height hota hai, jo Drawable ke design aur intrinsic properties se define hota hai. Ye height, Drawable ki actual size se alag hota hai aur iski value intrinsic properties ke aadhar par set ki jaati hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getMinimumHeight()",
        },
        {
          title: "getMinimumWidth | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getMinimumWidth() method, DrawableContainerCompat class ka ek method hai, jo Drawable container ka minimum width return karta hai.

            Minimum width ek aisa width hota hai, jo Drawable ke design aur intrinsic properties se define hota hai. Ye width, Drawable ki actual size se alag hota hai aur iski value intrinsic properties ke aadhar par set ki jaati hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getMinimumWidth()",
        },
        {
          title: "getOpacity | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `getOpacity() method, DrawableContainerCompat class ka ek method hai, jo Drawable container ke opacity level ko define karta hai.

            Ek Drawable ka opacity level uske alpha channel ke base par decide kiya jata hai, jo 0 se 255 ke beech me ho sakta hai, jaha 0, full transparency aur 255, full opacity level ko darshata hai. `,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getOpacity()",
        },
        {
          title: "getOutline | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `public void getOutline(@NonNull Outline outline) method DrawableContainerCompat class ka ek method hai jo Outline object ko provide karta hai jisme shape of the Drawable Container ke outline ki geometry ko store kiya jata hai.

            Jab getOutline() method ko call kiya jata hai, yah Outline object ke through outline ki geometry ko set karta hai. Is method ka use normally view ke shape ko define karne ke liye kiya jata hai. Outline ka use mostly clipping and shadow effects ko define karne ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getOutline()",
        },
        {
          title: "getOutline | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `public void getOutline(@NonNull Outline outline) method DrawableContainerCompat class ka ek method hai jo Outline object ko provide karta hai jisme shape of the Drawable Container ke outline ki geometry ko store kiya jata hai.

            Jab getOutline() method ko call kiya jata hai, yah Outline object ke through outline ki geometry ko set karta hai. Is method ka use normally view ke shape ko define karne ke liye kiya jata hai. Outline ka use mostly clipping and shadow effects ko define karne ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getOutline()",
        },
        {
          title: "getPadding | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `public boolean getPadding(@NonNull Rect padding) method DrawableContainerCompat class ka ek method hai jo drawable container ke liye padding ko retrieve karne ke liye use kiya jata hai. Is method me ek Rect object pass kiya jata hai, jisme padding ki values set ho jati hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#getPadding()",
        },
        {
          title: "invalidateDrawable | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `invalidateDrawable(@NonNull Drawable who) DrawableContainerCompat class ka ek method hai, jo DrawableContainerCompat ke state ke badalne ki suchana deta hai.

            Jab kisi DrawableContainerCompat ke andar ke kisi Drawable ka koi property badalta hai to uss Drawable ke parent DrawableContainerCompat ko invalidateDrawable() method ko call karke inform kiya jata hai ki ek ya multiple Drawable ke state me changes ho chuke hai. Isse DrawableContainerCompat uske child Drawable(s) ko invalid declare karta hai taki wo apna state update kar sake.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#invalidateDrawable()",
        },
        {
          title: "isAutoMirrored | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `DrawableContainerCompat class ka isAutoMirrored() method ek boolean value return karta hai, jo yeh batata hai ki kya DrawableContainer me jitne bhi Drawable hai unme se koi bhi RTL(right-to-left) layout par show hone par automatically mirror kiya jana chahiye ya nahi. Agar isAutoMirrored() method true return karta hai to DrawableContainer me jitne bhi Drawable hai unme se koi bhi RTL layout par show hone par automatically mirror kiya jayega, aur agar false return karta hai to mirroring ka feature nahi hoga.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#isAutoMirrored()",
        },
        {
          title: "isStateful | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `DrawableContainerCompat class ka isStateful() method ek boolean value return karta hai, jo yeh batata hai ki kya DrawableContainer me jitne bhi Drawable hai unme se koi bhi stateful hai ya nahi. Stateful Drawable ek aisa Drawable hota hai jiska behavior state ke basis par change hota hai, jaise ki StateListDrawable ya AnimatedStateListDrawable.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#isStateful()",
        },
        {
          title: "jumpToCurrentState | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `DrawableContainerCompat class ka jumpToCurrentState() method ek void return type ka method hai, jiska use DrawableContainer me current state me running animated Drawable ko turant stop karne ke liye kiya jata hai.

            Is method ko use karke, DrawableContainer ke current state me running animated Drawable ko turant jump karke unko stop kar diya jata hai. Yeh method DrawableContainer ke sabhi Drawable objects, jaise ki StateListDrawable, AnimatedStateListDrawable etc. ke liye upyogi hota hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#jumpToCurrentState()",
        },
        {
          title: "mutate | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `DrawableContainerCompat class ka mutate() method ek Drawable object ko mutable (modifiable) banaane ke liye hota hai. Is method ko call karne se, DrawableContainerCompat class ke instance me maujood Drawable object ka ek naya mutable copy banaaya jaata hai, jiske baad us Drawable object ko modify karne me asaani hoti hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#mutate()",
        },
        {
          title: "onLayoutDirectionChanged | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `onLayoutDirectionChanged() ek method hai jo DrawableContainerCompat class mein upalabdh hai. Is method ke dwara hum layout direction ke change hone par drawable ke state ko update kar sakte hain.

            Method ka parameter layoutDirection hai, jo int data type ka hota hai. Yeh method Android app ke language direction (LTR or RTL) mein changes karne par call hota hai. Jab hum apne device ke language ko change karte hain to is method ko call kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#onLayoutDirectionChanged()",
        },
        {
          title: "scheduleDrawable | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `Is method ke dwara hum ek drawable ke animation frames ko schedule kar sakte hain, jaise ki ek drawable ko animate karne ke liye ek runnable ko define karke aur use scheduleDrawable() method ke through drawable par schedule kar sakte hain. Yeh method drawable ke animation ko asynchrony karne mein madad karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#scheduleDrawable()",
        },
        {
          title: "setAlpha | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setAlpha(int alpha) ek method hai jo DrawableContainerCompat class mein define kiya gaya hai. Is method ka upyog Drawable ki opacity ko set karne ke liye kiya jata hai. Is method mein ek integer parameter liya jata hai jo opacity level ko darshata hai, jahan 0 transparent hota hai aur 255 fully opaque.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setAlpha()",
        },
        {
          title: "setAutoMirrored | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setAutoMirrored(boolean mirrored) ek method hai jo DrawableContainerCompat class me define kiya gaya hai. Is method ka use DrawableContainerCompat ke children drawables ke auto-mirrored behavior ko enable or disable karne ke liye kiya jata hai. Auto-mirrored behavior ka use left-to-right or right-to-left layouts me drawables ko flip karne ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setAutoMirrored()",
        },
        {
          title: "setColorFilter | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setColorFilter(ColorFilter colorFilter) DrawableContainerCompat class ke method me se ek hai jo ki ek ColorFilter ka upyog karta hai, jo ki ek ColorFilter ke dwara ek Drawable par ek color transformation karne ke liye upyog kiya jata hai. Ye method, is DrawableContainerCompat me maujud sabhi drawables ke liye ek color filter set karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setColorFilter()",
        },
        {
          title: "setDither | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setDither(boolean dither) ek method hai jo DrawableContainerCompat class mein available hai aur iska use dithering ko enable ya disable karne ke liye kiya jata hai. Dithering ek process hai jismein colors ko approximate kiya jata hai, jisse image ko better quality mein display kiya ja sakta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setDither()",
        },
        {
          title: "setEnterFadeDuration | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setEnterFadeDuration(int ms) ek method hai jo DrawableContainer ke fade-in effect ke duration ko set karta hai. Jab DrawableContainer mei ek naya Drawable set kiya jata hai, to wo fade-in effect ke sath appear hota hai. setEnterFadeDuration method se is fade-in effect ke duration ko set kiya ja sakta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setEnterFadeDuration()",
        },
        {
          title: "setExitFadeDuration | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setExitFadeDuration(int ms) ek method hai jo DrawableContainer ke fade-out effect ke duration ko set karta hai. Jab DrawableContainer se ek Drawable hata diya jata hai, to wo fade-out effect ke sath disappear hota hai. setExitFadeDuration method se is fade-out effect ke duration ko set kiya ja sakta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setExitFadeDuration()",
        },
        {
          title: "setHotspot | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setHotspot(float x, float y) ek method hai jo DrawableContainer ke hotspot ko set karta hai. Hotspot ek point hota hai jahan par touch event ka focus hota hai. Is method se DrawableContainer ke hotspot ko x aur y coordinates ke dwara set kiya ja sakta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setHotspot()",
        },
        {
          title: "setHotspotBounds | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setHotspotBounds(int left, int top, int right, int bottom) ek method hai jo DrawableContainer ke hotspot ke bounds (seema) ko set karta hai. Hotspot ek point hota hai jahan par touch event ka focus hota hai. Is method se DrawableContainer ke hotspot ke bounds ko left, top, right, aur bottom coordinates ke dwara set kiya ja sakta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setHotspotBounds()",
        },
        {
          title: "setTint | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setTint(@ColorInt int tintColor) ek method hai jo DrawableContainer ke tint color ko set karta hai. Tint color ek int value hoti hai jo drawable ke original color ko modify karne ke liye upyog hoti hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setTint()",
        },
        {
          title: "setTintList | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setTintList(ColorStateList tint) ek method hai jo DrawableContainer ke tint color list ko set karta hai. Tint color list ek ColorStateList object hota hai jo drawable ke original color ko modify karne ke liye upyog hota hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setTintList()",
        },
        {
          title: "setTintMode | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setTintMode(@NonNull PorterDuff.Mode tintMode) method DrawableContainerCompat class me ek public method hai jo ek specific mode me tinting ke liye use hota hai.

            Is method se tint mode ke liye specific PorterDuff.Mode set kiya jata hai. PorterDuff.Mode ek enum hai jo 2D Graphics me multiple images ke blend ke liye use kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setTintMode()",
        },
        {
          title: "setVisible | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `setVisible(boolean visible, boolean restart) method DrawableContainerCompat class me ek public method hai jo drawable ke visibility ko set karta hai aur animation restart karne me madad karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#setVisible()",
        },
        {
          title: "unscheduleDrawable | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `unscheduleDrawable() ek method hai jo DrawableContainerCompat class ke andar define kiya gaya hai. Yah method ek Drawable se sambandhit Runnable task ko hata deta hai, jo pahle schedule kiya gaya tha. Is method ke dvara hamein Drawable ko schedule karne se roka ja sakta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#unscheduleDrawable()",
        },
        {
          title: "onBoundsChange | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `onBoundsChange() ek Drawable ke abstract method hai jo uske bounds (simply, width and height) ka notification deta hai. DrawableContainerCompat class isko override karti hai aur apne child drawables ke bounds ko update karne ke liye use karti hai. Jab bhi DrawableContainerCompat ke bounds me changes hote hain (jaise ki uska size change ho jaye), to yeh method automatically call ho jata hai. Is method ke through DrawableContainerCompat apne child drawables ke bounds ko update karke unhe layout kar sakti hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#onBoundsChange()",
        },
        {
          title: "onLevelChange | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `onLevelChange(int level) ek Drawable ki subclass DrawableContainerCompat mein ek protected method hai, jo level change event ke liye callback function ki tarah kaam karta hai.

            Is method ka use DrawableContainerCompat ke level-based animations, jaise ki ProgressBar mein level change ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#onLevelChange()",
        },
        {
          title: "onStateChange | DrawableContainerCompat",

          loc: "Android Developer > Reference > Class > DrawableContainerCompat",

          des: `protected boolean onStateChange(@NonNull int[] state) ek DrawableContainerCompat ki protected method hai jo Drawable ke state change hone par call hota hai. Yah method Drawable ke state change ke saath saath unke child Drawable ka state bhi update karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableContainerCompat#onStateChange()",
        },
      ],
    },
    {
      title: "DrawableWrapperCompat",
      loc: "Android Developer > Reference > Class",

      des: `DrawableWrapperCompat ek Drawable ko wrap (encapsulate) karne ke liye ek utility class hai jo AndroidX library me available hai. Is class ko use karke ek Drawable object ko dusre Drawable object ke saath wrap karke unhe ek naya Drawable object create kiya ja sakta hai, jise DrawableWrapperCompat ke methods aur properties se control kiya ja sakta hai.`,

      link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat",
      suggestion: [
        {
          title: "DrawableWrapperCompat | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat > Constructor",

          des: `Is constructor ke dvara, DrawableWrapperCompat object ko banane ke baad, usmein wrapped Drawable object ko set kiya jata hai. Ye wrapped Drawable object ko hum getDrawable() method se prapt kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#DrawableWrapperCompat()",
        },
        {
          title: "draw | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableWrapperCompat class mein public void draw(@NonNull Canvas canvas) method, DrawableWrapperCompat ke dwara wrapp kiye gaye Drawable object ko Canvas par draw karne ke liye upyog kiya jata hai.

            Is method ke jariye, DrawableWrapperCompat dwara wrapped Drawable object ko Canvas par draw kiya jata hai. Canvas ek graphics drawing surface hota hai, jis par hum 2D graphics, shapes, text, images, etc. ko draw kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#draw()",
        },
        {
          title: "getChangingConfigurations | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableWrapperCompat class mein public int getChangingConfigurations() method, wrapped Drawable object ke badalte hue configurations ko prapt karne ke liye upyog kiya jata hai.

            Har ek Android application ke ek set of configurations hoti hai, jaise screen orientation, locale, theme, etc. Jab koi Drawable ek View par draw hota hai, to uske changing configurations bhi consider kiye jate hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getChangingConfigurations()",
        },
        {
          title: "getCurrent | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableWrapperCompat class me public Drawable getCurrent() ek method hai jo ek Drawable object return karta hai. Is method ka upyog wrapped Drawable object ke current state ka pata lagane ke liye kiya jata hai.

            Is method ka upyog karte hue, hum DrawableWrapperCompat class ke ek instance ke current wrapped Drawable object ka reference prapt kar sakte hai. getCurrent() method ke dvara prapt kiye gaye Drawable object ki sthiti, uske set kiye gaye saare states ke adhaar par nirdharit hoti hai, jaise ki iske colorFilter, level, state, alpha, bounds, visibility, etc.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getCurrent()",
        },

        {
          title: "getDrawable | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableWrapperCompat class me public @Nullable Drawable getDrawable() ek method hai jo ek Drawable object return karta hai. Is method ka upyog wrapped Drawable object ke prapt karne ke liye kiya jata hai.

            Is method ka upyog karte hue, hum DrawableWrapperCompat class ke ek instance ke wrapped Drawable object ka reference prapt kar sakte hai. getDrawable() method ke dvara prapt kiye gaye Drawable object me saare states aur unke adhaar par nirdharit kiye gaye properties hote hain, jaise ki iske colorFilter, level, state, alpha, bounds, visibility, etc.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getDrawable()",
        },

        {
          title: "getIntrinsicHeight | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableWrapperCompat class me public int getIntrinsicHeight() ek method hai jo ek integer value return karta hai. Is method ka upyog wrapped Drawable object ke intrinsically height ke prapt karne ke liye kiya jata hai.

            Is method ka upyog karte hue, hum DrawableWrapperCompat class ke ek instance ke wrapped Drawable object ke intrinsic height ko prapt kar sakte hain. Wrapped Drawable object ka intrinsic height uske image ke height ke saath jude hue hote hain, yani ki us image ke natural size ke saath.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getIntrinsicHeight()",
        },

        {
          title: "getIntrinsicWidth | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableWrapperCompat class me public int getIntrinsicWidth() ek method hai jo ek integer value return karta hai. Is method ka upyog wrapped Drawable object ke intrinsically width ke prapt karne ke liye kiya jata hai.

            Is method ka upyog karte hue, hum DrawableWrapperCompat class ke ek instance ke wrapped Drawable object ke intrinsic width ko prapt kar sakte hain. Wrapped Drawable object ka intrinsic width uske image ke width ke saath jude hue hote hain, yani ki us image ke natural size ke saath.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getIntrinsicWidth()",
        },

        {
          title: "getMinimumHeight | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableWrapperCompat class me public int getMinimumHeight() ek method hai jo ek integer value return karta hai. Is method ka upyog wrapped Drawable object ke minimum height ke prapt karne ke liye kiya jata hai.

            Is method ka upyog karte hue, hum DrawableWrapperCompat class ke ek instance ke wrapped Drawable object ke minimum height ko prapt kar sakte hain. Wrapped Drawable object ke minimum height uske saare states me sabse chhota height hota hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getMinimumHeight()",
        },

        {
          title: "getMinimumWidth | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableWrapperCompat class me public int getMinimumWidth() ek method hai jo ek integer value return karta hai. Is method ka upyog wrapped Drawable object ke minimum width ke prapt karne ke liye kiya jata hai.

            Is method ka upyog karte hue, hum DrawableWrapperCompat class ke ek instance ke wrapped Drawable object ke minimum width ko prapt kar sakte hain. Wrapped Drawable object ke minimum width uske saare states me sabse chhota width hota hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getMinimumWidth()",
        },

        {
          title: "getOpacity | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableWrapperCompat class me public int getOpacity() ek method hai jo ek integer value return karta hai. Is method ka upyog wrapped Drawable object ke opacity level ko prapt karne ke liye kiya jata hai.

            Is method ka upyog karte hue, hum DrawableWrapperCompat class ke ek instance ke wrapped Drawable object ke opacity level ko prapt kar sakte hain. Wrapped Drawable object ke opacity level, uske pixel me kitna transparent ya opaque hai, yani ki usme se kitna alpha channel hai, usse decide kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getOpacity()",
        },

        {
          title: "getPadding | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class me public boolean getPadding(Rect padding) ek method hai jo ek Rect object ko pass karke isme wrapped Drawable ke padding values ko set karta hai aur ek boolean value return karta hai.

            Yadi wrapped Drawable ke saare padding values 0 se alag hote hai to, is method dvara true value return kiya jata hai, aur Rect object me wrapped Drawable ke padding values set ho jate hain. Yadi wrapped Drawable ke saare padding values 0 hai to, is method dvara false value return kiya jata hai aur Rect object me koi padding values set nahi hoti hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getPadding()",
        },

        {
          title: "getState | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class me public int[] getState() ek method hai jo ek integer array return karta hai. Is method ka upyog wrapped Drawable object ke current state ke prapt karne ke liye kiya jata hai.

          Is method ka upyog karte hue, hum DrawableCompatWrapper class ke ek instance ke wrapped Drawable object ke current state ko prapt kar sakte hain. Current state, wrapped Drawable object ke current state ke attributes ko darshata hai. Ye attributes, wrapped Drawable ke visual appearance aur uske behavior ko decide karte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getState()",
        },

        {
          title: "getTransparentRegion | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public Region getTransparentRegion() method se, hum wrapped Drawable object ke alpha channel ke transparent region ko prapt kar sakte hain aur use ek Region object mein store kar sakte hain.

          Har ek Drawable object ke andar ek alpha channel hota hai, jo har ek pixel ke liye uske transparency level ko define karta hai. Yadi koi pixel ke alpha value 0 hoti hai, to wo transparent hota hai. Is method ka upyog karke, hum wrapped Drawable object ke alpha channel ke transparent region ko prapt kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#getTransparentRegion()",
        },

        {
          title: "invalidateDrawable | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public void invalidateDrawable(Drawable who) method ka upyog, wrapped Drawable object ke invalidate() method ko invoke karne ke liye kiya jata hai, jab kisi Drawable object ke visible state mein koi changes aate hain.

          Jab koi changes wrapped Drawable object ke visible state mein aate hain, jaise ki uske bounds mein koi changes hote hain ya uske alpha channel mein koi changes hote hain, to usko redraw karne ke liye is method ka upyog kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#invalidateDrawable()",
        },

        {
          title: "isAutoMirrored | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public boolean isAutoMirrored() method, wrapped Drawable object ke liye AutoMirrored feature ke availability ke baare mein jaankari deta hai.

          AutoMirrored feature ka upyog, left-to-right (LTR) language ke locales ke liye hota hai, jahan par text ka direction left-to-right hota hai. Is feature ke through, application developers wrapped Drawable object ke visual appearance ko customize kar sakte hain, jaise ki wrapped Drawable object ko flip ya mirror kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#isAutoMirrored()",
        },

        {
          title: "isStateful | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public boolean isStateful() method, wrapped Drawable object ke liye stateful feature ke availability ke baare mein jaankari deta hai.

          Stateful feature ka upyog, Drawable object ke state ke base par uske visual appearance ko customize karne ke liye kiya jaata hai. Drawable object ke state, application ke interaction ke base par dynamically change hota hai. Jaise ki, Button ke press/unpress state, ImageView ke selected/unselected state, aur CheckBox ke checked/unchecked state.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#isStateful()",
        },

        {
          title: "jumpToCurrentState | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public void jumpToCurrentState() method, wrapped Drawable object ke current state par jump karne ke liye use kiya jata hai.

          Drawable object ke state, application ke interaction ke base par dynamically change ho sakta hai. Is method ka upyog karke, hum wrapped Drawable object ke current state par jump kar sakte hain. Yadi application mein koi interaction hua hai aur uske karan Drawable object ka state change hua hai, to is method ko call karne se Drawable object ke current state par jump kar liya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#jumpToCurrentState()",
        },

        {
          title: "scheduleDrawable | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public void scheduleDrawable(Drawable who, Runnable what, long when) method ka upyog, wrapped Drawable object ke animation aur transition effects ko handle karne ke liye use kiya jata hai.

          Is method me, hum ek Drawable object, ek Runnable object aur ek time delay (when) pass karte hain. Drawable object ke animation ya transition effects ke end tak wait karne ke liye, is method me hum Runnable object ka use karte hain. Runnable object, Drawable object ke animation ya transition effects ke end hone par execute hoga. Time delay (when) ka upyog, Drawable object ke animation ya transition effects ke duration ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#scheduleDrawable()",
        },

        {
          title: "setAlpha | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public void setAlpha(int alpha) method ka upyog, wrapped Drawable object ke alpha value ko set karne ke liye use kiya jata hai.
          
          Is method me, hum ek integer alpha value pass karte hain, jise Drawable object ke alpha value ke roop me set kiya jata hai. Is method ke dwara Drawable object ke alpha value ko set karne se, Drawable object ka transparency level control kiya ja sakta hai. Jitna alpha value badhaya jata hai, utna hi Drawable object ka transparency level decrease ho jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setAlpha()",
        },

        {
          title: "setAutoMirrored | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public void setAutoMirrored(boolean mirrored) method ka upyog, wrapped Drawable object ke AutoMirrored property ko set karne ke liye use kiya jata hai.

          Is method me, hum ek boolean value pass karte hain, jise Drawable object ke AutoMirrored property ke roop me set kiya jata hai. Agar is property ko true kiya jata hai, to Drawable object ka mirror image khud se generate ho jata hai, agar yah RTL (Right-to-Left) layout me show ho raha hai. Is property ko false karne se, Drawable object ka mirror image khud se generate nahi hoga.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setAutoMirrored()",
        },

        {
          title: "setChangingConfigurations | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public void setChangingConfigurations(int configs) method ka upyog, wrapped Drawable object ke configuration changes ko set karne ke liye use kiya jata hai.

          Is method me, hum ek integer value pass karte hain, jise wrapped Drawable object ke changing configurations ke roop me set kiya jata hai. Changing configurations me, device configuration changes jaise ki orientation, language, screen size, etc. include hote hain. Jab koi configuration change hota hai, to system Drawable object ko reset kar deta hai, taki ye naye configuration ke anusar render ho sake. Agar hum ise setChangingConfigurations() method ke through set nahi karte hain, to system Drawable object ko reset nahi kiya jata hai, aur vah purani configuration ke anusar hi render hota hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setChangingConfigurations()",
        },

        {
          title: "setColorFilter | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `public void setColorFilter(ColorFilter cf) DrawableCompatWrapper class ka ek method hai jo drawable ke color filter ko set karne ke liye use kiya jata hai.

          Is method ko use karke hum drawable ke pixel ko modify kar sakte hai. Color filter ka use karke hum drawable ke color, transparency, brightness, contrast, saturation aadi properties ko modify kar sakte hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setColorFilter()",
        },

        {
          title: "setDither | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `public void setDither(boolean dither) DrawableCompatWrapper class ka ek method hai jo drawable ke dithering ko enable ya disable karne ke liye use kiya jata hai.

          Dithering ka use image ko compress karte waqt kiya jata hai. Jab hum kisi image ko compress karte hai, toh image ke colors kam ho jate hai, isse image ke details aur sharpness ko lost hone ka khatra hota hai. Dithering ka use image ke colors ko reduce karne ke liye kiya jata hai, taki image ke details aur sharpness preserve rahe.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setDither()",
        },

        {
          title: "setDrawable | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ke public void setDrawable(@Nullable Drawable drawable) method ka upyog kisi dusre Drawable object ko set karne ke liye kiya jata hai.

          Is method me ek Drawable object pass kiya jata hai jo DrawableCompatWrapper object ke roop me set kiya jata hai. Yadi is method me null pass kiya jata hai, to uske baad se DrawableCompatWrapper object se koi drawable nahi hoga.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setDrawable()",
        },

        {
          title: "setFilterBitmap | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class mein public void setFilterBitmap(boolean filter) method, Drawable object ke liye filter bitmap ko set karne ke liye upyog kiya jaata hai.

          Yadi is method mein true ka value pass kiya jaata hai, to bitmap image ko filter kiya jata hai, aur iske liye high-quality scaling ka use kiya jaata hai. Yadi false ka value pass kiya jaata hai, to bitmap image ko filter nahi kiya jaata hai.
          
          Is method ka upyog kisi Drawable object ke quality ko improve karne ke liye kiya jaata hai. Is method ka upyog mostly ImageView aur ImageButton jaise views ke liye kiya jaata hai, jahan high-quality scaling ki jarurat hoti hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setFilterBitmap()",
        },

        {
          title: "setHotspot | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `DrawableCompatWrapper class ka setHotspot(float x, float y) method ek Drawable ke hotspot ka position set karne ke liye use kiya jata hai. Hotspot ka position us point ko refer karta hai jahan se user ne touch kiya hai.
          
          Is method me ek float x aur float y parameter liya jata hai, jo hotspot ka position determine karte hai. Jab is method ko call kiya jata hai, Drawable ke hotspot ka position set ho jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setHotspot()",
        },

        {
          title: "setHotspotBounds | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `setHotspotBounds(int left, int top, int right, int bottom) ek method hai jo DrawableCompatWrapper class me define kiya gaya hai aur iska upyog drawable ke hotspot ke bounds ko set karne ke liye kiya jata hai.
          
          Hotspot ek point hota hai jo drawable ke andar define kiya jata hai, jahaan touch events ka response diya jata hai. Is method ka upyog hotspot bounds ko set karne ke liye kiya jata hai, jisse aap drawable ke kisi bhi part me touch kar sakte hai aur touch event ka response milega.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setHotspotBounds()",
        },

        {
          title: "setState | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `setState(int[] stateSet) ek Drawable ke halat ko set karne ke liye DrawableCompatWrapper class ka ek method hai. Ye method Drawable ke halat ko set karne ke liye ek halat array ko liye jaata hai. Is method ko call karne se Drawable ki halat nirdharit stateSet array ke anusaar set ho jaati hai.

          Is method ka upyog kisi bhi Drawable object ke halat ko set karne ke liye kiya jaata hai. Jab koi action liya jaata hai, jaise ki button ko press kiya jaata hai, to Drawable ke halat ko setState(int[] stateSet) method ke madhyam se update kiya jaata hai. Yadi Drawable ko multiple states me show karna hai, to setState(int[] stateSet) method ke madhyam se Drawable ke halat ko set kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setState()",
        },

        {
          title: "setTint | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `setTint(int tint) method DrawableCompatWrapper class ka ek method hai, jo ek tint color ko set karta hai jise Drawable par apply kiya jata hai. Tint color se matlab hota hai ki hum ek drawable ko colorize karte hain. Jab hum kisi Drawable ka tint color set karte hain to us Drawable ko tint color ke sath hi draw kiya jata hai.

          Is method ke madhyam se, hum kisi bhi Drawable me ek tint color set kar sakte hain. Ye tint color kisi bhi color format me ho sakta hai jaise ki RGB, ARGB, HEX code, ya color resource ID.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setTint()",
        },

        {
          title: "setTintList | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `setTintList() ek method hai jo Drawable ke tint color ke liye ek ColorStateList set karta hai. ColorStateList ek color ke set hai, jo alag-alag state ke liye alag-alag colors define karta hai. State ek collection hoti hai jise Android system ke dwara Drawable ke liye define kiya jata hai. Kuch common state hai jaise ki focused, pressed, selected, enabled, jiske alag-alag colors defined hote hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setTintList()",
        },

        {
          title: "setTintMode | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `setTintMode(PorterDuff.Mode tintMode) DrawableCompatWrapper class ka ek method hai jiska upyog tintMode ke liye kiya jaata hai. PorterDuff.Mode tintMode un colors ko define karta hai jinhe drawable me tinting ke liye use kiya jaata hai. tintMode ek enum type ka variable hai, jiske alag-alag constant available hote hai like SRC_IN, SRC_OVER, DST_IN etc. Inki madad se hum tint color ko drawable ke upar apply kar sakte hai.
          
          Is method ko use karke hum drawable me tintMode ko set kar sakte hai. Agar hum null value pass karte hai tintMode ke liye to drawable ka tintMode remove ho jaata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setTintMode()",
        },

        {
          title: "setVisible | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `setVisible(boolean visible, boolean restart) ek Drawable method hai jo DrawableCompatWrapper class mein implement kiya gaya hai. Yah method Drawable ki visibility ko set karne aur phir use canvas pe draw karne ke liye use hota hai.

          Is method mein do boolean parameters hote hain: visible aur restart. visible parameter Drawable ko visible ya invisible banane ke liye use hota hai. Agar yah parameter true hai, to Drawable visible hoga, aur agar false hai, to Drawable invisible hoga.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#setVisible()",
        },

        {
          title: "unscheduleDrawable | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `unscheduleDrawable(Drawable who, Runnable what) ek method hai jo DrawableCompatWrapper class me define kiya gaya hai. Is method ke dwara hum drawable ko unschedule kar sakte hain jo ki specified Runnable object ke sath schedule hua hai. Yadi specified Runnable object null hai to sabhi Runnable objects ko unschedule kar diya jata hai.
          
          Is method ke dwara hum kisi bhi Drawable object ke scheduled animation, callback or any other action ko unschedule kar sakte hain jiske liye humne scheduleDrawable() method ka use kiya hai. Ye ek bahut hi important method hai jiske through hum apne Drawable objects ke state ko control kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#unscheduleDrawable()",
        },

        {
          title: "onBoundsChange | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `onBoundsChange(Rect bounds) ek Drawable method hai jo drawable ke bounds ko update karne ke liye use kiya jata hai. Bounds, drawable ka rectangle hota hai jiske andar drawable draw hota hai. Jab bhi drawable ke bounds me koi badlav hota hai, yah method call kiya jata hai. Iss method me, bounds ke naye values ko lekar, drawable ka layout update kiya jata hai, jisme ki drawable ki geometry aur layout ki properties ke according changes kiye jaate hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#onBoundsChange()",
        },

        {
          title: "onLevelChange | DrawableWrapperCompat",

          loc: "Android Developer > Reference > Class > DrawableWrapperCompat",

          des: `onLevelChange(int level) ek Drawable callback method hai jo Drawable ke level ka change ko handle karta hai. Ye method Drawable ke level ke changes ko observe karta hai, jaise ki ProgressBar ke progress ka change. Jab Drawable ka level change hota hai, to ye method automatically call ho jata hai.

          Is method ke andar, hum level parameter ko lekar koi bhi action le sakte hain, jaise ki level ke according Drawable ke size ya shape ka change karna. Ye method boolean value return karta hai, jo level change ko successfully handle karne ki indication deta hai. Agar hum false return karte hain, to ye level change ko handle nahi karega.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawableWrapperCompat#onLevelChange()",
        },

      ],
    },

    {
      title: "DrawerArrowDrawable",
      loc: "Android Developer > Reference > Class",

      des: `DrawerArrowDrawable ka upyog khas taur par navigation drawer toggle icon ko customize karne ke liye kiya jata hai. Is class ke dvara, hum navigation drawer toggle icon ke size, orientation, animation aadi ko aasani se control kar sakte hain. DrawerArrowDrawable ka upyog UI design mein navigation drawer ke sath sath alag alag icon customization mein kiya jata hai.`,

      link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable",
      suggestion: [
        {
          title: "DrawerArrowDrawable | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable > Constructor",

          des: `DrawerArrowDrawable class mein public DrawerArrowDrawable(Context context) constructor ek method hai, jo DrawerArrowDrawable object ko instantiate karne ke liye use kiya jata hai. Is constructor ke dwara, hum DrawerArrowDrawable class ke naye object ko create kar sakte hain.

          Is constructor ka upyog karke, hum ek DrawerArrowDrawable object bana sakte hain, jo navigation drawer toggle icon ke roop mein use kiya ja sakta hai. Is constructor mein, hum Context object ko argument ke roop mein pass karte hain, jisse ki object ke creation ke liye jaruri resources aur configuration available ho.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#DrawerArrowDrawable()",
        },

        {
          title: "ARROW_DIRECTION_END | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `DrawerArrowDrawable class mein public static final int ARROW_DIRECTION_END = 3 ek constant hai, jo navigation drawer toggle icon ke direction ko define karta hai. Is constant ka value 3 hai, jo navigation drawer toggle icon ke right side direction ko represent karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#ARROW_DIRECTION_END",
        },

        {
          title: "ARROW_DIRECTION_LEFT | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `DrawerArrowDrawable class mein public static final int ARROW_DIRECTION_LEFT = 0 ek constant hai, jo navigation drawer toggle icon ke direction ko define karta hai. Is constant ka value 0 hai, jo navigation drawer toggle icon ke left side direction ko represent karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#ARROW_DIRECTION_LEFT",
        },

        {
          title: "ARROW_DIRECTION_RIGHT | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `DrawerArrowDrawable class mein public static final int ARROW_DIRECTION_RIGHT = 1 ek constant hai, jo navigation drawer toggle icon ke direction ko define karta hai. Is constant ka value 1 hai, jo navigation drawer toggle icon ke right side direction ko represent karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#ARROW_DIRECTION_RIGHT",
        },

        {
          title: "ARROW_DIRECTION_START | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `DrawerArrowDrawable class mein public static final int ARROW_DIRECTION_START = 2 ek constant hai, jo navigation drawer toggle icon ke direction ko define karta hai. Is constant ka value 2 hai, jo navigation drawer toggle icon ke left side direction ko represent karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#ARROW_DIRECTION_START",
        },



        {
          title: "draw | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public void draw(@NonNull Canvas canvas) method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ko draw karne ke liye use kiya jata hai. Is method ka upyog navigation drawer toggle icon ko screen par draw karne ke liye kiya jata hai.

          Jab hum DrawerArrowDrawable ka object create karte hain, tab hum iska draw() method call karke icon ko screen par draw kar sakte hain. Is method ke andar, navigation drawer toggle icon ke design, color, size, direction aadi ko configure kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#draw()",
        },

        {
          title: "getArrowHeadLength | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public float getArrowHeadLength() method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ke arrow head length ko return karta hai. Is method ka upyog navigation drawer toggle icon ke arrow head length ko get karne ke liye kiya jata hai.

          Navigation drawer toggle icon me arrow head length ka size, icon ke design ke hisab se configure kiya jata hai. Is method ke dwara hum navigation drawer toggle icon ke arrow head length ka size get kar sakte hain aur uske hisab se icon ke design ko customize kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getArrowHeadLength()",
        },

        {
          title: "getArrowShaftLength | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public float getArrowShaftLength() method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ke arrow shaft length ko return karta hai. Is method ka upyog navigation drawer toggle icon ke arrow shaft length ko get karne ke liye kiya jata hai.
          
          Navigation drawer toggle icon me arrow shaft length ka size, icon ke design ke hisab se configure kiya jata hai. Is method ke dwara hum navigation drawer toggle icon ke arrow shaft length ka size get kar sakte hain aur uske hisab se icon ke design ko customize kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getArrowShaftLength()",
        },

        {
          title: "getBarLength | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public float getBarLength() method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ke bar length ko return karta hai. Is method ka upyog navigation drawer toggle icon ke bar length ko get karne ke liye kiya jata hai.
          
          Navigation drawer toggle icon me bar length ka size, icon ke design ke hisab se configure kiya jata hai. Is method ke dwara hum navigation drawer toggle icon ke bar length ka size get kar sakte hain aur uske hisab se icon ke design ko customize kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getBarLength()",
        },

        {
          title: "getBarThickness | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public float getBarThickness() method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ke bar thickness ko return karta hai. Is method ka upyog navigation drawer toggle icon ke bar thickness ko get karne ke liye kiya jata hai.

          Navigation drawer toggle icon me bar thickness ka size, icon ke design ke hisab se configure kiya jata hai. Is method ke dwara hum navigation drawer toggle icon ke bar thickness ka size get kar sakte hain aur uske hisab se icon ke design ko customize kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getBarThickness()",
        },

        {
          title: "getColor | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public @ColorInt int getColor() method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ke color ko return karta hai. Is method ka upyog navigation drawer toggle icon ke color ko get karne ke liye kiya jata hai.

          Navigation drawer toggle icon me color ka size, icon ke design ke hisab se configure kiya jata hai. Is method ke dwara hum navigation drawer toggle icon ke color ka size get kar sakte hain aur uske hisab se icon ke design ko customize kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getColor()",
        },

        {
          title: "getDirection | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public int getDirection() method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ke arrow ka direction return karta hai. Is method ka upyog navigation drawer toggle icon ke arrow direction ko get karne ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getDirection()",
        },

        {
          title: "getGapSize | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public float getGapSize() method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ke arrow aur bars ke beech ka gap size ko return karta hai. Is method ka upyog navigation drawer toggle icon ke gap size ko get karne ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getGapSize()",
        },

        {
          title: "getIntrinsicHeight | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public int getIntrinsicHeight() method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ka intrinsic height (naisargik uchai) return karta hai. Is method ka upyog navigation drawer toggle icon ka height get karne ke liye kiya jata hai.

          Intrinsic height, Drawable class ke ek property hai jo uski default height ko define karta hai. Is method ke dwara hum navigation drawer toggle icon ke intrinsic height ko get kar sakte hain aur uske hisab se icon ke height ko customize kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getIntrinsicHeight()",
        },

        {
          title: "getIntrinsicWidth | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public int getIntrinsicWidth() method DrawerArrowDrawable class ka ek method hai jo navigation drawer toggle icon ka intrinsic width (naisargik chaudai) return karta hai. Is method ka upyog navigation drawer toggle icon ka width get karne ke liye kiya jata hai.

          Intrinsic width, Drawable class ke ek property hai jo uski default width ko define karta hai. Is method ke dwara hum navigation drawer toggle icon ke intrinsic width ko get kar sakte hain aur uske hisab se icon ke width ko customize kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getIntrinsicWidth()",
        },

        {
          title: "getOpacity | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public int getOpacity() method DrawerArrowDrawable class ka ek method hai jo Drawable class ke getOpacity() method ko override karta hai. Is method ka upyog navigation drawer toggle icon ke opacity ko get karne ke liye kiya jata hai.

          Opacity ek graphics property hai, jo define karta hai ki ek graphics element kitna opaque  ya transparent hai. Is method ke dwara hum navigation drawer toggle icon ka opacity get kar sakte hain aur uske hisab se icon ka visibility ko customize kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getOpacity()",
        },

        {
          title: "getPaint | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public final Paint getPaint() method DrawerArrowDrawable class ka ek method hai jo DrawerArrowDrawable object ke Paint instance ko return karta hai.

          DrawerArrowDrawable ka use navigation drawer toggle icon ke design ke liye kiya jata hai. Isme bar, arrow head aur arrow shaft ka design hota hai. Paint class ke dwara hum colors, styles aur stroke ke properties set kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#getPaint()",
        },

        {
          title: "FloatRange | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public @FloatRange(from = 0.0, to = 1.0) float getProgress() method DrawerArrowDrawable class ka ek method hai jo DrawerArrowDrawable object ke progress value ko return karta hai.

          DrawerArrowDrawable ka use navigation drawer toggle icon ke design ke liye kiya jata hai. Isme bar, arrow head aur arrow shaft ka design hota hai. Progress value, icon ka rotation angle ko represent karta hai. Is method ka upyog icon ke animation ke dauran progress value ko retrieve karne ke liye kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#FloatRange()",
        },

        {
          title: "isSpinEnabled | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public boolean isSpinEnabled() method DrawerArrowDrawable class ka ek method hai jo DrawerArrowDrawable object ke spin enabled/disabled state ko return karta hai.

          DrawerArrowDrawable ka use navigation drawer toggle icon ke design ke liye kiya jata hai. Isme bar, arrow head aur arrow shaft ka design hota hai. Icon ke design ke saath-saath, iska behavior bhi customize kiya jata hai, jaise ki spin enabled/disabled.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#isSpinEnabled()",
        },

        {
          title: "setAlpha | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public void setAlpha(int alpha) method DrawerArrowDrawable class ka ek method hai jo DrawerArrowDrawable object ke alpha value ko set karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setAlpha()",
        },

        {
          title: "setArrowHeadLength | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public void setArrowHeadLength(float length) method DrawerArrowDrawable class ka ek method hai jo arrow head ke length ko set karne ke liye use kiya jata hai. Is method me ek float value pass kiya jata hai jisme arrow head ka length hota hai.

          Jab is method ko call kiya jata hai to arrow head ka length di gayi value se update ho jata hai. Yeh method arrow ka shape aur size modify karne ke liye use kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setArrowHeadLength()",
        },

        {
          title: "setArrowShaftLength | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public void setArrowShaftLength(float length) method DrawerArrowDrawable class ka ek method hai jo arrow shaft ke length ko set karne ke liye use kiya jata hai. Is method me ek float value pass kiya jata hai jisme arrow shaft ka length hota hai.

          Jab is method ko call kiya jata hai to arrow shaft ka length di gayi value se update ho jata hai. Yeh method arrow ka shape aur size modify karne ke liye use kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setArrowShaftLength()",
        },

        {
          title: "setBarLength | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public void setBarLength(float length) method DrawerArrowDrawable class ka ek method hai jo navigation drawer ke bar ke length ko set karne ke liye use kiya jata hai. Is method me ek float value pass kiya jata hai jisme navigation drawer ke bar ka length hota hai.
          
          Jab is method ko call kiya jata hai to navigation drawer ke bar ka length di gayi value se update ho jata hai. Yeh method navigation drawer ke shape aur size modify karne ke liye use kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setBarLength()",
        },

        {
          title: "setBarThickness | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public void setBarThickness(float width) method DrawerArrowDrawable class ka ek method hai jo navigation drawer ke bar ke thickness ko set karne ke liye use kiya jata hai. Is method me ek float value pass kiya jata hai jisme navigation drawer ke bar ka thickness hota hai.

          Jab is method ko call kiya jata hai to navigation drawer ke bar ka thickness di gayi value se update ho jata hai. Yeh method navigation drawer ke shape aur size modify karne ke liye use kiya jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setBarThickness()",
        },

        {
          title: "setColor | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public void setColor(@ColorInt int color) DrawerArrowDrawable class ka ek method hai jo arrow ke rang ko set karne ke liye use kiya jata hai. Is method me ek ColorInt type ka parameter liya jata hai jisme arrow ka naya color hota hai.
          
          Jab is method ko call kiya jata hai to arrow ka color change ho jata hai. Isse hum DrawerArrowDrawable object ka rang change kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setColor()",
        },

        {
          title: "setColorFilter | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `public void setColorFilter(ColorFilter colorFilter) method DrawerArrowDrawable class ka ek method hai jo arrow drawable ke color filter ko set karta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setColorFilter()",
        },

        {
          title: "setDirection | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `DrawerArrowDrawable class me, setDirection(int direction) ek method hai jo DrawerArrowDrawable ke direction ko set karne ke liye use kiya jata hai. Yah method, drawer ke open/closed state ko darshata hai.

          Is method ka upyog karke, hum DrawerArrowDrawable ke direction ko set kar sakte hain. is method ke argument mein ek direction integer value pass kiya jata hai, jise hum drawer arrow ke direction ke liye istemal karte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setDirection()",
        },

        {
          title: "setGapSize | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `DrawerArrowDrawable class mein, setGapSize(float gap) ek method hai jo DrawerArrowDrawable arrow ke beech ki gap size ko set karne ke liye use kiya jata hai.

          Is method ke jariye, hum DrawerArrowDrawable ke gap size ko set kar sakte hain. is method ke argument mein ek float value pass kiya jata hai, jo gap ki size ko define karta hai. Gap size ke sahi set karne se, DrawerArrowDrawable ka arrow sahi tarike se dikh payega.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setGapSize()",
        },

        {
          title: "setProgress | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `DrawerArrowDrawable class mein, setProgress(@FloatRange(from = 0.0, to = 1.0) float progress) ek method hai jo DrawerArrowDrawable arrow ka progress level ko set karne ke liye use kiya jata hai.

          Is method ke dwara, hum DrawerArrowDrawable arrow ka progress level ko set kar sakte hain. is method ke argument mein ek float value pass kiya jata hai, jo DrawerArrowDrawable arrow ka progress level define karta hai. Is argument mein 0.0 se 1.0 ke bich ka float value hona chahiye.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setProgress()",
        },

        {
          title: "setSpinEnabled | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `DrawerArrowDrawable class mein, setSpinEnabled(boolean enabled) ek method hai jo DrawerArrowDrawable arrow ke spin state ko set karne ke liye use kiya jata hai.

          Is method ke jariye, hum DrawerArrowDrawable arrow ke spin state ko enable/disable kar sakte hain. is method ke argument mein ek boolean value pass kiya jata hai, jo spinner ki state ko define karta hai. Agar true hai to spinner on hai aur agar false hai to spinner off hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setSpinEnabled()",
        },

        {
          title: "setVerticalMirror | DrawerArrowDrawable",

          loc: "Android Developer > Reference > Class > DrawerArrowDrawable",

          des: `DrawerArrowDrawable class mein, setVerticalMirror(boolean verticalMirror) ek method hai jo DrawerArrowDrawable arrow ko vertical mirror mode mein set karne ke liye use kiya jata hai.

          Is method ke jariye, hum DrawerArrowDrawable arrow ko vertical mirror mode mein set kar sakte hain. Is method ke argument mein ek boolean value pass kiya jata hai, jo arrow ko vertical mirror mode mein set karta hai. Agar argument true hai to arrow vertical mirror mode mein set ho jata hai, aur agar false hai to normal mode mein rehta hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/DrawerArrowDrawable#setVerticalMirror()",
        },

        
      ]
    },

    {
      title: "StateListDrawableCompat",
      loc: "Android Developer > Reference > Class",

      des: `StateListDrawableCompat ka upyog, drawable resource ko multiple states ke sath define karne ke liye kiya jata hai. Har state ke liye, ek drawable resource define kiya jata hai aur jab kisi view ka state change hota hai, jaise ki view ka focus state ya pressed state, to corresponding drawable resource display kiya jata hai.`,

      link: "/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat",
      suggestion: [
        {
          title: "StateListDrawableCompat | StateListDrawableCompat",

          loc: "Android Developer > Reference > Class > StateListDrawableCompat > Constructor",

          des: `StateListDrawableCompat class ke andar public StateListDrawableCompat() naam ka ek constructor hai. Ye constructor ek naya StateListDrawableCompat object banata hai.

          Is constructor ke jariye, hum ek naya StateListDrawableCompat object create kar sakte hain, jiske liye abhi tak koi drawable resources ya states define nahi kiye gaye hain. Is object ke liye, hum alag-alag states ke liye drawable resources add kar sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat#StateListDrawableCompat()",
        },

        {
          title: "addState | StateListDrawableCompat",

          loc: "Android Developer > Reference > Class > StateListDrawableCompat",

          des: `StateListDrawableCompat class mein, public void addState(int[] stateSet, Drawable drawable) ek method hai jo StateListDrawableCompat ke object ke liye ek naya state aur us state ke corresponding Drawable resource ko add karne ke liye use kiya jata hai.

          Is method ke jariye, hum ek naya state set add kar sakte hain, jaise ki focused, pressed, selected ya normal state, aur us state ke liye ek Drawable resource define kar sakte hain. Method ke pehle argument mein, hum ek integer array pass karte hain, jo state ka set define karta hai jis ke liye drawable resource use hoga. Dusra argument, drawable hai, jo specified state ke liye display kiya jayega.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat#addState()",
        },

        {
          title: "applyTheme | StateListDrawableCompat",

          loc: "Android Developer > Reference > Class > StateListDrawableCompat",

          des: `StateListDrawableCompat class mein, public void applyTheme(@NonNull Resources.Theme theme) ek method hai jo StateListDrawableCompat ke object ke theme ko apply karne ke liye use kiya jata hai.

          Is method ke jariye, hum StateListDrawableCompat ke object ke theme ko apply kar sakte hain, jaise ki theme se drawable resources ke color aur appearance ke liye resources le sakte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat#applyTheme()",
        },

        {
          title: "inflate | StateListDrawableCompat",

          loc: "Android Developer > Reference > Class > StateListDrawableCompat",

          des: `inflate method ke jariye, hum StateListDrawableCompat ke object ko XML file se inflate kar sakte hain aur usme define kiye gaye states ke corresponding Drawable resources ko add kar sakte hain. Method ke pehle argument mein, hum ek non-null Context object pass karte hain, dusre argument mein, resources object pass karte hain, jo hum XML file ke parse karne ke liye istemal karte hain.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat#inflate()",
        },

        {
          title: "isStateful | StateListDrawableCompat",

          loc: "Android Developer > Reference > Class > StateListDrawableCompat",

          des: `isStateful() method ka upyog karke, hum StateListDrawableCompat ke object ke stateful nature ko determine kar sakte hain. Agar StateListDrawableCompat ke object mein define kiye gaye states ke corresponding different Drawable resources hai, to ye stateful hoga, aur agar sirf ek hi Drawable resource define kiya gaya hai, to ye non-stateful hoga.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat#isStateful()",
        },

        {
          title: "mutate | StateListDrawableCompat",

          loc: "Android Developer > Reference > Class > StateListDrawableCompat",

          des: `Mutate method ka upyog karke, hum kisi Drawable resource ka copy bana sakte hain, jispe hum apne hisab se changes kar sakte hain, bina original Drawable resource ko affect kiye. Agar hum mutate() method ko ek Drawable object ke upar call karte hain, to isse ek mutable version of the Drawable object ban jata hai.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat#mutate()",
        },

        {
          title: "onStateChange | StateListDrawableCompat",

          loc: "Android Developer > Reference > Class > StateListDrawableCompat",

          des: `StateListDrawableCompat class ke andar, protected boolean onStateChange(@NonNull int[] stateSet) method StateListDrawableCompat ke state ko modify karne ke liye use kiya jata hai. Ye method, drawable ke state ke change hone par automatically call hota hai.

          Ye method ek int array, yani ki stateSet ka input leta hai, jisme Drawable ke state ka current state set hota hai. Method, is stateSet array ko analyze karta hai aur ye determine karta hai ki kaun sa Drawable resource is stateSet ke corresponding use kiya jaye.`,

          link: "/android/reference/androidx.appcompat.graphics.drawable/class/StateListDrawableCompat#onStateChange()",
        },


      ]
    }
  ],
};
