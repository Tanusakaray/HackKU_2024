/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}


/**
 * GET /
 * Therapist 
*/
exports.therapist = async (req, res) => {
  const locals = {
    title: "Therapist - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('therapist', locals);
}

/**
 * GET /
 * Hotline 
*/
exports.hotline = async (req, res) => {
  const locals = {
    title: "Hotline - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('hotline', locals);
}
exports.phoneNumber = async (req, res) => {
  const locals = {
    title: "phone number - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('phoneNumber', locals);
 
  };



/**
 * GET /
 * Resources 
*/
exports.resources = async (req, res) => {
  const locals = {
    title: "Resources - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('resources', locals);
}
