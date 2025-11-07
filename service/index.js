//for npm, use 3000, for uploading, keep at 4000
const port = process.argv.length > 2 ? process.argv[2] : 4000;

const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const express = require("express");
const uuid = require("uuid");
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRoute = express.Router();
app.use("/api", apiRoute);


function setAuthCookie(res, user) {
    user.token = uuid.v4();

    res.cookie("token", user.token, {
        secure: true,
        httpOnly: true,
        sameSite: "strict",
    });
}


//create a user
apiRoute.post("/auth/create", async (req, res) => {
   if (await getUser("email", req.body.email)) {
    res.status(409).send({ msg: "User exists already" });
   } 
   else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user);
    res.send({ email: user.email });
   }
});


//logging in
apiRoute.put("/auth/login", async (req, res) => {
    const user = await getUser("email", req.body.email);
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
        setAuthCookie(res, user);

        res.send({ email: user.email});
    }
    else {
        res.status(401).send({ msg: "Unauthorized" });
    }
});


//logging out
function clearAuthCookies(res, user) {
    delete user.token;
    res.clearCookie("token");
}

apiRoute.delete("/auth/logout", async (req, res) => {
    const token = req.cookies["token"];
    const user = await getUser("token", token);
    if (user) {
        clearAuthCookies(res, user);
    }

    res.send({});
});