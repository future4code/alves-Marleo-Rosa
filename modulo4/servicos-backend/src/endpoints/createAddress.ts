import axios from "axios";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import getAddressInfo from "../services/selectAddress";
import transporter from "../services/nodeMailerTransport";
// import getAddressInfo from "../services/getAddressInfo";
import { Address } from "../types";
import dotenv from 'dotenv'
import selectAddress from "../services/selectAddress";

dotenv.config()

const createAddress = async (req: Request, res: Response) => {
   try {
      const { cep } = req.params
      const { bairro } = req.body
      const address = await selectAddress(cep, bairro)
      console.log(address)
      if (!address) {
         res.status(404)
         throw new Error("Endereço não encontrado");
      }

      const infoAddress: Address = {
         cep: address.cep,
         logradouro: address.logradouro,
         numero: Number(address.ibge),
         complemento: address.complemento,
         bairro: address.bairro ? address.bairro : bairro,
         cidade: address.localidade,
         estado: address.uf
      }

      await insertAddress(infoAddress)
      res.status(201).send(infoAddress)

   } catch (error) {
      throw new Error();
   }
}

export default createAddress