import { ParaPage } from '../pageObjects/paraPage'


export class PageManager{
    constructor(){
        this.paraPage = new ParaPage()
        
    }

    onParaPage(){
        return this.paraPage
    }


}