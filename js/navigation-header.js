class NavigationHeader extends HTMLElement{
    connectedCallback(){
        const curr = this.getAttribute('current');
        const menu_items = ['About','Skills','Contact'];
        const menu_src = ['about.html','skills.html','contact.html'];
        let html_menu = '';

        for (let i = 0; i < menu_items.length; i++) {
            html_menu += '<li ';
            if(curr.toLowerCase().localeCompare(menu_items[i].toLowerCase()) === 0){
                html_menu += 'id = current';
            }
            html_menu += ' class="';
            html_menu += menu_items[i];
            html_menu += '"><a href="';
            html_menu += menu_src[i];
            html_menu += '">';
            html_menu += menu_items[i];
            html_menu += '</a></li>\n';
        }

        this.setInnerHtml(this,'<header class="navbar">\n    ' +
            '<div class="container-header">\n' +
            '        <a class="logo-text" href="index.html"><span>bac</span>desmedt</a>\n' +
            '        <a class="logo-img" href="index.html"><img src="" alt="logo"></a>\n' +
            '        <img id="mobile-cta" class="mobile-menu" src="images/menu.svg" alt="Open Navigation">\n' +
            '        <nav>\n' +
            '            <img id="mobile-exit" class="mobile-menu-exit" src="images/exit.svg" alt="Close Navigation">\n' +
            '            <ul class="primary-nav">\n' +
            html_menu +
            '            </ul>\n' +
            '        </nav>\n' +
            '    </div>\n' +
            '    <script src="js/mobile-nav.js" ></script>\n' +
            '</header>')

    }

    setInnerHtml(elm, html) {
        elm.innerHTML = html;
        Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
            const newScript = document.createElement("script");
            Array.from(oldScript.attributes)
                .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }
}
customElements.define("navigation-header", NavigationHeader)