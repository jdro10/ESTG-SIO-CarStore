var mongoose = require('mongoose');
var Saft = require('../models/Saft');
var saftController = {};

saftController.xmljson = function (req, res) {
    Saft.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            res.json(collection);
        }
    });
};

saftController.info = function (req, res) {
    Saft.find({}).exec(function (err, col) {
        if (err) console.log(err);
        else {
            var stringifyJson = JSON.stringify(col);
            var object = JSON.parse(stringifyJson);

            var companyName = object[0].AuditFile.Header.CompanyName;
            var clients = object[0].AuditFile.MasterFiles.Customer;
            var date = object[0].AuditFile.Header;

            const numberOfClients = clients.length - 1;

            var suppliers = object[0].AuditFile.MasterFiles.Supplier;

            const numberOfSuppliers = suppliers.length;
            const numberOfSales = object[0].AuditFile.SourceDocuments.SalesInvoices.NumberOfEntries;

            var totalEntries = object[0].AuditFile.GeneralLedgerEntries.NumberOfEntries;

            var documentTotalSales = [];

            var grossTotal = object[0].AuditFile.SourceDocuments.SalesInvoices;
            var month = object[0].AuditFile.SourceDocuments.SalesInvoices;

            var monthArray = []
            var monthTotalArray = [];
            var monthNetArray = [];

            for (let i = 0; i < numberOfSales; i++) {
                monthArray[i] = 0;
                monthTotalArray[i] = 0;
                monthNetArray[i] = 0;
                documentTotalSales[i] = object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice[i].DocumentTotals.GrossTotal;
            }

            for (let i = 0; i < numberOfSales; i++) {
                switch (month.Invoice[i].Period) {
                    case '01':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '02':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '03':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '04':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '05':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '06':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '07':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '08':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '09':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '10':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '11':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                    case '12':
                        monthTotalArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.GrossTotal);
                        monthNetArray[month.Invoice[i].Period - 1]
                            += parseFloat(grossTotal.Invoice[i].DocumentTotals.NetTotal);
                        monthArray[month.Invoice[i].Period - 1]++;
                        break;
                }
            }

            var totalCredit = parseInt(object[0].AuditFile.SourceDocuments.SalesInvoices.TotalCredit);

            var costumers = [];
            var suppliers = [];

            for (let i = 1; i < numberOfClients + 1; i++) {
                costumers[i] = object[0].AuditFile.MasterFiles.Customer[i];
            }
            for (let i = 0; i < numberOfSuppliers; i++) {
                suppliers[i] = object[0].AuditFile.MasterFiles.Supplier[i];
            }

            var productsTam = object[0].AuditFile.MasterFiles.Product.length;
            var products = [];

            for (let i = 1; i < productsTam; i++) {
                products[i - 1] = object[0].AuditFile.MasterFiles.Product[i];
            }

            var totalEntries = object[0].AuditFile.GeneralLedgerEntries.NumberOfEntries;

            const numberOfPurchases = totalEntries - numberOfSales;

            var purchaseQuantity = [];
            var purchaseValue = [];

            for (let i = 0; i < numberOfPurchases; i++) {
                purchaseQuantity[i] = object[0].AuditFile.GeneralLedgerEntries.Journal[0].Transaction[i].Line.length;
            }

            for (let j = 2; j < numberOfPurchases; j++) {
                purchaseValue[j] = parseInt(object[0].AuditFile.GeneralLedgerEntries.Journal[0].Transaction[j].Line[0].CreditAmount);
            }

            var totalPurchased = 0;

            for (let i = 2; i < purchaseValue.length; i++) {
                totalPurchased += purchaseValue[i];
            }

            res.render("../views/dashboard", {
                companyName: companyName,
                numberOfClients: numberOfClients,
                numberOfSales: numberOfSales,
                numberOfSuppliers: numberOfSuppliers,
                numberOfPurchases: numberOfPurchases,
                monthTotalArray: monthTotalArray,
                totalCredit: totalCredit,
                costumers: costumers,
                totalPurchased: totalPurchased,
                suppliers: suppliers,
                monthTotalArray: monthTotalArray,
                products: products,
                monthArray: monthArray,
                date: date,
                monthNetArray: monthNetArray,
            });
        }
    });
};

saftController.clientDetail = function (req, res) {
    Saft.find({}).exec(function (err, col) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            var stringifyJson = JSON.stringify(col);
            var object = JSON.parse(stringifyJson);
            var clients = object[0].AuditFile.MasterFiles.Customer;
            var numberOfClients = clients.length - 1;

            var costumers = [];
            var foundCostumer;

            for (let i = 1; i < numberOfClients + 1; i++) {
                costumers[i] = object[0].AuditFile.MasterFiles.Customer[i];
                if (costumers[i].CustomerID === req.params.id) {
                    foundCostumer = costumers[i];
                }
            }

            res.render("../views/clientDetails", { foundCostumer: foundCostumer });
        }
    });
};

saftController.supplierDetail = function (req, res) {
    Saft.find({}).exec(function (err, col) {
        if (err) {
            console.log('Error:', err);
        }
        else {

            var stringifyJson = JSON.stringify(col);
            var object = JSON.parse(stringifyJson);
            var suppliers = object[0].AuditFile.MasterFiles.Supplier;
            var numberOfSuppliers = suppliers.length;

            var suppliers = [];
            var foundSupplier;

            for (let i = 0; i < numberOfSuppliers; i++) {
                suppliers[i] = object[0].AuditFile.MasterFiles.Supplier[i];

                if (suppliers[i].SupplierID === req.params.id) {
                    foundSupplier = suppliers[i];
                    break;
                }
            }
            res.render("../views/supplierDetails", { foundSupplier: foundSupplier });
        }
    });
};

