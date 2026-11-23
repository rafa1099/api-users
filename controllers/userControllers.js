import { prisma } from "../lib/prisma.js";

export const createUser = async (req, res) => {
    try {
        const {name, email, age} = req.body
        const user = await prisma.user.create({
            data:{name, email, age:Number(age)}
        })
        res.json(({message:'User created succesfully', user}))
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getAllUser = async (req, res) => {
    try {
        const user = await prisma.user.findMany()
        res.json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getUserById = async (req, res) => {
    try {
        const {id} = req.params
        const user = await prisma.user.findUnique({
            where:{id :Number(id)}
        })
        if (!user) {
            res.status(404).json({message:"User not found"})
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const {name, email, age} = req.body
        const user = await prisma.user.update({
            where:{id :Number(id)},
            data:{name, email, age:Number(age)}
        })
        res.json(({message:'User updated succesfully', user}))
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

 export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await prisma.user.delete({
             where:{id :Number(id)}
        })
        res.json(({message:'User deleted succesfully', user}))
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}