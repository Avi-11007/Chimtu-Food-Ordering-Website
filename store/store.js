import create from "zustand"

export const useStore = create(
    (set) => ({
        //cart
        cart: {
            pizzas: []
        },

        //add pizzas in cart
        addPizza: (data) =>
            set((state) => ({
                cart: {
                    pizzas: [...state.cart.pizzas, data]
                }
            })),
         //remove pizzas
        removePizza: (index) =>
            set((state) => ({
                cart: {
                    pizzas: [...state.cart.pizzas.filter((_, i) => i != index)]
                }
            })),
        //reset cart

        resetCart: () => 
            set(() => ({
                cart: {
                    pizzas:[]
                }

            }))
        
    })
)