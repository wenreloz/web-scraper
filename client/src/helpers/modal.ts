export default class Modal {

    modal:any;

    constructor(modalElement:HTMLElement) {

        const modal = document.body.appendChild(modalElement);

        this.modal = new bootstrap.Modal(modal, {
            keyboard: false,
            backdrop: 'static',
        });
    }
 
    show():void{
        this.modal.show();
    }

    hide():void{
        this.modal.hide();
    }
}