const Header = () => {
    const view = `
        <header class="header" id="header">
            <div class="header__logo">
                <h1>
                    <a href="/">
                        BlenderMorty
                    </a>
                </h1>
            </div>
            <nav class="header__nav">
                <a href="#/about/">
                About
                </a>
            </nav>
        </header>
    `;
    return view;
}

export default Header