const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 5000;

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


//   routes
const adminRoutes = require('./src/routes/admin.routes')
const dangerRoutes = require('./src/routes/tache.routes')
const secteurRouts = require('./src/routes/secteur.routes')
const sectionRoutes = require('./src/routes/section.routes')
const skillsRoutes = require('./src/routes/skills.routes')
const userRoutes = require('./src/routes/user.routes')
const tacheRoutes = require('./src/routes/tache.routes')
const accessRoutes = require('./src/routes/access.routes')
const avoirRoutes = require('./src/routes/avoir.routes')
const resumesRoutes = require('./src/routes/resumes.routes')
const sectionDangerRoutes = require('./src/routes/sectionDanger.routes')
const sectionSkillRoutes = require('./src/routes/sectionSkill.routes')
const sectionTacheRoutes = require('./src/routes/sectionTache.routes')

//const conexion_io = require('./src/models/socket')


//conexion_io.get_io_object(io)
//  middleware
app.use('/api//user', userRoutes)
app.use('/api/mmg/admin', adminRoutes)
app.use('/api/mmg/tache', tacheRoutes)
app.use('/api/mmg/danger', dangerRoutes)
app.use('/api/mmg/secteur', secteurRouts)
app.use('/api/mmg/section', sectionRoutes)
app.use('/api/mmg/skill', skillsRoutes)
app.use('/api/mmg/access', accessRoutes)
app.use('/api/mmg/avoir', avoirRoutes)
app.use('/api/mmg/resume', resumesRoutes)
app.use('/api/mmg/sectionDanger', sectionDangerRoutes)
app.use('/api/mmg/sectionSkill', sectionSkillRoutes)
app.use('/api/mmg/sectionTache', sectionTacheRoutes)


//   route default
app.get('/', (req, res) => {
    res.send("<h1>WELCOME TO MMG API DATABASE</H1>");
    //var ctr=require('./src/controllers/tache.controller')
    //tableauDonner=ctr.findAll
    //res.render(__dirname + '/tache.ejs')

});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

});

module.exports = server;