(function () {
    window.onload = pageLoad;

    function pageLoad() {
        document.getElementById("create").onclick = createAccount;
    }

    function createAccount() {
        var accountName = document.getElementById("bankName").value;
        var accountBalanc = document.getElementById("deposit").value;
        var final = {"Account Name": accountName, "Deposit": accountBalanc};
        var addAccount = (function () {

            return function (final) {
                accountInfoList.push(final);
                return accountInfoList
            }
        })();
        var accountInfoList = [];
        var insert = addAccount(final);
        document.getElementById("createhere").innerHTML += "\n Account Name: " + final["Account Name"]+ "  DEposit AMount: " + final["Deposit"];
    }

})();