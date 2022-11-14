import { read } from "fs";
import sequelizeInstance from "../database/database.js";
import initModels from "../tables/init-models.js";

const { categories } = initModels(sequelizeInstance);

export const getCategories = async (_, res) => {
  try {
    const categoriesResponse = await categories.findAll();
    res.status(200).json(categoriesResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const postCategories = async (req, res) => {
  try {
    if (!req.body) res.status(400).json("los datos enviados no son lo esperados.");

    const categoriesResponse = await categories.create({
      name: req.body.name,
      father: req.body.father,
      status: req.body.status,
      identifier: req.body.identifier,
      query_identifier: req.body.query_identifier,
      attributes: req.body.attributes,
      outstanding: req.body.outstanding,
      total_sales: req.body.total_sales,
      total_visits: req.body.total_visits,
      cover_id: req.body.cover_id,
      total_products: req.body.total_products,
      language_id: req.body.language_id,
      original_text: req.body.original_text,
      creator_user_id: req.body.creator_user_id,
      modifier_user_id: req.body.modifier_user_id,
      time_created: Date.now(),
      time_updated: null,
    });

    res.status(200).json(categoriesResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const putCategories = async (req, res) => {
  try {
    if (!req.body || !req.params) res.status(400).json("los datos enviados no son lo esperados.");

    const categoriesResponse = await categories.update(
      {
        name: req.body.name,
        father: req.body.father,
        status: req.body.status,
        identifier: req.body.identifier,
        query_identifier: req.body.query_identifier,
        attributes: req.body.attributes,
        outstanding: req.body.outstanding,
        total_sales: req.body.total_sales,
        total_visits: req.body.total_visits,
        cover_id: req.body.cover_id,
        total_products: req.body.total_products,
        language_id: req.body.language_id,
        original_text: req.body.original_text,
        creator_user_id: req.body.creator_user_id,
        modifier_user_id: req.body.modifier_user_id,
        time_updated: Date.now()
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).json(categoriesResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCategories = async (req, res) => {
  try {
    if(!req.params) res.status(400).json("Debe enviar un id de categoria.");

    const categoriesResponse = await categories.destroy({
        where: { id: req.params.id }
    });

    res.status(200).json(categoriesResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getCategoriesById = async (req, res) => {
  try {
    if(!req.params) res.status(400).json("Debe enviar un id de categoria.");

    const categoriesResponse = await categories.findOne({ 
        where: { id: req.params.id } 
    });

    res.status(200).json(categoriesResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};