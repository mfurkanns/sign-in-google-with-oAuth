const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

// user'ı alır ve serialize edilir. Serialize ettikten sonra cookie'ye doldurur ve browser'a gönderir.
passport.serializeUser((user,done)=>{
    console.log('serialize calıstı');
    done(null,user);
});

passport.deserializeUser((user,done)=>{
    console.log('deserialize calıstı');
    done(null,user);
});
// browser'dan cookie gelir ve cookie'den user alınır 

passport.use(
    new GoogleStrategy({
        // google ayarları için
        clientID : keys.google.clientID,
        clientSecret : keys.google.clientSecret,
        callbackURL : 'http://localhost:3000/auth/google/redirect'
        // passport callback fonksiyonu. Profil bilgisi burada gelir.
        // accesToken : Google tarafından passporta verilen token'dır. Bununla kullanıcının maillerine vs erişilebilir.
        // refreshToken : accesToken'ın yenilenmiş halidir. accesToken'ın süresi belli bir süre sonra biter.
        // profile : passport'ın getirdiği profil bilgisidir. Bilgiler bulunur
        // done : callback fonksiyonuyla işimiz bittikten sonra çağrılan fonksiyondur    
    }, (accesToken, refreshToken, profile, done)=>{
        console.log('passport callback calisti !');        
        console.log(accesToken);
        console.log(profile);
        done(null,profile);
    })
)


