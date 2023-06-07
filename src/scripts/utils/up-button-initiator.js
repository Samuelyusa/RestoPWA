const UpButtonInitiator = {
    init({ upArrow }) {
        upArrow.addEventListener('click', (event) => {
        this._scrollUp(event);
        });

        document.addEventListener('scroll', (event) => {
            this._onScroll(event, upArrow);
        });
    },
    
    _onScroll(event, upArrow) {
        event.stopPropagation();
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            upArrow.style.display = "block";
        } else {
            upArrow.style.display = "none";
        }
    },

    _scrollUp(event) {
        event.stopPropagation();
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
        // document.querySelector('#skip-link').focus();
    }
};

export default UpButtonInitiator;