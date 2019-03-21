'use strict';

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    let id = parseInt(req.param.id);
    let msg = "";

    if (id == "123")
        msg = "Excluído com sucesso";
    else
        msg = "Não é possível excluir o item " + id;

    res.status(200).send({
        id: id,
        item: req.body,
        message: msg
    });
};