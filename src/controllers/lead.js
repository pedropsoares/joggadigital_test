const Lead = require('../models/lead');
const LeadController = {
    store: async (req, res)  => {
        try{
            const lead = await Lead.create(req.body);
            
            return res.status(201).send({ lead, message: 'Lead criado com sucesso!' });
        } catch (err){
            return res.status(400).send({
                error: true,
                message: err.message
            })
        }
    },
    index: async (req, res) => {
        try{
            const leads = await Lead.find();
            
            return res.status(200).send({ leads });
        } catch (err){
            return res.status(400).send({
                error: true,
                message: err.message
            })
        }
    },
    get: async (req, res) => {
        try{
            const lead = await Lead.findById(req.params.id);

            return res.status(200).send(lead);
        } catch (err){
            return res.status(400).send({
                error: true,
                message: err.message
            })
        } 
    },
    update: async (req, res) => {
        try{
            await Lead.updateOne({ _id: req.params.id }, req.body);
            const lead = await Lead.findById(req.params.id);
            return res.status(200).send({ lead, message: 'Lead atualizado com sucesso!' });
        } catch (err){
            return res.status(400).send({
                error: true,
                message: err.message
            })
        } 
    },
    delete: async (req, res) => {
        try{
            await Lead.deleteOne({ _id: req.params.id });
            
            return res.status(200).send({  message: 'Lead excluido com sucesso!' });
        } catch (err){
            return res.status(400).send({
                error: true,
                message: err.message
            })
        }
    }
};

module.exports = LeadController;