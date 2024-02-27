// Facade

class BundlerFacade {
  constructor(
    private readonly htmlPath: string,
    private readonly cssModule: CSSModule,
    private readonly jsModule: JSModule,
    private readonly imageModule: ImageModule
  ) {}

  bundleWebpage(): string {
    const htmlModule = new HtmlModule(this.htmlPath);
    const { cssPaths, jsPaths, imagePaths } = htmlModule.extractPaths();

    const bundledCSS = this.cssModule.bundleCSS(cssPaths);
    const bundledJS = this.jsModule.bundleJS(jsPaths);
    const bundledImages = this.imageModule.bundleImages(imagePaths);

    return `${bundledCSS}\n${bundledJS}\n${bundledImages}`;
  }
}

export class CSSModule {
  constructor() {}

  bundleCSS(cssPaths: string[]): string {
    return 'Bundled CSS';
  }
}

export class JSModule {
  constructor() {}

  bundleJS(jsPaths: string[]): string {
    return 'Bundled JS';
  }
}

export class ImageModule {
  constructor() {}

  bundleImages(imagePaths: string[]): string {
    return 'Bundled Images';
  }
}

// htmlModule.ts
export class HtmlModule {
  constructor(private readonly htmlPath: string) {}

  extractPaths(): { cssPaths: string[]; jsPaths: string[]; imagePaths: string[] } {
    const cssPaths = ['style1.css', 'style2.css'];
    const jsPaths = ['script1.js', 'script2.js'];
    const imagePaths = ['image1.png', 'image2.jpg'];

    return { cssPaths, jsPaths, imagePaths };
  }
}



(function main(){
  const htmlPath = 'index.html'; // Path to your HTML file
  const cssModule = new CSSModule();
  const jsModule = new JSModule();
  const imageModule = new ImageModule();

  const bundlerFacade = new BundlerFacade(htmlPath, cssModule, jsModule, imageModule);
  const bundledWebpage = bundlerFacade.bundleWebpage();
  console.log('main!!!')
})()