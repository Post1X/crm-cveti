var DataTypes = require("sequelize").DataTypes;
var _access = require("./access");
var _accessusers = require("./accessusers");
var _aeroflottransaction = require("./aeroflottransaction");
var _article = require("./article");
var _asrticleusers = require("./asrticleusers");
var _barcode = require("./barcode");
var _box = require("./box");
var _cardpay = require("./cardpay");
var _cashes = require("./cashes");
var _cashestopayment = require("./cashestopayment");
var _change = require("./change");
var _changepass = require("./changepass");
var _checkchange = require("./checkchange");
var _checkitem = require("./checkitem");
var _checkitemhistory = require("./checkitemhistory");
var _checkkomplekt = require("./checkkomplekt");
var _checkpayment = require("./checkpayment");
var _checkpaymenttomoneydoc = require("./checkpaymenttomoneydoc");
var _checks = require("./checks");
var _checktook = require("./checktook");
var _client = require("./client");
var _clientaccount = require("./clientaccount");
var _clientcontact = require("./clientcontact");
var _clientcontract = require("./clientcontract");
var _clientdate = require("./clientdate");
var _clientdiscountitemgroup = require("./clientdiscountitemgroup");
var _clientextrabonus = require("./clientextrabonus");
var _clientgroup = require("./clientgroup");
var _clientgroupdiscountitemgroup = require("./clientgroupdiscountitemgroup");
var _clientgroupinterval = require("./clientgroupinterval");
var _clientinterval = require("./clientinterval");
var _clientlevel = require("./clientlevel");
var _clientphone = require("./clientphone");
var _clienttag = require("./clienttag");
var _clienttoupload = require("./clienttoupload");
var _clienttransaction = require("./clienttransaction");
var _contacttype = require("./contacttype");
var _contracttransaction = require("./contracttransaction");
var _currency = require("./currency");
var _day = require("./day");
var _department = require("./department");
var _deposit = require("./deposit");
var _discount = require("./discount");
var _discountclient = require("./discountclient");
var _discountitem = require("./discountitem");
var _discounttostation = require("./discounttostation");
var _doc = require("./doc");
var _doc6partition = require("./doc6partition");
var _docbox = require("./docbox");
var _docitem = require("./docitem");
var _docitem16 = require("./docitem16");
var _docitem20 = require("./docitem20");
var _docitem23 = require("./docitem23");
var _docitem8 = require("./docitem8");
var _docitem8_time = require("./docitem8_time");
var _docitem_time = require("./docitem_time");
var _docitemlog = require("./docitemlog");
var _dockomplekt = require("./dockomplekt");
var _doclog = require("./doclog");
var _doclogs = require("./doclogs");
var _docpayment = require("./docpayment");
var _doctook = require("./doctook");
var _exceldownload = require("./exceldownload");
var _florasync = require("./florasync");
var _florasyncnow = require("./florasyncnow");
var _florasyncqueue = require("./florasyncqueue");
var _ids = require("./ids");
var _item = require("./item");
var _itemaltname = require("./itemaltname");
var _itembind = require("./itembind");
var _itembox = require("./itembox");
var _itemgroup = require("./itemgroup");
var _itemgroupbind = require("./itemgroupbind");
var _itemgrouponstation = require("./itemgrouponstation");
var _itemimage = require("./itemimage");
var _itemmeasure = require("./itemmeasure");
var _itemsoot = require("./itemsoot");
var _itemtag = require("./itemtag");
var _itemtoupload = require("./itemtoupload");
var _komplekt = require("./komplekt");
var _labelprint = require("./labelprint");
var _license = require("./license");
var _log = require("./log");
var _magplan = require("./magplan");
var _measure = require("./measure");
var _message = require("./message");
var _messagefront = require("./messagefront");
var _moneydoc = require("./moneydoc");
var _moneydocitem = require("./moneydocitem");
var _moneymove = require("./moneymove");
var _nalog = require("./nalog");
var _nds = require("./nds");
var _newversion = require("./newversion");
var _operation = require("./operation");
var _ordercomment = require("./ordercomment");
var _orders = require("./orders");
var _ordertostation = require("./ordertostation");
var _orderwish = require("./orderwish");
var _organization = require("./organization");
var _payment = require("./payment");
var _paymenttostation = require("./paymenttostation");
var _price = require("./price");
var _priceformula = require("./priceformula");
var _pricehistory = require("./pricehistory");
var _pricelist = require("./pricelist");
var _pricelog = require("./pricelog");
var _pricelog2 = require("./pricelog2");
var _printing = require("./printing");
var _promocode = require("./promocode");
var _promocodegroup = require("./promocodegroup");
var _promocodetostation = require("./promocodetostation");
var _pushmessage = require("./pushmessage");
var _refresh = require("./refresh");
var _schet = require("./schet");
var _sender = require("./sender");
var _senderdoc = require("./senderdoc");
var _senderdocitem = require("./senderdocitem");
var _senderlog = require("./senderlog");
var _settings = require("./settings");
var _smstext = require("./smstext");
var _station = require("./station");
var _status = require("./status");
var _stock = require("./stock");
var _stockinterval = require("./stockinterval");
var _stockitem = require("./stockitem");
var _stocktostation = require("./stocktostation");
var _store = require("./store");
var _storemove = require("./storemove");
var _storemove_time = require("./storemove_time");
var _stores = require("./stores");
var _storestype = require("./storestype");
var _supplier = require("./supplier");
var _synchistory = require("./synchistory");
var _tag = require("./tag");
var _taggroup = require("./taggroup");
var _tcd = require("./tcd");
var _timecheckitem = require("./timecheckitem");
var _timeitemmeasure = require("./timeitemmeasure");
var _timekomplekt = require("./timekomplekt");
var _todelete = require("./todelete");
var _toupload = require("./toupload");
var _usercoordinate = require("./usercoordinate");
var _userday = require("./userday");
var _userpercentstage = require("./userpercentstage");
var _users = require("./users");
var _usersgroup = require("./usersgroup");
var _usersgrouppercent = require("./usersgrouppercent");
var _userspercent = require("./userspercent");
var _usertablereport = require("./usertablereport");
var _usertransaction = require("./usertransaction");
var _wish = require("./wish");
var _wishgroup = require("./wishgroup");
var _xxx = require("./xxx");

