exports.pay  = (req, res)=>{
    res.json({message: 'payment methods work'});
};

exports.verifyPay = function(req, res){
    res.json({message: 'verify pay'});
}

exports.test = (req, res)=>{
     res.json({message: 'test function works'});
}


