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
    insert(d) {
        let id = this.getNextID()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }

    loadAllInserts(){

        //Expenses array
        let expenses = Array()

        let id = localStorage.getItem('id')

        //recover all the expenses inserted in localStorage
        for (let i = 1; i <= id; i++) {

            //recover the expense
            let expense = JSON.parse(localStorage.getItem(i))
            
            //There's a possibility that some index was removed
            //In that case, it has to be ignored
            if(expense === null){
                continue
            }
            expenses.push(expense)
        }

        return expenses
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
    bd.insert(expense)

    document.getElementById('modal_title').innerHTML = 'Data inserted successfully'
    document.getElementById('modal_title_div').className = 'modal-header text-sucess'
    document.getElementById('modal_content').innerHTML = 'Expense saved successfully'
    document.getElementById('modal_btn').innerHTML = 'Back'
    document.getElementById('modal_btn').className = 'btn btn-success'
    //sucess dialog
    $('#insertExpense').modal('show')
    } else{
        //erro dialog

    document.getElementById('modal_title').innerHTML = 'Data insertion error'
    document.getElementById('modal_title_div').className = 'modal-header text-sucess'
    document.getElementById('modal_content').innerHTML = 'Check that all field are filled correctly'
    document.getElementById('modal_btn').innerHTML = 'Back and revise'
    document.getElementById('modal_btn').className = 'btn btn-danger'
    $('#insertExpense').modal('show')
    }
}


function loadExpenseList(){

    let expenses = Array()

    expenses = bd.loadAllInserts()

    console.log(expenses)
}
