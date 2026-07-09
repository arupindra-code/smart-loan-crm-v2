const Router = {

  currentPage: "login",

  pages: {},

  register(name, renderFunction){
    this.pages[name] = renderFunction;
  },

  navigate(pageName){

    if(!this.pages[pageName]){
      console.error("Page not found:", pageName);
      return;
    }

    this.currentPage = pageName;

    this.pages[pageName]();

  }

};