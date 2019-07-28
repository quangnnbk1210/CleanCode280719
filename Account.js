class Account {
    constructor(credit, debit, accountNumber){
        this.credit = credit,
        this.debit = debit,
        this.accountNumber = accountNumber
    }

    
}

function isCreditAccount(account){
    return account.credit !== null;
}

function isDebitAccount(account){
    return account.debit !== null && account.credit == null;
}

function isUnidentifiedAccount(account){
    return account.debit == null && account.credit == null;
}

function createCreditAccount(){
    return new Account(Math.random(), Math.random(), Math.random());
}

function createDebitAccount(){
    return new Account(null, Math.random(), Math.random());
}

function createUnidentifiedAccount(){
    return new Account(null, null, Math.random());
}

function getFollowingList(list, typeAccounts){
    if(typeAccounts == "credit"){
        return list.filter(function(account){
            return isCreditAccount(account);
        })
    } 
    else if (typeAccounts == "debit"){
        return list.filter(function(account){
            return isDebitAccount(account);
        })
    }else if( typeAccounts == "Unidentified") {
        return list.filter(function(account){
            return isUnidentifiedAccount(account);
        }) 
    }
}

function orderDescending(accountList){
    return accountList.sort(function(a,b){
        return b.accountNumber - a.accountNumber;
    })
}

function sortAccountList(accountList){
    var res = [];
    orderDescending(getFollowingList(accountList, "credit")).map(function(account){
        res.push(account);
    });
    orderDescending(getFollowingList(accountList, "debit")).map(function(account){
        res.push(account);
    });;
    orderDescending(getFollowingList(accountList, "Unidentified")).map(function(account){
        res.push(account);
    });;
    return res;
}

var accountList = [];

accountList.push(createUnidentifiedAccount());
accountList.push(createDebitAccount());
accountList.push(createDebitAccount());
accountList.push(createCreditAccount());
accountList.push(createUnidentifiedAccount());
accountList.push(createCreditAccount());

// console.log("list" , accountList);
console.log(sortAccountList(accountList));
