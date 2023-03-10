class Expense {
    constructor(year, mounth, day, type, description, amount) {
        this.year = year
        this.mounth = mounth
        this.day = day
        this.type = type
        this.description = description
        this.amount = amount
    }

    dataAuthen() {
        for(let i in this){
           if(this[i] == undefined || this[i] == '' || this[i] == null){
            return false
           }
        }
        return true
    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')
        
        if(id === null){
            localStorage.setItem('id', 0)
        } 
    
    }

    getNextID(){
        let nextId = localStorage.getItem('id')
        return parseInt(nextId) + 1
    }
    record(d) {
        let id = this.getNextID()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function registerCharges() {

    let year = document.getElementById('year')
    let mounth = document.getElementById('mounth')
    let day = document.getElementById('day')
    let type = document.getElementById('type')
    let description = document.getElementById('description')
    let amount = document.getElementById('amount')

    let expense = new Expense(year.value, mounth.value, day.value, type.value, description.value, amount.value)


    if(expense.dataAuthen()) {
    //bd.record(expense)
        console.log('Dados válidos')
    } else{
        console.log('Dados inválidos')
    }
}

