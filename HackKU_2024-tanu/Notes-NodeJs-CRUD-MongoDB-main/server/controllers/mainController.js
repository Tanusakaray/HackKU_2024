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
 * About 
*/
exports.about = async (req, res) => {
  const locals = {
    title: "About - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('about', locals);
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