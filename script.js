class meuBotao{
    constructor(conteudo){
        this.conteudo = conteudo;

        this.element = document.createElement('button');
        this.element.classList.add('meuBotao')

        this.render();
    }

        render(){
            this.element.innerHTML = `
            <button style="background: #027503;">${this.conteudo}</button>
            `;
        }
}

const testeMeuBotao = new meuBotao('cap2');
document.body.appendChild(testeMeuBotao.element);