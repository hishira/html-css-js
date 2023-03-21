import { PageType } from './global';

class MainPage extends HTMLElement {
    private mapper: Map<PageType, string> = new Map([
        ['home', '<home-body></home-body>'],
        ['about', '<about-body></about-body>'],
        ['skills', '<skills-body></skills-body>'],
    ]);
    constructor() {
        super();
        const locationtype = window.location.hash.replace('#', '') as PageType;
        console.log(locationtype);
        this.locationChangehandle(locationtype);
    }
    static get observedAttributes() {
        return ['historylacation'];
    }

    htmlchange(html: string) {
        this.innerHTML = html;
    }

    attributeChangedCallback(name: string, oldval: string, newval: string) {
        if (name !== 'historylacation' || oldval === newval) return;
        this.locationChangehandle(newval as PageType);
    }

    private locationChangehandle(attributeName: PageType): void {
        const redirectElement = this.mapper.get(attributeName);
        redirectElement && (window.location.hash = attributeName);
        this.htmlchange(redirectElement ?? (this.mapper.get('home') as string));
    }
}
customElements.define('main-page', MainPage);
