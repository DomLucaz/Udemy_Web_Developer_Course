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

    servey(expense) {

       let expensesFiltered = Array()

       expensesFiltered = this.loadAllInserts()

       console.log(expensesFiltered)

       //year
       if(expense.year !='') {
        console.log('filter of year')
        expensesFiltered = expensesFiltered.filter(d => d.year == expense.year)
       }

       //mounth
       if(expense.mounth !='') {
        console.log('filter of mounth')
        expensesFiltered = expensesFiltered.filter(d => d.mounth == expense.mounth)
       }

       //day
       if(expense.day !='') {
        console.log('filter of day')
        expensesFiltered = expensesFiltered.filter(d => d.day == expense.day)
       }

       //type
       if(expense.type !='') {
        console.log('filter of type')
        expensesFiltered = expensesFiltered.filter(d => d.type == expense.type)
       }

       //description
       if(expense.description !='') {
        console.log('filter of description')
        expensesFiltered = expensesFiltered.filter(d => d.description == expense.description)
       }

       //amount
       if(expense.amount !='') {
        console.log('filter of amount')
        expensesFiltered = expensesFiltered.filter(d => d.amount == expense.amount)
       }
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
    
    //In case of the user didn't completed to filled the fields, it will prevent to clean it and start over

    year.value = ''
    mounth.value = ''
    day.value = ''
    type.value = ''
    description.value = ''
    amount.value = ''
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

    //selection tbody's array elements
    let expensesList = document.getElementById('expensesList')

    /* 
    <tr>
        <th>Data</th>
        <th>Type</th>
        <th>Description</th>
        <th>Amount</th>
        <th></th>
    </tr>
    */
   //navegate expanses array, listing each expense in a dynamic way
   expenses.forEach(function(d){

    //create the lines (tr)
    let line = expensesList.insertRow()

    //create the collums(td)
    line.insertCell(0).innerHTML = `${d.day}/${d.mounth}/${d.year}`  

    //type ajustment
    switch(d.type){
        case '1': d.type = 'Feeding'
            break
        case '2': d.type = 'Education'
            break
        case '3': d.type = 'Leisure'
            break
        case '4': d.type = 'Health'
            break
        case '5': d.type = 'Transportation'
            break
    }
    line.insertCell(1).innerHTML = d.type

    line.insertCell(2).innerHTML = d.description
    line.insertCell(3).innerHTML = d.amount
   })
}

function serveyExpense(){
    let year = document.getElementById('year').value
    let mounth = document.getElementById('mounth').value
    let day = document.getElementById('day').value 
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value
    let amount = document.getElementById('amount').value

    let expense = new Expense (year, mounth, day, type, description, amount)

    bd.servey(expense)
}