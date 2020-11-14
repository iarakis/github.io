function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Ivan Arakistain (Twitter: @Tactizity)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    React.createElement("div", { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement("div", { className: "menu-items" },
    React.createElement("ul", null,
    React.createElement("li", null,
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")),



    React.createElement("li", null,
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "SOBRE")),



    React.createElement("li", null,
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PROYECTO")),



    React.createElement("li", null,
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACTO"))),




    React.createElement(SocialLinks, null))));



};


/***********************
     Nav Component
    ***********************/

const Nav = props => {
  return (
    React.createElement(React.Fragment, null,
    React.createElement("nav", { id: "navbar" },
    React.createElement("div", { className: "nav-wrapper" },
    React.createElement("p", { className: "brand" }, "made in ",

    React.createElement("strong", null, "IMH Elgoibar")),

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' },

    React.createElement("span", null))))));





};



/***********************
     Header Component
    ***********************/

const Header = props => {
  return (
    React.createElement("header", { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement("div", { className: "container" },
    React.createElement("h1", null,
    React.createElement("span", { className: "line" }, "Robot"),
    React.createElement("span", { className: "line" }, "de Telepresencia"),
    React.createElement("span", { className: "line" },
    React.createElement("span", { className: "color" }, "&"), " Calidad del Aire.")),


    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: "#projects" }, "Robot"),
    React.createElement("a", { href: "https://www.youtube.com/watch?v=IkACVASViqY", className: "cta" }, "Video presentación")))));






};


/***********************
     About Component
    ***********************/

const About = props => {
  return (
    React.createElement("section", { id: "about" },
    React.createElement("div", { className: "wrapper" },
    React.createElement("article", null,
    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "\xBFQu\xE9 es?"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc full" },
    React.createElement("h4", { className: "subtitle" }, "Un robot para ayudar a las personas aisladas."),
    React.createElement("p", null, "Los niños y mayores que a causa de una enfermedad no pueden interactuar presencialmente con los amigos se pueden sentir aislados y solos después de un tiempo. Una conexión remota mediante un robot de telepresencia puede ser de ayuda en estos casos para poder mantener el contacto.."),



    React.createElement("p", null, "Hemos diseñado el proceso de fabricación de uno de estos robots, al estilo Digital Manufacturing, combinando electrónica, fabricación mecánica y software. ")),






    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "\xBFQu\xE9 hace?"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "Telepresencia en clase."),
    React.createElement("p", null, "El robot de telepresencia ayuda a que los alumnos enfermos o aislados puedan seguir interactuando con sus compañeros."),




    React.createElement("p", null, "Permite ver y escuchar las clases, levantar la mano, hablar y mover y girar el robot de telepresencia.")),




    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "Calidad del aire en clase."),
    React.createElement("p", null, "Como sabemos, para evitar el Covid-19 en el aula, es esecial la buena ventilación. No podemos detectar el virus en el aire, pero podemos medir el nivel de CO2 para saber cuando debemos ventilar. Esto es especialmente útil para los lugares muy fríos en los que no es posible tener las ventanas siempre abiertas."),





    React.createElement("p", null, ""))))));








};


/***********************
     Project Component
    ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    React.createElement("div", { className: "project" },
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" },
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })),

    React.createElement("div", { className: "project-details" },
    React.createElement("div", { className: "project-tile" },
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) =>
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children,
    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ",
    React.createElement("i", { className: "fas fa-external-link-alt" })),

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ",
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
     Projects Component
    ***********************/

const Projects = props => {
  return (
    React.createElement("section", { id: "projects" },
    React.createElement("div", { className: "projects-container" },
    React.createElement("div", { className: "heading" },
    React.createElement("h3", { className: "title" }, "Diseño Open Source"),
    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" }, "Aquí hay una descripción de los ",
    React.createElement("u", null, "principales"), "  componentes del proyecto y en",
    ' ',
    React.createElement("a", { href: "https://www.tactizity.com/", target: "_blank", rel: "noopener noreferrer" }, "Tactizity"), ", se pueden encontrar las tareas desarrolladas por los alumnos de IMH.")),






    React.createElement("div", { className: "projects-wrapper" },
    React.createElement(Project, {
      title: "Diseño del Robot de Telepresencia.",
      img: '../dist/AnonMsgBoard.jpg',
      tech: "",
      link: "https://tactizity.tylextech.com/",
      repo: "https://www.tactizity.com/" },

    React.createElement("small", null, "Sistemas embebidos."),


    React.createElement("p", null, "Electrónica y programación del microcontrolador en microPython.")),



    React.createElement(Project, {
      title: "Nivel de CO2 en clase.",
      img: '../dist/co2.jpg',
      tech: "",
      link: "https://www.tactizity.com/" },


    React.createElement("small", null, "Built using VueJS, Axios and CSS."),
    React.createElement("p", null, "App that present the users with the current local weather for their location.")),

  




    React.createElement(Project, {
      title: "Meteorología",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/WeatherApp.jpg',
      tech: "",
      link: "https://codepen.io/yagoestevez/full/zWbGmZ/",
      repo: "https://github.com/yagoestevez/documentify" },

    React.createElement("small", null, "Built using VueJS, Axios and CSS."),
    React.createElement("p", null, "App that present the users with the current local weather for their location."))))));







};



/***********************
     Contact Component
    ***********************/

const Contact = props => {
  return (
    React.createElement("section", { id: "contact" },
    React.createElement("div", { className: "container" },
    React.createElement("div", { className: "heading-wrapper" },
    React.createElement("div", { className: "heading" },
    React.createElement("p", { className: "title" }, "¿Quieres ",
    React.createElement("br", null), "contactarnos?"),


    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" }, "Por favor, envíanos un email a: ",
    '',
    React.createElement("span", { className: "mail" }, "tactizity",

    React.createElement("i", { className: "fas fa-at at" }), "gmail",

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")),





    React.createElement(SocialLinks, null)))));






};



/***********************
     Footer Component
    ***********************/

const Footer = props => {
  return (
    React.createElement("footer", null,
    React.createElement("div", { className: "wrapper" },
    React.createElement("h3", null, "GRACIAS POR LA VISITA"),
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Ivan Arakistain."),
    React.createElement(SocialLinks, null))));



};




/***********************
     Social Links Component
    ***********************/

const SocialLinks = props => {
  return (
    React.createElement("div", { className: "social" },
    React.createElement("a", {
      href: "https://twitter.com/Tactizity_",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ',
    React.createElement("i", { className: "fab fa-twitter" })),

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/iarakis",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ',
    React.createElement("i", { className: "fab fa-github" })),

    React.createElement("a", {
      href: "https://codepen.io/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ',
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
     Main Component
    ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('app'));