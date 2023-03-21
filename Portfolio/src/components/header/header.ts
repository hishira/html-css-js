import html from 'bundle-text:./header.html';
import { isNil, isNilOneOfThem } from '../../utils/helper';
import { HeaderButton } from './header.type';
class Header extends HTMLElement {
    private redirectRightMapper: Map<HeaderButton, HeaderButton> = new Map([
        ['home', 'skills'],
        ['skills', 'about'],
        ['about', 'home'],
    ]);

    private redirectLeftMapper: Map<HeaderButton, HeaderButton> = new Map([
        ['home', 'about'],
        ['skills', 'home'],
        ['about', 'skills'],
    ]);
    constructor() {
        super();

        this.innerHTML = html;
        let firstclick: HTMLElement | null = document.getElementById('first');
        let secondclck: HTMLElement | null = document.getElementById('second');
        let thirdclick: HTMLElement | null = document.getElementById('third');

        if (isNilOneOfThem(firstclick, secondclck, thirdclick)) return;

        this.hanleClickButtons(firstclick, secondclck, thirdclick);
        this.setDefaultPosition();
        window.addEventListener('keydown', this.keyDownHandle.bind(this));
    }

    public keyDownHandle(e: KeyboardEvent) {
        e.preventDefault();
        let ownclass: Header = this;
        let getattribute = document
            .getElementById('root')
            ?.getAttribute('historylacation');
        if (isNil(e.key) || isNil(getattribute)) return;
        if (e.key === 'ArrowRight') {
            this.redirect(getattribute as HeaderButton, document, ownclass);
            this.changeWindowHash(getattribute as HeaderButton, 'right');
        } else if (e.key === 'ArrowLeft') {
            this.rediectLeft(getattribute as HeaderButton, document, ownclass);
            this.changeWindowHash(getattribute as HeaderButton, 'left');
        }
    }
    public setDefaultPosition() {
        this.elementAddClass(document, 'first', 'underline');
        Header.atributeset('historylacation', 'home');
    }

    // TODO: Think of change into one function
    public redirect(
        redirectSite: HeaderButton,
        document: Document,
        ownclass: Header
    ) {
        if (redirectSite === 'home') {
            this.skillsredirect(document, ownclass);
        } else if (redirectSite === 'skills') {
            this.aboutRedirect(document, ownclass);
        } else if (redirectSite === 'about') {
            this.homeredirect(document, ownclass);
        }
    }

    public rediectLeft(
        redirectSite: HeaderButton,
        document: Document,
        ownclass: Header
    ) {
        if (redirectSite === 'home') {
            this.aboutRedirect(document, ownclass);
        } else if (redirectSite === 'skills') {
            this.homeredirect(document, ownclass);
        } else if (redirectSite === 'about') {
            this.skillsredirect(document, ownclass);
        }
    }

    public changeWindowHash(
        redirectSite: HeaderButton,
        redirectType: 'right' | 'left'
    ): void {
        window.location.hash = (
            redirectType === 'right'
                ? this.redirectRightMapper.get(redirectSite)
                : this.redirectLeftMapper.get(redirectSite)
        ) as string;
    }

    static atributeset(attribute: string, where: string) {
        let root: HTMLElement | null = document.getElementById('root');
        root?.setAttribute(attribute, where);
    }

    public elementRemoveClass(
        root: Document,
        ids: Array<string>,
        classtoremove: string
    ) {
        ids.forEach((value, index, array) => {
            let element: HTMLElement | null = root.getElementById(ids[index]);
            element?.classList.remove(classtoremove);
        });
    }

    public elementAddClass(root: Document, id: string, classname: string) {
        let elementwithclass: HTMLElement | null = root.getElementById(id);
        elementwithclass?.classList.add(classname);
    }

    public homeredirect(shadow: Document, ownclass: Header) {
        ownclass.elementRemoveClass(
            shadow,
            ['first', 'second', 'third'],
            'underline'
        );
        ownclass.elementAddClass(shadow, 'first', 'underline');
        Header.atributeset('historylacation', 'home');
    }

    public skillsredirect(shadow: Document, ownclass: Header) {
        ownclass.elementRemoveClass(
            shadow,
            ['first', 'second', 'third'],
            'underline'
        );
        ownclass.elementAddClass(shadow, 'second', 'underline');
        Header.atributeset('historylacation', 'skills');
    }

    public aboutRedirect(shadow: Document, ownclass: Header) {
        ownclass.elementRemoveClass(
            shadow,
            ['first', 'second', 'third'],
            'underline'
        );
        ownclass.elementAddClass(shadow, 'third', 'underline');
        Header.atributeset('historylacation', 'about');
    }

    private hanleClickButtons(
        homeButton: HTMLElement | null,
        skillsButton: HTMLElement | null,
        aboutButton: HTMLElement | null
    ): void {
        homeButton?.addEventListener('click', (e: MouseEvent) =>
            this.homeredirect(document, this)
        );
        skillsButton?.addEventListener('click', (e: MouseEvent) =>
            this.skillsredirect(document, this)
        );
        aboutButton?.addEventListener('click', (e: MouseEvent) =>
            this.aboutRedirect(document, this)
        );
    }
}

window.customElements.define('app-header', Header);