function initModels(sequelize) {
  var access = _access(sequelize, DataTypes);
  var accessusers = _accessusers(sequelize, DataTypes);
  var aeroflottransaction = _aeroflottransaction(sequelize, DataTypes);
  var article = _article(sequelize, DataTypes);
  var asrticleusers = _asrticleusers(sequelize, DataTypes);
  var barcode = _barcode(sequelize, DataTypes);
  var box = _box(sequelize, DataTypes);
  var cardpay = _cardpay(sequelize, DataTypes);
  var cashes = _cashes(sequelize, DataTypes);
  var cashestopayment = _cashestopayment(sequelize, DataTypes);
  var change = _change(sequelize, DataTypes);
  var changepass = _changepass(sequelize, DataTypes);
  var checkchange = _checkchange(sequelize, DataTypes);
  var checkitem = _checkitem(sequelize, DataTypes);
  var checkitemhistory = _checkitemhistory(sequelize, DataTypes);
  var checkkomplekt = _checkkomplekt(sequelize, DataTypes);
  var checkpayment = _checkpayment(sequelize, DataTypes);
  var checkpaymenttomoneydoc = _checkpaymenttomoneydoc(sequelize, DataTypes);
  var checks = _checks(sequelize, DataTypes);
  var checktook = _checktook(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var clientaccount = _clientaccount(sequelize, DataTypes);
  var clientcontact = _clientcontact(sequelize, DataTypes);
  var clientcontract = _clientcontract(sequelize, DataTypes);
  var clientdate = _clientdate(sequelize, DataTypes);
  var clientdiscountitemgroup = _clientdiscountitemgroup(sequelize, DataTypes);
  var clientextrabonus = _clientextrabonus(sequelize, DataTypes);
  var clientgroup = _clientgroup(sequelize, DataTypes);
  var clientgroupdiscountitemgroup = _clientgroupdiscountitemgroup(sequelize, DataTypes);
  var clientgroupinterval = _clientgroupinterval(sequelize, DataTypes);
  var clientinterval = _clientinterval(sequelize, DataTypes);
  var clientlevel = _clientlevel(sequelize, DataTypes);
  var clientphone = _clientphone(sequelize, DataTypes);
  var clienttag = _clienttag(sequelize, DataTypes);
  var clienttoupload = _clienttoupload(sequelize, DataTypes);
  var clienttransaction = _clienttransaction(sequelize, DataTypes);
  var contacttype = _contacttype(sequelize, DataTypes);
  var contracttransaction = _contracttransaction(sequelize, DataTypes);
  var currency = _currency(sequelize, DataTypes);
  var day = _day(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var deposit = _deposit(sequelize, DataTypes);
  var discount = _discount(sequelize, DataTypes);
  var discountclient = _discountclient(sequelize, DataTypes);
  var discountitem = _discountitem(sequelize, DataTypes);
  var discounttostation = _discounttostation(sequelize, DataTypes);
  var doc = _doc(sequelize, DataTypes);
  var doc6partition = _doc6partition(sequelize, DataTypes);
  var docbox = _docbox(sequelize, DataTypes);
  var docitem = _docitem(sequelize, DataTypes);
  var docitem16 = _docitem16(sequelize, DataTypes);
  var docitem20 = _docitem20(sequelize, DataTypes);
  var docitem23 = _docitem23(sequelize, DataTypes);
  var docitem8 = _docitem8(sequelize, DataTypes);
  var docitem8_time = _docitem8_time(sequelize, DataTypes);
  var docitem_time = _docitem_time(sequelize, DataTypes);
  var docitemlog = _docitemlog(sequelize, DataTypes);
  var dockomplekt = _dockomplekt(sequelize, DataTypes);
  var doclog = _doclog(sequelize, DataTypes);
  var doclogs = _doclogs(sequelize, DataTypes);
  var docpayment = _docpayment(sequelize, DataTypes);
  var doctook = _doctook(sequelize, DataTypes);
  var exceldownload = _exceldownload(sequelize, DataTypes);
  var florasync = _florasync(sequelize, DataTypes);
  var florasyncnow = _florasyncnow(sequelize, DataTypes);
  var florasyncqueue = _florasyncqueue(sequelize, DataTypes);
  var ids = _ids(sequelize, DataTypes);
  var item = _item(sequelize, DataTypes);
  var itemaltname = _itemaltname(sequelize, DataTypes);
  var itembind = _itembind(sequelize, DataTypes);
  var itembox = _itembox(sequelize, DataTypes);
  var itemgroup = _itemgroup(sequelize, DataTypes);
  var itemgroupbind = _itemgroupbind(sequelize, DataTypes);
  var itemgrouponstation = _itemgrouponstation(sequelize, DataTypes);
  var itemimage = _itemimage(sequelize, DataTypes);
  var itemmeasure = _itemmeasure(sequelize, DataTypes);
  var itemsoot = _itemsoot(sequelize, DataTypes);
  var itemtag = _itemtag(sequelize, DataTypes);
  var itemtoupload = _itemtoupload(sequelize, DataTypes);
  var komplekt = _komplekt(sequelize, DataTypes);
  var labelprint = _labelprint(sequelize, DataTypes);
  var license = _license(sequelize, DataTypes);
  var log = _log(sequelize, DataTypes);
  var magplan = _magplan(sequelize, DataTypes);
  var measure = _measure(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var messagefront = _messagefront(sequelize, DataTypes);
  var moneydoc = _moneydoc(sequelize, DataTypes);
  var moneydocitem = _moneydocitem(sequelize, DataTypes);
  var moneymove = _moneymove(sequelize, DataTypes);
  var nalog = _nalog(sequelize, DataTypes);
  var nds = _nds(sequelize, DataTypes);
  var newversion = _newversion(sequelize, DataTypes);
  var operation = _operation(sequelize, DataTypes);
  var ordercomment = _ordercomment(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var ordertostation = _ordertostation(sequelize, DataTypes);
  var orderwish = _orderwish(sequelize, DataTypes);
  var organization = _organization(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var paymenttostation = _paymenttostation(sequelize, DataTypes);
  var price = _price(sequelize, DataTypes);
  var priceformula = _priceformula(sequelize, DataTypes);
  var pricehistory = _pricehistory(sequelize, DataTypes);
  var pricelist = _pricelist(sequelize, DataTypes);
  var pricelog = _pricelog(sequelize, DataTypes);
  var pricelog2 = _pricelog2(sequelize, DataTypes);
  var printing = _printing(sequelize, DataTypes);
  var promocode = _promocode(sequelize, DataTypes);
  var promocodegroup = _promocodegroup(sequelize, DataTypes);
  var promocodetostation = _promocodetostation(sequelize, DataTypes);
  var pushmessage = _pushmessage(sequelize, DataTypes);
  var refresh = _refresh(sequelize, DataTypes);
  var schet = _schet(sequelize, DataTypes);
  var sender = _sender(sequelize, DataTypes);
  var senderdoc = _senderdoc(sequelize, DataTypes);
  var senderdocitem = _senderdocitem(sequelize, DataTypes);
  var senderlog = _senderlog(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var smstext = _smstext(sequelize, DataTypes);
  var station = _station(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var stock = _stock(sequelize, DataTypes);
  var stockinterval = _stockinterval(sequelize, DataTypes);
  var stockitem = _stockitem(sequelize, DataTypes);
  var stocktostation = _stocktostation(sequelize, DataTypes);
  var store = _store(sequelize, DataTypes);
  var storemove = _storemove(sequelize, DataTypes);
  var storemove_time = _storemove_time(sequelize, DataTypes);
  var stores = _stores(sequelize, DataTypes);
  var storestype = _storestype(sequelize, DataTypes);
  var supplier = _supplier(sequelize, DataTypes);
  var synchistory = _synchistory(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);
  var taggroup = _taggroup(sequelize, DataTypes);
  var tcd = _tcd(sequelize, DataTypes);
  var timecheckitem = _timecheckitem(sequelize, DataTypes);
  var timeitemmeasure = _timeitemmeasure(sequelize, DataTypes);
  var timekomplekt = _timekomplekt(sequelize, DataTypes);
  var todelete = _todelete(sequelize, DataTypes);
  var toupload = _toupload(sequelize, DataTypes);
  var usercoordinate = _usercoordinate(sequelize, DataTypes);
  var userday = _userday(sequelize, DataTypes);
  var userpercentstage = _userpercentstage(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var usersgroup = _usersgroup(sequelize, DataTypes);
  var usersgrouppercent = _usersgrouppercent(sequelize, DataTypes);
  var userspercent = _userspercent(sequelize, DataTypes);
  var usertablereport = _usertablereport(sequelize, DataTypes);
  var usertransaction = _usertransaction(sequelize, DataTypes);
  var wish = _wish(sequelize, DataTypes);
  var wishgroup = _wishgroup(sequelize, DataTypes);
  var xxx = _xxx(sequelize, DataTypes);

  accessusers.belongsTo(access, { as: "access", foreignKey: "accessid"});
  access.hasMany(accessusers, { as: "accessusers", foreignKey: "accessid"});
  log.belongsTo(access, { as: "access", foreignKey: "accessid"});
  access.hasMany(log, { as: "logs", foreignKey: "accessid"});
  asrticleusers.belongsTo(article, { as: "article", foreignKey: "articleid"});
  article.hasMany(asrticleusers, { as: "asrticleusers", foreignKey: "articleid"});
  cashes.belongsTo(article, { as: "article", foreignKey: "articleid"});
  article.hasMany(cashes, { as: "cashs", foreignKey: "articleid"});
  deposit.belongsTo(article, { as: "article", foreignKey: "articleid"});
  article.hasMany(deposit, { as: "deposits", foreignKey: "articleid"});
  moneydoc.belongsTo(article, { as: "article", foreignKey: "articleid"});
  article.hasMany(moneydoc, { as: "moneydocs", foreignKey: "articleid"});
  moneymove.belongsTo(article, { as: "article", foreignKey: "articleid"});
  article.hasMany(moneymove, { as: "moneymoves", foreignKey: "articleid"});
  docbox.belongsTo(box, { as: "box", foreignKey: "boxid"});
  box.hasMany(docbox, { as: "docboxes", foreignKey: "boxid"});
  itembox.belongsTo(box, { as: "box", foreignKey: "boxid"});
  box.hasMany(itembox, { as: "itemboxes", foreignKey: "boxid"});
  cashes.belongsTo(cashes, { as: "centralcash", foreignKey: "centralcashesid"});
  cashes.hasMany(cashes, { as: "cashs", foreignKey: "centralcashesid"});
  cashestopayment.belongsTo(cashes, { as: "cash", foreignKey: "cashesid"});
  cashes.hasMany(cashestopayment, { as: "cashestopayments", foreignKey: "cashesid"});
  docpayment.belongsTo(cashes, { as: "cash", foreignKey: "cashesid"});
  cashes.hasMany(docpayment, { as: "docpayments", foreignKey: "cashesid"});
  moneydoc.belongsTo(cashes, { as: "cash", foreignKey: "cashesid"});
  cashes.hasMany(moneydoc, { as: "moneydocs", foreignKey: "cashesid"});
  moneydocitem.belongsTo(cashes, { as: "cashes2", foreignKey: "cashes2id"});
  cashes.hasMany(moneydocitem, { as: "moneydocitems", foreignKey: "cashes2id"});
  moneydocitem.belongsTo(cashes, { as: "cash", foreignKey: "cashesid"});
  cashes.hasMany(moneydocitem, { as: "cashes_moneydocitems", foreignKey: "cashesid"});
  moneymove.belongsTo(cashes, { as: "cash", foreignKey: "cashesid"});
  cashes.hasMany(moneymove, { as: "moneymoves", foreignKey: "cashesid"});
  checkchange.belongsTo(change, { as: "change", foreignKey: "changeid"});
  change.hasMany(checkchange, { as: "checkchanges", foreignKey: "changeid"});
  checkchange.belongsTo(changepass, { as: "changepass", foreignKey: "changepassid"});
  changepass.hasMany(checkchange, { as: "checkchanges", foreignKey: "changepassid"});
  checkkomplekt.belongsTo(checkitem, { as: "checkitem", foreignKey: "checkitemid"});
  checkitem.hasMany(checkkomplekt, { as: "checkkomplekts", foreignKey: "checkitemid"});
  docitem.belongsTo(checkitem, { as: "checkitem", foreignKey: "checkitemid"});
  checkitem.hasMany(docitem, { as: "docitems", foreignKey: "checkitemid"});
  docpayment.belongsTo(checkpayment, { as: "checkpayment", foreignKey: "checkpaymentid"});
  checkpayment.hasMany(docpayment, { as: "docpayments", foreignKey: "checkpaymentid"});
  checkchange.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(checkchange, { as: "checkchanges", foreignKey: "checkid"});
  checkitem.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(checkitem, { as: "checkitems", foreignKey: "checkid"});
  checkkomplekt.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(checkkomplekt, { as: "checkkomplekts", foreignKey: "checkid"});
  checkpayment.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(checkpayment, { as: "checkpayments", foreignKey: "checkid"});
  checks.belongsTo(checks, { as: "parentcheck", foreignKey: "parentcheckid"});
  checks.hasMany(checks, { as: "checks", foreignKey: "parentcheckid"});
  contracttransaction.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(contracttransaction, { as: "contracttransactions", foreignKey: "checkid"});
  doc.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(doc, { as: "docs", foreignKey: "checkid"});
  docitem16.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(docitem16, { as: "docitem16s", foreignKey: "checkid"});
  orders.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(orders, { as: "orders", foreignKey: "checkid"});
  printing.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(printing, { as: "printings", foreignKey: "checkid"});
  timecheckitem.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(timecheckitem, { as: "timecheckitems", foreignKey: "checkid"});
  usertransaction.belongsTo(checks, { as: "check", foreignKey: "checkid"});
  checks.hasMany(usertransaction, { as: "usertransactions", foreignKey: "checkid"});
  checks.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(checks, { as: "checks", foreignKey: "clientid"});
  clientcontract.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(clientcontract, { as: "clientcontracts", foreignKey: "clientid"});
  clientdate.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(clientdate, { as: "clientdates", foreignKey: "clientid"});
  clientdiscountitemgroup.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(clientdiscountitemgroup, { as: "clientdiscountitemgroups", foreignKey: "clientid"});
  clientinterval.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(clientinterval, { as: "clientintervals", foreignKey: "clientid"});
  clientlevel.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(clientlevel, { as: "clientlevels", foreignKey: "clientid"});
  clientphone.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(clientphone, { as: "clientphones", foreignKey: "clientid"});
  clienttag.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(clienttag, { as: "clienttags", foreignKey: "clientid"});
  clienttoupload.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(clienttoupload, { as: "clienttouploads", foreignKey: "clientid"});
  clienttransaction.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(clienttransaction, { as: "clienttransactions", foreignKey: "clientid"});
  doc.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(doc, { as: "docs", foreignKey: "clientid"});
  moneydoc.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(moneydoc, { as: "moneydocs", foreignKey: "clientid"});
  senderdocitem.belongsTo(client, { as: "client", foreignKey: "clientid"});
  client.hasMany(senderdocitem, { as: "senderdocitems", foreignKey: "clientid"});
  client.belongsTo(clientaccount, { as: "clientaccount", foreignKey: "clientaccountid"});
  clientaccount.hasMany(client, { as: "clients", foreignKey: "clientaccountid"});
  checks.belongsTo(clientcontract, { as: "contract", foreignKey: "contractid"});
  clientcontract.hasMany(checks, { as: "checks", foreignKey: "contractid"});
  contracttransaction.belongsTo(clientcontract, { as: "contract", foreignKey: "contractid"});
  clientcontract.hasMany(contracttransaction, { as: "contracttransactions", foreignKey: "contractid"});
  doc.belongsTo(clientcontract, { as: "contract", foreignKey: "contractid"});
  clientcontract.hasMany(doc, { as: "docs", foreignKey: "contractid"});
  moneydoc.belongsTo(clientcontract, { as: "contract", foreignKey: "contractid"});
  clientcontract.hasMany(moneydoc, { as: "moneydocs", foreignKey: "contractid"});
  client.belongsTo(clientgroup, { as: "clientgroup", foreignKey: "clientgroupid"});
  clientgroup.hasMany(client, { as: "clients", foreignKey: "clientgroupid"});
  clientextrabonus.belongsTo(clientgroup, { as: "clientgroup", foreignKey: "clientgroupid"});
  clientgroup.hasMany(clientextrabonus, { as: "clientextrabonus", foreignKey: "clientgroupid"});
  clientgroupdiscountitemgroup.belongsTo(clientgroup, { as: "clientgroup", foreignKey: "clientgroupid"});
  clientgroup.hasMany(clientgroupdiscountitemgroup, { as: "clientgroupdiscountitemgroups", foreignKey: "clientgroupid"});
  clientgroupinterval.belongsTo(clientgroup, { as: "clientgroup", foreignKey: "clientgroupid"});
  clientgroup.hasMany(clientgroupinterval, { as: "clientgroupintervals", foreignKey: "clientgroupid"});
  checkpayment.belongsTo(day, { as: "day", foreignKey: "dayid"});
  day.hasMany(checkpayment, { as: "checkpayments", foreignKey: "dayid"});
  checks.belongsTo(day, { as: "day", foreignKey: "dayid"});
  day.hasMany(checks, { as: "checks", foreignKey: "dayid"});
  deposit.belongsTo(day, { as: "day", foreignKey: "dayid"});
  day.hasMany(deposit, { as: "deposits", foreignKey: "dayid"});
  doc.belongsTo(day, { as: "day", foreignKey: "dayid"});
  day.hasMany(doc, { as: "docs", foreignKey: "dayid"});
  docpayment.belongsTo(day, { as: "day", foreignKey: "dayid"});
  day.hasMany(docpayment, { as: "docpayments", foreignKey: "dayid"});
  moneydoc.belongsTo(day, { as: "day", foreignKey: "dayid"});
  day.hasMany(moneydoc, { as: "moneydocs", foreignKey: "dayid"});
  item.belongsTo(department, { as: "department", foreignKey: "departmentid"});
  department.hasMany(item, { as: "items", foreignKey: "departmentid"});
  checktook.belongsTo(deposit, { as: "deposit", foreignKey: "depositid"});
  deposit.hasMany(checktook, { as: "checktooks", foreignKey: "depositid"});
  moneydoc.belongsTo(deposit, { as: "deposit", foreignKey: "depositid"});
  deposit.hasMany(moneydoc, { as: "moneydocs", foreignKey: "depositid"});
  discountitem.belongsTo(discount, { as: "discount", foreignKey: "discountid"});
  discount.hasMany(discountitem, { as: "discountitems", foreignKey: "discountid"});
  discounttostation.belongsTo(discount, { as: "discount", foreignKey: "discountid"});
  discount.hasMany(discounttostation, { as: "discounttostations", foreignKey: "discountid"});
  promocode.belongsTo(discount, { as: "discount", foreignKey: "discountid"});
  discount.hasMany(promocode, { as: "promocodes", foreignKey: "discountid"});
  contracttransaction.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(contracttransaction, { as: "contracttransactions", foreignKey: "docid"});
  docbox.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(docbox, { as: "docboxes", foreignKey: "docid"});
  docitem.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(docitem, { as: "docitems", foreignKey: "docid"});
  docitem16.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(docitem16, { as: "docitem16s", foreignKey: "docid"});
  docitem20.belongsTo(doc, { as: "doc21", foreignKey: "doc21id"});
  doc.hasMany(docitem20, { as: "docitem20s", foreignKey: "doc21id"});
  docitem20.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(docitem20, { as: "doc_docitem20s", foreignKey: "docid"});
  docitem23.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(docitem23, { as: "docitem23s", foreignKey: "docid"});
  docitem8.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(docitem8, { as: "docitem8s", foreignKey: "docid"});
  dockomplekt.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(dockomplekt, { as: "dockomplekts", foreignKey: "docid"});
  docpayment.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(docpayment, { as: "docpayments", foreignKey: "docid"});
  doctook.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(doctook, { as: "doctooks", foreignKey: "docid"});
  moneydoc.belongsTo(doc, { as: "parentdoc", foreignKey: "parentdocid"});
  doc.hasMany(moneydoc, { as: "moneydocs", foreignKey: "parentdocid"});
  pricehistory.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(pricehistory, { as: "pricehistories", foreignKey: "docid"});
  usertransaction.belongsTo(doc, { as: "doc", foreignKey: "docid"});
  doc.hasMany(usertransaction, { as: "usertransactions", foreignKey: "docid"});
  doc6partition.belongsTo(docitem, { as: "docitem", foreignKey: "docitemid"});
  docitem.hasMany(doc6partition, { as: "doc6partitions", foreignKey: "docitemid"});
  dockomplekt.belongsTo(docitem, { as: "docitem", foreignKey: "docitemid"});
  docitem.hasMany(dockomplekt, { as: "dockomplekts", foreignKey: "docitemid"});
  storemove.belongsTo(docitem, { as: "docitem", foreignKey: "docitemid"});
  docitem.hasMany(storemove, { as: "storemoves", foreignKey: "docitemid"});
  moneydoc.belongsTo(docpayment, { as: "docpayment", foreignKey: "docpaymentid"});
  docpayment.hasMany(moneydoc, { as: "moneydocs", foreignKey: "docpaymentid"});
  barcode.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(barcode, { as: "barcodes", foreignKey: "itemid"});
  checkitem.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(checkitem, { as: "checkitems", foreignKey: "itemid"});
  checkkomplekt.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(checkkomplekt, { as: "checkkomplekts", foreignKey: "itemid"});
  docitem.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(docitem, { as: "docitems", foreignKey: "itemid"});
  docitem.belongsTo(item, { as: "item2", foreignKey: "item2id"});
  item.hasMany(docitem, { as: "item2_docitems", foreignKey: "item2id"});
  docitem8.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(docitem8, { as: "docitem8s", foreignKey: "itemid"});
  dockomplekt.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(dockomplekt, { as: "dockomplekts", foreignKey: "itemid"});
  itemaltname.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(itemaltname, { as: "itemaltnames", foreignKey: "itemid"});
  itembox.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(itembox, { as: "itemboxes", foreignKey: "itemid"});
  itemimage.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(itemimage, { as: "itemimages", foreignKey: "itemid"});
  itemmeasure.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(itemmeasure, { as: "itemmeasures", foreignKey: "itemid"});
  itemsoot.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(itemsoot, { as: "itemsoots", foreignKey: "itemid"});
  itemtag.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(itemtag, { as: "itemtags", foreignKey: "itemid"});
  itemtoupload.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(itemtoupload, { as: "itemtouploads", foreignKey: "itemid"});
  komplekt.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(komplekt, { as: "komplekts", foreignKey: "itemid"});
  komplekt.belongsTo(item, { as: "toitem", foreignKey: "toitemid"});
  item.hasMany(komplekt, { as: "toitem_komplekts", foreignKey: "toitemid"});
  price.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(price, { as: "prices", foreignKey: "itemid"});
  pricehistory.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(pricehistory, { as: "pricehistories", foreignKey: "itemid"});
  pricelog.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(pricelog, { as: "pricelogs", foreignKey: "itemid"});
  store.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(store, { as: "stores", foreignKey: "itemid"});
  timekomplekt.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(timekomplekt, { as: "timekomplekts", foreignKey: "itemid"});
  timekomplekt.belongsTo(item, { as: "toitem", foreignKey: "toitemid"});
  item.hasMany(timekomplekt, { as: "toitem_timekomplekts", foreignKey: "toitemid"});
  usersgrouppercent.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(usersgrouppercent, { as: "usersgrouppercents", foreignKey: "itemid"});
  userspercent.belongsTo(item, { as: "item", foreignKey: "itemid"});
  item.hasMany(userspercent, { as: "userspercents", foreignKey: "itemid"});
  clientdiscountitemgroup.belongsTo(itemgroup, { as: "itemgroup", foreignKey: "itemgroupid"});
  itemgroup.hasMany(clientdiscountitemgroup, { as: "clientdiscountitemgroups", foreignKey: "itemgroupid"});
  clientextrabonus.belongsTo(itemgroup, { as: "itemgroup", foreignKey: "itemgroupid"});
  itemgroup.hasMany(clientextrabonus, { as: "clientextrabonus", foreignKey: "itemgroupid"});
  clientgroupdiscountitemgroup.belongsTo(itemgroup, { as: "itemgroup", foreignKey: "itemgroupid"});
  itemgroup.hasMany(clientgroupdiscountitemgroup, { as: "clientgroupdiscountitemgroups", foreignKey: "itemgroupid"});
  discountitem.belongsTo(itemgroup, { as: "itemgroup", foreignKey: "itemgroupid"});
  itemgroup.hasMany(discountitem, { as: "discountitems", foreignKey: "itemgroupid"});
  item.belongsTo(itemgroup, { as: "itemgroup", foreignKey: "itemgroupid"});
  itemgroup.hasMany(item, { as: "items", foreignKey: "itemgroupid"});
  itemgrouponstation.belongsTo(itemgroup, { as: "itemgroup", foreignKey: "itemgroupid"});
  itemgroup.hasMany(itemgrouponstation, { as: "itemgrouponstations", foreignKey: "itemgroupid"});
  promocode.belongsTo(itemgroup, { as: "buyfromitemgroup_itemgroup", foreignKey: "buyfromitemgroup"});
  itemgroup.hasMany(promocode, { as: "promocodes", foreignKey: "buyfromitemgroup"});
  promocode.belongsTo(itemgroup, { as: "useinitemgroup", foreignKey: "useinitemgroupid"});
  itemgroup.hasMany(promocode, { as: "useinitemgroup_promocodes", foreignKey: "useinitemgroupid"});
  promocodegroup.belongsTo(itemgroup, { as: "buyfromitemgroup", foreignKey: "buyfromitemgroupid"});
  itemgroup.hasMany(promocodegroup, { as: "promocodegroups", foreignKey: "buyfromitemgroupid"});
  promocodegroup.belongsTo(itemgroup, { as: "useinitemgroup", foreignKey: "useinitemgroupid"});
  itemgroup.hasMany(promocodegroup, { as: "useinitemgroup_promocodegroups", foreignKey: "useinitemgroupid"});
  usersgrouppercent.belongsTo(itemgroup, { as: "itemgroup", foreignKey: "itemgroupid"});
  itemgroup.hasMany(usersgrouppercent, { as: "usersgrouppercents", foreignKey: "itemgroupid"});
  userspercent.belongsTo(itemgroup, { as: "itemgroup", foreignKey: "itemgroupid"});
  itemgroup.hasMany(userspercent, { as: "userspercents", foreignKey: "itemgroupid"});
  barcode.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(barcode, { as: "barcodes", foreignKey: "measureid"});
  checkitem.belongsTo(measure, { as: "basemeasure", foreignKey: "basemeasureid"});
  measure.hasMany(checkitem, { as: "checkitems", foreignKey: "basemeasureid"});
  checkitem.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(checkitem, { as: "measure_checkitems", foreignKey: "measureid"});
  checkkomplekt.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(checkkomplekt, { as: "checkkomplekts", foreignKey: "measureid"});
  docitem.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(docitem, { as: "docitems", foreignKey: "measureid"});
  docitem.belongsTo(measure, { as: "measure2", foreignKey: "measure2id"});
  measure.hasMany(docitem, { as: "measure2_docitems", foreignKey: "measure2id"});
  docitem8.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(docitem8, { as: "docitem8s", foreignKey: "measureid"});
  dockomplekt.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(dockomplekt, { as: "dockomplekts", foreignKey: "measureid"});
  item.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(item, { as: "items", foreignKey: "measureid"});
  itemmeasure.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(itemmeasure, { as: "itemmeasures", foreignKey: "measureid"});
  itemmeasure.belongsTo(measure, { as: "measure2", foreignKey: "measure2id"});
  measure.hasMany(itemmeasure, { as: "measure2_itemmeasures", foreignKey: "measure2id"});
  komplekt.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(komplekt, { as: "komplekts", foreignKey: "measureid"});
  price.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(price, { as: "prices", foreignKey: "measureid"});
  pricelog.belongsTo(measure, { as: "measure", foreignKey: "measureid"});
  measure.hasMany(pricelog, { as: "pricelogs", foreignKey: "measureid"});
  doctook.belongsTo(moneydoc, { as: "moneydoc", foreignKey: "moneydocid"});
  moneydoc.hasMany(doctook, { as: "doctooks", foreignKey: "moneydocid"});
  moneydocitem.belongsTo(moneydoc, { as: "moneydoc", foreignKey: "moneydocid"});
  moneydoc.hasMany(moneydocitem, { as: "moneydocitems", foreignKey: "moneydocid"});
  moneymove.belongsTo(moneydoc, { as: "moneydoc", foreignKey: "moneydocid"});
  moneydoc.hasMany(moneymove, { as: "moneymoves", foreignKey: "moneydocid"});
  usertransaction.belongsTo(moneydoc, { as: "moneydoc", foreignKey: "moneydocid"});
  moneydoc.hasMany(usertransaction, { as: "usertransactions", foreignKey: "moneydocid"});
  payment.belongsTo(nalog, { as: "nalog", foreignKey: "nalogid"});
  nalog.hasMany(payment, { as: "payments", foreignKey: "nalogid"});
  checks.belongsTo(operation, { as: "operation", foreignKey: "operationid"});
  operation.hasMany(checks, { as: "checks", foreignKey: "operationid"});
  doc.belongsTo(operation, { as: "type_operation", foreignKey: "type"});
  operation.hasMany(doc, { as: "docs", foreignKey: "type"});
  moneydoc.belongsTo(operation, { as: "type_operation", foreignKey: "type"});
  operation.hasMany(moneydoc, { as: "moneydocs", foreignKey: "type"});
  moneymove.belongsTo(operation, { as: "type_operation", foreignKey: "type"});
  operation.hasMany(moneymove, { as: "moneymoves", foreignKey: "type"});
  ordercomment.belongsTo(orders, { as: "order", foreignKey: "orderid"});
  orders.hasMany(ordercomment, { as: "ordercomments", foreignKey: "orderid"});
  ordertostation.belongsTo(orders, { as: "order", foreignKey: "orderid"});
  orders.hasMany(ordertostation, { as: "ordertostations", foreignKey: "orderid"});
  schet.belongsTo(organization, { as: "organization", foreignKey: "organizationid"});
  organization.hasMany(schet, { as: "schets", foreignKey: "organizationid"});
  cashestopayment.belongsTo(payment, { as: "payment", foreignKey: "paymentid"});
  payment.hasMany(cashestopayment, { as: "cashestopayments", foreignKey: "paymentid"});
  checkpayment.belongsTo(payment, { as: "payment", foreignKey: "paymentid"});
  payment.hasMany(checkpayment, { as: "checkpayments", foreignKey: "paymentid"});
  deposit.belongsTo(payment, { as: "payment", foreignKey: "paymentid"});
  payment.hasMany(deposit, { as: "deposits", foreignKey: "paymentid"});
  client.belongsTo(pricelist, { as: "pricelist", foreignKey: "pricelistid"});
  pricelist.hasMany(client, { as: "clients", foreignKey: "pricelistid"});
  komplekt.belongsTo(pricelist, { as: "pricelist", foreignKey: "pricelistid"});
  pricelist.hasMany(komplekt, { as: "komplekts", foreignKey: "pricelistid"});
  price.belongsTo(pricelist, { as: "pricelist", foreignKey: "pricelistid"});
  pricelist.hasMany(price, { as: "prices", foreignKey: "pricelistid"});
  pricehistory.belongsTo(pricelist, { as: "pricelist", foreignKey: "pricelistid"});
  pricelist.hasMany(pricehistory, { as: "pricehistories", foreignKey: "pricelistid"});
  pricelog.belongsTo(pricelist, { as: "pricelist", foreignKey: "pricelistid"});
  pricelist.hasMany(pricelog, { as: "pricelogs", foreignKey: "pricelistid"});
  stores.belongsTo(pricelist, { as: "pricelist", foreignKey: "pricelistid"});
  pricelist.hasMany(stores, { as: "stores", foreignKey: "pricelistid"});
  promocode.belongsTo(promocodegroup, { as: "promocodegroup", foreignKey: "promocodegroupid"});
  promocodegroup.hasMany(promocode, { as: "promocodes", foreignKey: "promocodegroupid"});
  senderdocitem.belongsTo(senderdoc, { as: "senderdoc", foreignKey: "senderdocid"});
  senderdoc.hasMany(senderdocitem, { as: "senderdocitems", foreignKey: "senderdocid"});
  sender.belongsTo(senderdocitem, { as: "senderdocitem", foreignKey: "senderdocitemid"});
  senderdocitem.hasMany(sender, { as: "senders", foreignKey: "senderdocitemid"});
  cashes.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(cashes, { as: "cashs", foreignKey: "stationid"});
  cashestopayment.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(cashestopayment, { as: "cashestopayments", foreignKey: "stationid"});
  checkitem.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(checkitem, { as: "checkitems", foreignKey: "stationid"});
  checkpayment.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(checkpayment, { as: "checkpayments", foreignKey: "stationid"});
  clienttoupload.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(clienttoupload, { as: "clienttouploads", foreignKey: "stationid"});
  deposit.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(deposit, { as: "deposits", foreignKey: "stationid"});
  discounttostation.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(discounttostation, { as: "discounttostations", foreignKey: "stationid"});
  itemgrouponstation.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(itemgrouponstation, { as: "itemgrouponstations", foreignKey: "stationid"});
  itemtoupload.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(itemtoupload, { as: "itemtouploads", foreignKey: "stationid"});
  log.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(log, { as: "logs", foreignKey: "stationid"});
  message.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(message, { as: "messages", foreignKey: "stationid"});
  messagefront.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(messagefront, { as: "messagefronts", foreignKey: "stationid"});
  orders.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(orders, { as: "orders", foreignKey: "stationid"});
  ordertostation.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(ordertostation, { as: "ordertostations", foreignKey: "stationid"});
  printing.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(printing, { as: "printings", foreignKey: "stationid"});
  refresh.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(refresh, { as: "refreshes", foreignKey: "stationid"});
  stocktostation.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(stocktostation, { as: "stocktostations", foreignKey: "stationid"});
  store.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(store, { as: "station_stores", foreignKey: "stationid"});
  timecheckitem.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(timecheckitem, { as: "timecheckitems", foreignKey: "stationid"});
  userday.belongsTo(station, { as: "station", foreignKey: "stationid"});
  station.hasMany(userday, { as: "userdays", foreignKey: "stationid"});
  checks.belongsTo(status, { as: "status", foreignKey: "statusid"});
  status.hasMany(checks, { as: "checks", foreignKey: "statusid"});
  doc.belongsTo(status, { as: "status", foreignKey: "statusid"});
  status.hasMany(doc, { as: "docs", foreignKey: "statusid"});
  orders.belongsTo(status, { as: "facebook", foreignKey: "facebookid"});
  status.hasMany(orders, { as: "orders", foreignKey: "facebookid"});
  orders.belongsTo(status, { as: "otkyda", foreignKey: "otkydaid"});
  status.hasMany(orders, { as: "otkyda_orders", foreignKey: "otkydaid"});
  orders.belongsTo(status, { as: "statusdelivery", foreignKey: "statusdeliveryid"});
  status.hasMany(orders, { as: "statusdelivery_orders", foreignKey: "statusdeliveryid"});
  orders.belongsTo(status, { as: "statusorder", foreignKey: "statusorderid"});
  status.hasMany(orders, { as: "statusorder_orders", foreignKey: "statusorderid"});
  checkitem.belongsTo(stock, { as: "stock", foreignKey: "stockid"});
  stock.hasMany(checkitem, { as: "checkitems", foreignKey: "stockid"});
  stockinterval.belongsTo(stock, { as: "stock", foreignKey: "stockid"});
  stock.hasMany(stockinterval, { as: "stockintervals", foreignKey: "stockid"});
  stockitem.belongsTo(stock, { as: "stock", foreignKey: "stockid"});
  stock.hasMany(stockitem, { as: "stockitems", foreignKey: "stockid"});
  stocktostation.belongsTo(stock, { as: "stock", foreignKey: "stockid"});
  stock.hasMany(stocktostation, { as: "stocktostations", foreignKey: "stockid"});
  cashes.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(cashes, { as: "cashs", foreignKey: "storeid"});
  clientextrabonus.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(clientextrabonus, { as: "clientextrabonus", foreignKey: "storeid"});
  contracttransaction.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(contracttransaction, { as: "contracttransactions", foreignKey: "storeid"});
  doc.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(doc, { as: "docs", foreignKey: "storeid"});
  doc.belongsTo(stores, { as: "store2", foreignKey: "store2id"});
  stores.hasMany(doc, { as: "store2_docs", foreignKey: "store2id"});
  magplan.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(magplan, { as: "magplans", foreignKey: "storeid"});
  message.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(message, { as: "messages", foreignKey: "storeid"});
  moneydoc.belongsTo(stores, { as: "store2", foreignKey: "store2id"});
  stores.hasMany(moneydoc, { as: "moneydocs", foreignKey: "store2id"});
  moneydoc.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(moneydoc, { as: "store_moneydocs", foreignKey: "storeid"});
  moneydoc.belongsTo(stores, { as: "createdbystore", foreignKey: "createdbystoreid"});
  stores.hasMany(moneydoc, { as: "createdbystore_moneydocs", foreignKey: "createdbystoreid"});
  moneymove.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(moneymove, { as: "moneymoves", foreignKey: "storeid"});
  station.belongsTo(stores, { as: "store", foreignKey: "storesid"});
  stores.hasMany(station, { as: "stations", foreignKey: "storesid"});
  store.belongsTo(stores, { as: "store", foreignKey: "storesid"});
  stores.hasMany(store, { as: "stores", foreignKey: "storesid"});
  storemove.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(storemove, { as: "storemoves", foreignKey: "storeid"});
  usertransaction.belongsTo(stores, { as: "store", foreignKey: "storeid"});
  stores.hasMany(usertransaction, { as: "usertransactions", foreignKey: "storeid"});
  stores.belongsTo(storestype, { as: "storestype", foreignKey: "storestypeid"});
  storestype.hasMany(stores, { as: "stores", foreignKey: "storestypeid"});
  doc.belongsTo(supplier, { as: "supplier", foreignKey: "supplierid"});
  supplier.hasMany(doc, { as: "docs", foreignKey: "supplierid"});
  moneydoc.belongsTo(supplier, { as: "supplier", foreignKey: "supplierid"});
  supplier.hasMany(moneydoc, { as: "moneydocs", foreignKey: "supplierid"});
  moneymove.belongsTo(supplier, { as: "supplier", foreignKey: "supplierid"});
  supplier.hasMany(moneymove, { as: "moneymoves", foreignKey: "supplierid"});
  clienttag.belongsTo(tag, { as: "tag", foreignKey: "tagid"});
  tag.hasMany(clienttag, { as: "clienttags", foreignKey: "tagid"});
  itemtag.belongsTo(tag, { as: "tag", foreignKey: "tagid"});
  tag.hasMany(itemtag, { as: "itemtags", foreignKey: "tagid"});
  tag.belongsTo(taggroup, { as: "taggroup", foreignKey: "taggroupid"});
  taggroup.hasMany(tag, { as: "tags", foreignKey: "taggroupid"});
  usertransaction.belongsTo(userday, { as: "userday", foreignKey: "userdayid"});
  userday.hasMany(usertransaction, { as: "usertransactions", foreignKey: "userdayid"});
  checks.belongsTo(users, { as: "closedby_user", foreignKey: "closedby"});
  users.hasMany(checks, { as: "checks", foreignKey: "closedby"});
  day.belongsTo(users, { as: "closeby_user", foreignKey: "closeby"});
  users.hasMany(day, { as: "days", foreignKey: "closeby"});
  day.belongsTo(users, { as: "openby_user", foreignKey: "openby"});
  users.hasMany(day, { as: "openby_days", foreignKey: "openby"});
  deposit.belongsTo(users, { as: "user", foreignKey: "usersid"});
  users.hasMany(deposit, { as: "deposits", foreignKey: "usersid"});
  doc.belongsTo(users, { as: "openby_user", foreignKey: "openby"});
  users.hasMany(doc, { as: "docs", foreignKey: "openby"});
  doc.belongsTo(users, { as: "okby_user", foreignKey: "okby"});
  users.hasMany(doc, { as: "okby_docs", foreignKey: "okby"});
  doclogs.belongsTo(users, { as: "user", foreignKey: "usersid"});
  users.hasMany(doclogs, { as: "doclogs", foreignKey: "usersid"});
  log.belongsTo(users, { as: "user", foreignKey: "usersid"});
  users.hasMany(log, { as: "logs", foreignKey: "usersid"});
  moneydoc.belongsTo(users, { as: "okby_user", foreignKey: "okby"});
  users.hasMany(moneydoc, { as: "moneydocs", foreignKey: "okby"});
  moneydoc.belongsTo(users, { as: "openby_user", foreignKey: "openby"});
  users.hasMany(moneydoc, { as: "openby_moneydocs", foreignKey: "openby"});
  moneydoc.belongsTo(users, { as: "user", foreignKey: "usersid"});
  users.hasMany(moneydoc, { as: "users_moneydocs", foreignKey: "usersid"});
  moneymove.belongsTo(users, { as: "user", foreignKey: "usersid"});
  users.hasMany(moneymove, { as: "moneymoves", foreignKey: "usersid"});
  orders.belongsTo(users, { as: "creatingby_user", foreignKey: "creatingby"});
  users.hasMany(orders, { as: "orders", foreignKey: "creatingby"});
  orders.belongsTo(users, { as: "deliveryman", foreignKey: "deliverymanid"});
  users.hasMany(orders, { as: "deliveryman_orders", foreignKey: "deliverymanid"});
  orders.belongsTo(users, { as: "openby_user", foreignKey: "openby"});
  users.hasMany(orders, { as: "openby_orders", foreignKey: "openby"});
  orders.belongsTo(users, { as: "createby_user", foreignKey: "createby"});
  users.hasMany(orders, { as: "createby_orders", foreignKey: "createby"});
  orders.belongsTo(users, { as: "closeby_user", foreignKey: "closeby"});
  users.hasMany(orders, { as: "closeby_orders", foreignKey: "closeby"});
  orders.belongsTo(users, { as: "controledby_user", foreignKey: "controledby"});
  users.hasMany(orders, { as: "controledby_orders", foreignKey: "controledby"});
  usercoordinate.belongsTo(users, { as: "user", foreignKey: "usersid"});
  users.hasMany(usercoordinate, { as: "usercoordinates", foreignKey: "usersid"});
  userday.belongsTo(users, { as: "user", foreignKey: "usersid"});
  users.hasMany(userday, { as: "userdays", foreignKey: "usersid"});
  userspercent.belongsTo(users, { as: "user", foreignKey: "usersid"});
  users.hasMany(userspercent, { as: "userspercents", foreignKey: "usersid"});
  usertransaction.belongsTo(users, { as: "user", foreignKey: "usersid"});
  users.hasMany(usertransaction, { as: "usertransactions", foreignKey: "usersid"});
  accessusers.belongsTo(usersgroup, { as: "usersgroup", foreignKey: "usersgroupid"});
  usersgroup.hasMany(accessusers, { as: "accessusers", foreignKey: "usersgroupid"});
  asrticleusers.belongsTo(usersgroup, { as: "usersgroup", foreignKey: "usersgroupid"});
  usersgroup.hasMany(asrticleusers, { as: "asrticleusers", foreignKey: "usersgroupid"});
  users.belongsTo(usersgroup, { as: "usersgroup", foreignKey: "usersgroupid"});
  usersgroup.hasMany(users, { as: "users", foreignKey: "usersgroupid"});
  usersgrouppercent.belongsTo(usersgroup, { as: "usersgroup", foreignKey: "usersgroupid"});
  usersgroup.hasMany(usersgrouppercent, { as: "usersgrouppercents", foreignKey: "usersgroupid"});
  wish.belongsTo(wishgroup, { as: "wishgroup", foreignKey: "wishgroupid"});
  wishgroup.hasMany(wish, { as: "wishes", foreignKey: "wishgroupid"});

  return {
    access,
    accessusers,
    aeroflottransaction,
    article,
    asrticleusers,
    barcode,
    box,
    cardpay,
    cashes,
    cashestopayment,
    change,
    changepass,
    checkchange,
    checkitem,
    checkitemhistory,
    checkkomplekt,
    checkpayment,
    checkpaymenttomoneydoc,
    checks,
    checktook,
    client,
    clientaccount,
    clientcontact,
    clientcontract,
    clientdate,
    clientdiscountitemgroup,
    clientextrabonus,
    clientgroup,
    clientgroupdiscountitemgroup,
    clientgroupinterval,
    clientinterval,
    clientlevel,
    clientphone,
    clienttag,
    clienttoupload,
    clienttransaction,
    contacttype,
    contracttransaction,
    currency,
    day,
    department,
    deposit,
    discount,
    discountclient,
    discountitem,
    discounttostation,
    doc,
    doc6partition,
    docbox,
    docitem,
    docitem16,
    docitem20,
    docitem23,
    docitem8,
    docitem8_time,
    docitem_time,
    docitemlog,
    dockomplekt,
    doclog,
    doclogs,
    docpayment,
    doctook,
    exceldownload,
    florasync,
    florasyncnow,
    florasyncqueue,
    ids,
    item,
    itemaltname,
    itembind,
    itembox,
    itemgroup,
    itemgroupbind,
    itemgrouponstation,
    itemimage,
    itemmeasure,
    itemsoot,
    itemtag,
    itemtoupload,
    komplekt,
    labelprint,
    license,
    log,
    magplan,
    measure,
    message,
    messagefront,
    moneydoc,
    moneydocitem,
    moneymove,
    nalog,
    nds,
    newversion,
    operation,
    ordercomment,
    orders,
    ordertostation,
    orderwish,
    organization,
    payment,
    paymenttostation,
    price,
    priceformula,
    pricehistory,
    pricelist,
    pricelog,
    pricelog2,
    printing,
    promocode,
    promocodegroup,
    promocodetostation,
    pushmessage,
    refresh,
    schet,
    sender,
    senderdoc,
    senderdocitem,
    senderlog,
    settings,
    smstext,
    station,
    status,
    stock,
    stockinterval,
    stockitem,
    stocktostation,
    store,
    storemove,
    storemove_time,
    stores,
    storestype,
    supplier,
    synchistory,
    tag,
    taggroup,
    tcd,
    timecheckitem,
    timeitemmeasure,
    timekomplekt,
    todelete,
    toupload,
    usercoordinate,
    userday,
    userpercentstage,
    users,
    usersgroup,
    usersgrouppercent,
    userspercent,
    usertablereport,
    usertransaction,
    wish,
    wishgroup,
    xxx,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