saftController.invoicesDetails = function (req, res) {
    Saft.find({}).exec(function (err, col) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            var stringifyJson = JSON.stringify(col);
            var object = JSON.parse(stringifyJson);
            var companyDetails = object[0].AuditFile.Header;
            var invoicesTAM = object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice.length;

            var invoiceQuantity = [];
            var documentTotal = [];
            var invoices = [];
            var invoiceInfo = [];

            for (let j = 0; j < invoicesTAM; j++) {
                if (object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice[j].Line.length === undefined) {
                    invoiceQuantity[j] = 0;
                } else {
                    invoiceQuantity[j] = object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice[j].Line.length;
                }
                invoiceInfo[j] = object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice[j];
            }

            for (let i = 0; i < invoicesTAM; i++) {
                invoices[i] = object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice[i].Line;
                documentTotal[i] = object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice[i].DocumentTotals;
            }

            var invoiceQuantityId = invoiceQuantity[req.params.index];
            var invoiceToPass = invoices[req.params.index];
            var documentTotalToPass = documentTotal[req.params.index];
            var invoiceinfoToPass = invoiceInfo[req.params.index];

            res.render("../views/invoices", {
                companyDetails: companyDetails,
                invoiceToPass: invoiceToPass,
                invoiceQuantityId: invoiceQuantityId,
                documentTotalToPass: documentTotalToPass,
                invoiceinfoToPass: invoiceinfoToPass,
            });
        }
    });
};

saftController.invoicesDatabase = function (req, res) {
    Saft.find({}).exec(function (err, col) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            var stringifyJson = JSON.stringify(col);
            var object = JSON.parse(stringifyJson);

            var invoicesArray = [];

            var invoices = object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice;

            for (var i = 0; i < invoices.length; i++) {
                invoicesArray[i] = object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice[i];
            }
            res.render("../views/invoicesDatabase", { invoices: invoices, invoicesArray: invoicesArray });
        }
    });
};

saftController.salesDetails = function (req, res) {
    Saft.find({}).exec(function (err, col) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            var stringifyJson = JSON.stringify(col);
            var object = JSON.parse(stringifyJson);

            const numberOfSales = object[0].AuditFile.SourceDocuments.SalesInvoices.NumberOfEntries;

            var salesValue = object[0].AuditFile.GeneralLedgerEntries.Journal[1];
            var monthValueArray = [];

            var customerSales = [];
            var customerSpent = [];

            for (var i = 0; i < numberOfSales; i++) {
                customerSales[i] = object[0].AuditFile.SourceDocuments.SalesInvoices.Invoice[i].CustomerID;
            }

            for (var i = 4; i < 10; i++) {
                customerSpent[i] = object[0].AuditFile.MasterFiles.GeneralLedger[i].ClosingDebitBalance;
            }
            customerSales.sort();

            var repeated = {};
            for (var i = 0, j = customerSales.length; i < j; i++) {
                repeated[customerSales[i]] = (repeated[customerSales[i]] || 0) + 1;
            }

            for (let i = 0; i < numberOfSales; i++) {
                monthValueArray[i] = salesValue.Transaction[i].Line[1].CreditAmount;
            }
            res.render('../views/sales', { repeated: repeated, customerSpent: customerSpent });
        }
    });
};

saftController.purchaseDetails = function (req, res) {
    Saft.find({}).exec(function (err, col) {
        if (err) {
            console.log('Error:', err);
        }
        else {
            var stringifyJson = JSON.stringify(col);
            var object = JSON.parse(stringifyJson);

            const numberOfSales = object[0].AuditFile.SourceDocuments.SalesInvoices.NumberOfEntries;

            var totalEntries = object[0].AuditFile.GeneralLedgerEntries.NumberOfEntries;

            const numberOfPurchases = totalEntries - numberOfSales;

            var monthArray = [];
            var monthTotalArray = [];

            for (let i = 0; i < numberOfSales; i++) {
                monthArray[i] = 0;
                monthTotalArray[i] = 0;
            }

            var documentTotalPurchases = [];

            for (let i = 0; i < numberOfPurchases; i++) {
                documentTotalPurchases[i] = object[0].AuditFile.GeneralLedgerEntries.Journal[0].Transaction[i];
            }

            var creditAmount = object[0].AuditFile.GeneralLedgerEntries.Journal[0];
            var month = object[0].AuditFile.GeneralLedgerEntries.Journal[0];

            for (let i = 2; i < numberOfPurchases; i++) {
                switch (month.Transaction[i].Period) {
                    case '1':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '2':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '3':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '4':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '5':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '6':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '7':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '8':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '9':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '10':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '11':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                    case '12':
                        monthTotalArray[month.Transaction[i].Period - 1]
                            += parseFloat(creditAmount.Transaction[i].Line[0].CreditAmount);
                        monthArray[month.Transaction[i].Period - 1]++;
                        break;
                }
            }

            var supplierPurchases = object[0].AuditFile.MasterFiles;
            var supplierPurchasesArray = [];

            for(var i = 18; i < 26; i++){
                supplierPurchasesArray[i-18] = supplierPurchases.GeneralLedger[i].ClosingCreditBalance;
            }

            res.render('../views/purchasesDetails', { monthTotalArray: monthTotalArray,
            monthArray: monthArray,
            supplierPurchasesArray:supplierPurchasesArray});
        }
    });
};

module.exports = saftController;