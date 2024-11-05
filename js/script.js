// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let empForm = document.querySelector('#addForm')
let empTable = document.querySelector('#employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.querySelector('#empCount')
let counter = 0
empCount.textContent = `(${counter})`

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let empId = e.target.id.value
    let empName = e.target.name.value
    let empExt = e.target.extension.value
    let empEmail = e.target.email.value
    let empDept = e.target.department.value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = empTable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let c1 = newRow.insertCell()
    let c2 = newRow.insertCell()
    let c3 = newRow.insertCell()
    let c4 = newRow.insertCell()
    let c5 = newRow.insertCell()
    let c6 = newRow.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    c1.textContent = empId
    c2.textContent = empName
    c3.textContent = empExt
    c4.textContent = empEmail
    c5.textContent = empDept

    // CREATE THE DELETE BUTTON
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    deleteBtn.style.backgroundColor = '#C82333'
    deleteBtn.style.color = 'white'

    const textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    c6.appendChild(deleteBtn)

    // RESET THE FORM
    empForm.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    e.target.id.focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    counter++
    empCount.textContent = `(${counter})`
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete this entry?')){
            empTable.deleteRow(e.target.parentNode.parentNode.rowIndex)
            counter--
            empCount.textContent = `(${counter})`
        }
    }
})


