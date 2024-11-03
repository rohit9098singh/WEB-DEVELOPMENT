const zod=require("zod");

const createTodo = zod.object({
    title: zod.string().min(4, "Title cannot be empty"),
    description: zod.string().max(50, "Make it short; cannot go beyond 50 characters").optional()
});


const updateTodo=zod.object({
    id:zod.string().length(24,"Invalid id fromat"),
    title:zod.string().optional(),
    description:zod.string().optional()
})

module.exports={
    createTodo,
    updateTodo
}
























/**
 * IF REQUIRED WE CAN GO FOR A VALIDATION OF THIS THINGS ALSO LIKE THIS 
 * 
        * // Validation schema for creating a user
        const createUser = zod.object({
            name: zod.string().min(1, "Name cannot be empty"),
            email: zod.string().email("Invalid email format")
        });

        // Validation schema for updating a user
        const updateUser = zod.object({
            id: zod.string().length(24, "Invalid ID format"),
            name: zod.string().optional(),
            email: zod.string().optional().email("Invalid email format")
        });

        // Validation schema for creating a product
        const createProduct = zod.object({
            productName: zod.string().min(1, "Product name cannot be empty"),
            price: zod.number().positive("Price must be a positive number")
        });

        // Validation schema for updating a product
        const updateProduct = zod.object({
            id: zod.string().length(24, "Invalid ID format"),
            productName: zod.string().optional(),
            price: zod.number().optional().positive("Price must be a positive number")
        });

        module.exports = {
            createTodo,
            updateTodo,
            createUser,
            updateUser,
            createProduct,
            updateProduct
        };
 */