const port = process.argv.length > 2 ? process.argv[2] : 4000;

const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const express = require("express");
const uuid = require("uuid");
const app = express();

const db = require("./databaseMongo.js");

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRoute = express.Router();
app.use(`/api`, apiRoute);


function setAuthCookie(res, user) {

    res.cookie("token", user, {
        secure: true,
        httpOnly: true,
        sameSite: "strict",
    });
}


//create a user
apiRoute.post("/auth/create", async (req, res) => {
   if (await getUserName("email", req.body.email)) {
    res.status(409).send({ msg: "User exists already" });
   } 
   else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({ email: user.email });
   }
});


//logging in
apiRoute.post("/auth/login", async (req, res) => {
    const user = await getUserName("email", req.body.email);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        user.token = uuid.v4();
        await db.updateUser(user);
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
        return;
      }
    }
    else {
        res.status(401).send({ msg: "Unauthorized" });
    }
});


//get a user
apiRoute.get('/user/me', async (req, res) => {
  const token = req.cookies['token'];
  const user = await getUserName('token', token);
  if (user) {
    res.send({ email: user.email });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});


//logging out
function clearAuthCookies(res, user) {
    delete user.token;
    res.clearCookie("token");
}

apiRoute.delete("/auth/logout", async (req, res) => {
    const token = req.cookies["token"];
    const user = await getUserName("token", token);
    if (user) {
        delete user.token;
        db.updateUser(user);
    }
    res.clearCookie("token");
    res.status(204).end();
});


//Get data for scoreboard
apiRoute.get("/scoreboard", async (_req, res) => {
  const scores = await db.getScores();
  res.send(scores);
});



async function updateNewScore(score) {
  await db.addNewScore(score);
  return db.getScores();
}

//upload scores
apiRoute.post("/scores", async (req, res) => {
  const scores = updateNewScore(req.body);
  res.send(scores);
});


async function getUserName(field, value) {
    if (!value) return null;

    if (field === "token") {
      return db.getUserByToken(value);
    }
    return db.getUser(value);
}


app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});


app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };

  await db.addNewUser(user);

  return user;
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});