class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
		
    }
}

customElements.define("x-year", CopyrightYear);

class EddieElement extends HTMLElement{
	connectedCallback(){
		const span = document.createElement: ('span');
		span.innerHTML = 'c ';
		const CopyrightYear = new Date().getFullYear();
		span.innerHTML += '$(CopyrightYear) Eddie Bissell Simmons';
		this.appendChild(span);
	}
}

customElements.define("x-eddie-copyright", EddieElement);