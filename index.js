// Your code here
function createEmployeeRecord(employee) {
    let employeeRecord = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
    return employeeRecord;
}

function createEmployeeRecords(employees) {
    let arrayOfEmployees = [];
    for (let employee of employees) {
        arrayOfEmployees.push(createEmployeeRecord(employee));
    }
    return arrayOfEmployees;
}

function createTimeInEvent(employeeRecord, date) {
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10),
    };
    employeeRecord.timeInEvents.push(timeIn);
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, date) {
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10),
    };
    employeeRecord.timeOutEvents.push(timeOut);
    return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, date) {
    let clockedOut = 0;
    let clockedIn = 0;
    for (let timeIn of employeeRecord.timeInEvents) {
        if (timeIn.date == date) {
            clockedIn = timeIn.hour;
        }
    }
    for (let timeOut of employeeRecord.timeOutEvents) {
        if (timeOut.date == date) {
            clockedOut = timeOut.hour;
        }
    }
    return (clockedOut - clockedIn) / 100;
}

function wagesEarnedOnDate(employeeRecord, date) {
    let hours = hoursWorkedOnDate(employeeRecord, date);
    let wage = employeeRecord.payPerHour;
    return hours * wage;
}

function allWagesFor(employeeRecord) {
    let pays = [];
    for (let timeIn of employeeRecord.timeInEvents) {
        let date = timeIn.date;
        let wageOnDay = wagesEarnedOnDate(employeeRecord, date);
        pays.push(wageOnDay);
    }
    return pays.reduce(function(total, num) {
        return total + num;
    }, 0);
}

function calculatePayroll(employeeRecords) {
    let wages = [];
    for (let employee of employeeRecords) {
        wages.push(allWagesFor(employee));
    }
    return wages.reduce(function(total, num) {
        return total + num;
    }, 0);
}

function createEmployeeRecord(employee) {
    let employeeRecord = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
    return employeeRecord;
}

function createEmployeeRecords(employees) {
    let arrayOfEmployees = [];
    for (let employee of employees) {
        arrayOfEmployees.push(createEmployeeRecord(employee));
    }
    return arrayOfEmployees;
}

function createTimeInEvent(employeeRecord, date) {
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10),
    };
    employeeRecord.timeInEvents.push(timeIn);
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, date) {
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10),
    };
    employeeRecord.timeOutEvents.push(timeOut);
    return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, date) {
    let clockedOut = 0;
    let clockedIn = 0;
    for (let timeIn of employeeRecord.timeInEvents) {
        if (timeIn.date == date) {
            clockedIn = timeIn.hour;
        }
    }
    for (let timeOut of employeeRecord.timeOutEvents) {
        if (timeOut.date == date) {
            clockedOut = timeOut.hour;
        }
    }
    return (clockedOut - clockedIn) / 100;
}

function wagesEarnedOnDate(employeeRecord, date) {
    let hours = hoursWorkedOnDate(employeeRecord, date);
    let wage = employeeRecord.payPerHour;
    return hours * wage;
}

function allWagesFor(employeeRecord) {
    let pays = [];
    for (let timeIn of employeeRecord.timeInEvents) {
        let date = timeIn.date;
        let wageOnDay = wagesEarnedOnDate(employeeRecord, date);
        pays.push(wageOnDay);
    }
    return pays.reduce(function(total, num) {
        return total + num;
    }, 0);
}

function calculatePayroll(employeeRecords) {
    let wages = [];
    for (let employee of employeeRecords) {
        wages.push(allWagesFor(employee));
    }
    return wages.reduce(function(total, num) {
        return total + num;
    }, 0);
}