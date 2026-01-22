const Todo = require("../models/todoModel");


const addTodo = async (req, res) => {
    try {
        const { title, dis, endDate, isPrimary } = req.body;

        const todo = new Todo({
            title: title,
            dis: dis,
            endDate: endDate,
            isPrimary: isPrimary
        })

        await todo.save();
        res.status(201).json({ "data": todo });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneBytitle = async (req, res) => {
    try {
        // const { title } = req.body;
        const todo = await Todo.findById(
            { _id: "695363bb7e795a460904da27" },
            { createdAt: 1, updatedAt: 1, __v: 1, _id: 0 }
        );
        res.status(200).json(todo);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// find(
// {}, filter
// {}  projection 
// )

const updateById = async (req, res) => {
    try {
        const { id, title, dis } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            {
                title: title,
                dis: dis
            }
        );

        res.status(200).json({ "data": todo });

    } catch (error) {
        res.status(500).json({ "message": error.message })
    }
}


const deleteById = async (req, res) => {
    try {
        const id = req.params.id;

        const todo = await Todo.findByIdAndDelete({
            _id: id
        })

        res.status(200).json({ "data": todo });
    } catch (error) {
        res.status(500).json({ "message": error.message })
    }
}



module.exports = { addTodo, getOneBytitle, updateById, deleteById }