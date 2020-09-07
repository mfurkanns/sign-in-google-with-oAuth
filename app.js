const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
const app = express();

app.set('view engine','ejs');

// cookie session tanımı
app.use(cookieSession({                     // gonderilen cookie'nin yaşı
    maxAge : 24 * 60 * 60 * 1000,               // user'ı şifrelemek için kullanılan keyler
    keys : [keys.session.cookieKey]
}));

// passport initialize edilir
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',authRoutes);

app.get('/', (req,res)=>{
    res.render("home");
});

app.listen(3000, ()=>{console.log('3000. port dinleniyor')});

