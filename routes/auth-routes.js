const passport = require('passport');
const router = require('express').Router();


// auth login'i
router.get('/login', (req,res)=>{
    res.render('login');
})

// auth logout
router.get('/logout', (req,res)=>{
    // passport kullanılacak
    res.send('Oturum kapatılıyor.')
})


// google ile kimlik doğrulama (auth) ekranının getirildiği yerdir.
// kod burada henüz yoktur.
// scope, kullanıcının profilinden getirilmek istenen şeyi belirtir
router.get('/google',passport.authenticate('google', {
        scope : ['profile','email']
}))

// authentication'dan sonra kullnıcının yönlendirildiği yerdir.
// code ile profil bilgisinin alındığı yerdir.
// passport.authenticate('google')'de kod bulunur. Bu kod ile bilgiler exchange edilir 
router.get('/google/redirect', passport.authenticate('google'), (req,res)=>{
    console.log('route get redirect calisti !!');
    res.send(`Hos geldin ${req.user.displayName}`);                             // req.user ile kullanıcının profil bilgilerine ulaşılabilir
  //  res.send(`Hos geldin ${req.user.emails[0].value}`);                   // kullanıcının email adresi alınır
})

module.exports = router;


