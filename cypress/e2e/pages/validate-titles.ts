class ValidateTitles {

    get = {
        title: () => cy.get("title"),
        header:() =>cy.get(".title"),
        subTitle:() =>cy.get(".subtitle"),
        card:()=>cy.get(".card")
    }

    getTitle (){
        return this.get.title()
    }

    getHeader(){
        return this.get.header()
    }

    getSubTitle(){
        return this.get.subTitle()
    }

    getCards (){
        return this.get.card()
    }

}


export const validateTitles = new ValidateTitles();