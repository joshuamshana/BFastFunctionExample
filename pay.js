exports.pay  = (req, res)=>{
    res.json({message: 'payment methods work'});
};

exports.verifyPay = function(req, res){
    res.json({message: 'verify pay'});
}

exports.joshua = (req, res)=>{
    res.json({message: 'joshua function works'});
}
